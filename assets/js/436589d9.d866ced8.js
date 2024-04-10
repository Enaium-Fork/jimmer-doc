"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8875],{41166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),l=n(11470),o=n(19365);const s={sidebar_position:1,title:"5.1 Basic Usage"},i=void 0,u={id:"showcase/order-by/usage",title:"5.1 Basic Usage",description:"Multiple orderBy actions",source:"@site/docs/showcase/order-by/usage.mdx",sourceDirName:"showcase/order-by",slug:"/showcase/order-by/usage",permalink:"/jimmer-doc/docs/showcase/order-by/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/order-by/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"5.1 Basic Usage"},sidebar:"tutorialSidebar",previous:{title:"5. Sorting",permalink:"/jimmer-doc/docs/showcase/order-by/"},next:{title:"5.2 Dynamic Sorting",permalink:"/jimmer-doc/docs/showcase/order-by/dynamic"}},c={},d=[{value:"Multiple orderBy actions",id:"multiple-orderby-actions",level:2},{value:"orderBy with mutiple arguments",id:"orderby-with-mutiple-arguments",level:2},{value:"Sorting based on subqueries",id:"sorting-based-on-subqueries",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"multiple-orderby-actions",children:"Multiple orderBy actions"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .orderBy(table.name().asc())\n    // highlight-next-line\n    .orderBy(table.edition().desc())\n    .select(table)\n    .execute();\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        orderBy(table.name().asc())\n        // highlight-next-line\n        orderBy(table.edition().desc())\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"orderby-with-mutiple-arguments",children:"orderBy with mutiple arguments"}),"\n",(0,r.jsx)(t.p,{children:"There is another way to write the equivalent of the above code"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .orderBy(\n        table.name().asc(), \n        table.edition().desc()\n    )\n    .select(table)\n    .execute();\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        orderBy(\n            table.name().asc(), \n            table.edition().desc()\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"However, the previous way of writing is more conducive to the organization of the code structure, so the previous way of writing is more recommended."}),"\n",(0,r.jsx)(t.h2,{id:"sorting-based-on-subqueries",children:"Sorting based on subqueries"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"BookTable table = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .orderBy(\n        sqlClient\n            .createSubQuery(author)\n            .where(author.books().eq(table))\n            .select(Expression.rowCount())\n            .desc()\n    )\n    .select(table)\n    .execute();\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        orderBy(\n            subQuery(Author::class) {\n                where(table.books() eq parentTable)\n                select(rowCount())\n            }\n            .desc()\n        )\n        select(table)\n    }\n    .execute()\n"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var l=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(18215),l=n(23104),o=n(56347),s=n(205),i=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??p;return b({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const a={},l=r.createContext(a);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);