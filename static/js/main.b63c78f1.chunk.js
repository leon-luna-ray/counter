(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(3),o=n.n(s),r=n(4),a=(n(9),n(0)),u=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("count");e&&s(e)}),[]);return Object(c.useEffect)((function(){localStorage.setItem("count",parseInt(n))}),[n]),Object(a.jsxs)("main",{className:"ui container centered grid center-screen",children:[Object(a.jsx)("h1",{className:"row",children:"Counter"}),Object(a.jsx)("h1",{className:"count row",children:n}),Object(a.jsxs)("div",{className:"buttons row",children:[Object(a.jsx)("button",{className:"ui button",onClick:function(){var e=parseInt(n)-1;s(e)},children:"-"}),Object(a.jsx)("button",{className:"ui button",onClick:function(){var e=parseInt(n)+1;s(e)},children:"+"})]}),Object(a.jsx)("button",{className:"ui button red",onClick:function(){window.confirm("are you sure")&&s(0)},children:"Reset"})]})};o.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.b63c78f1.chunk.js.map