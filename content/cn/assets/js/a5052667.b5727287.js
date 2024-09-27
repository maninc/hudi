"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[19801],{27334:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const n={title:"Apache Hudi Stack",summary:"Explains about the various layers of software components that make up Hudi",toc:!0,toc_min_heading_level:2,toc_max_heading_level:3,last_modified_at:null},r=void 0,o={id:"hudi_stack",title:"Apache Hudi Stack",description:"Apache Hudi is a Transactional Data Lakehouse Platform built around a database kernel. It brings core warehouse and database functionality directly to a data lake thereby providing a table-level abstraction over open file formats like Apache Parquet/ORC (more recently known as the lakehouse architecture) and enabling transactional capabilities such as updates/deletes. Hudi also incorporates essential table services that are tightly integrated with the database kernel. These services can be executed automatically across both ingested and derived data to manage various aspects such as table bookkeeping, metadata, and storage layout. This integration along with various platform-specific services extends Hudi's role from being just a 'table format' to a comprehensive and robust data lakehouse platform.",source:"@site/versioned_docs/version-0.15.0/hudi_stack.md",sourceDirName:".",slug:"/hudi_stack",permalink:"/cn/docs/hudi_stack",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/hudi_stack.md",tags:[],version:"0.15.0",frontMatter:{title:"Apache Hudi Stack",summary:"Explains about the various layers of software components that make up Hudi",toc:!0,toc_min_heading_level:2,toc_max_heading_level:3,last_modified_at:null},sidebar:"docs",previous:{title:"Use Cases",permalink:"/cn/docs/use_cases"},next:{title:"Timeline",permalink:"/cn/docs/timeline"}},l={},c=[{value:"Lake Storage",id:"lake-storage",level:2},{value:"File Formats",id:"file-formats",level:2},{value:"Transactional Database Layer",id:"transactional-database-layer",level:2},{value:"Table Format",id:"table-format",level:3},{value:"Indexes",id:"indexes",level:3},{value:"Table Services",id:"table-services",level:3},{value:"Clustering",id:"clustering",level:4},{value:"Compaction",id:"compaction",level:4},{value:"Cleaning",id:"cleaning",level:4},{value:"Indexing",id:"indexing",level:4},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"Lake Cache*",id:"lake-cache",level:3},{value:"Metaserver*",id:"metaserver",level:3},{value:"Programming APIs",id:"programming-apis",level:2},{value:"Writers",id:"writers",level:3},{value:"Readers",id:"readers",level:3},{value:"User Interface",id:"user-interface",level:2},{value:"Platform Services",id:"platform-services",level:3},{value:"Query Engines",id:"query-engines",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Apache Hudi is a Transactional ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"Data Lakehouse"})," Platform built around a database kernel. It brings core warehouse and database functionality directly to a data lake thereby providing a table-level abstraction over open file formats like Apache Parquet/ORC (more recently known as the lakehouse architecture) and enabling transactional capabilities such as updates/deletes. Hudi also incorporates essential table services that are tightly integrated with the database kernel. These services can be executed automatically across both ingested and derived data to manage various aspects such as table bookkeeping, metadata, and storage layout. This integration along with various platform-specific services extends Hudi's role from being just a 'table format' to a comprehensive and robust ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"data lakehouse"})," platform."]}),"\n",(0,t.jsxs)(a.p,{children:["In this section, we will explore the Hudi stack and deconstruct the layers of software components that constitute Hudi. The features marked with an asterisk (*) represent work in progress, and the dotted boxes indicate planned future work. These components collectively aim to fulfill the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-69/rfc-69.md",children:"vision"})," for the project."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Hudi Stack",src:i(49938).A+"",width:"2076",height:"1400"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Apache Hudi Architectural stack"})]}),"\n",(0,t.jsx)(a.h2,{id:"lake-storage",children:"Lake Storage"}),"\n",(0,t.jsxs)(a.p,{children:["The storage layer is where the data files (such as Parquet) are stored. Hudi interacts with the storage layer through the ",(0,t.jsx)(a.a,{href:"https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/FileSystem.html",children:"Hadoop FileSystem API"}),", enabling compatibility with various systems including HDFS for fast appends, and various cloud stores such as Amazon S3, Google Cloud Storage (GCS), and Azure Blob Storage. Additionally, Hudi offers its own storage APIs that can rely on Hadoop-independent file system implementation to simplify the integration of various file systems. Hudi adds a custom wrapper filesystem that lays out the foundation for improved storage optimizations."]}),"\n",(0,t.jsx)(a.h2,{id:"file-formats",children:"File Formats"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"File Format",src:i(91473).A+"",width:"7238",height:"3576"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: File format structure in Hudi"})]}),"\n",(0,t.jsx)(a.p,{children:"File formats hold the raw data and are physically stored on the lake storage. Hudi operates on logical structures of File Groups and File Slices, which consist of Base File and Log Files. Base Files are compacted and optimized for reads and are augmented with Log Files for efficient append. Future updates aim to integrate diverse formats like unstructured data (e.g., JSON, images), and compatibility with different storage layers in event-streaming, OLAP engines, and warehouses. Hudi's layout scheme encodes all changes to a Log File as a sequence of blocks (data, delete, rollback). By making data available in open file formats (such as Parquet), Hudi enables users to bring any compute engine for specific workloads."}),"\n",(0,t.jsx)(a.h2,{id:"transactional-database-layer",children:"Transactional Database Layer"}),"\n",(0,t.jsxs)(a.p,{children:["The transactional database layer of Hudi comprises the core components that are responsible for the fundamental operations and services that enable Hudi to store, retrieve, and manage data efficiently on ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"data lakehouse"})," storages."]}),"\n",(0,t.jsx)(a.h3,{id:"table-format",children:"Table Format"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Table Format",src:i(86534).A+"",width:"3172",height:"1296"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Apache Hudi's Table format"})]}),"\n",(0,t.jsx)(a.p,{children:"Drawing an analogy to file formats, a table format simply comprises the file layout of the table, the schema, and metadata tracking changes. Hudi organizes files within a table or partition into File Groups. Updates are captured in Log Files tied to these File Groups, ensuring efficient merges. There are three major components related to Hudi\u2019s table format."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Timeline"})," : Hudi's ",(0,t.jsx)(a.a,{href:"./timeline",children:"timeline"}),", stored in the /.hoodie folder, is a crucial event log recording all table actions in an ordered manner, with events kept for a specified period. Hudi uniquely designs each File Group as a self-contained log, enabling record state reconstruction through delta logs, even after archival of related actions. This approach effectively limits metadata size based on table activity frequency, essential for managing tables with frequent updates."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"File Group and File Slice"})," : Within each partition the data is physically stored as base and Log Files and organized into logical concepts as ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/tech-specs-1point0/#storage-layout",children:"File groups"})," and File Slices. File groups contain multiple versions of File Slices and are split into multiple File Slices. A File Slice comprises the Base and Log File. Each File Slice within the file-group is uniquely identified by the commit's timestamp that created it."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Metadata Table"})," : Implemented as a merge-on-read table, Hudi's ",(0,t.jsx)(a.a,{href:"./metadata",children:"metadata table"})," efficiently handles quick updates with low write amplification. It leverages the HFile format for quick, indexed key lookups, storing vital information like file paths, column statistics, bloom filters, and record indexes. This approach streamlines operations by reducing the necessity for expensive cloud file listings. The metadata table in Hudi acts as an additional ",(0,t.jsx)(a.a,{href:"./metadata#supporting-multi-modal-index-in-hudi",children:"indexing system"})," to uplevel the read and write performance."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Hudi\u2019s approach of recording updates into Log Files is more efficient and involves low merge overhead than systems like Hive ACID, where merging all delta records against all Base Files is required. Read more about the various table types in Hudi ",(0,t.jsx)(a.a,{href:"./table_types",children:"here"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"indexes",children:"Indexes"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Indexes",src:i(41100).A+"",width:"5082",height:"2078"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Indexes in Hudi"})]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"./indexing",children:"Indexes"})," in Hudi enhance query planning, minimizing I/O, speeding up response times and providing faster writes with low merge costs. Hudi\u2019s ",(0,t.jsx)(a.a,{href:"./metadata/#metadata-table-indices",children:"metadata table"})," brings the benefits of indexes generally to both the readers and writers. Compute engines can leverage various indexes in the metadata table, like file listings, column statistics, bloom filters, record-level indexes, and ",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md",children:"functional indexes"})," to quickly generate optimized query plans and improve read performance. In addition to the metadata table indexes, Hudi supports Simple, Bloom, HBase, and Bucket indexes, to efficiently locate File Groups containing specific record keys. Hudi also provides reader indexes such as ",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-63/rfc-63.md",children:"functional"})," and secondary indexes to boost reads. The table partitioning scheme in Hudi is consciously exploited for implementing global and non-global indexing strategies."]}),"\n",(0,t.jsx)(a.h3,{id:"table-services",children:"Table Services"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Table Services",src:i(16020).A+"",width:"6178",height:"3448"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Table services in Hudi"})]}),"\n",(0,t.jsx)(a.p,{children:"Apache Hudi offers various table services to help keep the table storage layout and metadata management performant. Hudi was designed with built-in table services that enables running them in inline, semi-asynchronous or full-asynchronous modes. Furthermore, Spark and Flink streaming writers can run in continuous mode, and invoke table services asynchronously sharing the underlying executors intelligently with writers. Let\u2019s take a look at these services."}),"\n",(0,t.jsx)(a.h4,{id:"clustering",children:"Clustering"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.a,{href:"./clustering",children:"clustering"})," service, akin to features in cloud data warehouses, allows users to group frequently queried records using sort keys or merge smaller Base Files into larger ones for optimal file size management. It's fully integrated with other timeline actions like cleaning and compaction, enabling smart optimizations such as avoiding compaction for File Groups undergoing clustering, thereby saving on I/O."]}),"\n",(0,t.jsx)(a.h4,{id:"compaction",children:"Compaction"}),"\n",(0,t.jsxs)(a.p,{children:["Hudi's ",(0,t.jsx)(a.a,{href:"./compaction",children:"compaction"})," service, featuring strategies like date partitioning and I/O bounding, merges Base Files with delta logs to create updated Base Files. It allows concurrent writes to the same File Froup, enabled by Hudi's file grouping and flexible log merging. This facilitates non-blocking execution of deletes even during concurrent record updates."]}),"\n",(0,t.jsx)(a.h4,{id:"cleaning",children:"Cleaning"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"http://hudi.apache.org/blog/2021/06/10/employing-right-configurations-for-hudi-cleaner",children:"Cleaner"})," service works off the timeline incrementally, removing File Slices that are past the configured retention period for incremental queries, while also allowing sufficient time for long running batch jobs (e.g Hive ETLs) to finish running. This allows users to reclaim storage space, thereby saving on costs."]}),"\n",(0,t.jsx)(a.h4,{id:"indexing",children:"Indexing"}),"\n",(0,t.jsxs)(a.p,{children:["Hudi's scalable metadata table contains auxiliary data about the table. This subsystem encompasses various indices, including files, column_stats, and bloom_filters, facilitating efficient record location and data skipping. Balancing write throughput with index updates presents a fundamental challenge, as traditional indexing methods, like locking out writes during indexing, are impractical for large tables due to lengthy processing times. Hudi addresses this with its innovative asynchronous ",(0,t.jsx)(a.a,{href:"./metadata_indexing",children:"metadata indexing"}),", enabling the creation of various indices without impeding writes. This approach not only improves write latency but also minimizes resource waste by reducing contention between writing and indexing activities."]}),"\n",(0,t.jsx)(a.h3,{id:"concurrency-control",children:"Concurrency Control"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"./concurrency_control",children:"Concurrency control"})," defines how different writers/readers coordinate access to the table. Hudi\u2019s way of publishing monotonically increasing timestamped commits to the timeline lays out the foundation for atomicity guarantees, clearly differentiating between writers (responsible for upserts/deletes), table services (focusing on storage optimization and bookkeeping), and readers (for query execution). Hudi provides snapshot isolation, offering a consistent view of the table across these different operations. It employs lock-free, non-blocking MVCC for concurrency between writers and table-services, as well as between different table services, and optimistic concurrency control (OCC) for multi-writers with early conflict detection. With ",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-69/rfc-69.md",children:"Hudi 1.0"}),", non-blocking concurrency control (",(0,t.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-66/rfc-66.md",children:"NBCC"}),") is introduced, allowing multiple writers to concurrently operate on the table with non-blocking conflict resolution."]}),"\n",(0,t.jsx)(a.h3,{id:"lake-cache",children:"Lake Cache*"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Lake Cache",src:i(8608).A+"",width:"5076",height:"2793"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Proposed Lake Cache in Hudi"})]}),"\n",(0,t.jsxs)(a.p,{children:["Data lakes today face a tradeoff between fast data writing and optimal query performance. Writing smaller files or logging deltas enhances writing speed, but superior query performance typically requires opening fewer files and pre-materializing merges. Most databases use a buffer pool to reduce storage access costs. Hudi\u2019s design supports creating a multi-tenant caching tier that can store pre-merged File Slices. Hudi\u2019s timeline can then be used to simply communicate caching policies. Traditionally, caching is near query engines or in-memory file systems. Integrating a ",(0,t.jsx)(a.a,{href:"https://issues.apache.org/jira/browse/HUDI-6489",children:"caching layer"})," with Hudi's transactional storage enables shared caching across query engines, supporting updates and deletions, and reducing costs. The goal is to build a buffer pool for lakes, compatible with all major engines, with the contributions from the rest of the community."]}),"\n",(0,t.jsx)(a.h3,{id:"metaserver",children:"Metaserver*"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Metaserver",src:i(74637).A+"",width:"5699",height:"2727"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Proposed Metaserver in Hudi"})]}),"\n",(0,t.jsxs)(a.p,{children:['Storing table metadata on lake storage, while scalable, is less efficient than RPCs to a scalable meta server. Hudi addresses this with its metadata server, called "metaserver," an efficient alternative for managing table metadata for a large number of tables. Currently, the timeline server, embedded in Hudi\'s writer processes, uses a local rocksDB store and ',(0,t.jsx)(a.a,{href:"https://javalin.io/",children:"Javalin"})," REST API to serve file listings, reducing cloud storage listings. Since version 0.6.0, there's a trend towards standalone timeline servers, aimed at horizontal scaling and improved security. These developments are set to create a more efficient lake ",(0,t.jsx)(a.a,{href:"https://issues.apache.org/jira/browse/HUDI-3345",children:"metastore"})," for future needs."]}),"\n",(0,t.jsx)(a.h2,{id:"programming-apis",children:"Programming APIs"}),"\n",(0,t.jsx)(a.h3,{id:"writers",children:"Writers"}),"\n",(0,t.jsxs)(a.p,{children:["Hudi tables can be used as sinks for Spark/Flink pipelines and the Hudi writing path provides several enhanced capabilities over file writing done by vanilla parquet/avro sinks. It categorizes write operations into incremental (",(0,t.jsx)(a.code,{children:"insert"}),", ",(0,t.jsx)(a.code,{children:"upsert"}),", ",(0,t.jsx)(a.code,{children:"delete"}),") and batch/bulk (",(0,t.jsx)(a.code,{children:"insert_overwrite"}),", ",(0,t.jsx)(a.code,{children:"delete_partition"}),", ",(0,t.jsx)(a.code,{children:"bulk_insert"}),") with specific functionalities. ",(0,t.jsx)(a.code,{children:"upsert"})," and ",(0,t.jsx)(a.code,{children:"delete"})," efficiently merge records with identical keys and integrate with the file sizing mechanism, while ",(0,t.jsx)(a.code,{children:"insert"})," operations smartly bypass certain steps like pre-combining, maintaining pipeline benefits. Similarly, ",(0,t.jsx)(a.code,{children:"bulk_insert"})," operation offers control over file sizes for data imports. Batch operations integrate MVCC for seamless transitions between incremental and batch processing. Additionally, the write pipeline includes optimizations like handling large merges via rocksDB and concurrent I/O, enhancing write performance."]}),"\n",(0,t.jsx)(a.h3,{id:"readers",children:"Readers"}),"\n",(0,t.jsx)(a.p,{children:"Hudi provides snapshot isolation for writers and readers, enabling consistent table snapshot queries across major query engines (Spark, Hive, Flink, Presto, Trino, Impala) and cloud warehouses. It optimizes query performance by utilizing lightweight processes, especially for base columnar file reads, and integrates engine-specific vectorized readers like in Presto and Trino. This scalable model surpasses the need for separate readers and taps into each engine's unique optimizations, such as Presto and Trino's data/metadata caches. For queries merging Base and Log Files, Hudi employs mechanisms such as spillable maps and lazy reading to boost merge performance. Additionally, Hudi offers a read-optimized query option, trading off data freshness for improved query speed. There are also recently added features such as positional merge, encoding partial Log File to only changed columns and support for Parquet as the Log File format to improve MoR snapshot query performance."}),"\n",(0,t.jsx)(a.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,t.jsx)(a.h3,{id:"platform-services",children:"Platform Services"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.img,{alt:"Platform Services",src:i(78846).A+"",width:"6575",height:"2727"}),"\n",(0,t.jsx)("p",{align:"center",children:"Figure: Various platform services in Hudi"})]}),"\n",(0,t.jsxs)(a.p,{children:["Platform services offer functionality that is specific to data and workloads, and they sit directly on top of the table services, interfacing with writers and readers. Services, like ",(0,t.jsx)(a.a,{href:"./hoodie_streaming_ingestion#hudi-streamer",children:"Hudi Streamer"}),", are specialized in handling data and workloads, seamlessly integrating with Kafka streams and various formats to build data lakes. They support functionalities like automatic checkpoint management, integration with major schema registries (including Confluent), and deduplication of data. Hudi Streamer also offers features for backfills, one-off runs, and continuous mode operation with Spark/Flink streaming writers. Additionally, Hudi provides tools for ",(0,t.jsx)(a.a,{href:"./snapshot_exporter",children:"snapshotting"})," and incrementally ",(0,t.jsx)(a.a,{href:"./snapshot_exporter#examples",children:"exporting"})," Hudi tables, importing new tables, and ",(0,t.jsx)(a.a,{href:"/docs/next/platform_services_post_commit_callback",children:"post-commit callback"})," for analytics or workflow management, enhancing the deployment of production-grade incremental pipelines. Apart from these services, Hudi also provides broad support for different catalogs such as ",(0,t.jsx)(a.a,{href:"./syncing_metastore",children:"Hive Metastore"}),", ",(0,t.jsx)(a.a,{href:"./syncing_aws_glue_data_catalog/",children:"AWS Glue"}),", ",(0,t.jsx)(a.a,{href:"./gcp_bigquery",children:"Google BigQuery"}),", ",(0,t.jsx)(a.a,{href:"./syncing_datahub",children:"DataHub"}),", etc. that allows syncing of Hudi tables to be queried by interactive engines such as Trino and Presto."]}),"\n",(0,t.jsx)(a.h3,{id:"query-engines",children:"Query Engines"}),"\n",(0,t.jsx)(a.p,{children:"Apache Hudi is compatible with a wide array of query engines, catering to various analytical needs. For distributed ETL batch processing, Apache Spark is frequently utilized, leveraging its efficient handling of large-scale data. In the realm of streaming use cases, compute engines such as Apache Flink and Apache Spark's Structured Streaming provide robust support when paired with Hudi. Moreover, Hudi supports modern data lake query engines such as Trino and Presto, as well as modern analytical databases such as ClickHouse and StarRocks. This diverse support of compute engines positions Apache Hudi as a flexible and adaptable platform for a broad spectrum of use cases."})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},91473:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/file_format_2-b4e10be3218071ebde48f3603109126f.png"},49938:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/hstck_new-a0f2451aad8bf4e2003f1efb98c5e179.png"},41100:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/index_3-cac0f7b3b3b458482b6a00ffc1ce962c.png"},8608:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/lake_cache_3-3d6145aa388cb08897be2a04f8ddc004.png"},74637:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/metaserver_2-c36c3b5af7c37b938b9baa67925f4b56.png"},78846:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/platform_2-43439cc71014ddfb911d5907b5640135.png"},86534:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/table_format_1-40380ed7db1d89a0f66dba3ba70c229a.png"},16020:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/table_services_2-46585c7180ac268596828a72f5f42b04.png"},28453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>o});var t=i(96540);const s={},n=t.createContext(s);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);