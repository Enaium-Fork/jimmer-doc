"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8428],{56255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=t(74848),a=t(28453),s=t(11470),o=t(19365);const r={sidebar_position:13,title:"Querying Association Tables"},l=void 0,c={id:"query/associations",title:"Querying Association Tables",description:"Association Tables Hidden by Object Model",source:"@site/docs/query/associations.mdx",sourceDirName:"query",slug:"/query/associations",permalink:"/jimmer-doc/docs/query/associations",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/associations.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"Querying Association Tables"},sidebar:"tutorialSidebar",previous:{title:"Logical Deletion",permalink:"/jimmer-doc/docs/query/global-filter/logical-deleted"},next:{title:"Super QBE",permalink:"/jimmer-doc/docs/query/super_qbe"}},d={},h=[{value:"Association Tables Hidden by Object Model",id:"association-tables-hidden-by-object-model",level:2},{value:"Querying Association Tables Directly",id:"querying-association-tables-directly",level:2},{value:"Comparison with Entity Table Queries",id:"comparison-with-entity-table-queries",level:2},{value:"1. Use association table subquery to achieve a function",id:"1-use-association-table-subquery-to-achieve-a-function",level:3},{value:"2. Achieve the same functionality with entity table subquery",id:"2-achieve-the-same-functionality-with-entity-table-subquery",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"association-tables-hidden-by-object-model",children:"Association Tables Hidden by Object Model"}),"\n",(0,i.jsx)(n.p,{children:"Let's review this piece of entity interface code:"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line  \n        name = "BOOK_AUTHOR_MAPPING",  \n        joinColumnName = "BOOK_ID",  \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...omit other code...\n}\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID" \n    )\n    val authors: List<Author>\n\n    ...omit other code...\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," table is used as an association table here."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"BOOK"})," table in the database has a corresponding Book entity interface in Java code."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AUTHOR"})," table in the database has a corresponding Author entity interface in Java code."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["However, the ",(0,i.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," table in the database does not have a corresponding entity interface in Java code."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"That is, the association table is hidden from the object model."}),"\n",(0,i.jsx)(n.h2,{id:"querying-association-tables-directly",children:"Querying Association Tables Directly"}),"\n",(0,i.jsx)(n.p,{children:"Jimmer provides an interesting feature that allows querying association tables directly even if they are hidden without corresponding entities."}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"AssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n    \nList<Association<Book, Author>> associations = \n    sqlClient\n        // highlight-next-line\n        .createAssociationQuery(association)\n        .where(association.source().id().eq(3L))\n        .select(association)\n        .execute();\nassociations.forEach(System.out::println);\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        select(table)\n    }\n    .execute()\nassociations.forEach(::println) \n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"createAssociationQuery"})," in Java or ",(0,i.jsx)(n.code,{children:"queries.forList"})," in Kotlin represents a query based on the association table instead of entity tables."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The Java code demo here uses ",(0,i.jsx)(n.code,{children:"AssociationTable"})," type with complex generic arguments to be compatible with Java 8. It is recommended to upgrade Java and use the ",(0,i.jsx)(n.code,{children:"var"})," keyword."]})}),"\n",(0,i.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.BOOK_ID, \n    tb_1_.AUTHOR_ID  \n/* highlight-next-line */\nfrom BOOK_AUTHOR_MAPPING as tb_1_\nwhere tb_1_.BOOK_ID = ? /* 3 */\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is indeed a query based on the association table."}),"\n",(0,i.jsx)(n.p,{children:"The final printed result is (the original output is compact, formatted here for readability):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Association{\n    source={\n        "id":3\n    }, target={\n        "id":1\n    }\n}\nAssociation{ \n    source={\n        "id":3\n    },\n    target={\n        "id":2\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The returned data is a list of ",(0,i.jsx)(n.code,{children:"Association"})," objects:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class Association<S, T> {\n\n    public S source;\n    public T target;\n\n    // constructor and getter/setters\n} \n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Association<S, T>"})," represents association table entities that associate ",(0,i.jsx)(n.code,{children:"S"})," type to ",(0,i.jsx)(n.code,{children:"T"})," type. Association table entities are pseudo entities without ids. They only have two properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"source"}),": The object (Book in this example) corresponding to the foreign key pointing to the owning side."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"target"}),": The object (Author in this example) corresponding to the foreign key pointing to the target side."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In this example, object fetchers are not used to define the format of association pseudo entity objects (in fact association pseudo entity does not support object fetchers), so the ",(0,i.jsx)(n.code,{children:"source"})," and ",(0,i.jsx)(n.code,{children:"target"})," association properties only contain id property."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Author"})," also has a bidirectional many-to-many association ",(0,i.jsx)(n.code,{children:"Author.books"}),", which is the mirror of ",(0,i.jsx)(n.code,{children:"Book.authors"}),"."]}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Entity  \npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\n}\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors") \n    val books: List<Book>\n\n    ...\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Association table queries can also be created based on ",(0,i.jsx)(n.code,{children:"Author.books"}),", but ",(0,i.jsx)(n.code,{children:"source"})," will represent Author and ",(0,i.jsx)(n.code,{children:"target"})," will represent Book, reversed from the current example."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we only query the association table itself, so ",(0,i.jsx)(n.code,{children:"source"})," and ",(0,i.jsx)(n.code,{children:"target"})," objects only contain ids."]}),"\n",(0,i.jsxs)(n.p,{children:["To get complete ",(0,i.jsx)(n.code,{children:"source"})," and ",(0,i.jsx)(n.code,{children:"target"})," objects, join tables and use tuples for return:"]}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"AssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n\nList<Tuple2<Book, Author>> tuples =  \n    sqlClient\n        .createAssociationQuery(association)\n        .where(association.source().id().eq(3L))\n        // highlight-next-line\n        .select(\n            association.source(),\n            association.target() \n        )\n        .execute();\ntuples.forEach(System.out::println);\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        // highlight-next-line\n        select(\n            table.source,\n            table.target\n        )\n    }\n    .execute()\nassociations.forEach(::println)\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n\n    /* source() */\n    tb_1_.BOOK_ID,\n    tb_2_.NAME,\n    tb_2_.EDITION,\n    tb_2_.PRICE,\n    tb_2_.STORE_ID,\n\n    /* target() */ \n    tb_1_.AUTHOR_ID,\n    tb_3_.FIRST_NAME,\n    tb_3_.LAST_NAME,\n    tb_3_.GENDER\n\nfrom BOOK_AUTHOR_MAPPING as tb_1_  \ninner join BOOK as tb_2_\n    on tb_1_.BOOK_ID = tb_2_.ID\ninner join AUTHOR as tb_3_\n    on tb_1_.AUTHOR_ID = tb_3_.ID\nwhere tb_1_.BOOK_ID = ? /* 3 */ \n"})}),"\n",(0,i.jsx)(n.p,{children:"The final printed result is (formatted for readability):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Tuple2{\n    _1={\n        "id": 3,\n        "name": "Learning GraphQL", \n        "edition": 3,\n        "price": 51.00,\n        "store": {\n            "id": 1\n        }\n    },\n    _2={\n        "id": 1,\n        "firstName": "Alex",\n        "lastName": "Banks",\n        "gender": "MALE"\n    }\n} \nTuple2{\n    _1={\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51.00,\n        "store": {\n            "id": 1\n        }\n    },\n    _2={\n        "id": 2, \n        "firstName": "Eve",\n        "lastName": "Procello",\n        "gender": "MALE" \n    }\n}\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["The association pseudo entity ",(0,i.jsx)(n.code,{children:"Association<S, T>"})," is simple and special, does not support or need ",(0,i.jsx)(n.a,{href:"./object-fetcher",children:"object fetchers"}),"."]}),(0,i.jsxs)(n.p,{children:["However, its association properties ",(0,i.jsx)(n.code,{children:"source"})," and ",(0,i.jsx)(n.code,{children:"target"})," can support ",(0,i.jsx)(n.a,{href:"./object-fetcher",children:"object fetchers"}),", such as:"]}),(0,i.jsx)(s.A,{groupId:"language",children:(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"select(\n    table\n        .source\n        // highlight-next-line\n        .fetchBy {\n            allScalarFields()\n            store {\n                allScalarFields() \n            }\n        },\n    table.target\n)\n"})})})})]}),"\n",(0,i.jsx)(n.h2,{id:"comparison-with-entity-table-queries",children:"Comparison with Entity Table Queries"}),"\n",(0,i.jsx)(n.p,{children:"Readers may think that association table queries exist to allow developers to write more performant queries."}),"\n",(0,i.jsxs)(n.p,{children:["But this is not the case. Due to optimizations like ",(0,i.jsx)(n.a,{href:"./dynamic-join/optimization#phantom-joins",children:"phantom joins"})," and ",(0,i.jsx)(n.a,{href:"./dynamic-join/optimization#half-joins",children:"half joins"}),", whether association table queries are used or not, similar functionality and performance can be achieved. Using association table queries is completely up to user preference."]}),"\n",(0,i.jsx)(n.h3,{id:"1-use-association-table-subquery-to-achieve-a-function",children:"1. Use association table subquery to achieve a function"}),"\n",(0,i.jsx)(n.p,{children:"In previous examples, we demoed top-level queries based on association tables. Here we demo an association table subquery."}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nAssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        table.id().in(\n            // highlight-next-line\n            sqlClient\n                .createAssociationSubQuery(association) \n                .where(\n                    association\n                        .target() \u2776\n                        .firstName().eq("Alex")\n                )\n                .select(\n                    association\n                        .source() \u2777\n                        .id()\n                )\n        )  \n    )\n    .select(table)\n    .execute();\n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQueries.forList(Book::authors) {\n                    where(\n                        table\n                        .target \u2776\n                        .firstName eq "Alex"\n                    )\n                    select(\n                        table\n                        .source \u2777\n                        .id\n                    ) \n                }\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"Where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"createAssociationSubQuery"})," in Java and ",(0,i.jsx)(n.code,{children:"subQueries.forList"})," in Kotlin create a subquery based on the association table, to find books that contain the author with ",(0,i.jsx)(n.code,{children:"firstName"}),' "Alex".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2776 ",(0,i.jsx)(n.code,{children:"association.target"})," is a real JOIN that generates SQL JOIN to the ",(0,i.jsx)(n.code,{children:"AUTHOR"})," table for condition check."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2777 ",(0,i.jsx)(n.code,{children:"association.source"})," is a ",(0,i.jsx)(n.a,{href:"./dynamic-join/optimization#phantom-joins",children:"phantom join"})," that does not generate a SQL join."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The final generated SQL is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_  \nwhere\n    tb_1_.ID in (\n        /* highlight-next-line */ \n        select\n            tb_2_.BOOK_ID\n        from BOOK_AUTHOR_MAPPING as tb_2_\n        inner join AUTHOR as tb_3_\n            on tb_2_.AUTHOR_ID = tb_3_.ID\n        where tb_3_.FIRST_NAME = ? \n    )\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-achieve-the-same-functionality-with-entity-table-subquery",children:"2. Achieve the same functionality with entity table subquery"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book) \n    .where(\n        book.id().in(sqlClient\n            // highlight-next-line\n            .createSubQuery(author)\n            .where(author.firstName().eq("Alex"))\n            .select(\n                author.books().id() \u2776\n            )\n        )\n    )\n    .select(book)\n    .execute(); \n'})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQuery(Author::class) {\n                    where(table.firstName eq "Alex")\n                    select(\n                        table.books.id \u2776\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\u2776  ",(0,i.jsx)(n.code,{children:"author.books"})," is a ",(0,i.jsx)(n.a,{href:"./dynamic-join/optimization#half-joins",children:"half join"})," that only generates SQL JOIN from ",(0,i.jsx)(n.code,{children:"AUTHOR"})," to the ",(0,i.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," table, without further join to the ",(0,i.jsx)(n.code,{children:"BOOK"})," table."]}),"\n",(0,i.jsx)(n.p,{children:"The final generated SQL is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION, \n    tb_1_.PRICE,\n    tb_1_.STORE_ID\n    \nfrom BOOK as tb_1_\nwhere\n    tb_1_.ID in (\n        /* highlight-next-line */\n        select\n            tb_3_.BOOK_ID\n        from AUTHOR as tb_2_\n        inner join BOOK_AUTHOR_MAPPING as tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where tb_2_.FIRST_NAME = ?\n    ) \n"})}),"\n",(0,i.jsx)(n.p,{children:"Comparing the two SQLs, it's not hard to see they achieve the same functionality and performance."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Association table queries just provide developers with another query style, they are not irreplaceable. The same functionality and performance can be achieved with other means."})})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var i=t(96540),a=t(18215),s=t(23104),o=t(56347),r=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=p({queryString:t,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=c??x;return b({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=r[t].value;a!==i&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(_,{...e,...n})]})}function A(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);