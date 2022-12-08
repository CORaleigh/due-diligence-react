"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[2105],{82272:function(e,t,n){n.d(t,{BN:function(){return c},Yc:function(){return d},mx:function(){return u}});var a=n(74165),r=n(15861),i=n(42265),l="woff2",o=new Map;function u(e){return s.apply(this,arguments)}function s(){return s=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d(t),!(r=o.get(n))){e.next=4;break}return e.abrupt("return",r);case 4:return u=new FontFace(t.family,"url('".concat(i.Z.fontsUrl,"/woff2/").concat(n,".").concat(l,"') format('").concat(l,"')")),s=document.fonts,e.abrupt("return",s.has(u)&&"loading"===u.status?u.loaded:(r=u.load(),o.set(n,r),s.add(u),r));case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function c(e){if(!e)return"arial-unicode-ms";var t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function d(e){var t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return c(e.family)+(t.length>0?t:"-regular")}},52105:function(e,t,n){n.r(t),n.d(t,{getContrastingBackgroundTheme:function(){return q},getRenderSymbolParameters:function(){return _},previewSymbol2D:function(){return j}});var a=n(74165),r=n(1413),i=n(15861),l=n(51995),o=n(10064),u=n(82272),s=n(17842),c=n(79563),d=n(37817),h=n(1682);function p(e){var t=e.r,n=e.g,a=e.b,r=e.a;return r<1&&(t=Math.round(r*t+255*(1-r)),n=Math.round(r*n+255*(1-r)),a=Math.round(r*a+255*(1-r))),new l.Z({r:t,g:n,b:a})}function m(e){var t=p(e);return.2126*t.r+.7152*t.g+.0722*t.b}var f="picture-fill",v=d.b_.size,w=d.b_.maxSize,y=d.b_.maxOutlineSize,g=d.b_.lineWidth,b=225,x=document.createElement("canvas");function k(e,t){var n=x.getContext("2d"),a=[];return t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" "),n.measureText(e).width}function Z(e){if(0===e.length)return 0;if(e.length>2){var t=(0,s.Wz)(1),n=parseFloat(e);switch(e.slice(-2)){case"px":return n;case"pt":return n*t;case"in":return 72*n*t;case"pc":return 12*n*t;case"mm":return 2.8346456692913384*n*t;case"cm":return 28.346456692913385*n*t}}return parseFloat(e)}function M(e){var t=null===e||void 0===e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.F2)(t.height):null}}function z(e,t){return L.apply(this,arguments)}function L(){return L=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r,i,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.fill,i=t.color,"pattern"!==(null===r||void 0===r?void 0:r.type)||!i||t.type===f){e.next=6;break}return e.next=4,(0,c.Od)(r.src,i.toCss(!0));case 4:l=e.sent,r.src=l,n.fill=r;case 6:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function F(e,t,n,a){return C.apply(this,arguments)}function C(){return C=(0,i.Z)((0,a.Z)().mark((function e(t,n,r,i){var l,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("font"in t&&t.font&&"text"===n.shape.type){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,u.mx)(t.font);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:l=M(i),o=l.width,s=/[\uE600-\uE6FF]/.test(n.shape.text),null!=o||s||(r[0]=k(n.shape.text,{weight:n.font.weight,size:n.font.size,family:n.font.family}));case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),C.apply(this,arguments)}function S(e,t){return e>t?"dark":"light"}function _(e,t){var n,a,i="number"==typeof(null===t||void 0===t?void 0:t.size)?null===t||void 0===t?void 0:t.size:null,l=null!=i?(0,s.F2)(i):null,o=null!=(null===t||void 0===t?void 0:t.maxSize)?(0,s.F2)(t.maxSize):null,u=null!=(null===t||void 0===t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,h=(0,c._M)(e),p=(0,c.mx)(e);"dark"!==q(e,245)||(null===t||void 0===t?void 0:t.ignoreWhiteSymbols)||(p=(0,r.Z)((0,r.Z)({width:.75},p),{},{color:"#bdc3c7"}));var m={shape:null,fill:h,stroke:p,offset:[0,0]};(null===(n=p)||void 0===n?void 0:n.width)&&(p.width=Math.min(p.width,y));var b=(null===(a=p)||void 0===a?void 0:a.width)||0,x=null!=(null===t||void 0===t?void 0:t.size)&&(null==(null===t||void 0===t?void 0:t.scale)||(null===t||void 0===t?void 0:t.scale)),z=0,L=0,F=!1;switch(e.type){case"simple-marker":var C=e.style,S=M(t),_=S.width,j=_===S.height&&null!=_?_:null!=l?l:Math.min((0,s.F2)(e.size),o||w);switch(z=j,L=j,C){case"circle":m.shape={type:"circle",cx:0,cy:0,r:.5*j},x||(z+=b,L+=b);break;case"cross":m.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[z,.5*L]},{command:"M",values:[.5*z,0]},{command:"L",values:[.5*z,L]}]};break;case"diamond":m.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*z,0]},{command:"L",values:[z,.5*L]},{command:"L",values:[.5*z,L]},{command:"Z",values:[]}]},x||(z+=b,L+=b);break;case"square":m.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,0]},{command:"L",values:[z,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},x||(z+=b,L+=b),u&&(F=!0);break;case"triangle":m.shape={type:"path",path:[{command:"M",values:[.5*z,0]},{command:"L",values:[z,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},x||(z+=b,L+=b),u&&(F=!0);break;case"x":m.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,L]},{command:"M",values:[z,0]},{command:"L",values:[0,L]}]},u&&(F=!0);break;case"path":m.shape={type:"path",path:e.path||""},x||(z+=b,L+=b),u&&(F=!0),x=!0}break;case"simple-line":var E,D=M(t),O=D.width,T=D.height,B=null!=T?T:null!=l?l:b,P=null!=O?O:g;p&&(p.width=B),z=P,L=B;var W=(null===m||void 0===m||null===(E=m.stroke)||void 0===E?void 0:E.cap)||"butt",A="round"===W;x=!0,m.stroke&&(m.stroke.cap="butt"===W?"square":W),m.shape={type:"path",path:[{command:"M",values:[A?B/2:0,L/2]},{command:"L",values:[A?z-B/2:z,L/2]}]};break;case f:case"simple-fill":var R="object"==typeof(null===t||void 0===t?void 0:t.symbolConfig)&&(null===t||void 0===t?void 0:t.symbolConfig.isSquareFill),V=M(t),H=V.width,J=V.height;z=!R&&H!==J||null==H?null!=l?l:v:H,L=!R&&H!==J||null==J?z:J,x||(z+=b,L+=b),x=!0,m.shape=R?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[z,0]},{command:"L",values:[z,L]},{command:"L",values:[0,L]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:d.JZ.fill[0];break;case"picture-marker":var N=Math.min((0,s.F2)(e.width),o||w),U=Math.min((0,s.F2)(e.height),o||w),Y=M(t),G=Y.width,I=G===Y.height&&null!=G?G:null!=l?l:Math.max(N,U),K=N/U;z=K<=1?Math.ceil(I*K):I,L=K<=1?I:Math.ceil(I/K),m.shape={type:"image",x:-Math.round(z/2),y:-Math.round(L/2),width:z,height:L,src:e.url||""},u&&(F=!0);break;case"text":var Q=e,X=(null===t||void 0===t?void 0:t.overrideText)||Q.text||"Aa",$=Q.font,ee=M(t),te=ee.width,ne=ee.height,ae=null!=ne?ne:null!=l?l:Math.min((0,s.F2)($.size),o||w),re=k(X,{weight:$.weight,size:ae,family:$.family}),ie=/[\uE600-\uE6FF]/.test(X);z=null!==te&&void 0!==te?te:ie?ae:re,L=ae;var le=.25*Z(($?ae:0).toString());ie&&(le+=5),m.shape={type:"text",text:X,x:Q.xoffset||0,y:Q.yoffset||le,align:"middle",alignBaseline:Q.verticalAlignment,decoration:$&&$.decoration,rotated:Q.rotated,kerning:Q.kerning},m.font=$&&{size:ae,style:$.style,decoration:$.decoration,weight:$.weight,family:$.family}}return{shapeDescriptor:m,size:[z,L],renderOptions:{node:null===t||void 0===t?void 0:t.node,scale:x,opacity:null===t||void 0===t?void 0:t.opacity,rotation:u,useRotationSize:F,effectView:null===t||void 0===t?void 0:t.effectView}}}function j(e,t){return E.apply(this,arguments)}function E(){return E=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,l,u,s,c,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=_(t,n),l=i.shapeDescriptor,u=i.size,s=i.renderOptions,l.shape){e.next=3;break}throw new o.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");case 3:return e.next=5,z(t,l);case 5:return e.next=7,F(t,l,u,n);case 7:return c=[[l]],"object"==typeof(null===n||void 0===n?void 0:n.symbolConfig)&&null!==n&&void 0!==n&&n.symbolConfig.applyColorModulation&&(p=.6*u[0],c.unshift([(0,r.Z)((0,r.Z)({},l),{},{offset:[-p,0],fill:(0,d.dc)(l.fill,-.3)})]),c.push([(0,r.Z)((0,r.Z)({},l),{},{offset:[p,0],fill:(0,d.dc)(l.fill,.3)})]),u[0]+=2*p,s.scale=!1),e.abrupt("return",(0,h.w)(c,u,s));case 10:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,n=(0,c._M)(e),a=(0,c.mx)(e),r=!n||"type"in n?null:new l.Z(n),i=null!==a&&void 0!==a&&a.color?new l.Z(null===a||void 0===a?void 0:a.color):null,o=r?S(m(r),t):null,u=i?S(m(i),t):null;return u?o?o===u?o:t>=b?"light":"dark":u:o}}}]);
//# sourceMappingURL=2105.e3807cd9.chunk.js.map