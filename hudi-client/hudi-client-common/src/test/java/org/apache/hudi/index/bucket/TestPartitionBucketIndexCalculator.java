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

package org.apache.hudi.index.bucket;

import org.apache.hudi.common.testutils.HoodieCommonTestHarness;
import org.apache.hudi.exception.HoodieException;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.Arguments;

import java.io.IOException;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class TestPartitionBucketIndexCalculator extends HoodieCommonTestHarness {

  private static final String DEFAULT_RULE = "regex";
  private static final String DEFAULT_EXPRESSIONS = "\\d{4}-(06-(01|17|18)|11-(01|10|11)),256";
  private static final int DEFAULT_BUCKET_NUMBER = 10;
  private PartitionBucketIndexCalculator calc;

  void setUp(String expression, String rule, int defaultBucketNumber) throws IOException {
    initMetaClient();
    PartitionBucketIndexUtils.initHashingConfig(metaClient, expression, rule, defaultBucketNumber, null);
    this.calc = PartitionBucketIndexCalculator.getInstance(PartitionBucketIndexUtils.INITIAL_HASHING_CONFIG_INSTANT, metaClient);
  }

  /**
   * Test basic regex rule matching
   */
  @ParameterizedTest(name = "Partition {0} should map to bucket {1}")
  @MethodSource("providePartitionsAndExpectedBuckets")
  void testBasicRegexRuleMatching(String partition, int expectedBucket) throws IOException {
    setUp(DEFAULT_EXPRESSIONS, DEFAULT_RULE, DEFAULT_BUCKET_NUMBER);
    assertEquals(expectedBucket, calc.computeNumBuckets(partition));
  }

  /**
   * Provide test data for parameterized tests
   */
  private static Stream<Arguments> providePartitionsAndExpectedBuckets() {
    return Stream.of(
        // Matching the regex pattern - should get bucket 256
        Arguments.of("2023-06-01", 256),
        Arguments.of("2023-06-17", 256),
        Arguments.of("2023-06-18", 256),
        Arguments.of("2023-11-01", 256),
        Arguments.of("2023-11-10", 256),
        Arguments.of("2023-11-11", 256),
        Arguments.of("2022-06-01", 256),
        Arguments.of("2021-11-10", 256),

        // Not matching the regex pattern - should get default bucket 10
        Arguments.of("2023-06-02", 10),
        Arguments.of("2023-06-19", 10),
        Arguments.of("2023-07-01", 10),
        Arguments.of("2023-11-12", 10),
        Arguments.of("2023-11-02", 10),
        Arguments.of("2023-05-01", 10),
        Arguments.of("not-a-date", 10),
        Arguments.of("", 10)
    );
  }

  @Test
  void testCaching() throws IOException {
    setUp(DEFAULT_EXPRESSIONS, DEFAULT_RULE, DEFAULT_BUCKET_NUMBER);
    // Calculate bucket number for the same partition multiple times
    String partition = "2023-06-01";

    // First call should calculate and cache
    int bucket1 = calc.computeNumBuckets(partition);
    assertEquals(256, bucket1);
    assertEquals(1, calc.getCacheSize());

    // Second call should use the cache
    int bucket2 = calc.computeNumBuckets(partition);
    assertEquals(256, bucket2);
    assertEquals(1, calc.getCacheSize());

    // Different partition should increase cache size
    calc.computeNumBuckets("2023-11-10");
    assertEquals(2, calc.getCacheSize());

    // Clear cache should reset size
    calc.clearCache();
    assertEquals(0, calc.getCacheSize());
  }

  /**
   * Test multiple regex rules with priority
   */
  @Test
  void testMultipleRegexRulesWithPriority() throws IOException {
    String expressions = "\\d{4}-06-01,256;\\d{4}-06-\\d{2},128;\\d{4}-11-\\d{2},64";
    setUp(expressions, DEFAULT_RULE, DEFAULT_BUCKET_NUMBER);
    PartitionBucketIndexCalculator calc = PartitionBucketIndexCalculator.getInstance(PartitionBucketIndexUtils.INITIAL_HASHING_CONFIG_INSTANT, metaClient);
    // Setup configuration with multiple rules

    // First rule should take priority
    assertEquals(256, calc.computeNumBuckets("2023-06-01"));

    // Second rule should match when first doesn't
    assertEquals(128, calc.computeNumBuckets("2023-06-02"));
    assertEquals(128, calc.computeNumBuckets("2023-06-30"));

    // Third rule should match for November dates
    assertEquals(64, calc.computeNumBuckets("2023-11-01"));
    assertEquals(64, calc.computeNumBuckets("2023-11-30"));

    // Default for non-matching partitions
    assertEquals(10, calc.computeNumBuckets("2023-07-01"));
    assertEquals(10, calc.computeNumBuckets("2023-12-25"));
  }

  /**
   * Test invalid regex expressions
   */
  @Test
  void testInvalidExpressions() {
    assertThrows(HoodieException.class, () -> setUp("\\d{4-06-01256", DEFAULT_RULE, DEFAULT_BUCKET_NUMBER));
    assertThrows(HoodieException.class, () -> setUp("\\d{4}-06-01,a", DEFAULT_RULE, DEFAULT_BUCKET_NUMBER));
  }
}
