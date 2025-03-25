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

package org.apache.hudi.index.bucket.partition;

import java.io.Serializable;

/**
 * Interface for rule engines that calculate bucket numbers.
 */
interface RuleEngine extends Serializable {
  /**
   * Calculate bucket number for a partition path.
   * @param partitionPath The partition path.
   * @return The calculated bucket number, or -1 if no rule matches.
   */
  int calculateBucketNumber(String partitionPath);
}