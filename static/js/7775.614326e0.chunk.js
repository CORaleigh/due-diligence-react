"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[7775],{17775:function(e,t,i){i.d(t,{Z:function(){return p}});var a=i(15671),n=i(43144),l=i(60136),r=i(29388),o=i(27366),c=(i(59486),i(49861)),u=(i(63780),i(25243),i(38511)),s=i(69912),h=i(71466),v=i(23638),f=i(78952),p=function(e){var t=function(e){(0,l.Z)(i,e);var t=(0,r.Z)(i);function i(){var e;return(0,a.Z)(this,i),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return(0,n.Z)(i,[{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new v.y({layer:this}):null}}]),i}(e);return(0,o._)([(0,c.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,c.Cb)()],t.prototype,"minScale",void 0),(0,o._)([(0,u.r)("service","minScale")],t.prototype,"readMinScale",null),(0,o._)([(0,c.Cb)()],t.prototype,"maxScale",void 0),(0,o._)([(0,u.r)("service","maxScale")],t.prototype,"readMaxScale",null),(0,o._)([(0,c.Cb)({type:f.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,o._)([(0,c.Cb)(h.h)],t.prototype,"tileInfo",void 0),(0,o._)([(0,c.Cb)()],t.prototype,"tilemapCache",void 0),(0,o._)([(0,u.r)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),(0,o._)([(0,c.Cb)()],t.prototype,"version",void 0),t=(0,o._)([(0,s.j)("esri.layers.mixins.ArcGISCachedService")],t)}},23638:function(e,t,i){i.d(t,{y:function(){return z}});var a,n=i(74165),l=i(15861),r=i(1413),o=i(15671),c=i(43144),u=i(60136),s=i(29388),h=i(27366),v=i(76200),f=i(85015),p=i(59896),m=i(10064),d=i(41691),y=i(32718),b=i(16054),_=i(27546),w=i(66978),g=i(94172),Z=i(99346),k=i(35995),S=i(49861),C=i(63780),T=i(89125),A=i(69912),O=i(87960),D=i(84652),L=function(){function e(){(0,o.Z)(this,e),this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return(0,c.Z)(e,[{key:"getAvailability",value:function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,n=i>>3,l=this._tileAvailabilityBitSet;return n<0||n>l.length?"unknown":l[n]&1<<a?"available":"unavailable"}},{key:"_updateFromData",value:function(e){for(var t=this.location.width,i=this.location.height,a=!0,n=!0,l=Math.ceil(t*i/8),r=new Uint8Array(l),o=0,c=0;c<e.length;c++){var u=c%8;e[c]?(n=!1,r[o]|=1<<u):a=!1,7===u&&++o}n?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=r,this.byteSize+=r.length)}}],[{key:"fromDefinition",value:function(t,i){var a=t.service.request||v.default,n=t.row,l=t.col,o=t.width,c=t.height,u={query:{f:"json"}};return i=i?(0,r.Z)((0,r.Z)({},u),i):u,a(function(e){var t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{var i=e.service.tileServers;t="".concat(i&&i.length?i[e.row%i.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var a=e.service.query;return a&&(t="".concat(t,"?").concat(a)),t}(t),i).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:n,left:l,width:o,height:c},valid:!0,data:(0,C.a9)(o*c,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==n||t.location.left!==l||t.location.width!==o||t.location.height!==c))throw new m.Z("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:n,left:l,width:o,height:c}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){e._validateJSON(t);var i=new e;return i.location=Object.freeze((0,D.d9)(t.location)),i._updateFromData(t.data),Object.freeze(i)}},{key:"_validateJSON",value:function(e){if(!e||!e.location)throw new m.Z("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new m.Z("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new m.Z("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new m.Z("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new m.Z("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}]),e}();function x(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var z=a=function(e){(0,u.Z)(i,e);var t=(0,s.Z)(i);function i(e){var a;return(0,o.Z)(this,i),(a=t.call(this,e))._pendingTilemapRequests={},a._availableLevels={},a.levels=5,a.cacheByteSize=2*p.Y8.MEGABYTES,a.request=v.default,a._prefetchingEnabled=!0,a}return(0,c.Z)(i,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new b.Z(this.cacheByteSize),this.addHandles([(0,g.YP)((function(){var t=e.layer;return[null===t||void 0===t?void 0:t.parsedUrl,null===t||void 0===t?void 0:t.tileServers,null===t||void 0===t?void 0:t.apiKey,null===t||void 0===t?void 0:t.customParameters]}),(function(){return e._initializeTilemapDefinition()})),(0,g.YP)((function(){var t,i;return null===(t=e.layer)||void 0===t||null===(i=t.tileInfo)||void 0===i?void 0:i.lods}),(function(t){return e._initializeAvailableLevels(t)}),g.tX)]),this._initializeTilemapDefinition()}},{key:"castLevels",value:function(e){return e<=2?(y.Z.getLogger(this.declaredClass).error("Minimum levels for Tilemap is 3, but got ",e),3):e}},{key:"size",get:function(){return 1<<this.levels}},{key:"fetchTilemap",value:function(e,t,i,a){var n=this;if(!this._availableLevels[e])return Promise.reject(new m.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var l=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,i,l);if(o)return Promise.resolve(o);var c=a&&a.signal;return a=(0,r.Z)((0,r.Z)({},a),{},{signal:null}),new Promise((function(e,t){(0,w.fu)(c,(function(){return t((0,w.zE)())}));var i=x(l),r=n._pendingTilemapRequests[i];if(!r){r=L.fromDefinition(l,a).then((function(e){return n._tilemapCache.put(i,e,e.byteSize),e}));var o=function(){return delete n._pendingTilemapRequests[i]};n._pendingTilemapRequests[i]=r,r.then(o,o)}r.then(e,t)}))}},{key:"getAvailability",value:function(e,t,i){if(!this._availableLevels[e])return"unavailable";var a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}},{key:"fetchAvailability",value:function(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch((function(e){return e})).then((function(a){if(a instanceof L){var n=a.getAvailability(t,i);if("unavailable"===n)throw new m.Z("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return n}if((0,w.D_)(a))throw a;return"unknown"})):Promise.reject(new m.Z("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}},{key:"fetchAvailabilityUpsample",value:function(e,t,i,a,n){var l=this;a.level=e,a.row=t,a.col=i;var r=this.layer.tileInfo;r.updateTileInfo(a);var o=this.fetchAvailability(e,t,i,n).catch((function(e){if((0,w.D_)(e))throw e;if(r.upsampleTile(a))return l.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,n,o),o}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=(0,l.Z)((0,n.Z)().mark((function e(t,i,l,o,c,u){var s,h,v,f,p,m,d,y,b,_=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled){e.next=2;break}return e.abrupt("return");case 2:if(s="prefetch-".concat(t),!this.handles.has(s)){e.next=5;break}return e.abrupt("return");case 5:return h=new AbortController,u.then((function(){return h.abort()}),(function(){return h.abort()})),v=!1,f={remove:function(){v||(v=!0,h.abort())}},this.handles.add(f,s),e.next=12,(0,Z.MU)(10,h.signal).catch((function(){}));case 12:if(v||(v=!0,this.handles.remove(s)),!(0,w.Hc)(h)){e.next=15;break}return e.abrupt("return");case 15:for(p=new O.f(t,i,l,o),m=(0,r.Z)((0,r.Z)({},c),{},{signal:h.signal}),d=this.layer.tileInfo,y=function(e){var t=_.fetchAvailability(p.level,p.row,p.col,m);a._prefetches.push(t);var i=function(){a._prefetches.removeUnordered(t)};t.then(i,i)},b=0;a._prefetches.length<a._maxPrefetch&&d.upsampleTile(p);++b)y();case 18:case"end":return e.stop()}}),e,this)})));return function(t,i,a,n,l,r){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){var e;if(this.layer.parsedUrl){var t=this.layer,i=t.parsedUrl,a=t.apiKey,n=t.customParameters;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:i.path,query:(0,k.B7)((0,r.Z)((0,r.Z)((0,r.Z)({},i.query),n),{},{token:null!==a&&void 0!==a?a:null===(e=i.query)||void 0===e?void 0:e.token})),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;var n=x(a);return this._tilemapCache.get(n)}},{key:"_initializeAvailableLevels",value:function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,i,a){return!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}}}]),i}((0,d.p)(f.Z));z._maxPrefetch=4,z._prefetches=new _.Z({initialSize:a._maxPrefetch}),(0,h._)([(0,S.Cb)({constructOnly:!0,type:Number})],z.prototype,"levels",void 0),(0,h._)([(0,T.p)("levels")],z.prototype,"castLevels",null),(0,h._)([(0,S.Cb)({readOnly:!0,type:Number})],z.prototype,"size",null),(0,h._)([(0,S.Cb)({constructOnly:!0,type:Number})],z.prototype,"cacheByteSize",void 0),(0,h._)([(0,S.Cb)({constructOnly:!0})],z.prototype,"layer",void 0),(0,h._)([(0,S.Cb)({constructOnly:!0})],z.prototype,"request",void 0),z=a=(0,h._)([(0,A.j)("esri.layers.support.TilemapCache")],z)},71466:function(e,t,i){i.d(t,{d:function(){return r},h:function(){return l}});var a=i(1413),n=i(22824),l={type:n.Z,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:r}}}}};function r(e,t,i,l){if(!e)return null;var r=t.minScale,o=t.maxScale,c=t.minLOD,u=t.maxLOD;if(null!=c&&null!=u)return l&&l.ignoreMinMaxLOD?n.Z.fromJSON(e):n.Z.fromJSON((0,a.Z)((0,a.Z)({},e),{},{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=c&&t<=u}))}));if(0!==r&&0!==o){var s=function(e){return Math.round(1e4*e)/1e4},h=r?s(r):1/0,v=o?s(o):-1/0;return n.Z.fromJSON((0,a.Z)((0,a.Z)({},e),{},{lods:e.lods.filter((function(e){var t=s(e.scale);return t<=h&&t>=v}))}))}return n.Z.fromJSON(e)}}}]);
//# sourceMappingURL=7775.614326e0.chunk.js.map