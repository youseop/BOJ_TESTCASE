(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),u=a.n(c),l=a(2),o=a.n(l),s=a(6),i=a(3),m=a(16),p=a(4),b=a(19),d=a(17);a(42),a(44),a(60);d.initializeApp({apiKey:"AIzaSyA0vz2LVqsLxP88JIZ4d8805YK4aAB59Kk",authDomain:"boj-testcase.firebaseapp.com",databaseURL:"https://boj-testcase.firebaseio.com",projectId:"boj-testcase",storageBucket:"boj-testcase.appspot.com",messagingSenderId:"101531343798",appId:"1:101531343798:web:114def435ba6176857bf17",measurementId:"G-BM7FVDDLQP"});var f=d,E=d.auth(),v=d.firestore(),g=d.storage(),h=function(e){var t=e.ProblemNum,a=e.name,c=e.text,u=e.result,l=Object(n.useState)(""),m=Object(i.a)(l,2),p=m[0],b=m[1],d=function(){var e=Object(s.a)(o.a.mark(function e(n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={createdAt:Date.now(),ProblemNum:t,text:c,result:u,name:a,Report:p},""!==p){e.next=6;break}alert("Text invalid"),e.next=10;break;case 6:return e.next=8,v.collection("Report").add(r);case 8:b(""),alert("Problem Reported");case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"report_container"},r.a.createElement("form",{onSubmit:d,className:"report_form"},r.a.createElement("div",{className:"wrap"},r.a.createElement("textarea",{value:p,onChange:function(e){var t=e.target.value;b(t)},type:"text",placeholder:"Report the problem",maxLength:2e3})),r.a.createElement("input",{className:"testcase_button report",type:"submit",value:"Report"})))},O=a(22),j=a(11),x=a(12),N=function(e){var t=e.TestCaseObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(i.a)(c,2),l=u[0],m=u[1],p=Object(n.useState)(t.text),b=Object(i.a)(p,2),d=b[0],f=b[1],E=Object(n.useState)(t.ProblemNum),g=Object(i.a)(E,2),N=g[0],y=g[1],C=Object(n.useState)(t.result),w=Object(i.a)(C,2),S=w[0],k=w[1],L=function(){var e=Object(s.a)(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("Are you sure?"),console.log(a),!a){e.next=5;break}return e.next=5,v.doc("TestCase/".concat(t.id)).delete();case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){return m(function(e){return!e})},T=function(){var e=Object(s.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v.doc("TestCase/".concat(t.id)).update({text:d,ProblemNum:N,result:S});case 3:m(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),D=Object(n.useState)(!1),I=Object(i.a)(D,2),_=I[0],A=I[1],F=function(){return A(function(e){return!e})};return r.a.createElement("div",{className:"Testcase"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:T},r.a.createElement("input",{type:"text",value:N,onChange:function(e){var t=e.target.value;y(t)},required:!0}),r.a.createElement("input",{type:"text",value:d,onChange:function(e){var t=e.target.value;f(t)},required:!0}),r.a.createElement("input",{type:"text",value:S,onChange:function(e){var t=e.target.value;k(t)},required:!0}),r.a.createElement("input",{type:"submit",value:"Update"})),r.a.createElement("button",{onClick:P},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Test Case #",t.ProblemNum),r.a.createElement("div",{className:"Testcase_name"},t.name),r.a.createElement("div",{className:"wrap"},r.a.createElement(O.CopyToClipboard,{text:t.text},r.a.createElement("button",{className:"testcase_button"},"Copy")),r.a.createElement("textarea",{name:"Testcase",defaultValue:t.text}),r.a.createElement(O.CopyToClipboard,{text:t.result},r.a.createElement("button",{className:"testcase_button"},"Copy")),r.a.createElement("textarea",{name:"Result",defaultValue:t.result})),a?r.a.createElement("div",null,r.a.createElement("button",{className:"testcase_button",onClick:L},"Delete"),r.a.createElement("button",{className:"testcase_button",onClick:P},"Edit")):r.a.createElement(r.a.Fragment,null,_?r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{ProblemNum:t.ProblemNum,name:t.name,text:t.text,result:t.result}),r.a.createElement("button",{onClick:F,className:"testcase_button"},r.a.createElement(x.a,{icon:j.d}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:F,className:"testcase_button report"},"Report Problem \xa0 ",r.a.createElement(x.a,{icon:j.a}))))))},y=function(e){var t=e.userObj,a=e.isLoggedIn,c=Object(n.useState)([]),u=Object(i.a)(c,2),l=u[0],m=u[1],p=Object(n.useState)(""),d=Object(i.a)(p,2),f=d[0],E=d[1];Object(n.useEffect)(function(){v.collection("TestCase").onSnapshot(function(e){var t=e.docs.map(function(e){return Object(b.a)({},e.data(),{id:e.id})}).filter(function(e){return e.ProblemNum===f});m(t)})});var g=function(e){var t=e.target.value;E(t)},h=function(){var e=Object(s.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"homecontainer"},r.a.createElement("div",{className:"home"},a&t?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"Search_form",onSubmit:h},r.a.createElement("input",{value:f,onChange:g,type:"text",placeholder:"Search Test Case",maxLength:20})),r.a.createElement("div",{className:"showingTestcase"},l.map(function(e){return r.a.createElement(N,{key:e.id,TestCaseObj:e,isOwner:e.creatorId===t.uid})}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:h},r.a.createElement("input",{className:"Search",value:f,onChange:g,type:"text",placeholder:"Search Test Case",maxLength:20})),l.map(function(e){return r.a.createElement(N,{key:e.id,TestCaseObj:e,isOwner:!1})}))))},C=a(33),w=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),u=c[0],l=c[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),b=p[0],d=p[1],f=Object(n.useState)(""),E=Object(i.a)(f,2),h=E[0],O=E[1],j=Object(n.useState)(""),x=Object(i.a)(j,2),N=x[0],y=x[1],w=function(){var e=Object(s.a)(o.a.mark(function e(a){var n,r,c,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""===N){e.next=10;break}return r=g.ref().child("".concat(t.uid,"/").concat(Object(C.v4)())),e.next=6,r.putString(N,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:n=e.sent;case 10:return s={createdAt:Date.now(),ProblemNum:b,text:u,result:h,name:t.displayName,creatorId:t.uid,attachmentUrl:n},e.next=13,v.collection("TestCase").add(s);case 13:l(""),y(""),d(""),O("");case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{className:"changenameform",onSubmit:w},r.a.createElement("input",{className:"testcase_button add",type:"submit",value:"ADD"}),r.a.createElement("input",{value:b,onChange:function(e){var t=e.target.value;d(t)},type:"text",placeholder:"problem number",maxLength:15}),r.a.createElement("div",{className:"wrapinput"},r.a.createElement("textarea",{value:u,onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Add test case",maxLength:400}),r.a.createElement("textarea",{value:h,onChange:function(e){var t=e.target.value;O(t)},type:"text",placeholder:"Result",maxLength:400}))))},S=function(e){var t=e.refreshUser,a=e.userObj,c=Object(p.g)(),u=Object(n.useState)([]),l=Object(i.a)(u,2),m=l[0],d=l[1],f=Object(n.useState)(a.displayName),g=Object(i.a)(f,2),h=g[0],O=g[1],y=function(){var e=Object(s.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("TestCase").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:t=e.sent,n=t.docs.map(function(e){return Object(b.a)({id:e.id},e.data())}),d(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===h){e.next=5;break}return e.next=4,a.updateProfile({displayName:h});case 4:t();case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){y()},[]);var S=Object(n.useState)(!1),k=Object(i.a)(S,2),L=k[0],P=k[1],T=function(){return P(function(e){return!e})},D=Object(n.useState)(!1),I=Object(i.a)(D,2),_=I[0],A=I[1],F=function(){return A(function(e){return!e})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},L?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"testcase_button",onClick:T},r.a.createElement(x.a,{icon:j.d})),r.a.createElement(w,{userObj:a})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Name"},a.displayName),r.a.createElement("form",{className:"changenameform",onSubmit:C},r.a.createElement("input",{className:"ChangeName",value:h,onChange:function(e){var t=e.target.value;O(t)},type:"text",placeholder:"Display name",maxLength:20}),r.a.createElement("input",{className:"testcase_button",type:"submit",value:"Update Display Name"})),r.a.createElement("button",{className:"testcase_button ADDTESTCASE",onClick:T},r.a.createElement(x.a,{icon:j.b}),"\xa0Add Test Case\xa0",r.a.createElement(x.a,{icon:j.b}))),r.a.createElement("div",null,_?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"testcase_button",onClick:F},"Done"),m.map(function(e){return r.a.createElement(N,{key:e.id,TestCaseObj:e,isOwner:e.creatorId===a.uid})})):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"testcase_button logout",onClick:F},"Manage your Test Cases - Edit or Delete"))),r.a.createElement("button",{className:"testcase_button logout",onClick:function(){E.signOut(),c.push("/"),t()}},r.a.createElement(x.a,{icon:j.c}),"\xa0Log Out")))},k=function(){var e=function(){var e=Object(s.a)(o.a.mark(function e(t){var a,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new f.auth.GoogleAuthProvider:"github"===a&&(n=new f.auth.GithubAuthProvider),console.log(n),e.next=5,E.signInWithPopup(n);case 5:r=e.sent,console.log(r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:e,name:"google",className:"google btn"},"Google"),r.a.createElement("button",{onClick:e,name:"github",className:"github btn"},"Github"))))},L=function(e){var t=e.isLoggedIn;return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("div",{className:"navigation"},r.a.createElement("li",null,t?r.a.createElement(m.b,{to:"/Profile",className:"link add"}," ",r.a.createElement(x.a,{icon:j.b})," Add TestCase"):r.a.createElement("div",{className:"navLogin"},r.a.createElement(k,null))),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/",className:"link"},"Home")))))},P=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement("div",{className:"router"},r.a.createElement(m.a,null,r.a.createElement(L,{userObj:n,isLoggedIn:a}),r.a.createElement(p.d,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(y,{userObj:n,isLoggedIn:a})),r.a.createElement(p.b,{exact:!0,path:"/Profile"},r.a.createElement(S,{userObj:n,refreshUser:t})),r.a.createElement(p.a,{from:"*",to:"/"})))))};var T=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),m=l[0],p=l[1],b=Object(n.useState)(null),d=Object(i.a)(b,2),f=d[0],v=d[1];Object(n.useEffect)(function(){E.onAuthStateChanged(function(e){e?(p(!0),v({displayName:e.displayName,photoURL:e.photoURL,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):p(!1),c(!0)})},[]);var g=function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.currentUser;case 2:(t=e.sent)?v({displayName:t.displayName,photoURL:t.photoURL,uid:t.uid,updateProfile:function(e){return t.updateProfile(e)}}):p(!1);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(P,{refreshUser:g,isLoggedIn:m,userObj:f}):r.a.createElement("div",{className:"Initializing"},'"Wait for a while..."'),r.a.createElement("footer",null,"Problem from B.O.J",r.a.createElement("br",null)," ","\xa9 ",(new Date).getFullYear()," Youseop"))};a(58);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b72ff6a5.chunk.js.map