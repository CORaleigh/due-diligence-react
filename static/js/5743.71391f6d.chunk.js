"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[5743],{95743:function(e,n,t){t.r(n),t.d(n,{registerFunctions:function(){return d}});var r=t(74165),a=t(15861),u=t(22564),s=t(47238),i=t(44715),c=t(28113),l=t(73954),o=t(32238),f=t(84178);function p(e){return e instanceof o.Z}function b(e,n,t,b){return b(e,n,function(){var b=(0,a.Z)((0,r.Z)().mark((function a(b,d,w){return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(w.length<2)){r.next=2;break}throw new u.aV(e,u.rH.WrongNumberOfParameters,n);case 2:if(null!==(w=(0,i.G)(w))[0]||null!==w[1]){r.next=4;break}return r.abrupt("return",!1);case 4:if(!(0,i.T)(w[0])){r.next=10;break}if(!(w[1]instanceof o.Z)){r.next=7;break}return r.abrupt("return",new c.Z({parentfeatureset:w[0],relation:t,relationGeom:w[1]}));case 7:if(null!==w[1]){r.next=9;break}return r.abrupt("return",new l.Z({parentfeatureset:w[0]}));case 9:case 22:case 27:throw new u.aV(e,u.rH.InvalidParameter,n);case 10:if(!p(w[0])){r.next=28;break}if(!p(w[1])){r.next=23;break}r.t0=t,r.next="esriSpatialRelEnvelopeIntersects"===r.t0?15:"esriSpatialRelIntersects"===r.t0?16:"esriSpatialRelContains"===r.t0?17:"esriSpatialRelOverlaps"===r.t0?18:"esriSpatialRelWithin"===r.t0?19:"esriSpatialRelTouches"===r.t0?20:"esriSpatialRelCrosses"===r.t0?21:22;break;case 15:return r.abrupt("return",(0,f.kK)((0,s.SV)(w[0]),(0,s.SV)(w[1])));case 16:return r.abrupt("return",(0,f.kK)(w[0],w[1]));case 17:return r.abrupt("return",(0,f.r3)(w[0],w[1]));case 18:return r.abrupt("return",(0,f.Nm)(w[0],w[1]));case 19:return r.abrupt("return",(0,f.uh)(w[0],w[1]));case 20:return r.abrupt("return",(0,f.W4)(w[0],w[1]));case 21:return r.abrupt("return",(0,f.jU)(w[0],w[1]));case 23:if(!(0,i.T)(w[1])){r.next=25;break}return r.abrupt("return",new c.Z({parentfeatureset:w[1],relation:t,relationGeom:w[0]}));case 25:if(null!==w[1]){r.next=27;break}return r.abrupt("return",!1);case 28:if(null===w[0]){r.next=30;break}throw new u.aV(e,u.rH.InvalidParameter,n);case 30:return r.abrupt("return",(0,i.T)(w[1])?new l.Z({parentfeatureset:w[1]}):!(w[1]instanceof o.Z||null===w[1])&&void 0);case 31:case"end":return r.stop()}}),a)})));return function(e,n,t){return b.apply(this,arguments)}}())}function d(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return b(n,t,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return b(n,t,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(n,t){return b(n,t,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return b(n,t,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(n,t){return b(n,t,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(n,t){return b(n,t,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(n,t){return b(n,t,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,r,a){if(a=(0,i.G)(a),(0,i.y)(a,3,3,n,t),p(a[0])&&p(a[1]))return(0,f.LV)(a[0],a[1],(0,i.j)(a[2]));if(a[0]instanceof o.Z&&null===a[1])return!1;if(a[1]instanceof o.Z&&null===a[0])return!1;if((0,i.T)(a[0])&&null===a[1])return new l.Z({parentfeatureset:a[0]});if((0,i.T)(a[1])&&null===a[0])return new l.Z({parentfeatureset:a[1]});if((0,i.T)(a[0])&&a[1]instanceof o.Z)return a[0].relate(a[1],(0,i.j)(a[2]));if((0,i.T)(a[1])&&a[0]instanceof o.Z)return a[1].relate(a[0],(0,i.j)(a[2]));if(null===a[0]&&null===a[1])return!1;throw new u.aV(n,u.rH.InvalidParameter,t)}))})}}}]);
//# sourceMappingURL=5743.71391f6d.chunk.js.map