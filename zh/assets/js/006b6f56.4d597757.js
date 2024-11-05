"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7594],{36518:(e,n,i)=>{i.d(n,{Y:()=>D});var t=i(96540),r=i(67733),l=i(67512),s=i(43581),a=i(80421),o=i(1489),d=i(71543),c=i(57416),u=i(53881),h=i(88933),p=i(46780),x=i(19591),m=i(618),j=i(73231),g=i(30854),v=i(16718),A=i(4671),y=i(67034),I=i(63051),k=i(15993),b=i(28968),f=i(13407),C=i(46831),T=i(22777),B=i(82470),P=i(37091),O=i(74848);const D=(0,t.memo)((()=>{const{i18n:e}=(0,T.A)(),n=(0,P.o)(),i=(0,t.useMemo)((()=>n?N:S),[n]),D=(0,t.useMemo)((()=>{const e=new Map;for(const n of i)e.set(n.id,n);return e}),[i]),z=(0,t.useMemo)((()=>n?_:w),[n]),L=(0,t.useMemo)((()=>{const e=new Map;for(const n of z)e.set(n.id,n);return e}),[z]),[q,E]=(0,B.e)((()=>({userId:1,province:D.get(1).province,city:D.get(1).city,address:D.get(1).address,items:[{__rowId:1,productId:1,name:L.get(1).name,quantity:2},{__rowId:2,productId:10,name:L.get(10).name,quantity:1}]}))),R=(0,t.useMemo)((()=>Math.max(...q.items.map((e=>e.__rowId)))+1),[q]),J=(0,t.useCallback)((e=>{const n=D.get(parseInt(e.target.value));void 0!==n&&E((e=>{e.userId=n.id,e.province=n.province,e.city=n.city,e.address=n.address}))}),[E,D]),U=(0,t.useCallback)((e=>{E((n=>{n.province=e.target.value}))}),[E]),W=(0,t.useCallback)((e=>{E((n=>{n.city=e.target.value}))}),[E]),G=(0,t.useCallback)((e=>{E((n=>{n.address=e.target.value}))}),[E]),F=(0,t.useCallback)(((e,n)=>{E((i=>{for(const t of i.items)if(t.__rowId===n){t.productId=parseInt(e.target.value),M(i);break}}))}),[E]),K=(0,t.useCallback)(((e,n)=>{E((i=>{for(const t of i.items)if(t.__rowId===n){t.quantity=parseInt(e.target.value),M(i);break}}))}),[E]),H=(0,t.useCallback)((e=>{E((n=>{for(let i=n.items.length-1;i>=0;--i)if(n.items[i].__rowId===e){n.items.splice(i,1);break}}))}),[E]),V=(0,t.useCallback)((()=>{E((e=>{e.items.push({__rowId:R,quantity:1})}))}),[E,R]),[Q,Y]=(0,t.useState)(!1),X=(0,t.useCallback)((()=>{Y(!0)}),[]),Z=(0,t.useCallback)((()=>{Y(!1)}),[]);return(0,O.jsxs)(c.A,{elevation:3,style:{padding:"1.5rem"},children:[(0,O.jsx)(r.A,{component:"form",noValidate:!0,autoComplete:"off",children:(0,O.jsxs)(o.Ay,{container:!0,spacing:2,children:[(0,O.jsx)(o.Ay,{item:!0,xs:4,children:(0,O.jsx)(s.A,{fullWidth:!0,select:!0,label:n?"\u8d2d\u4e70\u4eba":"Purchaser",value:q.userId,onChange:J,children:i.map((e=>(0,O.jsx)(a.A,{value:e.id,children:e.nickName},e.id)))})}),(0,O.jsx)(o.Ay,{item:!0,xs:4,children:(0,O.jsx)(s.A,{fullWidth:!0,label:n?"\u7701\u4efd":"Province",value:q.province,onChange:U})}),(0,O.jsx)(o.Ay,{item:!0,xs:4,children:(0,O.jsx)(s.A,{fullWidth:!0,label:n?"\u57ce\u5e02":"City",value:q.city,onChange:W})}),(0,O.jsx)(o.Ay,{item:!0,xs:12,children:(0,O.jsx)(s.A,{fullWidth:!0,label:n?"\u5730\u5740":"Address",value:q.address,onChange:G})}),(0,O.jsxs)(o.Ay,{item:!0,xs:12,children:[(0,O.jsx)(d.A,{textAlign:"left",children:n?"\u8ba2\u5355\u660e\u7ec6":"Order Items"}),(0,O.jsx)(x.A,{component:c.A,children:(0,O.jsxs)(u.A,{size:"small",children:[(0,O.jsx)(m.A,{children:(0,O.jsxs)(j.A,{children:[(0,O.jsx)(p.A,{children:n?"\u5546\u54c1":"Commodity"}),(0,O.jsx)(p.A,{children:n?"\u6570\u91cf":"Quantity"}),(0,O.jsx)(p.A,{children:n?"\u5355\u4ef7":"Unit price"}),(0,O.jsx)(p.A,{children:n?"\u660e\u7ec6\u4ef7":"Item price"}),(0,O.jsx)(p.A,{children:n?"\u5220\u9664":"Delete"})]})}),(0,O.jsx)(h.A,{children:q.items.map((e=>{const n=void 0!==e.productId?L.get(e.productId):void 0;return(0,O.jsxs)(j.A,{children:[(0,O.jsx)(p.A,{children:(0,O.jsx)(s.A,{select:!0,value:n?.id,variant:"standard",size:"small",onChange:n=>{F(n,e.__rowId)},children:z.map((e=>(0,O.jsx)(a.A,{value:e.id,children:e.name},e.id)))})}),(0,O.jsx)(p.A,{children:(0,O.jsx)(s.A,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:n=>{K(n,e.__rowId)}})}),(0,O.jsx)(p.A,{children:n?.price}),(0,O.jsx)(p.A,{children:void 0!==n&&n.price*e.quantity}),(0,O.jsx)(p.A,{children:(0,O.jsx)(A.A,{onClick:()=>H(e.__rowId),children:(0,O.jsx)(y.A,{})})})]},e.__rowId)}))}),(0,O.jsx)(g.A,{children:(0,O.jsx)(j.A,{children:(0,O.jsx)(p.A,{colSpan:5,children:(0,O.jsxs)(l.A,{onClick:V,children:[(0,O.jsx)(v.A,{}),n?"\u6dfb\u52a0":"Add"]})})})})]})})]}),(0,O.jsxs)(o.Ay,{item:!0,xs:12,children:[n?"\u603b\u989d":"Total price",":",q.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>L.get(e.productId).price*e.quantity)).reduce(((e,n)=>e+n),0)]}),(0,O.jsx)(o.Ay,{item:!0,xs:12,children:(0,O.jsx)(l.A,{variant:"contained",onClick:X,children:n?"\u63d0\u4ea4":"Submit"})})]})}),(0,O.jsxs)(I.A,{open:Q,onClose:Z,children:[(0,O.jsx)(C.A,{children:n?"\u4fe1\u606f":"Info"}),(0,O.jsx)(b.A,{children:(0,O.jsx)(f.A,{children:n?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,O.jsx)(k.A,{children:(0,O.jsx)(l.A,{onClick:Z,children:n?"\u5173\u95ed":"Close"})})]})]})})),N=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],S=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],_=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],w=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function M(e){const n=e.items,i=new Map;for(let t=0;t<n.length;t++){const e=n[t];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){n.splice(t--,1);continue}if(void 0===e.productId)continue;const r=i.get(e.productId);void 0===r?i.set(e.productId,e):(r.quantity+=e.quantity,n.splice(t--,1))}}},97582:(e,n,i)=>{i.d(n,{M:()=>A});var t=i(22777),r=i(31729),l=i(48440),s=i(80421),a=i(57416),o=i(18441),d=i(68999),c=i(43581),u=i(63051),h=i(46831),p=i(28968),x=i(15993),m=i(13407),j=i(67512),g=i(96540),v=i(74848);const A=(0,g.memo)((()=>{const[e,n]=(0,g.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),i=(0,g.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),A=(0,g.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),y=(0,g.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),I=(0,g.useCallback)((e=>{let i;const t=e.target.value;i="string"==typeof t?parseInt(t):t,-1===i&&(i=void 0),n((e=>({...e,storeId:i})))}),[]),k=(0,g.useCallback)((e=>{let i=[];console.log(e.target.value);const t=e.target.value;i="string"==typeof t?t.split(",").map((e=>parseInt(e))):t,n((e=>({...e,authorIds:i})))}),[]),{i18n:b}=(0,t.A)(),f=(0,g.useMemo)((()=>"zh"==b.currentLocale||"zh_cn"==b.currentLocale||"zh_CN"==b.currentLocale),[b.currentLocale]),[C,T]=(0,g.useState)(!1),B=(0,g.useCallback)((()=>{T(!0)}),[]),P=(0,g.useCallback)((()=>{T(!1)}),[]);return(0,v.jsxs)(a.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,v.jsxs)(d.A,{spacing:2,children:[(0,v.jsx)("h1",{children:"Book Form"}),(0,v.jsx)(c.A,{label:"Name",value:e.name,onChange:i,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,v.jsx)(c.A,{label:"Edition",type:"number",value:e.edition,onChange:A}),(0,v.jsx)(c.A,{label:"Price",type:"number",value:e.price,onChange:y}),(0,v.jsxs)(r.A,{fullWidth:!0,children:[(0,v.jsx)(l.A,{id:"store-select-label",children:"Store"}),(0,v.jsxs)(o.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:I,children:[(0,v.jsx)(s.A,{value:-1,children:"--NONE--"}),(0,v.jsx)(s.A,{value:1,children:"O'REILLY"}),(0,v.jsx)(s.A,{value:2,children:"MANNING"})]})]}),(0,v.jsxs)(r.A,{fullWidth:!0,children:[(0,v.jsx)(l.A,{id:"author-multi-select-label",children:"Authors"}),(0,v.jsxs)(o.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:k,children:[(0,v.jsx)(s.A,{value:1,children:"Eve Procello"}),(0,v.jsx)(s.A,{value:2,children:"Alex Banks"}),(0,v.jsx)(s.A,{value:3,children:"Dan Vanderkam"}),(0,v.jsx)(s.A,{value:4,children:"Boris Cherny"}),(0,v.jsx)(s.A,{value:5,children:"Samer Buna"})]})]}),(0,v.jsx)(r.A,{children:(0,v.jsx)(j.A,{onClick:B,variant:"contained",children:f?"\u63d0\u4ea4":"Submit"})})]}),(0,v.jsxs)(u.A,{open:C,onClose:P,children:[(0,v.jsx)(h.A,{children:f?"\u4fe1\u606f":"Info"}),(0,v.jsx)(p.A,{children:(0,v.jsx)(m.A,{children:f?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,v.jsx)(x.A,{children:(0,v.jsx)(j.A,{onClick:P,children:"\u5173\u95ed"})})]})]})}))},58226:(e,n,i)=>{i.d(n,{a:()=>m});var t=i(96540),r=i(72774),l=i(63051),s=i(28968),a=i(48875),o=i(44676),d=i(47859),c=i(4671),u=i(99343),h=i(7324),p=i(39781),x=i(74848);const m=(0,t.memo)((e=>{let{open:n,fullScreen:i=!1,title:a,maxWidth:m="md",onClose:g,children:v}=e;const[A,y]=(0,t.useState)(i),I=(0,t.useCallback)((()=>{y((e=>!e))}),[]);return(0,x.jsxs)(l.A,{open:n,onClose:g,fullScreen:A,TransitionComponent:j,maxWidth:m,children:[(0,x.jsx)(r.A,{sx:{position:"relative"},children:(0,x.jsxs)(o.A,{children:[(0,x.jsx)(d.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a}),(0,x.jsx)(c.A,{onClick:I,style:{color:"white"},children:A?(0,x.jsx)(h.A,{}):(0,x.jsx)(u.A,{})}),(0,x.jsx)(c.A,{"aria-label":"close",onClick:g,style:{color:"white"},children:(0,x.jsx)(p.A,{})})]})}),(0,x.jsx)(s.A,{children:v})]})})),j=t.forwardRef((function(e,n){return(0,x.jsx)(a.A,{direction:"up",ref:n,...e})}))},47389:(e,n,i)=>{i.d(n,{l:()=>a});var t=i(96540),r=i(67512),l=i(58226),s=i(74848);const a=(0,t.memo)((e=>{let{buttonText:n,fullScreen:i=!1,title:a=n,variant:o="outlined",large:d=!1,maxWidth:c,useOriginalText:u=!0,children:h}=e;const[p,x]=(0,t.useState)(!1),m=(0,t.useCallback)((e=>{x(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),j=(0,t.useCallback)((()=>{x(!1)}),[]),g=u?{textTransform:"none"}:{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{"data-is-view-more-button":"true",onClick:m,variant:o,size:d?"large":"small",style:g,children:n}),(0,s.jsx)(l.a,{open:p,onClose:j,title:a,maxWidth:c,fullScreen:i,children:h})]})}))},37091:(e,n,i)=>{i.d(n,{o:()=>r});var t=i(22777);function r(){const{i18n:e}=(0,t.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}},17157:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>u,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"mutation/save-command/input-dto/dto-lang","title":"\u4f7f\u7528DTO\u8bed\u8a00","description":"Jimmer\u63d0\u4f9b\u4e86DTO\u8bed\u8a00\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/dto-lang.mdx","sourceDirName":"mutation/save-command/input-dto","slug":"/mutation/save-command/input-dto/dto-lang","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/dto-lang","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/dto-lang.mdx","tags":[],"version":"current","lastUpdatedAt":1714253334000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"\u4f7f\u7528DTO\u8bed\u8a00"},"sidebar":"tutorialSidebar","previous":{"title":"\u5b64\u5355\u8868\u5355","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/lonely"},"next":{"title":"\u5904\u7406\u7a7a\u503c","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/null-handling"}}');var r=i(74848),l=i(28453),s=i(37244),a=i(56778),o=i(97582),d=i(36518),c=i(47389);const u={sidebar_position:3,title:"\u4f7f\u7528DTO\u8bed\u8a00"},h=void 0,p={},x=[{value:"\u5b9a\u4e49DTO\u7684\u5f62\u72b6",id:"\u5b9a\u4e49dto\u7684\u5f62\u72b6",level:2},{value:"\u81ea\u52a8\u751f\u6210DTO\u7c7b\u578b",id:"\u81ea\u52a8\u751f\u6210dto\u7c7b\u578b",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Jimmer\u63d0\u4f9b\u4e86",(0,r.jsx)(n.a,{href:"../../../object/view/dto-language",children:"DTO\u8bed\u8a00"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528\u6b64\u8bed\u8a00\u5feb\u901f\u5b9a\u4e49\u8981\u4fdd\u5b58\u7684Input DTO\u7684\u5f62\u72b6\uff0c\u7f16\u8bd1\u540e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u76f8\u5173\u7684Java/Kotlin Input DTO\u7c7b\u5c06\u4f1a\u88ab\u81ea\u52a8\u751f\u6210"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Input DTO\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5f7c\u6b64\u8f6c\u5316\u903b\u8f91\u4f1a\u88ab\u81ea\u52a8\u751f\u6210"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e0e\u4e4b\u5f62\u72b6\u543b\u5408\u7684\u5bf9\u8c61\u6293\u53d6\u5668\u4f1a\u88ab\u81ea\u52a8\u751f\u6210\u3002",(0,r.jsx)(n.em,{children:"(\u8fd9\u4e2a\u529f\u80fd\u548cinput DTO\u65e0\u5173\uff0c\u6240\u4ee5\u672c\u6587\u4e0d\u505a\u8bba\u8ff0)"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f00\u53d1\u4eba\u5458\u7528\u81ea\u52a8\u751f\u6210\u7684Input DTO\u4f5c\u4e3aAPI\u7684\u5165\u53c2\uff0c\u4e00\u884c\u4ee3\u7801\u4fdd\u5b58\u5b83\u5373\u53ef ",(0,r.jsx)(n.em,{children:"(\u5185\u90e8\u903b\u8f91\uff1a\u8c03\u7528\u81ea\u52a8\u751f\u6210\u7684\u8f6c\u5316\u903b\u8f91\u628aInput DTO\u8f6c\u5316\u4e3a\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u518d\u7528\u4fdd\u5b58\u6307\u4ee4\u76f4\u63a5\u4fdd\u5b58)"}),"\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u8fd9\u662f\u6d88\u9664Input DTO\u7206\u70b8\u5e26\u6765\u7684\u75db\u82e6\u7684\u6700\u9ad8\u6548\u65b9\u6848"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9a\u4e49dto\u7684\u5f62\u72b6",children:"\u5b9a\u4e49DTO\u7684\u5f62\u72b6"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6587\u4fa7\u91cd\u4e8e\u8bb2\u89e3\u5982\u4f55\u4fdd\u5b58\u9759\u6001DTO\u7c7b\u578b\uff0c\u5e76\u975e\u7cfb\u7edf\u6027\u4ecb\u7ecdDTO\u8bed\u8a00\uff0c\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"../../../object/view/dto-language",children:"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"}),"\u4ee5\u4e86\u89e3\u5b8c\u6574\u7684DTO\u8bed\u8a00\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u5982",(0,r.jsx)(n.code,{children:"Book"}),"\u7c7b\u7684\u5168\u540d\u4e3a",(0,r.jsx)(n.code,{children:"com.yourcompany.yourpoject.model.Book"}),"\uff0c\u4f60\u53ef\u4ee5"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5728\u5b9e\u4f53\u5b9a\u4e49\u6240\u5728\u9879\u76ee\u4e2d"}),"\uff0c\u5efa\u7acb\u76ee\u5f55",(0,r.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"src/main/dto"}),"\u4e0b\uff0c\u6309\u5b9e\u4f53\u7c7b\u578b\u6240\u5904\u7684\u5305\u8def\u5f84\u5efa\u7acb\u5b50\u76ee\u5f55",(0,r.jsx)(n.code,{children:"com/yourcompany/yourpoject/model"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u4e00\u6b65\u5efa\u7acb\u7684\u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u6587\u4ef6",(0,r.jsx)(n.code,{children:"Book.dto"}),"\uff0c\u6587\u4ef6\u5fc5\u987b\u548c\u5b9e\u4f53\u7c7b\u540c\u540d\uff0c\u6269\u5c55\u540d\u5fc5\u987b\u4e3a",(0,r.jsx)(n.code,{children:"dto"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7f16\u8f91\u6b64\u6587\u4ef6\uff0c\u5229\u7528DTO\u8bed\u8a00\uff0c\u5b9a\u4e49Book\u5b9e\u4f53\u7684\u5404\u79cdDTO\u5f62\u72b6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto"',children:"# highlight-next-line\nBookInput {\n    \n    #allScalars(Book)\n    \n    id(store)\n\n    authors {\n        #allScalars(Author)\n        -id\n    }\n}\n\nSimpleBookInput { ...\u7565... }\n\n...\u7701\u7565\u5176\u4ed6Input DTO\u5f62\u72b6\u5b9a\u4e49...\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["\u7528\u4f5c\u8f93\u5165\u53c2\u6570\u7684Input DTO\u7684\u5f62\u72b6\u5b9a\u4e49\u5fc5\u987b\u7528",(0,r.jsx)(n.code,{children:"input"}),"\u4fee\u9970\u7b26\u4fee\u9970\u3002"]}),(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u539f\u56e0\u5df2\u7ecf\u5728",(0,r.jsx)(n.a,{href:"../../../object/view/dto-language",children:"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"}),"\u4e2d\u6709\u8be6\u7ec6\u7684\u9610\u8ff0\uff0c\u672c\u6587\u4e0d\u518d\u8d58\u8ff0"]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u81ea\u52a8\u751f\u6210dto\u7c7b\u578b",children:"\u81ea\u52a8\u751f\u6210DTO\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u8d1f\u8d23\u7f16\u8bd1dto\u6587\u4ef6\uff0c\u81ea\u52a8\u751f\u6210\u7b26\u5408\u8fd9\u4e9b\u5f62\u72b6\u7684DTO\u7c7b\u578b\u3002"}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"\u5982\u679c\u9664\u4e86dto\u6587\u4ef6\u5916\u8fd8\u6709\u5176\u4ed6Java/Kotlin\u539f\u4ee3\u7801\u6587\u4ef6\u88ab\u4fee\u6539\u4e86\uff0c\u76f4\u63a5\u70b9\u51fbIDE\u4e2d\u8fd0\u884c\u6309\u94ae\u53ef\u4ee5\u5bfc\u81f4dto\u6587\u4ef6\u7684\u91cd\u65b0\u7f16\u8bd1"}),(0,r.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u5982\u679c\u9664\u4e86dto\u6587\u4ef6\u5916\u6ca1\u6709\u5176\u4ed6Java/Kotlin\u6587\u4ef6\u88ab\u4fee\u6539\uff0c\u7b80\u5355\u5730\u70b9\u51fbIDE\u4e2d\u8fd0\u884c\u6309\u94ae\u5e76\u4e0d\u4f1a\u5bfc\u81f4dto\u6587\u4ef6\u88ab\u91cd\u65b0\u7f16\u8bd1\uff0c\u9664\u975e\u663e\u5f0f\u5730rebuild\uff01"}),(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u6784\u5efa\u5de5\u5177\u662fGradle\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u793e\u533a\u63d0\u4f9b\u7684\u7b2c\u4e09\u65b9Gradle\u63d2\u4ef6\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898: ",(0,r.jsx)(n.a,{href:"https://github.com/Enaium/jimmer-gradle",children:"jimmer-gradle"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,r.jsx)(n.code,{children:"BookInput"}),"\u4e3a\u4f8b\uff0c\u6b64dto\u6587\u4ef6\u88abJimmer\u6210\u529f\u7f16\u8bd1\u540e\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u5982\u4e0bDTO\u7c7b\u578b"]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"',children:'package com.yourcompany.yourpoject.model.dto;\n\nimport com.yourcompany.yourpoject.model.Book;\nimport org.babyfish.jimmer.Input;\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookInput implements Input<Book> {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<TargetOf_authors> authors; \u2778\n\n    public BookInput(Book book) { \u2779\n        ...\u7565...\n    }\n\n    @Override\n    public Book toEntity() { \u277a\n        ...\u7565...\n    }\n\n    @Data\n    public static class TargetOf_authors {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:'package com.yourcompany.yourpoject.model.dto\n\nimport com.yourcompany.yourpoject.model.Book\nimport org.babyfish.jimmer.Input\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookInput(\n    val id: Long? = null, \u2776\n    val name: String = "", \n    val edition: Int = 0,\n    val price: BigDecimal, \n    val storeId: Long? = null, \u2777\n    val authors: List<TargetOf_authors> = emptyList() \u2778\n): Input<Book> {\n\n    constructor(book: Book) : this(...\u7565...) \u2779\n\n    override fun toEntity(): Book = ...\u7565... \u277a\n\n    data class TargetOf_authors(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    ) {\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2776 \u5982\u679cid\u88ab\u6307\u5b9a\u4e86\u81ea\u52a8\u751f\u6210\u7b56\u7565\uff0c\u5219id\u4e0d\u662f\u5fc5\u987b\u7684\u3002\u8fd9\u4e5f\u662f\u4fdd\u5b58\u6307\u4ee4\u7684\u4e00\u4e2a\u7279\u6027\uff0c\u5177\u4f53\u7ec6\u8282\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"../save-mode#%E6%80%BB%E7%BB%93",children:"\u4fdd\u5b58\u6a21\u5f0f/\u603b\u7ed3"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8eJimmer\u5b9e\u4f53\u800c\u8a00\uff0c",(0,r.jsx)(n.code,{children:"id"}),"\u4e0d\u53ef\u80fd\u4e3anull\uff0c\u9760id\u5c5e\u6027\u7684\u7f3a\u5931 ",(0,r.jsx)(n.em,{children:"(\u5373\uff0c\u4e0d\u8d4b\u503c)"})," \u6765\u8868\u8fbe\u5bf9\u8c61\u6ca1\u6709id\u7684\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8eInput DTO\u800c\u8a00\uff0c\u9759\u6001\u7684POJO\u7c7b\u578b\u6ca1\u6709\u5c5e\u6027\u7f3a\u5931\u7684\u6982\u5ff5\uff0c\u9760null\u6765\u8868\u8fbe\u6ca1\u6709id\u7684\u60c5\u51b5\u3002"}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u4e8c\u8005\u770b\u4f3c\u77db\u76fe\uff0c\u4f46\u5176\u5b9e\u53ef\u4ee5\u7b80\u5355\u5730\u5904\u7406\uff1a\u5982\u679cInput DTO\u7684id\u4e3anull\uff0c\u8f6c\u5316\u540e\u7684\u5b9e\u4f53\u5bf9\u8c61\u65e0id ",(0,r.jsx)(n.em,{children:"(\u867d\u7136id\u4e0d\u5141\u8bb8\u88ab\u8d4b\u4e3anull\uff0c\u4f46\u52a8\u6001\u5bf9\u8c61\u53ef\u4ee5\u4e0d\u5bf9\u5c5e\u6027\u8d4b\u503c)"})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2777 \u660e\u786e\u6307\u5b9a\u6b64InputDTO\u60f3\u4ee5",(0,r.jsx)(c.l,{buttonText:"\u77ed\u5173\u8054",children:(0,r.jsx)(o.M,{})}),"\u7684\u65b9\u5f0f\u7f16\u8f91\u5b9e\u4f53\u7684\u591a\u5bf9\u4e00\u5173\u8054",(0,r.jsx)(n.code,{children:"Book.store"}),"\u3002\u5176\u4e2d\uff0c"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2778 \u660e\u786e\u6307\u5b9a\u6b64InputDTO\u60f3\u4ee5",(0,r.jsx)(c.l,{buttonText:"\u957f\u5173\u8054",children:(0,r.jsx)(d.Y,{})}),"\u7684\u65b9\u5f0f\u7f16\u8f91\u5b9e\u4f53\u7684\u591a\u5bf9\u8fc7\u5173\u8054",(0,r.jsx)(n.code,{children:"Book.authors"}),"\uff0c\n\u5173\u8054\u5bf9\u8c61\u7684\u7c7b\u578b\u4e5f\u88ab\u5185\u5d4c\u7684InputDTO\u7c7b\u578b",(0,r.jsx)(n.code,{children:"BookInput.TargetOf_authors"}),"\u56fa\u5316\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u2779 \u5c06\u52a8\u6001\u5b9e\u4f53\u8f6c\u5316\u4e3a\u9759\u6001InputDTO"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u277a \u5c06\u9759\u6001InputDTO\u8f6c\u5316\u4e3a\u52a8\u6001\u5b9e\u4f53"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"http-api",children:"HTTP API"}),"\n",(0,r.jsx)(n.p,{children:"DTO\u8bed\u8a00\u751f\u6210\u4e86\u76f8\u5bf9\u5b8c\u5907\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u5bf9\u5916\u66b4\u9732\u4fdd\u5b58\u6570\u636e\u7684HTTP API"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // `save(input)`\u7b49\u4ef7\u4e8e`save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input);\n}\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // `save(input)`\u7b49\u4ef7\u4e8e`save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input)\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5e38\u5e38\u9762\u4e34\u4e00\u4e2a\u5b9e\u9645\u7684\u95ee\u9898\uff0c\u5b9e\u4f53\u7684\u5c5e\u6027\u53ef\u80fd\u975e\u5e38\u591a\uff0c\u800c\u4e14"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u63d2\u5165\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u591a"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4fee\u6539\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u5c11"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u4e00\u81f4\u7528\u4f5c\u4f8b\u5b50\u7684",(0,r.jsx)(n.code,{children:"Book"}),"\u7b49\u5b9e\u4f53\u5c5e\u6027\u5f88\u5c11\uff0c\u4e0d\u65b9\u4fbf\u6f14\u793a\uff0c\u56e0\u6b64\uff0c\u6211\u865a\u6784\u4e00\u4e2a\u5c5e\u6027\u8f83\u591a\u7684\u5b9e\u4f53\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"Product"}),"\u3002"]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Product.java"',children:"@Entity\npublic interface Product { \n\n    ...\u7701\u7565\u5b9e\u4f53\u5c5e\u6027...\n}\n"})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Product.kt"',children:"@Entity\ninterface Product { \n\n    ...\u7701\u7565\u5b9e\u4f53\u5c5e\u6027...\n}\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9488\u5bf9\u63d2\u5165\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u591a\u7684\u60c5\u51b5\uff0c\u5b9a\u4e49",(0,r.jsx)(n.code,{children:"CreateProductInput"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9488\u5bf9\u4fee\u6539\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u5c11\u7684\u60c5\u51b5\uff0c\u5b9a\u4e49",(0,r.jsx)(n.code,{children:"UpdateProductInput"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c",(0,r.jsx)(n.code,{children:"Product.dto"}),"\u7684\u4ee3\u7801\u770b\u8d77\u6765\u5e94\u8be5\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"input CreateProductInput {\n    ...\u8f83\u591a\u5c5e\u6027\uff0c\u7565...\n}\n\ninput UpdateProductInput {\n    ...\u8f83\u5c11\u5c5e\u6027\uff0c\u7565...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7f16\u8bd1\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u751f\u6210Java/Kotlin\u7c7b",(0,r.jsx)(n.code,{children:"CreateProductInput"}),"\u548c",(0,r.jsx)(n.code,{children:"UpdateProductInput"}),"\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u5b9e\u73b0\u5982\u4e0b\u4e24\u4e2aHTTP API"]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput`\u5c5e\u6027\u76f8\u5bf9\u591a\n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")\npublic void updateProduct(\n    // `UpdateProductInput`\u5c5e\u6027\u76f8\u5bf9\u5c11\n    // highlight-next-line\n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput`\u5c5e\u6027\u76f8\u5bf9\u591a\n    // highlight-next-line\n    @RequestBody input: CreateProductInput\n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")\nfun updateProduct(\n    // `UpdateProductInput`\u5c5e\u6027\u76f8\u5bf9\u5c11\n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n}\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["\u7531\u6b64\u53ef\u89c1\uff0c\u65e0\u8bba\u9879\u76ee\u7684\u4e1a\u52a1\u7279\u8272\u51b3\u5b9a\u9700\u8981\u4e3a\u540c\u4e00\u5b9e\u4f53\u5b9a\u4e49\u591a\u5c11\u4e86\u4e0d\u540c\u7684",(0,r.jsx)(n.code,{children:"Input DTO"}),"\u7c7b\u578b\u3002\u6700\u7ec8\u90fd\u662f\u5229\u7528DTO\u8bed\u8a00\u5feb\u901f\u751f\u6210Input DTO\u7c7b\u578b\u548c\u76f8\u5173\u6570\u636e\u8f6c\u5316\u903b\u8f91\uff0c\u7136\u540e\u7528\u4e00\u884c\u4ee3\u7801\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u5373\u53ef\u3002"]}),(0,r.jsx)(n.p,{children:"\u54ea\u6015\u9879\u76ee\u7684\u4e1a\u52a1\u66f4\u590d\u6742\u4e00\u4e9b\uff0c\u6bd4\u5982\u4e0d\u540c\u8eab\u4efd\u7684\u4eba\u53ef\u4ee5\u7f16\u8f91\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u4e0d\u540c\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u65ad\u5957\u7528\u6b64\u6a21\u5f0f\u8f7b\u677e\u5e94\u5bf9\u3002"})]})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);