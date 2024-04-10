"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6472],{96090:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=a(74848),r=a(28453),l=a(11470),i=a(19365);const o={sidebar_position:2,title:"\u591a\u5bf9\u4e00"},s=void 0,c={id:"mapping/base/association/many-to-one",title:"\u591a\u5bf9\u4e00",description:"\u672c\u901a\u8fc7\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528@org.babyfish.jimmer.sql.ManyToOne\u6ce8\u89e3\u53ef\u4ee5\u58f0\u660e\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/association/many-to-one.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/many-to-one",permalink:"/jimmer-doc/zh/docs/mapping/base/association/many-to-one",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/association/many-to-one.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u591a\u5bf9\u4e00"},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u5bf9\u4e00",permalink:"/jimmer-doc/zh/docs/mapping/base/association/one-to-one"},next:{title:"\u4e00\u5bf9\u591a",permalink:"/jimmer-doc/zh/docs/mapping/base/association/one-to-many"}},u={},d=[{value:"1. \u57fa\u4e8e\u5916\u952e",id:"1-\u57fa\u4e8e\u5916\u952e",level:2},{value:"2. \u57fa\u4e8e\u4e2d\u95f4\u8868",id:"2-\u57fa\u4e8e\u4e2d\u95f4\u8868",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u672c\u901a\u8fc7\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,t.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.ManyToOne"}),"\u6ce8\u89e3\u53ef\u4ee5\u58f0\u660e\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027"]}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u57fa\u4e8e\u5916\u952e\u548c\u57fa\u4e8e\u4e2d\u95f4\u8868\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"1-\u57fa\u4e8e\u5916\u952e",children:"1. \u57fa\u4e8e\u5916\u952e"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @ManyToOne\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    // highlight-next-line\n    @ManyToOne\n    val store: BookStore\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u5e76\u6ca1\u6709\u914d\u5408\u4f7f\u7528",(0,t.jsx)(n.code,{children:"@JoinColumn"}),"\u660e\u786e\u6307\u5b9a\u5916\u952e\u5217\u540d\uff0cJimmer\u4f1a\u6839\u636e",(0,t.jsx)(n.a,{href:"../naming-strategy",children:"\u547d\u540d\u7b56\u7565"}),"\u63a8\u5bfc",(0,t.jsx)(n.code,{children:"store"}),"\u5c5e\u6027\u5bf9\u5e94\u7684\u5217\u540d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u9ed8\u8ba4\u7684",(0,t.jsx)(n.a,{href:"../naming-strategy",children:"\u547d\u540d\u7b56\u7565"}),"\u672a\u88ab\u7528\u6237\u8986\u76d6\uff0c\u5c5e\u6027",(0,t.jsx)(n.code,{children:"store"}),"\u7684\u5916\u952e\u5217\u540d\u4e3a",(0,t.jsx)(n.code,{children:"STORE_ID"}),"\u3002\u6240\u4ee5\uff0c\u4e4b\u524d\u7684\u4ee3\u7801\u548c\u8fd9\u91cc\u7684\u4ee3\u7801\u7b49\u4ef7\u3002"]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(name = "STORE_ID")\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(name = "STORE_ID")\n    val store: BookStore\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5916\u952e\u53ef\u771f\u53ef\u5047\u3002\u4f2a\u5916\u952e\u5728\u540e\u7eed\u6587\u6863\u4e2d\u8ba8\u8bba\uff0c\u8fd9\u91cc\u5047\u8bbe\u5916\u952e\u662f\u771f\u5b9e\u7684\uff0c\u5219\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u7684\u7ea6\u675f\u4e3a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"// \u5982\u679c\u6307\u5411\u5173\u8054\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table BOOK\n    add constraint FK_BOOK__BOOK_STORE\n        /* highlight-next-line */\n        foreign key(STORE_ID)\n            references BOOK_STORE(ID);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-\u57fa\u4e8e\u4e2d\u95f4\u8868",children:"2. \u57fa\u4e8e\u4e2d\u95f4\u8868"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @Nullable\n    @ManyToOne\n    @JoinTable\n    BookStore store();\n\n    ...\n}\n"})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    @Nullable\n    @ManyToOne\n    @JoinTable\n    val store: BookStore?\n\n    ...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u5e76\u6ca1\u6709\u4e3a",(0,t.jsx)(n.code,{children:"@JoinTable"}),"\u6307\u5b9a\u4efb\u4f55\u5c5e\u6027\uff0cJimmer\u4f1a\u6839\u636e",(0,t.jsx)(n.a,{href:"../naming-strategy",children:"\u547d\u540d\u7b56\u7565"}),"\u63a8\u5bfc",(0,t.jsx)(n.code,{children:"store"}),"\u5c5e\u6027\u5bf9\u5e94\u7684\u5217\u540d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u9ed8\u8ba4\u7684",(0,t.jsx)(n.a,{href:"../naming-strategy",children:"\u547d\u540d\u7b56\u7565"}),"\u672a\u88ab\u7528\u6237\u8986\u76d6\uff0c\u63a8\u5bfc\u51fa\u7684\u4e2d\u95f4\u8868\u4fe1\u606f\u4e3a:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e2d\u95f4\u8868\u8868\u540d: BOOK_BOOK_STORE_MAPPING"}),"\n",(0,t.jsx)(n.li,{children:"\u4e2d\u95f4\u8868\u6307\u5411\u5f53\u524d\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d: BOOK_ID"}),"\n",(0,t.jsx)(n.li,{children:"\u4e2d\u95f4\u8868\u6307\u5411\u5173\u8054\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d: STORE_ID"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u4e4b\u524d\u7684\u4ee3\u7801\u548c\u8fd9\u91cc\u7684\u4ee3\u7801\u7b49\u4ef7\uff1a"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'@Entity\npublic interface Book {\n\n    @Null\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_BOOK_STORE_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "STORE_ID"\n    )\n    BookStore store();\n\n    ...\n}\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'@Entity\ninterface Book {\n\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_BOOK_STORE_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "STORE_ID"\n    )\n    val store: BookStore?\n\n    ...\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e2d\u95f4\u8868",(0,t.jsx)(n.code,{children:"BOOK_BOOK_STORE_MAPPING"}),"\u5b9a\u4e49\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create table BOOK_BOOK_STORE_MAPPING(\n    BOOK_ID bigint not null,\n    STORE_ID bigint not null\n);\n\nalter table BOOK_STORE_MAPPING\n    add constraint PK_BOOK_STORE_MAPPING\n        primary(BOOK_ID, STORE_ID);\n\n// \u5982\u679c\u6307\u5411\u5f53\u524d\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint FK_BOOK_BOOK_STORE_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\n// \u5982\u679c\u6307\u5411\u5173\u8054\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint FK_BOOK_BOOK_STORE_MAPPING__STORE\n        foreign key(STORE_ID)\n            references BOOK_STORE(ID);\n\n// \u8fd9\u4e2a\u7ea6\u675f\u975e\u5e38\u91cd\u8981\u3002\n// \u5426\u5219\u8fd9\u5f20\u4e2d\u95f4\u8868\u8868\u8fbe\u7684\u662f\u591a\u5bf9\u591a\u5173\u8054\uff0c\u800c\u975e\u591a\u5bf9\u4e00\u5173\u8054\nalter table BOOK_BOOK_STORE_MAPPING\n    add constraint UQ_BOOK_BOOK_STORE_MAPPING__BOOK_ID\n        unique(BOOK_ID);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e2d\u95f4\u8868\u7684\u53ea\u6709\u4e24\u4e2a\u5916\u952e\uff0c\u800c\u4e14\u90fd\u975enull\u3002\u4e2d\u95f4\u8868\u9760\u63d2\u5165\u6570\u636e\u548c\u5220\u9664\u6570\u636e\u7ef4\u62a4\u5173\u8054\uff0c\u672c\u8eab\u4ece\u4e0d\u5b58\u50a8null\u6570\u636e"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e2d\u95f4\u8868\u6ca1\u6709\u5bf9\u5e94\u7684ORM\u5b9e\u4f53\uff0c\u65e0\u9700\u72ec\u7acb\u4e3b\u952e\uff0c\u4e24\u4e2a\u5916\u952e\u8054\u5408\u4f5c\u4e3a\u4e3b\u952e\u5373\u53ef"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e2d\u95f4\u8868\u8868\u793a\u591a\u5bf9\u591a\u5173\u8054\u3002\u8981\u8ba9\u5176\u9000\u5316\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u5fc5\u987b\u4e3a\u6307\u5411\u5f53\u524d\u5bf9\u8c61\u7684\u5916\u952e",(0,t.jsx)(n.code,{children:"BOOK_ID"}),"\u6307\u5b9a\u552f\u4e00\u7ea6\u675f"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.p,{children:"\u6ce8\u610f"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u9664\u975e\u4e3a\u4e86\u517c\u5bb9\u5df2\u6709\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u591a\u5bf9\u4e00\u5173\u8054\u90fd\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528\u5916\u952e\uff0c\u800c\u975e\u4e2d\u95f4\u8868"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e00\u65e6\u4f7f\u7528\u4e2d\u95f4\u8868\u6620\u5c04\u591a\u5bf9\u4e00\u5173\u8054\uff0cJimmer\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u53efnull\uff0c\u56e0\u4e3a\u6570\u636e\u5e93\u65e0\u6cd5\u4fdd\u8bc1\u4efb\u4f55\u5b9e\u4f53\u5728\u4e2d\u95f4\u8868\u4e2d\u4e00\u5b9a\u6709\u5bf9\u5e94\u6570\u636e"}),"\n"]}),"\n"]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>v});var t=a(96540),r=a(18215),l=a(23104),i=a(56347),o=a(205),s=a(57485),c=a(31682),u=a(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function O(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=h(e),[i,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=p({queryString:a,groupId:r}),[O,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),j=(()=>{const e=c??O;return m({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{j&&s(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,a=s.indexOf(n),r=o[a].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function f(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=O(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(f,{...e,...n})]})}function v(e){const n=(0,b.A)();return(0,g.jsx)(_,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);