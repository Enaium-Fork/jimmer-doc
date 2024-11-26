"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5323,5785,8170],{97582:(e,n,t)=>{t.d(n,{M:()=>g});var o=t(22777),r=t(31729),i=t(48440),l=t(80421),a=t(57416),s=t(18441),c=t(68999),u=t(43581),d=t(63051),h=t(46831),p=t(28968),v=t(15993),m=t(13407),f=t(67512),A=t(96540),x=t(74848);const g=(0,A.memo)((()=>{const[e,n]=(0,A.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),t=(0,A.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),g=(0,A.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),j=(0,A.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),k=(0,A.useCallback)((e=>{let t;const o=e.target.value;t="string"==typeof o?parseInt(o):o,-1===t&&(t=void 0),n((e=>({...e,storeId:t})))}),[]),y=(0,A.useCallback)((e=>{let t=[];console.log(e.target.value);const o=e.target.value;t="string"==typeof o?o.split(",").map((e=>parseInt(e))):o,n((e=>({...e,authorIds:t})))}),[]),{i18n:b}=(0,o.A)(),S=(0,A.useMemo)((()=>"zh"==b.currentLocale||"zh_cn"==b.currentLocale||"zh_CN"==b.currentLocale),[b.currentLocale]),[C,I]=(0,A.useState)(!1),w=(0,A.useCallback)((()=>{I(!0)}),[]),N=(0,A.useCallback)((()=>{I(!1)}),[]);return(0,x.jsxs)(a.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,x.jsxs)(c.A,{spacing:2,children:[(0,x.jsx)("h1",{children:"Book Form"}),(0,x.jsx)(u.A,{label:"Name",value:e.name,onChange:t,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,x.jsx)(u.A,{label:"Edition",type:"number",value:e.edition,onChange:g}),(0,x.jsx)(u.A,{label:"Price",type:"number",value:e.price,onChange:j}),(0,x.jsxs)(r.A,{fullWidth:!0,children:[(0,x.jsx)(i.A,{id:"store-select-label",children:"Store"}),(0,x.jsxs)(s.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:k,children:[(0,x.jsx)(l.A,{value:-1,children:"--NONE--"}),(0,x.jsx)(l.A,{value:1,children:"O'REILLY"}),(0,x.jsx)(l.A,{value:2,children:"MANNING"})]})]}),(0,x.jsxs)(r.A,{fullWidth:!0,children:[(0,x.jsx)(i.A,{id:"author-multi-select-label",children:"Authors"}),(0,x.jsxs)(s.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:y,children:[(0,x.jsx)(l.A,{value:1,children:"Eve Procello"}),(0,x.jsx)(l.A,{value:2,children:"Alex Banks"}),(0,x.jsx)(l.A,{value:3,children:"Dan Vanderkam"}),(0,x.jsx)(l.A,{value:4,children:"Boris Cherny"}),(0,x.jsx)(l.A,{value:5,children:"Samer Buna"})]})]}),(0,x.jsx)(r.A,{children:(0,x.jsx)(f.A,{onClick:w,variant:"contained",children:S?"\u63d0\u4ea4":"Submit"})})]}),(0,x.jsxs)(d.A,{open:C,onClose:N,children:[(0,x.jsx)(h.A,{children:S?"\u4fe1\u606f":"Info"}),(0,x.jsx)(p.A,{children:(0,x.jsx)(m.A,{children:S?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,x.jsx)(v.A,{children:(0,x.jsx)(f.A,{onClick:N,children:"\u5173\u95ed"})})]})]})}))},40412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"quick-view/save/export/short","title":"\u4fdd\u5b58\u77ed\u5173\u8054","description":"\u4f55\u8c13\u77ed\u5173\u8054","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/save/export/short.mdx","sourceDirName":"quick-view/save/export","slug":"/quick-view/save/export/short","permalink":"/jimmer-doc/zh/docs/quick-view/save/export/short","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/save/export/short.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"\u4fdd\u5b58\u77ed\u5173\u8054"},"sidebar":"tutorialSidebar","previous":{"title":"\u4fdd\u5b58\u805a\u5408\u6839","permalink":"/jimmer-doc/zh/docs/quick-view/save/export/root"},"next":{"title":"\u4fdd\u5b58\u957f\u5173\u8054","permalink":"/jimmer-doc/zh/docs/quick-view/save/export/long"}}');var r=t(74848),i=t(28453),l=t(37244),a=t(56778),s=t(97582);const c={sidebar_position:2,title:"\u4fdd\u5b58\u77ed\u5173\u8054"},u=void 0,d={},h=[{value:"\u4f55\u8c13\u77ed\u5173\u8054",id:"\u4f55\u8c13\u77ed\u5173\u8054",level:2},{value:"\u5b9a\u4e49Input DTO",id:"\u5b9a\u4e49input-dto",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801",id:"\u751f\u6210\u7684\u4ee3\u7801",level:2},{value:"\u7f16\u5199HTTP\u670d\u52a1",id:"\u7f16\u5199http\u670d\u52a1",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4f55\u8c13\u77ed\u5173\u8054",children:"\u4f55\u8c13\u77ed\u5173\u8054"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u8c13\u77ed\u5173\u8054\uff0c\u6307\u53ea\u6539\u53d8\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\uff0c\u4e0d\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8eUI\u754c\u9762\u800c\u8a00"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f15\u7528\u5173\u8054 ",(0,r.jsx)(n.em,{children:"(\u4e00\u5bf9\u4e00\u548c\u591a\u5bf9\u4e00)"})," \u8868\u73b0\u4e3a\u5355\u9009\u83dc\u5355"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u96c6\u5408\u5173\u8054 ",(0,r.jsx)(n.em,{children:"(\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u591a)"})," \u8868\u73b0\u4e3a\u591a\u9009\u83dc\u5355"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,r.jsx)(s.M,{}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9a\u4e49input-dto",children:"\u5b9a\u4e49Input DTO"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5b89\u88c5DTO\u8bed\u8a00Intellij\u63d2\u4ef6\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/ClearPlume/jimmer-dto",children:"https://github.com/ClearPlume/jimmer-dto"})," ",(0,r.jsx)(n.em,{children:"\uff08\u6b64\u8fc7\u7a0b\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u975e\u5e38\u63a8\u8350\uff09"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u65b0\u5efa\u76ee\u5f55",(0,r.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"src/main/dto"}),"\u4e0b\u5efa\u7acb\u4e00\u4e2a\u6587\u4ef6",(0,r.jsx)(n.code,{children:"Book.dto"}),"\uff0c\u7f16\u5199\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto"',children:"input BookInputWithShortAssociations {\n    #allScalars(this)\n    #highlight-next-line\n    id(store) //\u9ed8\u8ba4\u522b\u540dstoreId\n    #highlight-next-line\n    id(authors) as authorIds\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u751f\u6210\u7684\u4ee3\u7801",children:"\u751f\u6210\u7684\u4ee3\u7801"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookInputWithShortAssociations.java"',children:'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\npublic class BookInputWithShortAssociations implements Input<Book> {\n\n    @Nullable\n    private Long id;\n\n    @NotNull\n    private String name;\n\n    private int edition;\n\n    @NotNull\n    private BigDecimal price;\n\n    @Nullable\n    // highlight-next-line\n    private Long storeId;\n\n    @NotNull\n    // highlight-next-line\n    private List<Long> authorIds;\n\n    ...\u7701\u7565\u5176\u4ed6\u65b9\u6cd5...\n}\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInputWithShortAssociations.kt"',children:'@GeneratedBy(\n        file = "<yourproject>/src/main/dto/Book.dto"\n)\ndata class BookInputWithShortAssociations(\n    val id: Long?,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    // highlight-next-line\n    val storeId: Long?\n    // highlight-next-line\n    val authorIds: List<Long>\n) : Input<Book> {\n    ...\u7701\u7565\u5176\u4ed6\u65b9\u6cd5...\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7f16\u5199http\u670d\u52a1",children:"\u7f16\u5199HTTP\u670d\u52a1"}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(a.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookController.java"',children:'@RestController\npublic class BookController {\n\n    private final JSqlClient sqlClient;\n\n    public BookController(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    } \n\n    @PutMapping("/book")\n    pubic int saveBookInputWithShortAssociations(\n        // highlight-next-line\n        @RequestBody BookInputWithShortAssociations input\n    ) {\n        return sqlClient\n            .save(input)\n            .getTotalAffectedRowCount();\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookController.java"',children:'class BookController(\n    private val sqlClient: KSqlClient\n) {\n\n    @PutMapping("/book")\n    fun saveBookInputWithShortAssociations(\n        // highlight-next-line\n        @RequestBody input: BookInputWithShortAssociations\n    ): Int =\n        sqlClient\n            .save(input)\n            .totalAffectedRowCount\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u89c1\uff0c\u65e0\u8bbaInput DTO\u5982\u4f55\u6539\u53d8\uff0cJimmer\u4ecd\u7136\u53ea\u9700\u4e00\u4e2a\u65b9\u6cd5\u8c03\u7528\u5373\u53ef\u5b8c\u6210\u6570\u636e\u4fdd\u5b58\u3002"})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},54856:(e,n,t)=>{t.d(n,{X:()=>i});var o=t(58168),r=t(25419);function i(e,n,t){return void 0===e||(0,r.g)(e)?n:(0,o.A)({},n,{ownerState:(0,o.A)({},n.ownerState,t)})}},34718:(e,n,t)=>{function o(e,n=[]){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>t.match(/^on[A-Z]/)&&"function"==typeof e[t]&&!n.includes(t))).forEach((n=>{t[n]=e[n]})),t}t.d(n,{h:()=>o})},25419:(e,n,t)=>{function o(e){return"string"==typeof e}t.d(n,{g:()=>o})},74311:(e,n,t)=>{t.d(n,{p:()=>s});var o=t(58168);function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const i=function(){for(var e,n,t=0,o="",i=arguments.length;t<i;t++)(e=arguments[t])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o};var l=t(34718);function a(e){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>!(n.match(/^on[A-Z]/)&&"function"==typeof e[n]))).forEach((t=>{n[t]=e[t]})),n}function s(e){const{getSlotProps:n,additionalProps:t,externalSlotProps:r,externalForwardedProps:s,className:c}=e;if(!n){const e=i(null==t?void 0:t.className,c,null==s?void 0:s.className,null==r?void 0:r.className),n=(0,o.A)({},null==t?void 0:t.style,null==s?void 0:s.style,null==r?void 0:r.style),l=(0,o.A)({},t,s,r);return e.length>0&&(l.className=e),Object.keys(n).length>0&&(l.style=n),{props:l,internalRef:void 0}}const u=(0,l.h)((0,o.A)({},s,r)),d=a(r),h=a(s),p=n(u),v=i(null==p?void 0:p.className,null==t?void 0:t.className,c,null==s?void 0:s.className,null==r?void 0:r.className),m=(0,o.A)({},null==p?void 0:p.style,null==t?void 0:t.style,null==s?void 0:s.style,null==r?void 0:r.style),f=(0,o.A)({},p,t,h,d);return v.length>0&&(f.className=v),Object.keys(m).length>0&&(f.style=m),{props:f,internalRef:p.ref}}},45489:(e,n,t)=>{function o(e,n,t){return"function"==typeof e?e(n,t):e}t.d(n,{Y:()=>o})},57416:(e,n,t)=>{t.d(n,{A:()=>x});var o=t(98587),r=t(58168),i=t(96540),l=t(54533),a=t(64111),s=t(771),c=t(11848);const u=e=>{let n;return n=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(n/100).toFixed(2)};var d=t(3541),h=t(27553),p=t(17245);function v(e){return(0,p.Ay)("MuiPaper",e)}(0,h.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=t(74848);const f=["className","component","elevation","square","variant"],A=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n[`elevation${t.elevation}`]]}})((({theme:e,ownerState:n})=>{var t;return(0,r.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!n.square&&{borderRadius:e.shape.borderRadius},"outlined"===n.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===n.variant&&(0,r.A)({boxShadow:(e.vars||e).shadows[n.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.X4)("#fff",u(n.elevation))}, ${(0,s.X4)("#fff",u(n.elevation))})`},e.vars&&{backgroundImage:null==(t=e.vars.overlays)?void 0:t[n.elevation]}))})),x=i.forwardRef((function(e,n){const t=(0,d.A)({props:e,name:"MuiPaper"}),{className:i,component:s="div",elevation:c=1,square:u=!1,variant:h="elevation"}=t,p=(0,o.A)(t,f),x=(0,r.A)({},t,{component:s,elevation:c,square:u,variant:h}),g=(e=>{const{square:n,elevation:t,variant:o,classes:r}=e,i={root:["root",o,!n&&"rounded","elevation"===o&&`elevation${t}`]};return(0,a.A)(i,v,r)})(x);return(0,m.jsx)(A,(0,r.A)({as:s,ownerState:x,className:(0,l.A)(g.root,i),ref:n},p))}))},68999:(e,n,t)=>{t.d(n,{A:()=>W});var o=t(98587),r=t(58168),i=t(96540),l=t(37273),a=t(94521),s=t(17245),c=t(64111),u=t(61311),d=t(51264),h=t(33571);const p=["ownerState"],v=["variants"],m=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function f(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const A=(0,d.A)(),x=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function g({defaultTheme:e,theme:n,themeId:t}){return o=n,0===Object.keys(o).length?e:n[t]||n;var o}function j(e){return e?(n,t)=>t[e]:null}function k(e,n){let{ownerState:t}=n,i=(0,o.A)(n,p);const l="function"==typeof e?e((0,r.A)({ownerState:t},i)):e;if(Array.isArray(l))return l.flatMap((e=>k(e,(0,r.A)({ownerState:t},i))));if(l&&"object"==typeof l&&Array.isArray(l.variants)){const{variants:e=[]}=l;let n=(0,o.A)(l,v);return e.forEach((e=>{let o=!0;"function"==typeof e.props?o=e.props((0,r.A)({ownerState:t},i,t)):Object.keys(e.props).forEach((n=>{(null==t?void 0:t[n])!==e.props[n]&&i[n]!==e.props[n]&&(o=!1)})),o&&(Array.isArray(n)||(n=[n]),n.push("function"==typeof e.style?e.style((0,r.A)({ownerState:t},i,t)):e.style))})),n}return l}const y=function(e={}){const{themeId:n,defaultTheme:t=A,rootShouldForwardProp:i=f,slotShouldForwardProp:l=f}=e,s=e=>(0,h.A)((0,r.A)({},e,{theme:g((0,r.A)({},e,{defaultTheme:t,themeId:n}))}));return s.__mui_systemSx=!0,(e,c={})=>{(0,u.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:d,slot:h,skipVariantsResolver:p,skipSx:v,overridesResolver:A=j(x(h))}=c,y=(0,o.A)(c,m),b=void 0!==p?p:h&&"Root"!==h&&"root"!==h||!1,S=v||!1;let C=f;"Root"===h||"root"===h?C=i:h?C=l:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(C=void 0);const I=(0,u.default)(e,(0,r.A)({shouldForwardProp:C,label:undefined},y)),w=e=>"function"==typeof e&&e.__emotion_real!==e||(0,a.Q)(e)?o=>k(e,(0,r.A)({},o,{theme:g({theme:o.theme,defaultTheme:t,themeId:n})})):e,N=(o,...i)=>{let l=w(o);const a=i?i.map(w):[];d&&A&&a.push((e=>{const o=g((0,r.A)({},e,{defaultTheme:t,themeId:n}));if(!o.components||!o.components[d]||!o.components[d].styleOverrides)return null;const i=o.components[d].styleOverrides,l={};return Object.entries(i).forEach((([n,t])=>{l[n]=k(t,(0,r.A)({},e,{theme:o}))})),A(e,l)})),d&&!b&&a.push((e=>{var o;const i=g((0,r.A)({},e,{defaultTheme:t,themeId:n}));return k({variants:null==i||null==(o=i.components)||null==(o=o[d])?void 0:o.variants},(0,r.A)({},e,{theme:i}))})),S||a.push(s);const c=a.length-i.length;if(Array.isArray(o)&&c>0){const e=new Array(c).fill("");l=[...o,...e],l.raw=[...o.raw,...e]}const u=I(l,...a);return e.muiName&&(u.muiName=e.muiName),u};return I.withConfig&&(N.withConfig=I.withConfig),N}}(),b=y;var S=t(44467),C=t(39599),I=t(89452),w=t(3675),N=t(74848);const B=["component","direction","spacing","divider","children","className","useFlexGap"],R=(0,d.A)(),q=b("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function P(e){return(0,S.A)({props:e,name:"MuiStack",defaultTheme:R})}function T(e,n){const t=i.Children.toArray(e).filter(Boolean);return t.reduce(((e,o,r)=>(e.push(o),r<t.length-1&&e.push(i.cloneElement(n,{key:`separator-${r}`})),e)),[])}const M=({ownerState:e,theme:n})=>{let t=(0,r.A)({display:"flex",flexDirection:"column"},(0,I.NI)({theme:n},(0,I.kW)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,w.LX)(n),r=Object.keys(n.breakpoints.values).reduce(((n,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n)),{}),i=(0,I.kW)({values:e.direction,base:r}),l=(0,I.kW)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach(((e,n,t)=>{if(!i[e]){const o=n>0?i[t[n-1]]:"column";i[e]=o}}));const s=(n,t)=>{return e.useFlexGap?{gap:(0,w._W)(o,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${r=t?i[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,w._W)(o,n)}};var r};t=(0,a.A)(t,(0,I.NI)({theme:n},l,s))}return t=(0,I.iZ)(n.breakpoints,t),t};var L=t(11848),O=t(3541);const _=function(e={}){const{createStyledComponent:n=q,useThemeProps:t=P,componentName:a="MuiStack"}=e,u=n(M),d=i.forwardRef((function(e,n){const i=t(e),d=(0,C.A)(i),{component:h="div",direction:p="column",spacing:v=0,divider:m,children:f,className:A,useFlexGap:x=!1}=d,g=(0,o.A)(d,B),j={direction:p,spacing:v,useFlexGap:x},k=(0,c.A)({root:["root"]},(e=>(0,s.Ay)(a,e)),{});return(0,N.jsx)(u,(0,r.A)({as:h,ownerState:j,ref:n,className:(0,l.A)(k.root,A)},g,{children:m?T(f,m):f}))}));return d}({createStyledComponent:(0,L.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>(0,O.A)({props:e,name:"MuiStack"})}),W=_},44675:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var o=t(82858),r=t(22765),i=t(58312);function l(){const e=(0,o.A)(r.A);return e[i.A]||e}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);