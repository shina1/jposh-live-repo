(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{345:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(922);t.a=function(e){var t=e.type,a=e.message,n=e.desc,l=void 0===n?"":n;return r.a.createElement(c.a,{message:a,description:l,type:t,showIcon:!0})}},664:function(e,t,a){},865:function(e,t,a){"use strict";a.r(t);var n=a(58),r=a(0),c=a.n(r),l=a(85),u=a(50),o=a(22),s=a(345),i=a(134),m=a(135);a(664);t.default=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],p=t[1],d=Object(r.useState)(""),b=Object(n.a)(d,2),f=b[0],E=b[1],g=Object(r.useState)(""),v=Object(n.a)(g,2),h=v[0],O=v[1],j=Object(r.useState)(""),w=Object(n.a)(j,2),y=w[0],C=w[1],S=Object(r.useState)(null),I=Object(n.a)(S,2),N=I[0],q=I[1],R=Object(u.e)(),P=Object(l.b)(),k=Object(u.f)(),A=Object(l.c)(function(e){return e.userRegister}),J=A.loading,L=A.error,Y=A.userInfo,x=R.search?R.search.split("=")[1]:"/";Object(r.useEffect)(function(){Y&&k(x)},[k,Y,x]);return c.a.createElement("main",{className:"register-main-cont"},c.a.createElement("div",{className:"title-container"},c.a.createElement("h2",null,"Create a new account"),c.a.createElement("p",null,"Already have a account? ",c.a.createElement("span",null,c.a.createElement(o.b,{to:"/login"},"Login in")))),N&&c.a.createElement(s.a,{variant:"danger"}," ",N),L&&c.a.createElement(s.a,{variant:"danger"},L),J&&c.a.createElement(i.a,null),c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h!==y?q("Passwords do not match"):P(Object(m.h)(a,f,h))}},c.a.createElement("input",{type:"text",required:!0,placeholder:"fullname",value:a,onChange:function(e){return p(e.target.value)}}),c.a.createElement("input",{type:"email",required:!0,placeholder:"email",value:f,onChange:function(e){return E(e.target.value)}}),c.a.createElement("input",{type:"password",required:!0,placeholder:"password",value:h,onChange:function(e){return O(e.target.value)}}),c.a.createElement("input",{type:"password",required:!0,placeholder:"confirm password",value:y,onChange:function(e){return C(e.target.value)}}),c.a.createElement("span",{className:"agreement"},"By creating an account, I consent to the processing of my personal data in accordance with the ",c.a.createElement("b",null,c.a.createElement(o.b,{to:"/privacy"},"PRIVACY POLICY"))),c.a.createElement("button",{className:"register-btn",type:"submit"},"REGISTER"))))}}}]);
//# sourceMappingURL=13.6454606f.chunk.js.map