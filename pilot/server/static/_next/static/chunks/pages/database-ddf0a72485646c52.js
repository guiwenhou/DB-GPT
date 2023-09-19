(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{55286:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/database",function(){return a(78466)}])},45247:function(e,s,a){"use strict";var l=a(85893),t=a(48699);s.Z=function(e){let{visible:s}=e;return s?(0,l.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50",children:(0,l.jsx)(t.Z,{variant:"plain"})}):null}},78466:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return C},isFileDb:function(){return k}});var l=a(85893),t=a(67294),n=a(2093),r=a(12678),i=a(2453),c=a(71577),o=a(40411),d=a(85265),b=a(85813),m=a(32983),u=a(27494),p=a(50965),h=a(59566),x=a(48928),f=a(50489),y=function(e){let{open:s,choiceDBType:a,dbTypeList:n,editValue:o,dbNames:d,onClose:b,onSuccess:m}=e,[y,g]=(0,t.useState)(!1),[j]=u.Z.useForm(),Z=u.Z.useWatch("db_type",j),N=(0,t.useMemo)(()=>k(n,Z),[n,Z]);(0,t.useEffect)(()=>{a&&j.setFieldValue("db_type",a)},[a]),(0,t.useEffect)(()=>{o&&j.setFieldsValue({...o})},[o]),(0,t.useEffect)(()=>{s||j.resetFields()},[s]);let w=async e=>{let{db_host:s,db_path:a,db_port:l,...t}=e;if(!o&&d.some(e=>e===t.db_name)){i.ZP.error("The database already exists!");return}let n={db_host:N?void 0:s,db_port:N?void 0:l,file_path:N?a:void 0,...t};g(!0);try{let[e]=await (0,f.Vx)((o?f.G9:f.rw)(n));if(e){i.ZP.error(e.message);return}i.ZP.success("success"),null==m||m()}catch(e){i.ZP.error(e.message)}finally{g(!1)}},_=(0,t.useMemo)(()=>!!o||!!a,[o,a]);return(0,l.jsx)(r.Z,{open:s,width:400,title:o?"Edit DB Connect":"Create DB Connenct",maskClosable:!1,footer:null,onCancel:b,children:(0,l.jsxs)(u.Z,{form:j,className:"pt-2",labelCol:{span:6},labelAlign:"left",onFinish:w,children:[(0,l.jsx)(u.Z.Item,{name:"db_type",label:"DB Type",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(p.Z,{"aria-readonly":_,disabled:_,options:n})}),(0,l.jsx)(u.Z.Item,{name:"db_name",label:"DB Name",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{readOnly:!!o,disabled:!!o})}),!0===N&&(0,l.jsx)(u.Z.Item,{name:"db_path",label:"Path",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{})}),!1===N&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z.Item,{name:"db_user",label:"Username",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{})}),(0,l.jsx)(u.Z.Item,{name:"db_pwd",label:"Password",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{type:"password"})}),(0,l.jsx)(u.Z.Item,{name:"db_host",label:"Host",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(h.default,{})}),(0,l.jsx)(u.Z.Item,{name:"db_port",label:"Port",className:"mb-3",rules:[{required:!0}],children:(0,l.jsx)(x.Z,{min:1,step:1,max:65535})})]}),(0,l.jsx)(u.Z.Item,{name:"comment",label:"Remark",className:"mb-3",children:(0,l.jsx)(h.default,{})}),(0,l.jsxs)(u.Z.Item,{className:"flex flex-row-reverse pt-1 mb-0",children:[(0,l.jsx)(c.ZP,{htmlType:"submit",type:"primary",size:"middle",className:"mr-1",loading:y,children:"Save"}),(0,l.jsx)(c.ZP,{size:"middle",onClick:b,children:"Cancel"})]})]})})},g=a(39778),j=function(e){let{info:s,onClick:a}=e,n=(0,t.useCallback)(()=>{s.disabled||null==a||a()},[s.disabled,a]);return(0,l.jsxs)("div",{className:"relative flex flex-col py-4 px-4 w-72 h-32 cursor-pointer rounded-lg justify-between text-black bg-white border-gray-200 border hover:shadow-md dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-white transition-all ".concat(s.disabled?"grayscale":""),onClick:n,children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("img",{className:"w-11 h-11 rounded-full mr-4 border border-gray-200 object-contain bg-white",src:s.icon,alt:s.label}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h2",{className:"text-sm font-semibold",children:s.label}),s.disabled&&(0,l.jsx)("div",{className:"mt-[2px] rounded-full font-normal bg-gray-100 text-xs h-5 flex items-center px-2 dark:bg-gray-800",children:"Comming soon"})]})]}),(0,l.jsx)(g.Z,{title:s.desc,children:(0,l.jsx)("p",{className:"text-sm text-gray-500 font-normal line-clamp-2",children:s.desc})})]})},Z=a(24969),N=a(36531),w=a(27704),_=a(45247);let v={mysql:{label:"Mysql",icon:"/icons/mysql.png",desc:"Fast, reliable, scalable open-source relational database management system."},mssql:{label:"MSSQL",icon:"/icons/mssql.png",desc:"Powerful, scalable, secure relational database system by Microsoft."},duckdb:{label:"Duckdb",icon:"/icons/duckdb.png",desc:"In-memory analytical database with efficient query processing."},sqlite:{label:"Sqlite",icon:"/icons/sqlite.png",desc:"Lightweight embedded relational database with simplicity and portability."},clickhouse:{label:"ClickHouse",icon:"/icons/clickhouse.png",desc:"Columnar database for high-performance analytics and real-time queries."},oracle:{label:"Oracle",icon:"/icons/oracle.png",desc:"Robust, scalable, secure relational database widely used in enterprises."},access:{label:"Access",icon:"/icons/access.png",desc:"Easy-to-use relational database for small-scale applications by Microsoft."},mongodb:{label:"MongoDB",icon:"/icons/mongodb.png",desc:"Flexible, scalable NoSQL document database for web and mobile apps."},db2:{label:"DB2",icon:"/icons/db2.png",desc:"Scalable, secure relational database system developed by IBM."},hbase:{label:"HBase",icon:"/icons/hbase.png",desc:"Distributed, scalable NoSQL database for large structured/semi-structured data."},redis:{label:"Redis",icon:"/icons/redis.png",desc:"Fast, versatile in-memory data structure store as cache, DB, or broker."},cassandra:{label:"Cassandra",icon:"/icons/cassandra.png",desc:"Scalable, fault-tolerant distributed NoSQL database for large data."},couchbase:{label:"Couchbase",icon:"/icons/couchbase.png",desc:"High-performance NoSQL document database with distributed architecture."},postgresql:{label:"Postgresql",icon:"/icons/postgresql.png",desc:"Powerful open-source relational database with extensibility and SQL standards."}};function k(e,s){var a;return null===(a=e.find(e=>e.value===s))||void 0===a?void 0:a.isFileDb}var C=function(){let[e,s]=(0,t.useState)([]),[a,u]=(0,t.useState)([]),[p,h]=(0,t.useState)(!1),[x,g]=(0,t.useState)({open:!1}),[k,C]=(0,t.useState)({open:!1}),P=async()=>{let[e,s]=await (0,f.Vx)((0,f.BJ)());u(null!=s?s:[])},q=async()=>{h(!0);let[e,a]=await (0,f.Vx)((0,f.XN)());s(null!=a?a:[]),h(!1)},F=(0,t.useMemo)(()=>{let e=a.map(e=>{let{db_type:s,is_file_db:a}=e;return{...v[s],value:s,isFileDb:a}}),s=Object.keys(v).filter(s=>!e.some(e=>e.value===s)).map(e=>({...v[e],value:v[e].label,disabled:!0}));return[...e,...s]},[a]),S=e=>{g({open:!0,info:e})},D=e=>{r.Z.confirm({title:"Tips",content:"Do you Want to delete the ".concat(e.db_name,"?"),onOk:()=>new Promise(async(s,a)=>{try{let[l]=await (0,f.Vx)((0,f.LM)(e.db_name));if(l){i.ZP.error(l.message),a();return}i.ZP.success("success"),q(),s()}catch(e){i.ZP.error(e.message),a()}})})},E=(0,t.useMemo)(()=>{let s=F.reduce((s,a)=>(s[a.value]=e.filter(e=>e.db_type===a.value),s),{});return s},[e,F]);(0,n.Z)(async()=>{await q(),await P()},[]);let T=s=>{let a=e.filter(e=>e.db_type===s.value);C({open:!0,dbList:a,name:s.label,type:s.value})};return(0,l.jsxs)("div",{className:"relative p-6 bg-[#FAFAFA] dark:bg-transparent min-h-full overflow-y-auto",children:[(0,l.jsx)(_.Z,{visible:p}),(0,l.jsx)("div",{className:"px-1 mb-4",children:(0,l.jsx)(c.ZP,{type:"primary",className:"flex items-center",icon:(0,l.jsx)(Z.Z,{}),onClick:()=>{g({open:!0})},children:"Create"})}),(0,l.jsx)("div",{className:"flex flex-wrap",children:F.map(e=>(0,l.jsx)(o.Z,{className:"mr-4 mb-4",count:E[e.value].length,children:(0,l.jsx)(j,{info:e,onClick:()=>{T(e)}})},e.value))}),(0,l.jsx)(y,{open:x.open,dbTypeList:F,choiceDBType:x.dbType,editValue:x.info,dbNames:e.map(e=>e.db_name),onSuccess:()=>{g({open:!1}),q()},onClose:()=>{g({open:!1})}}),(0,l.jsx)(d.Z,{title:k.name,placement:"right",onClose:()=>{C({open:!1})},open:k.open,children:k.type&&E[k.type]&&E[k.type].length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.ZP,{type:"primary",className:"mb-4 flex items-center",icon:(0,l.jsx)(Z.Z,{}),onClick:()=>{g({open:!0,dbType:k.type})},children:"Create"}),E[k.type].map(e=>(0,l.jsxs)(b.Z,{title:e.db_name,extra:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N.Z,{className:"mr-2",style:{color:"#1b7eff"},onClick:()=>{S(e)}}),(0,l.jsx)(w.Z,{style:{color:"#ff1b2e"},onClick:()=>{D(e)}})]}),className:"mb-4",children:[e.db_path?(0,l.jsxs)("p",{children:["path: ",e.db_path]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{children:["host: ",e.db_host]}),(0,l.jsxs)("p",{children:["username: ",e.db_user]}),(0,l.jsxs)("p",{children:["port: ",e.db_port]})]}),(0,l.jsxs)("p",{children:["remark: ",e.comment]})]},e.db_name))]}):(0,l.jsx)(m.Z,{image:m.Z.PRESENTED_IMAGE_DEFAULT,children:(0,l.jsx)(c.ZP,{type:"primary",className:"flex items-center mx-auto",icon:(0,l.jsx)(Z.Z,{}),onClick:()=>{g({open:!0,dbType:k.type})},children:"Create Now"})})})]})}}},function(e){e.O(0,[566,902,625,455,46,847,774,888,179],function(){return e(e.s=55286)}),_N_E=e.O()}]);