import{_ as t,a as s,b as n,c as a,i as r,s as e,d as o,S as i,f as u,e as c,t as p,k as f,g as h,h as l,r as m,j as d,o as x,p as v,F as j,n as g}from"./index.8c49c113.js";import{_ as y,a as b}from"./asyncToGenerator.2f3efa47.js";function k(t){var s,n,a,r,e=t.post.title+"";return document.title=s=t.post.title,{c:function(){n=u(),a=c("h1"),r=p(e)},l:function(t){n=f(t),a=h(t,"H1",{},!1);var s=l(a);r=m(s,e),s.forEach(d)},m:function(t,s){x(t,n,s),x(t,a,s),v(a,r)},p:function(t,n){t.post&&s!==(s=n.post.title)&&(document.title=s),t.post&&e!==(e=n.post.title+"")&&j(r,e)},i:g,o:g,d:function(t){t&&(d(n),d(a))}}}function w(t){return _.apply(this,arguments)}function _(){return(_=y(b.mark(function t(s){var n,a,r;return b.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("writings/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(a.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function q(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n("post",a=t.post)},{post:a}}export default(function(u){function c(t){var i;return s(this,c),i=n(this,a(c).call(this)),r(o(i),t,q,k,e,["post"]),i}return t(c,i),c}());export{w as preload};