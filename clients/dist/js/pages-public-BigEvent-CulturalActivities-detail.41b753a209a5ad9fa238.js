(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{565:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(941),l=a(942),i=a(6),s=a(985),u=a(45),m=a(227),o=a(40),d=a(969),f=a.n(d);t.default=function(){var e=Object(u.useDispatch)(),t=Object(o.g)(),a=Object(o.h)().slug,d=Object(u.useSelector)((function(e){return e.CulturalActivities})).Detail;Object(n.useEffect)((function(){document.title="".concat(d.PostsTitle," | ").concat(i.bc),window.scrollTo(0,0)})),Object(n.useEffect)((function(){e(Object(m.b)(a))}),[e,a]);var E=Object(u.useSelector)((function(e){return e.Header})).datas,v=E.filter((function(e){return"/big-event"===e.Slug})),p=[];if(E.length>0){var b=v[0].children,h=t.pathname,N=h.substring(0,h.length-(a.length+1)),g=b.filter((function(e){return e.Slug===N}));p=[{Name:v[0].MenuName,Slug:v[0].Slug,Active:0},{Name:g[0].MenuName,Slug:g[0].Slug,Active:0},{Name:d.PostsTitle,Slug:"".Slug,Active:1}]}return c.a.createElement("main",null,c.a.createElement(r.a,null),c.a.createElement(l.a,{list_prc:p}),c.a.createElement("section",{className:"dichvu-3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"title"},c.a.createElement("h3",null,d.PostsTitle)),c.a.createElement("div",{className:"desc"},c.a.createElement("p",null,void 0!==d.Description?f()(d.Description):"")))))),c.a.createElement("div",{className:"slider",style:{width:"85%",margin:"auto"}},c.a.createElement("div",{className:"swiper-container"},c.a.createElement(s.a,null)))))}},941:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(962),l=a.n(r),i=(a(963),a(45)),s=a(32);t.a=function(){var e=Object(i.useSelector)((function(e){return e.Header})).DataSlide;return c.a.createElement("section",{className:"phanam-slider-1"},c.a.createElement("article",null,c.a.createElement("div",{className:"list-items"},c.a.createElement(l.a,{bullets:!1},e.map((function(e,t){return c.a.createElement("div",{key:t,"data-src":"".concat(s.c).concat(e.Image)})}))))))}},942:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(959),l=a.n(r),i=a(908),s=a(909),u=a(958),m=a.n(u),o=a(40),d=Object(s.a)((function(){return{bt_home:{color:"white",padding:4},link_rdc:{cursor:"pointer","& span:hover":{textDecoration:"underline"}},home_icon:{fontSize:17}}}));t.a=function(e){var t=e.list_prc,a=d(),n=Object(o.f)(),r=function(e){n.push(e)};return c.a.createElement("section",{className:"phanam-breadcrumb-1"},c.a.createElement("div",{className:"main-breadcrumb"},c.a.createElement("div",{className:"container"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:a.link_rdc},c.a.createElement(i.a,{className:a.bt_home,onClick:function(){return r("/")}},c.a.createElement(l.a,{className:a.home_icon}))),t.map((function(e,t){return 0===e.Active?c.a.createElement("li",{className:a.link_rdc,key:t,onClick:function(){return r(e.Slug)},style:{textTransform:"uppercase"}},c.a.createElement(m.a,{fontSize:"small"}),c.a.createElement("span",null,e.Name)):c.a.createElement("li",{key:t,style:{textTransform:"uppercase"}},c.a.createElement(m.a,{fontSize:"small"}),c.a.createElement("span",null,e.Name))}))))))}},985:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(1008),l=(a(1009),a(964)),i=a(32),s=a(45);t.a=function(){var e=Object(s.useSelector)((function(e){return e.Header})).DataImageSlide;return c.a.createElement(r.Carousel,{infiniteLoop:!0,showStatus:!1,swipeable:!0,emulateTouch:!0,showIndicators:!1,centerMode:!0,centerSlidePercentage:80,swipeScrollTolerance:5,dynamicHeight:!0,showThumbs:!1},e.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(l.LazyLoadImage,{src:"".concat(i.d).concat(e.Image),alt:"",width:"100%",height:"100%"}))})))}}}]);