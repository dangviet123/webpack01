(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1010:function(e,a,t){"use strict";var n=t(4),l=t(10),c=t(0),r=(t(3),t(11)),i=t(14),s=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.component,m=void 0===s?"div":s,o=Object(l.a)(e,["classes","className","component"]);return c.createElement(m,Object(n.a)({className:Object(r.a)(t.root,i),ref:a},o))}));a.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},1011:function(e,a,t){"use strict";var n=t(4),l=t(10),c=t(0),r=(t(3),t(11)),i=t(14),s=c.forwardRef((function(e,a){var t=e.disableSpacing,i=void 0!==t&&t,s=e.classes,m=e.className,o=Object(l.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(r.a)(s.root,m,!i&&s.spacing),ref:a},o))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},1012:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(66)).default)(l.default.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");a.default=c},597:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(45),r=t(6),i=t(960),s=t(942),m=t(40),o=t(941),u=t(268),d=t(988),f=t(1011),v=t(1010),p=t(919),E=t(1012),b=t.n(E),N=t(275),h=t.n(N),g=t(142),S=t(187),O=t(141),j=t(80),y=t(920),w=g.c().shape({Support:g.e().required(j.c).min(3,j.f).max(225,j.e),FullName:g.e().required(j.c).min(3,j.f).max(225,j.e),Email:g.e().email(j.i).required(j.c).min(3,j.f).max(225,j.e),Phone:g.e().required(j.c)}),x={FullName:"",Email:"",Support:"",Phone:"",Content:""};var M=function(e){var a=e.addContact,t=Object(c.useSelector)((function(e){return e.loadSubmitForm})).isSubmitForm;return l.a.createElement(d.a,{variant:"outlined",style:{position:"relative",overflow:"inherit"}},l.a.createElement(O.d,{initialValues:x,onSubmit:function(e){return function(e){!1===t&&a(e)}(e)},validationSchema:w},(function(e){e.values;var a=e.handleSubmit;return l.a.createElement(O.c,{onSubmit:a},l.a.createElement(v.a,null,l.a.createElement("div",{className:"textFieldInput"},l.a.createElement(O.a,{name:"Support",disabled:t,label:r.Rc,component:S.a,fullWidth:!0,margin:"dense"})),l.a.createElement("div",{className:"textFieldInput"},l.a.createElement(O.a,{name:"FullName",disabled:t,label:r.xb,component:S.a,fullWidth:!0,margin:"dense"})),l.a.createElement("div",{className:"textFieldInput"},l.a.createElement(O.a,{name:"Email",disabled:t,label:r.sb,component:S.a,fullWidth:!0,margin:"dense"})),l.a.createElement("div",{className:"textFieldInput"},l.a.createElement(O.a,{name:"Phone",disabled:t,label:r.rc,component:S.a,fullWidth:!0,margin:"dense"})),l.a.createElement("div",{className:"textFieldInput"},l.a.createElement(O.a,{name:"Content",disabled:t,multiline:!0,rows:3,label:r.O,component:S.a,fullWidth:!0,margin:"dense"}))),l.a.createElement(f.a,{style:{padding:15}},l.a.createElement(p.a,{variant:"contained",type:"submit",color:"primary",endIcon:t?l.a.createElement(y.a,{color:"inherit",className:"fa fa-spinner fa-spin"}):l.a.createElement(b.a,null),disableElevation:t,fullWidth:!0}," GỬI LIÊN HỆ "),l.a.createElement(p.a,{variant:"contained",color:"secondary",type:"reset",startIcon:l.a.createElement(h.a,null),fullWidth:!0,disableElevation:t},"LÀM MỚI")))})))};a.default=function(){var e=Object(c.useDispatch)(),a=Object(m.g)();Object(n.useEffect)((function(){document.title="".concat(r.M,"  | ").concat(r.bc),window.scrollTo(0,0)}),[]),Object(n.useEffect)((function(){e({type:u.b})}),[e]);var t=Object(c.useSelector)((function(e){return e.Header})).datas,d=t.filter((function(e){return"/contact-support"===e.Slug})),f=[];if(t.length>0){var v=d[0].children,p=a.pathname,E=v.filter((function(e){return e.Slug===p}));f=[{Name:d[0].MenuName,Slug:v[0].Slug,Active:0},{Name:E[0].MenuName,Slug:"",Active:1}]}return l.a.createElement("main",null,l.a.createElement(o.a,null),l.a.createElement(s.a,{list_prc:f}),l.a.createElement("section",{className:"lienhe-1",style:{backgroundColor:"white"}},l.a.createElement(i.a,{ListMenu:d}),l.a.createElement("div",{className:"cs-wrapper"},l.a.createElement("div",{className:"wapper_container"},l.a.createElement("h3",{style:{textAlign:"center",marginBottom:30,marginTop:10,color:"#006ab6"}},"THÔNG TIN LIÊN HỆ"),l.a.createElement(M,{addContact:function(a){e(function(e){return{type:u.a,payload:{datas:e}}}(a))}})))))}},941:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(962),r=t.n(c),i=(t(963),t(45)),s=t(32);a.a=function(){var e=Object(i.useSelector)((function(e){return e.Header})).DataSlide;return l.a.createElement("section",{className:"phanam-slider-1"},l.a.createElement("article",null,l.a.createElement("div",{className:"list-items"},l.a.createElement(r.a,{bullets:!1},e.map((function(e,a){return l.a.createElement("div",{key:a,"data-src":"".concat(s.c).concat(e.Image)})}))))))}},942:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(959),r=t.n(c),i=t(908),s=t(909),m=t(958),o=t.n(m),u=t(40),d=Object(s.a)((function(){return{bt_home:{color:"white",padding:4},link_rdc:{cursor:"pointer","& span:hover":{textDecoration:"underline"}},home_icon:{fontSize:17}}}));a.a=function(e){var a=e.list_prc,t=d(),n=Object(u.f)(),c=function(e){n.push(e)};return l.a.createElement("section",{className:"phanam-breadcrumb-1"},l.a.createElement("div",{className:"main-breadcrumb"},l.a.createElement("div",{className:"container"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:t.link_rdc},l.a.createElement(i.a,{className:t.bt_home,onClick:function(){return c("/")}},l.a.createElement(r.a,{className:t.home_icon}))),a.map((function(e,a){return 0===e.Active?l.a.createElement("li",{className:t.link_rdc,key:a,onClick:function(){return c(e.Slug)},style:{textTransform:"uppercase"}},l.a.createElement(o.a,{fontSize:"small"}),l.a.createElement("span",null,e.Name)):l.a.createElement("li",{key:a,style:{textTransform:"uppercase"}},l.a.createElement(o.a,{fontSize:"small"}),l.a.createElement("span",null,e.Name))}))))))}},958:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(66)).default)(l.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=c},959:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(66)).default)(l.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");a.default=c},960:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(85),r=t(905);a.a=function(e){var a=e.ListMenu;return l.a.createElement("article",{className:"phanam-nav"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("ul",{className:"nav"},a.length>0?a[0].children.map((function(e,a){var t=e.MenuName,n=e.Slug;return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(c.b,{className:"nav-link",to:n,exact:!0,activeClassName:"active"},t))})):function(){for(var e=[],a=0;a<3;a++)e.push(l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(r.a,{width:200,height:70,variant:"text"})));return e}())))))}},988:function(e,a,t){"use strict";var n=t(4),l=t(10),c=t(0),r=(t(3),t(11)),i=t(547),s=t(14),m=c.forwardRef((function(e,a){var t=e.classes,s=e.className,m=e.raised,o=void 0!==m&&m,u=Object(l.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(r.a)(t.root,s),elevation:o?8:1,ref:a},u))}));a.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(m)}}]);