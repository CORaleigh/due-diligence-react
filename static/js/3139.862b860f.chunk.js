"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[3139,3388],{32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return T},getNumLayersAndTables:function(){return Z},getSubtypeGroupLayerIds:function(){return k},load:function(){return f},preprocessFSItemData:function(){return N}});var n=t(74165),a=t(15861),u=t(10064),i=t(30651),o=t(25899),l=t(70032),s=t(98995),c=t(32698),p=t(73117),y=t(21371),d=t(41226);function f(e,r){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=r.instance.portalItem)||!a.id){e.next=6;break}return e.next=4,a.load(t);case 4:return v(r),e.abrupt("return",h(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){var r=e.instance.portalItem;if(!e.supportedTypes.includes(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function h(e,r){return b.apply(this,arguments)}function b(){return b=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u,i,o,l,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,u=a.portalItem,i=u.url,o=u.title,l=(0,c.h)(u),"group"!==a.type){e.next=3;break}return e.abrupt("return",(a.read({title:o},l),L(a,r)));case 3:return i&&a.read({url:i},l),e.next=6,w(r,t);case 6:return s=e.sent,e.abrupt("return",(s&&a.read(s,l),a.resourceReferences={portalItem:u,paths:l.readResourcePaths},"subtype-group"!==a.type&&a.read({title:o},l),(0,y.y)(a,l)));case 8:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function L(e,r){var t,i,o,l=e.portalItem.type,s=r.layerModuleTypeMap,c=null!==(t=(0,p._$)(e.portalItem,"Oriented Imagery Layer"))&&void 0!==t&&t;switch(l){case"Feature Service":i=c?s.OrientedImageryLayer:s.FeatureLayer;break;case"Stream Service":i=s.StreamLayer;break;case"Scene Service":i=s.SceneLayer;break;case"Feature Collection":i=s.FeatureLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(l,"' is not supported as a 'IGroupLayer'"))}return i().then((function(e){return o=e,w(r)})).then(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,u,i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=function(){return o},"Feature Service"!==l){r.next=13;break}return r.t0=k,r.next=5,N(t,e.portalItem.url);case 5:if(r.t1=t=r.sent,!(0,r.t0)(r.t1).length){r.next=12;break}return u=s.SubtypeGroupLayer,r.next=10,u();case 10:i=r.sent,a=function(e){return"SubtypeGroupLayer"===e.layerType?i:o};case 12:return r.abrupt("return",I(e,a,t));case 13:return r.abrupt("return",Z(t)>0?I(e,a,t):g(e,a));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function g(e,r){return e.portalItem.url?(0,d.b)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&I(e,r,{layers:null===(n=t.layers)||void 0===n?void 0:n.map(u),tables:null===(a=t.tables)||void 0===a?void 0:a.map(u)})})):Promise.resolve()}function I(e,r,t){var n=t.layers||[],a=t.tables||[];if("Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),"coverage"in t){var l=function(e){var r=e.coverage;if(!r)return null;var t=new URL(r);if(r.toLowerCase().includes("item.html")){var n=t.searchParams.get("id"),a=t.origin;return i.Z.fromPortalItem({portalItem:new s.default({id:n,url:a})})}if((0,o.B5)(r))return i.Z.fromArcGISServerUrl({url:r});throw new u.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);e.add(l)}n.reverse().forEach((function(n){var a=S(e,r(n),t,n);e.add(a)})),a.reverse().forEach((function(n){var a=S(e,r(n),t,n);e.tables.add(a)}))}function S(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id});if("subtype-group"!==a.type&&(a.sublayerTitleMode="service-name"),"Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};a.read(n,u);var i=t.showLegend;null!=i&&a.read({showLegend:i},u)}return a}function w(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then((function(e){if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(t)){var r,n=!0;if(e&&Z(e)>0){if(null==t.layerId){var a=k(e);t.layerId="subtype-group"===t.type?null===a||void 0===a?void 0:a[0]:T(e)}r=function(e,r){var t,n,a=r.layerId,u=(null===(t=e.layers)||void 0===t?void 0:t.find((function(e){return e.id===a})))||(null===(n=e.tables)||void 0===n?void 0:n.find((function(e){return e.id===a})));return u&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(u,r)?u:null}(e,t),r&&(1===Z(e)&&(n=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))}return n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e}))}function N(e,r){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(a=r)||void 0===a?void 0:a.layers)&&null!=(null===(u=r)||void 0===u?void 0:u.tables)){e.next=5;break}return e.next=3,(0,d.b)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function Z(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function k(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return y},selectLayerClassPath:function(){return d}});var n=t(74165),a=t(15861),u=t(1413),i=t(10064),o=t(19610),l=t(98995),s=t(33388),c=t(73117),p=t(41226);function y(e){return!e.portalItem||e.portalItem instanceof l.default||(e=(0,u.Z)((0,u.Z)({},e),{},{portalItem:new l.default(e.portalItem)})),function(e){return e.load().then(d).then(f)}(e.portalItem).then((function(r){var t=(0,u.Z)({portalItem:e.portalItem},r.properties);return new(0,r.constructor)(t)}))}function d(e){switch(e.type){case"Map Service":return function(e){return(0,p.b)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}));case"Feature Service":return function(e){return(0,c._$)(e,"Oriented Imagery Layer")?function(e){return e.load().then((function(){return e.fetchData()})).then((function(e){return e.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:e}}))}(e):h(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:e.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return m.apply(this,arguments)}(e);case"Scene Service":return function(e){return h(e).then((function(r){if("object"==typeof r){var t,n={};if(null!=r.id?(n.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,i=Object.keys(a);u<i.length;u++){var o=i[u];if(e.typeKeywords.includes(o))return{className:a[o]}}return(0,p.b)(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:n}}))}return!1===r?(0,p.b)(e.url).then((function(e){return"Voxel"===(null===e||void 0===e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}})):{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return v.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"CSV":return{className:"CSVLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new i.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function f(e){return(0,o.T[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function m(){return(m=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(t=(0,c._$)(r,"Map Notes"),a=(0,c._$)(r,"Markup"),!t&&!a){e.next=5;break}return e.abrupt("return",{className:"MapNotesLayer"});case 5:if(!(0,c._$)(r,"Route Layer")){e.next=7;break}return e.abrupt("return",{className:"RouteLayer"});case 7:return e.next=9,r.fetchData();case 9:return u=e.sent,e.abrupt("return",1===(0,s.getNumLayersAndTables)(u)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,u,i,o,l,s,c,y,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(l=null!==(t=null===(a=r.typeKeywords)||void 0===a?void 0:a.map((function(e){return e.toLowerCase()})))&&void 0!==t?t:[],!l.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!l.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(e.t1=u=e.sent,e.t0=null===e.t1,e.t0){e.next=13;break}e.t0=void 0===u;case 13:if(!e.t0){e.next=17;break}e.t2=void 0,e.next=18;break;case 17:e.t2=u.layerType;case 18:if("ArcGISTiledImageServiceLayer"!==(s=e.t2)){e.next=21;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 21:if("ArcGISImageServiceLayer"!==s){e.next=23;break}return e.abrupt("return",{className:"ImageryLayer"});case 23:return e.next=25,(0,p.b)(r.url);case 25:return c=e.sent,y=null===(i=c.cacheType)||void 0===i?void 0:i.toLowerCase(),d=null===(o=c.capabilities)||void 0===o?void 0:o.toLowerCase().includes("tilesonly"),e.abrupt("return","map"===y||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,u;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=8;break}return r.t0=b,r.next=4,(0,s.preprocessFSItemData)(t,e.url);case 4:return r.t1=r.sent,"object"==typeof(a=(0,r.t0)(r.t1))&&(u=(0,s.getSubtypeGroupLayerIds)(t),a.className=u.includes(a.id)?"SubtypeGroupLayer":"FeatureLayer"),r.abrupt("return",a);case 8:return r.abrupt("return",(0,s.getNumLayersAndTables)(t)>0?b(t):(0,p.b)(e.url).then(b));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function b(e){return 1===(0,s.getNumLayersAndTables)(e)&&{id:(0,s.getFirstLayerOrTableId)(e)}}},41226:function(e,r,t){t.d(r,{b:function(){return i}});var n=t(74165),a=t(15861),u=t(76200);function i(e){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=3139.862b860f.chunk.js.map