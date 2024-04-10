"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[833],{10936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>p,default:()=>j,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var i=t(74848),a=t(28453),r=t(11470),s=t(19365),o=t(64087),l=t(46845),c=t(74400);const d={sidebar_position:4,title:"Using MapStruct"},p=void 0,u={id:"mutation/save-command/input-dto/mapstruct",title:"Using MapStruct",description:"Not recommended for Kotlin.",source:"@site/docs/mutation/save-command/input-dto/mapstruct.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/mapstruct",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/mapstruct",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/mapstruct.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Using MapStruct"},sidebar:"tutorialSidebar",previous:{title:"Using DTO Language",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/dto-lang"},next:{title:"Delete Command",permalink:"/jimmer-doc/docs/mutation/delete-command"}},h={},m=[{value:"Define Input DTO",id:"define-input-dto",level:2},{value:"MapStruct Converter",id:"mapstruct-converter",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Best Practices",id:"best-practices",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"Not recommended for Kotlin."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This solution is based on ",(0,i.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"}),", which relies on ",(0,i.jsx)(n.code,{children:"apt"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Kotlin has deprecated ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/kapt.html",children:"kapt"})," in favor of ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/ksp-overview.html",children:"ksp"}),"."]}),"\n"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["So as Kotlin evolves, using ",(0,i.jsx)(n.code,{children:"kapt"})," may cause more and more problems in the future."]})]}),"\n",(0,i.jsx)(n.h2,{id:"define-input-dto",children:"Define Input DTO"}),"\n",(0,i.jsxs)(n.p,{children:["Let's look at an example ",(0,i.jsx)(n.code,{children:"InputDTO"})," ",(0,i.jsx)(n.em,{children:"(for simplicity, Java version uses Lombok)"}),":"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"',children:"@Data\npublic class BookInput {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<AuthorItem> authors; \u2778\n\n    @Data\n    public static class AuthorItem {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:"data class BookInput(\n    val id: Long? = null, \u2776\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?, \u2777 \n    val authors: List<AuthorItem> \u2778\n) {\n\n    data class AuthorItem(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    )\n}\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2776 If the id is designated some auto-generation strategy, it is not required. This is also a feature of save commands, see details in ",(0,i.jsx)(n.a,{href:"../save-mode#summary",children:"Save Modes/Summary"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Jimmer entities, ",(0,i.jsx)(n.code,{children:"id"})," cannot be null. Missing ",(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.em,{children:"(i.e. not assigning it)"})," represents the object does not have an ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Input DTOs, static POJO types do not have the concept of missing properties. ",(0,i.jsx)(n.code,{children:"null"})," represents missing ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"This seems contradictory and difficult to convert between. Don't worry, Jimmer provides automated solutions, discussed later."})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2777 Explicitly specifies this Input DTO wants to edit the entity's many-to-one association ",(0,i.jsx)(n.code,{children:"Book.store"})," using the ",(0,i.jsx)(c.l,{buttonText:"short association",children:(0,i.jsx)(o.M,{})})," mode."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2778 Explicitly specifies this Input DTO wants to edit the entity's many-to-many association ",(0,i.jsx)(n.code,{children:"Book.authors"})," using the ",(0,i.jsx)(c.l,{buttonText:"long association",children:(0,i.jsx)(l.Y,{})})," mode.\nThe type of associated objects is also fixed to the nested Input DTO type ",(0,i.jsx)(n.code,{children:"BookInput.AuthorItem"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mapstruct-converter",children:"MapStruct Converter"}),"\n",(0,i.jsxs)(n.p,{children:["Jimmer extends ",(0,i.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"})," which can be used to handle conversions between dynamic entities and static Input DTOs.\nHow to use the relevant extensions is detailed in ",(0,i.jsx)(n.a,{href:"../../../object/view/mapstruct",children:"Object/DTO Conversion/MapStruct"}),", this article will not repeat it."]}),"\n",(0,i.jsxs)(n.p,{children:["Define the ",(0,i.jsx)(n.code,{children:"BookInputMapper"})," interface:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookInputMapper.java"',children:"@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    Book toBook(BookInput input);\n\n    ...Other mapstruct configurations omitted...  \n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInputMapper.kt"  ',children:"@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    fun toBook(BookInput input): Book\n\n    ...Other mapstruct configurations omitted...\n}\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["MapStruct's annotation processor needs to be used to generate the implementation class for this interface at compile time. Details are explained in ",(0,i.jsx)(n.a,{href:"../../../object/view/mapstruct",children:"Object Section/DTO Mapping/MapStruct"})," and not repeated here."]})}),"\n",(0,i.jsx)(n.h2,{id:"http-api",children:"HTTP API"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'private static final BookInputMapper BOOK_INPUT_MAPPER =\n    Mappers.getMapper(BookInputMapper.class);\n\n@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line \n    @RequestBody BookInput input\n) {\n    bookRepository.save(\n        // highlight-next-line\n        BOOK_INPUT_MAPPER.toBook(input)\n    );\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    bookRepository.save(\n        // highlight-next-line\n        BOOK_INPUT_MAPPER.toBook(input)\n    )\n\n    companion object {\n        private val BOOK_INPUT_MAPPER =\n            Mappers.getMapper(BookInputMapper::class.java) \n    }\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, MapStruct is used to convert ",(0,i.jsx)(n.code,{children:"BookInput"})," to ",(0,i.jsx)(n.code,{children:"Book"})," entity and directly persist it."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Jimmer entities, ",(0,i.jsx)(n.code,{children:"Book.id"})," cannot be null. Missing ",(0,i.jsx)(n.code,{children:"id"})," ",(0,i.jsx)(n.em,{children:"(i.e. not assigning it)"})," represents the object does not have an ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Input DTO, static POJO type, ",(0,i.jsx)(n.code,{children:"BookInput.id"})," being null represents missing ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n"]}),(0,i.jsxs)(n.p,{children:["Jimmer has built-in extensions to MapStruct that will not assign ",(0,i.jsx)(n.code,{children:"BookInput.id"})," to ",(0,i.jsx)(n.code,{children:"Book.id"})," if it is null, so there are no issues."]})]}),"\n",(0,i.jsx)(n.h2,{id:"improvement",children:"Improvement"}),"\n",(0,i.jsxs)(n.p,{children:["To better integrate with Jimmer, developers can make ",(0,i.jsx)(n.code,{children:"BookInput"})," implement the ",(0,i.jsx)(n.code,{children:"org.babyfish.jimmer.Input<E>"})," interface:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public interface Input<E> {\n\n    E toEntity(); \n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Dynamic objects will never implement this interface. It should be implemented by user-defined static POJO classes. Its functionality is simple: convert the current static POJO to a dynamic object."}),"\n",(0,i.jsxs)(n.p,{children:["Make ",(0,i.jsx)(n.code,{children:"BookInput"})," implement ",(0,i.jsx)(n.code,{children:"Input<Book>"}),":"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"',children:"@Data\npublic class BookInput implements Input<Book> {\n\n    private static final Converter CONVERTER =\n        Mappers.getMapper(Converter.class);\n\n    ...Private fields omitted...\n\n    @Override\n    // highlight-next-line \n    public Book toEntity() {\n        return CONVERTER.toBook(this);\n    }\n\n    @Mapper\n    interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        Book toBook(BookInput input);\n\n        ...Other mapstruct configurations omitted...\n    }\n\n    ...AuthorItem definition omitted...\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:"data class BookInput(\n   ...\n) : Input<Book> {\n\n    // highlight-next-line\n    override fun toEntity(): Book =\n        CONVERTER.toBook(this)\n\n    @Mapper  \n    internal interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        fun toBook(input: BookInput): Book\n\n        ...Other mapstruct configurations omitted...\n    }\n\n    companion object {\n\n        @JvmStatic\n        private val CONVERTER =\n            Mappers.getMapper(Converter::class.java)\n    }\n\n    ...AuthorItem definition omitted...\n}\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In this improved example, the previously introduced ",(0,i.jsx)(n.code,{children:"BookInputMapper"})," is replaced by ",(0,i.jsx)(n.code,{children:"BookInput.Converter"}),", so the previous ",(0,i.jsx)(n.code,{children:"BookInputMapper"})," can be deleted."]})}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input);\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input) \n}\n'})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Leveraging the ",(0,i.jsx)(n.code,{children:"Input<E>"})," interface to change coding style is recommended but not mandatory."]})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(n.p,{children:"In real projects, we often face the problem that entities may have many properties, and"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Relatively more properties need to be specified during insertion"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Relatively fewer properties need to be specified during modification"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Book"})," entity we consistently use as example has few properties and is inconvenient to demonstrate this."]}),"\n",(0,i.jsxs)(n.p,{children:["So I make up an entity type ",(0,i.jsx)(n.code,{children:"Product"})," with more properties:"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Product.java"',children:"@Entity\npublic interface Product {\n\n    ...Many entity properties, omitted... \n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Product.kt"',children:"@Entity\ninterface Product {\n\n    ...Many entity properties, omitted...\n} \n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For insertion which requires specifying relatively more properties, define ",(0,i.jsx)(n.code,{children:"CreateProductInput"}),":"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="CreateProductInput.java" ',children:"@Data\npublic class CreateProductInput implements Input<Product> {\n\n    ...More fields, omitted... \n\n    @Override\n    public Product toEntity() {\n        ...\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="CreateProductInput.kt"',children:"data class CreateProductInput(\n    ...More fields, omitted...\n) : Input<Product> {\n\n    override fun toEntity(): Product {\n        ...\n    }\n}\n"})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For modification which requires specifying relatively fewer properties, define ",(0,i.jsx)(n.code,{children:"UpdateProductInput"}),":"]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="UpdateProductInput.java"',children:"@Data  \npublic class UpdateProductInput implements Input<Product> {\n\n    ...Fewer fields, omitted...\n\n    @Override\n    public Product toEntity() {\n        ...\n    }\n}\n"})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="UpdateProductInput.kt"',children:"data class UpdateProductInput(\n    ...Fewer fields, omitted... \n) : Input<Product> {\n\n    override fun toEntity(): Product {\n        ...\n    }\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Finally, provide two HTTP APIs:"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(s.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput` has relatively more properties  \n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")\npublic void updateProduct(\n    // `UpdateProductInput` has relatively fewer properties\n    // highlight-next-line\n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'})})}),(0,i.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput` has relatively more properties\n    // highlight-next-line \n    @RequestBody input: CreateProductInput\n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")  \nfun updateProduct(\n    // `UpdateProductInput` has relatively fewer properties\n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n}\n'})})})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["As you can see, no matter how many different ",(0,i.jsx)(n.code,{children:"Input DTO"})," types need to be defined for the same entity according to project requirements, we can always use MapStruct to convert them into the uniform dynamic entity type, then persist in one line of code calling save commands."]}),(0,i.jsx)(n.p,{children:"Even if the project is more complex, e.g. people with different identities can edit data structures of different shapes, this pattern can still be applied repeatedly to handle such scenarios easily."})]})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},46845:(e,n,t)=>{t.d(n,{Y:()=>w});var i=t(96540),a=t(67733),r=t(67512),s=t(43581),o=t(80421),l=t(1489),c=t(71543),d=t(57416),p=t(53881),u=t(88933),h=t(46780),m=t(19591),x=t(618),j=t(73231),v=t(30854),g=t(16718),y=t(4671),f=t(67034),k=t(63051),I=t(15993),b=t(28968),A=t(13407),B=t(46831),P=t(44586),C=t(82470),M=t(16712),N=t(74848);const w=(0,i.memo)((()=>{const{i18n:e}=(0,P.A)(),n=(0,M.o)(),t=(0,i.useMemo)((()=>n?T:S),[n]),w=(0,i.useMemo)((()=>{const e=new Map;for(const n of t)e.set(n.id,n);return e}),[t]),_=(0,i.useMemo)((()=>n?O:R),[n]),D=(0,i.useMemo)((()=>{const e=new Map;for(const n of _)e.set(n.id,n);return e}),[_]),[q,L]=(0,C.e)((()=>({userId:1,province:w.get(1).province,city:w.get(1).city,address:w.get(1).address,items:[{__rowId:1,productId:1,name:D.get(1).name,quantity:2},{__rowId:2,productId:10,name:D.get(10).name,quantity:1}]}))),J=(0,i.useMemo)((()=>Math.max(...q.items.map((e=>e.__rowId)))+1),[q]),U=(0,i.useCallback)((e=>{const n=w.get(parseInt(e.target.value));void 0!==n&&L((e=>{e.userId=n.id,e.province=n.province,e.city=n.city,e.address=n.address}))}),[L,w]),z=(0,i.useCallback)((e=>{L((n=>{n.province=e.target.value}))}),[L]),F=(0,i.useCallback)((e=>{L((n=>{n.city=e.target.value}))}),[L]),K=(0,i.useCallback)((e=>{L((n=>{n.address=e.target.value}))}),[L]),W=(0,i.useCallback)(((e,n)=>{L((t=>{for(const i of t.items)if(i.__rowId===n){i.productId=parseInt(e.target.value),E(t);break}}))}),[L]),G=(0,i.useCallback)(((e,n)=>{L((t=>{for(const i of t.items)if(i.__rowId===n){i.quantity=parseInt(e.target.value),E(t);break}}))}),[L]),V=(0,i.useCallback)((e=>{L((n=>{for(let t=n.items.length-1;t>=0;--t)if(n.items[t].__rowId===e){n.items.splice(t,1);break}}))}),[L]),H=(0,i.useCallback)((()=>{L((e=>{e.items.push({__rowId:J,quantity:1})}))}),[L,J]),[Q,Y]=(0,i.useState)(!1),X=(0,i.useCallback)((()=>{Y(!0)}),[]),Z=(0,i.useCallback)((()=>{Y(!1)}),[]);return(0,N.jsxs)(d.A,{elevation:3,style:{padding:"1.5rem"},children:[(0,N.jsx)(a.A,{component:"form",noValidate:!0,autoComplete:"off",children:(0,N.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,N.jsx)(l.Ay,{item:!0,xs:4,children:(0,N.jsx)(s.A,{fullWidth:!0,select:!0,label:n?"\u8d2d\u4e70\u4eba":"Purchaser",value:q.userId,onChange:U,children:t.map((e=>(0,N.jsx)(o.A,{value:e.id,children:e.nickName},e.id)))})}),(0,N.jsx)(l.Ay,{item:!0,xs:4,children:(0,N.jsx)(s.A,{fullWidth:!0,label:n?"\u7701\u4efd":"Province",value:q.province,onChange:z})}),(0,N.jsx)(l.Ay,{item:!0,xs:4,children:(0,N.jsx)(s.A,{fullWidth:!0,label:n?"\u57ce\u5e02":"City",value:q.city,onChange:F})}),(0,N.jsx)(l.Ay,{item:!0,xs:12,children:(0,N.jsx)(s.A,{fullWidth:!0,label:n?"\u5730\u5740":"Address",value:q.address,onChange:K})}),(0,N.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,N.jsx)(c.A,{textAlign:"left",children:n?"\u8ba2\u5355\u660e\u7ec6":"Order Items"}),(0,N.jsx)(m.A,{component:d.A,children:(0,N.jsxs)(p.A,{size:"small",children:[(0,N.jsx)(x.A,{children:(0,N.jsxs)(j.A,{children:[(0,N.jsx)(h.A,{children:n?"\u5546\u54c1":"Commodity"}),(0,N.jsx)(h.A,{children:n?"\u6570\u91cf":"Quantity"}),(0,N.jsx)(h.A,{children:n?"\u5355\u4ef7":"Unit price"}),(0,N.jsx)(h.A,{children:n?"\u660e\u7ec6\u4ef7":"Item price"}),(0,N.jsx)(h.A,{children:n?"\u5220\u9664":"Delete"})]})}),(0,N.jsx)(u.A,{children:q.items.map((e=>{const n=void 0!==e.productId?D.get(e.productId):void 0;return(0,N.jsxs)(j.A,{children:[(0,N.jsx)(h.A,{children:(0,N.jsx)(s.A,{select:!0,value:n?.id,variant:"standard",size:"small",onChange:n=>{W(n,e.__rowId)},children:_.map((e=>(0,N.jsx)(o.A,{value:e.id,children:e.name},e.id)))})}),(0,N.jsx)(h.A,{children:(0,N.jsx)(s.A,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:n=>{G(n,e.__rowId)}})}),(0,N.jsx)(h.A,{children:n?.price}),(0,N.jsx)(h.A,{children:void 0!==n&&n.price*e.quantity}),(0,N.jsx)(h.A,{children:(0,N.jsx)(y.A,{onClick:()=>V(e.__rowId),children:(0,N.jsx)(f.A,{})})})]},e.__rowId)}))}),(0,N.jsx)(v.A,{children:(0,N.jsx)(j.A,{children:(0,N.jsx)(h.A,{colSpan:5,children:(0,N.jsxs)(r.A,{onClick:H,children:[(0,N.jsx)(g.A,{}),n?"\u6dfb\u52a0":"Add"]})})})})]})})]}),(0,N.jsxs)(l.Ay,{item:!0,xs:12,children:[n?"\u603b\u989d":"Total price",":",q.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>D.get(e.productId).price*e.quantity)).reduce(((e,n)=>e+n),0)]}),(0,N.jsx)(l.Ay,{item:!0,xs:12,children:(0,N.jsx)(r.A,{variant:"contained",onClick:X,children:n?"\u63d0\u4ea4":"Submit"})})]})}),(0,N.jsxs)(k.A,{open:Q,onClose:Z,children:[(0,N.jsx)(B.A,{children:n?"\u4fe1\u606f":"Info"}),(0,N.jsx)(b.A,{children:(0,N.jsx)(A.A,{children:n?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,N.jsx)(I.A,{children:(0,N.jsx)(r.A,{onClick:Z,children:n?"\u5173\u95ed":"Close"})})]})]})})),T=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],S=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],O=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],R=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function E(e){const n=e.items,t=new Map;for(let i=0;i<n.length;i++){const e=n[i];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){n.splice(i--,1);continue}if(void 0===e.productId)continue;const a=t.get(e.productId);void 0===a?t.set(e.productId,e):(a.quantity+=e.quantity,n.splice(i--,1))}}},64087:(e,n,t)=>{t.d(n,{M:()=>y});var i=t(44586),a=t(31729),r=t(48440),s=t(80421),o=t(57416),l=t(18441),c=t(68999),d=t(43581),p=t(63051),u=t(46831),h=t(28968),m=t(15993),x=t(13407),j=t(67512),v=t(96540),g=t(74848);const y=(0,v.memo)((()=>{const[e,n]=(0,v.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),t=(0,v.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),y=(0,v.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),f=(0,v.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),k=(0,v.useCallback)((e=>{let t;const i=e.target.value;t="string"==typeof i?parseInt(i):i,-1===t&&(t=void 0),n((e=>({...e,storeId:t})))}),[]),I=(0,v.useCallback)((e=>{let t=[];console.log(e.target.value);const i=e.target.value;t="string"==typeof i?i.split(",").map((e=>parseInt(e))):i,n((e=>({...e,authorIds:t})))}),[]),{i18n:b}=(0,i.A)(),A=(0,v.useMemo)((()=>"zh"==b.currentLocale||"zh_cn"==b.currentLocale||"zh_CN"==b.currentLocale),[b.currentLocale]),[B,P]=(0,v.useState)(!1),C=(0,v.useCallback)((()=>{P(!0)}),[]),M=(0,v.useCallback)((()=>{P(!1)}),[]);return(0,g.jsxs)(o.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,g.jsxs)(c.A,{spacing:2,children:[(0,g.jsx)("h1",{children:"Book Form"}),(0,g.jsx)(d.A,{label:"Name",value:e.name,onChange:t,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,g.jsx)(d.A,{label:"Edition",type:"number",value:e.edition,onChange:y}),(0,g.jsx)(d.A,{label:"Price",type:"number",value:e.price,onChange:f}),(0,g.jsxs)(a.A,{fullWidth:!0,children:[(0,g.jsx)(r.A,{id:"store-select-label",children:"Store"}),(0,g.jsxs)(l.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:k,children:[(0,g.jsx)(s.A,{value:-1,children:"--NONE--"}),(0,g.jsx)(s.A,{value:1,children:"O'REILLY"}),(0,g.jsx)(s.A,{value:2,children:"MANNING"})]})]}),(0,g.jsxs)(a.A,{fullWidth:!0,children:[(0,g.jsx)(r.A,{id:"author-multi-select-label",children:"Authors"}),(0,g.jsxs)(l.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:I,children:[(0,g.jsx)(s.A,{value:1,children:"Eve Procello"}),(0,g.jsx)(s.A,{value:2,children:"Alex Banks"}),(0,g.jsx)(s.A,{value:3,children:"Dan Vanderkam"}),(0,g.jsx)(s.A,{value:4,children:"Boris Cherny"}),(0,g.jsx)(s.A,{value:5,children:"Samer Buna"})]})]}),(0,g.jsx)(a.A,{children:(0,g.jsx)(j.A,{onClick:C,variant:"contained",children:A?"\u63d0\u4ea4":"Submit"})})]}),(0,g.jsxs)(p.A,{open:B,onClose:M,children:[(0,g.jsx)(u.A,{children:A?"\u4fe1\u606f":"Info"}),(0,g.jsx)(h.A,{children:(0,g.jsx)(x.A,{children:A?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,g.jsx)(m.A,{children:(0,g.jsx)(j.A,{onClick:M,children:"\u5173\u95ed"})})]})]})}))},66971:(e,n,t)=>{t.d(n,{a:()=>x});var i=t(96540),a=t(72774),r=t(63051),s=t(28968),o=t(48875),l=t(44676),c=t(47859),d=t(4671),p=t(99343),u=t(7324),h=t(39781),m=t(74848);const x=(0,i.memo)((e=>{let{open:n,fullScreen:t=!1,title:o,maxWidth:x="md",onClose:v,children:g}=e;const[y,f]=(0,i.useState)(t),k=(0,i.useCallback)((()=>{f((e=>!e))}),[]);return(0,m.jsxs)(r.A,{open:n,onClose:v,fullScreen:y,TransitionComponent:j,maxWidth:x,children:[(0,m.jsx)(a.A,{sx:{position:"relative"},children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,m.jsx)(d.A,{onClick:k,style:{color:"white"},children:y?(0,m.jsx)(u.A,{}):(0,m.jsx)(p.A,{})}),(0,m.jsx)(d.A,{"aria-label":"close",onClick:v,style:{color:"white"},children:(0,m.jsx)(h.A,{})})]})}),(0,m.jsx)(s.A,{children:g})]})})),j=i.forwardRef((function(e,n){return(0,m.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,t)=>{t.d(n,{l:()=>o});var i=t(96540),a=t(67512),r=t(66971),s=t(74848);const o=(0,i.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:o=n,variant:l="outlined",maxWidth:c,useOriginalText:d=!0,children:p}=e;const[u,h]=(0,i.useState)(!1),m=(0,i.useCallback)((e=>{h(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),x=(0,i.useCallback)((()=>{h(!1)}),[]),j=d?{textTransform:"none"}:{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{"data-is-view-more-button":"true",onClick:m,variant:l,size:"small",style:j,children:n}),(0,s.jsx)(r.a,{open:u,onClose:x,title:o,maxWidth:c,fullScreen:t,children:p})]})}))},16712:(e,n,t)=>{t.d(n,{o:()=>a});var i=t(44586);function a(){const{i18n:e}=(0,i.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}}}]);