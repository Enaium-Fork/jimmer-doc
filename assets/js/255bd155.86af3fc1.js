"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7762],{16490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=t(74848),r=t(28453),i=t(11470),a=t(19365);const l={sidebar_position:2,title:"Table Join Optimization"},s=void 0,c={id:"query/paging/unncessary-join",title:"Table Join Optimization",description:"In the previous article, we mentioned that Jimmer can not only auto-generate count-query from data-query, but also auto-optimize the count-query.",source:"@site/docs/query/paging/unncessary-join.mdx",sourceDirName:"query/paging",slug:"/query/paging/unncessary-join",permalink:"/jimmer-doc/docs/query/paging/unncessary-join",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/paging/unncessary-join.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Table Join Optimization"},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/jimmer-doc/docs/query/paging/usage"},next:{title:"Reverse Sorting Optimization",permalink:"/jimmer-doc/docs/query/paging/reverse-sorting"}},u={},d=[{value:"Optimization Rules",id:"optimization-rules",level:2},{value:"Non-Optimizable Scenario",id:"non-optimizable-scenario",level:2},{value:"Optimizable Scenario",id:"optimizable-scenario",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In the previous article, we mentioned that Jimmer can not only auto-generate ",(0,o.jsx)(n.code,{children:"count-query"})," from ",(0,o.jsx)(n.code,{children:"data-query"}),", but also auto-optimize the ",(0,o.jsx)(n.code,{children:"count-query"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.code,{children:"count-query"})," only cares about total row count regardless of order and format, some table joins in the original ",(0,o.jsx)(n.code,{children:"data-query"})," may not need to be copied over to ",(0,o.jsx)(n.code,{children:"count-query"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer will auto-optimize ",(0,o.jsx)(n.code,{children:"count-query"})," to copy over as few table joins as possible from the original data-query."]}),"\n",(0,o.jsx)(n.h2,{id:"optimization-rules",children:"Optimization Rules"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Table joins used by the where clause cannot be optimized."}),"\n",(0,o.jsxs)(n.p,{children:["That is, ",(0,o.jsx)(n.strong,{children:"only"})," table joins used solely by the ",(0,o.jsx)(n.code,{children:"select"})," or ",(0,o.jsx)(n.code,{children:"order by"})," clause of the top-level query can be optimized."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Table joins based on collection associations (one-to-many, many-to-many) cannot be optimized."}),"\n",(0,o.jsxs)(n.p,{children:["Collection associations lead to duplicate data, thus affecting row count. So these table joins must be copied to ",(0,o.jsx)(n.code,{children:"count-query"})," and cannot be optimized."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Table joins based on reference associations (one-to-one, many-to-one) may be optimized, if any of the following conditions is met:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Join type is left outer join"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Although join type is inner join, the association is based on non-null real foreign key."}),"\n",(0,o.jsxs)(n.p,{children:["So-called real foreign key means there is a foreign key constraint in the database. See ",(0,o.jsx)(n.a,{href:"../../mapping/base/foreignkey",children:"Real vs Fake Foreign Keys"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In summary, to determine whether a table join in the original data-query can be automatically removed in the count-query, use the following optimization rules:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{rowspan:"4",children:(0,o.jsx)(n.p,{children:"AND"})}),(0,o.jsx)("td",{colspan:"2",children:(0,o.jsx)(n.p,{children:"Is based on reference association, i.e. many-to-one or one-to-one"})})]}),(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colspan:"2",children:(0,o.jsxs)(n.p,{children:["Is used ",(0,o.jsx)("b",{children:"solely"})," by select or orderBy clause of top-level query"]})})}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{rowspan:"2",children:(0,o.jsx)(n.p,{children:"OR"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Is left outer join"})})]}),(0,o.jsx)("tr",{children:(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Association is non-null and foreign key constraint exists in database"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"non-optimizable-scenario",children:"Non-Optimizable Scenario"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20), \n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store().name())  \n    .orderBy(book.name())\n    .select(book);\n\nint rowCount = query.fetchUnlimitedCount(); \n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)  \n        )\n    )\n    // highlight-next-line \n    orderBy(table.store.name) // \u03b1\n    orderBy(table.name)\n    select(table)\n}  \n\nval rowCount = query.fetchUnlimitedCount()\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Note \u03b1:"}),"\n",(0,o.jsxs)(n.p,{children:["Although ",(0,o.jsx)(n.code,{children:"table.store()"})," is only used by ",(0,o.jsx)(n.code,{children:"orderBy"})," clause without being used by where clause,"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"table.store()"})," is inner join"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Book.store"})," association is nullable"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["So the optimization rules do not apply. The count-query still needs to retain ",(0,o.jsx)(n.code,{children:"table.store()"})," and ultimately generates JOIN clause in SQL:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    count(tb_1_.ID)\nfrom BOOK as tb_1_\n/* highlight-start */  \ninner join BOOK_STORE as tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID \n/* highlight-end */\nwhere tb_1_.PRICE between ? and ?\n"})}),"\n",(0,o.jsx)(n.h2,{id:"optimizable-scenario",children:"Optimizable Scenario"}),"\n",(0,o.jsx)(n.p,{children:"For the unoptimizable case discussed above, any of the following modifications will enable optimization:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"Book.store"})," association to non-null"]}),"\n",(0,o.jsx)(n.li,{children:"Use left outer join"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here we choose the second approach, left outer join:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20),\n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store(JoinType.LEFT).name())\n    .orderBy(book.name()) \n    .select(book);\n\nint rowCount = query.fetchUnlimitedCount();\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    orderBy(table.`store?`.name) // \u03b1  \n    orderBy(table.name)\n    select(table)\n}\n\nval rowCount = query.fetchUnlimitedCount() \n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Now optimization can take effect. The final count-query generates SQL:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    count(tb_1_.ID)  \nfrom BOOK as tb_1_\nwhere tb_1_.PRICE between ? and ?\n"})})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var o=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(96540),r=t(18215),i=t(23104),a=t(56347),l=t(205),s=t(57485),c=t(31682),u=t(89466);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[a,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:r}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),x=(()=>{const e=c??m;return b({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&s(x)}),[x]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==o&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(f,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(96540);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);