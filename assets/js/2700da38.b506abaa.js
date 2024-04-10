"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7514],{18452:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=r(74848),i=r(28453),a=r(11470),o=r(19365);const s={sidebar_position:2,title:"Query"},l=void 0,c={id:"graphql/query",title:"Query",description:"Feature Description",source:"@site/docs/graphql/query.mdx",sourceDirName:"graphql",slug:"/graphql/query",permalink:"/jimmer-doc/docs/graphql/query",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/graphql/query.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Query"},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/jimmer-doc/docs/graphql/concept"},next:{title:"Mutation",permalink:"/jimmer-doc/docs/graphql/mutation"}},h={},p=[{value:"Feature Description",id:"feature-description",level:2},{value:"Implement GraphQL Service",id:"implement-graphql-service",level:2},{value:"1. Simplest Implementation",id:"1-simplest-implementation",level:3},{value:"2. Optimize Performance",id:"2-optimize-performance",level:3},{value:"Running Effect",id:"running-effect",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"feature-description",children:"Feature Description"}),"\n",(0,t.jsx)(n.p,{children:"Without Jimmer's support, implementing GraphQL queries requires two types of work:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query aggregate roots"}),"\n",(0,t.jsx)(n.p,{children:"This is work that needs to be done when developing any data service, whether it's a GraphQL service, REST service, or even a service using other custom protocols."}),"\n",(0,t.jsx)(n.p,{children:"Developers only need to query and return standalone aggregate root objects without considering their association properties. So this is a relatively simple development task."}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),", just add the ",(0,t.jsx)(n.code,{children:"@QueryMapping"})," annotation to the query methods in controller classes."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query association properties and calculated properties"}),"\n",(0,t.jsx)(n.p,{children:"This is the bulk of the work required to implement GraphQL queries, requiring consideration of all current object associations and batch loading. There is some workload involved."}),"\n",(0,t.jsx)(n.p,{children:"In other words, it is precisely because the server undertakes these responsibilities that using GraphQL feels free, convenient and powerful on the client side."}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),", some schemes are provided for querying association properties, such as"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers.schema-mapping",children:"@SchemaMapping"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#execution.batching",children:"Batch Loading"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-graphql/docs/current/reference/html/#controllers.batch-mapping",children:"@BatchMapping"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When using Jimmer to implement GraphQL queries, developers only need to focus on querying aggregate roots, just ensuring that these aggregate roots have simple scalar fields. This is because"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"All association properties and calculated properties of entity objects are automatically mapped to GraphQL fields by Jimmer without any development."})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"So far, the GraphQL protocol does not support recursive queries for self-associated properties."}),(0,t.jsxs)(n.p,{children:["Therefore, it is not possible to expose functionality like ",(0,t.jsx)(n.a,{href:"../query/object-fetcher/recursive",children:"recursive queries in object fetchers"})," through GraphQL. This is a functionality sacrifice that must currently be accepted when using GraphQL."]})]}),"\n",(0,t.jsx)(n.h2,{id:"implement-graphql-service",children:"Implement GraphQL Service"}),"\n",(0,t.jsx)(n.h3,{id:"1-simplest-implementation",children:"1. Simplest Implementation"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="BookStoreService.java"',children:"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument; \n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.stereotype.Controller;\n\n...Omit other imports...\n\n@Controller  \npublic class BookStoreService {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreService(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    // highlight-next-line \n    @QueryMapping\n    public List<BookStore> bookStores(\n            @Argument @Nullable String name\n    ) {\n        BookStoreTable table = Tables.BOOK_STORE_TABLE;\n        return sqlClient\n            .createQuery(table)\n            .where(table.name().ilikeIf(name))\n            .select(table) \n            .execute();\n    }\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStoreService.kt"  ',children:"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.QueryMapping\nimport org.springframework.stereotype.Controller  \n\n...Omit other imports...\n\n@Controller\nclass BookStoreService(  \n    private val sqlClient: KSqlClient  \n) {\n\n    // highlight-next-line \n    @QueryMapping\n    fun bookStores(\n        @Argument name: String? \n    ): List<BookStore> =  \n        sqlClient\n            .createQuery(BookStore::class) {\n                where(table.name `ilike?` name)\n                select(table)\n            }\n            .execute() \n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike previous REST services, this example does ",(0,t.jsx)(n.strong,{children:"not"})," use ",(0,t.jsx)(n.a,{href:"../query/object-fetcher",children:"object fetchers"}),", returning the simplest orphan objects ",(0,t.jsx)(n.em,{children:"(orphan objects contain neither associated properties nor calculated properties)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Although we return orphan objects here, if the client's GraphQL request contains associated objects, Jimmer will still automatically load the required associated properties."}),"\n",(0,t.jsx)(n.p,{children:"However, there is a problem with this approach: in non-cache mode, unnecessary properties will also be queried, which has performance issues. We will introduce another approach with optimization capability later."}),"\n",(0,t.jsx)(n.h3,{id:"2-optimize-performance",children:"2. Optimize Performance"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid querying unnecessary non-associated properties in non-cache mode, Jimmer can create a ",(0,t.jsx)(n.code,{children:"Fetcher"})," object based on ",(0,t.jsx)(n.code,{children:"graphql.schema.DataFetchingEnvironment"})," and use this Fetcher to query the database with the object as a parameter."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"In non-cache mode, not querying unnecessary non-associated properties is the essential difference between Jimmer GraphQL and other GraphQL implementations in the Java ecosystem."})}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="BookStoreService.java"  ',children:"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;     \n// highlight-next-line      \nimport graphql.schema.DataFetchingEnvironment;\n// highlight-next-line\nimport org.babyfish.jimmer.spring.graphql.DataFetchingEnvironments;\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.stereotype.Controller;\n\n...Omit other imports...\n\n@Controller  \npublic class BookStoreService {\n\n    private final JSqlClient sqlClient;\n\n    public BookStoreService(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    @QueryMapping\n    public List<BookStore> bookStores( \n            @Argument @Nullable String name,\n            // highlight-next-line\n            DataFetchingEnvironment env\n    ) {\n        BookStoreTable table = Tables.BOOK_STORE_TABLE;\n        return sqlClient\n            .createQuery(table) \n            .where(table.name().ilikeIf(name))\n            .select(\n                table.fetch(  \n                    // highlight-next-line\n                    DataFetchingEnvironments.createQuery(\n                        BookStore.class,\n                        env  \n                    )\n                )\n            )\n            .execute();\n    }\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStoreService.kt"   ',children:"package com.example.business  \n\nimport org.springframework.graphql.data.method.annotation.Argument  \n// highlight-next-line\nimport graphql.schema.DataFetchingEnvironment  \n// highlight-next-line \nimport org.babyfish.jimmer.spring.graphql.toFetcher\nimport org.springframework.graphql.data.method.annotation.QueryMapping\nimport org.springframework.stereotype.Controller   \n\n...Omit other imports...  \n\n@Controller    \nclass BookStoreService(   \n    private val sqlClient: KSqlClient    \n) {\n\n    @QueryMapping\n    fun bookStores(\n        @Argument name: String?,    \n        // highlight-next-line\n        env: DataFetchingEnvironment \n    ): List<BookStore> =    \n        sqlClient\n            .createQuery(BookStore::class) {\n                where(table.name `ilike?` name) \n                select(\n                    table.fetch(\n                        // highlight-next-line\n                        env.toFetcher()    \n                    )\n                )\n            }\n            .execute()  \n}\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"running-effect",children:"Running Effect"}),"\n",(0,t.jsx)(n.p,{children:"In the accompanying example, the GraphQL related projects are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Language"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Java"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/jimmer-sql-graphql",children:"jimmer-examples/java/jimmer-sql-graphql"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kotlin"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/jimmer-sql-graphql-kt",children:"jimmer-examples/kotlin/jimmer-sql-graphql-kt"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Select any project, open and start it. Finally, use the browser to visit ",(0,t.jsx)(n.a,{href:"http://localhost:8080/graphiql",children:"http://localhost:8080/graphiql"})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Be careful, it's /graph",(0,t.jsx)(n.strong,{children:"i"}),"ql, not /graphql"]})}),"\n",(0,t.jsx)(n.p,{children:"Execute the request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"query {\n  bookStores {\n    id\n    name\n    avgPrice \u2776\n    books { \u2777\n      id\n      name\n      edition\n      price\n      authors { \u2778\n        id\n        firstName\n        fullName\n        gender\n      }\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2776 Query calculated property ",(0,t.jsx)(n.code,{children:"BookStore.avgPrice"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2777 Query association property ",(0,t.jsx)(n.code,{children:"BookStore.books"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2778 Query association property ",(0,t.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The return result is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data":{\n        "bookStores":[\n            {\n                "id":2,\n                "name":"MANNING",\n                // highlight-next-line\n                "avgPrice":80.333333,\n                // highlight-next-line\n                "books":[\n                    {\n                        "id":10,\n                        "name":"GraphQL in Action",\n                        "edition":1,\n                        "price":80,\n                        // highlight-next-line\n                        "authors":[\n                            {\n                                "id":5,\n                                "firstName":"Samer",\n                                "fullName":"Samer Buna",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":11,\n                        ...omitted...  \n                    },\n                    {\n                        "id":12,\n                        ...omitted...\n                    }\n                ]\n            },\n            {\n                "id":1,\n                "name":"O\'REILLY",\n                // highlight-next-line\n                "avgPrice":58.5,\n                // highlight-next-line\n                "books":[\n                    {\n                        "id":4,\n                        "name":"Effective TypeScript",\n                        "edition":1,\n                        "price":73,\n                        // highlight-next-line\n                        "authors":[\n                            {\n                                "id":3,\n                                "firstName":"Dan",\n                                "fullName":"Dan Vanderkam",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":5,\n                        ...omitted...\n                    },\n                    {\n                        "id":6,\n                        ...omitted...\n                    },\n                    {\n                        "id":1,\n                        "name":"Learning GraphQL",\n                        "edition":1,\n                        "price":50,\n                        "authors":[\n                            {\n                                "id":2,\n                                "firstName":"Alex",\n                                "fullName":"Alex Banks",\n                                "gender":"MALE"\n                            },\n                            {\n                                "id":1,\n                                "firstName":"Eve",\n                                "fullName":"Eve Procello",\n                                "gender":"FEMALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":2,\n                        "name":"Learning GraphQL",\n                        "edition":2,\n                        "price":55,\n                        "authors":[\n                            {\n                                "id":2,\n                                "firstName":"Alex",\n                                "fullName":"Alex Banks",\n                                "gender":"MALE"\n                            },\n                            {\n                                "id":1,\n                                "firstName":"Eve",\n                                "fullName":"Eve Procello",\n                                "gender":"FEMALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":3,\n                        "name":"Learning GraphQL",\n                        "edition":3,\n                        "price":51,\n                        "authors":[\n                            {\n                                "id":2,\n                                "firstName":"Alex",\n                                "fullName":"Alex Banks",\n                                "gender":"MALE"\n                            },\n                            {\n                                "id":1,\n                                "firstName":"Eve",\n                                "fullName":"Eve Procello",\n                                "gender":"FEMALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":7,\n                        "name":"Programming TypeScript",\n                        "edition":1,\n                        "price":47.5,\n                        "authors":[\n                            {\n                                "id":4,\n                                "firstName":"Boris",\n                                "fullName":"Boris Cherny",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":8,\n                        "name":"Programming TypeScript",\n                        "edition":2,\n                        "price":45,\n                        "authors":[\n                            {\n                                "id":4,\n                                "firstName":"Boris",\n                                "fullName":"Boris Cherny",\n                                "gender":"MALE"\n                            }\n                        ]\n                    },\n                    {\n                        "id":9,\n                        "name":"Programming TypeScript",\n                        "edition":3,\n                        "price":48,\n                        "authors":[\n                            {\n                                "id":4,\n                                "firstName":"Boris",\n                                "fullName":"Boris Cherny",\n                                "gender":"MALE"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(18215);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>q});var t=r(96540),i=r(18215),a=r(23104),o=r(56347),s=r(205),l=r(57485),c=r(31682),h=r(89466);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function d(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const i=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,p]=m({queryString:r,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,h.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),x=(()=>{const e=c??g;return d({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,a]),tabValues:a}}var f=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),h=e=>{const n=e.currentTarget,r=l.indexOf(n),i=s[r].value;i!==t&&(c(n),o(i))},p=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:p,onClick:h,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function q(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);