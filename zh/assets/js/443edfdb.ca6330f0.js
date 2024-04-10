"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5211],{95119:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=l(74848),i=l(28453),t=l(11470),r=l(19365);const s={sidebar_position:9,title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668"},o=void 0,c={id:"mapping/advanced/join-table-filter",title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668",description:"\u4e24\u79cd\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-table-filter.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-table-filter",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-table-filter",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-table-filter.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-sql"},next:{title:"Key",permalink:"/jimmer-doc/zh/docs/mapping/advanced/key"}},d={},h=[{value:"\u4e24\u79cd\u573a\u666f",id:"\u4e24\u79cd\u573a\u666f",level:2},{value:"1. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054",id:"1-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054",level:3},{value:"2. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054",id:"2-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054",level:3},{value:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a",id:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a",level:2},{value:"\u5b9a\u4e49\u5173\u8054",id:"\u5b9a\u4e49\u5173\u8054",level:3},{value:"\u6761\u4ef6\u7d22\u5f15",id:"\u6761\u4ef6\u7d22\u5f15",level:3}];function u(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u4e24\u79cd\u573a\u666f",children:"\u4e24\u79cd\u573a\u666f"}),"\n",(0,a.jsx)(e.p,{children:"Jimmer\u652f\u6301\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668\uff0c\u6709\u4e24\u79cd\u573a\u666f"}),"\n",(0,a.jsx)(e.h3,{id:"1-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054",children:"1. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u76f8\u540c\u7684\u591a\u4e2a\u5173\u8054"}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Shop {\n\n    @Id\n    long id();\n\n    String name();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    List<Customer> customers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    List<Customer> vipCustomers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    List<Customer> ordinaryCustomers();\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Shop {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    val customers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    val vipCustomers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    val ordinaryCustomers: List<Customer>\n}\n'})})})]}),"\n",(0,a.jsxs)(e.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,a.jsx)(e.code,{children:"Shop.customers"}),"\uff0c",(0,a.jsx)(e.code,{children:"Shop.vipCustomers"}),"\u548c",(0,a.jsx)(e.code,{children:"Shop.ordinaryCustomers"}),"\u5171\u4eab\u4e00\u5f20\u4e2d\u95f4\u8868"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"create table SHOP_CUSTOMER_MAPPING(\n    SHOP_ID bigint not null,\n    CUSTOMER_ID bigint not null,\n    MAPPING_TYPE varchar(8) not null\n);\n\n// \u4e2d\u95f4\u8868\u4e3b\u952e\u662f\u5426\u5305\u542b\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u9700\u8981\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002\n// \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e00\u4e2a`Shop`\u548c\u4e00\u4e2a`Customer`\u4e4b\u95f4\u7684\u5173\u8054\n// \u4e0d\u80fd\u65e2\u662f\"VIP\"\u53c8\u662f\"ORDINARY\"\uff0c\n// \u6240\u4ee5\uff0c\u4e3b\u952e\u7ea6\u675f\u4e0d\u5305\u542b`MAPPING_TYPE`\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SHOP_ID, CUSTOMER_ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__SHOP\n        foreign key(SHOP_ID)\n            references SHOP(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('VIP', 'ORDINARY'));\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8be5\u8868\u4ee5\u5982\u4e0b\u65b9\u5f0f\u5b58\u50a8\u6570\u636e"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"SHOP_ID"}),(0,a.jsx)(e.th,{children:"CUSTOMER_ID"}),(0,a.jsx)(e.th,{children:"MAPPING_TYPE"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"21"}),(0,a.jsx)(e.td,{children:"3176"}),(0,a.jsx)(e.td,{children:"VIP"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"21"}),(0,a.jsx)(e.td,{children:"1087"}),(0,a.jsx)(e.td,{children:"ORDINARY"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"21"}),(0,a.jsx)(e.td,{children:"9155"}),(0,a.jsx)(e.td,{children:"ORDINARY"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"40"}),(0,a.jsx)(e.td,{children:"8347"}),(0,a.jsx)(e.td,{children:"VIP"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"40"}),(0,a.jsx)(e.td,{children:"4365"}),(0,a.jsx)(e.td,{children:"ORDINARY"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"40"}),(0,a.jsx)(e.td,{children:"3478"}),(0,a.jsx)(e.td,{children:"ORDINARY"})]})]})]}),"\n",(0,a.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,a.jsx)(e.code,{children:"Shop.vipCustomers"}),"\u5bf9\u5e94\u4e24\u6761\u6570\u636e\uff0c",(0,a.jsx)(e.code,{children:"Shop.ordinaryCustomers"}),"\u5bf9\u5e944\u6761\u6570\u636e\uff0c\u800c",(0,a.jsx)(e.code,{children:"Shop.customers"}),"\u53ef\u4ee5\u770b\u5230\u6240\u6709\u6570\u636e\uff0c\u5373\u53ef\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Shop.customers = Shop.vipCustomers + Shop.ordinaryCustomers\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u53ef\u89c1\uff0c",(0,a.jsx)(e.code,{children:"Shop.customers"}),"\u5e76\u975e\u539f\u59cb\u5173\u8054\uff0c\u800c\u662f\u5176\u4ed6\u591a\u4e2a\u5173\u8054\u7684\u5e76\u96c6\u3002\u6211\u4eec\u4e0d\u59a8\u79f0\u5176\u4e3a\u5e76\u96c6\u5173\u8054\u3002"]}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsxs)(e.p,{children:["\u5e76\u96c6\u5173\u8054\u4e0d\u80fd\u88ab\u76f4\u63a5\u4fee\u6539\uff0c\u56e0\u6b64\u5fc5\u987b\u58f0\u660e",(0,a.jsx)(e.code,{children:"readonly = true"}),"\u3002"]})}),"\n",(0,a.jsxs)(e.p,{children:["\u5176\u5b9e\uff0c\u5e76\u96c6\u5173\u8054",(0,a.jsx)(e.code,{children:"Shop.customers"}),"\u8fd8\u6709\u53e6\u5916\u4e00\u79cd\u7b49\u4ef7\u7684\u5199\u6cd5"]}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...,\n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class,\n        // highlight-next-line\n        values = {"VIP", "ORDINARY"}\n    )\n)\nList<Customer> customers();\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@ManyToMany\n@JoinTable(\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...,\n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class,\n        // highlight-next-line\n        values = {"VIP", "ORDINARY"}\n    )\n)\nval customers: List<Customer>\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u540e\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u8fd9\u4e09\u4e2a\u5173\u8054\u7684JOIN\u884c\u4e3a\u7684\u5dee\u5f02"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Shop.customers"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .customers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line\n                .customers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e3a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_ \n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID\ninner join CUSTOMER tb_3_ \n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Shop.vipCustomers"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .vipCustomers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line\n                .vipCustomers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e3a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_ \n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID\n    /* highlight-next-line */\n    and tb_2_.MAPPING_TYPE = ? /* VIP */\nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_ \n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Shop.ordinaryCustomers"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .ordinaryCustomers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line\n                .ordinaryCustomers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u4e3a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_ \n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID\n    /* highlight-next-line */\n    and tb_2_.MAPPING_TYPE = ? /* ORDINARY */\nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_ \n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"2-\u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054",children:"2. \u53cc\u8fb9\u5b9e\u4f53\u7c7b\u578b\u4e0d\u540c\u7684\u591a\u4e2a\u5173\u8054"}),"\n",(0,a.jsx)(e.p,{children:"\u6709\u4e00\u79cd\u5e38\u89c1\u7684\u6848\u4f8b\uff0c\u9879\u76ee\u4e2d\u6709\u5f88\u591a\u79cd\u4e0d\u540c\u7684\u6570\u636e\uff0c\u6bcf\u4e00\u79cd\u6570\u636e\u90fd\u53ef\u4ee5\u6807\u8bb0\u591a\u4e2aTag\u3002"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Tag"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"@Entity\npublic interface Tag {\n\n    @Id\n    long id();\n\n    String name();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:"@Entity\ninterface Tag {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"BookStore"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE",\n        )\n    )\n    List<Tag> tags();\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Book"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK",\n        )\n    )\n    List<Tag> tags();\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"Author"})}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR",\n        )\n    )\n    List<Tag> tags();\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5bf9\u4e8e\u4e2d\u95f4\u8868",(0,a.jsx)(e.code,{children:"SOURCE_TAG_MAPPING"}),"\u800c\u8a00\uff0c\u867d\u7136\u5176\u5916\u952e",(0,a.jsx)(e.code,{children:"TAG_ID"}),"\u6307\u5411TAG\u8868\uff0c\u4f46\u662f\u53e6\u5916\u4e00\u4e2a\u5916\u952e",(0,a.jsx)(e.code,{children:"SOURCE_ID"}),"\u5374\u6ca1\u6709\u56fa\u5b9a\u7684\u76ee\u6807\uff0c",(0,a.jsx)(e.code,{children:"BOOK_STORE"}),"\u3001",(0,a.jsx)(e.code,{children:"BOOK"}),"\u548c",(0,a.jsx)(e.code,{children:"AUTHOR"}),"\u90fd\u6709\u53ef\u80fd\u662f\u5176\u76ee\u6807\u8868\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u56e0\u6b64\uff0c\u6211\u4eec\u65e0\u6cd5\u4e3a",(0,a.jsx)(e.code,{children:"SOURCE_ID"}),"\u6dfb\u52a0\u5916\u952e\u7ea6\u675f\u3002"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"create table SOURCE_TAG_MAPPING(\n    SOURCE_ID bigint not null,\n    TAG_ID bigint not null,\n    SOURCE_TYPE varchar(10) not null\n);\n\n// \u4e2d\u95f4\u8868\u4e3b\u952e\u662f\u5426\u5305\u542b\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u9700\u8981\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002\n// \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e0d\u80fd\u7c7b\u578b\u7684`SOURCE_ID`\u53ef\u80fd\u76f8\u7b49\uff0c\n// \u6240\u4ee5\uff0c\u4e3b\u952e\u7ea6\u675f\u9700\u8981\u5305\u542b`SOURCE_TYPE`\nalter table SOURCE_TAG_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SOURCE_ID, TAG_ID, SOURCE_TYPE);\n\n// highlight-next-line\n// `SOURCE_ID`\u53ef\u80fd\u5f15\u7528`BOOK_STORE`\u3001`BOOK`\u548c`AUTHOR`\u8868\uff0c\n// highlight-next-line\n// \u7531\u4e8e\u6ca1\u6709\u56fa\u5b9a\u7684\u884c\u4e3a\uff0c\u6545\u800c\u65e0\u6cd5\u4e3a\u5efa\u7acb\u5916\u952e\u7ea6\u675f\n\nalter table SOURCE_TAG_MAPPING\n    add constraint fk_SOURCE_TAG_MAPPING__TAG\n        primary key(TAG_ID)\n            references TAG(ID);\n\nalter table SOURCE_TAG_MAPPING\n    add constraint ck_SOURCE_TAG_MAPPING__SOURCE_TYPE\n        check(SOURCE_TYPE in ('BOOK_STORE', 'BOOK', 'AUTHOR'));\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"SOURCE_ID"}),"\u65e0\u6cd5\u5efa\u7acb\u5916\u952e\u7ea6\u675f\uff0c\u6240\u4ee5\uff0c\u8fd9\u662f\u4e00\u4e2a",(0,a.jsx)(e.a,{href:"../base/foreignkey",children:"\u4f2a\u5916\u952e"}),"\uff0c\u6240\u4ee5\uff0c\u5373\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@JoinTable(\n    joinColumns = @joinColumn(\n        name = "SOURCE_ID",\n        // highlight-next-line\n        foreignKeyType = ForeignKeyType.FAKE\n    ),\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n)\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u8be5\u8868\u6570\u636e\u770b\u8d77\u6765\u5982\u590f"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"SOURCE_ID"}),(0,a.jsx)(e.th,{children:"TARGET_ID"}),(0,a.jsx)(e.th,{children:"SOURCE_TYPE"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"9"}),(0,a.jsx)(e.td,{children:"2"}),(0,a.jsx)(e.td,{children:"BOOK_STORE"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"9"}),(0,a.jsx)(e.td,{children:"4"}),(0,a.jsx)(e.td,{children:"BOOK_STORE"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"86"}),(0,a.jsx)(e.td,{children:"3"}),(0,a.jsx)(e.td,{children:"BOOK"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"86"}),(0,a.jsx)(e.td,{children:"4"}),(0,a.jsx)(e.td,{children:"BOOK"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"781"}),(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"AUTHOR"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"781"}),(0,a.jsx)(e.td,{children:"3"}),(0,a.jsx)(e.td,{children:"AUTHOR"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a",children:"\u6df7\u5408\u548c\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a"}),"\n",(0,a.jsx)(e.p,{children:"\u591a\u5bf9\u4e00\u548c\u591a\u5bf9\u591a\u90fd\u53ef\u4ee5\u7ed9\u4e88\u4e2d\u95f4\u8868\u6620\u5c04\uff0c\u6240\u4ee5\uff0c\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u6280\u5de7\u628a\u4e8c\u8005\u7684\u4e2d\u95f4\u8868\u5408\u5e76\u6210\u4e00\u5f20\u8868\u3002\u4f46\u662f\uff0c\u8bf7\u6ce8\u610f"}),"\n",(0,a.jsxs)(e.admonition,{type:"caution",children:[(0,a.jsx)(e.p,{children:"\u5f3a\u70c8\u5efa\u8bae\u4ec5\u5728\u6570\u636e\u5e93\u652f\u6301\u6761\u4ef6\u7d22\u5f15\u65f6\uff0c\u624d\u4f7f\u7528\u6b64\u7528\u6cd5\u3002"}),(0,a.jsx)(e.p,{children:"\u5373\uff0c\u4e0d\u8981\u5728\u4ee5MySQL\u4e3a\u4ee3\u8868\u7684\u4e0d\u652f\u6301\u6761\u4ef6\u7d22\u5f15\u7684\u6570\u636e\u5e93\u4e2d\u4f7f\u7528\u6b64\u7528\u6cd5\u3002"})]}),"\n",(0,a.jsx)(e.h3,{id:"\u5b9a\u4e49\u5173\u8054",children:"\u5b9a\u4e49\u5173\u8054"}),"\n",(0,a.jsxs)(t.A,{groupId:"language",children:[(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        readonly = true\n    )\n    List<Author> authors();\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        )\n    )\n    Author primaryAuthor();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "SECONDARY"\n        )\n    )\n    List<Author> secondaryAuthors();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})}),(0,a.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        readonly = true\n    )\n    val authors: List<Author>\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        )\n    )\n    val primaryAuthor: Author?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "SECONDARY"\n        )\n    )\n    val secondaryAuthors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u5f88\u660e\u663e"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"authors"})," ",(0,a.jsx)(e.em,{children:"(many-to-many)"})," = ",(0,a.jsx)(e.code,{children:"primaryAuthor"})," ",(0,a.jsx)(e.em,{children:"(many-to-one)"})," + ",(0,a.jsx)(e.code,{children:"secondaryAuthors"})," ",(0,a.jsx)(e.em,{children:"(many-to-many)"})]}),"\n",(0,a.jsx)(e.h3,{id:"\u6761\u4ef6\u7d22\u5f15",children:"\u6761\u4ef6\u7d22\u5f15"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null,\n    MAPPING_TYPE varchar(9) not null\n);\n\n// \u4e2d\u95f4\u8868\u4e3b\u952e\u662f\u5426\u5305\u542b\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u9700\u8981\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\u3002\n// \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e00\u4e2a`Author`\u548c\u4e00\u4e2a`Book`\u4e4b\u95f4\u7684\u5173\u8054\n// \u4e0d\u80fd\u65e2\u662f\"PRIMARY\"\u53c8\u662f\"SECONDARY\"\uff0c\n// \u6240\u4ee5\uff0c\u4e3b\u952e\u7ea6\u675f\u4e0d\u5305\u542b`MAPPING_TYPE`\nalter table BOOK_AUTHOR_MAPPING\n    add constraint pk_BOOK_AUTHOR_MAPPING\n        primary key(BOOK_ID, AUTHOR_ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint ck_BOOK_AUTHOR_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('PRIMARY', 'SECONDARY'));\n\n// highlight-start\n// \u4e0d\u540c\u6570\u636e\u5e93\u7684\u6761\u4ef6\u7d22\u5f15\u7684\u8bed\u6cd5\u53ef\u80fd\u6709\u5c11\u91cf\u5dee\u5f02\uff0c\n// \u8fd9\u91cc\u4ee5Postgres\u4e3a\u4f8b\ncreate unique index BOOK_AUTHOR_MAPPING__PRIMARY_INDEX \n    on BOOK_AUTHOR_MAPPING(AUTHOR_ID)\n    when MAPPING_TYPE = 'PRIMARY';\n// highlight-end\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5176\u4e2d",(0,a.jsx)(e.code,{children:"when"}),"\u8bed\u53e5\u975e\u5e38\u91cd\u8981\uff0c\u8868\u793a\u8be5\u7d22\u5f15\u65f6\u6761\u4ef6\u7d22\u5f15\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u4e0d\u540c\u6570\u636e\u5e93\u7684\u6761\u4ef6\u7d22\u5f15\u7684\u8bed\u6cd5\u53ef\u80fd\u6709\u5c11\u91cf\u5dee\u5f02\uff0c\u8fd9\u91cc\u4ee5Postgres\u4e3a\u4f8b\u3002\u66f4\u591a\u8be6\u60c5\u8bf7\u53c2\u8003",(0,a.jsx)(e.a,{href:"https://www.postgresql.org/docs/current/indexes-partial.html",children:"https://www.postgresql.org/docs/current/indexes-partial.html"})]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u5f53",(0,a.jsx)(e.code,{children:"MAPPING_TYPE"}),'\u4e3a"PRIMARY"\u65f6\uff0c\u4e3a',(0,a.jsx)(e.code,{children:"AUTHOR_ID"}),"\u5916\u952e\u6dfb\u52a0\u4e00\u4e2a\u552f\u4e00\u7d22\u5f15\uff0c\u4fdd\u8bc1\u6bcf\u4e2a",(0,a.jsx)(e.code,{children:"Book"}),"\u6700\u591a\u53ea\u80fd\u6709\u4e00\u4e2aprimary ",(0,a.jsx)(e.code,{children:"Author"}),"\u3002\n\u5373\uff0c\u4fdd\u8bc1",(0,a.jsx)(e.code,{children:"Book.primaryAuthor"}),"\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u5426\u5219\uff0c\u6ca1\u6709\u552f\u4e00\u6027\u7ea6\u675f\uff0c\u6bcf\u4e2a",(0,a.jsx)(e.code,{children:"Book"}),"\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684secondary ",(0,a.jsx)(e.code,{children:"Author"}),"\u3002\n\u5373\uff0c",(0,a.jsx)(e.code,{children:"Book.secondaryAuthors"}),"\u4ecd\u7136\u4e3a\u591a\u5bf9\u591a\u5173\u8054\u3002"]}),"\n"]}),"\n"]})]})}function _(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},19365:(n,e,l)=>{l.d(e,{A:()=>r});l(96540);var a=l(18215);const i={tabItem:"tabItem_Ymn6"};var t=l(74848);function r(n){let{children:e,hidden:l,className:r}=n;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:l,children:e})}},11470:(n,e,l)=>{l.d(e,{A:()=>P});var a=l(96540),i=l(18215),t=l(23104),r=l(56347),s=l(205),o=l(57485),c=l(31682),d=l(89466);function h(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:l}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return h(n).map((n=>{let{props:{value:e,label:l,attributes:a,default:i}}=n;return{value:e,label:l,attributes:a,default:i}}))}(l);return function(n){const e=(0,c.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,l])}function _(n){let{value:e,tabValues:l}=n;return l.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:l}=n;const i=(0,r.W6)(),t=function(n){let{queryString:e=!1,groupId:l}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:e,groupId:l});return[(0,o.aZ)(t),(0,a.useCallback)((n=>{if(!t)return;const e=new URLSearchParams(i.location.search);e.set(t,n),i.replace({...i.location,search:e.toString()})}),[t,i])]}function j(n){const{defaultValue:e,queryString:l=!1,groupId:i}=n,t=u(n),[r,o]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:l}=n;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!_({value:e,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${l.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=l.find((n=>n.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:t}))),[c,h]=m({queryString:l,groupId:i}),[j,x]=function(n){let{groupId:e}=n;const l=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,t]=(0,d.Dv)(l);return[i,(0,a.useCallback)((n=>{l&&t.set(n)}),[l,t])]}({groupId:i}),T=(()=>{const n=c??j;return _({value:n,tabValues:t})?n:null})();(0,s.A)((()=>{T&&o(T)}),[T]);return{selectedValue:r,selectValue:(0,a.useCallback)((n=>{if(!_({value:n,tabValues:t}))throw new Error(`Can't select invalid tab value=${n}`);o(n),h(n),x(n)}),[h,x,t]),tabValues:t}}var x=l(92303);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var O=l(74848);function p(n){let{className:e,block:l,selectedValue:a,selectValue:r,tabValues:s}=n;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=n=>{const e=n.currentTarget,l=o.indexOf(e),i=s[l].value;i!==a&&(c(e),r(i))},h=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const l=o.indexOf(n.currentTarget)+1;e=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(n.currentTarget)-1;e=o[l]??o[o.length-1];break}}e?.focus()};return(0,O.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":l},e),children:s.map((n=>{let{value:e,label:l,attributes:t}=n;return(0,O.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>o.push(n),onKeyDown:h,onClick:d,...t,className:(0,i.A)("tabs__item",T.tabItem,t?.className,{"tabs__item--active":a===e}),children:l??e},e)}))})}function b(n){let{lazy:e,children:l,selectedValue:i}=n;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(e){const n=t.find((n=>n.props.value===i));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,O.jsx)("div",{className:"margin-top--md",children:t.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function g(n){const e=j(n);return(0,O.jsxs)("div",{className:(0,i.A)("tabs-container",T.tabList),children:[(0,O.jsx)(p,{...n,...e}),(0,O.jsx)(b,{...n,...e})]})}function P(n){const e=(0,x.A)();return(0,O.jsx)(g,{...n,children:h(n.children)},String(e))}},28453:(n,e,l)=>{l.d(e,{R:()=>r,x:()=>s});var a=l(96540);const i={},t=a.createContext(i);function r(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);