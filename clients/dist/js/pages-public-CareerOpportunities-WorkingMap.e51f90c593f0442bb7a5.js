(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1153:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(66)).default)(r.default.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"Room");a.default=c},598:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(941),l=t(45),i=t(6),o=t(960),s=t(942),m=t(40),u=t(521),d=t(917),p=t(1153),f=t.n(p),v=t(909),E=t(1058),g=t(32),b=t(999),h=Object(v.a)((function(){return{map_item:{width:30,height:30,backgroundColor:"white",borderRadius:15,position:"relative",border:"4px solid #006ab6",transition:".5s all ease-in-out",boxShadow:"0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)","&:hover":{border:"4px solid green"}},image:{marginLeft:1,marginTop:1}}}));var N=function(e){var a=h();return r.a.createElement("div",null,r.a.createElement(b.a,{title:e.text,placement:"top",arrow:!0},r.a.createElement("div",{className:a.map_item},r.a.createElement("img",{className:a.image,width:22,src:"asset/img/logo192.png",alt:"phanam"}))))},x=Object(v.a)((function(e){return{text_center:{textAlign:"left",cursor:"pointer"},icon:{color:"red",fontSize:16},con:{color:"red"}}}));var k=function(e){var a=e.ListWorking,t=Object(m.f)(),n=x();return r.a.createElement("div",{className:"row jcc"},r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("div",{className:"map-wrapper",style:{position:"relative",height:750}},r.a.createElement(E.a,{bootstrapURLKeys:{key:g.a},center:{lat:16.596649,lng:106.402023},defaultZoom:6},a.map((function(e,a){return r.a.createElement(N,{key:a,lat:e.longitude,lng:e.latitude,text:e.Description})})))),r.a.createElement("div",{className:"location-wrapper"},r.a.createElement("div",{className:"title"},r.a.createElement("h4",null,"Việc làm đang tuyển")),r.a.createElement("div",{className:"list-item"},r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},a.length>0?a.map((function(e,a){return r.a.createElement(d.a,{item:!0,xs:12,md:3,sm:6,key:a,className:n.text_center,onClick:function(){return a=e.idArea,void t.push("/career-opportunities/jobs-are-recruiting?idArea=".concat(a));var a}},r.a.createElement("p",null,r.a.createElement(f.a,{className:n.icon}),e.Area," (",r.a.createElement("span",{className:n.con},e.CountRecruit,")")))})):"")))))};a.default=function(){var e=Object(l.useDispatch)(),a=Object(m.g)();Object(n.useEffect)((function(){document.title="".concat(i.hd," | ").concat(i.bc),window.scrollTo(0,0)})),Object(n.useEffect)((function(){e(Object(u.a)())}),[e]);var t=Object(l.useSelector)((function(e){return e.Header})).datas,d=t.filter((function(e){return"/career-opportunities"===e.Slug})),p=[];if(t.length>0){var f=d[0].children,v=a.pathname,E=f.filter((function(e){return e.Slug===v}));p=[{Name:d[0].MenuName,Slug:d[0].Slug,Active:0},{Name:E[0].MenuName,Slug:"",Active:1}]}var g=Object(l.useSelector)((function(e){return e.WorkingMap})).ListWorking;return r.a.createElement("main",null,r.a.createElement(c.a,null),r.a.createElement(s.a,{list_prc:p}),r.a.createElement("section",{className:"bandovieclam-1"},r.a.createElement(o.a,{ListMenu:d}),r.a.createElement("div",{className:"container"},r.a.createElement(k,{ListWorking:g}))))}},941:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(962),l=t.n(c),i=(t(963),t(45)),o=t(32);a.a=function(){var e=Object(i.useSelector)((function(e){return e.Header})).DataSlide;return r.a.createElement("section",{className:"phanam-slider-1"},r.a.createElement("article",null,r.a.createElement("div",{className:"list-items"},r.a.createElement(l.a,{bullets:!1},e.map((function(e,a){return r.a.createElement("div",{key:a,"data-src":"".concat(o.c).concat(e.Image)})}))))))}},942:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(959),l=t.n(c),i=t(908),o=t(909),s=t(958),m=t.n(s),u=t(40),d=Object(o.a)((function(){return{bt_home:{color:"white",padding:4},link_rdc:{cursor:"pointer","& span:hover":{textDecoration:"underline"}},home_icon:{fontSize:17}}}));a.a=function(e){var a=e.list_prc,t=d(),n=Object(u.f)(),c=function(e){n.push(e)};return r.a.createElement("section",{className:"phanam-breadcrumb-1"},r.a.createElement("div",{className:"main-breadcrumb"},r.a.createElement("div",{className:"container"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:t.link_rdc},r.a.createElement(i.a,{className:t.bt_home,onClick:function(){return c("/")}},r.a.createElement(l.a,{className:t.home_icon}))),a.map((function(e,a){return 0===e.Active?r.a.createElement("li",{className:t.link_rdc,key:a,onClick:function(){return c(e.Slug)},style:{textTransform:"uppercase"}},r.a.createElement(m.a,{fontSize:"small"}),r.a.createElement("span",null,e.Name)):r.a.createElement("li",{key:a,style:{textTransform:"uppercase"}},r.a.createElement(m.a,{fontSize:"small"}),r.a.createElement("span",null,e.Name))}))))))}},958:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(66)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=c},959:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(66)).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");a.default=c},960:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(85),l=t(905);a.a=function(e){var a=e.ListMenu;return r.a.createElement("article",{className:"phanam-nav"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"nav"},a.length>0?a[0].children.map((function(e,a){var t=e.MenuName,n=e.Slug;return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement(c.b,{className:"nav-link",to:n,exact:!0,activeClassName:"active"},t))})):function(){for(var e=[],a=0;a<3;a++)e.push(r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement(l.a,{width:200,height:70,variant:"text"})));return e}())))))}}}]);