"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[6251],{66576:function(e,t,r){r.d(t,{B:function(){return Z}});var o=r(74165),n=r(15861),i=r(1413),a=r(37762),p=r(80292),s=r(35995),u=r(71907),l=r(33397),c=r(25265),y=r(49861);function d(e){return f[function(e){return e instanceof Blob?e.type:function(e){var t=(0,s.Ml)(e);return h[t]||v}(e.url)}(e)]||m}var f={},v="text/plain",m=f[v],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(var g in h)f[h[g]]=g;var b=r(53283);function Z(e){var t,r=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return function(t,o){var n,u=function(e,t,r){var o;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,r){var o=(0,l.VZ)(t,r);return{type:String,read:function(e,t,r){var n=(0,b.r)(e,t,r);return o.type===String?n:"function"==typeof o.type?new o.type({url:n}):void 0},write:{writer:function(t,n,a,u){if(!u||!u.resources)return"string"==typeof t?void(n[a]=(0,b.t)(t,u)):void(n[a]=t.write({},u));var l=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,b.t)(l,(0,i.Z)((0,i.Z)({},u),{},{verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),b.M.NO),f=o.type!==String&&(!(0,p.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,c.M9)(u.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:n,targetPropertyName:a,context:u,params:e};u&&u.portalItem&&y&&!(0,s.YP)(y)?f?function(e){var t,r=e.context,o=e.targetUrl,n=e.params,a=e.value,p=e.dest,u=e.targetPropertyName;if(!r.portalItem)return;var l=r.portalItem.resourceFromPath(o),c=x(a,o,r),y=d(c),f=(0,s.Ml)(l.path),v=null!==(t=null===n||void 0===n?void 0:n.compress)&&void 0!==t&&t;y===f?(r.resources&&w((0,i.Z)((0,i.Z)({},e),{},{resource:l,content:c,compress:v,updates:r.resources.toUpdate})),p[u]=o):_(e)}(v):function(e){var t=e.context,r=e.targetUrl,o=e.dest,n=e.targetPropertyName;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),o[n]=r)}(v):u&&u.portalItem&&(null==y||null!=(0,b.i)(y)||(0,s.jc)(y)||f)?_(v):n[a]=y}}}}(e,t,r);switch(null!==(o=null===e||void 0===e?void 0:e.type)&&void 0!==o?o:"other"){case"other":return{read:!0,write:!0};case"url":return{read:b.a.read,write:b.a.write}}}(e,t,o),f=(0,a.Z)(r);try{for(f.s();!(n=f.n()).done;){var v=n.value,m=(0,y.CJ)(t,v,o);for(var h in u)m[h]=u[h]}}catch(g){f.e(g)}finally{f.f()}}}function _(e){var t,r,o,n=e.targetUrl,a=e.params,p=e.value,l=e.context,c=e.dest,y=e.targetPropertyName;if(l.portalItem){var f=(0,b.p)(n),v=null!==(t=null===f||void 0===f?void 0:f.filename)&&void 0!==t?t:(0,u.D)(),m=null!==(r=null===a||void 0===a?void 0:a.prefix)&&void 0!==r?r:null===f||void 0===f?void 0:f.prefix,h=x(p,n,l),g=(0,s.v_)(m,v),Z="".concat(g,".").concat(d(h)),_=l.portalItem.resourceFromPath(Z);(0,s.jc)(n)&&l.resources&&l.resources.pendingOperations.push(function(e){return S.apply(this,arguments)}(n).then((function(e){_.path="".concat(g,".").concat(d(e)),c[y]=_.itemRelativeUrl})).catch((function(){})));var C=null!==(o=null===a||void 0===a?void 0:a.compress)&&void 0!==o&&o;l.resources&&w((0,i.Z)((0,i.Z)({},e),{},{resource:_,content:h,compress:C,updates:l.resources.toAdd})),c[y]=_.itemRelativeUrl}}function w(e){var t=e.object,r=e.propertyName,o=e.updates,n=e.resource,i=e.content,a=e.compress;o.push({resource:n,content:i,compress:a,finish:function(e){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function x(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function S(){return S=(0,n.Z)((0,o.Z)().mark((function e(t){var n,i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,76200));case 2:return n=e.sent.default,e.next=5,n(t,{responseType:"blob"});case 5:return i=e.sent,a=i.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}},56251:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var o,n=r(74165),i=r(15861),a=r(1413),p=r(15671),s=r(43144),u=r(60136),l=r(29388),c=r(27366),y=r(10064),d=r(100),f=r(92026),v=r(97642),m=r(66978),h=r(94172),g=r(49861),b=(r(63780),r(25243),r(38511)),Z=r(69912),_=r(66576),w=r(30651),x=r(27961),S=r(11936),C=r(6061),I=r(29598),k=r(56811),T=r(95731),N=r(45948),j=r(34207),U=r(37762),M=r(76200),R=r(40281),O=r(46784),P=r(35995),F=(r(59486),r(84652)),J=r(51370),q=r(31201),A=r(52587),D=r(80885),L=o=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var o;return(0,p.Z)(this,r),(o=t.call(this,e)).geometry=null,o.type="clip",o}return(0,s.Z)(r,[{key:"writeGeometry",value:function(e,t,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,A.Up)(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new J.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));var n=new D.Z;(0,A.Wt)(e,n,o.layer.spatialReference),t[r]=n.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}},{key:"clone",value:function(){return new o({geometry:(0,F.d9)(this.geometry),type:this.type})}}]),r}(O.wq);(0,c._)([(0,g.Cb)({type:D.Z}),(0,_.B)()],L.prototype,"geometry",void 0),(0,c._)([(0,q.c)(["web-scene","portal-item"],"geometry")],L.prototype,"writeGeometry",null),(0,c._)([(0,g.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,_.B)()],L.prototype,"type",void 0);var B,V=L=o=(0,c._)([(0,Z.j)("esri.layers.support.SceneModification")],L),z=B=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var o;return(0,p.Z)(this,r),(o=t.call(this,e)).url=null,o}return(0,s.Z)(r,[{key:"clone",value:function(){return new B({url:this.url,items:this.items.map((function(e){return e.clone()}))})}},{key:"toJSON",value:function(e){return this.toArray().map((function(t){return t.toJSON(e)})).filter((function(e){return!!e.geometry}))}}],[{key:"fromJSON",value:function(e,t){var r,o=new B,n=(0,U.Z)(e);try{for(n.s();!(r=n.n()).done;){var i=r.value;o.add(V.fromJSON(i,t))}}catch(a){n.e(a)}finally{n.f()}return o}},{key:"fromUrl",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,o){var i,p,s,u,l,c,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={url:(0,P.mN)(t),origin:"service"},e.next=3,(0,M.default)(t,{responseType:"json",signal:(0,f.U2)(o,"signal")});case 3:p=e.sent,s=r.toJSON(),u=[],l=(0,U.Z)(p.data);try{for(l.s();!(c=l.n()).done;)y=c.value,u.push(V.fromJSON((0,a.Z)((0,a.Z)({},y),{},{geometry:(0,a.Z)((0,a.Z)({},y.geometry),{},{spatialReference:s})}),i))}catch(n){l.e(n)}finally{l.f()}return e.abrupt("return",new B({url:t,items:u}));case 9:case"end":return e.stop()}}),e)})));return function(t,r,o){return e.apply(this,arguments)}}()}]),r}((0,O.eC)(R.Z.ofType(V)));(0,c._)([(0,g.Cb)({type:String})],z.prototype,"url",void 0);var G=z=B=(0,c._)([(0,Z.j)("esri.layers.support.SceneModifications")],z),K=r(53283),Y=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,p.Z)(this,r);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n)))._handles=new d.Z,e.geometryType="mesh",e.operationalLayerType="IntegratedMeshLayer",e.type="integrated-mesh",e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.profile="mesh-pyramids",e.modifications=null,e._modificationsSource=null,e.elevationInfo=null,e.path=null,e}return(0,s.Z)(r,[{key:"destroy",value:function(){this._handles.destroy()}},{key:"initialize",value:function(){var e=this;this._handles.add((0,h.on)((function(){return e.modifications}),"after-changes",(function(){return e.modifications=e.modifications}),h.Z_))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"readModifications",value:function(e,t,r){this._modificationsSource={url:(0,K.f)(e,r),context:r}}},{key:"load",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this._doLoad(t)),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_doLoad",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,f.U2)(t,"signal"),e.prev=1,e.next=4,this.loadFromPortal({supportedTypes:["Scene Service"]},t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),(0,m.r9)(e.t0);case 9:return e.next=11,this._fetchService(r);case 11:if(!(0,f.pC)(this._modificationsSource)){e.next=16;break}return e.next=14,G.fromUrl(this._modificationsSource.url,this.spatialReference,t);case 14:o=e.sent,this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null;case 16:return e.next=18,this._fetchIndexAndUpdateExtent(this.nodePages,r);case 18:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"beforeSave",value:function(){if(!(0,f.Wi)(this._modificationsSource))return this.load().then((function(){}),(function(){}))}},{key:"saveAs",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(T.xp.SAVE_AS,(0,a.Z)((0,a.Z)({},r),{},{getTypeKeywords:function(){return o._getTypeKeywords()},portalItemLayerType:"integrated-mesh"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"integrated-mesh"},e.abrupt("return",this._debouncedSaveOperations(T.xp.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new y.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}},{key:"_getTypeKeywords",value:function(){return["IntegratedMeshLayer"]}}]),r}((0,T.Vt)((0,S.Y)((0,C.q)((0,I.I)((0,k.M)((0,v.R)((0,x.V)(w.Z))))))));(0,c._)([(0,g.Cb)({type:String,readOnly:!0})],Y.prototype,"geometryType",void 0),(0,c._)([(0,g.Cb)({type:["show","hide"]})],Y.prototype,"listMode",void 0),(0,c._)([(0,g.Cb)({type:["IntegratedMeshLayer"]})],Y.prototype,"operationalLayerType",void 0),(0,c._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],Y.prototype,"type",void 0),(0,c._)([(0,g.Cb)({type:j.U4,readOnly:!0})],Y.prototype,"nodePages",void 0),(0,c._)([(0,g.Cb)({type:[j.QI],readOnly:!0})],Y.prototype,"materialDefinitions",void 0),(0,c._)([(0,g.Cb)({type:[j.Yh],readOnly:!0})],Y.prototype,"textureSetDefinitions",void 0),(0,c._)([(0,g.Cb)({type:[j.H3],readOnly:!0})],Y.prototype,"geometryDefinitions",void 0),(0,c._)([(0,g.Cb)({readOnly:!0})],Y.prototype,"serviceUpdateTimeStamp",void 0),(0,c._)([(0,g.Cb)({type:G}),(0,_.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],Y.prototype,"modifications",void 0),(0,c._)([(0,b.r)(["web-scene","portal-item"],"modifications")],Y.prototype,"readModifications",null),(0,c._)([(0,g.Cb)(N.PV)],Y.prototype,"elevationInfo",void 0),(0,c._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Y.prototype,"path",void 0);var E=Y=(0,c._)([(0,Z.j)("esri.layers.IntegratedMeshLayer")],Y)},34207:function(e,t,r){r.d(t,{H3:function(){return _},QI:function(){return v},U4:function(){return y},Yh:function(){return h}});var o=r(43144),n=r(15671),i=r(60136),a=r(29388),p=r(27366),s=r(46784),u=r(49861),l=(r(63780),r(25243),r(27135)),c=r(69912),y=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,u.Cb)({type:Number})],y.prototype,"nodesPerPage",void 0),(0,p._)([(0,u.Cb)({type:Number})],y.prototype,"rootIndex",void 0),(0,p._)([(0,u.Cb)({type:String})],y.prototype,"lodSelectionMetricType",void 0),y=(0,p._)([(0,c.j)("esri.layer.support.I3SNodePageDefinition")],y);var d=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).factor=1,e}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,u.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],d.prototype,"id",void 0),(0,p._)([(0,u.Cb)({type:Number})],d.prototype,"factor",void 0),d=(0,p._)([(0,c.j)("esri.layer.support.I3SMaterialTexture")],d);var f=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,u.Cb)({type:[Number]})],f.prototype,"baseColorFactor",void 0),(0,p._)([(0,u.Cb)({type:d})],f.prototype,"baseColorTexture",void 0),(0,p._)([(0,u.Cb)({type:d})],f.prototype,"metallicRoughnessTexture",void 0),(0,p._)([(0,u.Cb)({type:Number})],f.prototype,"metallicFactor",void 0),(0,p._)([(0,u.Cb)({type:Number})],f.prototype,"roughnessFactor",void 0),f=(0,p._)([(0,c.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],f);var v=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,l.J)({opaque:"opaque",mask:"mask",blend:"blend"})],v.prototype,"alphaMode",void 0),(0,p._)([(0,u.Cb)({type:Number})],v.prototype,"alphaCutoff",void 0),(0,p._)([(0,u.Cb)({type:Boolean})],v.prototype,"doubleSided",void 0),(0,p._)([(0,l.J)({none:"none",back:"back",front:"front"})],v.prototype,"cullFace",void 0),(0,p._)([(0,u.Cb)({type:d})],v.prototype,"normalTexture",void 0),(0,p._)([(0,u.Cb)({type:d})],v.prototype,"occlusionTexture",void 0),(0,p._)([(0,u.Cb)({type:d})],v.prototype,"emissiveTexture",void 0),(0,p._)([(0,u.Cb)({type:[Number]})],v.prototype,"emissiveFactor",void 0),(0,p._)([(0,u.Cb)({type:f})],v.prototype,"pbrMetallicRoughness",void 0),v=(0,p._)([(0,c.j)("esri.layer.support.I3SMaterialDefinition")],v);var m=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,u.Cb)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],m.prototype,"name",void 0),(0,p._)([(0,l.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],m.prototype,"format",void 0),m=(0,p._)([(0,c.j)("esri.layer.support.I3STextureFormat")],m);var h=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,u.Cb)({type:[m]})],h.prototype,"formats",void 0),(0,p._)([(0,u.Cb)({type:Boolean})],h.prototype,"atlas",void 0),h=(0,p._)([(0,c.j)("esri.layer.support.I3STextureSetDefinition")],h);var g=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,l.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],g.prototype,"type",void 0),(0,p._)([(0,u.Cb)({type:Number})],g.prototype,"component",void 0),g=(0,p._)([(0,c.j)("esri.layer.support.I3SGeometryAttribute")],g);var b=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,l.J)({draco:"draco"})],b.prototype,"encoding",void 0),(0,p._)([(0,u.Cb)({type:[String]})],b.prototype,"attributes",void 0),b=(0,p._)([(0,c.j)("esri.layer.support.I3SGeometryCompressedAttributes")],b);var Z=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).offset=0,e}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,u.Cb)({type:Number})],Z.prototype,"offset",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"position",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"normal",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"uv0",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"color",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"uvRegion",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"featureId",void 0),(0,p._)([(0,u.Cb)({type:g})],Z.prototype,"faceRange",void 0),(0,p._)([(0,u.Cb)({type:b})],Z.prototype,"compressedAttributes",void 0),Z=(0,p._)([(0,c.j)("esri.layer.support.I3SGeometryBuffer")],Z);var _=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(s.wq);(0,p._)([(0,l.J)({triangle:"triangle"})],_.prototype,"topology",void 0),(0,p._)([(0,u.Cb)()],_.prototype,"geometryBuffers",void 0),_=(0,p._)([(0,c.j)("esri.layer.support.I3SGeometryDefinition")],_)}}]);
//# sourceMappingURL=6251.723befb1.chunk.js.map