(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){},235:function(e,t,a){e.exports=a(435)},254:function(e,t,a){},256:function(e,t,a){},377:function(e,t,a){},390:function(e,t,a){},423:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){},430:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(25),c=a.n(r),i=a(37),m=a(32),u=a(61),s=a(10),d=a(11),o=new(function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,[{key:"signIn",value:function(e){return new Promise(function(t,a){setTimeout(function(){"user"===e.login||"admin"===e.login?t({status:"success",user:{name:"John Smith",role:e.login}}):t({status:"error",error:{description:"\u041b\u043e\u0433\u0438\u043d \u0430\u0434\u043c\u0438\u043d\u0430 - admin, \u044e\u0437\u0435\u0440\u0430 - user"}})},2e3)})}}]),e}()),E="LOGIN_REQUEST",h="LOGIN_SUCCESS",f="LOGIN_FAIL";var p={userData:JSON.parse(localStorage.getItem("user"))||null,fetching:!1};var b=Object(m.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(u.a)({},e,{fetching:!0});case h:return Object(u.a)({},e,{userData:t.payload,fetching:!1});case f:return Object(u.a)({},e,{fetching:!1});default:return e}}}),v=a(142),y=a.n(v),g=a(143),N=Object(m.d)(b,Object(m.a)(g.a,y.a)),O=a(14),j=a(13),C=a(15),D=a(438),w=a(440),k=a(441),x=a(439),A=a(144),S=a.n(A),V=(a(247),a(26)),B=(a(254),function(e){var t=e.type||"",a=e.name||"",l=e.label||"",r=e.defaultValue||"";return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,l),n.a.createElement("input",{type:t,name:a,defaultValue:r,placeholder:l}),n.a.createElement("div",{className:""}))}),F=a(9),L=(a(256),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(V.a)(Object(V.a)(a))),a}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.fetching;return n.a.createElement("div",{id:"auth"},n.a.createElement("div",{className:"auth-window"},n.a.createElement("div",{className:"title"},"Autorization to Capacity Planning Tool"),n.a.createElement("form",{onSubmit:this.handleSubmit,className:"body"},n.a.createElement(B,{type:"text",name:"login",label:"Login"}),n.a.createElement(B,{type:"password",name:"password",label:"Password"}),n.a.createElement(F.a,{type:"submit",className:e?"btn primary-btn fetching":"btn primary-btn"},e?n.a.createElement(F.b,{className:"loader",size:20}):null,"Login"))))}},{key:"handleSubmit",value:function(e){var t=new FormData(e.target),a={};e.preventDefault();var l=this.props.history.push.bind(null,"/"),n=!0,r=!1,c=void 0;try{for(var i,m=t.keys()[Symbol.iterator]();!(n=(i=m.next()).done);n=!0){var u=i.value;a[u]=t.get(u)}}catch(s){r=!0,c=s}finally{try{n||null==m.return||m.return()}finally{if(r)throw c}}this.props.handleLoginAction(a,l)}}]),t}(l.Component)),T=Object(i.b)(function(e){return{fetching:e.user.fetching}},function(e){return{handleLoginAction:function(t,a){return e(function(e,t){return function(a){a({type:E}),o.signIn(e),o.signIn(e).then(function(e){"success"===e.status?(a({type:h,payload:e.user}),localStorage.setItem("user",JSON.stringify(e.user)),t()):(console.error(e.error.description),a({type:f}))})}}(t,a))}}})(L),I=a(437),P=a(31),J=a.n(P),G=a(58),H=(a(377),function(e){function t(){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=window.location.pathname,t=this.props.user,a="/"===e?n.a.createElement(I.a,{className:"link",to:"/settings"},n.a.createElement(J.a,{className:"btn primary-btn"},n.a.createElement(G.a,{icon:"cogs"}),"Settings")):n.a.createElement(I.a,{className:"link",to:"/"},n.a.createElement(J.a,{className:"btn primary-btn"},n.a.createElement("i",{className:"fa fa-table","aria-hidden":"true"}),"Back to table"));return n.a.createElement("div",{id:"header"},n.a.createElement("div",{className:"left-part"},n.a.createElement("div",{className:"app-name"},"Capacity Planning Tool"),"admin"===t.role?a:null),n.a.createElement("div",{className:"right-part"},n.a.createElement("div",{className:"user"},n.a.createElement("div",{className:"name"},"John Smith"),n.a.createElement("div",{className:"role"},"Administrator")),n.a.createElement(J.a,{className:"logout"},n.a.createElement(G.a,{icon:"sign-out-alt"}))))}}]),t}(l.Component)),M=a(38),R=a.n(M),W=a(88),q=(a(383),a(149)),U=a.n(q),z=a(147),_=a.n(z),Q=(a(388),a(390),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={checked:a.props.checked||!1,indeterminate:!1},a}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.label||"";return n.a.createElement("label",{className:"checkbox-group"},n.a.createElement(_.a,{nativeControlId:"my-checkbox",checked:this.state.checked,indeterminate:this.state.indeterminate,onChange:function(t){return e.setState({checked:t.target.checked,indeterminate:t.target.indeterminate})}}),n.a.createElement("div",{className:"label-text"},t))}}]),t}(l.Component)),Y=a(148),X=a.n(Y);a(138);Object(W.b)("en-GB",U.a);var $=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={startDate:new Date,openDialog:!1,selected:[]},a.handleChange=a.handleChange.bind(Object(V.a)(Object(V.a)(a))),a.handleDialogOpen=a.handleDialogOpen.bind(Object(V.a)(Object(V.a)(a))),a.handleDialogClose=a.handleDialogClose.bind(Object(V.a)(Object(V.a)(a))),a}return Object(C.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({startDate:e})}},{key:"handleDialogOpen",value:function(){this.setState({openDialog:!0})}},{key:"handleDialogClose",value:function(){this.setState({openDialog:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"left-part"},n.a.createElement("div",{className:"updated"},"Updated Last:",n.a.createElement("b",null,"25/08/2018 by John Smith")),n.a.createElement("div",{className:"date-picker-wrap"},n.a.createElement(W.a,{locale:"en-GB",selected:this.state.startDate,onChange:this.handleChange,dateFormat:"dd/MM/YY",ref:function(t){e.component=t}}),n.a.createElement(F.a,{className:"calendar",onClick:function(){return e.component.setOpen(!0)}},n.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}))),n.a.createElement(X.a,{options:[{label:"ABC123",value:1},{label:"CBA321",value:2},{label:"TATA2323",value:3}],selected:this.state.selected,onSelectedChanged:function(t){console.log(t),e.setState({selected:t})}})),n.a.createElement("div",{className:"right-part"},n.a.createElement(F.a,{onClick:this.handleDialogOpen,className:"btn btn-default"},n.a.createElement("i",{className:"fa fa-table","aria-hidden":"true"}),"Table settings"),n.a.createElement(F.a,{className:"download"},n.a.createElement("i",{className:"fa fa-download","aria-hidden":"true"})),n.a.createElement(F.a,{className:"print"},n.a.createElement("i",{className:"fa fa-print","aria-hidden":"true"}))),n.a.createElement(F.c,{id:"table-settings-dialog",onClose:this.handleDialogClose,"aria-labelledby":"customized-dialog-title",open:this.state.openDialog},n.a.createElement(F.e,{className:"title-wrap"},n.a.createElement("div",{className:"title"},"Table settings"),n.a.createElement(F.f,{onClick:this.handleDialogClose,"aria-label":"Close"},n.a.createElement(R.a,null))),n.a.createElement(F.d,{className:"dialog-content"},n.a.createElement("div",{className:"text"},"Choose columns you want to hide"),n.a.createElement("div",{className:"cols"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"col-titile"},"General"),n.a.createElement("div",{className:"list"},n.a.createElement(Q,{label:"Cost Center",checked:!0}),n.a.createElement(Q,{label:"Job#",checked:!0}),n.a.createElement(Q,{label:"Description"}),n.a.createElement(Q,{label:"Date In",checked:!0}))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"col-titile"},"Planned"),n.a.createElement("div",{className:"list"},n.a.createElement(Q,{label:"Date Due"}),n.a.createElement(Q,{label:"Partial Due"}),n.a.createElement(Q,{label:"Days Available"}),n.a.createElement(Q,{label:"Hrs. Planned"}))),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"col-titile"},"Required"),n.a.createElement("div",{className:"list"},n.a.createElement(Q,{label:"Date Due"}),n.a.createElement(Q,{label:"Partial Due"})))))))}}]),t}(l.Component),K=a(150),Z=(a(423),function(e){function t(){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(K.Scrollbars,{id:"planning-table"},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Cost Center",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Job #",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Customer",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Description",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Date In",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Date Due",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Partial Due",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Days Available",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Hrs. Planed",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",null,"Required Days",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{style:{borderRight:"3px solid rgb(208, 208, 208)"}},"Allocated Hours",n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#FCC99A",borderLeft:"3px solid rgb(208, 208, 208)"}},n.a.createElement("div",null,"Mon"),n.a.createElement("div",null,"09 Oct"),n.a.createElement("div",null,"255,21"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Tues"),n.a.createElement("div",null,"10 Oct"),n.a.createElement("div",null,"30,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Wed"),n.a.createElement("div",null,"11 Oct"),n.a.createElement("div",null,"32,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Thu"),n.a.createElement("div",null,"12 Oct"),n.a.createElement("div",null,"30,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#EB9DA6"}},n.a.createElement("div",null,"Fri"),n.a.createElement("div",null,"13 Oct"),n.a.createElement("div",null,"520,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day"},n.a.createElement("div",null,"Sun"),n.a.createElement("div",null,"14 Oct"),n.a.createElement("div",null),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day"},n.a.createElement("div",null,"Sat"),n.a.createElement("div",null,"15 Oct"),n.a.createElement("div",null),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Mon"),n.a.createElement("div",null,"16 Oct"),n.a.createElement("div",null,"255,21"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Tues"),n.a.createElement("div",null,"17 Oct"),n.a.createElement("div",null,"30,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Wed"),n.a.createElement("div",null,"18 Oct"),n.a.createElement("div",null,"32,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Thu"),n.a.createElement("div",null,"19 Oct"),n.a.createElement("div",null,"30,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day",style:{background:"#A5DBA8"}},n.a.createElement("div",null,"Fri"),n.a.createElement("div",null,"20 Oct"),n.a.createElement("div",null,"520,00"),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day"},n.a.createElement("div",null,"Sun"),n.a.createElement("div",null,"21 Oct"),n.a.createElement("div",null),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day"},n.a.createElement("div",null,"Sat"),n.a.createElement("div",null,"22 Oct"),n.a.createElement("div",null),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day"},n.a.createElement("div",null,"W/E"),n.a.createElement("div",null,"23 Oct"),n.a.createElement("div",null),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"})),n.a.createElement("th",{className:"day"},n.a.createElement("div",null,"W/E"),n.a.createElement("div",null,"24 Oct"),n.a.createElement("div",null),n.a.createElement("i",{className:"fa fa-angle-down","aria-hidden":"true"}))),[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,"ABC123"),n.a.createElement("td",null,"108003"),n.a.createElement("td",null,"MCHG LLC DBA CHANTAL GUILLON"),n.a.createElement("td",null,"BOX  1C + DH STAQ/0"),n.a.createElement("td",null,"10.08.18"),n.a.createElement("td",null,"10.08.18"),n.a.createElement("td",null,"10.08.18"),n.a.createElement("td",null,"1.0"),n.a.createElement("td",null,"17.02"),n.a.createElement("td",null,"1.0"),n.a.createElement("td",{style:{borderRight:"3px solid #D0D0D0"}},"17.02"),n.a.createElement("td",{style:{borderLeft:"3px solid #D0D0D0"}},n.a.createElement("input",{type:"text",defaultValue:"17.2"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:""})))}))))}}]),t}(l.Component)),ee=function(e){function t(){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"content-tool"},n.a.createElement($,null),n.a.createElement(Z,null))}}]),t}(l.Component),te=(a(425),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={selectedColor:"#B34EE9"},a.handleChange=a.handleChange.bind(Object(V.a)(Object(V.a)(a))),a}return Object(C.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.value),this.setState({selectedColor:e.target.value})}},{key:"render",value:function(){var e=this.state.selectedColor;return n.a.createElement("div",{style:{backgroundColor:e},className:"color-selected"},n.a.createElement(F.h,{value:"#FFFFFF",className:"color-selected-in",onChange:this.handleChange},n.a.createElement(F.g,{value:"#4BA0D5",className:"color-item"},n.a.createElement("div",{className:"color",style:{backgroundColor:"#4BA0D5"}})),n.a.createElement(F.g,{value:"#FF00AE",className:"color-item"},n.a.createElement("div",{className:"color",style:{backgroundColor:"#FF00AE"}})),n.a.createElement(F.g,{value:"#D0FF00",className:"color-item"},n.a.createElement("div",{className:"color",style:{backgroundColor:"#D0FF00"}}))))}}]),t}(l.Component)),ae=function(e){function t(e){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).call(this,e))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.title;return n.a.createElement("table",{className:"colors-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",{colSpan:"3"},e)),n.a.createElement("tr",null,n.a.createElement("td",null,"M-F"),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"1"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"200"})),n.a.createElement("td",null,n.a.createElement(te,null))),n.a.createElement("tr",null,n.a.createElement("td",null,"Sat"),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"0"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"0"})),n.a.createElement("td",null,n.a.createElement(te,null))),n.a.createElement("tr",null,n.a.createElement("td",null,"Sun"),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"0"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"0"})),n.a.createElement("td",null,n.a.createElement(te,null)))))}}]),t}(l.Component),le=(a(427),function(e){function t(e){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).call(this,e))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"settings-ctrl"},n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"required-days std-block"},n.a.createElement("div",{className:"title"},"Required  Days"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Hrs."),n.a.createElement("th",null),n.a.createElement("th",null,"Days"),n.a.createElement("th",null)),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"1",disabled:!0})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"20"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"1"})),n.a.createElement("td",null,n.a.createElement(F.f,{className:"remove"},n.a.createElement(R.a,null)))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"21",disabled:!0})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"50"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"2"})),n.a.createElement("td",null,n.a.createElement(F.f,{className:"remove"},n.a.createElement(R.a,null)))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"51",disabled:!0})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"200"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"3"})),n.a.createElement("td",null,n.a.createElement(F.f,{className:"remove"},n.a.createElement(R.a,null)))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"201",disabled:!0})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"300"})),n.a.createElement("td",null,n.a.createElement("input",{type:"text",defaultValue:"4"})),n.a.createElement("td",null,n.a.createElement(F.f,{className:"remove"},n.a.createElement(R.a,null)))))),n.a.createElement("div",{className:"btns-wrap"},n.a.createElement(F.a,{className:"btn primary-btn"},"Save"),n.a.createElement(F.a,{className:"btn outlined-primary-btn"},"Add fields"))),n.a.createElement("div",{className:"standarts-colors std-block"},n.a.createElement("div",{className:"title"},"Colors for standarts"),n.a.createElement("div",{className:"tables"},n.a.createElement(ae,{title:"Standard"}),n.a.createElement(ae,{title:"Over Time"}),n.a.createElement(ae,{title:"Over Capacity"})),n.a.createElement(F.a,{className:"btn primary-btn"},"Save"))))}}]),t}(l.Component)),ne=function(e){function t(){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.user;return n.a.createElement("div",{id:"content"},n.a.createElement(H,{history:t,user:a}),n.a.createElement("div",{className:"content"},n.a.createElement(k.a,null,n.a.createElement(w.a,{path:"/settings",exact:!0,render:function(){return"admin"!==a.role?n.a.createElement(x.a,{to:"/"}):n.a.createElement(le,null)}}),n.a.createElement(w.a,{path:"/",exact:!0,component:ee}),n.a.createElement(w.a,{path:"*",render:function(){return n.a.createElement(x.a,{to:"/"})}}))))}}]),t}(l.Component),re=(a(430),a(433),a(45)),ce=a(87),ie=a(151);re.b.add(ce.a,ce.b,ie.a);var me=S()(),ue=function(e){function t(){return Object(s.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.user;return n.a.createElement(D.a,null,n.a.createElement(w.a,{render:function(t){t.location;return n.a.createElement(k.a,null,n.a.createElement(w.a,{path:"/auth",exact:!0,render:function(){return e?n.a.createElement(x.a,{to:"/"}):n.a.createElement(T,{history:me})}}),n.a.createElement(w.a,{path:"/",render:function(){return e?n.a.createElement(ne,{history:me,user:e}):n.a.createElement(x.a,{to:"/auth"})}}))}}))}}]),t}(l.Component),se=Object(i.b)(function(e){return{user:e.user.userData}})(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(i.a,{store:N},n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,2,1]]]);
//# sourceMappingURL=main.73acbd5f.chunk.js.map