(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{336:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(340);t.a=function(e){var t=e.section;return r.a.createElement("div",{className:"divider"},r.a.createElement("div",{className:"left-line"}),r.a.createElement("p",null,t),r.a.createElement("div",{className:"right-line"}))}},337:function(e,t,a){"use strict";a.d(t,"c",function(){return p}),a.d(t,"f",function(){return m}),a.d(t,"d",function(){return l}),a.d(t,"e",function(){return h}),a.d(t,"a",function(){return g}),a.d(t,"g",function(){return f}),a.d(t,"b",function(){return y});var n=a(62),r=a.n(n),s=a(78),i=a(75),o=a.n(i),c=a(14),u=a(79),d=a(143),p=function(){return function(){var e=Object(s.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.v}),e.next=4,o.a.get("".concat(u.a,"products/"));case 4:a=e.sent,n=a.data,t({type:c.w,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:c.u,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a){var n,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:c.s}),t.next=4,o.a.get("".concat(u.a,"products/find/").concat(e));case 4:n=t.sent,s=n.data,a({type:c.t,payload:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:c.r,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(s.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:c.b}),e.next=4,o.a.get("".concat(u.a,"products/porpular"));case 4:a=e.sent,n=a.data,t({type:c.c,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:c.a,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a){var n,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:c.e}),t.next=4,o.a.get(e?"".concat(u.a,"products?category=").concat(e.toLowerCase()):"".concat(u.a,"products"));case 4:n=t.sent,s=n.data,a({type:c.f,payload:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:c.d,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a,n){var s,i,p,m,l,h;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:c.h}),s=n(),i=s.userLogin.userInfo,p={headers:{Authorization:"Bearer ".concat(i.token)}},t.next=6,o.a.post("".concat(u.a,"products/"),e,p);case 6:m=t.sent,l=m.data,a({type:c.n,payload:l}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),"Not authorized, token failed"===(h=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(d.g)()),a({type:c.g,payload:h});case 16:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,a){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(s.a)(r.a.mark(function a(n,s){var i,p,m,l,h,g;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:c.B}),i=s(),p=i.userLogin.userInfo,m={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(p.token)}},a.next=6,o.a.put("".concat(u.a,"products/edit/").concat(t),e,m);case 6:l=a.sent,h=l.data,n({type:c.D,payload:h}),n({type:c.t,payload:h}),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(0),"Not authorized, token failed"===(g=a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message)&&n(Object(d.g)()),n({type:c.A,payload:g});case 17:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e,t){return a.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(r.a.mark(function t(a,n){var s,i,p,m;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:c.p}),s=n(),i=s.userLogin.userInfo,p={headers:{Authorization:"Bearer ".concat(i.token)}},t.next=6,o.a.delete("".concat(u.a,"products/delete/").concat(e),p);case 6:a({type:c.q}),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),"Not authorized, token failed"===(m=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message)&&a(Object(d.g)()),a({type:c.o,payload:m});case 14:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}()}},340:function(e,t,a){},399:function(e,t,a){"use strict";a.d(t,"c",function(){return q}),a.d(t,"a",function(){return F}),a.d(t,"b",function(){return Q});var n=a(400),r=a.n(n),s=a(401),i=a.n(s),o=a(402),c=a.n(o),u=a(403),d=a.n(u),p=a(404),m=a.n(p),l=a(405),h=a.n(l),g=a(406),f=a.n(g),y=a(407),b=a.n(y),v=a(408),w=a.n(v),A=a(409),E=a.n(A),x=a(410),I=a.n(x),O=a(411),j=a.n(O),k=a(412),T=a.n(k),N=a(413),L=a.n(N),P=a(414),J=a.n(P),R=a(415),C=a.n(R),G=a(416),V=a.n(G),K=a(417),U=a.n(K),q=[{id:1,img:r.a,title:"SUMMER SALE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",bg:"#EFE6E5"},{id:2,img:i.a,title:"READY TO WEAR OUTFITS",desc:"TAILORED JUST FOR YOU!",bg:"#EFE6E5"},{id:3,img:c.a,title:"POPULAR SALE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",bg:"#EFE6E5"}],F=[{id:1,img:d.a,no:"17 items",cat:"women"},{id:2,img:w.a,no:"25 items",cat:"Men"},{id:3,img:E.a,no:"32 items",cat:"accessories"},{id:4,img:I.a,no:"58 items",cat:"Track suits"},{id:5,img:j.a,no:"39 items",cat:"Aso ebi"},{id:6,img:T.a,no:"56 items",cat:"Adire/Bubu dress"},{id:7,img:r.a,no:"5 items",cat:"Ankara set"},{id:8,img:L.a,no:"310 items",cat:"2pieces set"}],Q=(r.a,i.a,c.a,m.a,b.a,f.a,b.a,h.a,[{id:1,img:J.a,name:"@Banks_Adeyemi",desc:"At first I was contemplating whether to get some designs from JPosh, I eventually did and trust me they were exactly what I wanted. The customer service is just a top notch."},{id:2,img:C.a,name:"@elora_clothing2020",desc:"Jposh you outdid yourself again. I have no single doubt about you when it comes to sewing. This particular dress I give it you. You made this dress just by seeing her pictures, no measurement and it was exact her size. I give it to you. Thank you so much. The dad said all the mother's at the party took your contact as they couldn't get over the dress on her. They all thought it was ready-made "},{id:3,img:V.a,name:"@chocolatelynda",desc:"Thank you Jposh for always giving the best. It is always a delight and a wonderful experience shopping with you....... I look forward to seeing and shopping your latest designs \ud83d\ude0d \ud83d\ude0a\u2026\u2026I recommend Jposh with my full chest"},{id:4,img:J.a,name:"@Nneka Olamide",desc:" J-Posh!!!\n        Sincerely, you're the best!!!!!!! All my outfits came out nice, despite the fact that I couldn't make it for measurements and fittings More Grace hun!!.\n        you are creative Abeg"},{id:5,img:V.a,name:"@elora_clothing2020",desc:"Jposh you outdid yourself again. I have no single doubt about you when it comes to sewing. This particular dress I give it you. You made this dress just by seeing her pictures, no measurement and it was exact her size. I give it to you. Thank you so much. The dad said all the mother's at the party took your contact as they couldn't get over the dress on her. They all thought it was ready-made "},{id:6,img:C.a,name:"@Banks_Adeyemi",desc:"At first I was contemplating whether to get some designs from JPosh, I eventually did and trust me they were exactly what I wanted. The customer service is just a top notch."},{id:7,img:U.a,name:"@elora_clothing2020",desc:"Jposh you outdid yourself again. I have no single doubt about you when it comes to sewing. This particular dress I give it you. You made this dress just by seeing her pictures, no measurement and it was exact her size. I give it to you. Thank you so much. The dad said all the mother's at the party took your contact as they couldn't get over the dress on her. They all thought it was ready-made "}])},400:function(e,t,a){e.exports=a.p+"static/media/slider-image13.a8403d06.jpeg"},401:function(e,t,a){e.exports=a.p+"static/media/slider-image11.df6e34cd.jpeg"},402:function(e,t,a){e.exports=a.p+"static/media/slider-image16.ab05ec8b.jpeg"},403:function(e,t,a){e.exports=a.p+"static/media/women-cat1.f27da59e.jpeg"},404:function(e,t,a){e.exports=a.p+"static/media/slider-image3.bd75ac94.jpg"},405:function(e,t,a){e.exports=a.p+"static/media/slider-image12.f310914f.jpg"},406:function(e,t,a){e.exports=a.p+"static/media/slider-image7.930d6792.jpg"},407:function(e,t,a){e.exports=a.p+"static/media/slider-image5.09d895c8.jpg"},408:function(e,t,a){e.exports=a.p+"static/media/male.d87f0308.jpeg"},409:function(e,t,a){e.exports=a.p+"static/media/accessory-cat.58c3d313.jpeg"},410:function(e,t,a){e.exports=a.p+"static/media/ILU_1557.95394190.jpg"},411:function(e,t,a){e.exports=a.p+"static/media/aso-ebi.79216175.jpeg"},412:function(e,t,a){e.exports=a.p+"static/media/adire-bubu.de6665df.jpeg"},413:function(e,t,a){e.exports=a.p+"static/media/palazo.a85e93a7.jpeg"},414:function(e,t){e.exports="data:image/png;base64,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"},415:function(e,t,a){e.exports=a.p+"static/media/cust2.a78b8518.jfif"},416:function(e,t,a){e.exports=a.p+"static/media/cust3.5cde931f.jfif"},417:function(e,t,a){e.exports=a.p+"static/media/cust4.7510f1cd.jfif"},805:function(e,t,a){},829:function(e,t,a){"use strict";a.r(t);var n,r,s,i,o,c,u,d=a(63),p=a(0),m=a.n(p),l=a(64),h=a(399),g=a(336),f=a(23),y=a(66),b=a(337),v=a(101),w=l.a.div(n||(n=Object(d.a)(["\nflex:2;\nmargin:10px 5px;\nheight:55vh;\nposition: relative;\ncursor: pointer;\n\n@media "," {\n width: 100%;\n height: 50vh;\n}\n"])),v.a.mobileL),A=l.a.img(r||(r=Object(d.a)(["\ndislay:block;\nwidth:100%;\nmax-height:100%;\nobject-fit: cover;\n"]))),E=l.a.div(s||(s=Object(d.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nbackground-color : rgba(18, 18, 18, 0.5);\n\n\n\n@media "," {\n  width: 100%;\n  height: 100%;\n  background-color : rgba(18, 18, 18, 0.65);\n}\n"])),v.a.mobileL),x=l.a.h2(i||(i=Object(d.a)(["\ncolor: #fff;\nmargin-bottom: 20px;\nfont-size: 2.35rem;\nfont-weight: 500;\ntext-align:center;\n\n\n@media "," {\n  font-size: 2rem;\n  font-weight: 600;\n}\n"])),v.a.mobileL),I=(l.a.h3(o||(o=Object(d.a)(["\ncolor: #fff;\nfont-size: 2rem;\nmargin-bottom: 20px;\nfont-weight: 600;\ntext-align: center;\n"]))),l.a.button(c||(c=Object(d.a)(["\nwidth: 50%;\nmargin: 0 auto;\npadding:10px;\nborder: none;\nborder-radius: 10px;\nbackground: #C09621;\ncolor: #fff;\nfont-size:14px;\nfont-weight:600;\ncursor: pointer;\nopacity: 0.85;\n"])))),O=function(e){var t=e.category,a=Object(f.b)(),n=Object(f.c)(function(e){return e.productList});n.loading,n.products,n.error;return Object(p.useEffect)(function(){a(Object(b.c)())},[a]),m.a.createElement(w,null,m.a.createElement(y.b,{to:"/products/".concat(t.cat)},m.a.createElement(A,{src:t.img,alt:"categories"}),m.a.createElement(E,null,m.a.createElement(x,null,t.cat),m.a.createElement(I,null,"SHOP NOW"))))},j=(a(805),l.a.div(u||(u=Object(d.a)(["\nmargin:100px auto;\n"]))));t.default=function(){return m.a.createElement(j,null,m.a.createElement(g.a,{section:"CATEGORIES"}),m.a.createElement("div",{className:"category-container",id:"cat"},h.a&&h.a.map(function(e){return m.a.createElement(O,{category:e,key:e.id})})))}}}]);
//# sourceMappingURL=3.5e32459a.chunk.js.map