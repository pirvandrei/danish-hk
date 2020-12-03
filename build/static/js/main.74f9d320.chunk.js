(this.webpackJsonplearningdanish=this.webpackJsonplearningdanish||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),i=n(16),s=n.n(i),o=n(4),u=n.n(o),l=n(5),d=n(3),j=function(){return Object(r.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(r.jsx)("br",{}),Object(r.jsx)("em",{children:"Learning danish with one word a day."})]})},b=function(e){var t=e.message,n=e.type;return null===t?null:Object(r.jsx)("div",{className:n,children:t})},O=a.a.forwardRef((function(e,t){var n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],s=a[1],o={display:i?"none":""},u={display:i?"":"none"},l=function(){s(!i)};return Object(c.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:o,children:Object(r.jsx)("button",{id:e.buttonLabel,onClick:l,children:e.buttonLabel})}),Object(r.jsxs)("div",{style:u,className:"togglableContent",children:[e.children,Object(r.jsx)("button",{onClick:l,children:"cancel"})]})]})}));O.displayName="Togglable";var f=O,p=function(e){var t=e.handleSubmit,n=Object(c.useState)(""),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),u=Object(d.a)(o,2),l=u[0],j=u[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Login"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({username:i,password:l}),s(""),j("")},children:[Object(r.jsxs)("div",{children:["username",Object(r.jsx)("input",{id:"username",value:i,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{children:["password",Object(r.jsx)("input",{id:"password",type:"password",value:l,onChange:function(e){j(e.target.value)}})]}),Object(r.jsx)("button",{id:"login-button",type:"submit",children:"login"})]})]})},h=function(e){var t=e.createWord,n=Object(c.useState)(""),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),u=Object(d.a)(o,2),l=u[0],j=u[1];return Object(r.jsxs)("div",{className:"formDiv",children:[Object(r.jsx)("h2",{children:"Create a new word"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({lex:i,definitionDk:l,createdate:(new Date).toISOString(),updatedate:(new Date).toISOString()}),s(""),j("")},children:[Object(r.jsx)("input",{id:"newWordInput",value:i,onChange:function(e){s(e.target.value)}}),Object(r.jsx)("input",{id:"newWordDefinitionDk",value:l,onChange:function(e){j(e.target.value)}}),Object(r.jsx)("button",{id:"newWordButton",type:"submit",children:"save"})]})]})},g=n(6),x=n.n(g),v={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m="/api/words",w=null,S={getAll:function(){return x.a.get(m).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:w}},e.next=3,x.a.post(m,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return x.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){w="bearer ".concat(e)}};var y=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),o=s[0],O=s[1],g=Object(c.useState)(""),x=Object(d.a)(g,2),m=x[0],w=x[1],y=Object(c.useState)(null),k=Object(d.a)(y,2),N=k[0],C=k[1],D=Object(c.useRef)();Object(c.useEffect)((function(){S.getAll().then((function(e){a(e)}))}),[]),Object(c.useEffect)((function(){var e=window.sessionStorage.getItem("loggedNoteappUser");if(e){console.log("loggedUserJSON",e);var t=JSON.parse(e);C(t),S.setToken(t.token)}}),[]);var I=function(e){D.current.toggleVisibility(),S.create(e).then((function(e){a(n.concat(e))}))},L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,e.prev=2,e.next=5,v.login({username:n,password:r});case 5:c=e.sent,window.sessionStorage.setItem("loggedNoteappUser",JSON.stringify(c)),S.setToken(c.token),C(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),W("wrong credentials","error");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){return Object(r.jsx)(f,{buttonLabel:"login",children:Object(r.jsx)(p,{handleSubmit:L})})},W=function(e,t){O(e),w(t),setTimeout((function(){O(""),w("")}),5e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Wehee"}),Object(r.jsx)(b,{message:o,type:m}),null===N?T():Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[N.name," logged in",Object(r.jsx)("button",{onClick:function(){return window.sessionStorage.removeItem("loggedNoteappUser"),W("Bye, ".concat(N.name),"success"),S.setToken(null),C(null),void T()},children:" logout "})]}),Object(r.jsx)(f,{buttonLabel:"new word",ref:D,children:Object(r.jsx)(h,{createWord:I})})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"rydde op - at ordne forskellige ting p\xe5 deres rette plads"}),Object(r.jsx)("li",{children:"sammenligne - to compare"}),Object(r.jsx)("li",{children:"forskellie - lige some anderledes men forskelligt"})]}),Object(r.jsx)("ul",{children:n.map((function(e,t){return Object(r.jsx)("li",{children:e.lex},t)}))}),Object(r.jsx)(j,{})]})};n(40);s.a.render(Object(r.jsx)(y,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.74f9d320.chunk.js.map