"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[5675],{34785:function(t,e,r){r.d(e,{W:function(){return h}});var n=r(29439),o=r(74165),a=r(15861),s=r(15671),u=r(43144),i=r(19545),p=r(76200),c=r(92026),l=r(66978),d=r(64326),f=r(70032),y=r(98995),h=function(){function t(e,r,n,o){var a;(0,s.Z)(this,t),this._parsedUrl=e,this._portalItem=r,this._apiKey=n,this.signal=o,this._rootDocument=null;var u=null===(a=this._parsedUrl)||void 0===a?void 0:a.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);u&&(this._urlParts={root:u[1],layerId:parseInt(u[2],10)})}return(0,u.Z)(t,[{key:"fetch",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,r,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._urlParts){t.next=2;break}return t.abrupt("return",null);case 2:if(null===(e=this._portalItem)||void 0===e){t.next=6;break}t.t0=e,t.next=9;break;case 6:return t.next=8,this._portalItemFromServiceItemId();case 8:t.t0=t.sent;case 9:if(r=t.t0,!(0,c.Wi)(r)){t.next=12;break}return t.abrupt("return",this._loadFromUrl());case 12:return t.next=14,this._findAndLoadRelatedPortalItem(r);case 14:return n=t.sent,t.abrupt("return",(0,c.Wi)(n)?null:this._loadFeatureLayerFromPortalItem(n));case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchPortalItem",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._urlParts){t.next=2;break}return t.abrupt("return",null);case 2:if(null===(e=this._portalItem)||void 0===e){t.next=6;break}t.t0=e,t.next=9;break;case 6:return t.next=8,this._portalItemFromServiceItemId();case 8:t.t0=t.sent;case 9:return r=t.t0,t.abrupt("return",(0,c.Wi)(r)?null:this._findAndLoadRelatedPortalItem(r));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_fetchRootDocument",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,r,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,c.pC)(this._rootDocument)){t.next=2;break}return t.abrupt("return",this._rootDocument);case 2:if(!(0,c.Wi)(this._urlParts)){t.next=4;break}return t.abrupt("return",(this._rootDocument={},{}));case 4:return e={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},r="".concat(this._urlParts.root,"/SceneServer"),t.prev=5,t.next=8,(0,p.default)(r,e);case 8:n=t.sent,this._rootDocument=n.data,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),this._rootDocument={};case 15:return t.abrupt("return",this._rootDocument);case 16:case"end":return t.stop()}}),t,this,[[5,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"_fetchServiceOwningPortalUrl",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,r,n,a,s;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null===(e=this._parsedUrl)||void 0===e?void 0:e.path,null===(n=r?null===i.id||void 0===i.id?void 0:i.id.findServerInfo(r):null)||void 0===n||!n.owningSystemUrl){t.next=3;break}return t.abrupt("return",n.owningSystemUrl);case 3:return a=r?r.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null,t.prev=4,t.next=7,(0,p.default)(a,{query:{f:"json"},responseType:"json",signal:this.signal});case 7:if(!(s=t.sent.data.owningSystemUrl)){t.next=10;break}return t.abrupt("return",s);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),(0,l.r9)(t.t0);case 15:return t.abrupt("return",null);case 16:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"_findAndLoadRelatedPortalItem",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal});case 3:if(t.t0=t.sent.find((function(t){return"Feature Service"===t.type})),t.t0){t.next=6;break}t.t0=null;case 6:return t.abrupt("return",t.t0);case 9:return t.prev=9,t.t1=t.catch(0),t.abrupt("return",((0,l.r9)(t.t1),null));case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"_loadFeatureLayerFromPortalItem",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e){var r,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load({signal:this.signal});case 2:return t.next=4,this._findMatchingAssociatedSublayerUrl(null!==(r=e.url)&&void 0!==r?r:"");case 4:return n=t.sent,t.abrupt("return",new d.default({url:n,portalItem:e}).load({signal:this.signal}));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_loadFromUrl",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._findMatchingAssociatedSublayerUrl("".concat(null===(e=this._urlParts)||void 0===e?void 0:e.root,"/FeatureServer"));case 2:return r=t.sent,t.abrupt("return",new d.default({url:r}).load({signal:this.signal}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_findMatchingAssociatedSublayerUrl",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e){var r,a,s,u,i,c,l,d,f,y,h,v,b;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),s={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},u=null===(r=this._urlParts)||void 0===r?void 0:r.layerId,i=this._fetchRootDocument(),c=(0,p.default)(a,s),t.next=7,Promise.all([c,i]);case 7:if(l=t.sent,d=(0,n.Z)(l,2),f=d[0],y=d[1],h=y&&y.layers,v=f.data&&f.data.layers,Array.isArray(v)){t.next=15;break}throw new Error("expected layers array");case 15:if(!Array.isArray(h)){t.next=25;break}b=0;case 17:if(!(b<Math.min(h.length,v.length))){t.next=23;break}if(h[b].id!==u){t.next=20;break}return t.abrupt("return","".concat(a,"/").concat(v[b].id));case 20:b++,t.next=17;break;case 23:t.next=27;break;case 25:if(!(null!=u&&u<v.length)){t.next=27;break}return t.abrupt("return","".concat(a,"/").concat(v[u].id));case 27:throw new Error("could not find matching associated sublayer");case 28:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_portalItemFromServiceItemId",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,r,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._fetchRootDocument();case 2:if(e=t.sent.serviceItemId){t.next=5;break}return t.abrupt("return",null);case 5:return r=new y.default({id:e,apiKey:this._apiKey}),t.next=8,this._fetchServiceOwningPortalUrl();case 8:return n=t.sent,(0,c.pC)(n)&&(r.portal=new f.Z({url:n})),t.prev=10,t.abrupt("return",r.load({signal:this.signal}));case 14:return t.prev=14,t.t0=t.catch(10),t.abrupt("return",((0,l.r9)(t.t0),null));case 17:case"end":return t.stop()}}),t,this,[[10,14]])})));return function(){return t.apply(this,arguments)}}()}]),t}()},34207:function(t,e,r){r.d(e,{H3:function(){return I},QI:function(){return h},U4:function(){return d},Yh:function(){return b}});var n=r(43144),o=r(15671),a=r(60136),s=r(29388),u=r(27366),i=r(46784),p=r(49861),c=(r(63780),r(25243),r(27135)),l=r(69912),d=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).nodesPerPage=null,t.rootIndex=0,t.lodSelectionMetricType=null,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:Number})],d.prototype,"nodesPerPage",void 0),(0,u._)([(0,p.Cb)({type:Number})],d.prototype,"rootIndex",void 0),(0,u._)([(0,p.Cb)({type:String})],d.prototype,"lodSelectionMetricType",void 0),d=(0,u._)([(0,l.j)("esri.layer.support.I3SNodePageDefinition")],d);var f=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).factor=1,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],f.prototype,"id",void 0),(0,u._)([(0,p.Cb)({type:Number})],f.prototype,"factor",void 0),f=(0,u._)([(0,l.j)("esri.layer.support.I3SMaterialTexture")],f);var y=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).baseColorFactor=[1,1,1,1],t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.metallicFactor=1,t.roughnessFactor=1,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:[Number]})],y.prototype,"baseColorFactor",void 0),(0,u._)([(0,p.Cb)({type:f})],y.prototype,"baseColorTexture",void 0),(0,u._)([(0,p.Cb)({type:f})],y.prototype,"metallicRoughnessTexture",void 0),(0,u._)([(0,p.Cb)({type:Number})],y.prototype,"metallicFactor",void 0),(0,u._)([(0,p.Cb)({type:Number})],y.prototype,"roughnessFactor",void 0),y=(0,u._)([(0,l.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],y);var h=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).alphaMode="opaque",t.alphaCutoff=.25,t.doubleSided=!1,t.cullFace="none",t.normalTexture=null,t.occlusionTexture=null,t.emissiveTexture=null,t.emissiveFactor=null,t.pbrMetallicRoughness=null,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({opaque:"opaque",mask:"mask",blend:"blend"})],h.prototype,"alphaMode",void 0),(0,u._)([(0,p.Cb)({type:Number})],h.prototype,"alphaCutoff",void 0),(0,u._)([(0,p.Cb)({type:Boolean})],h.prototype,"doubleSided",void 0),(0,u._)([(0,c.J)({none:"none",back:"back",front:"front"})],h.prototype,"cullFace",void 0),(0,u._)([(0,p.Cb)({type:f})],h.prototype,"normalTexture",void 0),(0,u._)([(0,p.Cb)({type:f})],h.prototype,"occlusionTexture",void 0),(0,u._)([(0,p.Cb)({type:f})],h.prototype,"emissiveTexture",void 0),(0,u._)([(0,p.Cb)({type:[Number]})],h.prototype,"emissiveFactor",void 0),(0,u._)([(0,p.Cb)({type:y})],h.prototype,"pbrMetallicRoughness",void 0),h=(0,u._)([(0,l.j)("esri.layer.support.I3SMaterialDefinition")],h);var v=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:String,json:{read:{source:["name","index"],reader:function(t,e){return null!=t?t:"".concat(e.index)}}}})],v.prototype,"name",void 0),(0,u._)([(0,c.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],v.prototype,"format",void 0),v=(0,u._)([(0,l.j)("esri.layer.support.I3STextureFormat")],v);var b=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).atlas=!1,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:[v]})],b.prototype,"formats",void 0),(0,u._)([(0,p.Cb)({type:Boolean})],b.prototype,"atlas",void 0),b=(0,u._)([(0,l.j)("esri.layer.support.I3STextureSetDefinition")],b);var m=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,u._)([(0,p.Cb)({type:Number})],m.prototype,"component",void 0),m=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryAttribute")],m);var _=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({draco:"draco"})],_.prototype,"encoding",void 0),(0,u._)([(0,p.Cb)({type:[String]})],_.prototype,"attributes",void 0),_=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryCompressedAttributes")],_);var x=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){var t;return(0,o.Z)(this,r),(t=e.apply(this,arguments)).offset=0,t}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,p.Cb)({type:Number})],x.prototype,"offset",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"position",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"normal",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"uv0",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"color",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"uvRegion",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"featureId",void 0),(0,u._)([(0,p.Cb)({type:m})],x.prototype,"faceRange",void 0),(0,u._)([(0,p.Cb)({type:_})],x.prototype,"compressedAttributes",void 0),x=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryBuffer")],x);var I=function(t){(0,a.Z)(r,t);var e=(0,s.Z)(r);function r(){return(0,o.Z)(this,r),e.apply(this,arguments)}return(0,n.Z)(r)}(i.wq);(0,u._)([(0,c.J)({triangle:"triangle"})],I.prototype,"topology",void 0),(0,u._)([(0,p.Cb)()],I.prototype,"geometryBuffers",void 0),I=(0,u._)([(0,l.j)("esri.layer.support.I3SGeometryDefinition")],I)},96978:function(t,e,r){r.d(e,{C:function(){return n}});var n={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},55664:function(t,e,r){r.d(e,{xe:function(){return g}});var n=r(37762),o=r(76200),a=(r(63780),r(10064),r(93169),r(66978)),s=r(18722),u=(r(22753),r(11873)),i=(r(14226),r(81949)),p=(r(48976),r(4582)),c=r(98131),l=(r(11186),r(71353)),d=(r(52587),r(92183),r(78952),r(65156)),f=(r(92975),r(21149),r(50951),r(28278));var y,h=r(1413),v=(r(51995),r(67077));function b(t){return(0,h.Z)((0,h.Z)((0,h.Z)({},m),t),{},{type:"solid"})}!function(t){t[t.INVISIBLE=0]="INVISIBLE",t[t.TRANSPARENT=1]="TRANSPARENT",t[t.OPAQUE=2]="OPAQUE"}(y||(y={}));var m={color:(0,v.f)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:y.OPAQUE,hasSlicePlane:!1},_=((0,v.f)(0,0,0,.2),y.OPAQUE,r(49420),r(8229));r(90045),r(41414),r(76146),(0,c.a)(),(0,l.c)(),(0,l.c)(),(0,v.c)(),(0,u.c)();function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[-1,-1,-1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0,1];return{center:(0,l.a)(t),halfSize:(0,_.b)(e),quaternion:(0,p.b)(r)}}!function(){var t=new Int8Array(162),e=0,r=function(r){for(var n=0;n<r.length;n++)t[e+n]=r[n];e+=6};r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4])}();var I;(0,d.Ue)();function g(t,e,r,s,u){var i,p=[],c=(0,n.Z)(e);try{for(c.s();!(i=c.n()).done;){var l=i.value;if(l&&u.includes(l.name)){var d="".concat(t,"/nodes/").concat(r,"/attributes/").concat(l.key,"/0");p.push({url:d,storageInfo:l})}}}catch(y){c.e(y)}finally{c.f()}return(0,a.as)(p.map((function(t){return(0,o.default)(t.url,{responseType:"array-buffer"}).then((function(e){return(0,f.qM)(t.storageInfo,e.data)}))}))).then((function(t){var e,r=[],o=(0,n.Z)(s);try{for(o.s();!(e=o.n()).done;){for(var a=e.value,u={},i=0;i<t.length;i++)null!=t[i].value&&(u[p[i].storageInfo.name]=S(t[i].value,a));r.push(u)}}catch(y){o.e(y)}finally{o.f()}return r}))}!function(t){t[t.OUTSIDE=0]="OUTSIDE",t[t.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",t[t.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",t[t.INSIDE=3]="INSIDE"}(I||(I={}));var Z=-Math.pow(2,31);function S(t,e){if(!t)return null;var r=t[e];return(0,s.z3)(t)?-32768===r?null:r:(0,s.Hx)(t)?r===Z?null:r:r!=r?null:r}b({color:[0,0,0,0],opacity:0});(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,c.a)();new Float64Array(24),(0,l.c)(),(0,l.c)(),(0,u.c)();(0,i.c)(),(0,p.c)(),(0,d.Ue)(),(0,d.Ue)(),x(),new Array(72),(0,i.c)()},49420:function(t,e,r){r.d(e,{a9:function(){return n}});var n;r(16889);!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}))},24405:function(t,e,r){r.d(e,{V:function(){return c},e:function(){return i}});var n=r(74165),o=r(93433),a=r(15861),s=r(92026),u=r(37270);function i(t){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,n.Z)().mark((function t(e){var r,a,i,p,c,l,d,f,y,h=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=h.length>1&&void 0!==h[1]?h[1]:e.popupTemplate,!(0,s.Wi)(r)){t.next=3;break}return t.abrupt("return",[]);case 3:return t.next=5,r.getRequiredFields(e.fieldsIndex);case 5:if(a=t.sent,i=r.lastEditInfoEnabled,p=e.objectIdField,c=e.typeIdField,l=e.globalIdField,d=e.relationships,!a.includes("*")){t.next=13;break}return t.abrupt("return",["*"]);case 13:if(!i){t.next=19;break}return t.next=16,(0,u.CH)(e);case 16:t.t0=t.sent,t.next=20;break;case 19:t.t0=[];case 20:return f=t.t0,y=(0,u.Q0)(e.fieldsIndex,[].concat((0,o.Z)(a),(0,o.Z)(f))),t.abrupt("return",(c&&y.push(c),y&&p&&e.fieldsIndex.has(p)&&!y.includes(p)&&y.push(p),y&&l&&e.fieldsIndex.has(l)&&!y.includes(l)&&y.push(l),d&&d.forEach((function(t){var r=t.keyField;y&&r&&e.fieldsIndex.has(r)&&!y.includes(r)&&y.push(r)})),y));case 23:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function c(t,e){return t.popupTemplate?t.popupTemplate:(0,s.pC)(e)&&e.defaultPopupTemplateEnabled&&(0,s.pC)(t.defaultPopupTemplate)?t.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=5675.109d55c6.chunk.js.map