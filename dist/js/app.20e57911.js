(function(t){function e(e){for(var n,c,i=e[0],r=e[1],l=e[2],d=0,f=[];d<i.length;d++)c=i[d],s[c]&&f.push(s[c][0]),s[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var r=o[i];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},s={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0231":function(t,e,o){},"0a42":function(t,e,o){"use strict";var n=o("d82d"),s=o.n(n);s.a},"0f8d":function(t,e,o){},1428:function(t,e,o){"use strict";var n=o("a009"),s=o.n(n);s.a},"269c":function(t,e,o){"use strict";var n=o("0f8d"),s=o.n(n);s.a},4678:function(t,e,o){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=a(t);return o(e)}function a(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="4678"},"4ee7":function(t,e,o){"use strict";var n=o("c3af"),s=o.n(n);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),s=o("f5df"),a=o.n(s),c=o("69e4"),i=o.n(c),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"application",attrs:{id:"app"}},[o("menu-item",{directives:[{name:"show",rawName:"v-show",value:t.menuSelected,expression:"menuSelected"}]}),o("main",{staticClass:"main"},[t.isAnalyticsView?o("AnalyticsView"):t.isTodoListView?o("TodoListView"):o("CountDownView")],1),o("menu-icon",{attrs:{isNavOpen:t.menuSelected}})],1)},l=[],u=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),d=o("2f62"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"count-down-view__wrapper",class:t.getThemeClass()},[o("div",{staticClass:"todolist"},[o("todo-creator"),t.doing?o("div",{staticClass:"count-down"},[o("todo-list",{attrs:{todoList:[t.doing],showTomatoes:"",tomatoes:t.tomatoes},on:{onCheckTodo:t.resetCountDown}}),o("div",{staticClass:"count-down-time"},[t._v(t._s(t.formatedRemainTime))])],1):o("p",[t._v("沒有 Todo, 新增一個吧!")]),o("div",{staticClass:"bottom"},[t.todoQueue.length>1?o("div",[o("todo-list",{attrs:{todoList:t.todoQueue}})],1):t._e()])],1),o("div",{staticClass:"clock-controller",class:t.getClockStatusClass()},[o("button",{staticClass:"count-down-btn",style:"background: conic-gradient("+t.getProgressbar()+", transparent 0);",on:{click:t.startCountDown}},[o("div",{staticClass:"count-down-btn-icon"},[t.isContinue?o("icon-pause"):o("icon-play")],1),o("button",{staticClass:"reset-btn",on:{click:function(e){return e.stopPropagation(),t.resetCountDown(e)}}})])])])},m=[],b=o("ec1b"),p=o("dfa1"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-todo__area"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoDesc,expression:"newTodoDesc"}],staticClass:"new-todo-desc",attrs:{type:"text",placeholder:"ADD A NEW MISSION..."},domProps:{value:t.newTodoDesc},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onClickAddTodo(e)},input:function(e){e.target.composing||(t.newTodoDesc=e.target.value)}}}),o("plus-icon",{staticClass:"plus-icon",on:{click:t.onClickAddTodo}})],1)},j=[],v=o("758f"),O={components:{PlusIcon:v["a"]},data:function(){return{newTodoDesc:""}},methods:{onClickAddTodo:function(){this.newTodoDesc?(this.$store.commit("addTodo",this.newTodoDesc),this.newTodoDesc=""):alert("待辦事項不能為空!")}}},w=O,y=(o("269c"),o("2877")),g=Object(y["a"])(w,h,j,!1,null,"34a81a93",null),C=g.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ol",{staticClass:"todo-item__wrapper",class:{"show-tomatoes":t.showTomatoes,done:t.done}},[t._l(t.todoList,function(e){return o("li",{key:e.id,staticClass:"todo-item"},[o("label",[o("input",{staticClass:"todo-item-checkbox",attrs:{type:"checkbox"}}),o("span",{staticClass:"checkmark",on:{click:function(o){return o.stopPropagation(),t.onCheckTodo(e.id)}}}),o("h3",{staticClass:"todo-label"},[o("p",{staticClass:"desc"},[t._v(t._s(e.desc))])]),o("div",{staticClass:"tomatoes__wrapper"},[t._l(t.tomatoes,function(t,e){return o("span",{key:e,staticClass:"tomatoes"})}),o("span",{staticClass:"tomatoes transparent"})],2)]),o("icon-pencil",{directives:[{name:"show",rawName:"v-show",value:!t.showTomatoes,expression:"!showTomatoes"}],staticClass:"icon",on:{click:function(o){return o.stopPropagation(),t.onEditTodo(e.id,e.desc)}}}),o("icon-delete",{directives:[{name:"show",rawName:"v-show",value:!t.showTomatoes,expression:"!showTomatoes"}],staticClass:"icon",on:{click:function(o){return o.stopPropagation(),t.onDeleteTodo(e.id)}}})],1)}),t.showTomatoes?t._e():o("span",{staticClass:"more"},[t._v("MORE")])],2)},_=[],T=(o("c5f6"),o("0647")),P=o("d902"),D={components:{IconDelete:T["a"],IconPencil:P["a"]},props:{todoList:{type:Array,default:[]},showTomatoes:{type:Boolean,default:!1},tomatoes:{type:Number,default:0},done:{type:Boolean,default:!1}},data:function(){return{}},methods:{onDeleteTodo:function(t){confirm("確定刪除?")&&this.$store.commit("onDeleteTodo",t)},onCheckTodo:function(t){confirm("完成了嗎?")&&this.$store.commit("finishTodo",t)},onEditTodo:function(t,e){var o=prompt("編輯 Todo",e);o?this.$store.commit("onEditTodo",{id:t,newDesc:o}):alert("不能輸入空字串")}}},S=D,I=(o("f430"),Object(y["a"])(S,k,_,!1,null,"1ebb7e84",null)),E=I.exports;function x(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function A(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?x(o,!0).forEach(function(e){Object(u["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):x(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var M={components:{IconPlay:b["a"],IconPause:p["a"],TodoCreator:C,TodoList:E},data:function(){return{defaultWorkTIme:1500,defaultBreakTime:300,tomatoRemainTime:1500,tomatoBreakTime:300,isContinue:!1,tomatoes:0,timer:[],selected:""}},computed:A({},Object(d["b"])(["todosAll"]),{formatedRemainTime:function(){var t=this.tomatoRemainTime>=0?this.tomatoRemainTime:this.tomatoBreakTime,e=Math.floor(t/60);e=e<10?"0".concat(e):e;var o=t%60<10?"0".concat(t%60):t%60;return"".concat(e,":").concat(o)},todos:function(){return this.todosAll.filter(function(t){return!t.done})},doing:function(){return this.todos?this.todos[0]:null},todoQueue:function(){return this.todos.filter(function(t,e){return e>0&&e<=3})}}),methods:{getProgressbar:function(){var t=this.tomatoRemainTime>=0?"#FF4384":"#00A7FF",e=this.tomatoRemainTime>=0?(this.defaultWorkTIme-this.tomatoRemainTime)/this.defaultWorkTIme:(this.defaultBreakTime-this.tomatoBreakTime)/this.defaultBreakTime;return"".concat(t," 0 ").concat(100*e,"%")},getThemeClass:function(){return this.tomatoRemainTime>=0?"theme-pink":"theme-blue"},getClockStatusClass:function(){return this.isContinue?"status-continue":"status-pause"},startCountDown:function(){var t=this;this.timer.forEach(function(t){return clearInterval(t)}),this.isContinue=!this.isContinue,this.isContinue&&this.timer.push(setInterval(function(){t.tomatoRemainTime>0?t.tomatoRemainTime-=1:(t.tomatoRemainTime=-1,t.tomatoBreakTime>0?t.tomatoBreakTime-=1:(t.tomatoes+=1,t.resetCountDown(),t.startCountDown()))},1e3))},pauseCountDown:function(){this.timer.forEach(function(t){return clearInterval(t)})},resetCountDown:function(){this.timer.forEach(function(t){return clearInterval(t)}),this.isContinue=!1,this.tomatoRemainTime=25,this.tomatoBreakTime=6}},mounted:function(){this.todos&&(this.tomatoes=this.doing.tomatoes)}},z=M,L=(o("4ee7"),Object(y["a"])(z,f,m,!1,null,"06b5cdd8",null)),N=L.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"analytics-view__wrapper"},[t._m(0),o("section",{staticClass:"chart__block"},[t._m(1),o("div",{staticClass:"block__body"},[o("tomato-chart")],1)])])},$=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"focus__block"},[o("div",{staticClass:"block__header"},[o("h2",{staticClass:"block__title"},[t._v("FOCUS TIME")])]),o("div",{staticClass:"block__body"},[o("div",{staticClass:"today-count"}),o("div",{staticClass:"week-count"})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"block__header"},[o("h2",{staticClass:"block__title"},[t._v("CHART")])])}],B=o("1fca");function V(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function F(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?V(o,!0).forEach(function(e){Object(u["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):V(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var J,q,G={extends:B["a"],components:{Bar:B["a"]},data:function(){return{chartdata:{datasets:[{label:"Tomatoes",backgroundColor:["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#FF4384"]}]},options:{scales:{xAxes:[{barThickness:24,gridLines:{offsetGridLines:!1}}],yAxes:[{gridLines:{offsetGridLines:!1}}]}}}},computed:F({},Object(d["b"])(["todosAll"])),mounted:function(){var t=(new Date).getMonth()+1,e=(new Date).getDate(),o=7,n=[],s=e,a=o;while(a>0)n.push("".concat(t,"/").concat(s)),s-=1,a-=1;this.chartdata.labels=n;var c={};this.todosAll.forEach(function(t){t.done&&(c[t.finishDate]?c[t.finishDate]+=1:c[t.finishDate]=1)});var i=n.reverse();this.chartdata.datasets[0].data=i.map(function(t){return c[t]?c[t]:0}),this.renderChart(this.chartdata,this.options)}},U=G,W=o("bdb3"),Q=o.n(W),H=Object(y["a"])(U,J,q,!1,null,"0ba99544",null);"function"===typeof Q.a&&Q()(H);var Y=H.exports,K={components:{TomatoChart:Y},data:function(){return{}},methods:{}},X=K,Z=(o("b0f5"),Object(y["a"])(X,R,$,!1,null,"4a2ef3b8",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list__view"},[o("section",{staticClass:"todo-creator__block"},[o("todo-creator")],1),o("section",{staticClass:"todo-list__block"},[o("div",{staticClass:"block__header"},[o("h2",{staticClass:"block__title"},[t._v("TO-DO")]),t.isTodoPanelOpen?o("menu-up",{staticClass:"icon",on:{click:t.toggleTodoPanelOpen}}):o("menu-down",{staticClass:"icon",on:{click:t.toggleTodoPanelOpen}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isTodoPanelOpen,expression:"isTodoPanelOpen"}],staticClass:"block__list"},[o("todo-list",{attrs:{todoList:t.queueTodo}})],1)]),o("section",{staticClass:"done-list__block"},[o("div",{staticClass:"block__header"},[o("h2",{staticClass:"block__title"},[t._v("DONE")]),t.isDonePanelOpen?o("menu-up",{staticClass:"icon",on:{click:t.toggleDonePanelOpen}}):o("menu-down",{staticClass:"icon",on:{click:t.toggleDonePanelOpen}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isDonePanelOpen,expression:"isDonePanelOpen"}],staticClass:"block__list"},[o("todo-list",{staticClass:"bottom",attrs:{done:"",todoList:t.doneTodo}})],1)])])},ot=[],nt=o("ec8f"),st=o("46c2");function at(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function ct(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?at(o,!0).forEach(function(e){Object(u["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):at(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var it={components:{TodoCreator:C,TodoList:E,MenuUp:nt["a"],MenuDown:st["a"]},data:function(){return{newTodoDate:"2019-07-29",isTodoPanelOpen:!0,isDonePanelOpen:!0}},computed:ct({},Object(d["b"])(["todosAll"]),{queueTodo:function(){return this.todosAll.filter(function(t){return!t.done})},doneTodo:function(){return this.todosAll.filter(function(t){return t.done})}}),methods:{toggleTodoPanelOpen:function(){this.isTodoPanelOpen=!this.isTodoPanelOpen},toggleDonePanelOpen:function(){this.isDonePanelOpen=!this.isDonePanelOpen}}},rt=it,lt=(o("e845"),Object(y["a"])(rt,et,ot,!1,null,"e6f52a88",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"nav__item__wrapper"},[o("li",{staticClass:"nav__item",class:{"is-selected":t.selected("todo")},on:{click:function(e){return t.onClickMenuItem("todo")}}},[o("icon-todo-list",{staticClass:"icon"}),o("span",{staticClass:"label"},[t._v("TODO-LIST")])],1),o("li",{staticClass:"nav__item",class:{"is-selected":t.selected("anal")},on:{click:function(e){return t.onClickMenuItem("anal")}}},[o("icon-bar-chart",{staticClass:"icon"}),o("span",{staticClass:"label"},[t._v("ANALYTICS")])],1)])},ft=[],mt=o("0148"),bt=o("168a"),pt=o("2d2b");function ht(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function jt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ht(o,!0).forEach(function(e){Object(u["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ht(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var vt={components:{IconTodoList:mt["a"],IconBarChart:bt["a"],IconMusic:pt["a"]},data:function(){return{}},methods:{onClickMenuItem:function(t){this.$store.commit("onClickMenu",t)},selected:function(t){return this.menuSelected===t}},computed:jt({},Object(d["b"])(["menuSelected"]))},Ot=vt,wt=(o("0a42"),Object(y["a"])(Ot,dt,ft,!1,null,"7e0da2b7",null)),yt=wt.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"nav-menu"},[t.menuSelected?o("ul",{staticClass:"nav__icon__wrapper"},[o("li",{staticClass:"nav__icon",on:{click:function(e){return t.onClickMenuIcon("")}}},[o("icon-close-btn",{staticClass:"icon"})],1)]):o("ul",{staticClass:"nav__icon__wrapper"},[o("li",{staticClass:"nav__icon",on:{click:function(e){return t.onClickMenuIcon("todo")}}},[o("icon-todo-list",{staticClass:"icon"})],1),o("li",{staticClass:"nav__icon",on:{click:function(e){return t.onClickMenuIcon("anal")}}},[o("icon-bar-chart",{staticClass:"icon"})],1)]),o("h1",{staticClass:"logo"},[t._v("POMODORO")])])},Ct=[],kt=o("d4dd");function _t(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function Tt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?_t(o,!0).forEach(function(e){Object(u["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):_t(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var Pt={components:{IconCloseBtn:kt["a"],IconTodoList:mt["a"],IconBarChart:bt["a"],IconMusic:pt["a"]},data:function(){return{}},methods:{onClickMenuIcon:function(t){this.$store.commit("onClickMenu",t)}},computed:Tt({},Object(d["b"])(["menuSelected"]))},Dt=Pt,St=(o("1428"),Object(y["a"])(Dt,gt,Ct,!1,null,"4779d210",null)),It=St.exports;function Et(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function xt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?Et(o,!0).forEach(function(e){Object(u["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):Et(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var At={name:"app",components:{CountDownView:N,AnalyticsView:tt,TodoListView:ut,MenuItem:yt,MenuIcon:It},data:function(){return{}},methods:{},computed:xt({},Object(d["b"])(["menuSelected"]),{isAnalyticsView:function(){return"anal"===this.menuSelected},isTodoListView:function(){return"todo"===this.menuSelected},isRingtonesView:function(){return"ring"===this.menuSelected}})},Mt=At,zt=(o("5c0b"),Object(y["a"])(Mt,r,l,!1,null,null,null)),Lt=zt.exports;o("6762"),o("2fdb");n["a"].use(d["a"]);var Nt=window.localStorage,Rt=[{id:1,desc:"the First thing to do today",tomatoes:2,done:!0,sort:1,finishDate:"7/20"},{id:2,desc:"the second thing to do today",tomatoes:2,done:!1,sort:2},{id:3,desc:"the third thing to do today",tomatoes:5,done:!0,sort:2,finishDate:"7/7"},{id:4,desc:"the fourth thing to do today",tomatoes:5,done:!0,sort:2,finishDate:"7/19"},{id:5,desc:"the fifth thing to do today",tomatoes:5,done:!0,sort:2,finishDate:"7/20"}];Rt.forEach(function(t,e){Nt.setItem("tmt-default-".concat(e),JSON.stringify(t))});for(var $t=[],Bt=0;Bt<Nt.length;Bt+=1)if(Nt.key(Bt).includes("tmt-")){var Vt=JSON.parse(Nt.getItem(Nt.key(Bt)));$t.push(Vt)}var Ft=new d["a"].Store({state:{menuSelected:"",todosAll:$t},mutations:{finishTodo:function(t,e){t.todosAll.filter(function(t){if(t.id===e){t.done=!0;var o=new Date;return t.finishDate="".concat(o.getMonth()+1,"/").concat(o.getDate()),Nt.setItem("tmt-".concat(t.id),JSON.stringify(t)),t}return t})},addTodo:function(t,e){var o=(new Date).getTime(),n={desc:e,done:!1,sort:o,id:o};t.todosAll.push(n),Nt.setItem("tmt-".concat(o),JSON.stringify(n))},onEditTodo:function(t,e){t.todosAll.filter(function(t){return t.id===e.id&&(t.desc=e.newDesc,Nt.setItem("tmt-".concat(t.id),JSON.stringify(t))),t})},onDeleteTodo:function(t,e){t.todosAll=t.todosAll.filter(function(t){return t.id!==e}),Nt.removeItem("tmt-".concat(e))},onClickMenu:function(t,e){t.menuSelected=e}}});o("d48d");n["a"].use(a.a),n["a"].use(i.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Lt)},store:Ft}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),s=o.n(n);s.a},"5e27":function(t,e,o){},a009:function(t,e,o){},b0f5:function(t,e,o){"use strict";var n=o("0231"),s=o.n(n);s.a},bdb3:function(t,e){},c3af:function(t,e,o){},d82d:function(t,e,o){},dece:function(t,e,o){},dfe3:function(t,e,o){},e845:function(t,e,o){"use strict";var n=o("dfe3"),s=o.n(n);s.a},f430:function(t,e,o){"use strict";var n=o("dece"),s=o.n(n);s.a}});
//# sourceMappingURL=app.20e57911.js.map