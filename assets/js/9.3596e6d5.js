(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(t,n,e){},152:function(t,n,e){"use strict";var i=e(144);e.n(i).a},192:function(t,n,e){"use strict";e.r(n);e(150);var i=e(151),a=e.n(i),o={name:"Comment",mounted:function(){this.init()},methods:{init:function(){var t=this.$themeConfig.comment;t&&new a.a({clientID:t.clientID,clientSecret:t.clientSecret,repo:t.repo||"",owner:t.owner||"",admin:t.admin||[],id:this.$page.path,distractionFreeMode:!1}).render("gitalk-container")}}},s=e(2),c=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"gitalk-container"}})}),[],!1,null,null,null).exports,r=e(74),l=e(73),p={name:"Post",components:{Comment:c,PostInfo:r.a,Toc:l.a}},u=(e(152),Object(s.a)(p,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post-container"},[e("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),e("PostInfo",{staticClass:"info",attrs:{post:t.$page}}),t._v(" "),e("Content",{staticClass:"post-content"}),t._v(" "),e("Toc",{staticClass:"toc"}),t._v(" "),t.$pagination?e("div",{staticClass:"pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1):t._e(),t._v(" "),e("Comment",{staticClass:"comment"})],1)}),[],!1,null,"21f300f2",null));n.default=u.exports}}]);