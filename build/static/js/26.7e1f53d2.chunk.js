(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{342:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(924);t.a=function(e){var t=e.type,a=e.message,n=e.desc,o=void 0===n?"":n;return r.a.createElement(c.a,{message:a,description:o,type:t,showIcon:!0})}},351:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"e",function(){return m}),a.d(t,"i",function(){return f}),a.d(t,"c",function(){return h}),a.d(t,"f",function(){return y}),a.d(t,"h",function(){return E}),a.d(t,"g",function(){return v}),a.d(t,"d",function(){return g}),a.d(t,"b",function(){return b});var n=a(62),r=a.n(n),c=a(78),o=a(75),s=a.n(o),u=a(89),i=a(11),l=a(79),p=a(143),d=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,d,m,f,h;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.e}),c=n(),o=c.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.post("".concat(l.a,"order/"),e,d);case 6:m=t.sent,f=m.data,a({type:i.g,payload:f}),a({type:u.b,payload:f}),localStorage.removeItem("cartItems"),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(0),"Not authorized, token failed"===(h=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:i.d,payload:h});case 18:case"end":return t.stop()}},t,null,[[0,13]])}));return function(e,a){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,u,d,m,f;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.p}),c=n(),o=c.userLogin.userInfo,u={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.get("".concat(l.a,"order/").concat(e),u);case 6:d=t.sent,m=d.data,a({type:i.q,payload:m}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(f=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:i.o,payload:f});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n,c){var o,u,d,m,f,h;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:i.C}),o=c(),u=o.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.token)}},a.next=6,s.a.put("".concat(l.a,"order/").concat(e,"/pay"),t,d);case 6:m=a.sent,f=m.data,n({type:i.E,payload:f}),a.next=16;break;case 11:a.prev=11,a.t0=a.catch(0),"Not authorized, token failed"===(h=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message)&&n(Object(p.g)()),n({type:i.B,payload:h});case 16:case"end":return a.stop()}},a,null,[[0,11]])}));return function(e,t){return a.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,u,d,m,f;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.l}),c=n(),o=c.userLogin.userInfo,u={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.put("".concat(l.a,"order/").concat(e,"/deliver"),{},u);case 6:d=t.sent,m=d.data,a({type:i.n,payload:m}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(f=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:i.k,payload:f});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,u,d,m,f;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.t}),c=n(),o=c.userLogin.userInfo,u={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.get("".concat(l.a,"order/userorder/").concat(e),u);case 6:d=t.sent,m=d.data,a({type:i.v,payload:m}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(f=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:i.s,payload:f});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},E=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c,o,u,d,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.z}),n=a(),c=n.userLogin.userInfo,o={headers:{Authorization:"Bearer ".concat(c.token)}},e.next=6,s.a.get("".concat(l.a,"order/findall"),o);case 6:u=e.sent,d=u.data,t({type:i.A,payload:d}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),"Not authorized, token failed"===(m=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message)&&t(Object(p.g)()),t({type:i.r,payload:m});case 16:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c,o,u,d,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.x}),n=a(),c=n.userLogin.userInfo,o={headers:{Authorization:"Bearer ".concat(c.token)}},e.next=6,s.a.get("".concat(l.a,"order/findall?new=true"),o);case 6:u=e.sent,d=u.data,t({type:i.y,payload:d}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),"Not authorized, token failed"===(m=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message)&&t(Object(p.g)()),t({type:i.w,payload:m});case 16:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c,o,u,d,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.b}),n=a(),c=n.userLogin.userInfo,o={headers:{Authorization:"Bearer ".concat(c.token)}},e.next=6,s.a.get("".concat(l.a,"order/income"),o);case 6:u=e.sent,d=u.data,t({type:i.c,payload:d}),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),"Not authorized, token failed"===(m=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message)&&t(Object(p.g)()),t({type:i.a,payload:m});case 16:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,u,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.i}),c=n(),o=c.userLogin.userInfo,u={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.delete("".concat(l.a,"order/delete/").concat(e),u);case 6:a({type:i.j}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),"Not authorized, token failed"===(d=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:i.h,payload:d});case 14:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}()}},496:function(e,t,a){"use strict";a(831)},797:function(e,t,a){},900:function(e,t,a){"use strict";a.r(t);var n=a(62),r=a.n(n),c=a(78),o=a(20),s=a(0),u=a.n(s),i=(a(796),a(23)),l=a(96),p=a(66),d=a(904),m=a(351),f=(a(33),a(11)),h=(a(5),a(342)),y=(a(123),a(797),a(75)),E=a.n(y),v=a(799),g=a.n(v),b=(a(496),a(141)),k=a(79),O=Object({NODE_ENV:"production",PUBLIC_URL:".",REACT_APP_API_URL:"http://141.136.42.247/api/v1/",REACT_APP_JPOSH_STRIPE_KEY:"pk_live_51KkYBBHNYyrX0QYlAV3uJuPbVqPhiKNP4FUZ5wWMTGqM08LgKqsN3ocjPUewXHTAc3Agkdn7aki9lca555YUmagI00AELyHwH4",REACT_APP_JPOSH_STRIPE_TEST_KEY:"pk_test_51KkYBBHNYyrX0QYlMhhfex00qTSQ5DEMdhf0BeIne63OVskuZZaNrwxKomGdbNW50Kl6hYoujPask3HWgJnQNJUd00goKZX6Vr"}),N=O.REACT_APP_JPOSH_STRIPE_KEY,x=(O.NODE_ENV,N);t.default=function(){var e,t=Object(i.b)(),a=(Object(l.f)(),Object(s.useState)()),n=Object(o.a)(a,2),y=n[0],v=n[1],O=Object(l.g)().id,N=Object(s.useState)(!1),w=Object(o.a)(N,2),j=w[0],P=w[1],I=(Object(i.c)(function(e){return e.orderCreate}),Object(i.c)(function(e){return e.userLogin})),A=Object(i.c)(function(e){return e.cart}),_=(Object(i.c)(function(e){return e.orderPay}),Object(i.c)(function(e){return e.orderDelivery}),Object(i.c)(function(e){return e.orderDetails})),T=_.loading,z=_.order,B=_.error,L=I.userInfo;A.itemsPrice=(e=A.cartItems.reduce(function(e,t){return e+t.price*t.qty},0),(Math.round(100*e)/100).toFixed(2)),A.itemsNumber=A.cartItems.length,A.totalPrice=Number(A.itemsPrice).toFixed(2);Object(s.useEffect)(function(){var e=function(){var e=Object(c.a)(r.a.mark(function e(){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a={"Content-Type":"application/json"},!y){e.next=4;break}return e.next=4,E.a.post("".concat(k.a,"checkout/payment"),{headers:a,stripeToken:y,amount:z.totalPrice,product:z.orderItems}).then(function(e){if(!e)return u.a.createElement(b.a,null);200===e.status&&(t(Object(m.i)(O,e)),P(!0),d.a.info({title:"Payment succesfull",content:u.a.createElement("div",null,u.a.createElement("p",null,"Order has been created successfully. Your order number is ",u.a.createElement("span",{style:{color:"#1890ff"}},O)),u.a.createElement("p",null,"Thanks for shopping with us.")),onOk:function(){}}))}).catch(function(e){throw new Error(e)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();z&&z._id===O?z.isPaid||e():(t({type:f.D}),t({type:f.m}),t(Object(m.e)(O)))},[y,z,t,O]);return u.a.createElement("main",{className:"palce-order-container"},T&&u.a.createElement(b.a,null),B&&u.a.createElement(h.a,{type:"error",message:"Something went wrong! Check your connection"}),u.a.createElement("div",{className:"place-order-inner-cont"},u.a.createElement("div",{className:"place-order-inner-left"},u.a.createElement("div",{className:"place-order-title"},u.a.createElement("h2",null,"ORDER: ",O)),u.a.createElement("div",{className:"review-box"},u.a.createElement("div",{className:"box-det"},u.a.createElement("h3",null,"SHIPPING"),u.a.createElement("div",{className:"box-item"},u.a.createElement("h4",null,"Name : ",u.a.createElement("span",null,L&&L.name))),u.a.createElement("div",{className:"box-item"},u.a.createElement("h4",null,"Email : ",u.a.createElement("span",null,L&&L.email))),u.a.createElement("div",{className:"box-item"},u.a.createElement("h4",null,"Address :",u.a.createElement("span",null,A&&A.shippingAddress.address,", ",A&&A.shippingAddress.city," ",A&&A.shippingAddress.postalCode,","," ",A&&A.shippingAddress.country)),u.a.createElement("div",null,z&&j?u.a.createElement("div",null," ",u.a.createElement(h.a,{type:"success",message:"Payment succesfull"}),u.a.createElement(p.b,{to:"/my-orders"},u.a.createElement("button",{className:"view-order-btn"},"View Your Orders"))):u.a.createElement(h.a,{type:"error",message:"Not yet paid"})))),u.a.createElement("hr",null),u.a.createElement("div",{className:"box-det"},u.a.createElement("h3",null,"PAYMENT METHOD"),u.a.createElement("div",{className:"box-item"},A&&A.paymentMethod?u.a.createElement("h4",null,"Method : ",u.a.createElement("span",null,A.paymentMethod)):u.a.createElement(p.b,{to:"/payment"},u.a.createElement("h4",null,"Click to select a payment method")))),u.a.createElement("hr",null),u.a.createElement("div",{className:"box-det"},u.a.createElement("h3",null,"ORDER ITEMS"),z&&z.orderItems.map(function(e){return u.a.createElement("div",{className:"ordeItems",key:e._id},u.a.createElement("img",{src:e.image,alt:e.name}),u.a.createElement("div",null,u.a.createElement("h4",null,e.name)),u.a.createElement("div",null,u.a.createElement("h4",null," ","".concat(e.qty," x ").concat(e.price)," = ",e.qty*e.price," ")))})))),u.a.createElement("div",{className:"place-order-inner-right"},u.a.createElement("div",{className:"place-order-title"},u.a.createElement("h3",null,"ORDER SUMMARY")),u.a.createElement("hr",null),u.a.createElement("div",{className:"order-review-box"},u.a.createElement("h4",null,"Total Itmes")," ",u.a.createElement("span",null,z&&z.orderItems.length)),u.a.createElement("hr",null),u.a.createElement("div",{className:"order-review-box"},u.a.createElement("h4",null,"Total Price")," ",u.a.createElement("span",null,z&&z.totalPrice)),z&&u.a.createElement("div",{className:"card"},u.a.createElement(g.a,{name:"JPOSH COLLECTIONS",description:"Your total is \xa3 ".concat(z&&z.totalPrice," proceed to payment"),amount:z&&100*z.totalPrice,token:function(e){v(e)},stripeKey:x,currency:"GBP"},u.a.createElement("button",{className:"placeorder-btn"},"Make Payment"))))))}}}]);
//# sourceMappingURL=26.7e1f53d2.chunk.js.map