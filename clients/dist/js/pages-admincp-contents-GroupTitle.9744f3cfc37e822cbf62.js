(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{583:function(e,t,n){"use strict";n.r(t);var r=n(143),i=n.n(r),c=n(0),o=n.n(c),s=n(16),u=n(45),l=n(135),a=n(40),h=n(5),v=n(12),d=n(7),f=n(6),m=n(54),b=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-contents-GroupTitle-Add"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(38)]).then(n.bind(null,1097))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1097}}),p=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-ModalDialogs"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(11).then(n.bind(null,940))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 940}}),j=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-contents-GroupTitle-Search"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(41)]).then(n.bind(null,1098))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1098}}),y=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-contents-GroupTitle-ListTable"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(6),n.e(40)]).then(n.bind(null,1099))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1099}}),O=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-contents-GroupTitle-Edit"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(39)]).then(n.bind(null,1100))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1100}}),A=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-ControlPanelbutton"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,952))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 952}}),S=Object(s.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-PaginationCustom"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(13),n.e(20)]).then(n.bind(null,953))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 953}}),k=Object(s.a)({resolved:{},chunkName:function(){return"helpers-FormConfirm-ConfirmAlert"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(12).then(n.bind(null,947))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 947}});function q(){var e=Object(c.useState)(!1),t=i()(e,2),n=t[0],r=t[1],s=Object(u.useDispatch)(),q=Object(a.g)().search;Object(c.useEffect)((function(){document.title=f.Bb,s(Object(d.e)(!1))}),[s]),Object(c.useEffect)((function(){s(Object(l.j)())}),[q,s]);var E=Object(u.useSelector)((function(e){return e.GroupTitle})),g=E.datas,T=E.current_page,N=E.last_page,P=E.total,R=function(e){s(Object(l.e)(e))},w=function(e,t){s(Object(l.i)(e,t))};return o.a.createElement("div",{className:"fix-relative"},o.a.createElement(k,null),o.a.createElement(A,{filterSerach:function(){s(Object(d.e)(!0))},createdNew:function(){s(Object(m.u)(2)),s(Object(v.b)(!0,"sm",f.r,o.a.createElement(b,{addGroupTitle:R})))},updatedNew:function(){var e=g.filter((function(e){return e.checked}));if(1===e.length){var t=e[0];s(Object(m.u)(2)),s(Object(v.b)(!0,"sm",f.Vc,o.a.createElement(O,{editGroupTitle:w,listEdit:t})))}else e.length>1?Object(h.d)(f.jc):Object(h.d)(f.Jc)},activeAll:function(e){var t=g.filter((function(e){return e.checked}));t.length>=1?s(Object(v.a)(!0,{Title:f.d,Text:f.ob},(function(){s(Object(l.a)(t,e))}))):Object(h.d)(f.Jc)},deleteAll:function(){var e=g.filter((function(e){return e.checked}));e.length>=1?s(Object(v.a)(!0,{Title:f.d,Text:f.R},(function(){s(Object(l.h)(e))}))):Object(h.d)(f.Jc)},reloadPage:function(){s(Object(l.j)())}}),o.a.createElement(j,{handleCloseSearch:function(){s(Object(d.e)(!1))}}),o.a.createElement(p,null),o.a.createElement("div",{className:"contentTable"},o.a.createElement("div",{className:"title"},o.a.createElement("h6",{className:"title_page"},f.Bb)),o.a.createElement(y,{datas:g,checkedOne:function(e){s(Object(l.g)(e))},checkedAll:function(e){r(!n),s(Object(l.f)(!n))},checkAll:n,activeOne:function(e,t){s(Object(v.a)(!0,{Title:f.d,Text:f.ob},(function(){s(Object(l.c)(e,!t))})))}}),o.a.createElement(S,{count:N,total:P,current_page:T,last_page:N,namepage:f.Bb,handleSetLimitLoad:function(){s(Object(l.j)())}})))}t.default=q}}]);