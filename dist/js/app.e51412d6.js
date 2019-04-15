(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],i[o]&&f.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"031a":function(t,e,n){"use strict";var s=n("942b"),i=n.n(s);i.a},"034f":function(t,e,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},"0573":function(t,e,n){},"0b75":function(t,e,n){"use strict";var s=n("7fc4"),i=n.n(s);i.a},1153:function(t,e,n){},"181f":function(t,e,n){},4427:function(t,e,n){},"4ef6":function(t,e,n){"use strict";var s=n("1153"),i=n.n(s);i.a},5666:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=n("ae1a"),a=n.n(i),o=n("2f62"),r=(n("ac6a"),n("20d6"),n("7514"),n("f499")),c=n.n(r),l=n("d225"),u=n("b0b4"),d="http://localhost:8081",f=n("795b"),m=n.n(f);function h(t){return t.ok?t.json():m.a.reject(t.status)}function p(t){return t.ok?m.a.resolve():m.a.reject(t.status)}var v=d+"/tasks",g=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"fetchTasks",value:function(){return fetch(v,{method:"GET",mode:"cors",credentials:"include"}).then(function(t){return h(t)})}},{key:"addTask",value:function(t){return fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include",body:c()(t)}).then(function(t){return h(t)})}},{key:"editTask",value:function(t){return fetch("".concat(v,"/").concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors",body:c()(t)}).then(function(t){return h(t)})}},{key:"removeTask",value:function(t){return fetch("".concat(v,"/").concat(t),{method:"DELETE",credentials:"include",mode:"cors"}).then(function(t){return p(t)})}}]),t}(),b=n("308d"),k=n("6bb5"),y=n("4e2b"),w=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,[{key:"modify",value:function(t){for(var e in t)this[e]!==t[e]&&(this[e]=t[e])}}]),t}(),_=function(t){function e(t,n){var s;return Object(l["a"])(this,e),s=Object(b["a"])(this,Object(k["a"])(e).call(this)),s.id="new_"+t,s.key=t,s.text="",s.notes="",s.isCompleted=!1,s.isStarred=!1,n&&s.modify(n),s}return Object(y["a"])(e,t),Object(u["a"])(e,[{key:"isNew",get:function(){return/new_/.test(this.id)}},{key:"isEmpty",get:function(){return""===this.text&&""===this.notes}}]),e}(w),C={namespaced:!0,state:{list:[],_nextKey:0},getters:{getById:function(t){return function(e){return t.list.find(function(t){return t.id===e})}},getByKey:function(t){return function(e){return t.list.find(function(t){return t.key===e})}}},mutations:{clear:function(t){t.list=[]},add:function(t,e){var n=e.key,s=e.source,i=new _(n,s);t.list.unshift(i)},remove:function(t,e){var n=t.list.findIndex(function(t){return t.id===e});t.list.splice(n,1)},modify:function(t,e){var n=e.task,s=e.source;n.modify(s)}},actions:{add:function(t,e){var n=t.commit,s=t.state,i=t.getters,a=s._nextKey++;return n("add",{key:a,source:e}),i.getByKey(a)},fetch:function(t){var e=t.commit,n=t.dispatch;e("clear"),g.fetchTasks().then(function(t){return t.forEach(function(t){n("add",t)})}).catch(function(t){})},modify:function(t,e){var n=t.commit,s=t.getters,i=e.id,a=e.changes,o=s.getById(i);n("modify",{task:o,source:a});var r=o.isNew?g.addTask(o):g.editTask(o);r.then(function(t){n("modify",{task:o,source:t})}).catch(function(t){})},remove:function(t,e){var n=t.commit;g.removeTask(e).then(function(){return n("remove",e)}).catch(function(t){})}}},$=d+"/auth",x=function(){function t(){Object(l["a"])(this,t)}return Object(u["a"])(t,null,[{key:"register",value:function(t){return fetch($+"/register",{headers:{"Content-Type":"application/json"},method:"POST",mode:"cors",body:c()(t)}).then(function(t){return p(t)})}},{key:"require",value:function(){return fetch($+"/require",{method:"GET",credentials:"include",mode:"cors"}).then(function(t){return h(t)})}},{key:"logout",value:function(){return fetch($+"/logout",{method:"GET",credentials:"include",mode:"cors"}).then(function(t){return p(t)})}},{key:"login",value:function(t){return fetch($+"/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",mode:"cors",body:c()(t)}).then(function(t){return h(t)})}}]),t}(),O={FORBIDDEN:403},T={namespaced:!0,state:{username:void 0,authorized:!1,initialized:!1},mutations:{initialize:function(t){t.initialized||(t.initialized=!0)},set:function(t,e){t.username=e.username,t.authorized=!0},unset:function(t){t.username=void 0,t.authorized=!1}},actions:{register:function(t,e){t.commit;return x.register(e)},require:function(t){var e=t.commit;return x.require().then(function(t){e("set",t)}).catch(function(t){t==O.FORBIDDEN&&e("unset")}).finally(function(){e("initialize")})},login:function(t,e){var n=t.commit;return x.login(e).then(function(t){n("set",t)})},logout:function(t){var e=t.commit;x.logout().then(function(){e("unset")}).catch(function(t){})}}};s["a"].use(o["a"]);var j=new o["a"].Store({modules:{user:T,tasks:C}}),E=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-cont"},[n("button",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{id:"add",type:"button",disabled:t.editingTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:e.ctrlKey?t.test():null},click:function(e){return e.stopPropagation(),t.createTaskHandler()}}},[n("i",{staticClass:"material-icons"},[t._v("add")])]),n("tasks-container",{attrs:{selectedTaskId:t.selectedTaskId}}),n("details-bar",{attrs:{taskId:t.selectedTaskId,isActive:t.detailsShown}})],1)},B=[],P=n("7618"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"bar",rawName:"v-bar"}]},[n("main",[n("transition-group",{attrs:{tag:"div",name:"tasks"}},t._l(t.tasks,function(e){return n("task",{key:e.key,attrs:{task:e,isSelected:t.selectedTaskId===e.id}})}),1),n("transition",{attrs:{name:"empty"}},[t.isEmpty?n("div",{staticClass:"no-tasks"},[t._v("Nothing no show")]):t._e()])],1)])},I=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item card",class:[this.isSelected?"indigo lighten-5 active":"","todo-item card"],on:{click:function(e){return t.select(e)}}},[n("label",[n("input",{staticClass:"custom-checkbox",attrs:{type:"checkbox"},domProps:{checked:t.task.isCompleted},on:{change:function(e){return e.stopPropagation(),t.modifyStatus(e)}}}),n("span")]),n("transition",[t.isBeingEdited?n("div",{staticClass:"input-field"},[n("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:t.task.text},on:{blur:function(e){return t.stopEdit(e)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.target.blur()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelChanges()}]}})]):n("div",{staticClass:"task",on:{click:function(e){return e.stopPropagation(),t.edit()}}},[t._v(t._s(t.task.text))])]),n("div",{staticClass:"btns-group"},[n("button",{staticClass:"btn-notes icon-btn",on:{click:function(e){return e.stopPropagation(),t.toggleDetails()}}},[n("i",{staticClass:"material-icons"},[t._v("subject")])]),n("button",{staticClass:"btn-delete icon-btn",on:{click:function(e){return e.stopPropagation(),t.deleteTask()}}},[n("i",{staticClass:"material-icons"},[t._v("delete")])])])],1)},F=[],M=new s["a"]({data:function(){return{loggedIn:!1}},methods:{login:function(){this.loggedIn=!0},logout:function(){this.loggedIn=!1}}}),z=M,A={name:"Task",props:{task:{type:Object,required:!0},isSelected:{type:Boolean,default:!1}},data:function(){return{isBeingEdited:!1,changesCanceled:!1}},directives:{focus:{inserted:function(t){t.focus()}}},methods:{cancelChanges:function(t){this.changesCanceled=!0,this.isBeingEdited=!1},select:function(t){t&&"DIV"===t.target.tagName&&z.$emit("select",this.isSelected?null:this.task.id)},edit:function(){this.isBeingEdited=!0,this.isSelected||z.$emit("select",this.task.id),z.$emit("edit",this.task)},stopEdit:function(t){if(this.changesCanceled)this.changesCanceled=!1;else{var e=t.target.value;""===e&&this.task.isNew?this.$store.commit("tasks/remove",this.task.id):(this.isBeingEdited=!1,this.modify({text:t.target.value}))}z.$emit("edit",null)},modifyStatus:function(t){this.modify({isCompleted:t.target.checked})},modify:function(t){this.$store.dispatch("tasks/modify",{id:this.task.id,changes:t})},deleteTask:function(){this.$store.dispatch("tasks/remove",this.task.id)},toggleDetails:function(){z.$emit("toggleDetails",this.task.id)}},created:function(){this.task.isNew&&this.edit()}},H=A,R=(n("cf58"),n("2877")),q=Object(R["a"])(H,N,F,!1,null,"1fc9aea2",null),L=q.exports,K={props:{selectedTaskId:String},computed:{tasks:function(){return this.$store.state.tasks.list},isEmpty:function(){return this.tasks.length<1}},components:{Task:L}},U=K,G=(n("866d"),Object(R["a"])(U,S,I,!1,null,null,null)),J=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{class:[t.isActive?"active":"","card"]},[n("div",{staticClass:"card-panel red details-header"},[n("div",[t._v("Notes")]),n("button",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{id:"hideDetails",type:"button"},on:{click:function(e){return t.hide()}}},[n("i",{staticClass:"material-icons"},[t._v("send")])])]),n("div",{directives:[{name:"bar",rawName:"v-bar"}]},[n("div",{staticClass:"details-content"},[t.task?n("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.task.notes,expression:"task.notes",modifiers:{lazy:!0}}],staticClass:"materialize-textarea",attrs:{id:"notes",name:"details",maxlength:"70",placeholder:"Put your notes here.."},domProps:{value:t.task.notes},on:{blur:function(e){return t.saveChanges(e.target.value)},change:function(e){return t.$set(t.task,"notes",e.target.value)}}}):t._e()])])])},Y=[],Q={name:"DetailsBar",props:{isActive:{type:Boolean,required:!0},taskId:String},computed:{task:function(){return this.$store.getters["tasks/getById"](this.taskId)}},methods:{hide:function(){z.$emit("toggleDetails",{})},saveChanges:function(t){console.log(t),this.$store.dispatch("tasks/modify",{id:this.taskId,changes:{notes:t}})}}},W=Q,X=(n("c915"),Object(R["a"])(W,V,Y,!1,null,null,null)),Z=X.exports,tt={name:"TasksScreen",components:{TasksContainer:J,DetailsBar:Z},data:function(){return{selectedTaskId:null,editingTask:!1,detailsShown:!1}},computed:{selectedTask:function(){this.$store.getters["tasks/getById"](this.selectedTaskId)}},methods:{createTaskHandler:function(){var t=this;this.$store.dispatch("tasks/add").then(function(e){t.selectedTaskId=e.id})},selectHandler:function(t){null===t&&(this.detailsShown=!1),this.selectedTaskId=t},toggleDetailsHandler:function(t){this.detailsShown=!this.detailsShown,void 0!==Object(P["a"])(t)&&this.selectHandler(t)}},created:function(){var t=this;this.$store.dispatch("tasks/fetch"),z.$on("select",this.selectHandler),z.$on("toggleDetails",this.toggleDetailsHandler),z.$on("edit",function(e){t.editingTask=!!e})}},et=tt,nt=(n("b48b"),Object(R["a"])(et,D,B,!1,null,null,null)),st=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-content card"},[t._m(0),t.loginFormActive?n("login-form-modal",{on:{close:function(e){t.loginFormActive=!1}}}):t._e(),t.registerFormActive?n("register-form-modal",{on:{close:function(e){t.registerFormActive=!1}}}):t._e(),t.messageBox.active?n("message-box",{attrs:{props:t.messageBox.data},on:{close:function(e){t.messageBox.active=!1}}}):t._e()],1)},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"central"},[n("div",{staticClass:"greetings"},[t._v("Best TODO list ever made by"),n("br"),t._v("Geek University student!")])])}],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal-window",{attrs:{title:"Sign In"}},[n("form",{attrs:{name:"login"}},[n("div",{staticClass:"inputs-container"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.username,expression:"loginData.username"}],staticClass:"validate",attrs:{id:"username",type:"text"},domProps:{value:t.loginData.username},on:{input:[function(e){e.target.composing||t.$set(t.loginData,"username",e.target.value)},function(e){t.failed=!1}]}}),n("label",{attrs:{for:"username"}},[t._v("User name")])]),n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],staticClass:"validate",attrs:{id:"pwd",type:"password"},domProps:{value:t.loginData.password},on:{input:[function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value)},function(e){t.failed=!1}]}}),n("label",{attrs:{for:"pwd"}},[t._v("Password")])]),t.failed?n("div",{staticClass:"login-failed"},[t._v("Invalid username or password!")]):t._e()]),n("modal-actions",{attrs:{actions:t.actions}})],1)])},rt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[t.title?n("h3",[t._v(t._s(t.title))]):t._e(),t._t("default")],2)])])])},lt=[],ut={props:{title:String}},dt=ut,ft=(n("9e15"),Object(R["a"])(dt,ct,lt,!1,null,null,null)),mt=ft.exports,ht={data:function(){return{loginData:{username:"",password:""},failed:!1,actions:{ok:{name:"ok",disabled:!1,func:this.submit},cancel:{name:"cancel",disabled:!1,func:this.cancel}}}},methods:{submit:function(){var t=this;this.$store.dispatch("user/login",this.loginData).then(function(){t.$emit("close"),t.$router.push("/tasks")}).catch(function(e){e==O.FORBIDDEN&&(t.failed=!0)})},cancel:function(){this.$emit("close")}}},pt=ht,vt=(n("031a"),Object(R["a"])(pt,ot,rt,!1,null,"10a17279",null)),gt=vt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal-window",{attrs:{title:"Register"}},[n("form",{attrs:{name:"register"}},[n("div",{staticClass:"inputs-container"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.username,expression:"credentials.username"}],staticClass:"validate",attrs:{id:"username",type:"text"},domProps:{value:t.credentials.username},on:{input:[function(e){e.target.composing||t.$set(t.credentials,"username",e.target.value)},function(e){t.failed=!1}]}}),n("label",{attrs:{for:"username"}},[t._v("User name")])]),n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"validate",attrs:{id:"email",type:"email"},domProps:{value:t.credentials.email},on:{input:[function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)},function(e){t.failed=!1}]}}),n("label",{attrs:{for:"username"}},[t._v("Email")])]),n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"validate",attrs:{id:"pwd",type:"password"},domProps:{value:t.credentials.password},on:{input:[function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)},function(e){t.failed=!1}]}}),n("label",{attrs:{for:"pwd"}},[t._v("Password")])]),n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.passwordConfirmation,expression:"credentials.passwordConfirmation"}],staticClass:"validate",attrs:{id:"pwd-conf",type:"password"},domProps:{value:t.credentials.passwordConfirmation},on:{input:[function(e){e.target.composing||t.$set(t.credentials,"passwordConfirmation",e.target.value)},function(e){t.failed=!1}]}}),n("label",{attrs:{for:"username"}},[t._v("Confirm password")])]),t.failed?n("div",{staticClass:"register-failed"},[t._v(t._s(t.failMessage))]):t._e()]),n("modal-actions",{attrs:{actions:t.actions}})],1)])},kt=[],yt={data:function(){return{credentials:{username:"",email:"",password:"",passwordConfirmation:""},failed:!1,failMessage:"",actions:{ok:{name:"sign up",disabled:!1,func:this.submit},cancel:{name:"cancel",disabled:!1,func:this.cancel}}}},methods:{submit:function(){var t=this;this.credentials.password!==this.credentials.passwordConfirmation?(this.failMessage="Passwords don't match!",this.failed=!0):this.$store.dispatch("user/register",this.credentials).then(function(){z.$emit("register-success",t.credentials.username),t.$emit("close")}).catch(function(e){e==O.FORBIDDEN&&(t.failMessage="Username is already taken!",t.failed=!0)})},cancel:function(){this.$emit("close")}}},wt=yt,_t=(n("4ef6"),Object(R["a"])(wt,bt,kt,!1,null,"0863f63b",null)),Ct=_t.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal-window",{attrs:{title:t.props.title}},[n("form",{attrs:{name:"msgBox"}},[n("div",{staticClass:"msg-content",domProps:{innerHTML:t._s(t.props.content)}}),n("modal-actions",{attrs:{actions:t.actions}})],1)])},xt=[],Ot={props:{props:Object},data:function(){return{actions:{ok:{name:"ok",disabled:!1,func:this.ok}}}},methods:{ok:function(){this.$emit("close"),this.props.callback()}}},Tt=Ot,jt=(n("d3ef"),Object(R["a"])(Tt,$t,xt,!1,null,null,null)),Et=jt.exports,Dt={components:{LoginFormModal:gt,RegisterFormModal:Ct,MessageBox:Et},data:function(){return{loginFormActive:!1,registerFormActive:!1,messageBox:{active:!1,data:{}}}},methods:{showLoginForm:function(){this.loginFormActive=!0},showRegisterForm:function(){this.registerFormActive=!0},showMessageBox:function(t){this.messageBox.active=!0,this.messageBox.data=t}},created:function(){z.$on("login",this.showLoginForm.bind(this)),z.$on("register",this.showRegisterForm.bind(this)),z.$on("register-success",function(t){Bt(this,t)}.bind(this))}};function Bt(t,e){var n={title:"Success!",content:"You were registered successfully <span>".concat(e,"</span>, now you can log in."),callback:function(){this.showLoginForm()}.bind(t)};t.showMessageBox(n)}var Pt=Dt,St=(n("0b75"),Object(R["a"])(Pt,it,at,!1,null,null,null)),It=St.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"placeholder card"},[t._v("Register")])},Ft=[],Mt={},zt=Mt,At=(n("855f"),Object(R["a"])(zt,Nt,Ft,!1,null,"773259ac",null)),Ht=At.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"placeholder card"},[t._v("Profile")])},qt=[],Lt={},Kt=Lt,Ut=(n("919d"),Object(R["a"])(Kt,Rt,qt,!1,null,"bbb6c4fe",null)),Gt=Ut.exports;s["a"].use(E["a"]);var Jt=new E["a"]({mode:"history",routes:[{path:"/tasks",component:st,beforeEnter:Vt},{path:"/profile",component:Gt,beforeEnter:Vt},{path:"/home",component:It},{path:"/register",component:Ht},{path:"/",redirect:"/home"}]});function Vt(t,e,n){j.state.user.initialized?(j.state.user.authorized||n(!!e.path("/")&&"/home"),n()):j.dispatch("user/require").then(function(){j.state.user.authorized||n("/"==e.path&&"/home"),n()}).catch(function(){n(!1)})}var Yt=Jt,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("todo-header"),n("div",{staticClass:"content-wrapper"},[n("transition",{attrs:{name:"router",appear:""}},[n("router-view")],1)],1),n("todo-footer")],1)},Wt=[],Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"card-panel indigo darken-4"},[t._m(0),n("main-menu")],1)},Zt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"brand-logo",attrs:{href:"#"}},[n("span",[t._v("EONAE ")]),t._v("TODO")])}],te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[t.user.authorized?n("div",{staticClass:"btns-container"},[n("button",{staticClass:"waves-effect waves-light",attrs:{id:"tasks"},on:{click:function(e){return t.tasks()}}},[n("i",{staticClass:"material-icons"},[t._v("assignment_turned_in")])]),n("button",{staticClass:"waves-effect waves-light",attrs:{id:"profile"},on:{click:function(e){return t.profile()}}},[n("i",{staticClass:"material-icons"},[t._v("account_circle")])]),n("button",{staticClass:"waves-effect waves-light",attrs:{id:"logout"},on:{click:function(e){return t.logout()}}},[n("i",{staticClass:"material-icons"},[t._v("exit_to_app")])])]):n("div",{staticClass:"btns-container"},[n("button",{staticClass:"waves-effect waves-light btn red",attrs:{id:"login"},on:{click:function(e){return t.login()}}},[t._v("Sign In")]),n("button",{staticClass:"waves-effect waves-light btn yellow darken-3",attrs:{id:"register"},on:{click:function(e){return t.register()}}},[t._v("Register")])])])},ee=[],ne={computed:{user:function(){return this.$store.state.user}},methods:{login:function(){z.$emit("login")},register:function(){z.$emit("register")},tasks:function(){this.$router.push("/tasks")},logout:function(){this.$store.dispatch("user/logout"),this.$router.push("/home")},profile:function(){this.$router.push("/profile")}}},se=ne,ie=(n("8f53"),Object(R["a"])(se,te,ee,!1,null,null,null)),ae=ie.exports,oe={name:"TodoHeader",components:{MainMenu:ae}},re=oe,ce=(n("e327"),Object(R["a"])(re,Xt,Zt,!1,null,"5c90175a",null)),le=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"card-panel indigo darken-4"})},de=[],fe={name:"TodoFooter"},me=fe,he=(n("ec98"),Object(R["a"])(me,ue,de,!1,null,"43ab321a",null)),pe=he.exports,ve={name:"app",components:{TodoHeader:le,TodoFooter:pe}},ge=ve,be=(n("034f"),Object(R["a"])(ge,Qt,Wt,!1,null,null,null)),ke=be.exports,ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-actions"},t._l(t.actions,function(e){return n("button",{staticClass:"btn waves-effect waves-light indigo",attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.func()}}},[t._v(t._s(e.name))])}),0)},we=[],_e={props:{actions:Object}},Ce=_e,$e=(n("c679"),Object(R["a"])(Ce,ye,we,!1,null,null,null)),xe=$e.exports;n("4d5c"),n("dc53");s["a"].use(a.a),s["a"].component("modal-window",mt),s["a"].component("modal-actions",xe),s["a"].config.productionTip=!1,new s["a"]({store:j,router:Yt,render:function(t){return t(ke)}}).$mount("#app")},"5e72":function(t,e,n){},"64a9":function(t,e,n){},"7ac7":function(t,e,n){},"7fc4":function(t,e,n){},"83ff":function(t,e,n){},"855f":function(t,e,n){"use strict";var s=n("181f"),i=n.n(s);i.a},"866d":function(t,e,n){"use strict";var s=n("4427"),i=n.n(s);i.a},"8f53":function(t,e,n){"use strict";var s=n("9f60"),i=n.n(s);i.a},"919d":function(t,e,n){"use strict";var s=n("5e72"),i=n.n(s);i.a},"942b":function(t,e,n){},"9ab3":function(t,e,n){},"9e15":function(t,e,n){"use strict";var s=n("5666"),i=n.n(s);i.a},"9f60":function(t,e,n){},a32b:function(t,e,n){},b0bc:function(t,e,n){},b48b:function(t,e,n){"use strict";var s=n("9ab3"),i=n.n(s);i.a},c679:function(t,e,n){"use strict";var s=n("e41a"),i=n.n(s);i.a},c915:function(t,e,n){"use strict";var s=n("7ac7"),i=n.n(s);i.a},cf58:function(t,e,n){"use strict";var s=n("a32b"),i=n.n(s);i.a},d3ef:function(t,e,n){"use strict";var s=n("0573"),i=n.n(s);i.a},e327:function(t,e,n){"use strict";var s=n("83ff"),i=n.n(s);i.a},e41a:function(t,e,n){},ec98:function(t,e,n){"use strict";var s=n("b0bc"),i=n.n(s);i.a}});
//# sourceMappingURL=app.e51412d6.js.map