"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[1392],{91958:function(e,t,r){r.d(t,{$7:function(){return m},$e:function(){return u},E0:function(){return p},N5:function(){return d},lW:function(){return c}});var n=r(74165),a=r(15861),i=(r(93169),r(10064)),s=r(92026),o=r(35995);function u(e){var t=p(e);return(0,s.pC)(t)?t.toDataURL():""}function c(e){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p(t),!(0,s.Wi)(r)){e.next=3;break}throw new i.Z("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,f(t);case 5:return a=e.sent,e.next=8,new Promise((function(e){return r.toBlob(e,a)}));case 8:if(o=e.sent){e.next=11;break}throw new i.Z("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,o.arrayBuffer();case 13:return e.t0=e.sent,e.t1=a,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(r=t.src,!(0,o.HK)(r)){e.next=6;break}return a=(0,o.sJ)(r),e.abrupt("return","image/jpeg"===(null===a||void 0===a?void 0:a.mediaType)?a.mediaType:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(r)?"image/png":/\.(jpg|jpeg)$/i.test(r)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),t}function d(e){for(var t=[],r=new Uint8Array(e),n=0;n<r.length;n++)t.push(String.fromCharCode(r[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function m(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},17653:function(e,t,r){r.d(t,{Z:function(){return H}});var n,a=r(1413),i=r(74165),s=r(15861),o=r(15671),u=r(43144),c=r(76200),l=r(10064),f=r(66978),h=r(37762),p=r(84397),d=r(38499),m={exports:{}};n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isNotPNG=function(e){return e===i},t.isNotAPNG=function(e){return e===s},t.default=function(e){var t=new Uint8Array(e);if(Array.prototype.some.call(o,(function(e,r){return e!==t[r]})))return i;var r=!1;if(u(t,(function(e){return!(r="acTL"===e)})),!r)return s;var n=[],c=[],p=null,d=null,m=0,v=new a.APNG;if(u(t,(function(e,t,r,i){var s=new DataView(t.buffer);switch(e){case"IHDR":p=t.subarray(r+8,r+8+i),v.width=s.getUint32(r+8),v.height=s.getUint32(r+12);break;case"acTL":v.numPlays=s.getUint32(r+8+4);break;case"fcTL":d&&(v.frames.push(d),m++),(d=new a.Frame).width=s.getUint32(r+8+4),d.height=s.getUint32(r+8+8),d.left=s.getUint32(r+8+12),d.top=s.getUint32(r+8+16);var o=s.getUint16(r+8+20),u=s.getUint16(r+8+22);0===u&&(u=100),d.delay=1e3*o/u,d.delay<=10&&(d.delay=100),v.playTime+=d.delay,d.disposeOp=s.getUint8(r+8+24),d.blendOp=s.getUint8(r+8+25),d.dataParts=[],0===m&&2===d.disposeOp&&(d.disposeOp=1);break;case"fdAT":d&&d.dataParts.push(t.subarray(r+8+4,r+8+i));break;case"IDAT":d&&d.dataParts.push(t.subarray(r+8,r+8+i));break;case"IEND":c.push(l(t,r,12+i));break;default:n.push(l(t,r,12+i))}})),d&&v.frames.push(d),0==v.frames.length)return s;var g=new Blob(n),y=new Blob(c);return v.frames.forEach((function(e){var t=[];t.push(o),p.set(h(e.width),0),p.set(h(e.height),4),t.push(f("IHDR",p)),t.push(g),e.dataParts.forEach((function(e){return t.push(f("IDAT",e))})),t.push(y),e.imageData=new Blob(t,{type:"image/png"}),delete e.dataParts,t=null})),v};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),a=r(2);var i=new Error("Not a PNG"),s=new Error("Not an animated PNG");var o=new Uint8Array([137,80,78,71,13,10,26,10]);function u(e,t){var r=new DataView(e.buffer),n=8,a=void 0,i=void 0,s=void 0;do{i=r.getUint32(n),s=t(a=c(e,n+4,4),e,n,i),n+=12+i}while(!1!==s&&"IEND"!=a&&n<e.length)}function c(e,t,r){var n=Array.prototype.slice.call(e.subarray(t,t+r));return String.fromCharCode.apply(String,n)}function l(e,t,r){var n=new Uint8Array(r);return n.set(e.subarray(t,t+r)),n}var f=function(e,t){var r=e.length+t.length,a=new Uint8Array(r+8),i=new DataView(a.buffer);i.setUint32(0,t.length),a.set(function(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(e),4),a.set(t,8);var s=(0,n.default)(a,4,r);return i.setUint32(r+4,s),a},h=function(e){return new Uint8Array([e>>>24&255,e>>>16&255,e>>>8&255,255&e])}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=-1,a=t,i=t+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length-t);a<i;a++)n=n>>>8^r[255&(n^e[a])];return-1^n};for(var r=new Uint32Array(256),n=0;n<256;n++){for(var a=n,i=0;i<8;i++)a=0!=(1&a)?3988292384^a>>>1:a>>>1;r[n]=a}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Frame=t.APNG=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(3));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.APNG=function(){function e(){i(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return n(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map((function(e){return e.createImage()})))}},{key:"getPlayer",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.createImages().then((function(){return new a.default(t,e,r)}))}}]),e}(),t.Frame=function(){function e(){i(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return n(e,[{key:"createImage",value:function(){var e=this;return this.imageElement?Promise.resolve():new Promise((function(t,r){var n=URL.createObjectURL(e.imageData);e.imageElement=document.createElement("img"),e.imageElement.onload=function(){URL.revokeObjectURL(n),t()},e.imageElement.onerror=function(){URL.revokeObjectURL(n),e.imageElement=null,r(new Error("Image creation error"))},e.imageElement.src=n}))}}]),e}()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var a=function(e){function t(e,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.playbackRate=1,a._currentFrameNumber=0,a._ended=!1,a._paused=!0,a._numPlays=0,a._apng=e,a.context=r,a.stop(),n&&a.play(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,0!==this._apng.numPlays&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&1==this._prevFrame.disposeOp?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&2==this._prevFrame.disposeOp&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var e=this.currentFrame;this._prevFrame=e,this._prevFrameData=null,2==e.disposeOp&&(this._prevFrameData=this.context.getImageData(e.left,e.top,e.width,e.height)),0==e.blendOp&&this.context.clearRect(e.left,e.top,e.width,e.height),this.context.drawImage(e.imageElement,e.left,e.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var e=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var t=performance.now()+this.currentFrame.delay/this.playbackRate;requestAnimationFrame((function r(n){if(!e._ended&&!e._paused){if(n>=t){for(;n-t>=e._apng.playTime/e.playbackRate;)t+=e._apng.playTime/e.playbackRate,e._numPlays++;do{e.renderNextFrame(),t+=e.currentFrame.delay/e.playbackRate}while(!e._ended&&n>t)}requestAnimationFrame(r)}}))}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(function(e){return e&&e.__esModule?e:{default:e}}(r(4)).default);t.default=a},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function a(e){return"object"==typeof e&&null!==e}function i(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,s,o,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(i(r=this._events[e]))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(a(r))for(o=Array.prototype.slice.call(arguments,1),s=(c=r.slice()).length,u=0;u<s;u++)c[u].apply(this,o);return!0},r.prototype.addListener=function(e,t){var s;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(s=i(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!n(t))throw TypeError("listener must be a function");var r=!1;function a(){this.removeListener(e,a),r||(r=!0,t.apply(this,arguments))}return a.listener=t,this.on(e,a),this},r.prototype.removeListener=function(e,t){var r,i,s,o;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(r=this._events[e]).length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(r)){for(o=s;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){i=o;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}}])},m.exports=n();var v=(0,p.g)(m.exports);function g(e,t){return y.apply(this,arguments)}function y(){return y=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,a,s,o,u,c,l,p,m,g,y,w,_,b;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=v(t))instanceof Error)){e.next=3;break}throw n;case 3:return e.next=5,n.createImages();case 5:(0,f.k_)(r),a=n.frames,s=n.width,o=n.height,(u=document.createElement("canvas")).width=s,u.height=o,c=u.getContext("2d"),l=[],p=[],m=(0,h.Z)(a);try{for(m.s();!(g=m.n()).done;)y=g.value,p.push((0,d.HA)(y.delay||100)),w=y.imageElement,0===y.blendOp?c.globalCompositeOperation="copy":c.globalCompositeOperation="source-over",_=2===y.disposeOp&&c.getImageData(y.left,y.top,y.width,y.height),c.drawImage(w,y.left,y.top),b=c.getImageData(0,0,s,o),l.push(b),0===y.disposeOp||(1===y.disposeOp?c.clearRect(y.left,y.top,y.width,y.height):2===y.disposeOp&&c.putImageData(_,y.left,y.top))}catch(i){m.e(i)}finally{m.f()}return e.abrupt("return",{frameDurations:p,getFrame:function(e){return l[e]},width:s,height:o});case 12:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var w=[137,80,78,71,13,10,26,10];function _(e){if(!function(e){var t=new Uint8Array(e);return!w.some((function(e,r){return e!==t[r]}))}(e))return!1;var t,r=new DataView(e),n=new Uint8Array(e),a=8;do{var i=r.getUint32(a);if("acTL"===(t=String.fromCharCode.apply(String,Array.prototype.slice.call(n.subarray(a+4,a+8)))))return!0;a+=12+i}while("IEND"!==t&&a<n.length);return!1}var b=r(91958),x={},k={},F={};Object.defineProperty(F,"__esModule",{value:!0}),F.loop=F.conditional=F.parse=void 0;F.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,a)}));else if("function"==typeof r)r(t,n,a,e);else{var i=Object.keys(r)[0];Array.isArray(r[i])?(a[i]={},e(t,r[i],n,a[i])):a[i]=r[i](t,n,a,e)}return n};F.conditional=function(e,t){return function(r,n,a,i){t(r,n,a)&&i(r,e,n,a)}};F.loop=function(e,t){return function(r,n,a,i){for(var s=[],o=r.pos;t(r,n,a);){var u={};if(i(r,e,n,u),r.pos===o)break;o=r.pos,s.push(u)}return s}};var U={};Object.defineProperty(U,"__esModule",{value:!0}),U.readBits=U.readArray=U.readUnsigned=U.readString=U.peekBytes=U.readBytes=U.peekByte=U.readByte=U.buildStream=void 0;U.buildStream=function(e){return{data:e,pos:0}};var A=function(){return function(e){return e.data[e.pos++]}};U.readByte=A;U.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var M=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};U.readBytes=M;U.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};U.readString=function(e){return function(t){return Array.from(M(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}};U.readUnsigned=function(e){return function(t){var r=M(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};U.readArray=function(e,t){return function(r,n,a){for(var i="function"==typeof t?t(r,n,a):t,s=M(e),o=new Array(i),u=0;u<i;u++)o[u]=s(r);return o}};U.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),a=0;a<8;a++)n[7-a]=!!(r&1<<a);return Object.keys(e).reduce((function(t,r){var a=e[r];return a.length?t[r]=function(e,t,r){for(var n=0,a=0;a<r;a++)n+=e[t+a]&&Math.pow(2,r-a-1);return n}(n,a.index,a.length):t[r]=n[a.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=F,r=U,n={blocks:function(e){for(var t=[],n=e.data.length,a=0,i=(0,r.readByte)()(e);0!==i&&i;i=(0,r.readByte)()(e)){if(e.pos+i>=n){var s=n-e.pos;t.push((0,r.readBytes)(s)(e)),a+=s;break}t.push((0,r.readBytes)(i)(e)),a+=i}for(var o=new Uint8Array(a),u=0,c=0;c<t.length;c++)o.set(t[c],u),u+=t[c].length;return o}},a=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),i=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},n]}]},(function(e){return 44===(0,r.peekByte)()(e)})),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),o=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),c=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([a,o,u,i,s],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=c}(k);var C={};Object.defineProperty(C,"__esModule",{value:!0}),C.deinterlace=void 0;C.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,a=function(n,a){var i=e.slice(a*t,(a+1)*t);r.splice.apply(r,[n*t,t].concat(i))},i=[0,4,2,1],s=[8,8,4,2],o=0,u=0;u<4;u++)for(var c=i[u];c<n;c+=s[u])a(c,o),o++;return r};var S={};Object.defineProperty(S,"__esModule",{value:!0}),S.lzw=void 0;S.lzw=function(e,t,r){var n,a,i,s,o,u,c,l,f,h,p,d,m,v,g,y,w=4096,_=r,b=new Array(r),x=new Array(w),k=new Array(w),F=new Array(w+1);for(o=1+(a=1<<(h=e)),n=a+2,c=-1,i=(1<<(s=h+1))-1,l=0;l<a;l++)x[l]=0,k[l]=l;for(p=d=m=v=g=y=0,f=0;f<_;){if(0===v){if(d<s){p+=t[y]<<d,d+=8,y++;continue}if(l=p&i,p>>=s,d-=s,l>n||l==o)break;if(l==a){i=(1<<(s=h+1))-1,n=a+2,c=-1;continue}if(-1==c){F[v++]=k[l],c=l,m=l;continue}for(u=l,l==n&&(F[v++]=m,l=c);l>a;)F[v++]=k[l],l=x[l];m=255&k[l],F[v++]=m,n<w&&(x[n]=c,k[n]=m,0==(++n&i)&&n<w&&(s++,i+=n)),c=u}v--,b[g++]=F[v],f++}for(f=g;f<_;f++)b[f]=0;return b},Object.defineProperty(x,"__esModule",{value:!0});var T,B=x.decompressFrames=x.decompressFrame=O=x.parseGIF=void 0,P=(T=k)&&T.__esModule?T:{default:T},Z=F,I=U,L=C,E=S;var O=x.parseGIF=function(e){var t=new Uint8Array(e);return(0,Z.parse)((0,I.buildStream)(t),P.default)},D=function(e,t,r){if(e.image){var n=e.image,a=n.descriptor.width*n.descriptor.height,i=(0,E.lzw)(n.data.minCodeSize,n.data.blocks,a);n.descriptor.lct.interlaced&&(i=(0,L.deinterlace)(i,n.descriptor.width));var s={pixels:i,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?s.colorTable=n.lct:s.colorTable=t,e.gce&&(s.delay=10*(e.gce.delay||10),s.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(s.transparentIndex=e.gce.transparentColorIndex)),r&&(s.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var a=4*n,i=e.pixels[n],s=e.colorTable[i]||[0,0,0];r[a]=s[0],r[a+1]=s[1],r[a+2]=s[2],r[a+3]=i!==e.transparentIndex?255:0}return r}(s)),s}console.warn("gif frame does not have associated image.")};x.decompressFrame=D;function z(e,t){return R.apply(this,arguments)}function R(){return R=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,a,s,o,u,c,l,f,p,m,v,g,y,w,_,x;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=O(t),a=B(n,!0),s=n.lsd,o=s.width,u=s.height,(c=document.createElement("canvas")).width=o,c.height=u,l=c.getContext("2d"),f=[],p=[],m=(0,h.Z)(a);try{for(m.s();!(v=m.n()).done;)g=v.value,p.push((0,d.HA)(g.delay||100)),y=new ImageData(g.patch,g.dims.width,g.dims.height),w=(0,b.E0)(y),_=3===g.disposalType&&l.getImageData(g.dims.left,g.dims.top,g.dims.width,g.dims.height),l.drawImage(w,g.dims.left,g.dims.top),x=l.getImageData(0,0,o,u),f.push(x),1===g.disposalType||(2===g.disposalType?l.clearRect(g.dims.left,g.dims.top,g.dims.width,g.dims.height):3===g.disposalType&&l.putImageData(_,g.dims.left,g.dims.top))}catch(r){m.e(r)}finally{m.f()}return e.abrupt("return",{frameDurations:p,getFrame:function(e){return f[e]},width:o,height:u});case 6:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}B=x.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return D(r,e.gct,t)}))};var j=[71,73,70];function N(e){if(!function(e){var t=new Uint8Array(e);return!j.some((function(e,r){return e!==t[r]}))}(e))return!1;for(var t=new DataView(e),r=t.getUint8(10),n=13+(128&r?3*Math.pow(2,1+(7&r)):0),a=0,i=!1;!i;){switch(t.getUint8(n++)){case 33:if(!s())return!1;break;case 44:o();break;case 59:i=!0;break;default:return!1}if(a>1)return!0}function s(){switch(t.getUint8(n++)){case 249:n++,n+=4,u();break;case 1:a++,n++,n+=12,u();break;case 254:u();break;case 255:n++,n+=8,n+=3,u();break;default:return!1}return!0}function o(){a++,n+=8;var e=t.getUint8(n++);n+=128&e?3*Math.pow(2,1+(7&e)):0,n++,u()}function u(){for(var e;e=t.getUint8(n++);)n+=e}return!1}var H=function(){function e(){(0,o.Z)(this,e),this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}return(0,u.Z)(e,[{key:"destroy",value:function(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}},{key:"getResource",value:function(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}},{key:"fetchResource",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,a,s,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=this._resourceMap.get(t))){e.next=3;break}return e.abrupt("return",{width:n.width,height:n.height});case 3:if(!(a=this._inFlightResourceMap.get(t))){e.next=6;break}return e.abrupt("return",a.then((function(e){return{width:e.width,height:e.height}})));case 6:return s=V(t,r),e.abrupt("return",(this._inFlightResourceMap.set(t,a),s.then((function(e){return o._inFlightResourceMap.delete(t),o._resourceMap.set(t,e),{width:e.width,height:e.height}}),(function(){return{width:0,height:0}}))));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteResource",value:function(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}]),e}();function G(e,t){return q.apply(this,arguments)}function q(){return q=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.URL.createObjectURL(t),e.prev=1,e.next=4,(0,c.default)(n,(0,a.Z)((0,a.Z)({},r),{},{responseType:"image"}));case 4:return s=e.sent,o=s.data,e.abrupt("return",o);case 9:if(e.prev=9,e.t0=e.catch(1),(0,f.D_)(e.t0)){e.next=13;break}throw new l.Z("mapview-invalid-resource","Could not fetch requested resource at ".concat(n));case 13:throw e.t0;case 14:return e.prev=14,window.URL.revokeObjectURL(n),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,9,14,17]])}))),q.apply(this,arguments)}function V(e,t){return $.apply(this,arguments)}function $(){return $=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,a,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t,r);case 2:if(n=e.sent,a=n.arrayBuffer,s=n.mediaType,o="image/png"===s,"image/gif"!==s||!N(a)){e.next=8;break}return e.abrupt("return",z(a));case 8:if(!o||!_(a)){e.next=10;break}return e.abrupt("return",g(a,r));case 10:return e.abrupt("return",G(new Blob([a],{type:s}),r));case 11:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function Y(e,t){return X.apply(this,arguments)}function X(){return X=(0,s.Z)((0,i.Z)().mark((function e(t,r){var n,s,o,u,h,p,d,m,v,g;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=";base64,",!t.includes(s)){e.next=7;break}for(o=t.indexOf(s),u=t.indexOf(s)+s.length,h=t.substring(u),p=atob(h),d=new Uint8Array(p.length),m=0;m<p.length;m++)d[m]=p.charCodeAt(m);n={arrayBuffer:d.buffer,mediaType:t.substring(0,o).replace("data:","")},e.next=19;break;case 7:return e.prev=7,e.next=10,(0,c.default)(t,(0,a.Z)({responseType:"array-buffer"},r));case 10:v=e.sent,g=v.data,n={arrayBuffer:g,mediaType:v.getHeader("Content-Type")},e.next=19;break;case 15:if(e.prev=15,e.t0=e.catch(7),(0,f.D_)(e.t0)){e.next=19;break}throw new l.Z("mapview-invalid-resource","Could not fetch requested resource at ".concat(t));case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[7,15]])}))),X.apply(this,arguments)}},16285:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(37762),a=r(29439),i=r(15671),s=r(43144),o=r(16889),u=r(78915),c=r(26554),l=r(691),f=r(6388),h=r(31027),p=function(){function e(t){(0,i.Z)(this,e),this._resourceManager=t}return(0,s.Z)(e,[{key:"dispose",value:function(){this._rasterizationCanvas=null}},{key:"rasterizeJSONResource",value:function(e,t,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var n=(0,c.Y)(this._rasterizationCanvas,e.style,t),i=(0,a.Z)(n,3),s=i[0];return{size:[i[1],i[2]],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:(0,o.fp)(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){var h,p;if("simple-line"===e.type||"esriSLS"===e.type)switch(h=(0,u.U1)(e.style,e.cap),e.cap){case"butt":p="Butt";break;case"square":p="Square";break;default:p="Round"}else h=e.dashTemplate,p=e.cim.capStyle;var d=(0,c.m)(h,p),m=(0,a.Z)(d,3),v=m[0];return{size:[m[1],m[2]],image:new Uint32Array(v.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var g,y,w,_=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(g=u.B$.fromSimpleMarker(e),w=(0,f.Fp)(g)):e.cim&&"CIMHatchFill"===e.cim.type?(g=u.B$.fromCIMHatchFill(e.cim,t),y=new l.Z(g.frame.xmin,-g.frame.ymax,g.frame.xmax-g.frame.xmin,g.frame.ymax-g.frame.ymin),_=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(g=u.B$.fromCIMInsidePolygon(e.cim),y=new l.Z(g.frame.xmin,-g.frame.ymax,g.frame.xmax-g.frame.xmin,g.frame.ymax-g.frame.ymin)):(g=e.cim,w=(0,f.Fp)(g)),w&&!r){var b=(0,f.RL)(w),x=(0,a.Z)(b,3),k=x[0],F=x[1],U=x[2];return k?{size:[F,U],image:new Uint32Array(k.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:_}:null}var A=u.B$.rasterize(this._rasterizationCanvas,g,y,this._resourceManager,!r),M=(0,a.Z)(A,5),C=M[0],S=M[1],T=M[2],B=M[3],P=M[4];return C?{size:[S,T],image:new Uint32Array(C.buffer),sdf:!1,simplePattern:!1,anchorX:B,anchorY:P}:null}},{key:"rasterizeImageResource",value:function(e,t,r,i){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;var s=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?s.putImageData(r,0,0):(r.setAttribute("width","".concat(e,"px")),r.setAttribute("height","".concat(t,"px")),s.drawImage(r,0,0,e,t));var o,u=s.getImageData(0,0,e,t),c=new Uint8Array(u.data);if(i){var l,f=(0,n.Z)(i);try{for(f.s();!(l=f.n()).done;){var p=l.value;if(p&&p.oldColor&&4===p.oldColor.length&&p.newColor&&4===p.newColor.length){var d=(0,a.Z)(p.oldColor,4),m=d[0],v=d[1],g=d[2],y=d[3],w=(0,a.Z)(p.newColor,4),_=w[0],b=w[1],x=w[2],k=w[3];if(m===_&&v===b&&g===x&&y===k)continue;for(var F=0;F<c.length;F+=4)m===c[F]&&v===c[F+1]&&g===c[F+2]&&y===c[F+3]&&(c[F]=_,c[F+1]=b,c[F+2]=x,c[F+3]=k)}}}catch(P){f.e(P)}finally{f.f()}}for(var U=0;U<c.length;U+=4)o=c[U+3]/255,c[U]=c[U]*o,c[U+1]=c[U+1]*o,c[U+2]=c[U+2]*o;var A=c,M=e,C=t,S=512;if(M>=S||C>=S){var T=M/C;T>1?(M=S,C=Math.round(S/T)):(C=S,M=Math.round(S*T)),A=new Uint8Array(4*M*C);var B=new Uint8ClampedArray(A.buffer);(0,h.TT)(c,e,t,B,M,C,!1)}return{size:[M,C],image:new Uint32Array(A.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}]),e}()},26554:function(e,t,r){r.d(t,{Y:function(){return o},m:function(){return u}});var n=r(37762),a=r(93433),i=r(46228),s=r(16889);function o(e,t,r){var n=(0,s.fp)(Math.ceil(r)),a=function(e){return"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e}(t)?8*n:16*n,i=2*n;e.width=a,e.height=a;var o=e.getContext("2d");o.strokeStyle="#FFFFFF",o.lineWidth=n,o.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(o.moveTo(a/2,-i),o.lineTo(a/2,a+i)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(o.moveTo(-i,a/2),o.lineTo(a+i,a/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(o.moveTo(-i,-i),o.lineTo(a+i,a+i),o.moveTo(a-i,-i),o.lineTo(a+i,i),o.moveTo(-i,a-i),o.lineTo(i,a+i)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(o.moveTo(a+i,-i),o.lineTo(-i,a+i),o.moveTo(i,-i),o.lineTo(-i,i),o.moveTo(a+i,a-i),o.lineTo(a-i,a+i)),o.stroke();for(var u,c=o.getImageData(0,0,e.width,e.height),l=new Uint8Array(c.data),f=0;f<l.length;f+=4)u=l[f+3]/255,l[f]=l[f]*u,l[f+1]=l[f+1]*u,l[f+2]=l[f+2]*u;return[l,e.width,e.height]}function u(e,t){var r="Butt"===t,s="Square"===t,o=!r&&!s;e.length%2==1&&(e=[].concat((0,a.Z)(e),(0,a.Z)(e)));var u,c=15.5,l=0,f=(0,n.Z)(e);try{for(f.s();!(u=f.n()).done;){l+=u.value}}catch(S){f.e(S)}finally{f.f()}var h,p=Math.round(l*c),d=new Float32Array(31*p),m=7.75,v=0,g=0,y=.5,w=!0,_=(0,n.Z)(e);try{for(_.s();!(h=_.n()).done;){var b=h.value;for(v=g,g+=b*c;y<=g;){for(var x=.5;x<31;){var k=(x-.5)*p+y-.5,F=o?(x-c)*(x-c):Math.abs(x-c);d[k]=w?r?Math.max(Math.max(v+m-y,F),Math.max(y-g+m,F)):F:o?Math.min((y-v)*(y-v)+F,(y-g)*(y-g)+F):s?Math.min(Math.max(y-v,F),Math.max(g-y,F)):Math.min(Math.max(y-v+m,F),Math.max(g+m-y,F)),x++}y++}w=!w}}catch(S){_.e(S)}finally{_.f()}for(var U=d.length,A=new Uint8Array(4*U),M=0;M<U;++M){var C=(o?Math.sqrt(d[M]):d[M])/c;(0,i.I)(C,A,4*M)}return[A,p,31]}}}]);
//# sourceMappingURL=1392.0cced3b0.chunk.js.map