(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(919),i=a(918),o=a(916),c=a(917),d=a(928),s=a(920),u=a(141),m=a(187),p=a(939),b=a(142),h=a(80),f=a(276),g=a.n(f),v=a(275),k=a.n(v),y=a(45),E=a(6),O=a(938),j=b.c().shape({GroupTitle:b.e().required(h.c).min(3,h.f).max(225,h.e),idMenu:b.e().required(h.c)});t.default=function(e){var t=e.listEdit,a=e.editGroupTitle,n=Object(y.useSelector)((function(e){return e.ListMenu})).ListCategory,b=t.Active,h=t.GroupTitle,f=t.Description,v=t.idGroupTitle,w=t.LinkRequest,x=t.idMenu,C=Object(y.useSelector)((function(e){return e.loadSubmitForm})).isSubmitForm,$={GroupTitle:h||"",Description:f||"",LinkRequest:w||"",Active:1===b,idMenu:x||""};return l.a.createElement("div",null,l.a.createElement(u.d,{initialValues:$,onSubmit:function(e){return function(e){a(v,e)}(e)},validationSchema:j,enableReinitialize:!0},(function(e){var t=e.values,a=e.handleSubmit;return l.a.createElement(u.c,{onSubmit:a},l.a.createElement(o.a,{style:{overflow:"hiden"}},l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"GroupTitle",label:E.Bb,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.b,{component:O.a,name:"idMenu",options:n,label:E.D,fullWidth:!0,size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"LinkRequest",label:E.Ob,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"Description",label:E.kb,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"Active",label:E.Nc,component:p.a,color:"primary",checked:t.Active})))),l.a.createElement(d.a,null),l.a.createElement(i.a,null,l.a.createElement(r.a,{color:"primary",type:"submit",variant:"contained",startIcon:C?l.a.createElement(s.a,{color:"inherit",className:"fa fa-spinner fa-spin"}):l.a.createElement(g.a,null),disableElevation:C},E.i),l.a.createElement(r.a,{color:"secondary",type:"reset",variant:"contained",startIcon:l.a.createElement(k.a,null),disabled:C},E.h)))})))}},937:function(e,t,a){"use strict";var n=a(4),l=a(67),r=a(10),i=a(0),o=(a(3),a(11)),c=a(188),d=a(86),s=a(14),u=a(908),m=i.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,h=e.defaultChecked,f=e.disabled,g=e.icon,v=e.id,k=e.inputProps,y=e.inputRef,E=e.name,O=e.onBlur,j=e.onChange,w=e.onFocus,x=e.readOnly,C=e.required,$=e.tabIndex,R=e.type,S=e.value,I=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(c.a)({controlled:s,default:Boolean(h),name:"SwitchBase",state:"checked"}),z=Object(l.a)(N,2),B=z[0],q=z[1],F=Object(d.a)(),L=f;F&&void 0===L&&(L=F.disabled);var T="checkbox"===R||"radio"===R;return i.createElement(u.a,Object(n.a)({component:"span",className:Object(o.a)(p.root,b,B&&p.checked,L&&p.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){O&&O(e),F&&F.onBlur&&F.onBlur(e)},ref:t},I),i.createElement("input",Object(n.a)({autoFocus:a,checked:s,defaultChecked:h,className:p.input,disabled:L,id:T&&v,name:E,onChange:function(e){var t=e.target.checked;q(t),j&&j(e,t)},readOnly:x,ref:y,required:C,tabIndex:$,type:R,value:S},k)),B?m:g)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},938:function(e,t,a){"use strict";var n=a(92),l=a.n(n),r=a(52),i=a.n(r),o=a(0),c=a.n(o),d=a(1220),s=a(860),u=a(3),m=a.n(u);function p(e){var t=e.field,a=e.form,n=e.variant,r=e.label,o=e.options,u=i()(e,["field","form","variant","label","options"]),m=a.setFieldValue,p=t.name,b=t.value,h=o.find((function(e){return e.value===b})),f=a.errors,g=a.touched,v=!(!f[p]||!g[p]),k=f[p]&&g[p]?f[p]:null;return c.a.createElement(d.a,l()({},t,u,{value:h||null,options:o,getOptionLabel:function(e){return e.title?e.title:""},renderInput:function(e){return c.a.createElement(s.a,l()({},e,{variant:n,label:r,error:v,helperText:k}))},onChange:function(e,t){var a=null!==t?t.value:null;m(p,a)}}))}p.propTypes={field:m.a.object.isRequired,form:m.a.object.isRequired,type:m.a.string,label:m.a.string,disabled:m.a.bool},t.a=p},939:function(e,t,a){"use strict";var n=a(92),l=a.n(n),r=a(52),i=a.n(r),o=a(0),c=a.n(o),d=a(3),s=a.n(d),u=a(943),m=a(945);function p(e){var t=e.field,a=(e.form,e.label),n=i()(e,["field","form","label"]);return c.a.createElement(u.a,{control:c.a.createElement(m.a,l()({},t,n)),label:a})}p.propTypes={field:s.a.object.isRequired,form:s.a.object.isRequired,label:s.a.string,disable:s.a.bool},t.a=p},943:function(e,t,a){"use strict";var n=a(4),l=a(10),r=a(0),i=(a(3),a(11)),o=a(86),c=a(14),d=a(854),s=a(23),u=r.forwardRef((function(e,t){e.checked;var a=e.classes,c=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,h=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(o.a)(),v=m;void 0===v&&void 0!==u.props.disabled&&(v=u.props.disabled),void 0===v&&g&&(v=g.disabled);var k={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(t){void 0===u.props[t]&&void 0!==e[t]&&(k[t]=e[t])})),r.createElement("label",Object(n.a)({className:Object(i.a)(a.root,c,"end"!==h&&a["labelPlacement".concat(Object(s.a)(h))],v&&a.disabled),ref:t},f),r.cloneElement(u,k),r.createElement(d.a,{component:"span",className:Object(i.a)(a.label,v&&a.disabled)},p))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},945:function(e,t,a){"use strict";var n=a(4),l=a(10),r=a(0),i=(a(3),a(11)),o=a(14),c=a(46),d=a(23),s=a(937),u=r.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.color,u=void 0===c?"secondary":c,m=e.edge,p=void 0!==m&&m,b=e.size,h=void 0===b?"medium":b,f=Object(l.a)(e,["classes","className","color","edge","size"]),g=r.createElement("span",{className:a.thumb});return r.createElement("span",{className:Object(i.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[p],"small"===h&&a["size".concat(Object(d.a)(h))])},r.createElement(s.a,Object(n.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(d.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),r.createElement("span",{className:a.track}))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)}}]);