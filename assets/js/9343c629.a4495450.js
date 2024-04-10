"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9220],{91876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(74848),o=n(28453);const s={sidebar_position:5,title:"DTO conversion"},r=void 0,c={id:"object/view/index",title:"DTO conversion",description:"Even if entity objects support dynamism to express arbitrary data structures, conversion between entities and DTOs is still unavoidable.",source:"@site/docs/object/view/index.md",sourceDirName:"object/view",slug:"/object/view/",permalink:"/jimmer-doc/docs/object/view/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/view/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"DTO conversion"},sidebar:"tutorialSidebar",previous:{title:"Working with Jackson",permalink:"/jimmer-doc/docs/object/jackson"},next:{title:"DTO Language",permalink:"/jimmer-doc/docs/object/view/dto-language"}},a={},d=[];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Even if entity objects support dynamism to express arbitrary data structures, conversion between entities and DTOs is still unavoidable."}),"\n",(0,i.jsx)(t.p,{children:"Jimmer provides dynamic entities that can solve a large part of the DTO explosion problem very well. Therefore, generally speaking, it is not necessary to define output DTO types to express query results."}),"\n",(0,i.jsx)(t.p,{children:"However, not all DTO types can be eliminated. Input DTO objects are hard to remove."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["For example, in GraphQL, although dynamic ",(0,i.jsx)(t.code,{children:"GraphQLObject"})," data is returned for the client from the output perspective, static ",(0,i.jsx)(t.code,{children:"GraphQLInput"})," data submitted by the client is accepted from the input perspective."]}),"\n",(0,i.jsxs)(t.p,{children:["Why does the GraphQL protocol define ",(0,i.jsx)(t.code,{children:"GraphQLInput"})," as a static type? Because API explicitness and system security are very important requirements, please refer to ",(0,i.jsx)(t.a,{href:"../../mutation/save-command/input-dto/problem",children:"Problems with dynamic objects as input parameters"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The problems faced by the GraphQL protocol are also faced by Jimmer, which must provide a complete solution."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As a comprehensive solution, Jimmer is not limited to ORM itself, but considers the whole project. To solve this problem, it provides two ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"DTO Language"}),"\n",(0,i.jsx)(t.p,{children:"A solution tailored for Jimmer with extremely high development efficiency."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/jimmer-doc/docs/object/view/dto-language",children:"DTO Language"})," is designed for that part of the DTO types that cannot be eliminated, with the goal of making them extremely cheap."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"MapStruct"}),"\n",(0,i.jsxs)(t.p,{children:["A solution that combines the ",(0,i.jsx)(t.a,{href:"https://mapstruct.org/",children:"MapStruct"})," framework and can implement arbitrarily complex conversion logic."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);