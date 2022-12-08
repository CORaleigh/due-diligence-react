"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[9534,5164],{71277:function(e,t,r){function n(e){return e=e||globalThis.location.hostname,u.some((function(t){var r;return null!=(null===(r=e)||void 0===r?void 0:r.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(i)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(l)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:function(){return n},pJ:function(){return a}});var i=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,i,l,/^jsapps.esri.com$/,s,o]},18745:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(10064),a=r(32718),i=r(80613),l=r(46640);function s(e){return(0,l.hj)(e.minDataValue)&&(0,l.hj)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?i.X.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?i.X.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?i.X.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?i.X.SIZE_UNIT_VALUE:(a.Z.getLogger("esri.views.2d.engine.webgl").error(new n.Z("mapview-bad-type","Found invalid size VisualVariable",e)),i.X.NONE)}},85164:function(e,t,r){r.r(t),r.d(t,{createSymbolSchema:function(){return o}});var n=r(1413),a=r(80613),i=r(54815);function l(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null===(t=e.color)||void 0===t?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return(0,i.hF)(e)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return c(e,t,r);case"simple-marker":case"picture-marker":return f(e,t,r);case"simple-line":return p(e,t,r);case"text":return d(e,t,r);case"label":return u(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return(0,n.Z)((0,n.Z)({},l(e)),{},{type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize});default:throw new Error("symbol not supported ".concat(e.type))}}function u(e,t,r){var l=e.toJSON(),o=(0,i.jj)(a.LW.LABEL,(0,n.Z)((0,n.Z)({},t),{},{placement:l.labelPlacement}));return(0,n.Z)((0,n.Z)({materialKey:r?s(o):o,hash:e.hash()},l),{},{labelPlacement:l.labelPlacement})}function c(e,t,r){var o=(0,i.jj)(a.LW.FILL,t),u=r?s(o):o,c=e.clone(),p=c.outline,f=(0,i.jy)(t.symbologyType);f||(c.outline=null);var d=(0,n.Z)({materialKey:u,hash:c.hash()},l(c));if(f)return d;var y=[];if(y.push(d),p){var m=(0,i.jj)(a.LW.LINE,(0,n.Z)((0,n.Z)({},t),{},{isOutline:!0})),v=(0,n.Z)({materialKey:r?s(m):m,hash:p.hash()},l(p));y.push(v)}return{type:"composite-symbol",layers:y,hash:y.reduce((function(e,t){return t.hash+e}),"")}}function p(e,t,r){var o=(0,i.jy)(t.symbologyType)?a.mD.DEFAULT:t.symbologyType,u=(0,i.jj)(a.LW.LINE,(0,n.Z)((0,n.Z)({},t),{},{symbologyType:o})),c=r?s(u):u,p=e.clone(),f=p.marker;p.marker=null;var d=[];if(d.push((0,n.Z)({materialKey:c,hash:p.hash()},l(p))),f){var y,m=(0,i.jj)(a.LW.MARKER,t),v=r?s(m):m;f.color=null!==(y=f.color)&&void 0!==y?y:p.color,d.push((0,n.Z)({materialKey:v,hash:f.hash(),lineWidth:p.width},l(f)))}return{type:"composite-symbol",layers:d,hash:d.reduce((function(e,t){return t.hash+e}),"")}}function f(e,t,r){var o=(0,i.jj)(a.LW.MARKER,t),u=r?s(o):o,c=l(e);return(0,n.Z)((0,n.Z)({materialKey:u,hash:e.hash()},c),{},{angle:e.angle,maxVVSize:t.maxVVSize})}function d(e,t,r){var o=(0,i.jj)(a.LW.TEXT,t),u=r?s(o):o,c=l(e);return(0,n.Z)((0,n.Z)({materialKey:u,hash:e.hash()},c),{},{angle:e.angle,maxVVSize:t.maxVVSize})}},69534:function(e,t,r){r.d(t,{MD:function(){return W},Ew:function(){return k},q5:function(){return I}});var n=r(93433),a=r(1413),i=r(37762),l=r(10064),s=r(93169),o=r(32718),u=r(92026),c=r(17842),p=r(76672),f=r(48732),d=r(85116),y=r(80613),m=r(46640),v=r(8848),b=r(18745);var g=r(85164),h=(r(78915),r(691)),x=r(94109);r(95857),r(98125);function S(e,t){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var r=e.getVisualVariablesForType("size");if(!r[0])return 0;var n=r[0];if(t&&"cluster_count"===n.field&&"cluster"===t.type)return t.clusterMaxSize;if("outline"===n.target)return 0;if("stops"===n.transformationType)return n.stops.map((function(e){return e.size})).reduce(Z,0);if("clamped-linear"===n.transformationType){var a,i;return a="number"==typeof n.maxSize?n.maxSize:n.maxSize.stops.map((function(e){return e.size})).reduce(Z,0),i="number"==typeof n.minSize?n.minSize:n.minSize.stops.map((function(e){return e.size})).reduce(Z,0),Math.max(a,i)}return"real-world-size"===n.transformationType?30:void 0}x.eF.metrics,new h.Z(0,0,24,24);function Z(e,t){return Math.max(e,t)}var w=r(65760),T=r(20478),E=r(31666),V=o.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),F="ValidationError";function I(e,t){var r=0,n=0,a=y.mD.DEFAULT;if((0,u.pC)(e)){if(n=S(e,t),"visualVariables"in e&&(r=function(e){if(!e)return y.X.NONE;var t,r=0,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if("size"===a.type){var l=(0,b.a)(a);r|=l,"outline"===a.target&&(r|=l<<4)}else"color"===a.type?r|=y.X.COLOR:"opacity"===a.type?r|=y.X.OPACITY:"rotation"===a.type&&(r|=y.X.ROTATION)}}catch(s){n.e(s)}finally{n.f()}return r}(e.visualVariables||[]),"dot-density"===e.type&&(a=y.mD.DOT_DENSITY)),"heatmap"===e.type&&(a=y.mD.HEATMAP),"dictionary"===e.type)return{maxVVSize:n,vvFlags:r,symbologyType:y.mD.DEFAULT};if("pie-chart"===e.type)return{maxVVSize:n,vvFlags:r,symbologyType:y.mD.PIE_CHART};if(a!==y.mD.DOT_DENSITY&&a!==y.mD.HEATMAP){var l=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&l.push(e.backgroundFillSymbol);var s,o=!0,c=!0,p=(0,i.Z)(l);try{for(p.s();!(s=p.n()).done;){var f=s.value;if("cim"===f.type&&(c=!1),"simple-fill"===f.type||"picture-fill"===f.type){var d=f.outline,m=d&&"none"!==d.style&&"solid"!==d.style,v="simple-fill"===f.type&&"none"!==f.style&&"solid"!==f.style,g="picture-fill"===f.type||v||m;m&&(o=!1),g&&(c=!1)}}}catch(h){p.e(h)}finally{p.f()}o?a=c?y.mD.OUTLINE_FILL_SIMPLE:y.mD.OUTLINE_FILL:c&&(a=y.mD.SIMPLE)}}return{vvFlags:r,maxVVSize:n,symbologyType:a}}var z=null;function k(e){if((0,s.Z)("esri-2d-update-debug")){var t=L(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",(0,f.Hg)(z,t)),z=t}return L(e)}function L(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var r,n,a=P(e,t),i=J(e),l={};a.map((function(t){return O(l,e,t)}));var s=(0,u.pC)(e.subtypeCode)?"".concat(e.subtypeField," = ").concat(e.subtypeCode):null,o=(0,p._)(e.definitionExpression,s);return{source:{definitionExpression:o,fields:e.fields.map((function(e){return e.toJSON()})),gdbVersion:e.gdbVersion,historicMoment:null===(r=e.historicMoment)||void 0===r?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null===(n=e.timeExtent)||void 0===n?void 0:n.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:a,tileRenderer:i,targets:l}}catch(c){if(c.fieldName===F)return V.error(c),null;throw c}}function O(e,t,r){switch(r.target){case"feature":return void D(e,M(t),r);case"aggregate":if(!("featureReduction"in t))return;var n=t.featureReduction;switch(n.type){case"selection":throw new l.Z(F,"Mapview does not support `selection` reduction type",n);case"binning":return D(e,M(t),r),void function(e,t,r,n){var i;e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(null!==(i=t.fields)&&void 0!==i?i:[]).map((function(e){return(0,a.Z)((0,a.Z)({},e.toJSON()),{},{type:C(e,r)})}))},attributes:{}}),N(e.aggregate,n.attributes.fields)}(e,n,t.fields.map((function(e){return e.toJSON()})),r);case"cluster":return D(e,M(t),r),void function(e,t,r,n){var i,l;e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,c.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,c.F2)(t.clusterMaxSize)/64),fields:null===(i=null!==(l=t.fields)&&void 0!==l?l:[])||void 0===i?void 0:i.map((function(e){return(0,a.Z)((0,a.Z)({},e.toJSON()),{},{type:C(e,r)})}))}}),N(e.aggregate,n.attributes.fields)}(e,n,t.fields.map((function(e){return e.toJSON()})),r)}}}function N(e,t){for(var r in t){var n=t[r];if(n.target===e.name){var a=e.attributes[r];a?(a.context.mesh=a.context.mesh||n.context.mesh,a.context.storage=a.context.storage||n.context.storage):e.attributes[r]=n}}return e}function M(e){var t,r,n,a,i;return[null!==(t=null===(r=(0,u.Wg)(e.filter))||void 0===r?void 0:r.toJSON())&&void 0!==t?t:null,null!==(n=null===(a=(0,u.Wg)(null===(i=(0,u.Wg)(e.featureEffect))||void 0===i?void 0:i.filter))||void 0===a?void 0:a.toJSON())&&void 0!==n?n:null]}function D(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),N(e.feature,r.attributes.fields),e}function C(e,t){var r=e.onStatisticExpression,n=e.onStatisticField;switch(e.statisticType){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":if(r){var a=r.returnType;return a?"string"===a?"esriFieldTypeString":"esriFieldTypeDouble":(V.error(new l.Z(F,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}var i=t.find((function(e){return e.name===n}));return i?i.type:(V.error(new l.Z(F,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}function _(e,t){return t.field?A(e,(0,a.Z)((0,a.Z)({},t),{},{type:"field",field:t.field})):t.valueExpression?A(e,(0,a.Z)((0,a.Z)({},t),{},{type:"expression",valueExpression:t.valueExpression})):{field:null,fieldIndex:null}}function A(e,t){switch(t.type){case"expression":var r=t.valueExpression;if(!e.fields[r]){var n=e.indexCount++;e.fields[r]=(0,a.Z)((0,a.Z)({},t),{},{name:r,fieldIndex:n})}return{fieldIndex:e.fields[r].fieldIndex};case"label-expression":var i=JSON.stringify(t.label);if(!e.fields[i]){var l=e.indexCount++;e.fields[i]=(0,a.Z)((0,a.Z)({},t),{},{name:i,fieldIndex:l})}return{fieldIndex:e.fields[i].fieldIndex};case"field":var s=t.field;return"aggregate"===t.target&&e.fields[s]||(e.fields[s]=(0,a.Z)((0,a.Z)({},t),{},{name:s})),{field:s};case"statistic":return e.fields[t.name]=(0,a.Z)({},t),{field:t.name}}}function P(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Array,n=0;return r.push(B(e,n++,t)),r}function R(e,t,r,n,i){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=A(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),o=s.fieldIndex;return(0,a.Z)((0,a.Z)({},(0,g.createSymbolSchema)(t,i,l)),{},{fieldIndex:o,target:r,index:n})}function j(e,t,r){var a,s,o="featureReduction"in t&&t.featureReduction;if(!o)return{fields:[],labels:[],matcher:null,rendererOverride:null};var u=[],c=null,p=(0,E.oq)(t.geometryType),f=[],y=null;if(o)switch(o.type){case"selection":return V.error(new l.Z(F,"Mapview does not support `selection` reduction type",o)),{fields:[],labels:[],matcher:null,rendererOverride:null};case"cluster":case"binning":if(u.push.apply(u,(0,n.Z)(null!==(a=o.fields)&&void 0!==a?a:[])),"cluster"===o.type?p="esriGeometryPoint":"binning"===o.type&&(p="esriGeometryPolygon"),!o.renderer||null!==(s=o.renderer.authoringInfo)&&void 0!==s&&s.isAutoGenerated){if("cluster"===o.type){if(y=(0,T.S1)(u,t.renderer,o,null,!0),o.symbol){var m=I(y,o);c={type:"simple",symbol:(0,g.createSymbolSchema)(o.symbol,m,r),symbologyType:m.symbologyType}}f=o&&o.labelsVisible&&o.labelingInfo||[]}}else{if("cluster"===o.type)y=(0,T.st)(o.renderer,o,null).renderer;else y=o.renderer;var v=I(o.renderer,o);c=W(null,"aggregate",o.renderer,v,r),f=o&&o.labelsVisible&&o.labelingInfo||[]}}return function(e,t){var r,n={mesh:!0,storage:!0},a=(0,i.Z)(t);try{for(a.s();!(r=a.n()).done;){var l=r.value,s=l.name,o=l.onStatisticField,u=l.onStatisticExpression,c=l.statisticType,p=null,f=null,d="numeric",y="feature";u?f=A(e,{type:"expression",target:y,valueExpression:u.expression,resultType:d}).fieldIndex:p=A(e,{type:"field",target:y,field:o,resultType:d}).field,A(e,{type:"statistic",target:"aggregate",name:s,context:n,inField:p,inFieldIndex:f,statisticType:c})}}catch(m){a.e(m)}finally{a.f()}}(e,u),{labels:(0,d.a)(f,"binning"===o.type?"esriGeometryPolygon":p),matcher:c,fields:u,rendererOverride:y}}function B(e,t){var r,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s={indexCount:0,fields:{}},o="featureReduction"in e&&e.featureReduction,c=o?"aggregate":"feature";if("sublayers"in e){var p=function(){var t,r={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:y.mD.DEFAULT},n={type:"subtype",mapping:{},target:"feature"},o={type:"subtype",classes:{}},p={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:n,mesh:{matcher:r,aggregateMatcher:null,labels:o,sortKey:null}},f=new Set,d=0,m=(0,i.Z)(e.sublayers);try{var v=function(){var e=t.value,i=e.renderer,p=e.subtypeCode,m=e.labelingInfo,v=e.labelsVisible,b={symbologyType:y.mD.DEFAULT,vvFlags:0,maxVVSize:0},g=W(s,c,i,b,a),h=U(s,c,i),x=v&&m;if("visualVariables"in i&&i.visualVariables&&i.visualVariables.length)throw new l.Z(F,"Visual variables are currently not supported for subtype layers");if("dictionary"===g.type)throw new l.Z(F,"Dictionary renderer is not supported in subtype layers");if("subtype"===g.type)throw new l.Z(F,"Nested subtype renderers is not supported");if((0,u.pC)(h)&&"subtype"===h.type)throw new l.Z(F,"Nested subtype storage is not supported");if((0,u.pC)(h)&&(0,u.pC)(h.attributeMapping))throw new l.Z(F,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===g.type)throw new l.Z(F,"Heatmaps are not supported in subtype layers");if("pie-chart"===g.type)throw new l.Z(F,"Pie-charts are not supported in subtype layers");if(f.has(p))throw new l.Z(F,"Subtype codes for sublayers must be unique");f.add(p),r.renderers[p]=g,n.mapping[p]=h,x&&(o.classes[p]=x.map((function(e){return R(s,e,"feature",d++,b,a)})))};for(m.s();!(t=m.n()).done;)v()}catch(b){m.e(b)}finally{m.f()}return{v:p}}();if("object"===typeof p)return p.v}if("heatmap"===e.renderer.type&&"raster"===(0,w.rk)()){var f=e.renderer,m=f.radius,v=f.fieldOffset,b=f.field;return{type:"heatmap",aggregateFields:[],attributes:s,target:c,storage:null,mesh:{radius:m,fieldOffset:v,field:_(s,{target:c,field:b,resultType:"numeric"}).field}}}var g=j(s,e,a),h=(0,E.oq)(e.geometryType),x=null!==(r=g.rendererOverride)&&void 0!==r?r:e.renderer,S=I(x,o),Z=W(s,c,x,S,a),T=U(s,c,x),V=K(s,e.orderBy,o),z=e.labelsVisible&&e.labelingInfo||[],k=(0,d.a)(z,h),L=0,O=[].concat((0,n.Z)(k.map((function(e){return R(s,e,"feature",L++,S,a)}))),(0,n.Z)(g.labels.map((function(e){return R(s,e,"aggregate",L++,S,a)}))));return{type:"symbol",target:c,attributes:s,aggregateFields:g.fields,storage:T,mesh:{matcher:Z,labels:{type:"simple",classes:O},aggregateMatcher:g.matcher,sortKey:V}}}function J(e){var t;return"heatmap"===(null===(t=e.renderer)||void 0===t?void 0:t.type)&&"raster"===(0,w.rk)()?{type:"heatmap"}:{type:"symbol"}}function K(e,t,r){if((0,u.pC)(r)||(0,u.Wi)(t)||!t.length)return null;t.length>1&&V.warn("Layer rendering currently only supports ordering by 1 orderByInfo, but found ".concat(t.length,". All but the first will be discarded"));var n=t[0],a="ascending"===n.order?"asc":"desc";return n.field?{field:n.field,order:a}:n.valueExpression?{fieldIndex:A(e,{type:"expression",target:"feature",valueExpression:n.valueExpression,resultType:"numeric"}).fieldIndex,order:a}:(V.error(new l.Z(F,"Expected to find a field or valueExpression for OrderByInfo",n)),null)}function U(e,t,r){var n;switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":n={visualVariables:!0,attributes:null};break;default:n=(0,v.EJ)(r).getStorageSpec(r)}return function(e,t,r,n){if((0,u.Wi)(r))return null;var a=r.visualVariables,i=r.attributes,l=null;a&&"visualVariables"in n&&(l=function(e,t,r){if(!r||!r.length)return[];var n={storage:!0},a="numeric";return(0,w.tv)(r).map((function(r){var i,l=(0,m.nU)(r.type),s=_(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:n,resultType:a}),o=s.field,u=s.fieldIndex;switch(r.type){case"size":return"$view.scale"===r.valueExpression?null:{type:"size",binding:l,field:o,fieldIndex:u,normalizationField:_(e,{target:t,field:r.normalizationField,context:n,resultType:a}).field,valueRepresentation:null!==(i=r.valueRepresentation)&&void 0!==i?i:null};case"color":return{type:"color",binding:l,field:o,fieldIndex:u,normalizationField:_(e,{target:t,field:r.normalizationField,context:n,resultType:a}).field};case"opacity":return{type:"opacity",binding:l,field:o,fieldIndex:u,normalizationField:_(e,{target:t,field:r.normalizationField,context:n,resultType:a}).field};case"rotation":return{type:"rotation",binding:l,field:o,fieldIndex:u}}})).filter((function(e){return e}))}(e,t,n.visualVariables));var s=(0,u.pC)(l)?4:0,o=null;return(0,u.pC)(i)&&(o=i.map((function(r,n){var a=_(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t}),i=a.field,l=a.fieldIndex;return{binding:n+s,field:i,fieldIndex:l}}))),{type:"simple",target:t,attributeMapping:o,vvMapping:l}}(e,t,n,r)}function W(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=(0,u.Pt)(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return H(i,r,n,a);case"class-breaks":return q(i,t,r,n,a);case"unique-value":return G(i,t,r,n,a);case"dictionary":return $(i,r,n,a);case"heatmap":return Y(i,r,n,a);case"pie-chart":return X(i,r,n,a)}}function H(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.getSymbols(),i=a.length?a[0]:null;return{type:"simple",symbol:(0,g.createSymbolSchema)(i,r,n),symbologyType:r.symbologyType}}function X(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.getSymbols(),i=a[0],l=a.length>1?a[1]:null;return{type:"pie-chart",markerSymbol:(0,g.createSymbolSchema)(i,r,n),fillSymbol:(0,g.createSymbolSchema)(l,r,n),symbologyType:r.symbologyType}}function q(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,s=_(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:i}),o=s.field,u=s.fieldIndex,c=r.normalizationType,p="log"===c?"esriNormalizeByLog":"percent-of-total"===c?"esriNormalizeByPercentOfTotal":"field"===c?"esriNormalizeByField":null,f=r.classBreakInfos.map((function(e){return{symbol:(0,g.createSymbolSchema)(e.symbol,n,a),min:e.minValue,max:e.maxValue}})).sort((function(e,t){return e.min-t.min}));return{type:"interval",attributes:e.fields,field:o,fieldIndex:u,backgroundFillSymbol:(0,g.createSymbolSchema)(l,n,a),defaultSymbol:(0,g.createSymbolSchema)(r.defaultSymbol,n,a),intervals:f,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:p,isMaxInclusive:r.isMaxInclusive,symbologyType:n.symbologyType}}function G(e,t,r,n){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=[],u=r.backgroundFillSymbol,c={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&"string"!=typeof r.field)throw new l.Z(F,"Expected renderer.field to be a string",r);var p,f=_(e,(0,a.Z)((0,a.Z)({},c),{},{field:r.field,valueExpression:r.valueExpression})),d=f.field,y=f.fieldIndex,m=(0,i.Z)(r.uniqueValueInfos);try{for(m.s();!(p=m.n()).done;){var v=p.value;o.push({value:""+v.value,symbol:(0,g.createSymbolSchema)(v.symbol,n,s)})}}catch(b){m.e(b)}finally{m.f()}return{type:"map",attributes:e.fields,field:d,fieldIndex:y,field2:_(e,(0,a.Z)((0,a.Z)({},c),{},{field:r.field2})).field,field3:_(e,(0,a.Z)((0,a.Z)({},c),{},{field:r.field3})).field,fieldDelimiter:r.fieldDelimiter,backgroundFillSymbol:(0,g.createSymbolSchema)(u,n),defaultSymbol:(0,g.createSymbolSchema)(r.defaultSymbol,n),map:o,symbologyType:n.symbologyType}}function $(e,t,r){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}function Y(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=t.getSymbols(),i=a.length?a[0]:null;return{type:"heatmap",symbol:(0,g.createSymbolSchema)(i,r,n),symbologyType:r.symbologyType}}},65760:function(e,t,r){r.d(t,{rk:function(){return x},TT:function(){return S},aR:function(){return m},tv:function(){return v}});var n=r(93433),a=r(83878),i=r(59199),l=r(40181),s=r(25267);function o(e){return(0,a.Z)(e)||(0,i.Z)(e)||(0,l.Z)(e)||(0,s.Z)()}var u=r(10064),c=r(93169),p=r(32718),f=r(17842),d=r(90316),y=p.Z.getLogger("esri.views.2d.layers.features.support.rendererUtils"),m=function(e){if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;var t=e.clone(),r=t.visualVariables.map((function(e){return b(e)?g(e):e}));return t.visualVariables=r,t};function v(e){return e.map((function(e){return b(e)?g(e.clone()):e}))}function b(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function g(e){return e.stops=function(e,t){return t.length<=8?t:(y.warn("Found ".concat(t.length," Visual Variable stops, but MapView only supports ").concat(8,". Displayed stops will be simplified.")),t.length>16?function(e,t){for(var r=o(t),n=r[0],a=r.slice(1),i=a.pop(),l=a[0].value,s=a[a.length-1].value,u=(s-l)/6,c=[],p=l;p<s;p+=u){for(var d=0;p>=a[d].value;)d++;var y=a[d],m=t[d-1],v=p-m.value,b=y.value===m.value?1:v/(y.value-m.value);if("color"===e){var g=a[d],x=t[d-1],S=g.color.clone();S.r=h(x.color.r,S.r,b),S.g=h(x.color.g,S.g,b),S.b=h(x.color.b,S.b,b),S.a=h(x.color.a,S.a,b),c.push({value:p,color:S,label:g.label})}else if("size"===e){var Z=a[d],w=t[d-1],T=(0,f.t_)(Z.size),E=h((0,f.t_)(w.size),T,b);c.push({value:p,size:E,label:Z.label})}else{var V=a[d],F=h(t[d-1].opacity,V.opacity,b);c.push({value:p,opacity:F,label:V.label})}}return[n].concat(c,[i])}(e,t):function(e){for(var t=o(e),r=t[0],a=t.slice(1),i=a.pop();a.length>6;){for(var l=0,s=0,u=1;u<a.length;u++){var c=a[u-1],p=a[u],f=Math.abs(p.value-c.value);f>s&&(s=f,l=u)}a.splice(l,1)}return[r].concat((0,n.Z)(a),[i])}(t))}(e.type,e.stops),e}function h(e,t,r){return(1-r)*e+r*t}function x(){if((0,c.Z)("heatmap-force-raster"))return"raster";var e=(0,d.hc)("2d"),t=e.supportsTextureFloat,r=e.supportsTextureHalfFloat,n=e.supportsColorBufferFloat,a=e.supportsColorBufferFloatBlend,i=e.supportsColorBufferHalfFloat;return t&&n&&a||r&&i?"symbol":(0,c.Z)("heatmap-allow-raster-fallback")?"raster":"none"}function S(e){if(!e)return!0;switch(e.type){case"dot-density":if(!(0,d.hc)("2d").supportsTextureFloat)return y.error(new u.Z("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":var t=x();if("none"===t||"raster"===t&&!(0,c.Z)("heatmap-force-raster")){var r=(0,d.hc)("2d"),n=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((function(e){return!r[e]})).join(", ");if("none"===t)return y.errorOnce(new u.Z("webgl-missing-extension","Missing WebGL".concat(r.type," requirements for Heatmap: ").concat(n))),!1;"raster"===t&&y.warnOnce("Missing WebGL".concat(r.type," requirements for accelerated Heatmap: ").concat(n,". Feature support may be limited."))}}return!0}},95857:function(e,t,r){r.d(t,{I_:function(){return o},XA:function(){return y},Zu:function(){return c},ab:function(){return p},eT:function(){return d},y1:function(){return u},yA:function(){return f}});var n=r(29439),a=(r(75746),r(92026)),i=r(80885),l=r(65156),s=r(92975),o=(r(38999),r(94109),r(47975),512),u=50;function c(e,t){var r=(0,s.C5)(t);if(!r)return null;var a=(0,n.Z)(r.valid,2),i=a[0],o=a[1];return e[2]>o?[(0,l.Ue)([e[0],e[1],o,e[3]]),(0,l.Ue)([i,e[1],i+e[2]-o,e[3]])]:e[0]<i?[(0,l.Ue)([i,e[1],e[2],e[3]]),(0,l.Ue)([o-(i-e[0]),e[1],o,e[3]])]:null}function p(e){return"text"===e||"esriTS"===e}function f(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function d(e){switch((0,a.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function y(e){if(!e)return null;var t=e.xmin,r=e.ymin,n=e.xmax,a=e.ymax,l=e.spatialReference;return new i.Z({rings:[[[t,r],[t,a],[n,a],[n,r],[t,r]]],spatialReference:l})}},98125:function(e,t,r){r.d(t,{xS:function(){return z},B3:function(){return I}});var n=r(74165),a=r(15861),i=r(98991),l=r(37762),s=r(15671),o=r(43144),u=r(80613),c=r(54815),p={marker:u.LW.MARKER,fill:u.LW.FILL,line:u.LW.LINE,text:u.LW.TEXT},f=function(){function e(t,r,n,a){(0,s.Z)(this,e);var i={minScale:null===r||void 0===r?void 0:r.minScale,maxScale:null===r||void 0===r?void 0:r.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(i);this.layers=t,this.data=r,this.hash=this._createHash()+o,this.rendererKey=n;var f,d={isOutline:!1,placement:null,symbologyType:u.mD.DEFAULT,vvFlags:n},y=(0,l.Z)(t);try{for(y.s();!(f=y.n()).done;){var m=f.value,v=p[m.type];d.isOutline="line"===m.type&&m.isOutline,m.materialKey=(0,c.jj)(v,d),m.maxVVSize=a,m.scaleInfo=i,m.templateHash+=o}}catch(b){y.e(b)}finally{y.f()}}return(0,o.Z)(e,[{key:"type",get:function(){return"expanded-cim"}},{key:"_createHash",value:function(){var e,t="",r=(0,l.Z)(this.layers);try{for(r.s();!(e=r.n()).done;){t+=e.value.templateHash}}catch(n){r.e(n)}finally{r.f()}return t}}]),e}();var d=r(71277),y=r(10064),m=r(92026),v=r(66978),b=r(35995),g=r(70032),h=r(53283),x=r(38048);function S(e,t,r){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name){e.next=2;break}throw new y.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");case 2:if(!t.styleName||"Esri2DPointSymbolsStyle"!==t.styleName){e.next=4;break}return e.abrupt("return",w(t,a));case 4:return e.prev=4,e.t0=E,e.next=8,(0,x.n2)(t,r,a);case 8:return e.t1=e.sent,e.t2=t.name,e.t3=r,e.t4=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4));case 15:return e.prev=15,e.t5=e.catch(4),e.abrupt("return",((0,v.k_)(e.t5),null));case 18:case"end":return e.stop()}}),e,null,[[4,15]])}))),Z.apply(this,arguments)}function w(e,t){return T.apply(this,arguments)}function T(){return T=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x.wm.replace(/\{SymbolName\}/gi,t.name),e.prev=1,e.next=4,(0,x.EJ)(a,r);case 4:return i=e.sent,e.abrupt("return",(0,x.KV)(i.data));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",((0,v.k_)(e.t0),null));case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),T.apply(this,arguments)}function E(e,t,r,n){return V.apply(this,arguments)}function V(){return V=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,i){var l,s,o,u,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=t.data,s={portal:a&&(0,m.pC)(a.portal)?a.portal:g.Z.getDefault(),url:(0,b.mN)(t.baseUrl),origin:"portal-item"},o=l.items.find((function(e){return e.name===r}))){e.next=3;break}throw new y.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(r,"' could not be found"),{symbolName:r});case 3:return u=(0,h.f)((0,x.v9)(o,"cimRef"),s),(0,d.XO)()&&(u=(0,d.pJ)(u)),e.prev=5,e.next=8,(0,x.EJ)(u,i);case 8:return c=e.sent,e.abrupt("return",(0,x.KV)(c.data));case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",((0,v.k_)(e.t0),null));case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),V.apply(this,arguments)}var F=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,(0,i.c)(t.data,r,a);case 3:return e.t1=e.sent,e.t2=t.data,e.t3=t.rendererKey,e.t4=t.maxVVSize,e.abrupt("return",new e.t0(e.t1,e.t2,e.t3,e.t4));case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r,a,i){var l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if("cim"!==t.type){e.next=4;break}return e.abrupt("return",F(t,r,a));case 4:if("web-style"!==t.type){e.next=12;break}return e.next=7,S(t,null,i);case 7:return e.t0=e.sent,e.t1=t.rendererKey,e.t2=t.maxVVSize,l={type:"cim",data:e.t0,rendererKey:e.t1,maxVVSize:e.t2},e.abrupt("return",F(l,r,a));case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}();function z(e){if(!e)return null;var t=e.type,r=e.cim,n=e.url,a={cim:r,type:t,mosaicHash:e.materialHash,url:n,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null};switch(t){case"marker":a.size=e.size,a.path=e.path,a.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":a.dashTemplate=e.dashTemplate;break;case"text":a.text=e.text,a.fontName=e.fontName}return a}},31666:function(e,t,r){r.d(t,{JV:function(){return i},oq:function(){return a}});var n=new(r(43404).X)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function a(e){return n.toJSON(e)}function i(e){var t=e.rasterInfo,r=t.bandCount,n=t.attributeTable,a=t.colormap,i=t.pixelType;return 1===r&&(null!=n||null!=a||"u8"===i||"s8"===i)}}}]);
//# sourceMappingURL=9534.13d65ef6.chunk.js.map