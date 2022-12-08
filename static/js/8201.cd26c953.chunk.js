/*! For license information please see 8201.cd26c953.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[8201],{61188:function(t,e,n){n.d(e,{S:function(){return a},a:function(){return m},b:function(){return p},c:function(){return v},d:function(){return L},f:function(){return r},i:function(){return b},r:function(){return o}});var r="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")(),a=o.Symbol,u=Object.prototype,c=u.hasOwnProperty,l=u.toString,f=a?a.toStringTag:void 0;var s=Object.prototype.toString;var d=a?a.toStringTag:void 0;function p(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(o){}var i=l.call(t);return r&&(e?t[f]=n:delete t[f]),i}(t):function(t){return s.call(t)}(t)}function v(t){return null!=t&&"object"==typeof t}function m(t){return"symbol"==typeof t||v(t)&&"[object Symbol]"==p(t)}var g=/\s/;var h=/^\s+/;function x(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&g.test(t.charAt(e)););return e}(t)+1).replace(h,""):t}function b(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var y=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,k=parseInt;function R(t){if("number"==typeof t)return t;if(m(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=x(t);var n=w.test(t);return n||Z.test(t)?k(t.slice(2),n?2:8):y.test(t)?NaN:+t}var T=function(){return o.Date.now()},A=Math.max,P=Math.min;function L(t,e,n){var r,i,o,a,u,c,l=0,f=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,o=i;return r=i=void 0,l=e,a=t.apply(o,n)}function v(t){return l=t,u=setTimeout(g,e),f?p(t):a}function m(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=o}function g(){var t=T();if(m(t))return h(t);u=setTimeout(g,function(t){var n=e-(t-c);return s?P(n,o-(t-l)):n}(t))}function h(t){return u=void 0,d&&r?p(t):(r=i=void 0,a)}function x(){var t=T(),n=m(t);if(r=arguments,i=this,c=t,n){if(void 0===u)return v(c);if(s)return clearTimeout(u),u=setTimeout(g,e),p(c)}return void 0===u&&(u=setTimeout(g,e)),a}return e=R(e)||0,b(n)&&(f=!!n.leading,o=(s="maxWait"in n)?A(R(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},x.flush=function(){return void 0===u?a:h(T())},x}},36601:function(t,e,n){n.d(e,{F:function(){return Et},a:function(){return Bt},b:function(){return Vt},c:function(){return Ft},d:function(){return Lt},e:function(){return k},f:function(){return jt},r:function(){return Ct},u:function(){return zt}});var r=n(44925),i=n(93433),o=n(74165),a=n(4942),u=n(1413),c=n(15861),l=n(15945),f=n(51554),s=n(61188),d=["alignment","allowedPlacements","autoAlignment"],p=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"],v=["strategy"],m=["mainAxis","crossAxis","limiter"];function g(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function x(t){return["top","bottom"].includes(g(t))?"x":"y"}function b(t){return"y"===t?"height":"width"}function y(t,e,n){var r,i=t.reference,o=t.floating,a=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,c=x(e),l=b(c),f=i[l]/2-o[l]/2,s="x"===c;switch(g(e)){case"top":r={x:a,y:i.y-o.height};break;case"bottom":r={x:a,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:u};break;case"left":r={x:i.x-o.width,y:u};break;default:r={x:i.x,y:i.y}}switch(h(e)){case"start":r[c]-=f*(n&&s?-1:1);break;case"end":r[c]+=f*(n&&s?-1:1)}return r}var w=function(){var t=(0,c.Z)((0,o.Z)().mark((function t(e,n,r){var i,c,l,f,s,d,p,v,m,g,h,x,b,w,Z,k,R,T,A,P,L,E,O,j,D;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.placement,c=void 0===i?"bottom":i,l=r.strategy,f=void 0===l?"absolute":l,s=r.middleware,d=void 0===s?[]:s,p=r.platform,t.next=3,null==p.isRTL?void 0:p.isRTL(n);case 3:return v=t.sent,t.next=6,p.getElementRects({reference:e,floating:n,strategy:f});case 6:m=t.sent,g=y(m,c,v),h=g.x,x=g.y,b=c,w={},Z=0,k=0;case 12:if(!(k<d.length)){t.next=45;break}return R=d[k],T=R.name,A=R.fn,t.next=16,A({x:h,y:x,initialPlacement:c,placement:b,strategy:f,middlewareData:w,rects:m,platform:p,elements:{reference:e,floating:n}});case 16:if(P=t.sent,L=P.x,E=P.y,O=P.data,j=P.reset,h=null!=L?L:h,x=null!=E?E:x,w=(0,u.Z)((0,u.Z)({},w),{},(0,a.Z)({},T,(0,u.Z)((0,u.Z)({},w[T]),O))),!(j&&Z<=50)){t.next=42;break}if(Z++,"object"!==typeof j){t.next=40;break}if(j.placement&&(b=j.placement),!j.rects){t.next=37;break}if(!0!==j.rects){t.next=35;break}return t.next=32,p.getElementRects({reference:e,floating:n,strategy:f});case 32:t.t0=t.sent,t.next=36;break;case 35:t.t0=j.rects;case 36:m=t.t0;case 37:D=y(m,b,v),h=D.x,x=D.y;case 40:return k=-1,t.abrupt("continue",42);case 42:k++,t.next=12;break;case 45:return t.abrupt("return",{x:h,y:x,placement:b,strategy:f,middlewareData:w});case 46:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function Z(t){return"number"!==typeof t?function(t){return(0,u.Z)({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function k(t){return(0,u.Z)((0,u.Z)({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function R(t,e){return T.apply(this,arguments)}function T(){return T=(0,c.Z)((0,o.Z)().mark((function t(e,n){var r,i,a,c,l,f,s,d,p,v,m,g,h,x,b,y,w,R,T,A,P,L;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),i=e.x,a=e.y,c=e.platform,l=e.rects,f=e.elements,s=e.strategy,p=(d=n).boundary,v=void 0===p?"clippingAncestors":p,m=d.rootBoundary,g=void 0===m?"viewport":m,h=d.elementContext,x=void 0===h?"floating":h,b=d.altBoundary,y=void 0!==b&&b,w=d.padding,R=Z(void 0===w?0:w),T="floating"===x?"reference":"floating",A=f[y?T:x],t.t0=k,t.t1=c,t.next=10,null==c.isElement?void 0:c.isElement(A);case 10:if(t.t2=r=t.sent,null==t.t2){t.next=15;break}t.t3=r,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=A,t.next=26;break;case 20:if(t.t5=A.contextElement,t.t5){t.next=25;break}return t.next=24,null==c.getDocumentElement?void 0:c.getDocumentElement(f.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=v,t.t8=g,t.t9=s,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:if(t.t11=t.sent,P=(0,t.t0)(t.t11),t.t12=k,!c.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=49;break}return t.t14=c,t.t15="floating"===x?(0,u.Z)((0,u.Z)({},l.floating),{},{x:i,y:a}):l.reference,t.next=41,null==c.getOffsetParent?void 0:c.getOffsetParent(f.floating);case 41:return t.t16=t.sent,t.t17=s,t.t18={rect:t.t15,offsetParent:t.t16,strategy:t.t17},t.next=46,t.t14.convertOffsetParentRelativeRectToViewportRelativeRect.call(t.t14,t.t18);case 46:t.t13=t.sent,t.next=50;break;case 49:t.t13=l[x];case 50:return t.t19=t.t13,L=(0,t.t12)(t.t19),t.abrupt("return",{top:P.top-L.top+R.top,bottom:L.bottom-P.bottom+R.bottom,left:P.left-L.left+R.left,right:L.right-P.right+R.right});case 53:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}var A=Math.min,P=Math.max;function L(t,e,n){return P(t,A(e,n))}var E={left:"right",right:"left",bottom:"top",top:"bottom"};function O(t){return t.replace(/left|right|bottom|top/g,(function(t){return E[t]}))}function j(t,e,n){void 0===n&&(n=!1);var r=h(t),i=x(t),o=b(i),a="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=O(a)),{main:a,cross:O(a)}}var D={start:"end",end:"start"};function C(t){return t.replace(/start|end/g,(function(t){return D[t]}))}var S=["top","right","bottom","left"],H=S.reduce((function(t,e){return t.concat(e,e+"-start",e+"-end")}),[]);function W(t,e,n){return(t?[].concat((0,i.Z)(n.filter((function(e){return h(e)===t}))),(0,i.Z)(n.filter((function(e){return h(e)!==t})))):n.filter((function(t){return g(t)===t}))).filter((function(n){return!t||(h(n)===t||!!e&&C(n)!==n)}))}function N(t){var e=O(t);return[C(t),e,C(e)]}var M=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn:function(e){return(0,c.Z)((0,o.Z)().mark((function n(){var a,u,c,l,f,s,d,v,m,h,x,b,y,w,Z,k,T,A,P,L,E,D,C,S,H,W,M,F,B,V,z,I,_,U,$;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.placement,c=e.middlewareData,l=e.rects,f=e.initialPlacement,s=e.platform,d=e.elements,m=(v=t).mainAxis,h=void 0===m||m,x=v.crossAxis,b=void 0===x||x,y=v.fallbackPlacements,w=v.fallbackStrategy,Z=void 0===w?"bestFit":w,k=v.flipAlignment,T=void 0===k||k,A=(0,r.Z)(v,p),P=g(u),L=P===f,E=y||(L||!T?[O(f)]:N(f)),D=[f].concat((0,i.Z)(E)),n.next=8,R(e,A);case 8:if(C=n.sent,S=[],H=(null==(a=c.flip)?void 0:a.overflows)||[],h&&S.push(C[P]),!b){n.next=23;break}return n.t0=j,n.t1=u,n.t2=l,n.next=18,null==s.isRTL?void 0:s.isRTL(d.floating);case 18:n.t3=n.sent,W=(0,n.t0)(n.t1,n.t2,n.t3),M=W.main,F=W.cross,S.push(C[M],C[F]);case 23:if(H=[].concat((0,i.Z)(H),[{placement:u,overflows:S}]),S.every((function(t){return t<=0}))){n.next=40;break}if(z=(null!=(B=null==(V=c.flip)?void 0:V.index)?B:0)+1,!(I=D[z])){n.next=29;break}return n.abrupt("return",{data:{index:z,overflows:H},reset:{placement:I}});case 29:_="bottom",n.t4=Z,n.next="bestFit"===n.t4?33:"initialPlacement"===n.t4?36:38;break;case 33:return $=null==(U=H.map((function(t){return[t,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:U[0].placement,$&&(_=$),n.abrupt("break",38);case 36:return _=f,n.abrupt("break",38);case 38:if(u===_){n.next=40;break}return n.abrupt("return",{reset:{placement:_}});case 40:return n.abrupt("return",{});case 41:case"end":return n.stop()}}),n)})))()}}};function F(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function B(t){return S.some((function(e){return t[e]>=0}))}var V=function(t){var e=void 0===t?{}:t,n=e.strategy,i=void 0===n?"referenceHidden":n,a=(0,r.Z)(e,v);return{name:"hide",fn:function(t){return(0,c.Z)((0,o.Z)().mark((function e(){var n,r,c,l,f;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rects,e.t0=i,e.next="referenceHidden"===e.t0?4:"escaped"===e.t0?9:14;break;case 4:return e.next=6,R(t,(0,u.Z)((0,u.Z)({},a),{},{elementContext:"reference"}));case 6:return r=e.sent,c=F(r,n.reference),e.abrupt("return",{data:{referenceHiddenOffsets:c,referenceHidden:B(c)}});case 9:return e.next=11,R(t,(0,u.Z)((0,u.Z)({},a),{},{altBoundary:!0}));case 11:return l=e.sent,f=F(l,n.floating),e.abrupt("return",{data:{escapedOffsets:f,escaped:B(f)}});case 14:return e.abrupt("return",{});case 15:case"end":return e.stop()}}),e)})))()}}};function z(t,e){return I.apply(this,arguments)}function I(){return I=(0,c.Z)((0,o.Z)().mark((function t(e,n){var r,i,a,c,l,f,s,d,p,v,m,b,y,w;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,i=e.platform,a=e.elements,t.next=3,null==i.isRTL?void 0:i.isRTL(a.floating);case 3:return c=t.sent,l=g(r),f=h(r),s="x"===x(r),d=["left","top"].includes(l)?-1:1,p=c&&s?-1:1,v="function"===typeof n?n(e):n,m="number"===typeof v?{mainAxis:v,crossAxis:0,alignmentAxis:null}:(0,u.Z)({mainAxis:0,crossAxis:0,alignmentAxis:null},v),b=m.mainAxis,y=m.crossAxis,w=m.alignmentAxis,f&&"number"===typeof w&&(y="end"===f?-1*w:w),t.abrupt("return",s?{x:y*p,y:b*d}:{x:b*d,y:y*p});case 13:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function _(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function U(t){if(null==t)return window;if(!_(t)){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function $(t){return U(t).getComputedStyle(t)}function X(t){return _(t)?"":t?(t.nodeName||"").toLowerCase():""}function Y(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function q(t){return t instanceof U(t).HTMLElement}function G(t){return t instanceof U(t).Element}function J(t){return"undefined"!==typeof ShadowRoot&&(t instanceof U(t).ShadowRoot||t instanceof ShadowRoot)}function K(t){var e=$(t),n=e.overflow,r=e.overflowX,i=e.overflowY,o=e.display;return/auto|scroll|overlay|hidden/.test(n+i+r)&&!["inline","contents"].includes(o)}function Q(t){return["table","td","th"].includes(X(t))}function tt(t){var e=/firefox/i.test(Y()),n=$(t);return"none"!==n.transform||"none"!==n.perspective||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((function(t){return n.willChange.includes(t)}))||["paint","layout","strict","content"].some((function(t){var e=n.contain;return null!=e&&e.includes(t)}))}function et(){return!/^((?!chrome|android).)*safari/i.test(Y())}function nt(t){return["html","body","#document"].includes(X(t))}var rt=Math.min,it=Math.max,ot=Math.round;function at(t,e,n){var r,i,o,a;void 0===e&&(e=!1),void 0===n&&(n=!1);var u=t.getBoundingClientRect(),c=1,l=1;e&&q(t)&&(c=t.offsetWidth>0&&ot(u.width)/t.offsetWidth||1,l=t.offsetHeight>0&&ot(u.height)/t.offsetHeight||1);var f=G(t)?U(t):window,s=!et()&&n,d=(u.left+(s&&null!=(r=null==(i=f.visualViewport)?void 0:i.offsetLeft)?r:0))/c,p=(u.top+(s&&null!=(o=null==(a=f.visualViewport)?void 0:a.offsetTop)?o:0))/l,v=u.width/c,m=u.height/l;return{width:v,height:m,top:p,right:d+v,bottom:p+m,left:d,x:d,y:p}}function ut(t){return(e=t,(e instanceof U(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function ct(t){return G(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function lt(t){return at(ut(t)).left+ct(t).scrollLeft}function ft(t,e,n){var r=q(e),i=ut(e),o=at(t,r&&function(t){var e=at(t);return ot(e.width)!==t.offsetWidth||ot(e.height)!==t.offsetHeight}(e),"fixed"===n),a={scrollLeft:0,scrollTop:0},u={x:0,y:0};if(r||!r&&"fixed"!==n)if(("body"!==X(e)||K(i))&&(a=ct(e)),q(e)){var c=at(e,!0);u.x=c.x+e.clientLeft,u.y=c.y+e.clientTop}else i&&(u.x=lt(i));return{x:o.left+a.scrollLeft-u.x,y:o.top+a.scrollTop-u.y,width:o.width,height:o.height}}function st(t){return"html"===X(t)?t:t.assignedSlot||t.parentNode||(J(t)?t.host:null)||ut(t)}function dt(t){return q(t)&&"fixed"!==$(t).position?t.offsetParent:null}function pt(t){for(var e=U(t),n=dt(t);n&&Q(n)&&"static"===$(n).position;)n=dt(n);return n&&("html"===X(n)||"body"===X(n)&&"static"===$(n).position&&!tt(n))?e:n||function(t){var e=st(t);for(J(e)&&(e=e.host);q(e)&&!nt(e);){if(tt(e))return e;var n=e.parentNode;e=J(n)?n.host:n}return null}(t)||e}function vt(t){if(q(t))return{width:t.offsetWidth,height:t.offsetHeight};var e=at(t);return{width:e.width,height:e.height}}function mt(t){var e=st(t);return nt(e)?t.ownerDocument.body:q(e)&&K(e)?e:mt(e)}function gt(t,e){var n;void 0===e&&(e=[]);var r=mt(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),o=U(r),a=i?[o].concat(o.visualViewport||[],K(r)?r:[]):r,u=e.concat(a);return i?u:u.concat(gt(a))}function ht(t,e,n){return"viewport"===e?k(function(t,e){var n=U(t),r=ut(t),i=n.visualViewport,o=r.clientWidth,a=r.clientHeight,u=0,c=0;if(i){o=i.width,a=i.height;var l=et();(l||!l&&"fixed"===e)&&(u=i.offsetLeft,c=i.offsetTop)}return{width:o,height:a,x:u,y:c}}(t,n)):G(e)?function(t,e){var n=at(t,!1,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:r,left:i,x:i,y:r,right:i+t.clientWidth,bottom:r+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):k(function(t){var e,n=ut(t),r=ct(t),i=null==(e=t.ownerDocument)?void 0:e.body,o=it(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=it(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),u=-r.scrollLeft+lt(t),c=-r.scrollTop;return"rtl"===$(i||n).direction&&(u+=it(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:u,y:c}}(ut(t)))}function xt(t){var e=gt(t),n=function(t,e){for(var n=t;n&&!nt(n)&&!e.includes(n)&&(!G(n)||!["absolute","fixed"].includes($(n).position));){var r=st(n);n=J(r)?r.host:r}return n}(t,e),r=null;if(n&&q(n)){var i=pt(n);K(n)?r=n:q(i)&&(r=i)}return G(r)?e.filter((function(t){return r&&G(t)&&function(t,e){var n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&J(n)){var r=e;do{if(r&&t===r)return!0;r=r.parentNode||r.host}while(r)}return!1}(t,r)&&"body"!==X(t)})):[]}var bt={getClippingRect:function(t){var e=t.element,n=t.boundary,r=t.rootBoundary,o=t.strategy,a="clippingAncestors"===n?xt(e):[].concat(n),u=[].concat((0,i.Z)(a),[r]),c=u[0],l=u.reduce((function(t,n){var r=ht(e,n,o);return t.top=it(r.top,t.top),t.right=rt(r.right,t.right),t.bottom=rt(r.bottom,t.bottom),t.left=it(r.left,t.left),t}),ht(e,c,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,n=t.offsetParent,r=t.strategy,i=q(n),o=ut(n);if(n===o)return e;var a={scrollLeft:0,scrollTop:0},c={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==X(n)||K(o))&&(a=ct(n)),q(n))){var l=at(n,!0);c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return(0,u.Z)((0,u.Z)({},e),{},{x:e.x-a.scrollLeft+c.x,y:e.y-a.scrollTop+c.y})},isElement:G,getDimensions:vt,getOffsetParent:pt,getDocumentElement:ut,getElementRects:function(t){var e=t.reference,n=t.floating,r=t.strategy;return{reference:ft(e,pt(n),r),floating:(0,u.Z)((0,u.Z)({},vt(n)),{},{x:0,y:0})}},getClientRects:function(t){return Array.from(t.getClientRects())},isRTL:function(t){return"rtl"===$(t).direction}};function yt(t,e,n,r){void 0===r&&(r={});var o=r,a=o.ancestorScroll,u=void 0===a||a,c=o.ancestorResize,l=void 0===c||c,f=o.elementResize,s=void 0===f||f,d=o.animationFrame,p=void 0!==d&&d,v=u&&!p,m=v||l?[].concat((0,i.Z)(G(t)?gt(t):[]),(0,i.Z)(gt(e))):[];m.forEach((function(t){v&&t.addEventListener("scroll",n,{passive:!0}),l&&t.addEventListener("resize",n)}));var g,h=null;if(s){var x=!0;h=new ResizeObserver((function(){x||n(),x=!1})),G(t)&&!p&&h.observe(t),h.observe(e)}var b=p?at(t):null;return p&&function e(){var r=at(t);!b||r.x===b.x&&r.y===b.y&&r.width===b.width&&r.height===b.height||n();b=r,g=requestAnimationFrame(e)}(),n(),function(){var t;m.forEach((function(t){v&&t.removeEventListener("scroll",n),l&&t.removeEventListener("resize",n)})),null==(t=h)||t.disconnect(),h=null,p&&cancelAnimationFrame(g)}}var wt=function(t,e,n){return w(t,e,(0,u.Z)({platform:bt},n))},Zt=globalThis.calciteComponentsConfig,kt=(0,u.Z)({floatingUINonChromiumPositioningFix:!0},Zt),Rt=function(){return Tt.apply(this,arguments)}();function Tt(){return Tt=(0,c.Z)((0,o.Z)().mark((function t(){var e,r,i,a,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=function(){var t=navigator.userAgentData;return(null===t||void 0===t?void 0:t.brands)?t.brands.map((function(t){return"".concat(t.brand,"/").concat(t.version)})).join(" "):navigator.userAgent},!(f.Z5.isBrowser&&kt.floatingUINonChromiumPositioningFix&&/firefox|safari/i.test(e()))){t.next=11;break}return t.next=4,n.e(2728).then(n.bind(n,42728));case 4:r=t.sent,i=r.getClippingRect,a=r.getElementRects,u=r.getOffsetParent,bt.getClippingRect=i,bt.getOffsetParent=u,bt.getElementRects=a;case 11:case"end":return t.stop()}}),t)}))),Tt.apply(this,arguments)}var At="data-placement",Pt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Lt="bottom-start",Et={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Ot(t){var e,n,l=t.placement,f=t.disableFlip,s=t.flipPlacements,p=t.offsetDistance,v=t.offsetSkidding,y=t.arrowEl,w=t.type,k=[(void 0===e&&(e={}),{name:"shift",options:e,fn:function(t){return(0,c.Z)((0,o.Z)().mark((function n(){var i,c,l,f,s,d,p,v,h,b,y,w,Z,k,T,A,P,E,O,j,D,C,S,H,W;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.x,l=t.y,f=t.placement,d=(s=e).mainAxis,p=void 0===d||d,v=s.crossAxis,h=void 0!==v&&v,b=s.limiter,y=void 0===b?{fn:function(t){return{x:t.x,y:t.y}}}:b,w=(0,r.Z)(s,m),Z={x:c,y:l},n.next=5,R(t,w);case 5:return k=n.sent,T=x(g(f)),A="x"===T?"y":"x",P=Z[T],E=Z[A],p&&(O="y"===T?"bottom":"right",j=P+k["y"===T?"top":"left"],D=P-k[O],P=L(j,P,D)),h&&(C="y"===A?"bottom":"right",S=E+k["y"===A?"top":"left"],H=E-k[C],E=L(S,E,H)),W=y.fn((0,u.Z)((0,u.Z)({},t),{},(i={},(0,a.Z)(i,T,P),(0,a.Z)(i,A,E),i))),n.abrupt("return",(0,u.Z)((0,u.Z)({},W),{},{data:{x:W.x-c,y:W.y-l}}));case 14:case"end":return n.stop()}}),n)})))()}}),V()];if("menu"===w)return[].concat(k,[M({fallbackPlacements:s||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})]);if("popover"===w||"tooltip"===w){var T=[].concat(k,[(n={mainAxis:"number"===typeof p?p:0,crossAxis:"number"===typeof v?v:0},void 0===n&&(n=0),{name:"offset",options:n,fn:function(t){return(0,c.Z)((0,o.Z)().mark((function e(){var r,i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.x,i=t.y,e.next=3,z(t,n);case 3:return a=e.sent,e.abrupt("return",{x:r+a.x,y:i+a.y,data:a});case 5:case"end":return e.stop()}}),e)})))()}})]);return"auto"===l||"auto-start"===l||"auto-end"===l?T.push(function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,fn:function(e){return(0,c.Z)((0,o.Z)().mark((function n(){var a,u,c,l,f,s,p,v,m,h,x,b,y,w,Z,k,T,A,P,L,E,O,D,C,S,N,M,F,B,V,z,I,_;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=e.x,p=e.y,v=e.rects,m=e.middlewareData,h=e.placement,x=e.platform,b=e.elements,w=(y=t).alignment,Z=void 0===w?null:w,k=y.allowedPlacements,T=void 0===k?H:k,A=y.autoAlignment,P=void 0===A||A,L=(0,r.Z)(y,d),E=W(Z,P,T),n.next=5,R(e,L);case 5:if(O=n.sent,D=null!=(a=null==(u=m.autoPlacement)?void 0:u.index)?a:0,null!=(C=E[D])){n.next=10;break}return n.abrupt("return",{});case 10:return n.t0=j,n.t1=C,n.t2=v,n.next=15,null==x.isRTL?void 0:x.isRTL(b.floating);case 15:if(n.t3=n.sent,S=(0,n.t0)(n.t1,n.t2,n.t3),N=S.main,M=S.cross,h===C){n.next=21;break}return n.abrupt("return",{x:s,y:p,reset:{placement:E[0]}});case 21:if(F=[O[g(C)],O[N],O[M]],B=[].concat((0,i.Z)(null!=(c=null==(l=m.autoPlacement)?void 0:l.overflows)?c:[]),[{placement:C,overflows:F}]),!(V=E[D+1])){n.next=26;break}return n.abrupt("return",{data:{index:D+1,overflows:B},reset:{placement:V}});case 26:if(z=B.slice().sort((function(t,e){return t.overflows[0]-e.overflows[0]})),I=null==(f=z.find((function(t){return t.overflows.every((function(t){return t<=0}))})))?void 0:f.placement,(_=null!=I?I:z[0].placement)===h){n.next=31;break}return n.abrupt("return",{data:{index:D+1,overflows:B},reset:{placement:_}});case 31:return n.abrupt("return",{});case 32:case"end":return n.stop()}}),n)})))()}}}({alignment:"auto-start"===l?"start":"auto-end"===l?"end":null})):f||T.push(M(s?{fallbackPlacements:s}:{})),y&&T.push(function(t){return{name:"arrow",options:t,fn:function(e){return(0,c.Z)((0,o.Z)().mark((function n(){var r,i,u,c,l,f,s,d,p,v,m,g,y,w,k,R,T,A,P,E,O,j,D,C,S,H,W,N,M,F,B;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=(u=null!=t?t:{}).element,l=u.padding,f=void 0===l?0:l,s=e.x,d=e.y,p=e.placement,v=e.rects,m=e.platform,null!=c){n.next=4;break}return n.abrupt("return",{});case 4:return g=Z(f),y={x:s,y:d},w=x(p),k=h(p),R=b(w),n.next=11,m.getDimensions(c);case 11:return T=n.sent,A="y"===w?"top":"left",P="y"===w?"bottom":"right",E=v.reference[R]+v.reference[w]-y[w]-v.floating[R],O=y[w]-v.reference[w],n.next=18,null==m.getOffsetParent?void 0:m.getOffsetParent(c);case 18:return j=n.sent,0===(D=j?"y"===w?j.clientHeight||0:j.clientWidth||0:0)&&(D=v.floating[R]),C=E/2-O/2,S=g[A],H=D-T[R]-g[P],W=D/2-T[R]/2+C,N=L(S,W,H),M="start"===k?g[A]:g[P],F=M>0&&W!==N&&v.reference[R]<=v.floating[R],B=F?W<S?S-W:H-W:0,n.abrupt("return",(i={},(0,a.Z)(i,w,y[w]-B),(0,a.Z)(i,"data",(r={},(0,a.Z)(r,w,N),(0,a.Z)(r,"centerOffset",W-N),r)),i));case 30:case"end":return n.stop()}}),n)})))()}}}({element:y})),T}return[]}function jt(t,e){var n=t.filter((function(t){return Pt.includes(t)}));return n.length!==t.length&&console.warn("".concat(e.tagName,": Invalid value found in: flipPlacements. Try any of these: ").concat(Pt.map((function(t){return'"'.concat(t,'"')})).join(", ").trim()),{el:e}),n}function Dt(t,e){var n=["left","right"];return"rtl"===(0,l.c)(t)&&n.reverse(),e.replace(/-leading/gi,"-start").replace(/-trailing/gi,"-end").replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function Ct(t,e){return St.apply(this,arguments)}function St(){return St=(0,c.Z)((0,o.Z)().mark((function t(e,n){var r,i=arguments;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=i.length>2&&void 0!==i[2]&&i[2],e.open){t.next=3;break}return t.abrupt("return");case 3:return t.abrupt("return",r?Ht(n):Wt(n));case 4:case"end":return t.stop()}}),t)}))),St.apply(this,arguments)}var Ht=(0,s.d)(Wt,100,{leading:!0,maxWait:100});function Wt(t){return Nt.apply(this,arguments)}function Nt(){return(Nt=(0,c.Z)((0,o.Z)().mark((function t(e){var n,r,i,a,u,c,l,f,s,d,p,v,m,g,h,x,b,y,w,Z,k,R,T,A,P,L,E;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.referenceEl,r=e.floatingEl,i=e.overlayPositioning,a=void 0===i?"absolute":i,u=e.placement,c=e.disableFlip,l=e.flipPlacements,f=e.offsetDistance,s=e.offsetSkidding,d=e.includeArrow,p=void 0!==d&&d,v=e.arrowEl,m=e.type,n&&r&&(!p||v)){t.next=3;break}return t.abrupt("return",null);case 3:return t.next=5,Rt;case 5:return t.next=7,wt(n,r,{strategy:a,placement:"auto"===u||"auto-start"===u||"auto-end"===u?void 0:Dt(r,u),middleware:Ot({placement:u,disableFlip:c,flipPlacements:l,offsetDistance:f,offsetSkidding:s,arrowEl:v,type:m})});case 7:h=t.sent,x=h.x,b=h.y,y=h.placement,w=h.strategy,(null===(Z=h.middlewareData)||void 0===Z?void 0:Z.arrow)&&(k=Z.arrow,R=k.x,T=k.y,Object.assign(v.style,{left:null!=R?"".concat(R,"px"):"",top:null!=T?"".concat(T,"px"):""})),A=null===(g=null===Z||void 0===Z?void 0:Z.hide)||void 0===g?void 0:g.referenceHidden,L=(P=A?"hidden":null)?"none":null,r.setAttribute(At,y),E="translate(".concat(Math.round(x),"px,").concat(Math.round(b),"px)"),Object.assign(r.style,{visibility:P,pointerEvents:L,position:w,top:"0",left:"0",transform:E});case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Mt=new WeakMap;function Ft(t,e,n){if(n&&e){Bt(t,e,n);var r=t.overlayPositioning;n.style.position=r,"absolute"===r&&Ut(n);var i=f.Z5.isBrowser?yt:function(t,e,n){return n(),function(){}};Mt.set(t,i(e,n,(function(){return t.reposition()})))}}function Bt(t,e,n){if(n&&e){It(n).removeEventListener("transitionend",_t);var r=Mt.get(t);r&&r(),Mt.delete(t)}}var Vt=Math.ceil(Math.hypot(4,4));function zt(t){t&&"absolute"===t.style.position&&It(t).addEventListener("transitionend",_t)}function It(t){return t.shadowRoot||t}function _t(t){var e=t.target;if("opacity"===t.propertyName&&e.classList.contains(Et.animation)){var n=function(t){return(0,l.o)(t,"[".concat(At,"]"))}(e);Ut(n),It(n).removeEventListener("transitionend",_t)}}function Ut(t){t.style.transform="",t.style.top="-99999px",t.style.left="-99999px"}},62967:function(t,e,n){n.d(e,{g:function(){return r}});var r=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}}}]);
//# sourceMappingURL=8201.cd26c953.chunk.js.map