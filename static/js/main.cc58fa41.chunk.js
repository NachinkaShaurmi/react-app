(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),o=n(18),s=n.n(o),a=(n(26),n(7)),l=n(2),u=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper blue darken-2 px1",children:[Object(c.jsx)(a.b,{to:"/react-app/",className:"brand-logo",children:"ToDo List"}),Object(c.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/react-app/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/react-app/about",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})})},j=function(){var e=Object(l.f)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cum, eius delectus dolorum nesciunt eaque accusantium error quia exercitationem atque?"}),Object(c.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"})]})},d=n(20),b=n(12),h=function(e){var t=Object(i.useState)(""),n=Object(b.a)(t,2),r=n[0],o=n[1];return Object(c.jsxs)("div",{className:"input-field mt2",children:[Object(c.jsx)("input",{onChange:function(e){o(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(e.onAdd(r),o(""))},value:r,type:"text",id:"title",placeholder:"\u041f\u043e\u043a\u043e\u0440\u043c\u0438\u0442\u044c \u043a\u043e\u0442\u0430"}),Object(c.jsx)("label",{htmlFor:"title",className:"active",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"})]})},O=function(e){var t=e.todos,n=e.onToggle,i=e.onRemove;return 0===t.length?Object(c.jsx)("h4",{className:"center",children:"\u041f\u043e\u043a\u0430 \u0434\u0435\u043b \u043d\u0435\u0442"}):Object(c.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(c.jsx)("li",{className:t.join(" "),children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return n(e.id)}}),Object(c.jsx)("span",{children:e.title}),Object(c.jsx)("i",{className:"material-icons red-text",onClick:function(){return i(e.id)},children:"delete"})]})},e.id)}))})},p=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1];Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");r(e)}),[]),Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};r((function(e){return[t].concat(Object(d.a)(e))}))}}),Object(c.jsx)(O,{todos:n,onToggle:function(e){r((function(t){return t.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}))},onRemove:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};var m=function(){return Object(c.jsxs)(a.a,{children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{component:p,path:"/",exact:!0}),Object(c.jsx)(l.a,{component:j,path:"/about"})]})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.cc58fa41.chunk.js.map