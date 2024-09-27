"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[89210],{45672:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(74848),n=i(28453);const r={title:"Column File Formats: How Hudi Leverages Parquet and ORC ",excerpt:"Explains how Hudi uses Parquet and ORC",author:"Albert Wong",category:"blog",image:"/assets/images/blog/hudi-parquet-orc.png",tags:["Data Lake","Apache Hudi","Apache Parquet","Apache ORC"]},s=void 0,o={permalink:"/blog/2024/07/31/hudi-file-formats",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2024-07-31-hudi-file-formats.md",source:"@site/blog/2024-07-31-hudi-file-formats.md",title:"Column File Formats: How Hudi Leverages Parquet and ORC ",description:"Introduction",date:"2024-07-31T00:00:00.000Z",tags:[{inline:!0,label:"Data Lake",permalink:"/blog/tags/data-lake"},{inline:!0,label:"Apache Hudi",permalink:"/blog/tags/apache-hudi"},{inline:!0,label:"Apache Parquet",permalink:"/blog/tags/apache-parquet"},{inline:!0,label:"Apache ORC",permalink:"/blog/tags/apache-orc"}],readingTime:3.91,hasTruncateMarker:!1,authors:[{name:"Albert Wong",key:null,page:null}],frontMatter:{title:"Column File Formats: How Hudi Leverages Parquet and ORC ",excerpt:"Explains how Hudi uses Parquet and ORC",author:"Albert Wong",category:"blog",image:"/assets/images/blog/hudi-parquet-orc.png",tags:["Data Lake","Apache Hudi","Apache Parquet","Apache ORC"]},unlisted:!1,nextItem:{title:"Understanding Data Lake Change Data Capture",permalink:"/blog/2024/07/30/data-lake-cdc"}},l={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"How does data storage work in Apache Hudi",id:"how-does-data-storage-work-in-apache-hudi",level:2},{value:"Parquet vs ORC for your Apache Hudi Base File",id:"parquet-vs-orc-for-your-apache-hudi-base-file",level:2},{value:"Apache Parquet",id:"apache-parquet",level:3},{value:"Optimized Row Columnar (ORC)",id:"optimized-row-columnar-orc",level:3},{value:"Choosing the Right Format:",id:"choosing-the-right-format",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const a={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(a.p,{children:["Apache Hudi emerges as a game-changer in the big data ecosystem by transforming data lakes into transactional hubs. Unlike traditional data lakes which struggle with updates and deletes, Hudi empowers users with functionalities like data ingestion, streaming updates (upserts), and even deletions. This allows for efficient incremental processing, keeping your data pipelines agile and data fresh for real-time analytics. Hudi seamlessly integrates with existing storage solutions and boasts compatibility with popular columnar file formats like ",(0,t.jsx)(a.a,{href:"https://parquet.apache.org/",children:"Parquet"})," and ",(0,t.jsx)(a.a,{href:"https://orc.apache.org/",children:"ORC"}),". Choosing the right file format is crucial for optimized performance and efficient data manipulation within Hudi, as it directly impacts processing speed and storage efficiency. This blog will delve deeper into these features, and explore the significance of file format selection."]}),"\n",(0,t.jsx)(a.h2,{id:"how-does-data-storage-work-in-apache-hudi",children:"How does data storage work in Apache Hudi"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://miro.medium.com/v2/resize:fit:600/format:webp/0*_NFdQLaRGiqDuK3V.png",alt:"Hudi COW MOR"})}),"\n",(0,t.jsx)(a.p,{children:"Apache Hudi offers two table storage options: Copy-on-Write (COW) and Merge-on-Read (MOR)."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://hudi.apache.org/docs/table_types#copy-on-write-table",children:"COW tables"}),":","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Data is stored in base files, with Parquet and ORC being the supported formats."}),"\n",(0,t.jsx)(a.li,{children:"Updates involve rewriting the entire base file with the modified data."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://hudi.apache.org/docs/table_types#merge-on-read-table",children:"MOR tables"}),":","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Data resides in base files, again supporting Parquet and ORC formats."}),"\n",(0,t.jsx)(a.li,{children:"Updates are stored in separate delta files (using Apache Avro format) and later merged with the base file by a periodic compaction process in the background."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"parquet-vs-orc-for-your-apache-hudi-base-file",children:"Parquet vs ORC for your Apache Hudi Base File"}),"\n",(0,t.jsx)(a.p,{children:"Choosing the right file format for your Hudi environment depends on your specific needs. Here's a breakdown of Parquet, and ORC along with their strengths, weaknesses, and ideal use cases within Hudi:"}),"\n",(0,t.jsx)(a.h3,{id:"apache-parquet",children:"Apache Parquet"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://parquet.apache.org/",children:"Apache Parquet"})," is a columnar storage file format. It\u2019s designed for efficiency and performance, and it\u2019s particularly well-suited for running complex queries on large datasets."]}),"\n",(0,t.jsx)(a.p,{children:"Pros of Parquet:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Columnar Storage: Unlike row-based files, Parquet is columnar-oriented. This means it stores data by columns, which allows for more efficient disk I/O and compression. It reduces the amount of data transferred from disk to memory, leading to faster query performance."}),"\n",(0,t.jsx)(a.li,{children:"Compression: Parquet has good compression and encoding schemes. It reduces the disk storage space and improves performance, especially for columnar data retrieval, which is a common case in data analytics."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Cons of Parquet:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Write-heavy Workloads: Since Parquet performs column-wise compression and encoding, the cost of writing data can be high for write-heavy workloads."}),"\n",(0,t.jsx)(a.li,{children:"Small Data Sets: Parquet may not be the best choice for small datasets because the advantages of its columnar storage model aren\u2019t as pronounced."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Use Cases for Parquet:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Parquet is an excellent choice when dealing with large, complex, and nested data structures, especially for read-heavy workloads. Its columnar storage approach makes it an excellent choice for ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/blog/2024/07/11/what-is-a-data-lakehouse/",children:"data lakehouse"})," solutions where aggregation queries are common."]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"optimized-row-columnar-orc",children:"Optimized Row Columnar (ORC)"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://orc.apache.org/",children:"Apache ORC"})," is another popular file format that is self-describing, and type-aware columnar file format."]}),"\n",(0,t.jsx)(a.p,{children:"Pros of ORC:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Compression: ORC provides impressive compression rates that minimize storage space. It also includes lightweight indexes stored within the file, helping to improve read performance."}),"\n",(0,t.jsx)(a.li,{children:"Complex Types: ORC supports complex types, including structs, lists, maps, and union types."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Cons of ORC:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Less Community Support: Compared to Parquet, ORC has less community support, meaning fewer resources, libraries, and tools for this file format."}),"\n",(0,t.jsx)(a.li,{children:"Write Costs: Similar to Parquet, ORC may have high write costs due to its columnar nature."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Use Cases for ORC:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"ORC is commonly used in cases where high-speed writing is necessary."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"choosing-the-right-format",children:"Choosing the Right Format:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Prioritize query performance: If complex analytical queries are your primary use case, Parquet is the clear winner due to its superior columnar access."}),"\n",(0,t.jsx)(a.li,{children:"Balance performance and cost: ORC offers a good balance between read/write performance and compression, making it suitable for general-purpose data storage in Hudi."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Remember, the best format depends on your specific Hudi application. Consider your workload mix, and performance requirements to make an informed decision."}),"\n",(0,t.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(a.p,{children:"In conclusion, understanding file formats is crucial for optimizing your Hudi data management. Parquet for COW and MOR tables excels in analytical queries with its columnar storage and rich metadata. ORC for COW and MOR tables strikes a balance between read/write performance and compression for general-purpose storage. Avro comes into play for storing delta table data in MOR tables. By considering these strengths, you can make informed decisions on file formats to best suit your big data workloads within the Hudi framework."}),"\n",(0,t.jsxs)(a.p,{children:["Unleash the power of Apache Hudi for your big data challenges! Head over to ",(0,t.jsx)(a.a,{href:"https://hudi.apache.org/",children:"https://hudi.apache.org/"})," and dive into the quickstarts to get started. Want to learn more? Join our vibrant Hudi community! Attend the monthly Community Call or hop into the Apache Hudi Slack to ask questions and gain deeper insights."]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,i)=>{i.d(a,{R:()=>s,x:()=>o});var t=i(96540);const n={},r=t.createContext(n);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);