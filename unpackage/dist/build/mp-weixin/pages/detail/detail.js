(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"569f":function(t,n,e){"use strict";e.r(n);var a=e("fa12"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=o.a},"591d":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"618c":function(t,n,e){},"7e45":function(t,n,e){"use strict";var a=e("618c"),o=e.n(a);o.a},8840:function(t,n,e){"use strict";e.r(n);var a=e("591d"),o=e("569f");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("7e45");var u,i=e("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},ed68:function(t,n,e){"use strict";(function(t){e("4a1e");a(e("66fd"));var n=a(e("8840"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},fa12:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a")),o=r(e("0863"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,o,r,u){try{var i=t[r](u),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(a,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(a,o){var r=t.apply(n,e);function i(t){u(r,a,o,i,c,"next",t)}function c(t){u(r,a,o,i,c,"throw",t)}i(void 0)}))}}var c={data:function(){return{detail:"",photos:[]}},methods:{clickPhotos:function(){var t=[];this.photos.map((function(n){t.push(n.image)})),wx.previewImage({urls:this.photos})}},onLoad:function(n){var e=this;return i(a.default.mark((function r(){var u,i,c,f,l;return a.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=n.id,i=n.collectionName,a.next=3,(0,o.default)({collectionName:i,id:u,loadingTop:!0});case 3:c=a.sent,f=c.data[0],l=[],f.casts.map((function(t){t.avatars&&l.push(t.avatars.small)})),e.detail=f,e.photos=l,t.setNavigationBarTitle({title:e.detail.title}),t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#ff0000",animation:{duration:400,timingFunc:"easeIn"}});case 11:case"end":return a.stop()}}),r)})))()}};n.default=c}).call(this,e("543d")["default"])}},[["ed68","common/runtime","common/vendor"]]]);