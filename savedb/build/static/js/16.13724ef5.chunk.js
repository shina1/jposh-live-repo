(window.webpackJsonp=window.webpackJsonp||[]).push([[16,26],{333:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(337);t.a=function(e){var t=e.section;return r.a.createElement("div",{className:"divider"},r.a.createElement("div",{className:"left-line"}),r.a.createElement("p",null,t),r.a.createElement("div",{className:"right-line"}))}},334:function(e,t,a){"use strict";a.d(t,"c",function(){return d}),a.d(t,"f",function(){return p}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return f}),a.d(t,"a",function(){return g}),a.d(t,"g",function(){return v}),a.d(t,"b",function(){return E});var n=a(21),r=a.n(n),c=a(42),o=a(41),s=a.n(o),i=a(15),l=a(43),u=a(110),d=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.v}),e.next=4,s.a.get("".concat(l.a,"products/"));case 4:a=e.sent,n=a.data,t({type:i.w,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.s}),t.next=4,s.a.get("".concat(l.a,"products/find/").concat(e));case 4:n=t.sent,c=n.data,a({type:i.t,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:i.r,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.b}),e.next=4,s.a.get("".concat(l.a,"products/porpular"));case 4:a=e.sent,n=a.data,t({type:i.c,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.a,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.e}),t.next=4,s.a.get(e?"".concat(l.a,"products?category=").concat(e.toLowerCase()):"".concat(l.a,"products"));case 4:n=t.sent,c=n.data,a({type:i.f,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:i.d,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,d,p,m,f;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.h}),c=n(),o=c.userLogin.userInfo,d={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.post("".concat(l.a,"products/"),e,d);case 6:p=t.sent,m=p.data,a({type:i.n,payload:m}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(f=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(u.g)()),a({type:i.g,payload:f});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n,c){var o,d,p,m,f,g;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:i.B}),o=c(),d=o.userLogin.userInfo,p={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},a.next=6,s.a.put("".concat(l.a,"products/edit/").concat(t),e,p);case 6:m=a.sent,f=m.data,n({type:i.D,payload:f}),n({type:i.t,payload:f}),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(0),"Not authorized, token failed"===(g=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message)&&n(Object(u.g)()),n({type:i.A,payload:g});case 17:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e,t){return a.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,o,d,p;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.p}),c=n(),o=c.userLogin.userInfo,d={headers:{Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.delete("".concat(l.a,"products/delete/").concat(e),d);case 6:a({type:i.q}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),"Not authorized, token failed"===(p=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(u.g)()),a({type:i.o,payload:p});case 14:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}()}},337:function(e,t,a){},338:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(330);t.a=function(e){var t=e.type,a=e.message,n=e.desc,o=void 0===n?"":n;return r.a.createElement(c.a,{message:a,description:o,type:t,showIcon:!0})}},339:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n,r,c,o,s,i,l=a(22),u=a(413),d=a(0),p=a.n(d),m=a(23),f=a(333),g=a(48),v=m.a.div(n||(n=Object(l.a)(["\n    height: 60vh;\n    background-color: lightgrey;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    @media "," {\n        width: 100%;\n        text-align: center;\n        padding: 5px 10px;\n    }\n"])),g.a.mobileL),E=m.a.p(r||(r=Object(l.a)(["\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 20px;\n"]))),y=m.a.input(c||(c=Object(l.a)(["\npadding:5px 10px 5px 20px;\nborder: none;\nflex: 8;\nheight: 60%;\nborder-radius: 10px;\nfont-size: 15px;\ncolor: grey;\nfont-weight: 600;\n\n\n@media "," {\n    width: 100%;\n    margin: 5px auto;\n    padding: 10px;\n}\n"])),g.a.mobileL),b=m.a.div(o||(o=Object(l.a)(["\npadding: 10px;\nmargin:10px;\nwidth: 50%;\nheight: 15vh;\ndisplay: flex;\njustify-content: space-between;\nborder: 1px solid lightgrey;\nborder-radius: 10px;\nalign-items: center;\n\n@media "," {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n"])),g.a.mobileL),h=m.a.button(s||(s=Object(l.a)(["\npadding: 5px 10px;\nborder: 1px solid #C09621;\nbackground: transparent;\nflex: 2;\nheight: 60%;\nmargin: 0 10px;\nborder-radius: 10px;\ncursor: pointer;\n\n\n@media "," {\n    width: 50%;\n    margin: 5px auto;\n}\n"])),g.a.mobileL),x=m.a.div(i||(i=Object(l.a)(["\nmargin:50px auto\n"])));t.default=function(){return p.a.createElement(x,null,p.a.createElement(f.a,{section:"NEWS LETTER"}),p.a.createElement(v,null,p.a.createElement(E,null,"Get timely update from your favorite products."),p.a.createElement(b,null,p.a.createElement(y,{type:"text",placeholder:"Enter your email address"}),p.a.createElement(h,null,p.a.createElement(u.a,null)))))}},358:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(25),o=a(109),s=a(824),i=a(385),l=a.n(i),u=function(e){var t=e.value,a=e.text;e.color;return r.a.createElement("div",{className:"star-group"},r.a.createElement("span",null,t>=1?r.a.createElement(s.a,null):t>=.5?r.a.createElement(l.a,null):r.a.createElement(s.a,null)),r.a.createElement("span",null,t>=2?r.a.createElement(s.a,null):t>=1.5?r.a.createElement(l.a,null):r.a.createElement(s.a,null)),r.a.createElement("span",null,t>=3?r.a.createElement(s.a,null):t>=2.5?r.a.createElement(l.a,null):r.a.createElement(s.a,null)),r.a.createElement("span",null,t>=4?r.a.createElement(s.a,null):t>=3.5?r.a.createElement(l.a,null):r.a.createElement(s.a,null)),r.a.createElement("span",null,t>=5?r.a.createElement(s.a,null):t>=4.5?r.a.createElement(l.a,null):r.a.createElement(s.a,null)),r.a.createElement("span",null,a&&a))};u.defaultProps={color:"#f8e825"};var d=u;a(339),t.a=function(e){var t=e.product;return r.a.createElement("div",{className:"popularProduct-container"},t?r.a.createElement("div",{className:"productWrapper"},r.a.createElement("div",{className:"prod-img-wrapper"},r.a.createElement(c.b,{to:"/product/".concat(t._id)},r.a.createElement("img",{src:t.img,alt:"Popular Products"}))),r.a.createElement("div",{className:"productWrapper-footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"ratings"},r.a.createElement("div",null,r.a.createElement(d,{value:t.avgRating}))),r.a.createElement("div",{className:"reviews"},r.a.createElement("span",null,t.numReviews," reviews"))),r.a.createElement("div",{className:"product-details-foot"},r.a.createElement("div",{className:"foot-prod-name"},r.a.createElement("h4",null,t.title)),t.discount?r.a.createElement("div",{className:"foot-prod-price disc-price"},r.a.createElement("h4",null,"\xa3",t.price)," ",r.a.createElement("h4",null,"\xa3",t.discoutPrice)):r.a.createElement("div",{className:"foot-prod-price"},r.a.createElement("h4",null,"\xa3",t.price))))):r.a.createElement("div",{className:"loader-box"},r.a.createElement(o.a,null)))}},365:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return p}),a.d(t,"c",function(){return m});var n=a(21),r=a.n(n),c=a(42),o=a(41),s=a.n(o),i=a(60),l=a(43),u=function(e,t,a,n){return function(){var o=Object(c.a)(r.a.mark(function c(o,u){var d,p;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.get("".concat(l.a,"products/find/").concat(e));case 2:d=r.sent,p=d.data,o({type:i.a,payload:{product:p._id,name:p.title,desc:p.desc,image:p.img,discount:p.discount,discoutPrice:p.discoutPrice,price:p.price,category:p.category,size:n,color:a,countInStock:p.countInStock,reviews:p.reviews,qty:t,vat:p.price*t*.2,total:p.discount?p.discoutPrice*t+p.discoutPrice*t*.2:p.price*t+p.price*t*.2}}),localStorage.setItem("cartItems",JSON.stringify(u().cart.cartItems));case 6:case"end":return r.stop()}},c)}));return function(e,t){return o.apply(this,arguments)}}()},d=function(e){return function(t,a){t({type:i.c,payload:e}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems))}},p=function(e){return function(t){t({type:i.e,payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e))}},m=function(e){return function(t){t({type:i.d,payload:e}),localStorage.setItem("paymentMethod",JSON.stringify(e))}}},384:function(e,t,a){"use strict";a.r(t);var n,r=a(22),c=(a(41),a(0)),o=a.n(c),s=a(59),i=a(23),l=a(358),u=a(334),d=a(333),p=a(109),m=a(338),f=(a(339),i.a.div(n||(n=Object(r.a)(["\nmargin: 100px auto;\nwidth: 100%;\n"]))));t.default=function(e){e.category;var t=Object(s.b)(),a=Object(s.c)(function(e){return e.porpularProducts}),n=a.loading,r=a.error,i=a.products;return Object(c.useEffect)(function(){t(Object(u.d)())},[t]),o.a.createElement(f,null,o.a.createElement(d.a,{section:"PORPULAR PRODUCTS"}),n&&o.a.createElement("div",{className:"loader-box"},o.a.createElement(p.a,null)),r&&o.a.createElement(m.a,{type:"error",message:"something went wrong!"}),o.a.createElement("div",{className:"productContainer"},i?i.map(function(e){return o.a.createElement(l.a,{product:e,key:e._id})}):o.a.createElement("div",{className:"loader-box"},o.a.createElement(p.a,null))))}},588:function(e,t,a){},643:function(e,t,a){},875:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(0),c=a.n(r),o=a(790),s=(a(119),a(115),a(352)),i=a(384),l=(a(588),a(644)),u=a(645),d=a(10),p=(a(43),a(59)),m=a(789),f=Object(m.a)({name:"cart",initialState:{products:[],quantity:0,total:0},reducers:{addProduct:function(e,t){e.quantity+=1,e.products.push(t.payload),e.total+=t.payload.price*t.payload.quantity}}}),g=(f.actions.addProduct,f.reducer,a(334)),v=a(365),E=a(589),y=(a(643),function(e,t,a){var n=[{image:e.mainImage},{image:e.frontImage},{image:e.backImage}];return c.a.createElement("div",{className:"single-product-review-carousel-container"},c.a.createElement("div",null,c.a.createElement(E.Carousel,{data:n,automatic:!1,dots:!0,pauseIconColor:"white",pauseIconSize:"40px",slideBackgroundColor:"white",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"100%"})))}),b=a(338),h=a(109);t.default=function(){var e=Object(d.e)().pathname.split("/")[2],t=Object(r.useState)(1),a=Object(n.a)(t,2),m=a[0],f=a[1],E=Object(r.useState)(""),x=Object(n.a)(E,2),w=x[0],O=x[1],j=Object(r.useState)(""),N=Object(n.a)(j,2),k=N[0],I=N[1],S=Object(p.b)(),C=Object(p.c)(function(e){return e.productDetails}),P=(Object(p.c)(function(e){return e.cart}),C.loading),z=C.product,L=C.error;Object(r.useEffect)(function(){S(Object(g.f)(e))},[S,e]);var A=function(e){"inc"===e?f(m+1):m>1&&f(m-1)};return Object(r.useEffect)(function(){window.scrollTo(0,0)},[e]),c.a.createElement("div",{className:"single-product-container"},L&&c.a.createElement(b.a,{type:"error",message:"Failed to load, check your connection!"}),P&&c.a.createElement(h.a,null),z?c.a.createElement("section",{className:"single-product-inner-container"},c.a.createElement("div",{className:"image-cont"},z&&c.a.createElement(y,{mainImage:z.img,frontImage:z.img,backImage:z.img}),z.video&&c.a.createElement("video",{controls:!0,autoPlay:!0,muted:!0,playsInline:!0},c.a.createElement("source",{src:z.video}))),c.a.createElement("div",{className:"product-desc"},c.a.createElement("h2",null,z.title),c.a.createElement("p",null,z.desc),c.a.createElement("h3",null,"\xa3 ",z.discount?z.discoutPrice:z.price,".00"),c.a.createElement("div",{className:"filter-cotainer"},c.a.createElement("div",{className:"color-filter filter-box"},c.a.createElement("select",{onChange:function(e){return O(e.target.value)}},c.a.createElement("option",{disabled:!0,selected:!0},"color"),z.color&&z.color.map(function(e){return c.a.createElement("option",{value:e,key:e},e)}))),c.a.createElement("div",{className:"size-filter filter-box"},c.a.createElement("select",{onChange:function(e){return I(e.target.value)}},c.a.createElement("option",{disabled:!0,selected:!0},"Size"),z.size&&z.size.map(function(e){return c.a.createElement("option",{value:e,key:e},e)})))),c.a.createElement("div",{className:"addContainer"},c.a.createElement("div",{className:"amount-container"},c.a.createElement(l.a,{onClick:function(){return A("dec")}}),c.a.createElement("span",{className:"amount"},m),c.a.createElement(u.a,{onClick:function(){return A("inc")}})),c.a.createElement("button",{className:"add-to-cart",onClick:function(){return t="success",S(Object(v.a)(e,m,w,k)),void o.a[t]({message:"SUCCCESS",duration:1,description:"Item added to cart. Proceed to payment or continue shopping!"});var t}},"ADD TO CART")))):c.a.createElement(h.a,null),c.a.createElement(i.default,null),c.a.createElement(s.default,null))}}}]);
//# sourceMappingURL=16.13724ef5.chunk.js.map