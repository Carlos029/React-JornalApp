(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(22),r=n.n(c),s=n(7),i=n(10),o=n(16),u=n(5),l=n(6),d=n(8),j=n.n(d),b=n(13),p=n(20);n(63),n(47);p.a.initializeApp({apiKey:"AIzaSyDgpf4GCtC8auXRSAemlV3LsBqs1HRsY94",authDomain:"react-app-cursos-4b896.firebaseapp.com",projectId:"react-app-cursos-4b896",storageBucket:"react-app-cursos-4b896.appspot.com",messagingSenderId:"868477127572",appId:"1:868477127572:web:946efc22b7ffcf136fdd81"});var m=p.a.firestore(),h=new p.a.auth.GoogleAuthProvider,f=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("".concat(t,"/journal/notes")).orderBy("date","desc").get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(l.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="[Auth] Login",x="[Auth] Logout",v="[UI] Set Error",g="[UI] Remove Error",_="[UI] Start loading",y="[UI] Finish loading",w="[Notes] New note",N="[Notes] Set active note",k="[Notes] Load notes",C="[Notes] Updated note saved",E="[Notes] Updated imageUrl",S="[Notes] Delete note",I="[Notes] Logout Cleaning",A=n(15),L=n.n(A),P=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dc1sebdms/image/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dc1sebdms/image/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json().then((function(e){return e.url}));case 11:return c=e.sent,e.abrupt("return",c);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){return{type:N,payload:Object(l.a)({id:e},t)}},U=function(e,t){return{type:w,payload:Object(l.a)({id:e},t)}},R=function(e){return{type:k,payload:e}},B=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n,a){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(l.a)({},e)).id,t.next=6,m.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r).catch((function(e){L.a.fire("Error",e.message,"error")}));case 6:n(G(e.id,r)),L.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},G=function(e,t){return{type:C,payload:{id:e,note:Object(l.a)({id:e},t)}}},T=function(e){return{type:S,payload:{id:e}}},q=n(1),z=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=Object(a.useRef)();return Object(q.jsxs)("div",{className:"notes__appbar",children:[Object(q.jsx)("span",{children:"28 de agosto 2020"}),Object(q.jsx)("input",{ref:n,name:"file",type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(b.a)(j.a.mark((function t(n,a){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,L.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,didOpen:function(){L.a.showLoading()}}),t.next=4,P(e);case 4:r=t.sent,c.url=r,n(B(c)),L.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(q.jsxs)("div",{children:[Object(q.jsx)("button",{className:"btn",onClick:function(){n.current.click()},children:"Picture"}),Object(q.jsx)("button",{className:"btn",onClick:function(){console.log(t),e(B(t))},children:"Save"})]})]})},W=n(23),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1],s=function(){r(e)},o=function(e){r(Object(l.a)(Object(l.a)({},c),{},Object(W.a)({},e.target.name,e.target.value)))};return[c,o,s]},F=function(){var e=Object(s.c)((function(e){return e.notes})).active,t=X(e),n=Object(i.a)(t,3),c=n[0],r=n[1],o=n[2],u=c.title,d=c.body,p=Object(s.b)(),h=Object(a.useRef)(e.id);Object(a.useEffect)((function(){e.id!==h.current&&(o(),h.current=e.id)}),[e,o]),Object(a.useEffect)((function(){p(D(c.id,Object(l.a)({},c)))}),[c,p]);return Object(q.jsxs)("div",{className:"notes__main-content",children:[Object(q.jsx)(z,{}),Object(q.jsxs)("div",{className:"notes__content",children:[Object(q.jsx)("input",{type:"text",value:u,onChange:r,placeholder:"Untitled",className:"notes__title-input",autoComplete:"off",name:"title"}),Object(q.jsx)("textarea",{placeholder:"what happened today",className:"notes__textarea",value:d,onChange:r,name:"body"}),e.url&&Object(q.jsx)("div",{className:"notes__image",children:Object(q.jsx)("img",{src:e.url,alt:"imagen"})}),Object(q.jsx)("button",{className:"btn btn-danger",onClick:function(){var e;p((e=h.current,function(){var t=Object(b.a)(j.a.mark((function t(n,a){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,m.doc("".concat(c,"/journal/notes/").concat(e)).delete().catch((function(e){throw e}));case 3:n(T(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Delete"})]})]})},J=function(){return Object(q.jsxs)("div",{className:"nothing__main-content",children:[Object(q.jsxs)("p",{children:["Select something",Object(q.jsx)("br",{}),"create an entry!"]}),Object(q.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},V=function(e){return{type:v,payload:e}},H=function(){return{type:y}},K=function(e,t){return function(n){n({type:_}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(M(t.uid,t.displayName)),n(H())})).catch((function(e){L.a.fire("Error",e.message,"error"),n(H())}))}},M=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},Y=function(){return{type:x}},Q=n(33),Z=n.n(Q),$=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=Z()(n),o=Object(s.b)();return Object(q.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn ",onClick:function(){o(D(t,{date:n,title:a,body:c,url:r}))},children:[r&&Object(q.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(q.jsxs)("div",{className:"journal__entry-body",children:[Object(q.jsx)("p",{className:"journal__entry-title",children:a}),Object(q.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(q.jsxs)("div",{className:"journal__entry-date-box",children:[Object(q.jsx)("span",{children:i.format("dddd")}),Object(q.jsx)("h4",{children:i.format("Do")})]})]})},ee=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(q.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(q.jsx)($,Object(l.a)({},e),e.id)}))})},te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(q.jsxs)("aside",{className:"journal__sidebar animate__animated animate__fadeIn animate__faster",children:[Object(q.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(q.jsxs)("h3",{className:"mt-5",children:[Object(q.jsx)("i",{className:"far fa-moon"}),Object(q.jsxs)("span",{children:["  ",t," "]})]}),Object(q.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(Y()),t({type:I});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(q.jsxs)("div",{className:"journal__new-entry ",onClick:function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t,n){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,m.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(D(r.id,c)),t(U(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(q.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(q.jsx)("p",{className:"mt-5",children:"new entry"})]}),Object(q.jsx)(ee,{})]})},ne=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(q.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(q.jsx)(te,{}),Object(q.jsx)("main",{children:e?Object(q.jsx)(F,{}):Object(q.jsx)(J,{})})]})},ae=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=X({email:"carlos@gmail.com",password:"123456"}),a=Object(i.a)(n,2),c=a[0],r=a[1],u=c.email,l=c.password;return Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{className:"auth__title",children:"Login "}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(K(u,l))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(q.jsx)("input",{type:"email",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:r}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"auth__social-networks",children:[Object(q.jsx)("p",{children:"Login with social networks"}),Object(q.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){p.a.auth().signInWithPopup(h).then((function(t){var n=t.user;e(M(n.uid,n.displayName))})).catch((function(e){L.a.fire("Error",e.message,"error")}))}))},children:[Object(q.jsx)("div",{className:"google-icon-wrapper",children:Object(q.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(q.jsx)("p",{className:"btn-text",children:Object(q.jsx)("b",{children:"Sign in with google"})})]})]}),Object(q.jsx)(o.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=X({name:"Prueba",email:"prueba@gmail.com",password:"12345678",password2:"12345678"}),a=Object(i.a)(n,2),c=a[0],r=a[1],u=c.name,l=c.email,d=c.password,m=c.password2,h=function(){return 0===u.trim().length?(e(V("name is requiered")),!1):0===l.trim().length?(e(V("email is requiered")),!1):!(d.trim().length<5||d.trim()!==m.trim())||(e(V("password needs to be at least 6 characters and match each other")),!1)};return Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{className:"auth__title",children:"Register "}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h()&&(e({type:g}),e(function(e,t,n){return function(a){p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(M(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){L.a.fire("Error",e.message,"error")}))}}(l,d,u)))},className:"animate__animated animate__fadeIn animate__faster",children:[""!==t&&Object(q.jsxs)("div",{className:"auth__alert-error",children:[t," "]}),Object(q.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(q.jsx)("input",{type:"email",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",minLength:"5",value:l,onChange:r}),Object(q.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:r}),Object(q.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"auth__input",value:m,onChange:r}),Object(q.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-5",children:"Register"}),Object(q.jsx)("hr",{}),Object(q.jsx)(o.b,{to:"/auth/login",className:"link",children:"Registered already?"})]})]})},re=function(){return Object(q.jsx)("div",{className:"auth__main",children:Object(q.jsx)("div",{className:"auth__box-container",children:Object(q.jsxs)(u.d,{children:[Object(q.jsx)(u.b,{path:"login",element:Object(q.jsx)(ae,{})}),Object(q.jsx)(u.b,{path:"register",element:Object(q.jsx)(ce,{})}),Object(q.jsx)(u.b,{path:"/*",element:Object(q.jsx)(u.a,{to:"/login"})})]})})})},se=function(e){var t=e.children;return e.isAuthenticated?Object(q.jsx)(u.a,{to:"/"}):t},ie=function(e){var t=e.children;return e.isAuthenticated?t:Object(q.jsx)(u.a,{to:"/auth/login"})},oe=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),m=d[0],h=d[1];return Object(a.useEffect)((function(){p.a.auth().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(M(t.uid,t.displayName)),h(!0),e((n=t.uid,function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:a=e.sent,t(R(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):h(!1),r(!1)}))}),[e,r,h]),c?Object(q.jsx)("h1",{children:"Espere un momento..."}):Object(q.jsx)(o.a,{children:Object(q.jsxs)(u.d,{children:[Object(q.jsx)(u.b,{path:"/auth/*",element:Object(q.jsx)(se,{isAuthenticated:m,children:Object(q.jsx)(re,{})})}),Object(q.jsx)(u.b,{path:"/",element:Object(q.jsx)(ie,{isAuthenticated:m,children:Object(q.jsx)(ne,{})})}),Object(q.jsx)(u.b,{path:"/*",element:Object(q.jsx)(u.a,{to:"/auth/login"})})]})})},ue=n(21),le=n(34),de=n(29),je={notes:[],active:null},be={loading:!1,msgError:""},pe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.c,me=Object(ue.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case x:return{}}return e},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(l.a)(Object(l.a)({},e),{},{msgError:t.payload});case g:return Object(l.a)(Object(l.a)({},e),{},{msgError:""});case _:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case y:return Object(l.a)(Object(l.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(l.a)(Object(l.a)({},e),{},{active:Object(l.a)({},t.payload)});case w:return Object(l.a)(Object(l.a)({},e),{},{notes:[t.payload].concat(Object(de.a)(e.notes))});case S:return Object(l.a)(Object(l.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload.id}))});case E:return{};case k:return Object(l.a)(Object(l.a)({},e),{},{notes:Object(de.a)(t.payload)});case I:return Object(l.a)(Object(l.a)({},e),{},{active:null,notes:[]});case C:return Object(l.a)(Object(l.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});default:return e}}}),he=Object(ue.d)(me,pe(Object(ue.a)(le.a))),fe=function(){return Object(q.jsx)(s.a,{store:he,children:Object(q.jsx)(oe,{})})};n(61);r.a.render(Object(q.jsx)(fe,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.b8b7bf01.chunk.js.map