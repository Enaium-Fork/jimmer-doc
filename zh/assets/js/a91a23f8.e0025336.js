"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[784],{34560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(74848),a=t(28453),s=t(11470),o=t(19365);const l={sidebar_position:4,title:"\u548cJackson\u534f\u540c"},i=void 0,u={id:"object/jackson",title:"\u548cJackson\u534f\u540c",description:"Jimmer\u5bf9\u8c61\u662f\u52a8\u6001\u7684\uff0c\u5e76\u4e0d\u662f\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u90fd\u9700\u8981\u521d\u59cb\u5316\uff0c\u5b83\u5141\u8bb8\u7f3a\u5c11\u4e00\u4e9b\u5c5e\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/jackson.mdx",sourceDirName:"object",slug:"/object/jackson",permalink:"/jimmer-doc/zh/docs/object/jackson",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/object/jackson.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u548cJackson\u534f\u540c"},sidebar:"tutorialSidebar",previous:{title:"Draft",permalink:"/jimmer-doc/zh/docs/object/draft"},next:{title:"DTO\u8f6c\u6362",permalink:"/jimmer-doc/zh/docs/object/view/"}},c={},d=[];function m(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jimmer\u5bf9\u8c61\u662f\u52a8\u6001\u7684\uff0c\u5e76\u4e0d\u662f\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\u90fd\u9700\u8981\u521d\u59cb\u5316\uff0c\u5b83\u5141\u8bb8\u7f3a\u5c11\u4e00\u4e9b\u5c5e\u6027\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u672a\u6307\u5b9a\u7684\u5c5e\u6027\u5728\u76f4\u63a5\u88ab\u4ee3\u7801\u8bbf\u95ee\u65f6\u4f1a\u5bfc\u81f4\u5f02\u5e38"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u672a\u6307\u5b9a\u7684\u5c5e\u6027\u5728JSON\u5e8f\u5217\u5316\u4e2d\u81ea\u52a8\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5f02\u5e38"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u63d0\u5230\u4e86JSON\u5e8f\u5217\u5316\uff0c\u6307",(0,r.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:"jackson"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["jimmer-core\u5b9a\u4e49\u4e86\u4e00\u4e2ajackson\u6a21\u5757\uff1a",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.jackson.ImmutableModule"}),"\uff0c\u5229\u7528\u8be5\u6a21\u5757\u53ef\u4ee5\u4e3ajackson\u589e\u52a0\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316jimmer\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u80fd\u529b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u4e24\u79cd\u60c5\u51b5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528Spring Boot Starter"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cJimmer\u5df2\u7ecf\u6ce8\u4e3aSpring\u8fd9\u518c\u4e86ImmutableModule\uff0c\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Jimmer\u5185\u90e8\u4ee3\u7801\uff0c\u975e\u7528\u6237\u4ee3\u7801\n@ConditionalOnMissingBean(ImmutableModule.class)\n@Bean\npublic ImmutableModule immutableModule() {\n    return new ImmutableModule();\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u6b64\uff0cSpring\u9ed8\u8ba4\u7684",(0,r.jsx)(n.code,{children:"ObjectMapper"}),"\u5df2\u7ecf\u53ef\u4ee5\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316Jimmer\u52a8\u6001\u5bf9\u8c61\uff0c\u800c\u7edd\u5927\u90e8\u5206\u5bf9\u8c61\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5de5\u4f5c\u90fd\u662f\u5728HTTP\u4ea4\u4e92\u65f6\u7531Spring\u81ea\u52a8\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\u65e0\u9700\u4efb\u4f55\u5f00\u53d1\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Spring\u9ed8\u8ba4\u7684Json\u5904\u7406\u5e93\u5c31\u662f",(0,r.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:"jackson"}),"\uff0c\u52ff\u66ff\u6362\u3002"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'ObjectMapper mapper = new ObjectMapper()\n    // highlight-next-line\n    .registerModule(new ImmutableModule());\n\nTreeNode treeNode = Objects.createTreeNode(\n    draft -> draft.setName("Root Node")\n);\n\n// \u7cfb\u5217\u5316\nString json = mapper.writeValueAsString(treeNode);\n\n// \u53cd\u5e8f\u5217\u5316\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode.class);\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val mapper = ObjectMapper()\n    // highlight-next-line\n    .registerModule(ImmutableModule())\n\nval treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\n\n// \u5e8f\u5217\u5316\nval json = mapper.writeValueAsString(treeNode);\n\n// \u53cd\u5e8f\u5217\u5316\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode::class.java);\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5bf9\u4e8e\u5e8f\u5217\u5316\u64cd\u4f5c\u800c\u8a00\uff0c\u6709\u4e00\u4e2a\u4fbf\u6377\u65b9\u5f0f\uff0c\u5c31\u662fjimmer\u5bf9\u8c61\u7684",(0,r.jsx)(n.code,{children:"toString"}),"\u65b9\u6cd5\u3002"]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(96540),a=t(18215),s=t(23104),o=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:a}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(u(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function N(e){const n=(0,j.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);