(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{580:function(e,t,n){"use strict";n.r(t);var r=n(143),i=n.n(r),c=n(0),o=n.n(c),s=n(16),u=n(45),a=n(149),l=n(40),d=n(5),h=n(12),v=n(7),f=n(6),m=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-ModalDialogs"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(11).then(n.bind(null,940))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 940}}),b=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-bgdata-Slider-Search"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(22)]).then(n.bind(null,1090))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1090}}),p=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-bgdata-Slider-ListTable"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(6),n.e(21)]).then(n.bind(null,1091))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1091}}),y=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-ControlPanelbutton"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,952))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 952}}),j=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-PaginationCustom"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(13),n.e(20)]).then(n.bind(null,953))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 953}}),O=Object(s.a)({resolved:{},chunkName:function(){return"helpers-FormConfirm-ConfirmAlert"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(12).then(n.bind(null,947))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 947}}),A=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-bgdata-Slider-ViewImage"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(23).then(n.bind(null,1092))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1092}});function g(){var e=Object(c.useState)(!1),t=i()(e,2),n=t[0],r=t[1],s=Object(u.useDispatch)(),g=Object(l.g)().search,S=Object(l.f)();Object(c.useEffect)((function(){document.title=f.y,s(Object(v.e)(!1))}),[s]),Object(c.useEffect)((function(){s(Object(a.j)())}),[g,s]);var k=Object(u.useSelector)((function(e){return e.Slider})),q=k.datas,E=k.current_page,N=k.last_page,w=k.total;return o.a.createElement("div",{className:"fix-relative"},o.a.createElement(O,null),o.a.createElement(y,{filterSerach:function(){s(Object(v.e)(!0))},createdNew:function(){S.push("/admincp/bgdata/slider/add")},updatedNew:function(){var e=q.filter((function(e){return e.checked}));if(1===e.length){var t=e[0].idSlider;S.push("/admincp/bgdata/slider/".concat(t,"/edit"))}else e.length>1?Object(d.d)(f.jc):Object(d.d)(f.Jc)},activeAll:function(e){var t=q.filter((function(e){return e.checked}));t.length>=1?s(Object(h.a)(!0,{Title:f.d,Text:f.ob},(function(){s(Object(a.a)(t,e))}))):Object(d.d)(f.Jc)},deleteAll:function(){var e=q.filter((function(e){return e.checked}));e.length>=1?s(Object(h.a)(!0,{Title:f.d,Text:f.R},(function(){s(Object(a.h)(e))}))):Object(d.d)(f.Jc)},reloadPage:function(){s(Object(a.j)())}}),o.a.createElement(b,{handleCloseSearch:function(){s(Object(v.e)(!1))}}),o.a.createElement(m,null),o.a.createElement("div",{className:"contentTable"},o.a.createElement("div",{className:"title"},o.a.createElement("h6",{className:"title_page"},f.y)),o.a.createElement(p,{datas:q,checkedOne:function(e){s(Object(a.g)(e))},checkedAll:function(e){r(!n),s(Object(a.f)(!n))},checkAll:n,activeOne:function(e,t){s(Object(h.a)(!0,{Title:f.d,Text:f.ob},(function(){s(Object(a.c)(e,!t))})))},viewImage:function(e){var t=q[e].Image;s(Object(h.b)(!0,"lg",f.sc,o.a.createElement(A,{Image:t})))}}),o.a.createElement(j,{count:N,total:w,current_page:E,last_page:N,namepage:f.y,handleSetLimitLoad:function(){s(Object(a.j)())}})))}t.default=g}}]);