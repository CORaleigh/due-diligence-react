"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[3388],{32698:function(e,r,t){t.d(r,{Y:function(){return i},h:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return k},getNumLayersAndTables:function(){return S},getSubtypeGroupLayerIds:function(){return F},load:function(){return y},preprocessFSItemData:function(){return x}});var n=t(74165),a=t(15861),u=t(10064),i=t(30651),o=t(25899),l=t(70032),p=t(98995),s=t(32698),c=t(73117),d=t(21371),f=t(41226);function y(e,r){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=r.instance.portalItem)||!a.id){e.next=6;break}return e.next=4,a.load(t);case 4:return m(r),e.abrupt("return",h(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var r=e.instance.portalItem;if(!e.supportedTypes.includes(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function h(e,r){return b.apply(this,arguments)}function b(){return b=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u,i,o,l,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,u=a.portalItem,i=u.url,o=u.title,l=(0,s.h)(u),"group"!==a.type){e.next=3;break}return e.abrupt("return",(a.read({title:o},l),g(a,r)));case 3:return i&&a.read({url:i},l),e.next=6,L(r,t);case 6:return p=e.sent,e.abrupt("return",(p&&a.read(p,l),a.resourceReferences={portalItem:u,paths:l.readResourcePaths},"subtype-group"!==a.type&&a.read({title:o},l),(0,d.y)(a,l)));case 8:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function g(e,r){var t,i,o,l=e.portalItem.type,p=r.layerModuleTypeMap,s=null!==(t=(0,c._$)(e.portalItem,"Oriented Imagery Layer"))&&void 0!==t&&t;switch(l){case"Feature Service":i=s?p.OrientedImageryLayer:p.FeatureLayer;break;case"Stream Service":i=p.StreamLayer;break;case"Scene Service":i=p.SceneLayer;break;case"Feature Collection":i=p.FeatureLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(l,"' is not supported as a 'IGroupLayer'"))}return i().then((function(e){return o=e,L(r)})).then(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var a,u,i;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=function(){return o},"Feature Service"!==l){r.next=13;break}return r.t0=F,r.next=5,x(t,e.portalItem.url);case 5:if(r.t1=t=r.sent,!(0,r.t0)(r.t1).length){r.next=12;break}return u=p.SubtypeGroupLayer,r.next=10,u();case 10:i=r.sent,a=function(e){return"SubtypeGroupLayer"===e.layerType?i:o};case 12:return r.abrupt("return",w(e,a,t));case 13:return r.abrupt("return",S(t)>0?w(e,a,t):I(e,a));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function I(e,r){return e.portalItem.url?(0,f.b)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&w(e,r,{layers:null===(n=t.layers)||void 0===n?void 0:n.map(u),tables:null===(a=t.tables)||void 0===a?void 0:a.map(u)})})):Promise.resolve()}function w(e,r,t){var n=t.layers||[],a=t.tables||[];if("Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),"coverage"in t){var l=function(e){var r=e.coverage;if(!r)return null;var t=new URL(r);if(r.toLowerCase().includes("item.html")){var n=t.searchParams.get("id"),a=t.origin;return i.Z.fromPortalItem({portalItem:new p.default({id:n,url:a})})}if((0,o.B5)(r))return i.Z.fromArcGISServerUrl({url:r});throw new u.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);e.add(l)}n.reverse().forEach((function(n){var a=Z(e,r(n),t,n);e.add(a)})),a.reverse().forEach((function(n){var a=Z(e,r(n),t,n);e.tables.add(a)}))}function Z(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id});if("subtype-group"!==a.type&&(a.sublayerTitleMode="service-name"),"Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};a.read(n,u);var i=t.showLegend;null!=i&&a.read({showLegend:i},u)}return a}function L(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then((function(e){if(function(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}(t)){var r,n=!0;if(e&&S(e)>0){if(null==t.layerId){var a=F(e);t.layerId="subtype-group"===t.type?null===a||void 0===a?void 0:a[0]:k(e)}r=function(e,r){var t,n,a=r.layerId,u=(null===(t=e.layers)||void 0===t?void 0:t.find((function(e){return e.id===a})))||(null===(n=e.tables)||void 0===n?void 0:n.find((function(e){return e.id===a})));return u&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(u,r)?u:null}(e,t),r&&(1===S(e)&&(n=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))}return n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e}))}function x(e,r){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,u,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(a=r)||void 0===a?void 0:a.layers)&&null!=(null===(u=r)||void 0===u?void 0:u.tables)){e.next=5;break}return e.next=3,(0,f.b)(t);case 3:i=e.sent,(r=r||{}).layers=r.layers||(null===i||void 0===i?void 0:i.layers),r.tables=r.tables||(null===i||void 0===i?void 0:i.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function S(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function F(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}},41226:function(e,r,t){t.d(r,{b:function(){return i}});var n=t(74165),a=t(15861),u=t(76200);function i(e){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=3388.c7041515.chunk.js.map