"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9045],{44187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(74848),i=t(28453),r=t(11470),l=t(19365);const s={sidebar_position:6,title:"Enum Mapping"},o=void 0,u={id:"mapping/advanced/enum",title:"Enum Mapping",description:"Jimmer handles enums in two ways:",source:"@site/docs/mapping/advanced/enum.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/enum",permalink:"/jimmer-doc/docs/mapping/advanced/enum",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/enum.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Enum Mapping"},sidebar:"tutorialSidebar",previous:{title:"Complex Calculation",permalink:"/jimmer-doc/docs/mapping/advanced/calculated/transient"},next:{title:"JSON Mapping",permalink:"/jimmer-doc/docs/mapping/advanced/json"}},c={},d=[{value:"Map to String",id:"map-to-string",level:2},{value:"Map to Integer",id:"map-to-integer",level:2},{value:"Do Not Explicitly Use @EnumType",id:"do-not-explicitly-use-enumtype",level:2}];function m(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Jimmer handles enums in two ways:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Map to string: A choice with better understandability and traceability, also the default option."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Map to integer: A choice with better performance-first."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Jimmer provides two annotations for enums:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.sql.EnumType"}),": Decorate enum types, optional"]}),"\n",(0,a.jsx)(n.p,{children:"Specify mapping method, map to string or ordinal position to integer"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.sql.EnumItem"}),": Decorate enum items, optional"]}),"\n",(0,a.jsx)(n.p,{children:"Override the mapped string value or integer value for some enum item"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"map-to-string",children:"Map to String"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java" ',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)  \nenum class Gender {\n    MALE,\n    FEMALE\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, the parameter of ",(0,a.jsx)(n.code,{children:"@EnumType"}),' is specified as "NAME", indicating mapping to string. By default, the mapped string values of the two enum items are the same as their names, i.e. "MALE" and "FEMALE".']}),"\n",(0,a.jsxs)(n.p,{children:["If you expect the mapped strings to be different from the enum item names, you can decorate the enum items with ",(0,a.jsx)(n.code,{children:"@EnumItem"}),"."]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:'@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F") \n    FEMALE\n}\n'})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt" ',children:'@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"map-to-integer",children:"Map to Integer"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n    MALE,\n    FEMALE\n} \n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, the parameter of ",(0,a.jsx)(n.code,{children:"@EnumType"}),' is specified as "ORDINAL", indicating mapping to integer. By default, the mapped integer values of the two enum items are the same as their ',(0,a.jsx)(n.code,{children:"ordinal"}),", i.e. 0 and 1."]}),"\n",(0,a.jsxs)(n.p,{children:["If you expect the mapped integers to be different from the enum items' ",(0,a.jsx)(n.code,{children:"ordinal"}),", you can decorate the enum items with ",(0,a.jsx)(n.code,{children:"@EnumItem"}),"."]}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:"@EnumType(EnumType.Strategy.ORDINAL)  \npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:"@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100) \n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"do-not-explicitly-use-enumtype",children:"Do Not Explicitly Use @EnumType"}),"\n",(0,a.jsx)(n.p,{children:"You can also avoid specifying the @EnumType annotation for enum types, that is, not explicitly indicate whether an enum type should be mapped to string or integer."}),"\n",(0,a.jsx)(n.p,{children:"In this case, Jimmer will refer to the default global configuration."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:'The default value of this global configuration is "NAME". If you need "ORDINAL", please override the global configuration.'})}),"\n",(0,a.jsx)(n.p,{children:"Next, we show how to override the global configuration:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When using SpringBoot"}),"\n",(0,a.jsxs)(n.p,{children:["Add configuration item ",(0,a.jsx)(n.code,{children:"jimmer.default-enum-strategy"})," in ",(0,a.jsx)(n.code,{children:"application.yml"})," or ",(0,a.jsx)(n.code,{children:"application.properties"}),' and set its value to "ORDINAL"']}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"When not using SpringBoot"}),"\n",(0,a.jsxs)(r.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...Omit other configurations...\n    .build();\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...Omit other configurations... \n}\n"})})})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>E});var a=t(96540),i=t(18215),r=t(23104),l=t(56347),s=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=p({queryString:t,groupId:i}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),f=(()=>{const e=u??g;return h({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=s[t].value;i!==a&&(u(n),l(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,i.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function E(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);