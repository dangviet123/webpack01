(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1097:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(919),o=t(918),i=t(916),c=t(917),d=t(928),s=t(920),u=t(141),m=t(187),p=t(939),b=t(142),h=t(80),f=t(276),g=t.n(f),v=t(275),k=t.n(v),y=t(45),E=t(6),O=t(938),j=b.c().shape({GroupTitle:b.e().required(h.c).min(3,h.f).max(225,h.e),idMenu:b.e().required(h.c)}),w={GroupTitle:"",Description:"",LinkRequest:"",Active:!0,idMenu:""};a.default=function(e){var a=e.addGroupTitle,t=Object(y.useSelector)((function(e){return e.ListMenu})).ListCategory,n=Object(y.useSelector)((function(e){return e.loadSubmitForm})).isSubmitForm;return l.a.createElement("div",null,l.a.createElement(u.d,{initialValues:w,onSubmit:function(e){return a(e)},validationSchema:j},(function(e){var a=e.values,b=e.handleSubmit;return l.a.createElement(u.c,{onSubmit:b},l.a.createElement(i.a,{style:{overflow:"hiden"}},l.a.createElement(c.a,{container:!0,spacing:2},l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"GroupTitle",label:E.Bb,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.b,{component:O.a,name:"idMenu",options:t,label:E.D,fullWidth:!0,size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"LinkRequest",label:E.Ob,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"Description",label:E.kb,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"Active",label:E.Nc,component:p.a,color:"primary",checked:a.Active})))),l.a.createElement(d.a,null),l.a.createElement(o.a,null,l.a.createElement(r.a,{color:"primary",type:"submit",variant:"contained",startIcon:n?l.a.createElement(s.a,{color:"inherit",className:"fa fa-spinner fa-spin"}):l.a.createElement(g.a,null),disableElevation:n},E.i),l.a.createElement(r.a,{color:"secondary",type:"reset",variant:"contained",startIcon:l.a.createElement(k.a,null),disabled:n},E.h)))})))}},937:function(e,a,t){"use strict";var n=t(4),l=t(67),r=t(10),o=t(0),i=(t(3),t(11)),c=t(188),d=t(86),s=t(14),u=t(908),m=o.forwardRef((function(e,a){var t=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,h=e.defaultChecked,f=e.disabled,g=e.icon,v=e.id,k=e.inputProps,y=e.inputRef,E=e.name,O=e.onBlur,j=e.onChange,w=e.onFocus,x=e.readOnly,C=e.required,$=e.tabIndex,R=e.type,S=e.value,I=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(c.a)({controlled:s,default:Boolean(h),name:"SwitchBase",state:"checked"}),z=Object(l.a)(N,2),B=z[0],F=z[1],q=Object(d.a)(),L=f;q&&void 0===L&&(L=q.disabled);var P="checkbox"===R||"radio"===R;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(i.a)(p.root,b,B&&p.checked,L&&p.disabled),disabled:L,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),q&&q.onFocus&&q.onFocus(e)},onBlur:function(e){O&&O(e),q&&q.onBlur&&q.onBlur(e)},ref:a},I),o.createElement("input",Object(n.a)({autoFocus:t,checked:s,defaultChecked:h,className:p.input,disabled:L,id:P&&v,name:E,onChange:function(e){var a=e.target.checked;F(a),j&&j(e,a)},readOnly:x,ref:y,required:C,tabIndex:$,type:R,value:S},k)),B?m:g)}));a.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},938:function(e,a,t){"use strict";var n=t(92),l=t.n(n),r=t(52),o=t.n(r),i=t(0),c=t.n(i),d=t(1220),s=t(860),u=t(3),m=t.n(u);function p(e){var a=e.field,t=e.form,n=e.variant,r=e.label,i=e.options,u=o()(e,["field","form","variant","label","options"]),m=t.setFieldValue,p=a.name,b=a.value,h=i.find((function(e){return e.value===b})),f=t.errors,g=t.touched,v=!(!f[p]||!g[p]),k=f[p]&&g[p]?f[p]:null;return c.a.createElement(d.a,l()({},a,u,{value:h||null,options:i,getOptionLabel:function(e){return e.title?e.title:""},renderInput:function(e){return c.a.createElement(s.a,l()({},e,{variant:n,label:r,error:v,helperText:k}))},onChange:function(e,a){var t=null!==a?a.value:null;m(p,t)}}))}p.propTypes={field:m.a.object.isRequired,form:m.a.object.isRequired,type:m.a.string,label:m.a.string,disabled:m.a.bool},a.a=p},939:function(e,a,t){"use strict";var n=t(92),l=t.n(n),r=t(52),o=t.n(r),i=t(0),c=t.n(i),d=t(3),s=t.n(d),u=t(943),m=t(945);function p(e){var a=e.field,t=(e.form,e.label),n=o()(e,["field","form","label"]);return c.a.createElement(u.a,{control:c.a.createElement(m.a,l()({},a,n)),label:t})}p.propTypes={field:s.a.object.isRequired,form:s.a.object.isRequired,label:s.a.string,disable:s.a.bool},a.a=p},943:function(e,a,t){"use strict";var n=t(4),l=t(10),r=t(0),o=(t(3),t(11)),i=t(86),c=t(14),d=t(854),s=t(23),u=r.forwardRef((function(e,a){e.checked;var t=e.classes,c=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,h=void 0===b?"end":b,f=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(i.a)(),v=m;void 0===v&&void 0!==u.props.disabled&&(v=u.props.disabled),void 0===v&&g&&(v=g.disabled);var k={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===u.props[a]&&void 0!==e[a]&&(k[a]=e[a])})),r.createElement("label",Object(n.a)({className:Object(o.a)(t.root,c,"end"!==h&&t["labelPlacement".concat(Object(s.a)(h))],v&&t.disabled),ref:a},f),r.cloneElement(u,k),r.createElement(d.a,{component:"span",className:Object(o.a)(t.label,v&&t.disabled)},p))}));a.a=Object(c.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},945:function(e,a,t){"use strict";var n=t(4),l=t(10),r=t(0),o=(t(3),t(11)),i=t(14),c=t(46),d=t(23),s=t(937),u=r.forwardRef((function(e,a){var t=e.classes,i=e.className,c=e.color,u=void 0===c?"secondary":c,m=e.edge,p=void 0!==m&&m,b=e.size,h=void 0===b?"medium":b,f=Object(l.a)(e,["classes","className","color","edge","size"]),g=r.createElement("span",{className:t.thumb});return r.createElement("span",{className:Object(o.a)(t.root,i,{start:t.edgeStart,end:t.edgeEnd}[p],"small"===h&&t["size".concat(Object(d.a)(h))])},r.createElement(s.a,Object(n.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(o.a)(t.switchBase,t["color".concat(Object(d.a)(u))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},f)),r.createElement("span",{className:t.track}))}));a.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)}}]);