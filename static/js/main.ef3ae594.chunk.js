(this["webpackJsonpamiibo-dex"]=this["webpackJsonpamiibo-dex"]||[]).push([[0],{53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(13),r=a.n(c),o=(a(53),a(12)),s=a(103),l=a(104),b=a(23),m=a(108),j=a(79),u=a(98),d=a(44),h=a(107),p=a(37),g=a.n(p),O=a(100),x=a(101),f=a(102),y=a(5),C=Object(u.a)((function(){return{root:{width:300,height:600},amiiboCardImageContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"350px",textAlign:"center",marginBottom:"1rem"}}}));var v=function(e){var t=e.amiibo,a=C(),n={"Amiibo Series":t.amiiboSeries,"Game Series":t.gameSeries,Head:t.head,Tail:t.tail,Type:t.type};return Object(y.jsxs)(O.a,{className:a.root,children:[Object(y.jsx)(x.a,{title:t.name,subheader:null!=t.release.eu?"EU Release : "+t.release.eu:"EU Release : Not Available "}),Object(y.jsx)("div",{className:a.amiiboCardImageContainer,children:Object(y.jsx)("img",{alt:t.name,src:t.image,style:{width:"200px"}})}),Object(y.jsx)(f.a,{children:Object.entries(n).map((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(y.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:[a,": ",n]},a)}))})]})},S=a(105),w=Object(u.a)((function(){return{appTitle:{padding:"2rem",fontSize:"3rem",textAlign:"center"},pageContent:{padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},amiiboGrid:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",rowGap:"2rem",columnGap:"2rem"},pagination:{marginTop:"2rem"}}}));var I=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),r=Object(o.a)(c,2),u=r[0],p=r[1],O=Object(n.useState)(1),x=Object(o.a)(O,2),f=x[0],C=x[1],I=Object(n.useState)(1),N=Object(o.a)(I,2),T=N[0],A=N[1],B=w(),F=Object(d.a)({palette:{type:a?"dark":"light"}});return Object(n.useEffect)((function(){g.a.get("https://amiiboapi.com/api/amiibo/").then((function(e){p(e.data.amiibo),C(e.data.amiibo.length)})).catch((function(e){return console.log(e)}))}),[]),Object(y.jsxs)(s.a,{theme:F,children:[Object(y.jsx)(l.a,{}),Object(y.jsxs)(b.a,{variant:"h1",className:B.appTitle,children:["AmiiboDex",Object(y.jsx)(m.a,{checked:a,onChange:function(){return i(!a)}})]}),Object(y.jsxs)(j.a,{className:B.pageContent,children:[Object(y.jsx)("div",{className:B.amiiboGrid,children:u?u.slice(1+20*(T-1),21+20*(T-1)).map((function(e){return Object(y.jsx)(v,{amiibo:e},e.head+e.tail)})):Object(y.jsx)(S.a,{color:"secondary"})}),Object(y.jsx)(h.a,{className:B.pagination,color:"primary",count:Math.floor(f/20),onChange:function(e,t){return A(t)},showFirstButton:!0,showLastButton:!0})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(I,{})}),document.getElementById("root")),N()}},[[77,1,2]]]);
//# sourceMappingURL=main.ef3ae594.chunk.js.map