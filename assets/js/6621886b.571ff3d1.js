"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[84],{97582:(e,n,t)=>{t.d(n,{M:()=>f});var i=t(22777),o=t(31729),r=t(48440),s=t(80421),a=t(57416),l=t(18441),c=t(68999),d=t(43581),p=t(63051),h=t(46831),u=t(28968),m=t(15993),j=t(13407),g=t(67512),x=t(96540),v=t(74848);const f=(0,x.memo)((()=>{const[e,n]=(0,x.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),t=(0,x.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),f=(0,x.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),b=(0,x.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),k=(0,x.useCallback)((e=>{let t;const i=e.target.value;t="string"==typeof i?parseInt(i):i,-1===t&&(t=void 0),n((e=>({...e,storeId:t})))}),[]),I=(0,x.useCallback)((e=>{let t=[];console.log(e.target.value);const i=e.target.value;t="string"==typeof i?i.split(",").map((e=>parseInt(e))):i,n((e=>({...e,authorIds:t})))}),[]),{i18n:y}=(0,i.A)(),B=(0,x.useMemo)((()=>"zh"==y.currentLocale||"zh_cn"==y.currentLocale||"zh_CN"==y.currentLocale),[y.currentLocale]),[M,A]=(0,x.useState)(!1),w=(0,x.useCallback)((()=>{A(!0)}),[]),O=(0,x.useCallback)((()=>{A(!1)}),[]);return(0,v.jsxs)(a.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,v.jsxs)(c.A,{spacing:2,children:[(0,v.jsx)("h1",{children:"Book Form"}),(0,v.jsx)(d.A,{label:"Name",value:e.name,onChange:t,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,v.jsx)(d.A,{label:"Edition",type:"number",value:e.edition,onChange:f}),(0,v.jsx)(d.A,{label:"Price",type:"number",value:e.price,onChange:b}),(0,v.jsxs)(o.A,{fullWidth:!0,children:[(0,v.jsx)(r.A,{id:"store-select-label",children:"Store"}),(0,v.jsxs)(l.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:k,children:[(0,v.jsx)(s.A,{value:-1,children:"--NONE--"}),(0,v.jsx)(s.A,{value:1,children:"O'REILLY"}),(0,v.jsx)(s.A,{value:2,children:"MANNING"})]})]}),(0,v.jsxs)(o.A,{fullWidth:!0,children:[(0,v.jsx)(r.A,{id:"author-multi-select-label",children:"Authors"}),(0,v.jsxs)(l.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:I,children:[(0,v.jsx)(s.A,{value:1,children:"Eve Procello"}),(0,v.jsx)(s.A,{value:2,children:"Alex Banks"}),(0,v.jsx)(s.A,{value:3,children:"Dan Vanderkam"}),(0,v.jsx)(s.A,{value:4,children:"Boris Cherny"}),(0,v.jsx)(s.A,{value:5,children:"Samer Buna"})]})]}),(0,v.jsx)(o.A,{children:(0,v.jsx)(g.A,{onClick:w,variant:"contained",children:B?"\u63d0\u4ea4":"Submit"})})]}),(0,v.jsxs)(p.A,{open:M,onClose:O,children:[(0,v.jsx)(h.A,{children:B?"\u4fe1\u606f":"Info"}),(0,v.jsx)(u.A,{children:(0,v.jsx)(j.A,{children:B?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,v.jsx)(m.A,{children:(0,v.jsx)(g.A,{onClick:O,children:"\u5173\u95ed"})})]})]})}))},58226:(e,n,t)=>{t.d(n,{a:()=>j});var i=t(96540),o=t(72774),r=t(63051),s=t(28968),a=t(48875),l=t(44676),c=t(47859),d=t(4671),p=t(99343),h=t(7324),u=t(39781),m=t(74848);const j=(0,i.memo)((e=>{let{open:n,fullScreen:t=!1,title:a,maxWidth:j="md",onClose:x,children:v}=e;const[f,b]=(0,i.useState)(t),k=(0,i.useCallback)((()=>{b((e=>!e))}),[]);return(0,m.jsxs)(r.A,{open:n,onClose:x,fullScreen:f,TransitionComponent:g,maxWidth:j,children:[(0,m.jsx)(o.A,{sx:{position:"relative"},children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a}),(0,m.jsx)(d.A,{onClick:k,style:{color:"white"},children:f?(0,m.jsx)(h.A,{}):(0,m.jsx)(p.A,{})}),(0,m.jsx)(d.A,{"aria-label":"close",onClick:x,style:{color:"white"},children:(0,m.jsx)(u.A,{})})]})}),(0,m.jsx)(s.A,{children:v})]})})),g=i.forwardRef((function(e,n){return(0,m.jsx)(a.A,{direction:"up",ref:n,...e})}))},47389:(e,n,t)=>{t.d(n,{l:()=>a});var i=t(96540),o=t(67512),r=t(58226),s=t(74848);const a=(0,i.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:a=n,variant:l="outlined",large:c=!1,maxWidth:d,useOriginalText:p=!0,children:h}=e;const[u,m]=(0,i.useState)(!1),j=(0,i.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),g=(0,i.useCallback)((()=>{m(!1)}),[]),x=p?{textTransform:"none"}:{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{"data-is-view-more-button":"true",onClick:j,variant:l,size:c?"large":"small",style:x,children:n}),(0,s.jsx)(r.a,{open:u,onClose:g,title:a,maxWidth:d,fullScreen:t,children:h})]})}))},40199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"object/view/mapstruct","title":"MapStruct","description":"Introduction","source":"@site/docs/object/view/mapstruct.mdx","sourceDirName":"object/view","slug":"/object/view/mapstruct","permalink":"/jimmer-doc/docs/object/view/mapstruct","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/view/mapstruct.mdx","tags":[],"version":"current","lastUpdatedAt":1709983691000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"MapStruct"},"sidebar":"tutorialSidebar","previous":{"title":"DTO Language","permalink":"/jimmer-doc/docs/object/view/dto-language"},"next":{"title":"Visibility","permalink":"/jimmer-doc/docs/object/visibility"}}');var o=t(74848),r=t(28453),s=t(37244),a=t(56778),l=t(97582),c=t(47389);const d={sidebar_position:2,title:"MapStruct"},p=void 0,h={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Notes",id:"notes",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Dependencies and Preprocessors",id:"dependencies-and-preprocessors",level:2},{value:"Define POJO",id:"define-pojo",level:2},{value:"Define Mapper",id:"define-mapper",level:2},{value:"If the entity defines @IdView properties",id:"if-the-entity-defines-idview-properties",level:3},{value:"If the entity does not define @IdView properties",id:"if-the-entity-does-not-define-idview-properties",level:3},{value:"Usage",id:"usage",level:2},{value:"Make POJO implement Input interface",id:"make-pojo-implement-input-interface",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer extends ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"})," to support using mapstruct to complete the mutual conversion between Jimmer dynamic entity objects and static DTO objects."]}),"\n",(0,o.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer's entity objects are dynamic ",(0,o.jsx)(n.em,{children:"(similar to scalar attribute lazy loading introduced in Hibernate 3)"}),", which is a pattern that earlier versions of ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"})," did not consider."]}),"\n",(0,o.jsxs)(n.p,{children:["After communicating with ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"}),", ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"})," will support this behavior starting from ",(0,o.jsx)(n.code,{children:"1.6.0"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Therefore, please use ",(0,o.jsx)(n.code,{children:"1.6.0"})," or higher version of ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"})," whenever possible."]})}),"\n",(0,o.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Unlike ",(0,o.jsx)(n.a,{href:"./dto-language",children:"DTO Language"})," which pursues fast development but supports fixed conversion logic, ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"mapstruct"})," can implement arbitrarily complex conversion logic."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Unlike ",(0,o.jsx)(n.a,{href:"./dto-language",children:"DTO Language"})," which directly generates brand new DTO types, ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"mapstruct"})," can integrate existing DTO types."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./dto-language",children:"DTO Language"})," is more recommended for the following reasons:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Non-negligible development costs"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"./dto-language",children:"DTO Language"})," is a solution tailored for Jimmer with development efficiency that cannot be compared when combined with any other technical solutions."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Not very suitable for Output DTO"}),"\n",(0,o.jsxs)(n.p,{children:["The DTO types automatically generated by the DTO language have built-in ",(0,o.jsx)(n.a,{href:"../../query/object-fetcher",children:"Object Fetchers"}),", so they can be used as query output types ",(0,o.jsx)(n.em,{children:"(although not recommended)"}),", please refer to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"../../query/object-fetcher/dto",children:"Object Fetcher/DTO Query"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"../../spring/repository/dto",children:"Spring Data/Query DTO"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["However, manually defined DTO types do not have corresponding ",(0,o.jsx)(n.a,{href:"../../query/object-fetcher",children:"Object Fetcher"})," definitions, and only support mutual conversion with dynamic entities.\nAlthough ",(0,o.jsx)(n.a,{href:"../../query/object-fetcher",children:"Object Fetchers"})," can be manually defined for this, there is a risk that the DTO and ",(0,o.jsx)(n.a,{href:"../../query/object-fetcher",children:"Object Fetcher"})," shapes will be inconsistent.\nSo it is not suitable as Output DTO."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Kotlin risks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mapstruct.org/",children:"mapstruct"})," is based on ",(0,o.jsx)(n.code,{children:"apt"})," ",(0,o.jsx)(n.em,{children:"(Annotation Processor)"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, this requires using ",(0,o.jsx)(n.code,{children:"kapt"})," in Kotlin, which will significantly reduce the compilation speed of Kotlin projects."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Kotlin has deprecated ",(0,o.jsx)(n.a,{href:"https://kotlinlang.org/docs/kapt.html",children:"kapt"})," in favor of ",(0,o.jsx)(n.a,{href:"https://kotlinlang.org/docs/ksp-overview.html",children:"ksp"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, using ",(0,o.jsx)(n.code,{children:"kapt"})," may encounter problems in the future as Kotlin evolves."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"dependencies-and-preprocessors",children:"Dependencies and Preprocessors"}),"\n",(0,o.jsx)(n.p,{children:"For converting static POJOs to Jimmer dynamic objects, MapStruct does not know how to build Jimmer objects. So"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Jimmer's own preprocessor ",(0,o.jsxs)(n.em,{children:["(Java's ",(0,o.jsx)(n.code,{children:"jimmer-apt"})," or Kotlin's ",(0,o.jsx)(n.code,{children:"jimmer-ksp"}),")"]})," generates some MapStruct-oriented code in Draft, allowing MapStruct to build Jimmer objects through its ",(0,o.jsx)(n.a,{href:"https://mapstruct.org/documentation/stable/reference/html/#mapping-with-builders",children:"Builder"})," mode."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Jimmer extends MapStruct's Annotation Processor. This extension allows MapStruct to utilize the capabilities reserved for MapStruct in the generated Draft to build Jimmer objects."}),"\n",(0,o.jsxs)(n.p,{children:["This extension is called ",(0,o.jsx)(n.code,{children:"jimmer-mapstruct-apt"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For Java, ",(0,o.jsx)(n.code,{children:"jimmer-mapstruct-apt"})," is included in ",(0,o.jsx)(n.code,{children:"jimmer-apt"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For Kotlin, ",(0,o.jsx)(n.code,{children:"jimmer-ksp"})," and ",(0,o.jsx)(n.code,{children:"jimmer-mapstruct-apt"})," must be used together in the maven or gradle configuration file."]}),"\n",(0,o.jsxs)(n.p,{children:["If you use ",(0,o.jsx)(n.a,{href:"https://github.com/ArgonarioD/gradle-plugin-jimmer",children:"Gradle plugin Jimmer"}),", the plugin will automatically configure it for you when you have the MapStruct kapt dependency."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.A,{groupId:"buildTool",children:[(0,o.jsx)(a.A,{value:"java_maven",label:"Java(Maven)",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"...omit other code...\n\n<build>\n    <dependencies>\n        <dependency> \u2780\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>${lombok.version}</version>\n        </dependency>\n        <dependency> \u278a\n            <groupId>org.mapstruct</groupId>\n            <artifactId>mapstruct</artifactId>\n            <version>${mapstruct.version}</version>\n        </dependency>\n        ...omit other dependencies...\n    </dependencies>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    <path> \u2781\n                        <groupId>org.projectlombok</groupId>\n                        <artifactId>lombok</artifactId>\n                        <version>${lombok.version}</version>\n                    </path>\n                    <path> \u278b\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                    <path> \u278c\n                        <groupId>org.mapstruct</groupId>\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${mapstruct.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...omit other code...\n"})})}),(0,o.jsx)(a.A,{value:"java_gradle",label:"Java(Gradle)",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'dependencies {\n    \n    implementation "org.projectlombok:lombok:${lombok.version}" \u2780\n    implementation "org.mapstruct:mapstruct:${mapstructVersion}" \u278a\n\n    annotationProcessor "org.projectlombok:lombok:${lombok.version}" \u2781\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}" \u278b\n    annotationProcessor "org.mapstruct:mapstruct-processor:${mapstructVersion}" \u278c\n\n    ...omit other dependencies...\n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin_maven",label:"Kotlin(Maven)",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml" ',children:"...omit other code...\n\n<build>\n    <sourceDirectory>src/main/kotlin</sourceDirectory>\n    <testSourceDirectory>src/test/kotlin</testSourceDirectory>\n\n    <dependencies>\n        <dependency> \u278a\n            <groupId>org.mapstruct</groupId>\n            <artifactId>mapstruct</artifactId>\n            <version>${mapstruct.version}</version>\n        </dependency>\n        ...omit other dependencies...\n    </dependencies>\n\n    <plugins>\n        <plugin>\n            <groupId>org.jetbrains.kotlin</groupId>\n            <artifactId>kotlin-maven-plugin</artifactId>\n            <version>${kotlin.version}</version>\n            <executions>\n                <execution>\n                    <id>compile</id>\n                    <phase>compile</phase>\n                    <goals>\n                        <goal>compile</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>test-compile</id>\n                    <phase>test-compile</phase>\n                    <goals>\n                        <goal>test-compile</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <compilerPlugins>\n                    <compilerPlugin>ksp</compilerPlugin>\n                </compilerPlugins>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.mapstruct</groupId> \u278c\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${mapstruct.version}</version>\n                    </path>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId> \u24d0\n                        <artifactId>jimmer-mapstruct-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n            <dependencies>\n                <dependency>\n                    <groupId>com.dyescape</groupId>\n                    <artifactId>kotlin-maven-symbol-processing</artifactId>\n                    <version>1.3</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.babyfish.jimmer</groupId> \u278b\n                    <artifactId>jimmer-ksp</artifactId>\n                    <version>${jimmer.version}</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n\n...omit other code...\n"})})}),(0,o.jsx)(a.A,{value:"kotlin_gradle",label:"Kotlin(Gradle.kts)",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n    kotlin("kapt") version "1.7.10"\n\n    ...omit other plugins...\n}\n\ndependencies {\n    \n    implementation("org.mapstruct:mapstruct:${mapstructVersion}") \u278a\n\n    ksp("org.babyfish.jimmer:jimmer-ksp:${jimmerVersion}") \u278b\n    kapt("org.mapstruct:mapstruct-processor:${mapstructVersion}") \u278c\n\tkapt("org.babyfish.jimmer:jimmer-mapstruct-apt:${jimmerVersion}") \u24d0\n\n    ...omit other dependencies...\n}\n\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n'})})}),(0,o.jsx)(a.A,{value:"java_gradle_plugin",label:"Java(Gradle Plugin)",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'plugins {\n    id "tech.argonariod.gradle-plugin-jimmer" version "latest.release"\n\n    ...omit other plugins...\n}\n\njimmer {\n    version = "${jimmerVersion}"\n\n    ...omit other configurations...\n}\n\ndependencies {\n\n    implementation "org.projectlombok:lombok:${lombok.version}" \u2780\n    implementation "org.mapstruct:mapstruct:${mapstructVersion}" \u278a\n\n    annotationProcessor "org.projectlombok:lombok:${lombok.version}" \u2781\n    annotationProcessor "org.mapstruct:mapstruct-processor:${mapstructVersion}" \u278d\n    \n    // there\'s no need to add org.babyfish.jimmer:jimmer-apt to dependencies manually\n    // when mapstruct-processor dependency is detected\uff0cthe gradle plugin will add jimmer-apt to dependencies automatically\n\n    ...omit other dependencies...\n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin_gradle_plugin",label:"Kotlin(Gradle Plugin)",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    id("tech.argonariod.gradle-plugin-jimmer") version "latest.release"\n    id("com.google.devtools.ksp") version "1.7.10+"\n    kotlin("kapt") version "1.7.10"\n\n    ...omit other plugins...\n}\n\njimmer {\n    version = "${jimmerVersion}"\n\n    ...omit other configurations...\n}\n\ndependencies {\n    \n    implementation("org.mapstruct:mapstruct:${mapstructVersion}") \u278a\n    kapt("org.mapstruct:mapstruct-processor:${mapstructVersion}") \u278c\n\n    ...omit other dependencies...\n}\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["In this example, we assume static POJOs are written in Java using ",(0,o.jsx)(n.a,{href:"https://projectlombok.org/",children:"lombok"}),"."]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Language"}),(0,o.jsx)("th",{children:"Location"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{rowspan:"3",children:"Java and Kotlin"}),(0,o.jsx)("td",{children:"\u278a"}),(0,o.jsx)("td",{children:"Introduce mapstruct dependency for user code to use mapstruct annotations"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"\u278b"}),(0,o.jsxs)("td",{children:["Use Jimmer's preprocessor to generate related source code for dynamic types, Java uses ",(0,o.jsx)(n.code,{children:"jimmer-apt"}),", Kotlin uses ",(0,o.jsx)(n.code,{children:"jimmer-ksp"})]})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"\u278c"}),(0,o.jsxs)("td",{children:["Use mapstruct's annotation processor to generate source code ",(0,o.jsx)("i",{children:"(introduced later)"})]})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{rowspan:"2",children:"Java only"}),(0,o.jsx)("td",{children:"\u2780"}),(0,o.jsx)("td",{children:"Introduce lombok dependency for user code to use lombok annotations"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"\u2781"}),(0,o.jsx)("td",{children:"Use Lombok preprocessor to modify static POJO class code, e.g. add getters, setters"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{rowspan:"2",children:"Kotlin only"}),(0,o.jsx)("td",{children:"\u24d0"}),(0,o.jsxs)("td",{children:["Use ",(0,o.jsx)(n.code,{children:"jimmer-mapstruct-apt"})," to extend \u278c"]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"define-pojo",children:"Define POJO"}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"',children:"@Data\npublic class BookInput {\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.java"',children:"data class BookInput(\n    val id: Long? = null,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?,\n    val authorIds: List<Long>\n)\n"})})})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@Nullable"})," annotation is used in the Java POJO code only to improve readability and has no functional effect"]})}),"\n",(0,o.jsx)(n.p,{children:"Three properties of this POJO need to be explained:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"BookInput.id"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Here, ",(0,o.jsx)(n.code,{children:"BookInput.id"})," is allowed to be null. This is necessary, for example, the id does not need to be specified when inserting data."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The dynamic property ",(0,o.jsx)(n.code,{children:"Book.id"})," of the entity object does not allow null ",(0,o.jsxs)(n.em,{children:["(Jimmer prohibits id from being null, please refer to ",(0,o.jsx)(n.a,{href:"../../mapping/base/basic#id",children:"Mapping/Basic Mapping/@Id"}),")"]})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The two contradict each other, so how to convert ",(0,o.jsx)(n.code,{children:"BookInput"})," to ",(0,o.jsx)(n.code,{children:"Book"}),"?"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Jimmer agrees that if the property of the POJO can be null while the corresponding property of the dynamic object cannot be null, the corresponding property of the dynamic object will not be assigned and will remain missing."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"BookInput.storeId"})}),"\n",(0,o.jsxs)(n.p,{children:["This is obviously an associated id for the dynamic entity object property ",(0,o.jsx)(n.code,{children:"Book.store"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This kind of dynamic object property is defined as an associated object, but in the POJO it is defined as an associated id,\ncalled a ",(0,o.jsx)(c.l,{buttonText:"short association",children:(0,o.jsx)(l.M,{})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"BookInput.authorIds"})}),"\n",(0,o.jsxs)(n.p,{children:["This is obviously a collection of associated ids, for the dynamic entity object property ",(0,o.jsx)(n.code,{children:"Book.authors"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This kind of dynamic object property is defined as an associated objects, but in the POJO it is defined as an associated ids,\ncalled a ",(0,o.jsx)(c.l,{buttonText:"short association",children:(0,o.jsx)(l.M,{})}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The other properties are exactly the same as the original entity definition and need no explanation."}),"\n",(0,o.jsx)(n.h2,{id:"define-mapper",children:"Define Mapper"}),"\n",(0,o.jsx)(n.p,{children:"The most important thing when using mapstruct is to define the Mapper, as follows"}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookInputMapper.java"',children:"@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    Book toBook(BookInput input);\n}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInputMapper.java"  ',children:"@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    fun toBook(input: BookInput): Book\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["This Mapper provides a ",(0,o.jsx)(n.code,{children:"toBook"})," method to convert a ",(0,o.jsx)(n.code,{children:"BookInput"})," object to a ",(0,o.jsx)(n.code,{children:"Book"})," object."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"BookInput.id"}),", ",(0,o.jsx)(n.code,{children:"BookInput.id"}),", ",(0,o.jsx)(n.code,{children:"BookInput.name"})," and ",(0,o.jsx)(n.code,{children:"BookInput.price"})," are all non-associated properties that mapstruct can handle well."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The issue that ",(0,o.jsx)(n.code,{children:"BookInput.id"})," can be null while ",(0,o.jsx)(n.code,{children:"Book.id"})," cannot be null has been discussed before, so it won't be repeated here."]})}),"\n",(0,o.jsxs)(n.p,{children:["The key is how ",(0,o.jsx)(n.code,{children:"BookInput.storeId"})," and ",(0,o.jsx)(n.code,{children:"BookInput.authorIds"})," should be mapped, which falls into two cases:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The entity defines @IdView properties"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The entity does not define @IdView properties"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"if-the-entity-defines-idview-properties",children:"If the entity defines @IdView properties"}),"\n",(0,o.jsxs)(n.p,{children:["If the entity type defines ",(0,o.jsx)(n.code,{children:"@IdView"})," properties, for example:"]}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...omit other properties...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // id view of associated object store  \n    Long storeId();\n\n    // id view of all objects in associated collection authors\n    // highlight-next-line\n    @IdView("authors")    \n    List<Long> authorIds();\n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...omit other properties...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // id view of associated object store\n    val storeId: Long?\n\n    // id view of all objects in associated collection authors\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"In this case, the entity object and POJO correspond completely, and the Mapper does not need any modification."}),"\n",(0,o.jsx)(n.h3,{id:"if-the-entity-does-not-define-idview-properties",children:"If the entity does not define @IdView properties"}),"\n",(0,o.jsxs)(n.p,{children:["If the entity type does not define ",(0,o.jsx)(n.code,{children:"@IdView"})," properties, the Mapper needs to be modified:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Convert ",(0,o.jsx)(n.code,{children:"BookInput.storeId"})," to a ",(0,o.jsx)(n.code,{children:"BookStore"})," object with only the id, then assign it to ",(0,o.jsx)(n.code,{children:"Book.store"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Convert ",(0,o.jsx)(n.code,{children:"BookInput.authorIds"})," to a collection of ",(0,o.jsx)(n.code,{children:"Author"})," objects with only ids, then assign it to ",(0,o.jsx)(n.code,{children:"Book.authors"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookInputMapper.java"',children:'@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store", source = "storeId") \n    // highlight-next-line\n    @Mapping(target = "authors", source = "authorIds")\n    Book toBook(BookInput input);\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    BookStore toBookStore(Long id);\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    Author toAuthor(Long id);\n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInputMapper.java"',children:'@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store", source = "storeId")\n    // highlight-next-line \n    @Mapping(target = "authors", source = "authorIds")\n    fun toBook(input: BookInput): Book\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    fun toBookStore(id: Long?): BookStore\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    fun toAuthor(id: Long?): Author\n}\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Since mapstruct also supports ",(0,o.jsx)(n.code,{children:'@Mapping(target = "store.id", source = "storeId")'}),", the following syntax can also be used to simplify the code:"]}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookInputMapper.java"',children:'@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line  \n    @Mapping(target = "store.id", source = "storeId")\n    @Mapping(target = "authors", source = "authorIds")\n    Book toBook(BookInput input);\n\n    @BeanMapping(ignoreByDefault = true)\n    @Mapping(target = "id", source = ".")\n    Author toAuthor(Long id); \n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInputMapper.java"',children:'@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store.id", source = "storeId") \n    @Mapping(target = "authors", source = "authorIds")\n    fun toBook(input: BookInput): Book\n\n    @BeanMapping(ignoreByDefault = true)\n    @Mapping(target = "id", source = ".")\n    fun toAuthor(id: Long?): Author\n}\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Now we can convert ",(0,o.jsx)(n.code,{children:"BookInput"})," to ",(0,o.jsx)(n.code,{children:"Book"}),":"]}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"BookInput input = ...omit...;\nBookInputMapper mapper = Mappers.getMapper(BookInputMapper.class);\nBook book = mapper.toBook(input);\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val input: BookInput = ...omit...\nval mapper = Mappers.getMapper(BookInputMapper::class.java)\nval book = mapper.toBook(input)\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"make-pojo-implement-input-interface",children:"Make POJO implement Input interface"}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer provides a simple interface, ",(0,o.jsx)(n.code,{children:"org.babyfish.jimmer.Input<E>"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public interface Input<E> {\n\n    E toEntity(); \n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Dynamic objects will never implement this interface, this interface should be implemented by user-defined static POJO classes. Its function is very simple, just convert the current static POJO to a dynamic object."}),"\n",(0,o.jsxs)(n.p,{children:["This interface can provide convenience at the syntax level. Whether it is the underlying ",(0,o.jsx)(n.a,{href:"../../mutation/save-command",children:"save command"})," or the top-level spring-data base interface ",(0,o.jsx)(n.code,{children:"JRepository/KRepository"}),", its ",(0,o.jsx)(n.code,{children:"sava"})," method directly accepts ",(0,o.jsx)(n.code,{children:"Input"})," parameters, without the user having to call the Mapper to complete the conversion."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want this convenience at the syntax level, you can choose to have the POJO implement this interface by modifying the ",(0,o.jsx)(n.code,{children:"BookInput"})," code as follows:"]}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"  ',children:"@Data\npublic class BookInput implements Input<Book> { \u2776\n\n    private static final Converter CONVERTER =  \n        Mappers.getMapper(Converter.class);\n\n    ...omit private fields...\n\n    @Override  \n    public Book toEntity() { \u2777\n        return CONVERTER.toBook(this);\n    }\n\n    @Mapper\n    interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        Book toBook(BookInput input);\n\n        ...omit other mapstruct configuration... \n    }\n}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:"data class BookInput(\n    ...omit... \n): Input<Book> { \u2776\n\n    override fun toEntity(): Book = \u2777\n        CONVERTER.toBook(this)\n\n    @Mapper  \n    internal interface Converter {  \n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        fun toBook(input: BookInput): Book\n\n        ...omit other mapstruct configuration...\n    }\n\n    companion object {\n\n        @JvmStatic  \n        private val CONVERTER =   \n            Mappers.getMapper(Converter::class.java)  \n    }\n}\n"})})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2776 ",(0,o.jsx)(n.code,{children:"BookInput"})," class implements interface ",(0,o.jsx)(n.code,{children:"org.babyfish.jimmer.Input"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2777 Implement ",(0,o.jsx)(n.code,{children:"Input.toEntity"})," method, use MapStruct to convert the current static ",(0,o.jsx)(n.code,{children:"Input DTO"})," object to the dynamic ",(0,o.jsx)(n.code,{children:"Book"})," entity object. This is the only function of this class."]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);