(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/github-issues-vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2484:function(e,t,n){"use strict";var r=n("483e"),a=n.n(r);a.a},"2a06":function(e,t,n){},"2a2d":function(e,t,n){"use strict";var r=n("801c"),a=n.n(r);a.a},3146:function(e,t,n){},"371d":function(e,t,n){},"483e":function(e,t,n){},"484d":function(e,t,n){"use strict";var r=n("2a06"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"801c":function(e,t,n){},"9c0c":function(e,t,n){},ad4f:function(e,t,n){"use strict";var r=n("3146"),a=n.n(r);a.a},bf31:function(e,t,n){"use strict";var r=n("371d"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("課題")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/issues"}},[e._v("issues")])],1),n("router-view",{staticClass:"page"})],1)},i=[],o=(n("5c0b"),n("2877")),u={},s=Object(o["a"])(u,a,i,!1,null,null,null),c=s.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"issue-list-view"},[e.loading?n("Indicator"):[n("IssueList",{attrs:{data:e.issues},scopedSlots:e._u([{key:"listItem",fn:function(t){var r=t.item;return[n("IssueListItem",{attrs:{item:r,onItemClick:e.onItemClick}})]}}])}),n("Pagenation",{attrs:{pageName:"issueList",pagenation:e.pagenation}})]],2)},f=[],d=(n("a9e3"),n("d3b7"),n("25f0"),n("a6f4")),v=(n("13d5"),n("ac1f"),n("466d"),n("1276"),n("96cf"),n("1da1")),g=(n("b0c0"),n("d81d"),n("e5c2")),m=n.n(g),b=n("ebd5"),h=n.n(b),_=n("27b5"),y=n.n(_),O=function e(t,n){return t instanceof Array?t.map((function(t){return e(t,n)})):t instanceof Object?h()(y()(t,n),(function(t){return e(t,n)})):t},j=function(e){return O(e,(function(e,t){return m()(t)}))};function k(){var e=Object(d["f"])(!1),t=Object(d["a"])((function(){return e.value})),n=function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n,r,a){var i,o,u,s,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=new AbortController,o=i.signal,setTimeout((function(){return i.abort()}),5e3),e.value=!0,u={signal:o,method:n,body:"POST"===n?JSON.stringify(null!==a&&void 0!==a?a:{}):null,headers:{"content-type":"application/json"}},t.next=7,fetch(r,u).catch((function(e){throw e.name,new Error("Fetch error: ".concat(e))}));case 7:if(s=t.sent,s.ok){t.next=10;break}throw new Error("Fetch error: ".concat(s.statusText));case 10:return e.value=!1,c=s.headers,t.t0=j,t.next=15,s.json();case 15:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.abrupt("return",{headers:c,contents:l});case 18:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),r=function(e){return n("GET",e)},a=function(e,t){return n("POST",e,t)};return{get:r,post:a,loading:t}}n("fb6a"),n("ddb0");var w=n("2909");function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(d["e"])({current:1,last:1}),n=function(e,n){t.current=e,t.last=n},r=function(e,t){return Object(w["a"])(Array(t+1).keys()).slice(e)},a=Object(d["a"])((function(){var n=t.last<e,a=t.last,i=t.current,o=!0,u=!0,s=r(1,n?a:2),c=function(){if(n)return[];var t=0,s=0;return i<=e?(t=3,s=e+2,o=!1):i>a-e?(t=a-e-1,s=a-2,u=!1):(t=i-Math.floor(e/2),s=i+Math.floor(e/2)),r(t,s)}(),l=n?[]:r(a-1,a);return{current:i,start:s,center:c,end:l,isStartDot:o,isEndDot:u,isPrev:i>1,isNext:i!==a}}));return{pagenation:a,setPagenation:n}}var I="https://api.github.com/repos/facebook/react/";function P(){var e=k(),t=e.get,n=e.loading,r=x(),a=r.pagenation,i=r.setPagenation,o=Object(d["f"])([]),u=Object(d["a"])((function(){return o.value})),s=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var n,r,a,u,s,c,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=l.length>0&&void 0!==l[0]?l[0]:1,u=l.length>1&&void 0!==l[1]?l[1]:10,e.next=4,t(I+"issues?page="+a+"&amp;per_page="+u);case 4:if(s=e.sent,o.value=s.contents,c=null===(n=s.headers.get("Link"))||void 0===n?void 0:n.split(",").reduce((function(e,t){var n,r,a=null===(n=t.match(/rel="(.*)"/))||void 0===n?void 0:n[1],i=null===(r=t.match(/\?page=(\d+)/))||void 0===r?void 0:r[1];return a&&i?(e[a]=Number(i),e):e}),{}),c){e.next=9;break}throw new Error("not valid format Links");case 9:i(a,null!==(r=c["last"])&&void 0!==r?r:a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{loading:n,issues:u,pagenation:a,fetchIssueList:s}}var N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"issue-list"},e._l(e.data,(function(t){return n("li",{key:t.node_id},[e._t("listItem",null,{item:t})],2)})),0)},C=[],L=Object(d["c"])({props:{data:{type:Array,required:!0}}}),S=L,q=(n("bf31"),Object(o["a"])(S,N,C,!1,null,null,null)),E=q.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"indicator"},[n("PulseLoader",{attrs:{loading:e.loading}})],1)},D=[],A=n("8a5d"),R=Object(d["c"])({props:{loading:{type:Boolean,default:!0}},components:{PulseLoader:A["a"]}}),T=R,M=(n("2484"),Object(o["a"])(T,$,D,!1,null,null,null)),U=M.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"issue-list-item"},[n("h4",[n("a",{attrs:{href:"#"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onClick(t)}}},[e._v(e._s(e.item.title))])]),n("p",[e._v("#"+e._s(e.item.number))])])},F=[],J=Object(d["c"])({props:{item:{type:Object,required:!0},onItemClick:{type:Function,required:!0}},setup:function(e){return{onClick:function(){return e.onItemClick(e.item)}}}}),G=J,V=(n("484d"),Object(o["a"])(G,B,F,!1,null,null,null)),z=V.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagenation"},[n("ul",[n("li",[e.pagenation.isPrev?n("router-link",{attrs:{to:{name:e.pageName,query:{page:e.pagenation.current-1}}}},[e._v(" < Prev ")]):n("span",[e._v("< Prev")])],1),e._l(e.pagenation.start,(function(t){return n("li",{key:t,class:t===e.pagenation.current&&"active"},[n("router-link",{attrs:{to:{name:e.pageName,query:{page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),n("li",{directives:[{name:"show",rawName:"v-show",value:e.pagenation.isStartDot,expression:"pagenation.isStartDot"}],staticClass:"dot"},[e._v("...")]),e._l(e.pagenation.center,(function(t){return n("li",{key:t,class:t===e.pagenation.current&&"active"},[n("router-link",{attrs:{to:{name:e.pageName,query:{page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),n("li",{directives:[{name:"show",rawName:"v-show",value:e.pagenation.isEndDot,expression:"pagenation.isEndDot"}],staticClass:"dot"},[e._v("...")]),e._l(e.pagenation.end,(function(t){return n("li",{key:t,class:t===e.pagenation.current&&"active"},[n("router-link",{attrs:{to:{name:e.pageName,query:{page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),n("li",[e.pagenation.isNext?n("router-link",{attrs:{to:{name:e.pageName,query:{page:e.pagenation.current+1}}}},[e._v(" Next > ")]):n("span",[e._v("Next > ")])],1)],2)])},K=[],Q=Object(d["c"])({props:{pageName:{type:String,required:!0},pagenation:{type:Object,required:!0}}}),W=Q,X=(n("ad4f"),Object(o["a"])(W,H,K,!1,null,null,null)),Y=X.exports,Z=Object(d["c"])({components:{Indicator:U,IssueList:E,IssueListItem:z,Pagenation:Y},beforeRouteUpdate:function(e,t,n){var r,a=null!==(r=null===e||void 0===e?void 0:e.query.page)&&void 0!==r?r:1;this.fetchIssueList(a?Number(a):1),n()},setup:function(e,t){var n=t.root,r=P(),a=r.loading,i=r.issues,o=r.fetchIssueList,u=r.pagenation;Object(d["d"])((function(){var e,t,r=null!==(e=null===(t=n.$route)||void 0===t?void 0:t.query.page)&&void 0!==e?e:1;o(r?Number(r):1)}));var s=function(e){n.$router.push("/issues/"+e.number.toString())};return{loading:a,issues:i,onItemClick:s,pagenation:u,fetchIssueList:o}}}),ee=Z,te=Object(o["a"])(ee,p,f,!1,null,null,null),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"issue-detail-view"},[e.loading?n("Indicator"):[n("h2",[e._v(e._s(e.issue.title)+" #"+e._s(e.issue.number))]),n("p",[e._v(e._s(e.issue.body))]),n("button",{on:{click:e.onBack}},[e._v("戻る")])]],2)},ae=[];function ie(){var e=k(),t=e.get,n=e.loading,r=Object(d["f"])({url:"",repositoryUrl:"",labelsUrl:"",commentsUrl:"",eventsUrl:"",htmlUrl:"",id:0,nodeId:"",number:0,title:"",user:null,labels:[],state:"",locked:!1,assignee:null,assignees:[],milestone:null,comments:0,createdAt:"",updatedAt:"",closedAt:"",authorAssociation:"",activeLockReason:null,body:"",performedViaGithubApp:null,pullRequest:null,repository:null}),a=Object(d["a"])((function(){return r.value})),i=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t(I+"issues/"+n);case 2:a=e.sent,r.value=a.contents;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{loading:n,issue:a,fetchIssueDetail:i}}var oe=Object(d["c"])({components:{Indicator:U},props:{id:{type:Number,required:!0}},setup:function(e,t){var n=t.root,r=ie(),a=r.loading,i=r.issue,o=r.fetchIssueDetail;Object(d["d"])((function(){o(e.id)}));var u=function(){n.$router.back()};return{loading:a,issue:i,onBack:u}}}),ue=oe,se=(n("2a2d"),Object(o["a"])(ue,re,ae,!1,null,null,null)),ce=se.exports;r["default"].use(l["a"]);var le=[{path:"/issues",name:"issueList",component:ne},{path:"/issues/:id",name:"issueDetail",component:ce,props:!0}],pe=new l["a"]({mode:"history",base:"/github-issues-vue/",routes:le}),fe=pe,de=n("2f62");r["default"].use(de["a"]);var ve=new de["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].use(d["b"]),r["default"].config.productionTip=!1,new r["default"]({router:fe,store:ve,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.45f0a784.js.map