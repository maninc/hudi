"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[82930],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(u,o(o({ref:n},h),{},{components:t})):r.createElement(u,o({ref:n},h))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18566:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Disaster Recovery",toc:!0},o=void 0,s={unversionedId:"disaster_recovery",id:"version-0.13.0/disaster_recovery",title:"Disaster Recovery",description:"Disaster Recovery is very much mission-critical for any software. Especially when it comes to data systems, the impact could be very serious",source:"@site/versioned_docs/version-0.13.0/disaster_recovery.md",sourceDirName:".",slug:"/disaster_recovery",permalink:"/cn/docs/0.13.0/disaster_recovery",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/disaster_recovery.md",tags:[],version:"0.13.0",frontMatter:{title:"Disaster Recovery",toc:!0},sidebar:"docs",previous:{title:"File Sizing",permalink:"/cn/docs/0.13.0/file_sizing"},next:{title:"Exporter",permalink:"/cn/docs/0.13.0/snapshot_exporter"}},l=[{value:"Savepoint",id:"savepoint",children:[],level:2},{value:"Restore",id:"restore",children:[],level:2},{value:"Runbook",id:"runbook",children:[],level:2}],p={toc:l},h="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Disaster Recovery is very much mission-critical for any software. Especially when it comes to data systems, the impact could be very serious\nleading to delay in business decisions or even wrong business decisions at times. Apache Hudi has two operations to assist you in recovering\ndata from a previous state: ",(0,a.kt)("inlineCode",{parentName:"p"},"savepoint")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"restore"),"."),(0,a.kt)("h2",{id:"savepoint"},"Savepoint"),(0,a.kt)("p",null,"As the name suggest, ",(0,a.kt)("inlineCode",{parentName:"p"},"savepoint")," saves the table as of the commit time, so that it lets you restore the table to this\nsavepoint at a later point in time if need be. Care is taken to ensure cleaner will not clean up any files that are savepointed.\nOn similar lines, savepoint cannot be triggered on a commit that is already cleaned up. In simpler terms, this is synonymous\nto taking a backup, just that we don't make a new copy of the table, but just save the state of the table elegantly so that\nwe can restore it later when in need."),(0,a.kt)("h2",{id:"restore"},"Restore"),(0,a.kt)("p",null,"This operation lets you restore your table to one of the savepoint commit. This operation cannot be undone (or reversed) and so care\nshould be taken before doing a restore. Hudi will delete all data files and commit files (timeline files) greater than the\nsavepoint commit to which the table is being restored. You should pause all writes to the table when performing\na restore since they are likely to fail while the restore is in progress. Also, reads could also fail since snapshot queries\nwill be hitting latest files which has high possibility of getting deleted with restore."),(0,a.kt)("h2",{id:"runbook"},"Runbook"),(0,a.kt)("p",null,"Savepoint and restore can only be triggered from ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-cli"),". Let's walk through an example of how one can take savepoint\nand later restore the state of the table."),(0,a.kt)("p",null,"Let's create a hudi table via ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-shell")," and trigger a batch of inserts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval dataGen = new DataGenerator\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n')),(0,a.kt)("p",null,"Let's add four more batches of inserts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'for (_ <- 1 to 4) {\n  val inserts = convertToStringList(dataGen.generateInserts(10))\n  val df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n  df.write.format("hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Append).\n    save(basePath)\n}\n')),(0,a.kt)("p",null,"Total record count should be 50."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath)\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select count(partitionpath, uuid) from  hudi_trips_snapshot").show()\n\n+--------------------------+\n|count(partitionpath, uuid)|\n+--------------------------+\n|                        50|\n+--------------------------+\n')),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you're facing ",(0,a.kt)("inlineCode",{parentName:"p"},'java.lang.IllegalArgumentException: For input string: "null"')," exception, it means that you may need to\nmanually set the ",(0,a.kt)("inlineCode",{parentName:"p"},"LEGACY_PARQUET_NANOS_AS_LONG")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," i.e. add ",(0,a.kt)("inlineCode",{parentName:"p"},"--conf 'spark.hadoop.spark.sql.legacy.parquet.nanosAsLong=false'"),"\nto your spark configuration while starting the spark session. For more information, read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/issues/8061"},"here"),"."))),(0,a.kt)("p",null,"Let's take a look at the timeline after 5 batches of inserts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ls -ltr /tmp/hudi_trips_cow/.hoodie \ntotal 128\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n")),(0,a.kt)("p",null,"Let's trigger a savepoint as of the latest commit. Savepoint can only be done via ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-cli"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./hudi-cli.sh\n\nconnect --path /tmp/hudi_trips_cow/\ncommits show\nset --conf SPARK_HOME=<SPARK_HOME>\nsavepoint create --commit 20220128160245447 --sparkMaster local[2]\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"NOTE:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you replace 20220128160245447 with the latest commit in your table."))),(0,a.kt)("p",null,"Let's check the timeline after savepoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ls -ltr /tmp/hudi_trips_cow/.hoodie\ntotal 136\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:05 20220128160245447.savepoint.inflight\n-rw-r--r--  1 nsb  wheel  1168 Jan 28 16:05 20220128160245447.savepoint\n")),(0,a.kt)("p",null,"You could notice that savepoint meta files are added which keeps track of the files that are part of the latest table snapshot."),(0,a.kt)("p",null,"Now, let's continue adding three more batches of inserts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'for (_ <- 1 to 3) {\n  val inserts = convertToStringList(dataGen.generateInserts(10))\n  val df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n  df.write.format("hudi").\n    options(getQuickstartWriteConfigs).\n    option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n    option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n    option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n    option(TABLE_NAME, tableName).\n    mode(Append).\n    save(basePath)\n}\n')),(0,a.kt)("p",null,"Total record count will be 80 since we have done 8 batches in total. (5 until savepoint and 3 after savepoint)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath)\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select count(partitionpath, uuid) from  hudi_trips_snapshot").show()\n+--------------------------+\n|count(partitionpath, uuid)|\n+--------------------------+\n|                        80|\n+--------------------------+\n')),(0,a.kt)("p",null,"Let's say something bad happened, and you want to restore your table to an older snapshot. As we called out earlier, we can\ntrigger restore only from ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-cli"),". And do remember to bring down all of your writer processes while doing a restore."),(0,a.kt)("p",null,"Let's checkout timeline once, before we trigger the restore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ls -ltr /tmp/hudi_trips_cow/.hoodie\ntotal 208\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:05 20220128160245447.savepoint.inflight\n-rw-r--r--  1 nsb  wheel  1168 Jan 28 16:05 20220128160245447.savepoint\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:06 20220128160620557.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:06 20220128160620557.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:06 20220128160620557.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:06 20220128160627501.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:06 20220128160627501.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:06 20220128160627501.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:06 20220128160630785.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:06 20220128160630785.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:06 20220128160630785.commit\n")),(0,a.kt)("p",null,"If you are continuing in the same ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-cli")," session, you can just execute ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh")," so that table state gets refreshed to\nits latest state. If not, connect to the table again."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./hudi-cli.sh\n\nconnect --path /tmp/hudi_trips_cow/\ncommits show\nset --conf SPARK_HOME=<SPARK_HOME>\nsavepoints show\n\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551 SavepointTime     \u2551\n\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n\u2551 20220128160245447 \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\nsavepoint rollback --savepoint 20220128160245447 --sparkMaster local[2]\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"NOTE:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you replace 20220128160245447 with the latest savepoint in your table."))),(0,a.kt)("p",null,"Hudi table should have been restored to the savepointed commit 20220128160245447. Both data files and timeline files should have\nbeen deleted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ls -ltr /tmp/hudi_trips_cow/.hoodie\ntotal 152\ndrwxr-xr-x  2 nsb  wheel    64 Jan 28 16:00 archived\n-rw-r--r--  1 nsb  wheel   546 Jan 28 16:00 hoodie.properties\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:00 20220128160040171.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:00 20220128160040171.inflight\n-rw-r--r--  1 nsb  wheel  4374 Jan 28 16:00 20220128160040171.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:01 20220128160124637.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:01 20220128160124637.inflight\n-rw-r--r--  1 nsb  wheel  4414 Jan 28 16:01 20220128160124637.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160226172.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160226172.inflight\n-rw-r--r--  1 nsb  wheel  4427 Jan 28 16:02 20220128160226172.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160229636.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160229636.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160229636.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:02 20220128160245447.commit.requested\n-rw-r--r--  1 nsb  wheel  2594 Jan 28 16:02 20220128160245447.inflight\n-rw-r--r--  1 nsb  wheel  4428 Jan 28 16:02 20220128160245447.commit\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:05 20220128160245447.savepoint.inflight\n-rw-r--r--  1 nsb  wheel  1168 Jan 28 16:05 20220128160245447.savepoint\n-rw-r--r--  1 nsb  wheel     0 Jan 28 16:07 20220128160732437.restore.inflight\n-rw-r--r--  1 nsb  wheel  4152 Jan 28 16:07 20220128160732437.restore\n")),(0,a.kt)("p",null,"Let's check the total record count in the table. Should match the records we had, just before we triggered the savepoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath)\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select count(partitionpath, uuid) from  hudi_trips_snapshot").show()\n+--------------------------+\n|count(partitionpath, uuid)|\n+--------------------------+\n|                        50|\n+--------------------------+\n')),(0,a.kt)("p",null,"As you could see, entire table state is restored back to the commit which was savepointed. Users can choose to trigger savepoint\nat regular cadence and keep deleting older savepoints when new ones are created. ",(0,a.kt)("inlineCode",{parentName:"p"},"hudi-cli")," has a command ",(0,a.kt)("inlineCode",{parentName:"p"},"savepoint delete"),"\nto assist in deleting a savepoint. Please do remember that cleaner may not clean the files that are savepointed. And so users\nshould ensure they delete the savepoints from time to time. If not, the storage reclamation may not happen."),(0,a.kt)("p",null,"Note: Savepoint and restore for MOR table is available only from 0.11."))}c.isMDXComponent=!0}}]);