(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{603:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a(999),i=a(919),o=a(920),u=a(45),s=a(84),m=a(40),d=a(1064),p=a.n(d),f=a(143),E=a.n(f),b=a(917),v=a(943),h=a(1115),O=a(916),j=a(918),k=a(996),y=a.n(k),N=a(276),C=a.n(N),g=a(905),T=a(966),w=a.n(T);var M=function(e){var t=e.idMenu,a=e.idTypeMenu,l=e.idGroups,m=Object(u.useDispatch)(),d=Object(u.useSelector)((function(e){return e.GroupListMenu})).Listpermision,p=Object(u.useSelector)((function(e){return e.loadSubmitForm})).isSubmitForm,f=Object(n.useState)(!1),k=E()(f,2),N=k[0],T=k[1];return r.a.createElement("div",null,r.a.createElement(O.a,{style:{overflow:"hiden"}},r.a.createElement(b.a,{container:!0,spacing:2},d.length>0?d.map((function(e,t){return r.a.createElement(b.a,{item:!0,md:3,xs:6,key:t},r.a.createElement(v.a,{control:r.a.createElement(h.a,{checkedIcon:r.a.createElement(w.a,null),color:"primary",checked:1===e.checked,onClick:function(){return function(e){m(Object(s.h)(e))}(t)}}),label:e.ListPermissionName}))})):function(){for(var e=[],t=0;t<8;t++)e.push(r.a.createElement(b.a,{item:!0,md:3,xs:6,key:t},r.a.createElement(g.a,{height:35,animation:"wave"})));return e}())),r.a.createElement(j.a,null,r.a.createElement(i.a,{onClick:function(){var e=d.filter((function(e){return 1===e.checked})),n=[];e.length>0&&e.forEach((function(e){var t=e.idListPermission;n.push(t)}));var r={idMenu:t,idTypeMenu:a,idGroups:l,idPermission:n};m(Object(s.s)(r))},color:"primary",type:"submit",variant:"contained",startIcon:p?r.a.createElement(o.a,{color:"inherit",className:"fa fa-spinner fa-spin"}):r.a.createElement(y.a,null),disableElevation:p},c.i),r.a.createElement(i.a,{color:"secondary",variant:"contained",startIcon:r.a.createElement(C.a,null),onClick:function(){T(!N),m(Object(s.g)(!N))}},c.Ic)))},x=a(12),S=a(940),G=a(1072),I=a.n(G),P=a(947);t.default=function(){var e=Object(u.useDispatch)(),t=Object(m.i)().params,a=t.idGroups,d=t.idTypeMenu;Object(n.useEffect)((function(){e(Object(s.o)(a,d))}),[a,d,e]);var f=Object(u.useSelector)((function(e){return e.GroupListMenu.datas.data})),E=Object(u.useSelector)((function(e){return e.GroupListMenu.datas.GroupsName}));return r.a.createElement("div",null,r.a.createElement(S.default,null),r.a.createElement("div",{className:"panel_control"},r.a.createElement("div",null,r.a.createElement(l.a,{title:c.Ec,arrow:!0},r.a.createElement(i.a,{variant:"contained",size:"small",className:"iconPanel",onClick:function(){e(Object(s.o)(a,d))}},r.a.createElement(o.a,null,"cached"))))),r.a.createElement("div",{className:"contentTable"},r.a.createElement(P.default,null),r.a.createElement("div",{className:"title"},r.a.createElement("h6",{className:"title_page"},c.zb," : ",E)),r.a.createElement("div",{className:"table_wp"},r.a.createElement(p.a,{items:f,renderItem:function(t){var n,l,i=t.item;return r.a.createElement("div",null,r.a.createElement("div",{className:"list-menu"},r.a.createElement("div",{className:"title-list"},r.a.createElement("span",null,r.a.createElement("i",{className:i.Icon})),r.a.createElement("span",null,i.MenuName)),r.a.createElement("div",{className:"list-permision"},r.a.createElement("div",null,(n=i.Permission,l=null,n.length>0&&(l=n.map((function(e,t){return r.a.createElement("span",{key:t,title:e.ListPermissionName},r.a.createElement("i",{className:e.Icon}))}))),l))),r.a.createElement("div",{className:"list-menu-control"},r.a.createElement("span",{className:"iconPanel-menu ic_per",onClick:function(){return t=i.idMenu,e(Object(s.q)(t,a)),void e(Object(x.b)(!0,"sm",c.Pb,r.a.createElement(M,{idGroups:a,idMenu:t,idTypeMenu:d})));var t}},r.a.createElement("i",{className:"fa fa-book"}),"Quyền"),r.a.createElement(I.a,{title:"121",onChange:function(){return t=!i.Active,n=i.idMenu,void e(Object(x.a)(!0,{Title:c.d,Text:c.ob},(function(){e(Object(s.c)({idGroups:a,Active:t,idMenu:n,idTypeMenu:d}))})));var t,n},checked:!!i.Active,height:18,width:40,onColor:"#006ab6"}))))},confirmChange:function(){return!1}}))))}},940:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(998),l=a(987),i=a(908),o=a(928),u=a(275),s=a.n(u),m=a(909),d=a(45),p=a(12),f=Object(m.a)((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));t.default=function(){var e=Object(d.useDispatch)(),t=f(),a=Object(d.useSelector)((function(e){return e.ModalDialogsReducer})),n=a.open,u=a.maxWidth,m=a.Title,E=a.component,b=function(){e(p.b(!1))};return r.a.createElement("div",null,r.a.createElement(c.a,{open:n,onClose:b,fullWidth:!0,maxWidth:u,disableBackdropClick:!0,disableEscapeKeyDown:!0},r.a.createElement("div",{className:t.groupTitle},r.a.createElement(l.a,{id:"form-dialog-title",style:{textTransform:"uppercase"}},m),r.a.createElement(i.a,{"aria-label":"close",className:t.closeButton,onClick:b},r.a.createElement(s.a,null))),r.a.createElement(o.a,null),r.a.createElement("div",null,E)))}},947:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(986),l=a.n(c),i=a(143),o=a.n(i),u=a(0),s=a.n(u),m=a(919),d=a(998),p=a(918),f=a(916),E=a(1020),b=a(987),v=a(920);var h=function(e){var t=e.Title,a=e.Text,n=e.handleConfirm,r=e.handleClose,c=e.isConfirm,l=e.isOpen;return s.a.createElement("div",null,s.a.createElement(d.a,{open:l,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",disableBackdropClick:!0,fullWidth:!0,maxWidth:"xs"},s.a.createElement(b.a,{id:"alert-dialog-title"},t),s.a.createElement(f.a,null,s.a.createElement(E.a,{id:"alert-dialog-description"},a)),s.a.createElement(p.a,null,s.a.createElement(m.a,{onClick:n,startIcon:c?s.a.createElement(v.a,{color:"inherit",size:18,className:"fa fa-circle-o-notch fa-spin"}):"",color:"primary"},"ĐỒNG Ý"),s.a.createElement(m.a,{onClick:r,color:"secondary"},"HỦY BỎ"))))},O=a(45),j=a(12);t.default=function(){var e=Object(O.useDispatch)(),t=Object(O.useSelector)((function(e){return e.AlertConfirm})),a=t.open,n=t.InfoTitle,c=t.onSubmit,i=n.Title,m=n.Text,d=Object(u.useState)(!1),p=o()(d,2),f=p[0],E=p[1],b=function(){var e=l()(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=l()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!1===f&&(E(!0),b());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){E(!1)}),[a]),s.a.createElement("div",null,s.a.createElement(h,{Title:i,Text:m,isConfirm:f,isOpen:a,handleClose:function(){!1===f&&(E(!1),e(Object(j.a)(!1,null,null)))},handleConfirm:v}))}}}]);