(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(1061),l=t(1063),i=t(1060),o=t(1062),d=t(1059),s=t(1115),m=t(954),p=t.n(m),h=(t(972),t(999)),b=t(943),u=t(945),g=t(6),f=t(40),k=t(45),v=t(955),y=t(966),E=t.n(y);a.default=function(e){var a=e.datas,t=e.checkedOne,n=e.checkedAll,m=e.activeOne,y=Object(f.g)().pathname,w=Object(k.useSelector)((function(e){return e.SideBar})).ListPermision[y];return r.a.createElement("div",{className:"table_wp"},r.a.createElement(c.a,{"aria-label":"simple table"},r.a.createElement(o.a,null,r.a.createElement(d.a,null,r.a.createElement(i.a,{align:"center",width:20},r.a.createElement(s.a,{checkedIcon:r.a.createElement(E.a,null),color:"primary",onChange:n})),r.a.createElement(i.a,{align:"center"},g.bd),r.a.createElement(i.a,{align:"center"},g.kb),r.a.createElement(i.a,{align:"center",width:150},g.Yc),r.a.createElement(i.a,{align:"center",width:100},g.T),r.a.createElement(i.a,{align:"center",width:80},g.kc),r.a.createElement(i.a,{align:"center",width:80},g.Nc))),r.a.createElement(l.a,null,a.map((function(e,a){return r.a.createElement(d.a,{hover:!0,key:a},r.a.createElement(i.a,{align:"center"},r.a.createElement(s.a,{checkedIcon:r.a.createElement(E.a,null),color:"primary",checked:!!e.checked,onChange:function(){return t(a)}})),r.a.createElement(i.a,{align:"center"},e.Vacancies),r.a.createElement(i.a,{align:"center"},e.Description),r.a.createElement(i.a,{align:"center"},e.full_name),r.a.createElement(i.a,{align:"center"},r.a.createElement(p.a,{format:"DD-MM-YYYY"},e.created_at)),r.a.createElement(i.a,{align:"center"},e.OrderBy),r.a.createElement(i.a,{align:"center"},r.a.createElement(h.a,{title:e.Active?g.n:g.Eb,placement:"left",arrow:!0},r.a.createElement(b.a,{className:"switch_nomag",control:r.a.createElement(u.a,{color:"primary",checked:!!e.Active,onChange:function(){return m(e.idVacancies,e.Active)}}),disabled:Object(v.a)(w)}))))})))))}},943:function(e,a,t){"use strict";var n=t(4),r=t(10),c=t(0),l=(t(3),t(11)),i=t(86),o=t(14),d=t(854),s=t(23),m=c.forwardRef((function(e,a){e.checked;var t=e.classes,o=e.className,m=e.control,p=e.disabled,h=(e.inputRef,e.label),b=e.labelPlacement,u=void 0===b?"end":b,g=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=Object(i.a)(),k=p;void 0===k&&void 0!==m.props.disabled&&(k=m.props.disabled),void 0===k&&f&&(k=f.disabled);var v={disabled:k};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===m.props[a]&&void 0!==e[a]&&(v[a]=e[a])})),c.createElement("label",Object(n.a)({className:Object(l.a)(t.root,o,"end"!==u&&t["labelPlacement".concat(Object(s.a)(u))],k&&t.disabled),ref:a},g),c.cloneElement(m,v),c.createElement(d.a,{component:"span",className:Object(l.a)(t.label,k&&t.disabled)},h))}));a.a=Object(o.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(m)},945:function(e,a,t){"use strict";var n=t(4),r=t(10),c=t(0),l=(t(3),t(11)),i=t(14),o=t(46),d=t(23),s=t(937),m=c.forwardRef((function(e,a){var t=e.classes,i=e.className,o=e.color,m=void 0===o?"secondary":o,p=e.edge,h=void 0!==p&&p,b=e.size,u=void 0===b?"medium":b,g=Object(r.a)(e,["classes","className","color","edge","size"]),f=c.createElement("span",{className:t.thumb});return c.createElement("span",{className:Object(l.a)(t.root,i,{start:t.edgeStart,end:t.edgeEnd}[h],"small"===u&&t["size".concat(Object(d.a)(u))])},c.createElement(s.a,Object(n.a)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:Object(l.a)(t.switchBase,t["color".concat(Object(d.a)(m))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},g)),c.createElement("span",{className:t.track}))}));a.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(m)},955:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n=function(e){var a=[];return e&&(a=e.idPermission.map((function(e){return parseInt(e)}))),-1===a.indexOf(13)},r=function(e){var a=[];return e&&(a=e.idPermission.map((function(e){return parseInt(e)}))),-1!==a.indexOf(14)}}}]);