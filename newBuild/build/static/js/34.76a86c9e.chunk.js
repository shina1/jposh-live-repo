(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{336:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(340);t.a=function(e){var t=e.section;return r.a.createElement("div",{className:"divider"},r.a.createElement("div",{className:"left-line"}),r.a.createElement("p",null,t),r.a.createElement("div",{className:"right-line"}))}},337:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"f",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return f}),a.d(t,"a",function(){return v}),a.d(t,"g",function(){return E}),a.d(t,"b",function(){return g});var n=a(62),r=a.n(n),c=a(78),s=a(75),o=a.n(s),u=a(14),l=a(79),p=a(143),i=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u.v}),e.next=4,o.a.get("".concat(l.a,"products/"));case 4:a=e.sent,n=a.data,t({type:u.w,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:u.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.s}),t.next=4,o.a.get("".concat(l.a,"products/find/").concat(e));case 4:n=t.sent,c=n.data,a({type:u.t,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.r,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:u.b}),e.next=4,o.a.get("".concat(l.a,"products/porpular"));case 4:a=e.sent,n=a.data,t({type:u.c,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:u.a,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.e}),t.next=4,o.a.get(e?"".concat(l.a,"products?category=").concat(e.toLowerCase()):"".concat(l.a,"products"));case 4:n=t.sent,c=n.data,a({type:u.f,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:u.d,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,s,i,d,m,f;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.h}),c=n(),s=c.userLogin.userInfo,i={headers:{Authorization:"Bearer ".concat(s.token)}},t.next=6,o.a.post("".concat(l.a,"products/"),e,i);case 6:d=t.sent,m=d.data,a({type:u.n,payload:m}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(f=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:u.g,payload:f});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},E=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n,c){var s,i,d,m,f,v;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:u.B}),s=c(),i=s.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},a.next=6,o.a.put("".concat(l.a,"products/edit/").concat(t),e,d);case 6:m=a.sent,f=m.data,n({type:u.D,payload:f}),n({type:u.t,payload:f}),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(0),"Not authorized, token failed"===(v=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message)&&n(Object(p.g)()),n({type:u.A,payload:v});case 17:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e,t){return a.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,s,i,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:u.p}),c=n(),s=c.userLogin.userInfo,i={headers:{Authorization:"Bearer ".concat(s.token)}},t.next=6,o.a.delete("".concat(l.a,"products/delete/").concat(e),i);case 6:a({type:u.q}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),"Not authorized, token failed"===(d=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(p.g)()),a({type:u.o,payload:d});case 14:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}()}},340:function(e,t,a){},342:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(924);t.a=function(e){var t=e.type,a=e.message,n=e.desc,s=void 0===n?"":n;return r.a.createElement(c.a,{message:a,description:s,type:t,showIcon:!0})}},343:function(e,t,a){},364:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(66),s=a(141),o=a(865),u=a(391),l=a.n(u),p=function(e){var t=e.value,a=e.text;e.color;return r.a.createElement("div",{className:"star-group"},r.a.createElement("span",null,t>=1?r.a.createElement(o.a,null):t>=.5?r.a.createElement(l.a,null):r.a.createElement(o.a,null)),r.a.createElement("span",null,t>=2?r.a.createElement(o.a,null):t>=1.5?r.a.createElement(l.a,null):r.a.createElement(o.a,null)),r.a.createElement("span",null,t>=3?r.a.createElement(o.a,null):t>=2.5?r.a.createElement(l.a,null):r.a.createElement(o.a,null)),r.a.createElement("span",null,t>=4?r.a.createElement(o.a,null):t>=3.5?r.a.createElement(l.a,null):r.a.createElement(o.a,null)),r.a.createElement("span",null,t>=5?r.a.createElement(o.a,null):t>=4.5?r.a.createElement(l.a,null):r.a.createElement(o.a,null)),r.a.createElement("span",null,a&&a))};p.defaultProps={color:"#f8e825"};var i=p;a(343),t.a=function(e){var t=e.product;return r.a.createElement("div",{className:"popularProduct-container"},t?r.a.createElement("div",{className:"productWrapper"},r.a.createElement("div",{className:"prod-img-wrapper"},r.a.createElement(c.b,{to:"/product/".concat(t._id)},r.a.createElement("img",{src:t.img,alt:"Popular Products"}))),r.a.createElement("div",{className:"productWrapper-footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"ratings"},r.a.createElement("div",null,r.a.createElement(i,{value:t.avgRating}))),r.a.createElement("div",{className:"reviews"},r.a.createElement("span",null,t.numReviews," reviews"))),r.a.createElement("div",{className:"product-details-foot"},r.a.createElement("div",{className:"foot-prod-name"},r.a.createElement("h4",null,t.title)),t.discount?r.a.createElement("div",{className:"foot-prod-price disc-price"},r.a.createElement("h4",null,"\xa3",t.price)," ",r.a.createElement("h4",null,"\xa3",t.discoutPrice)):r.a.createElement("div",{className:"foot-prod-price"},r.a.createElement("h4",null,"\xa3",t.price))))):r.a.createElement("div",{className:"loader-box"},r.a.createElement(s.a,null)))}},390:function(e,t,a){"use strict";a.r(t);var n,r=a(63),c=(a(75),a(0)),s=a.n(c),o=a(23),u=a(64),l=a(364),p=a(337),i=a(336),d=a(141),m=a(342),f=(a(343),u.a.div(n||(n=Object(r.a)(["\nmargin: 100px auto;\nwidth: 100%;\n"]))));t.default=function(e){e.category;var t=Object(o.b)(),a=Object(o.c)(function(e){return e.porpularProducts}),n=a.loading,r=a.error,u=a.products;return Object(c.useEffect)(function(){t(Object(p.d)())},[t]),s.a.createElement(f,null,s.a.createElement(i.a,{section:"PORPULAR PRODUCTS"}),n&&s.a.createElement("div",{className:"loader-box"},s.a.createElement(d.a,null)),r&&s.a.createElement(m.a,{type:"error",message:"something went wrong!"}),s.a.createElement("div",{className:"productContainer"},u?u.map(function(e){return s.a.createElement(l.a,{product:e,key:e._id})}):s.a.createElement("div",{className:"loader-box"},s.a.createElement(d.a,null))))}}}]);
//# sourceMappingURL=34.76a86c9e.chunk.js.map