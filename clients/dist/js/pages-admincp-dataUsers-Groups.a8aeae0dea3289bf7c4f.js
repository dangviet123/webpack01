(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{578:function(e,t,n){"use strict";n.r(t);var r=n(143),i=n.n(r),c=n(0),s=n.n(c),o=n(16),u=n(45),a=n(12),l=n(84),d=n(40),h=n(5),v=n(7),f=n(6),m=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-dataUsers-Groups-add"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(47).then(n.bind(null,1082))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1082}}),b=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-ModalDialogs"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(11).then(n.bind(null,940))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 940}}),p=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-dataUsers-Groups-Search"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(46)]).then(n.bind(null,1083))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1083}}),j=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-dataUsers-Groups-ListTable"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(6),n.e(44)]).then(n.bind(null,1084))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1084}}),O=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-dataUsers-Groups-edit"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(48).then(n.bind(null,1085))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1085}}),y=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-ControlPanelbutton"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,952))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 952}}),A=Object(o.a)({resolved:{},chunkName:function(){return"components-admincp-Shared-PaginationCustom"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(13),n.e(20)]).then(n.bind(null,953))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 953}}),k=Object(o.a)({resolved:{},chunkName:function(){return"helpers-FormConfirm-ConfirmAlert"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return n.e(12).then(n.bind(null,947))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 947}});function g(){var e=Object(c.useState)(!1),t=i()(e,2),n=t[0],r=t[1],o=Object(u.useDispatch)(),g=Object(d.g)().search,S=Object(d.f)();Object(c.useEffect)((function(){document.title=f.Ab,o(Object(v.e)(!1))}),[o]),Object(c.useEffect)((function(){o(Object(l.m)())}),[g,o]);var q=Object(u.useSelector)((function(e){return e.Groups})),E=q.datas,N=q.current_page,G=q.last_page,R=q.total,w=function(e){o(Object(l.f)(e))},P=function(e,t){o(Object(l.l)(e,t))};return s.a.createElement("div",{className:"fix-relative"},s.a.createElement(k,null),s.a.createElement(y,{filterSerach:function(){o(Object(v.e)(!0))},createdNew:function(){o(Object(a.b)(!0,"sm",f.r,s.a.createElement(m,{addGroups:w})))},updatedNew:function(){var e=E.filter((function(e){return e.checked}));if(1===e.length){var t=e[0];o(Object(a.b)(!0,"sm",f.Vc,s.a.createElement(O,{editGroups:P,listEdit:t})))}else e.length>1?Object(h.d)(f.jc):Object(h.d)(f.Jc)},activeAll:function(e){var t=E.filter((function(e){return e.checked}));t.length>=1?o(Object(a.a)(!0,{Title:f.d,Text:f.ob},(function(){o(Object(l.a)(t,e))}))):Object(h.d)(f.Jc)},deleteAll:function(){var e=E.filter((function(e){return e.checked}));e.length>=1?o(Object(a.a)(!0,{Title:f.d,Text:f.R},(function(){o(Object(l.k)(e))}))):Object(h.d)(f.Jc)},reloadPage:function(){o(Object(l.m)())},addGroupPermission:function(){var e=E.filter((function(e){return e.checked}));if(1===e.length){var t=e[0].idGroups;S.push("/admincp/data-users/groups/".concat(t,"/").concat(1,"/permission"))}else e.length>1?Object(h.d)(f.jc):Object(h.d)(f.Jc)}}),s.a.createElement(p,{handleCloseSearch:function(){o(Object(v.e)(!1))}}),s.a.createElement(b,null),s.a.createElement("div",{className:"contentTable"},s.a.createElement("div",{className:"title"},s.a.createElement("h6",{className:"title_page"},f.Ab)),s.a.createElement(j,{datas:E,checkedOne:function(e){o(Object(l.j)(e))},checkedAll:function(e){r(!n),o(Object(l.i)(!n))},checkAll:n,activeOne:function(e,t){o(Object(a.a)(!0,{Title:f.d,Text:f.ob},(function(){o(Object(l.d)(e,!t))})))}}),s.a.createElement(A,{count:G,total:R,current_page:N,last_page:G,namepage:f.Ab,handleSetLimitLoad:function(){o(Object(l.m)())}})))}t.default=g}}]);