(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{341:function(e,t,a){"use strict";a.d(t,"c",function(){return d}),a.d(t,"f",function(){return m}),a.d(t,"d",function(){return p}),a.d(t,"e",function(){return v}),a.d(t,"a",function(){return f}),a.d(t,"g",function(){return h}),a.d(t,"b",function(){return b});var n=a(18),r=a.n(n),c=a(33),s=a(30),o=a.n(s),i=a(13),l=a(34),u=a(135),d=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.v}),e.next=4,o.a.get("".concat(l.a,"products/"));case 4:a=e.sent,n=a.data,t({type:i.w,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.s}),t.next=4,o.a.get("".concat(l.a,"products/find/").concat(e));case 4:n=t.sent,c=n.data,a({type:i.t,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:i.r,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.b}),e.next=4,o.a.get("".concat(l.a,"products/porpular"));case 4:a=e.sent,n=a.data,t({type:i.c,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.a,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.e}),t.next=4,o.a.get(e?"".concat(l.a,"products?category=").concat(e.toLowerCase()):"".concat(l.a,"products"));case 4:n=t.sent,c=n.data,a({type:i.f,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:i.d,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,s,d,m,p,v;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.h}),c=n(),s=c.userLogin.userInfo,d={headers:{Authorization:"Bearer ".concat(s.token)}},t.next=6,o.a.post("".concat(l.a,"products/"),e,d);case 6:m=t.sent,p=m.data,a({type:i.n,payload:p}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(v=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(u.g)()),a({type:i.g,payload:v});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n,c){var s,d,m,p,v,f;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:i.B}),s=c(),d=s.userLogin.userInfo,m={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},a.next=6,o.a.put("".concat(l.a,"products/edit/").concat(t),e,m);case 6:p=a.sent,v=p.data,n({type:i.D,payload:v}),n({type:i.t,payload:v}),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(0),"Not authorized, token failed"===(f=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message)&&n(Object(u.g)()),n({type:i.A,payload:f});case 17:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e,t){return a.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a,n){var c,s,d,m;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:i.p}),c=n(),s=c.userLogin.userInfo,d={headers:{Authorization:"Bearer ".concat(s.token)}},t.next=6,o.a.delete("".concat(l.a,"products/delete/").concat(e),d);case 6:a({type:i.q}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),"Not authorized, token failed"===(m=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(u.g)()),a({type:i.o,payload:m});case 14:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}()}},367:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=Object(r.a)(n.createElement("path",{d:"M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"}),"Storefront")},374:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=Object(r.a)(n.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}),"NotificationsNone")},67:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=Object(r.a)(n.createElement("path",{d:"M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"}),"LineStyle")},68:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=Object(r.a)(n.createElement("path",{d:"M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"}),"Timeline")},69:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=Object(r.a)(n.createElement("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp")},70:function(e,t,a){"use strict";var n=a(0),r=a(86);t.a=Object(r.a)(n.createElement("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PermIdentity")},74:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(0),r=a.n(n),c=(a(75),a(67)),s=a(68),o=a(69),i=a(70),l=a(367),u=a(22);function d(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebarWrapper"},r.a.createElement("div",{className:"sidebarMenu"},r.a.createElement("h3",{className:"sidebarTitle"},"Dashboard"),r.a.createElement("ul",{className:"sidebarList"},r.a.createElement(u.b,{to:"/admin-home",className:"link"},r.a.createElement("li",{className:"sidebarListItem active"},r.a.createElement(c.a,{className:"sidebarIcon"}),"Home")),r.a.createElement("li",{className:"sidebarListItem"},r.a.createElement(s.a,{className:"sidebarIcon"}),"Analytics"),r.a.createElement("li",{className:"sidebarListItem"},r.a.createElement(o.a,{className:"sidebarIcon"}),"Sales"))),r.a.createElement("div",{className:"sidebarMenu"},r.a.createElement("h3",{className:"sidebarTitle"},"Quick Menu"),r.a.createElement("ul",{className:"sidebarList"},r.a.createElement(u.b,{to:"/users",className:"link"},r.a.createElement("li",{className:"sidebarListItem"},r.a.createElement(i.a,{className:"sidebarIcon"}),"Users")),r.a.createElement(u.b,{to:"/dash-products",className:"link"},r.a.createElement("li",{className:"sidebarListItem"},r.a.createElement(l.a,{className:"sidebarIcon"}),"Products")),r.a.createElement(u.b,{to:"/dash-orders",className:"link"},r.a.createElement("li",{className:"sidebarListItem"},r.a.createElement(l.a,{className:"sidebarIcon"}),"Orders")),r.a.createElement(u.b,{to:"/",className:"link"},r.a.createElement("li",{className:"sidebarListItem"},r.a.createElement(l.a,{className:"sidebarIcon"}),"Main Page"))))))}},75:function(e,t,a){},77:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(0),r=a.n(n),c=(a(78),a(374));function s(){return r.a.createElement("div",{className:"topbar"},r.a.createElement("div",{className:"topbarWrapper"},r.a.createElement("div",{className:"topLeft"},r.a.createElement("span",{className:"logo"},"JPOSH ADMIN")),r.a.createElement("div",{className:"topRight"},r.a.createElement("div",{className:"topbarIconContainer"},r.a.createElement(c.a,null),r.a.createElement("span",{className:"topIconBadge"},"2")),r.a.createElement("img",{src:"https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"topAvatar"}))))}},78:function(e,t,a){},787:function(e,t,a){},896:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(787),a(437)),s=a(876),o=a(22),i=a(77),l=a(74),u=a(85),d=a(341),m=a(134);t.default=function(){var e=Object(u.b)(),t=Object(u.c)(function(e){return e.productList}),a=(t.loading,t.products);Object(n.useEffect)(function(){e(Object(d.c)())},[e]);var p=[{field:"_id",headerName:"ID",width:220},{field:"product",headerName:"Product",width:200,renderCell:function(e){return r.a.createElement("div",{className:"productListItem"},r.a.createElement("img",{className:"productListImg",src:e.row.img,alt:""}),e.row.title)}},{field:"countInStock",headerName:"Stock",width:150},{field:"category",headerName:"Category",width:200},{field:"price",headerName:"Price",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/dash-product/".concat(t.row._id)},r.a.createElement("button",{className:"dashproductListEdit"},"Edit")),r.a.createElement(s.a,{className:"productListDelete",onClick:function(){return a=t.row._id,e(Object(d.b)(a)),void e(Object(d.c)());var a}}))}}];return r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement("main",{className:"product-list-dash-container"},r.a.createElement(l.a,null),r.a.createElement("div",{className:"productList"},r.a.createElement(o.b,{to:"/newproduct"},r.a.createElement("button",{className:"productAddButton"},"Create")),a?r.a.createElement(c.a,{rows:a,disableSelectionOnClick:!0,columns:p,getRowId:function(e){return e._id},pageSize:8,checkboxSelection:!0}):r.a.createElement("div",{className:"loader-box"},r.a.createElement(m.a,null)))))}}}]);
//# sourceMappingURL=22.5ccfc75d.chunk.js.map