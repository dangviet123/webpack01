(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{604:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t(919),c=t(909),i=t(917),d=t(928),s=t(920),u=t(141),m=t(187),p=t(939),b=t(142),f=t(80),h=t(45),g=t(938),v=t(982),y=t(983),E=t.n(y),k=t(276),j=t.n(k),O=t(275),x=t.n(O),w=Object(c.a)((function(){return{box_img:{border:"1px solid #c4c4c4",padding:4,width:210},image_s:{width:200}}})),C=b.c().shape({SliderTitle:b.e().required(f.c).min(3,f.f).max(225,f.e),idMenu:b.e().nullable().required(f.c),Image:b.e().nullable().required(f.c)}),N={SliderTitle:"",Description:"",idMenu:"",Image:"",Active:!0};var S=function(e){var a=w(),t=Object(h.useSelector)((function(e){return e.loadSubmitForm})).isSubmitForm,n=Object(h.useSelector)((function(e){return e.ListMenu})).ListCategory;return l.a.createElement("div",null,l.a.createElement(u.d,{initialValues:N,onSubmit:function(a){return e.addSlider(a)},validationSchema:C},(function(e){var c=e.values,b=e.handleSubmit,f=e.setFieldValue;return l.a.createElement(u.c,{onSubmit:b},l.a.createElement("div",{className:"content_add_new"},l.a.createElement(i.a,{container:!0,spacing:3},l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"SliderTitle",label:r.Rc,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(u.b,{component:g.a,name:"idMenu",options:n,label:r.D,fullWidth:!0,size:"small"})),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"Description",label:r.kb,component:m.a,fullWidth:!0,margin:"dense",size:"small"})),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(u.a,{name:"Active",label:r.Nc,component:p.a,color:"primary",checked:c.Active})),l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(u.b,{name:"Image",accept:"image/*",type:"file",label:r.p,component:v.a}),l.a.createElement(o.a,{style:{position:"absolute",top:0,left:130,textTransform:"capitalize"},variant:"contained",color:"secondary",component:"span",startIcon:l.a.createElement(E.a,null),onClick:function(){f("Image","")}},r.jb))),l.a.createElement(i.a,{item:!0,xs:12},""!==c.Image?l.a.createElement("div",{className:a.box_img},l.a.createElement("img",{className:a.image_s,src:c.Image,alt:c.SliderTitle})):""))),l.a.createElement(d.a,null),l.a.createElement("div",{className:"content_add_button"},l.a.createElement(i.a,{container:!0,spacing:3},l.a.createElement(i.a,{item:!0,xs:12},l.a.createElement(o.a,{color:"primary",type:"submit",className:"mr-15",variant:"contained",startIcon:t?l.a.createElement(s.a,{color:"inherit",className:"fa fa-spinner fa-spin"}):l.a.createElement(j.a,null),disableElevation:t},r.i),l.a.createElement(o.a,{color:"secondary",type:"reset",variant:"contained",startIcon:l.a.createElement(x.a,null),disabled:t},r.h)))))})))},I=t(149),$=t(54);a.default=function(){var e=Object(h.useDispatch)();return Object(n.useEffect)((function(){e(Object($.u)(2)),document.title="".concat(r.y," - ").concat(r.r)}),[e]),l.a.createElement("div",{className:"contentTable"},l.a.createElement("div",{className:"title"},l.a.createElement("h6",{className:"title_page"},r.r)),l.a.createElement("div",{className:"table_wp"},l.a.createElement(d.a,null),l.a.createElement(S,{addSlider:function(a){e(Object(I.e)(a))}})))}},937:function(e,a,t){"use strict";var n=t(4),l=t(67),r=t(10),o=t(0),c=(t(3),t(11)),i=t(188),d=t(86),s=t(14),u=t(908),m=o.forwardRef((function(e,a){var t=e.autoFocus,s=e.checked,m=e.checkedIcon,p=e.classes,b=e.className,f=e.defaultChecked,h=e.disabled,g=e.icon,v=e.id,y=e.inputProps,E=e.inputRef,k=e.name,j=e.onBlur,O=e.onChange,x=e.onFocus,w=e.readOnly,C=e.required,N=e.tabIndex,S=e.type,I=e.value,$=Object(r.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),R=Object(i.a)({controlled:s,default:Boolean(f),name:"SwitchBase",state:"checked"}),z=Object(l.a)(R,2),F=z[0],_=z[1],T=Object(d.a)(),q=h;T&&void 0===q&&(q=T.disabled);var B="checkbox"===S||"radio"===S;return o.createElement(u.a,Object(n.a)({component:"span",className:Object(c.a)(p.root,b,F&&p.checked,q&&p.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){j&&j(e),T&&T.onBlur&&T.onBlur(e)},ref:a},$),o.createElement("input",Object(n.a)({autoFocus:t,checked:s,defaultChecked:f,className:p.input,disabled:q,id:B&&v,name:k,onChange:function(e){var a=e.target.checked;_(a),O&&O(e,a)},readOnly:w,ref:E,required:C,tabIndex:N,type:S,value:I},y)),F?m:g)}));a.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},938:function(e,a,t){"use strict";var n=t(92),l=t.n(n),r=t(52),o=t.n(r),c=t(0),i=t.n(c),d=t(1220),s=t(860),u=t(3),m=t.n(u);function p(e){var a=e.field,t=e.form,n=e.variant,r=e.label,c=e.options,u=o()(e,["field","form","variant","label","options"]),m=t.setFieldValue,p=a.name,b=a.value,f=c.find((function(e){return e.value===b})),h=t.errors,g=t.touched,v=!(!h[p]||!g[p]),y=h[p]&&g[p]?h[p]:null;return i.a.createElement(d.a,l()({},a,u,{value:f||null,options:c,getOptionLabel:function(e){return e.title?e.title:""},renderInput:function(e){return i.a.createElement(s.a,l()({},e,{variant:n,label:r,error:v,helperText:y}))},onChange:function(e,a){var t=null!==a?a.value:null;m(p,t)}}))}p.propTypes={field:m.a.object.isRequired,form:m.a.object.isRequired,type:m.a.string,label:m.a.string,disabled:m.a.bool},a.a=p},939:function(e,a,t){"use strict";var n=t(92),l=t.n(n),r=t(52),o=t.n(r),c=t(0),i=t.n(c),d=t(3),s=t.n(d),u=t(943),m=t(945);function p(e){var a=e.field,t=(e.form,e.label),n=o()(e,["field","form","label"]);return i.a.createElement(u.a,{control:i.a.createElement(m.a,l()({},a,n)),label:t})}p.propTypes={field:s.a.object.isRequired,form:s.a.object.isRequired,label:s.a.string,disable:s.a.bool},a.a=p},943:function(e,a,t){"use strict";var n=t(4),l=t(10),r=t(0),o=(t(3),t(11)),c=t(86),i=t(14),d=t(854),s=t(23),u=r.forwardRef((function(e,a){e.checked;var t=e.classes,i=e.className,u=e.control,m=e.disabled,p=(e.inputRef,e.label),b=e.labelPlacement,f=void 0===b?"end":b,h=(e.name,e.onChange,e.value,Object(l.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),g=Object(c.a)(),v=m;void 0===v&&void 0!==u.props.disabled&&(v=u.props.disabled),void 0===v&&g&&(v=g.disabled);var y={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===u.props[a]&&void 0!==e[a]&&(y[a]=e[a])})),r.createElement("label",Object(n.a)({className:Object(o.a)(t.root,i,"end"!==f&&t["labelPlacement".concat(Object(s.a)(f))],v&&t.disabled),ref:a},h),r.cloneElement(u,y),r.createElement(d.a,{component:"span",className:Object(o.a)(t.label,v&&t.disabled)},p))}));a.a=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)},945:function(e,a,t){"use strict";var n=t(4),l=t(10),r=t(0),o=(t(3),t(11)),c=t(14),i=t(46),d=t(23),s=t(937),u=r.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.color,u=void 0===i?"secondary":i,m=e.edge,p=void 0!==m&&m,b=e.size,f=void 0===b?"medium":b,h=Object(l.a)(e,["classes","className","color","edge","size"]),g=r.createElement("span",{className:t.thumb});return r.createElement("span",{className:Object(o.a)(t.root,c,{start:t.edgeStart,end:t.edgeEnd}[p],"small"===f&&t["size".concat(Object(d.a)(f))])},r.createElement(s.a,Object(n.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(o.a)(t.switchBase,t["color".concat(Object(d.a)(u))]),input:t.input,checked:t.checked,disabled:t.disabled},ref:a},h)),r.createElement("span",{className:t.track}))}));a.a=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},968:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(66)).default)(l.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");a.default=r},982:function(e,a,t){"use strict";var n=t(92),l=t.n(n),r=t(52),o=t.n(r),c=t(0),i=t.n(c),d=t(3),s=t.n(d),u=t(909),m=t(919),p=t(968),b=t.n(p),f=Object(u.a)((function(e){return{root:{position:"relative"},input:{display:"none"},errors:{left:0,position:"absolute",fontSize:13,color:"#f44336"}}}));function h(e){var a,t=f(),n=e.field,r=e.form,d=e.label,s=(e.startIcon,o()(e,["field","form","label","startIcon"])),u=n.name,p=r.errors,h=r.touched,g=r.setFieldValue,v=!(!p[u]||!h[u]),y=p[u]&&h[u]?p[u]:null;return i.a.createElement(c.Fragment,null,i.a.createElement("div",{className:t.root},i.a.createElement("input",l()({},n,s,{className:t.input,id:"contained-button-file_1",onChange:function(e){var a=e.target.files[0],t=new FileReader;t.readAsDataURL(a),t.onload=function(){g(u,t.result)}},value:""})),i.a.createElement("label",{htmlFor:"contained-button-file_1"},i.a.createElement(m.a,{variant:"contained",color:"primary",component:"span",startIcon:i.a.createElement(b.a,null),style:{backgroundColor:"blueviolet",textTransform:"capitalize"}},d),(a="",!0===v&&(a=i.a.createElement("p",{className:"".concat(t.errors)},y)),a))))}h.propTypes={field:s.a.object.isRequired,form:s.a.object.isRequired,type:s.a.string,label:s.a.string,disabled:s.a.bool},a.a=h},983:function(e,a,t){"use strict";var n=t(63);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(66)).default)(l.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");a.default=r}}]);