"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1217],{56778:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),l=t(44319),s=t(56347),i=t(94280),o=t(73024),c=t(58417),u=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),j=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(46916);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function g(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(n))}},69016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"showcase/base","title":"1. Basic Query","description":"There are two concepts in Jimmer","source":"@site/docs/showcase/base.mdx","sourceDirName":"showcase","slug":"/showcase/base","permalink":"/jimmer-doc/docs/showcase/base","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/base.mdx","tags":[],"version":"current","lastUpdatedAt":1712586432000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"1. Basic Query"},"sidebar":"tutorialSidebar","previous":{"title":"Showcase \u2605","permalink":"/jimmer-doc/docs/showcase/"},"next":{"title":"2. Fetch Associations","permalink":"/jimmer-doc/docs/showcase/fetch-association/"}}');var a=t(74848),l=t(28453),s=t(37244),i=t(56778);const o={sidebar_position:1,title:"1. Basic Query"},c=void 0,u={},d=[{value:"Query multiple columns",id:"query-multiple-columns",level:2},{value:"Specify properties of the queried object",id:"specify-properties-of-the-queried-object",level:2},{value:"Combine both",id:"combine-both",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"There are two concepts in Jimmer"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Query multiple columns"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Query one object column and specify multiple properties of the queried objects"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"They are completely different concepts"}),"\n",(0,a.jsx)(n.h2,{id:"query-multiple-columns",children:"Query multiple columns"}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Tuple3<Long, String, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.id(),\n        table.name(),\n        table.edition()\n    )\n    .execute();\n'})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.id,\n            table.name,\n            table.edtion\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"In Jimmer, all queries except queries that return only one column are multi-column queries.\nThis example queries three columns, so the return type is 'Tuple3<T1, T2, T3>'."}),"\n",(0,a.jsx)(n.p,{children:"The following data is obtained"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "_1" : 12,\n        "_2" : "GraphQL in Action",\n        "_3" : 3\n    }, {\n        "_1" : 11,\n        "_2" : "GraphQL in Action",\n        "_3" : 2\n    }, {\n        "_1" : 10,\n        "_2" : "GraphQL in Action",\n        "_3" : 1\n    }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"specify-properties-of-the-queried-object",children:"Specify properties of the queried object"}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookTableFetcher.$\n                // `id()` is implicit and is always queried\n                .name()\n                .edition()\n        )\n    )\n    .execute();\n'})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                // `id()` is implicit and is always queried\n                name()\n                edition()\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id" : 12,\n        "name" : "GraphQL in Action",\n        "edition" : 3\n    }, \n    {\n        "id" : 11,\n        "name" : "GraphQL in Action",\n        "edition" : 2\n    }, \n    {\n        "id" : 10,\n        "name" : "GraphQL in Action",\n        "edition" : 1\n    } \n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"It's easy to see that although this query has only one column, we can precisely control the format of this object."}),"\n",(0,a.jsx)(n.p,{children:"In this example, not all the properties of the Book object are queried ('price' and many-to-one association 'store' are not queried),\nbecause the Jimmer entity type 'Book' supports dynamic properties, the number of properties queried for the object does not affect the return type, and it is always of the 'Book' type."}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Jimmer entity objects are dynamic and can be typed uniformly to represent objects of any format ",(0,a.jsxs)(n.em,{children:["(",(0,a.jsx)(n.code,{children:"format"})," is also called ",(0,a.jsx)(n.code,{children:"shape"}),")"]}),"."]}),(0,a.jsx)(n.p,{children:"Therefore, we do not need to use a multi-column query to control the return format under Jimmer, but we should use a single-column query to return a column of objects and flexibly control the object format."}),(0,a.jsx)(n.p,{children:"This results in Jimmer making less use of tuple-based multi-column queries and being more object-oriented."})]}),"\n",(0,a.jsx)(n.h2,{id:"combine-both",children:"Combine both"}),"\n",(0,a.jsxs)(s.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'BookTable table = BookTable.$;\n\nList<Tuple2<Book, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n            table.fetch(\n                    BookFetcher.$\n                            .allScalarFields()\n            ),\n            Expression.numeric().sql(\n                    Integer.class,\n                    "row_number() over(partition by %e order by %e desc)",\n                    new Expression<?>[] { table.storeId(), table.price() }\n            )\n    )\n    .execute();\n'})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        .select(\n            table.fetchBy {\n                allScalarFields()\n            },\n            sql(Int::class, "row_number() over(partition by %e order by %e desc)") {\n                expression(table.storeId)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "_1":{\n            "id":12,\n            "name":"GraphQL in Action",\n            "edition":3,\n            "price":80\n        },\n        "_2":3\n    },\n    {\n        "_1":{\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81\n        },\n        "_2":2\n    },\n    {\n        "_1":{\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82\n        },\n        "_2":1\n    }\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"This example queries two columns"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The first column is the object type, and the object format is 'allScalarFields' (contains all non-associated attributes)*"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The second column is a native SQL expression that calls the underlying database parse function ",(0,a.jsx)(n.em,{children:"('%e' indicates a DSL expression that is used to implant the native SQL code)"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"It's clearly a combination of the two."})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);