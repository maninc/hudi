/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.table.action.commit;

import org.apache.hudi.common.engine.HoodieEngineContext;
import org.apache.hudi.common.model.HoodieKey;
import org.apache.hudi.common.model.HoodieRecordLocation;
import org.apache.hudi.common.model.WriteOperationType;
import org.apache.hudi.common.util.Option;
import org.apache.hudi.common.util.StringUtils;
import org.apache.hudi.common.util.ValidationUtils;
import org.apache.hudi.common.util.collection.Pair;
import org.apache.hudi.config.HoodieWriteConfig;
import org.apache.hudi.exception.HoodieException;
import org.apache.hudi.index.bucket.BucketIdentifier;
import org.apache.hudi.index.bucket.HoodieBucketIndex;
import org.apache.hudi.index.bucket.PartitionBucketIndexCalculator;
import org.apache.hudi.table.HoodieTable;
import org.apache.hudi.table.WorkloadProfile;
import org.apache.hudi.table.WorkloadStat;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import scala.Tuple2;

import static org.apache.hudi.common.model.WriteOperationType.INSERT_OVERWRITE;
import static org.apache.hudi.common.model.WriteOperationType.INSERT_OVERWRITE_TABLE;

/**
 * Packs incoming records to be inserted into buckets (1 bucket = 1 RDD partition).
 *
 * For Partition Level bucket index
 * Creates direct lookup arrays during initialization, Provides O(1) lookup time for partition path and bucket ID,
 * The trade-off is a small amount of additional memory usage for the lookup arrays.
 */
public class SparkBucketIndexPartitioner<T> extends SparkHoodiePartitioner<T> {

  private final int totalPartitions;
  private boolean isPartitionBucketIndexEnable = false;
  private PartitionBucketIndexCalculator calc;
  private int numBuckets;
  private final String indexKeyField;
  private final int totalPartitionPaths;
  private final List<String> partitionPaths;
  /**
   * Helps get the RDD partition id, partition id is partition offset + bucket id.
   * The partition offset is a multiple of the bucket num.
   */
  private final Map<String, Integer> partitionPathOffset;
  private final boolean isOverwrite;

  /**
   * Partition path and file groups in it pair. Decide the file group an incoming update should go to.
   */
  private Map<String, Set<String>> updatePartitionPathFileIds;

  private final boolean isNonBlockingConcurrencyControl;
  /**
   * Direct mapping from partition number to partition path
   */
  private String[] partitionNumberToPath;

  /**
   * Direct mapping from partition number to local bucket ID
   */
  private Integer[] partitionNumberToLocalBucketId;

  public SparkBucketIndexPartitioner(WorkloadProfile profile,
                                     HoodieEngineContext context,
                                     HoodieTable table,
                                     HoodieWriteConfig config) {
    super(profile, table);
    if (!(table.getIndex() instanceof HoodieBucketIndex)) {
      throw new HoodieException(
          " Bucket index partitioner should only be used by BucketIndex other than "
              + table.getIndex().getClass().getSimpleName());
    }
    String hashingInstantToLoad = table.getConfig().getHashingConfigInstantToLoad();
    this.isPartitionBucketIndexEnable = StringUtils.nonEmpty(hashingInstantToLoad);
    if (isPartitionBucketIndexEnable) {
      calc = PartitionBucketIndexCalculator.getInstance(hashingInstantToLoad, table.getMetaClient());
    }
    this.numBuckets = ((HoodieBucketIndex) table.getIndex()).getNumBuckets();
    this.indexKeyField = config.getBucketIndexHashField();
    this.totalPartitionPaths = profile.getPartitionPaths().size();
    partitionPaths = new ArrayList<>(profile.getPartitionPaths());
    partitionPathOffset = new HashMap<>();
    int i = 0;
    for (Object partitionPath : profile.getPartitionPaths()) {
      partitionPathOffset.put(partitionPath.toString(), i);
      if (isPartitionBucketIndexEnable) {
        i += calc.computeNumBuckets(partitionPath.toString());
      } else {
        i += numBuckets;
      }
    }
    this.totalPartitions = i;
    assignUpdates(profile);
    WriteOperationType operationType = profile.getOperationType();
    this.isOverwrite = INSERT_OVERWRITE.equals(operationType) || INSERT_OVERWRITE_TABLE.equals(operationType);
    this.isNonBlockingConcurrencyControl = config.isNonBlockingConcurrencyControl();

    if (isPartitionBucketIndexEnable) {
      this.partitionNumberToPath = new String[totalPartitions];
      this.partitionNumberToLocalBucketId = new Integer[totalPartitions];

      for (String partitionPath : partitionPaths) {
        int offset = partitionPathOffset.get(partitionPath);
        int numBuckets = calc.computeNumBuckets(partitionPath);

        for (int j = 0; j < numBuckets; j++) {
          int partitionNumber = offset + j;
          partitionNumberToPath[partitionNumber] = partitionPath;
          partitionNumberToLocalBucketId[partitionNumber] = j;
        }
      }
    }
  }

  private void assignUpdates(WorkloadProfile profile) {
    updatePartitionPathFileIds = new HashMap<>();
    // each update location gets a partition
    Set<Entry<String, WorkloadStat>> partitionStatEntries = profile.getInputPartitionPathStatMap()
        .entrySet();
    for (Entry<String, WorkloadStat> partitionStat : partitionStatEntries) {
      if (!updatePartitionPathFileIds.containsKey(partitionStat.getKey())) {
        updatePartitionPathFileIds.put(partitionStat.getKey(), new HashSet<>());
      }
      for (Entry<String, Pair<String, Long>> updateLocEntry :
          partitionStat.getValue().getUpdateLocationToCount().entrySet()) {
        updatePartitionPathFileIds.get(partitionStat.getKey()).add(updateLocEntry.getKey());
      }
    }
  }

  @Override
  public BucketInfo getBucketInfo(int bucketNumber) {
    Pair<Integer, String> res = computeBucketAndPartitionPath(bucketNumber);
    int bucket = res.getLeft();
    String partitionPath = res.getRight();
    // Insert overwrite always generates new bucket file id
    if (isOverwrite) {
      ValidationUtils.checkArgument(!isNonBlockingConcurrencyControl,
          "Insert overwrite is not supported with non-blocking concurrency control");
      return new BucketInfo(BucketType.INSERT, BucketIdentifier.newBucketFileIdPrefix(bucket), partitionPath);
    }
    Option<String> fileIdOption = Option.fromJavaOptional(updatePartitionPathFileIds
        .getOrDefault(partitionPath, Collections.emptySet()).stream()
        .filter(e -> e.startsWith(BucketIdentifier.bucketIdStr(bucket)))
        .findFirst());
    if (fileIdOption.isPresent()) {
      return new BucketInfo(BucketType.UPDATE, fileIdOption.get(), partitionPath);
    } else {
      // Always write into log file instead of base file if using NB-CC
      if (isNonBlockingConcurrencyControl) {
        String fileId = BucketIdentifier.newBucketFileIdForNBCC(bucket);
        return new BucketInfo(BucketType.UPDATE, fileId, partitionPath);
      }
      String fileIdPrefix = BucketIdentifier.newBucketFileIdPrefix(bucket);
      return new BucketInfo(BucketType.INSERT, fileIdPrefix, partitionPath);
    }
  }

  private Pair<Integer, String> computeBucketAndPartitionPath(int bucketNumber) {
    Integer bucket;
    String partitionPath;
    if (isPartitionBucketIndexEnable) {
      bucket = partitionNumberToLocalBucketId[bucketNumber];
      partitionPath = partitionNumberToPath[bucketNumber];
      ValidationUtils.checkArgument(bucket != null && partitionPath != null);
    } else {
      bucket = bucketNumber % numBuckets;
      partitionPath = partitionPaths.get(bucketNumber / numBuckets);
    }
    return Pair.of(bucket, partitionPath);
  }

  @Override
  public int numPartitions() {
    return totalPartitions;
  }

  @Override
  public int getPartition(Object key) {
    Tuple2<HoodieKey, Option<HoodieRecordLocation>> keyLocation = (Tuple2<HoodieKey, Option<HoodieRecordLocation>>) key;
    String partitionPath = keyLocation._1.getPartitionPath();
    Option<HoodieRecordLocation> location = keyLocation._2;
    int bucketId = location.isPresent()
        ? BucketIdentifier.bucketIdFromFileId(location.get().getFileId())
        : BucketIdentifier.getBucketId(keyLocation._1.getRecordKey(), indexKeyField,
        isPartitionBucketIndexEnable ? calc.computeNumBuckets(partitionPath) : numBuckets);
    return partitionPathOffset.get(partitionPath) + bucketId;
  }
}
