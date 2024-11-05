"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5512],{56778:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),a=t(18215),l=t(44319),i=t(56347),s=t(94280),o=t(73024),c=t(58417),u=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(46916);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function S(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},49713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"mapping/base/more-type","title":"\u66f4\u591a\u7c7b\u578b","description":"\u9664\u4e86boolean\uff0c\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0cUUID\uff0c\u65e5\u671f\uff0c\u679a\u4e3e\u5916\uff0c\u6807\u91cf\u5c5e\u6027\u8fd8\u652f\u6301\u5176\u4ed6\u7c7b\u578b\uff0c\u5305\u62ec","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/more-type.mdx","sourceDirName":"mapping/base","slug":"/mapping/base/more-type","permalink":"/jimmer-doc/zh/docs/mapping/base/more-type","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/more-type.mdx","tags":[],"version":"current","lastUpdatedAt":1712768787000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"\u66f4\u591a\u7c7b\u578b"},"sidebar":"tutorialSidebar","previous":{"title":"JSON Converter","permalink":"/jimmer-doc/zh/docs/mapping/base/json-converter"},"next":{"title":"\u8fdb\u9636\u6620\u5c04","permalink":"/jimmer-doc/zh/docs/mapping/advanced/"}}');var a=t(74848),l=t(28453),i=t(37244),s=t(56778);const o={sidebar_position:6,title:"\u66f4\u591a\u7c7b\u578b"},c=void 0,u={},d=[{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",level:2},{value:"JSON\u7c7b\u578b",id:"json\u7c7b\u578b",level:2},{value:"\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u9664\u4e86boolean\uff0c\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0cUUID\uff0c\u65e5\u671f\uff0c\u679a\u4e3e\u5916\uff0c\u6807\u91cf\u5c5e\u6027\u8fd8\u652f\u6301\u5176\u4ed6\u7c7b\u578b\uff0c\u5305\u62ec"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6570\u7ec4\u7c7b\u578b"}),"\n",(0,a.jsx)(n.li,{children:"JSON\u7c7b\u578b"}),"\n",(0,a.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["\u679a\u4e3e\u7c7b\u578b\u4e0d\u5728\u672c\u6587\u8ba8\u8bba\u8303\u56f4\u5185\uff0c\u8bf7\u53c2\u89c1",(0,a.jsx)(n.a,{href:"../advanced/enum",children:"Enum\u6620\u5c04"})]})}),"\n",(0,a.jsx)(n.h2,{id:"\u6570\u7ec4\u7c7b\u578b",children:"\u6570\u7ec4\u7c7b\u578b"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"\u8981\u4f7f\u7528\u6570\u7ec4\u7c7b\u578b\uff0c\u9700\u8981\u5e95\u5c42\u6570\u636e\u5e93\u652f\u6301\u6570\u7ec4\u7c7b\u578b"})}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    String[] tags();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    val tags: Array<String>\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9\u4e8ePostgres\u800c\u8a00\uff0c\u9700\u8981\u6307\u5b9aSQL\u4e2d\u7684\u6570\u636e\u5143\u7d20\u7c7b\u578b\uff0c\u4f8b\u5982"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    @Column(sqlElementType = "text")\n    String[] tags();\n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    @Column(sqlElementType = "text")\n    val tags: Array<String>\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"json\u7c7b\u578b",children:"JSON\u7c7b\u578b"}),"\n",(0,a.jsx)(n.p,{children:"\u53ef\u4ee5\u5229\u7528Jackson\u652f\u6301\u4efb\u4f55\u7c7b\u578b\u7684\u6807\u91cf\u5c5e\u6027\uff0c\u65e0\u8bba\u81ea\u5b9a\u4e49Java/Kotlin\u7c7b\u578b\uff0c\u8fd8\u662f\u96c6\u5408\u7c7b\u578b\uff0c\u751a\u81f3\u4e8c\u8005\u7684\u6df7\u5408\u7c7b\u578b\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u53ea\u9700\u8981\u4f7f\u7528",(0,a.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.Serialized"}),"\u6ce8\u89e3\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528JSON\u7c7b\u578b\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\uff0c\u4ee5\u96c6\u5408\u7c7b\u578b\u4e3a\u4f8b\uff0c\u5c55\u793a\u5176\u7528\u6cd5"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    // highlight-next-line\n    @Serialized\n    Map<String, Map<String, List<Integer>> data();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    // highlight-next-line\n    @Serialized\n    val data: Map<String, Map<String, List<Integer>>\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u90a3\u4e48JSON\u7c7b\u578b\u5728SQL\u5bf9\u5e94\u4f55\u79cd\u7c7b\u578b\u5462\uff1f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u6570\u636e\u5e93\u652f\u6301JSON\u6216JSONB\u7c7b\u578b\uff0c\u5c31\u4f7f\u7528\u8be5\u7c7b\u578b"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5426\u5219\uff0c\u8bf7\u4f7f\u7528\u5b57\u7b26\u4e32\u7c7b\u578b"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5bf9\u4e8ePostgres\u800c\u8a00\uff0c\u652f\u6301\u5bf9JSON\u5185\u90e8\u7ed3\u6784\u7684\u64cd\u4f5c\uff0c\u8bf7\u8be6\u89c1",(0,a.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.5/functions-json.html",children:"Postgres\u4e2d\u7684JSON\u64cd\u4f5c"}),"\u3002\u90a3\u4e48Jimmer\u5e94\u8be5\u5982\u4f55\u5b9e\u73b0\u8fd9\u79cd\u64cd\u4f5c\u5462\uff1f"]}),"\n",(0,a.jsxs)(n.p,{children:["Jimmer\u7684SQL DSL\u53ef\u4ee5\u6df7\u5165Native SQL\u8868\u8fbe\u5f0f\uff0c\u8bf7\u67e5\u770b",(0,a.jsx)(n.a,{href:"../../query/native-sql",children:"Native\u8868\u8fbe\u5f0f"}),"\uff0c\u672c\u6587\u4e0d\u518d\u8d58\u8ff0\u3002\u9700\u8981\u6ce8\u610f"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.5/functions-json.html",children:"Postgres\u4e2d\u7684JSON\u64cd\u4f5c"}),"\u4f1a\u7528\u5230",(0,a.jsx)(n.code,{children:"?"}),"\uff0c\u800c",(0,a.jsx)(n.code,{children:"?"}),"\u6070\u597d\u662fJDBC\u7684\u53c2\u6570\uff0c\u8bf7\u4f7f\u7528",(0,a.jsx)(n.code,{children:"??"}),"\u4ee3\u66ff\u3002"]})}),"\n",(0,a.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",children:"\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679cJSON\u7c7b\u578b\u4ecd\u7136\u65e0\u6cd5\u6ee1\u8db3\u4f60\u8981\u6c42 ",(0,a.jsx)(n.em,{children:"(\u4f8b\u5982\uff1a\u4f60\u671f\u671b\u6620\u5c04\u4e00\u4e9bPostgres\u7279\u6709\u7684\u7c7b\u578b)"}),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u81ea\u5b9a\u4e49\u7c7b\u578b\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8bf7\u53c2\u89c1",(0,a.jsx)(n.a,{href:"../../configuration/scala-providder",children:"ScalarProvider"}),"\uff0c\u672c\u6587\u4e0d\u518d\u8d58\u8ff0\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);