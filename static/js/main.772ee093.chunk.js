(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n,a,r=c(8),s=c.n(r),l=c(7),o=c(16),i=c(6),d=c(14),u=c(15),j=function(e){return{type:"currentTodo/SET",payload:e}},h=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},f=c(5);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={})),function(e){e.ALL="All",e.ACTIVE="ACTIVE",e.COMPLETED="COMPLETED",e.INPUT="INPUT"}(a||(a={}));var m=function(e){return{type:a.ALL,payload:e}},O=function(e){return{type:a.ACTIVE,payload:e}},p=function(e){return{type:a.COMPLETED,payload:e}},x=function(e){return{type:a.INPUT,payload:e}},v={query:"",status:n.All},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.ALL:return{query:t.payload,status:n.All};case a.ACTIVE:return{query:t.payload,status:n.Active};case a.COMPLETED:return{query:t.payload,status:n.Completed};case a.INPUT:return Object(f.a)(Object(f.a)({},e),{},{query:t.payload});default:return e}},N=function(e){return{type:"todos/GET",payload:e}},g=[],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"todos/GET"===t.type?t.payload:e},E=Object(i.combineReducers)({currentTodo:b,filter:y,todos:T}),w=Object(i.createStore)(E,Object(d.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),C=c(9),A=c(3),k=c(4),L=c.n(k),I=c(0),P=(c(25),c(26),l.b),S=l.c,q=c(1),M=function(){var e=P(),t=S((function(e){return e.currentTodo})),c=S((function(e){return e.filter})),a=S((function(e){return e.todos.filter((function(e){return e.title.toLocaleLowerCase().includes(c.query.toLocaleLowerCase())}))})),r=function(e){return(null===t||void 0===t?void 0:t.id)===e},s=Object(I.useMemo)((function(){switch(c.status){case n.All:return a.filter((function(e){return e}));case n.Active:return a.filter((function(e){return!e.completed}));case n.Completed:return a.filter((function(e){return e.completed}));default:return a}}),[a,c.status]);return Object(q.jsxs)(q.Fragment,{children:[c.query&&!s.length&&Object(q.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(q.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[!!s.length&&Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"#"}),Object(q.jsx)("th",{children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("th",{children:"Title"}),Object(q.jsx)("th",{children:" "})]})}),Object(q.jsx)("tbody",{children:s.map((function(t){var c=t.title,n=t.completed,a=t.id;return Object(q.jsxs)("tr",{"data-cy":"todo",children:[Object(q.jsx)("td",{className:"is-vcentered",children:a}),Object(q.jsx)("td",{className:"is-vcentered",children:n&&Object(q.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("td",{className:"is-vcentered is-expanded",children:Object(q.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:c})}),Object(q.jsx)("td",{className:"has-text-right is-vcentered",children:Object(q.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(j(t))},children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"far ".concat(r(a)?"fa-eye-slash":"fa-eye")})})})})]},a)}))})]})]})},D=function(){var e=P(),t=S((function(e){return e.filter})).query,c=function(t){return e(x(t))};return Object(q.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(q.jsx)("p",{className:"control",children:Object(q.jsx)("span",{className:"select",children:Object(q.jsxs)("select",{"data-cy":"statusSelect",onChange:function(c){return function(c){switch(c){case n.Active:return e(O(t));case n.Completed:return e(p(t));default:return e(m(t))}}(c.target.value)},children:[Object(q.jsx)("option",{value:"all",children:"All"}),Object(q.jsx)("option",{value:"active",children:"Active"}),Object(q.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(q.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(q.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(q.jsx)("span",{className:"icon is-left",children:Object(q.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(q.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(q.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"delete",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},V=(c(28),function(){return Object(q.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(q.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var U=function(){var e=P(),t=S((function(e){return e.currentTodo})),c=Object(I.useState)({email:"",name:""}),n=Object(A.a)(c,2),a=n[0],r=n[1],s=Object(I.useState)(!0),l=Object(A.a)(s,2),o=l[0],i=l[1],d=a.email,u=a.name;return Object(I.useEffect)((function(){var e=function(){var e=Object(C.a)(L.a.mark((function e(){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,i(!0),e.next=6,n=t.userId,_("/users/".concat(n));case 6:c=e.sent,r(c),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),new Error("Error");case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}var n}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(q.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(q.jsx)("div",{className:"modal-background"}),o?Object(q.jsx)(V,{}):t&&Object(q.jsxs)("div",{className:"modal-card",children:[Object(q.jsxs)("header",{className:"modal-card-head",children:[Object(q.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(q.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"delete-button",onClick:function(){return e(h())}})]}),Object(q.jsxs)("div",{className:"modal-card-body",children:[Object(q.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(q.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(q.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(q.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(q.jsx)("a",{href:"mailto:".concat(d),children:"".concat(u)})]})]})]})]})},B=function(){var e=P(),t=Object(I.useState)(!1),c=Object(A.a)(t,2),n=c[0],a=c[1],r=S((function(e){return e.currentTodo}));return Object(I.useEffect)((function(){var t=function(){var t=Object(C.a)(L.a.mark((function t(){var c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,_("/todos");case 4:c=t.sent,e(N(c)),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Error");case 11:return t.prev=11,a(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsx)("div",{className:"box",children:n?Object(q.jsx)(V,{}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h1",{className:"title",children:"Todos:"}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(D,{})}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(M,{})})]})})})}),r&&Object(q.jsx)(U,{})]})},F=function(){return Object(q.jsx)(l.a,{store:w,children:Object(q.jsx)(o.a,{children:Object(q.jsx)(B,{})})})};s.a.render(Object(q.jsx)(F,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.772ee093.chunk.js.map