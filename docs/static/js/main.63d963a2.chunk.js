(this["webpackJsonppapa-noel-list"]=this["webpackJsonppapa-noel-list"]||[]).push([[0],{36:function(e,a,t){},48:function(e,a,t){e.exports=t(60)},53:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),s=t.n(i),l=(t(53),t(26)),o=t(15),c=t(37),h=t(38),u=t(11),m=t(41),d=t(90),p=t(92),w=t(94),v=t(95),g=t(100),f=t(96),b=t(40),E=t.n(b),k=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:360,marginLeft:390,backgroundColor:e.palette.background.paper}}}));function x(e){var a=e.wishes,t=k();return r.a.createElement(p.a,{className:t.root,wishes:a},a.map((function(e){var a="checkbox-list-secondary-label-".concat(e);return r.a.createElement(w.a,{key:e,button:!0},r.a.createElement(g.a,{id:a,primary:e}),r.a.createElement(v.a,null,r.a.createElement(f.a,{edge:"end","aria-label":"delete"},r.a.createElement(E.a,{color:"secondary",className:t.margin}))))})))}t(36);var y=t(98),C=t(97),j=Object(d.a)((function(e){return{margin:{margin:e.spacing(1),marginTop:25,color:"blue"}}}));var O=function(e){var a=e.handleChange,t=e.handleText,n=e.wish,i=j();return r.a.createElement("form",{className:"form",noValidate:!0,autoComplete:"off"},r.a.createElement(y.a,{id:"outlined-name",label:"Introduce tu deseo",className:"text",wish:n,value:n,onChange:t,type:"text",margin:"normal",variant:"outlined"}),r.a.createElement(C.a,{value:"enviar",onClick:a,variant:"outlined",size:"medium",color:"primary",className:i.margin},"A\xf1adir"))},N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={wish:"",wishes:[]},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleText=t.handleText.bind(Object(u.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleText",value:function(e){var a=e.currentTarget.value;this.setState({wish:a})}},{key:"handleChange",value:function(e){if(e.preventDefault(),""===this.state.wish)return"";this.state.wishes.push(this.state.wish),this.setState({whises:this.state.wishes,wish:""})}},{key:"render",value:function(){var e=this.state,a=e.wish,t=e.wishes;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null," Lista de Papa Noel")),r.a.createElement("main",null,r.a.createElement(O,{handleText:this.handleText,handleChange:this.handleChange,wishes:t,wish:a}),r.a.createElement(x,{wishes:t})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.63d963a2.chunk.js.map