(this.webpackJsonpmicard=this.webpackJsonpmicard||[]).push([[0],{65:function(n,t,e){"use strict";e.r(t);var c,a,o,i,r,l,s,d=e(0),u=e.n(d),h=e(32),p=e.n(h),b=e(13),f=e(2),j=e(8),x=e(9),g=e(15),O=e.n(g),m=e(18),v=e(21),w=e(33),y=e.n(w),k=e(1),C=x.a.div(c||(c=Object(j.a)(["\n  width: 250px;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.3);\n"]))),N=function(){var n=Object(d.useState)(!1),t=Object(v.a)(n,2),e=(t[0],t[1]),c=Object(d.useState)(null),a=Object(v.a)(c,2),o=(a[0],a[1]),i=Object(f.f)(),r=function(){var n=Object(m.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("http://localhost:5000/api/v1/auth/user",{withCredentials:!0}).catch((function(n){console.log("Not properly authenticated"),e(!1),o(null)}));case 2:(t=n.sent)&&t.data&&(console.log("User: ",t.data),e(!0),o(t.data),i.push("/welcome"));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=Object(m.a)(O.a.mark((function n(){var t,e;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=null,"http://localhost:5000/api/v1/login/google",(e=window.open("http://localhost:5000/api/v1/login/google","_blank","width=500,height=600"))&&(t=setInterval((function(){e.closed&&(console.log("Yay!!! We are authenticated!"),r(),t&&clearInterval(t))}),500));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(k.jsx)(b.b,{onClick:l,style:{color:"white",fontSize:"18px",fontFamily:"Nunito",fontWeight:"bold",textDecoration:"none",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"},children:Object(k.jsx)(C,{children:"Login"})})},S=x.a.div(a||(a=Object(j.a)(["\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(45deg, #733BC3 30%, #C64156 90%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),I=x.a.h1(o||(o=Object(j.a)(["\n  color: #fff;\n  font-family: 'Nunito';\n  padding-bottom: 15px;\n"]))),B=x.a.div(i||(i=Object(j.a)(["\n  width: 50vw;\n  height: 60vh;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),W=x.a.p(r||(r=Object(j.a)(["\n  color: #fff;\n  font-family: 'Nunito';\n  font-size: 18px;\n  text-align: center;\n  padding-bottom: 15px;\n"]))),z=function(){return Object(k.jsxs)(S,{children:[Object(k.jsx)(I,{children:"Welcome to MICard"}),Object(k.jsxs)(B,{children:[Object(k.jsx)(W,{children:" Please login to access our site"}),Object(k.jsx)(N,{})]})]})},J=x.a.div(l||(l=Object(j.a)(["\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(45deg, #733BC3 30%, #C64156 90%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),M=x.a.h1(s||(s=Object(j.a)(["\n  color: #fff;\n  font-family: 'Nunito';\n  padding-bottom: 15px;\n"]))),D=function(){return Object(k.jsx)(J,{children:Object(k.jsx)(M,{children:"Thanks for logging in."})})};var E=function(){return Object(k.jsxs)(f.c,{children:[Object(k.jsx)(f.a,{exact:!0,path:"/",component:z}),Object(k.jsx)(f.a,{path:"/welcome",component:D})]})};p.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(b.a,{basename:"/micardwebapp",children:Object(k.jsx)(E,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a17d4dfb.chunk.js.map