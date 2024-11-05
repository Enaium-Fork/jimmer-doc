"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9520],{56778:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(96540),a=t(18215),l=t(44319),i=t(56347),o=t(94280),s=t(73024),u=t(58417),c=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,d]=p({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=u??m;return g({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(46916);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function A(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},29150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/group","title":"Aggregate & Group","description":"Aggregation","source":"@site/docs/query/group.mdx","sourceDirName":"query","slug":"/query/group","permalink":"/jimmer-doc/docs/query/group","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/group.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Aggregate & Group"},"sidebar":"tutorialSidebar","previous":{"title":"Dynamic Ordering","permalink":"/jimmer-doc/docs/query/dynamic-order"},"next":{"title":"Smart Paging","permalink":"/jimmer-doc/docs/query/paging/"}}');var a=t(74848),l=t(28453),i=t(37244),o=t(56778);const s={sidebar_position:7,title:"Aggregate & Group"},u=void 0,c={},d=[{value:"Aggregation",id:"aggregation",level:2},{value:"Grouping",id:"grouping",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"aggregation",children:"Aggregation"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nlong count = sqlClient\n    .createQuery(table)\n    .where(table.name().ilike("graphql"))\n    .select(\n        table\n            .asTableEx().authors().id()\n            // highlight-next-line\n            .count(true) // distinct: true\n    )\n    .fetchOne();\n'})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val count = sqlClient\n    .createQuery(Book::class) {\n        where(table.name.ilike("graphq"))\n        select(\n            // highlight-next-line\n            count(\n                table.asTableEx().authors.id,\n                distinct = true\n            )\n        )\n    }\n    .fetchOne()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select\n    // highlight-next-line \n    count(distinct tb_2_.AUTHOR_ID)\nfrom BOOK tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.BOOK_ID\nwhere\n    lower(tb_1_.NAME) like ? /* %graphq% */\n"})}),"\n",(0,a.jsx)(n.h2,{id:"grouping",children:"Grouping"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\nList<Tuple2<Long, BigDecimal>> tuples = sqlClient\n    .createQuery(table)\n    .groupBy(table.storeId()) \u2776\n    .select(\n            table.storeId(), \u2777\n            table.price().avg() \u2778\n    )\n    .execute();\n"})})}),(0,a.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val tuples: List<Tuple2<Long, BigDecimal>> = sqlClient\n    .createQuery(Book::class) {\n        groupBy(table.store.id) \u2776\n        select(\n            table.store.id, \u2777\n            avg(table.price).asNonNull() \u2778\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2776 Group by ",(0,a.jsx)(n.code,{children:"STORE_ID"}),", the foreign key of ",(0,a.jsx)(n.code,{children:"BOOK"})," table"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["Here Jimmer does not treat ",(0,a.jsx)(n.code,{children:"table.store"})," as a join operation, but considers ",(0,a.jsx)(n.code,{children:"table.store.id"})," as a whole as the foreign key field."]}),(0,a.jsxs)(n.p,{children:["Please see ",(0,a.jsx)(n.a,{href:"./dynamic-join/optimization#phantom-joins",children:"phantom joins"}),"."]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u2777 Grouping columns can be directly queried."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u2778 Non-grouping columns can only be queried as parameters of aggregate functions."}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsxs)(n.p,{children:["The Kotlin code has an extra function call: ",(0,a.jsx)(n.code,{children:"asNonNull()"}),"."]}),(0,a.jsxs)(n.p,{children:["In Jimmer Kotlin DSL, aggregate functions like ",(0,a.jsx)(n.code,{children:"avg"})," ",(0,a.jsxs)(n.em,{children:["(also ",(0,a.jsx)(n.code,{children:"sum"}),", ",(0,a.jsx)(n.code,{children:"min"}),", ",(0,a.jsx)(n.code,{children:"max"}),")"]})," return Nullable types. For a table with no data, aggregating any column would return null without grouping."]}),(0,a.jsx)(n.p,{children:"However this is not the case when used with grouping. After grouping, each group has at least one row internally, if the original field being aggregated is non-null itself, the result after aggregation would not be null."}),(0,a.jsxs)(n.p,{children:["So here ",(0,a.jsx)(n.code,{children:"asNonNull()"})," converts the Nullable expression to NonNull, such that ",(0,a.jsx)(n.code,{children:"execute()"})," returns ",(0,a.jsx)(n.code,{children:"List<Tuple2<Long, BigDecimal>>"}),", same as the type explicitly specified for ",(0,a.jsx)(n.code,{children:"tuples"})," in the first line."]}),(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"asNonNull()"})," is removed, ",(0,a.jsx)(n.code,{children:"execute()"})," would return ",(0,a.jsx)(n.code,{children:"List<Tuple2<Long, BigDecimal?>>"}),", causing compile error."]})]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);