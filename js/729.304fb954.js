"use strict";(self["webpackChunkmy_taobao"]=self["webpackChunkmy_taobao"]||[]).push([[729],{2729:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(e){return t.$router.go("-1")}}}),e("van-search",{attrs:{shape:"round","show-action":"",placeholder:"请输入搜索关键词",clearable:"",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch(t.searchInput)}},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:function(e){return t.goSearch(t.searchInput)}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t.history.length?e("div",{staticClass:"search-history"},[e("div",{staticClass:"title"},[e("span",[t._v("最近搜索")]),e("van-icon",{attrs:{name:"delete-o",size:"16"},on:{click:t.clearHistory}})],1),e("div",{staticClass:"list"},t._l(t.history,(function(s){return e("div",{key:s,staticClass:"list-item",on:{click:function(e){return t.goSearch(s)}}},[t._v(" "+t._s(s)+" ")])})),0)]):t._e()],1)},n=[],a=(s(4114),s(2272)),i={name:"SearchIndex",data(){return{searchInput:"",history:(0,a.FA)()}},methods:{goSearch(t){const e=this.history.indexOf(t);console.log(e),-1!==e&&this.history.splice(e,1),this.history.unshift(t),(0,a.b1)(this.history),this.$router.push(`/searchlist?search=${t}`)},clearHistory(){this.history=[],(0,a.b1)([])}}},o=i,c=s(1656),l=(0,c.A)(o,r,n,!1,null,"f8e3a534",null),u=l.exports}}]);
//# sourceMappingURL=729.304fb954.js.map