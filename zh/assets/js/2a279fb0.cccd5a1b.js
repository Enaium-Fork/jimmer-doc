"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8722],{92682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),l=t(11470),i=t(19365);const s={sidebar_position:1,title:"1. \u57fa\u672c\u67e5\u8be2"},o=void 0,c={id:"showcase/base",title:"1. \u57fa\u672c\u67e5\u8be2",description:"Jimmer\u4e2d\u6709\u4e24\u4e2a\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/base.mdx",sourceDirName:"showcase",slug:"/showcase/base",permalink:"/jimmer-doc/zh/docs/showcase/base",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/base.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1. \u57fa\u672c\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u6848\u4f8b\u5c55\u793a \u2605",permalink:"/jimmer-doc/zh/docs/showcase/"},next:{title:"2. \u6293\u53d6\u5173\u8054",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/"}},u={},d=[{value:"\u67e5\u8be2\u591a\u5217",id:"\u67e5\u8be2\u591a\u5217",level:2},{value:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027",id:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027",level:2},{value:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005",id:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jimmer\u4e2d\u6709\u4e24\u4e2a\u6982\u5ff5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u8be2\u591a\u5217"}),"\n",(0,r.jsx)(n.li,{children:"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\u5217\uff0c\u5e76\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b83\u4eec\u662f\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u591a\u5217",children:"\u67e5\u8be2\u591a\u5217"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Tuple3<Long, String, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.id(),\n        table.name(),\n        table.edition()\n    )\n    .execute();\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.id,\n            table.name,\n            table.edtion\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728Jimmer\u4e2d\uff0c\u9664\u4e86\u53ea\u8fd4\u56de\u4e00\u5217\u7684\u67e5\u8be2\u5916\uff0c\u5176\u4ed6\u90fd\u662f\u591a\u5217\u67e5\u8be2\u3002\u8fd9\u4e2a\u4f8b\u5b50\u67e5\u8be2\u4e86\u4e09\u5217\uff0c\u6545\u8fd4\u56de\u7c7b\u578b\u4e3a",(0,r.jsx)(n.code,{children:"Tuple3<T1, T2, T3>"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7b49\u5230\u5982\u4e0b\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "_1" : 12,\n        "_2" : "GraphQL in Action",\n        "_3" : 3\n    }, {\n        "_1" : 11,\n        "_2" : "GraphQL in Action",\n        "_3" : 2\n    }, {\n        "_1" : 10,\n        "_2" : "GraphQL in Action",\n        "_3" : 1\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027",children:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookTableFetcher.$\n                // `id()`\u662f\u9690\u542b\u7684\uff0c\u603b\u662f\u88ab\u67e5\u8be2\n                .name()\n                .edition()\n        )\n    )\n    .execute();\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                // `id()`\u662f\u9690\u542b\u7684\uff0c\u603b\u662f\u88ab\u67e5\u8be2\n                name()\n                edition()\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u7b49\u5230\u5982\u4e0b\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id" : 12,\n        "name" : "GraphQL in Action",\n        "edition" : 3\n    }, \n    {\n        "id" : 11,\n        "name" : "GraphQL in Action",\n        "edition" : 2\n    }, \n    {\n        "id" : 10,\n        "name" : "GraphQL in Action",\n        "edition" : 1\n    } \n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u96be\u770b\u51fa\uff0c\u867d\u7136\u8fd9\u4e2a\u67e5\u8be2\u53ea\u6709\u4e00\u5217\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u7cbe\u786e\u5730\u63a7\u5236\u8fd9\u4e2a\u5bf9\u8c61\u7684\u683c\u5f0f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u5e76\u6ca1\u6709\u67e5\u8be2\u51faBook\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027 ",(0,r.jsxs)(n.em,{children:["(",(0,r.jsx)(n.code,{children:"price"}),"\u548c\u591a\u5bf9\u4e00\u5173\u8054",(0,r.jsx)(n.code,{children:"store"}),"\u672a\u88ab\u67e5\u8be2)"]}),"\uff0c\u7531\u4e8eJimmer\u5b9e\u4f53\u5bf9\u8c61",(0,r.jsx)(n.code,{children:"Book"}),"\u6267\u884c\u52a8\u6001\u7279\u6027\uff0c\u5bf9\u8c61\u88ab\u67e5\u8be2\u5c5e\u6027\u7684\u591a\u6216\u5c11\u4e0d\u4f1a\u5f71\u54cd\u8fd4\u56de\u7c7b\u578b\uff0c\u4e00\u5f8b\u4e3a",(0,r.jsx)(n.code,{children:"Book"}),"\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Jimmer\u5b9e\u4f53\u5bf9\u8c61\u5177\u5907\u52a8\u6001\u6027\uff0c\u53ef\u4ee5\u7528\u7edf\u4e00\u7684\u7c7b\u578b\u8868\u8fbe\u4efb\u610f\u683c\u5f0f\u7684\u5bf9\u8c61\u3002"}),(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0cJimmer\u4e0b\u4e0d\u9700\u8981\u4f7f\u7528\u591a\u5217\u67e5\u8be2\u6765\u63a7\u5236\u8fd4\u56de\u683c\u5f0f\uff0c\u6211\u4eec\u66f4\u5e94\u8be5\u4f7f\u7528\u5355\u5217\u67e5\u8be2\u8fd4\u56de\u4e00\u5217\u5bf9\u8c61\uff0c\u5e76\u7075\u6d3b\u63a7\u5236\u5bf9\u8c61\u683c\u5f0f\u3002"}),(0,r.jsx)(n.p,{children:"\u8fd9\u4f1a\u5bfc\u81f4Jimmer\u5f88\u5c11\u4f7f\u7528\u57fa\u4e8e\u5143\u7ec4\u7684\u591a\u5217\u67e5\u8be2\uff0c\u66f4\u52a0\u9762\u5411\u5bf9\u8c61\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005",children:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Tuple2<Book, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n            table.fetch(\n                    BookFetcher.$\n                            .allScalarFields()\n            ),\n            Expression.numeric().sql(\n                    Integer.class,\n                    "row_number() over(partition by %e order by %e desc)",\n                    new Expression<?>[] { table.storeId(), table.price() }\n            )\n    )\n    .execute();\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        .select(\n            table.fetchBy {\n                allScalarFields()\n            },\n            sql(Int::class, "row_number() over(partition by %e order by %e desc)") {\n                expression(table.storeId)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "_1":{\n            "id":12,\n            "name":"GraphQL in Action",\n            "edition":3,\n            "price":80\n        },\n        "_2":3\n    },\n    {\n        "_1":{\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81\n        },\n        "_2":2\n    },\n    {\n        "_1":{\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82\n        },\n        "_2":1\n    }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u67e5\u8be2\u7c7b\u4e24\u5217"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7b2c\u4e00\u5217\u4e3a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5bf9\u8c61\u683c\u5f0f\u4e3a",(0,r.jsx)(n.code,{children:"allScalarFields"}),(0,r.jsx)(n.em,{children:"(\u5305\u542b\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027)"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7b2c\u4e8c\u5217\u662f\u4e00\u4e2aNative SQL\u8868\u8fbe\u5f0f\uff0c\u8c03\u7528\u5e95\u5c42\u6570\u636e\u5e93\u7684\u5206\u6790\u51fd\u6570 ",(0,r.jsxs)(n.em,{children:["(",(0,r.jsx)(n.code,{children:"%e"}),"\u8868\u793a\u7528\u4e3aNative SQL\u4ee3\u7801\u690d\u5165DSL\u8868\u8fbe\u5f0f)"]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f88\u660e\u663e\u8fd9\u662f\u4e8c\u8005\u7684\u7efc\u5408\u8fd0\u7528\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),l=t(23104),i=t(56347),s=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=b({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),j=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function k(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);