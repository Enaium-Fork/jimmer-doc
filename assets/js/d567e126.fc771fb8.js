"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[449],{56778:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),o=t(18215),a=t(44319),i=t(56347),s=t(94280),l=t(73024),c=t(58417),u=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:o}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),f=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=t(46916);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==r&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},49444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"graphql/mutation","title":"Mutation","description":"Introduction to GraphQL Input","source":"@site/docs/graphql/mutation.mdx","sourceDirName":"graphql","slug":"/graphql/mutation","permalink":"/jimmer-doc/docs/graphql/mutation","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/graphql/mutation.mdx","tags":[],"version":"current","lastUpdatedAt":1714253334000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Mutation"},"sidebar":"tutorialSidebar","previous":{"title":"Query","permalink":"/jimmer-doc/docs/graphql/query"},"next":{"title":"Object","permalink":"/jimmer-doc/docs/object/"}}');var o=t(74848),a=t(28453),i=t(37244),s=t(56778);const l={sidebar_position:3,title:"Mutation"},c=void 0,u={},d=[{value:"Introduction to GraphQL Input",id:"introduction-to-graphql-input",level:2},{value:"Define Jimmer Input DTO",id:"define-jimmer-input-dto",level:2},{value:"Implement GraphQL mutation",id:"implement-graphql-mutation",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction-to-graphql-input",children:"Introduction to GraphQL Input"}),"\n",(0,o.jsx)(n.p,{children:"In GraphQL, GraphQLObjects returned by queries are dynamic objects of arbitrary shapes. However, if mutation operations accept object parameters, they must be GraphQLInputs, which are static objects of fixed shapes."}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://graphql.org/graphql-js/mutations-and-input-types/",children:"GraphQLInput"})," to learn more."]}),"\n",(0,o.jsxs)(n.p,{children:["Take the GraphQL declaration file in the example ",(0,o.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/java/jimmer-sql-graphql/service/src/main/resources/graphql/schema.graphqls",children:"schema.graphqls"})," as an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"type Book implements CommonEntity { \u2776\n    id: Long!\n    name: String!\n    edition: Int!\n    price: BigDecimal!\n    store: BookStore\n    authors: [Author!]!\n    createdTime: LocalDateTime!\n    modifiedTime: LocalDateTime!\n    tenant: String!\n}\n\ninput BookInput { \u2777\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n\n...other code omitted...\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2776 Types declared with the ",(0,o.jsx)(n.code,{children:"type"})," keyword are dynamic types used to express arbitrary data structures, used as GraphQL output types"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2777 Types declared with the ",(0,o.jsx)(n.code,{children:"input"})," keyword are static types used to express fixed data structures, used as GraphQL input types"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"define-jimmer-input-dto",children:"Define Jimmer Input DTO"}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer Input DTOs are introduced in great detail in ",(0,o.jsx)(n.a,{href:"../mutation/save-command/input-dto",children:"Save Command/Input DTO"}),", which will not be repeated here."]}),"\n",(0,o.jsx)(n.p,{children:"Jimmer provides two ways to define Input DTOs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../object/view/dto-language",children:"Automatically generate Input DTOs using the DTO language"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../object/view/mapstruct",children:"Manually define Input DTOs based on MapStruct"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Using the DTO language can achieve our goal very efficiently, so this article adopts this approach."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"In the project where the entity is defined"}),", create the directory ",(0,o.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under ",(0,o.jsx)(n.code,{children:"src/main/dto"}),", create subdirectories ",(0,o.jsx)(n.code,{children:"com/yourcompany/yourpoject/model"})," according to the package path where the entities are located"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Under the directory created in the previous step, create the file ",(0,o.jsx)(n.code,{children:"Book.dto"}),". The file must have the same name as the entity class and the extension must be ",(0,o.jsx)(n.code,{children:"dto"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Edit this file and use the DTO language to define various DTO shapes for the Book entity"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto" ',children:"input BookInput {\n    \n    #allScalars(Book)\n\n    id(store)\n\n    id(authors) as authorIds\n}\n\n...other DTO definitions omitted...\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After compilation, the following Input DTO will be generated automatically:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(s.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"',children:'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookInput implements Input<Book> { \u2776\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n\n    @Override\n    public Book toEntity() { \u2777\n        ...omitted...\n    }\n\n    ...other members omitted...\n}\n'})})}),(0,o.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt" ',children:'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookInput(\n    val id: Long? = null,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()  \n): Input<Book> { \u2776\n\n    override fun toEntity(): Book = \u2777\n        ...omitted...\n    \n    ...other members omitted...\n}\n'})})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2776 The ",(0,o.jsx)(n.code,{children:"BookInput"})," class implements the interface ",(0,o.jsx)(n.code,{children:"org.babyfish.jimmer.Input"}),", which supports the ",(0,o.jsx)(n.code,{children:"toEntity"})," method to convert the current Input DTO object to a Jimmer dynamic entity object."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2777 Implements the ",(0,o.jsx)(n.code,{children:"Input.toEntity"})," method"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"implement-graphql-mutation",children:"Implement GraphQL mutation"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(s.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookStoreService.java"',children:"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.stereotype.Controller;\n\n...other imports omitted...\n\n@Controller\npublic class BookStoreService {\n\n    private final BookStoreRepsitory bookStoreRepsitory;\n\n    public BookStoreService(BookStoreRepsitory bookStoreRepsitory) {\n        this.bookStoreRepsitory = bookStoreRepsitory;\n    }\n\n    @MutationMapping \u2776\n    @Transactional\n    public Book saveBook(\n        @Argument BookInput input \u2777 \n    ) {\n        // `save(input)` is shorthand for `save(input.toEntity())`\n        return bookRepository.save(input); \u2778\n    }\n}\n"})})}),(0,o.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStoreService.kt"',children:"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line  \nimport org.springframework.graphql.data.method.annotation.MutationMapping\nimport org.springframework.stereotype.Controller\n\n...other imports omitted...\n\n@Controller\nclass BookStoreService(\n    private val bookStoreRepository: BookStoreRepsitory\n) {\n\n    @MutationMapping \u2776\n    @Transactional\n    fun saveBook(\n        @Argument input: BookInput \u2777\n    ): Book =\n        // `save(input)` is shorthand for `save(input.toEntity())`\n        bookRepository.save(input) \u2778\n}\n"})})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2776 Use annotation ",(0,o.jsx)(n.code,{children:"@org.springframework.graphql.data.method.annotation.MutationMapping"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2777 Use the static Input DTO type ",(0,o.jsx)(n.code,{children:"BookInput"})," to allow users to pass only data structures of specified shapes to conform to ",(0,o.jsx)(n.a,{href:"https://graphql.org/graphql-js/mutations-and-input-types/",children:"GraphQLInput"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2778 ",(0,o.jsx)(n.a,{href:"../mutation/save-command",children:"Save command"})," to save arbitrary data structures in one line"]}),"\n",(0,o.jsxs)(n.p,{children:["Here ",(0,o.jsx)(n.code,{children:"bookRepository.save(input)"})," is actually shorthand for ",(0,o.jsx)(n.code,{children:"bookRepository.save(input.toEntity())"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["No matter how simple or relatively complex the data structure defined by the ",(0,o.jsx)(n.code,{children:"BookInput"})," type, it can be saved in one line. This is the core value of the ",(0,o.jsx)(n.a,{href:"../mutation/save-command",children:"save command"})," feature."]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);