"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[5731,2078],{95731:function(e,t,r){r.d(t,{xp:function(){return H},Vt:function(){return D}});var n=r(37762),a=r(1413),o=r(74165),i=r(15861),s=r(15671),u=r(43144),l=r(60136),c=r(29388),p=r(27366),d=r(76200),f=r(10064),h=(r(93169),r(32718)),v=r(92026),y=r(66978),m=r(35995),x=r(49861),g=(r(63780),r(25243),r(38511)),b=r(69912),w=r(31201),Z=r(15909),S=r(53866),k=r(90724),I=r(78952),_=r(25899),R=r(45948),T=r(30494),A=r(70032),N=r(98995),C=r(14921),O=r(71907),P=r(62078);function U(e,t,r){return E.apply(this,arguments)}function E(){return(E=(0,i.Z)((0,o.Z)().mark((function e(t,r,a){var i,s,u,l,c,p,d,h,v,m,x,g,b,w,Z,S,k;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.resources){e.next=2;break}return e.abrupt("return");case 2:i=r.portalItem===t.portalItem?new Set(t.paths):new Set,t.paths.length=0,t.portalItem=r.portalItem,s=new Set(r.resources.toKeep.map((function(e){return e.resource.path}))),u=new Set,l=[],s.forEach((function(e){i.delete(e),t.paths.push(e)})),c=(0,n.Z)(r.resources.toUpdate);try{for(c.s();!(p=c.n()).done;)d=p.value,i.delete(d.resource.path),s.has(d.resource.path)||u.has(d.resource.path)?(h=d.resource,v=d.content,m=d.finish,x=d.error,g=(0,P.getSiblingOfSameTypeI)(h,(0,O.D)()),t.paths.push(g.path),l.push(j({resource:g,content:v,compress:d.compress,finish:m,error:x},a))):(t.paths.push(d.resource.path),l.push(q(d,a)),u.add(d.resource.path))}catch(o){c.e(o)}finally{c.f()}b=(0,n.Z)(r.resources.toAdd);try{for(b.s();!(w=b.n()).done;)Z=w.value,l.push(j(Z,a)),t.paths.push(Z.resource.path)}catch(o){b.e(o)}finally{b.f()}if(i.forEach((function(e){var t=r.portalItem.resourceFromPath(e);l.push(t.portalItem.removeResource(t).catch((function(){})))})),0!==l.length){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,(0,y.as)(l);case 14:if(S=e.sent,(0,y.k_)(a),k=S.filter((function(e){return"error"in e})).map((function(e){return e.error})),!(k.length>0)){e.next=19;break}throw new f.Z("save:resources","Failed to save one or more resources",{errors:k});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return K.apply(this,arguments)}function K(){return(K=(0,i.Z)((0,o.Z)().mark((function e(t,r){var n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,a.Z)((0,a.Z)({},(0,v.pC)(r)?r:{}),{},{compress:t.compress}),e.next=3,(0,C.q6)(t.resource.portalItem.addResource(t.resource,t.content,n));case 3:if(!0===(i=e.sent).ok){e.next=6;break}throw t.error&&t.error(i.error),i.error;case 6:t.finish&&t.finish(t.resource);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return F.apply(this,arguments)}function F(){return(F=(0,i.Z)((0,o.Z)().mark((function e(t,r){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.q6)(t.resource.update(t.content,r));case 2:if(!0===(n=e.sent).ok){e.next=5;break}throw t.error(n.error),n.error;case 5:t.finish(t.resource);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L,V,M="esri.layers.mixins.SceneService",z=h.Z.getLogger(M),D=function(e){var t=function(e){(0,l.Z)(p,e);var t=(0,c.Z)(p);function p(){var e;return(0,s.Z)(this,p),(e=t.apply(this,arguments)).spatialReference=null,e.fullExtent=null,e.heightModelInfo=null,e.minScale=0,e.maxScale=0,e.version={major:Number.NaN,minor:Number.NaN,versionString:""},e.copyright=null,e.sublayerTitleMode="item-title",e.title=null,e.layerId=null,e.indexInfo=null,e._debouncedSaveOperations=(0,y.Ds)(function(){var t=(0,i.Z)((0,o.Z)().mark((function t(r,n,a){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r,t.next=t.t0===H.SAVE?3:t.t0===H.SAVE_AS?4:5;break;case 3:return t.abrupt("return",e._save(n));case 4:return t.abrupt("return",e._saveAs(a,n));case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()),e}return(0,u.Z)(p,[{key:"readSpatialReference",value:function(e,t){return this._readSpatialReference(t)}},{key:"_readSpatialReference",value:function(e){if(null!=e.spatialReference)return I.Z.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,n=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=n?new I.Z(n):null}},{key:"readFullExtent",value:function(e,t,r){if(null!=e&&"object"==typeof e){var n=null==e.spatialReference?(0,a.Z)((0,a.Z)({},e),{},{spatialReference:this._readSpatialReference(t)}):e;return S.Z.fromJSON(n,r)}var o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((function(e){return e<J}))?null:new S.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}},{key:"parseVersionString",value:function(e){var t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}},{key:"readVersion",value:function(e,t){var r=t.store,n=null!=r.version?r.version.toString():"";return this.parseVersionString(n)}},{key:"readTitlePortalItem",value:function(e){return"item-title"!==this.sublayerTitleMode?void 0:e}},{key:"readTitleService",value:function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return(0,_.a7)(this.url,t.name);var n=t.name;if(!n&&this.url){var a=(0,_.Qc)(this.url);(0,v.pC)(a)&&(n=a.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(n=r+" - "+n),(0,_.ld)(n)}},{key:"url",set:function(e){var t=(0,_.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:z});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}},{key:"writeUrl",value:function(e,t,r,n){(0,_.wH)(this,e,"layers",t,n)}},{key:"parsedUrl",get:function(){var e=this._get("url"),t=(0,m.mN)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}},{key:"_fetchIndexAndUpdateExtent",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,r){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.indexInfo=(0,T.T)(this.parsedUrl.path,this.rootNode,t,this.apiKey,z,r),e.t0=null==this.fullExtent||this.fullExtent.hasZ,e.t0){e.next=8;break}return e.t1=this,e.next=6,this.indexInfo;case 6:e.t2=e.sent,e.t1._updateExtent.call(e.t1,e.t2);case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_updateExtent",value:function(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r,n=e.rootIndex%e.pageSize,a=null===(t=e.rootPage)||void 0===t||null===(r=t.nodes)||void 0===r?void 0:r[n];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new f.Z("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<J||null==this.fullExtent||this.fullExtent.hasZ)return;var o=a.obb.halfSize,i=a.obb.center[2],s=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-s,this.fullExtent.zmax=i+s}else if("node"===(null===e||void 0===e?void 0:e.type)){var u,l=null===(u=e.rootNode)||void 0===u?void 0:u.mbs;if(!Array.isArray(l)||4!==l.length||l[0]<J)return;var c=l[2],p=l[3],d=this.fullExtent;d&&(d.zmin=c-p,d.zmax=c+p)}}},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=this.url){e.next=2;break}throw new f.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");case 2:if(null!=this.layerId||!/SceneServer\/*$/i.test(this.url)){e.next=7;break}return e.next=5,this._fetchFirstLayerId(t);case 5:null!=(r=e.sent)&&(this.layerId=r);case 7:return e.abrupt("return",this._fetchServiceLayer(t));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchFirstLayerId",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.default)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if(!((r=e.sent).data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)){e.next=5;break}return e.abrupt("return",r.data.layers[0].id);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchServiceLayer",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n,a,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.default)(null!==(r=null===(n=this.parsedUrl)||void 0===n?void 0:n.path)&&void 0!==r?r:"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:if((a=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),i=!1,a.data.layerType&&"Voxel"===a.data.layerType&&(i=!0),!i){e.next=7;break}return e.abrupt("return",this._fetchVoxelServiceLayer());case 7:s=a.data,this.read(s,{origin:"service",url:this.parsedUrl}),this.validateLayer(s);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchVoxelServiceLayer",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.default)((null===(r=this.parsedUrl)||void 0===r?void 0:r.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:n=e.sent.data,this.read(n,{origin:"service",url:this.parsedUrl}),this.validateLayer(n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_ensureLoadBeforeSave",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(e.t0="beforeSave"in this&&"function"==typeof this.beforeSave,!e.t0){e.next=6;break}return e.next=6,this.beforeSave();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){}},{key:"_updateTypeKeywords",value:function(e,t,r){e.typeKeywords||(e.typeKeywords=[]);var a,o=t.getTypeKeywords(),i=(0,n.Z)(o);try{for(i.s();!(a=i.n()).done;){var s=a.value;e.typeKeywords.push(s)}}catch(u){i.e(u)}finally{i.f()}e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((function(e,t,r){return r.indexOf(e)===t})),r===L.newItem&&(e.typeKeywords=e.typeKeywords.filter((function(e){return"Hosted Service"!==e}))))}},{key:"_saveAs",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,r){var n,i,s,u,l,c,p,d;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=(0,a.Z)((0,a.Z)({},Q),r),l=N.default.from(t),e.t0=l,e.t0){e.next=7;break}return z.error("_saveAs(): requires a portal item parameter"),e.next=7,Promise.reject(new f.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"));case 7:return l.id&&((l=l.clone()).id=null),c=l.portal||A.Z.getDefault(),e.next=11,this._ensureLoadBeforeSave();case 11:return l.type=G,l.portal=c,p={origin:"portal-item",url:null,messages:[],portal:c,portalItem:l,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},d={layers:[this.write({},p)]},e.next=16,Promise.all(null!==(n=null===(i=p.resources)||void 0===i?void 0:i.pendingOperations)&&void 0!==n?n:[]);case 16:return e.next=18,this._validateAgainstJSONSchema(d,p,u);case 18:return l.url=this.url,l.title||(l.title=this.title),this._updateTypeKeywords(l,u,L.newItem),e.next=23,c._signIn();case 23:return e.next=25,null===(s=c.user)||void 0===s?void 0:s.addItem({item:l,folder:u&&u.folder,data:d});case 25:return e.next=27,U(this.resourceReferences,p,null);case 27:return this.portalItem=l,(0,Z.D)(p),p.portalItem=l,e.abrupt("return",l);case 31:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_save",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n,i,s,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(0,a.Z)((0,a.Z)({},Q),t),this.portalItem){e.next=3;break}throw z.error("_save(): requires the .portalItem property to be set"),new f.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");case 3:if(this.portalItem.type===G){e.next=5;break}throw z.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+G),new f.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(G,'"'));case 5:return e.next=7,this._ensureLoadBeforeSave();case 7:return s={origin:"portal-item",url:this.portalItem.itemUrl&&(0,m.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||A.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},u={layers:[this.write({},s)]},e.next=10,Promise.all(null!==(r=null===(n=s.resources)||void 0===n?void 0:n.pendingOperations)&&void 0!==r?r:[]);case 10:return e.next=12,this._validateAgainstJSONSchema(u,s,i);case 12:return this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,i,L.existingItem),e.next=17,this.portalItem.update({data:u});case 17:return e.next=19,U(this.resourceReferences,s,null);case 19:return(0,Z.D)(s),e.abrupt("return",this.portalItem);case 21:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_validateAgainstJSONSchema",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,n,a){var i,s,u,l,c,p,d,h,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=null!==(i=null===(s=n.messages)||void 0===s?void 0:s.filter((function(e){return"error"===e.type})).map((function(e){return new f.Z(e.name,e.message,e.details)})))&&void 0!==i?i:[],a&&null!==(u=a.validationOptions)&&void 0!==u&&u.ignoreUnsupported&&(c=c.filter((function(e){return"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name}))),!(null!==(l=a.validationOptions)&&void 0!==l&&l.enabled||B)){e.next=10;break}return e.next=4,r.e(6168).then(r.bind(r,36168));case 4:if(!((p=e.sent.validate(t,a.portalItemLayerType)).length>0)){e.next=10;break}if(h="Layer item did not validate:\n".concat(p.join("\n")),z.error("_validateAgainstJSONSchema(): ".concat(h)),"throw"!==(null===(d=a.validationOptions)||void 0===d?void 0:d.failPolicy)){e.next=10;break}throw v=p.map((function(e){return new f.Z("sceneservice:schema-validation",e)})).concat(c),new f.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:v});case 10:if(!(c.length>0)){e.next=12;break}throw new f.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:c});case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()}]),p}(e);return(0,p._)([(0,x.Cb)(R.id)],t.prototype,"id",void 0),(0,p._)([(0,x.Cb)({type:I.Z})],t.prototype,"spatialReference",void 0),(0,p._)([(0,g.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,p._)([(0,x.Cb)({type:S.Z})],t.prototype,"fullExtent",void 0),(0,p._)([(0,g.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,p._)([(0,x.Cb)({readOnly:!0,type:k.Z})],t.prototype,"heightModelInfo",void 0),(0,p._)([(0,x.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,p._)([(0,x.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,p._)([(0,x.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,p._)([(0,g.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,p._)([(0,x.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,p._)([(0,x.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,p._)([(0,x.Cb)({type:String})],t.prototype,"title",void 0),(0,p._)([(0,g.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,p._)([(0,g.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,p._)([(0,x.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,p._)([(0,x.Cb)(R.HQ)],t.prototype,"url",null),(0,p._)([(0,w.c)("url")],t.prototype,"writeUrl",null),(0,p._)([(0,x.Cb)()],t.prototype,"parsedUrl",null),(0,p._)([(0,x.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,p._)([(0,x.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,p._)([(0,b.j)(M)],t),t},J=-1e38,B=!1;(V=L||(L={}))[V.existingItem=0]="existingItem",V[V.newItem=1]="newItem";var H,G="Scene Service",Q={getTypeKeywords:function(){return[]},portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(H||(H={}))},30494:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(74165),a=r(15861),o=r(76200),i=r(10064),s=r(92026);function u(e,t,r,n,a,o){return l.apply(this,arguments)}function l(){return l=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,u,l,c){var p,d,f,h,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=null,!(0,s.pC)(a)){e.next=17;break}return d="".concat(t,"/nodepages/"),f=d+Math.floor(a.rootIndex/a.nodesPerPage),e.prev=3,e.next=6,(0,o.default)(f,{query:{f:"json",token:u},responseType:"json",signal:c});case 6:return e.t0=e.sent.data,e.t1=a.rootIndex,e.t2=a.nodesPerPage,e.t3=a.lodSelectionMetricType,e.t4=d,e.abrupt("return",{type:"page",rootPage:e.t0,rootIndex:e.t1,pageSize:e.t2,lodMetric:e.t3,urlPrefix:e.t4});case 14:e.prev=14,e.t5=e.catch(3),(0,s.pC)(l)&&l.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",f,e.t5),p=e.t5;case 17:if(r){e.next=19;break}return e.abrupt("return",null);case 19:return h="".concat(t,"/nodes/"),v=h+(r&&r.split("/").pop()),e.prev=20,e.next=23,(0,o.default)(v,{query:{f:"json",token:u},responseType:"json",signal:c});case 23:return e.t6=e.sent.data,e.t7=h,e.abrupt("return",{type:"node",rootNode:e.t6,urlPrefix:e.t7});case 28:throw e.prev=28,e.t8=e.catch(20),new i.Z("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e.t8,url:v});case 31:case"end":return e.stop()}}),e,null,[[3,14],[20,28]])}))),l.apply(this,arguments)}},62078:function(e,t,r){r.r(t),r.d(t,{addOrUpdateResource:function(){return d},contentToBlob:function(){return b},fetchResources:function(){return c},getSiblingOfSameType:function(){return Z},getSiblingOfSameTypeI:function(){return S},removeAllResources:function(){return y},removeResource:function(){return h},splitPrefixFileNameAndExtension:function(){return g}});var n=r(74165),a=r(29439),o=r(15861),i=r(76200),s=r(10064),u=r(92026),l=r(35995);function c(e){return p.apply(this,arguments)}function p(){return p=(0,o.Z)((0,n.Z)().mark((function e(t){var r,a,o,i,s,c,p,d,f,h,v,y,m=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.length>1&&void 0!==m[1]?m[1]:{},a=m.length>2?m[2]:void 0,e.next=4,t.load(a);case 4:return o=(0,l.v_)(t.itemUrl,"resources"),i=r.start,s=void 0===i?1:i,c=r.num,p=void 0===c?10:c,d=r.sortOrder,f=void 0===d?"asc":d,h=r.sortField,v={query:{start:s,num:p,sortOrder:f,sortField:void 0===h?"created":h,token:t.apiKey},signal:(0,u.U2)(a,"signal")},e.next=16,t.portal._request(o,v);case 16:return y=e.sent,e.abrupt("return",{total:y.total,nextStart:y.nextStart,resources:y.resources.map((function(e){var r=e.created,n=e.size,a=e.resource;return{created:new Date(r),size:n,resource:t.resourceFromPath(a)}}))});case 18:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e,t,r,n){return f.apply(this,arguments)}function f(){return f=(0,o.Z)((0,n.Z)().mark((function e(t,r,o,i){var c,p,d,f,h,v,y,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hasPath()){e.next=2;break}throw new s.Z("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");case 2:return c=t.portalItem,e.next=5,c.load(i);case 5:return p=(0,l.v_)(c.userItemUrl,"add"===r?"addResources":"updateResources"),d=x(t.path),f=(0,a.Z)(d,2),h=f[0],v=f[1],e.next=12,b(o);case 12:return y=e.sent,m=new FormData,h&&"."!==h&&m.append("resourcesPrefix",h),(0,u.pC)(i)&&i.compress&&m.append("compress","true"),m.append("fileName",v),m.append("file",y,v),m.append("f","json"),(0,u.pC)(i)&&i.access&&m.append("access",i.access),e.next=22,c.portal._request(p,{method:"post",body:m,signal:(0,u.U2)(i,"signal")});case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(e,t,r){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)((0,n.Z)().mark((function e(t,r,a){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.hasPath()){e.next=2;break}throw new s.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");case 2:return e.next=4,t.load(a);case 4:return o=(0,l.v_)(t.userItemUrl,"removeResources"),e.next=7,t.portal._request(o,{method:"post",query:{resource:r.path},signal:(0,u.U2)(a,"signal")});case 7:r.portalItem=null;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load(r);case 2:return a=(0,l.v_)(t.userItemUrl,"removeResources"),e.abrupt("return",t.portal._request(a,{method:"post",query:{deleteAll:!0},signal:(0,u.U2)(r,"signal")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function g(e){var t=function(e){var t=(0,l.Ml)(e);return(0,u.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),r=(0,a.Z)(t,2),n=r[0],o=r[1],i=x(n),s=(0,a.Z)(i,2);return[s[0],s[1],o]}function b(e){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Blob)){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,(0,i.default)(t.url,{responseType:"blob"});case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){if(!e.hasPath())return null;var r=g(e.path),n=(0,a.Z)(r,3),o=n[0],i=n[2];return e.portalItem.resourceFromPath((0,l.v_)(o,t+i))}function S(e,t){if(!e.hasPath())return null;var r=g(e.path),n=(0,a.Z)(r,3),o=n[0],i=n[2];return e.portalItem.resourceFromPath((0,l.v_)(o,t+i))}}}]);
//# sourceMappingURL=5731.ca84bec3.chunk.js.map