"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[6326],{21857:function(e,t,i){i.d(t,{CS:function(){return _},Cw:function(){return v},Yu:function(){return b},j5:function(){return x},lm:function(){return S}});var r=i(74165),n=i(15861),a=i(37762),s=i(42265),o=i(19545),u=i(44055),l=i(76200),h=i(84652),c=i(35995),p=i(78952),d=i(41414),f=i(376),y=i(9014),m=i(49818),g={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function v(e){var t=e.folders||[],i=t.slice(),r=new Map,n=new Map,s=new Map,o=new Map,u=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:s,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=(0,h.d9)(e);t.featureSet.features=[];var i=e.featureSet.geometryType;r.set(i,t);var a=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?w(n,a,e.featureSet.features):"esriGeometryPolyline"===i?w(s,a,e.featureSet.features):"esriGeometryPolygon"===i&&w(o,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){u.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(r){var n=function(e,t,i){var r=function(e,t){var i;return t.some((function(t){return t.id===e&&(i=t,!0)})),i}(e,i);return r&&(r.parentFolderId=t,r.networkLink=r),r}(r,t.id,e.networkLinks);n&&i.push(n)}))})),i.forEach((function(e){if(e.featureInfos){e.points=(0,h.d9)(r.get("esriGeometryPoint")),e.polylines=(0,h.d9)(r.get("esriGeometryPolyline")),e.polygons=(0,h.d9)(r.get("esriGeometryPolygon")),e.mapImages=[];var t,i=(0,a.Z)(e.featureInfos);try{for(i.s();!(t=i.n()).done;){var n=t.value;switch(n.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var s=l[n.type].get(n.id);s&&e[g[n.type]].featureSet.features.push(s);break;case"GroundOverlay":var o=u.get(n.id);o&&e.mapImages.push(o)}}}catch(c){i.e(c)}finally{i.f()}e.fullExtent=S([e])}}));var c=S(i);return{folders:t,sublayers:i,extent:c}}function _(e,t,i,r){var n=o.id&&o.id.findCredential(e);e=(0,c.fl)(e,{token:n&&n.token});var a=s.Z.kmlServiceUrl;return(0,l.default)(a,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function x(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=[],a={},s=t.sublayers,o=t.folders.map((function(e){return e.id}));return s.forEach((function(t){var s=new e;if(i?s.read(t,i):s.read(t),r.length&&o.includes(s.id)&&(s.visible=r.includes(s.id)),a[t.id]=s,null!=t.parentFolderId&&-1!==t.parentFolderId){var u=a[t.parentFolderId];u.sublayers||(u.sublayers=[]),u.sublayers.unshift(s)}else n.unshift(s)})),n}function w(e,t,i){i.forEach((function(i){e.set(i.attributes[t],i)}))}function b(e){return k.apply(this,arguments)}function k(){return(k=(0,n.Z)((0,r.Z)().mark((function e(t){var i,n,s,o,l,h,c,p,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=m.default.fromJSON(t.featureSet).features,n=t.layerDefinition,s=(0,y.i)(n.drawingInfo.renderer),o=u.Z.fromJSON(t.popupInfo),l=[],h=(0,a.Z)(i),e.prev=2,h.s();case 4:if((c=h.n()).done){e.next=12;break}return p=c.value,e.next=8,s.getSymbolAsync(p);case 8:d=e.sent,p.symbol=d,p.popupTemplate=o,p.visible=!0,l.push(p);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),h.e(e.t0);case 17:return e.prev=17,h.f(),e.finish(17);case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function S(e){var t,i=(0,d.Ue)(d.Gv),r=(0,d.Ue)(d.Gv),n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features){var o,u=(0,a.Z)(s.polygons.featureSet.features);try{for(u.s();!(o=u.n()).done;){var l=o.value;(0,f.Yg)(i,l.geometry),(0,d.TC)(r,i)}}catch(b){u.e(b)}finally{u.f()}}if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features){var h,c=(0,a.Z)(s.polylines.featureSet.features);try{for(c.s();!(h=c.n()).done;){var y=h.value;(0,f.Yg)(i,y.geometry),(0,d.TC)(r,i)}}catch(b){c.e(b)}finally{c.f()}}if(s.points&&s.points.featureSet&&s.points.featureSet.features){var m,g=(0,a.Z)(s.points.featureSet.features);try{for(g.s();!(m=g.n()).done;){var v=m.value;(0,f.Yg)(i,v.geometry),(0,d.TC)(r,i)}}catch(b){g.e(b)}finally{g.f()}}if(s.mapImages){var _,x=(0,a.Z)(s.mapImages);try{for(x.s();!(_=x.n()).done;){var w=_.value;(0,f.Yg)(i,w.extent),(0,d.TC)(r,i)}}catch(b){x.e(b)}finally{x.f()}}}}catch(b){n.e(b)}finally{n.f()}return(0,d.fS)(r,d.Gv)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:p.Z.WGS84}}},45956:function(e,t,i){i.d(t,{JZ:function(){return k},RL:function(){return S},eY:function(){return Z}});var r=i(29439),n=i(74165),a=i(15861),s=i(15671),o=i(43144),u=i(97326),l=i(11752),h=i(61120),c=i(60136),p=i(29388),d=i(92026),f=i(66978),y=i(22753),m=i(23588),g=i(15245),v=i(87422),_=i(10978),x=i(49800),w=i(8548),b=i(51378);function k(e){return e&&"render"in e}function S(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}var Z=function(e){(0,c.Z)(i,e);var t=(0,p.Z)(i);function i(){var e,r,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1?arguments[1]:void 0;return(0,s.Z)(this,i),(n=t.call(this)).blendFunction="standard",n._sourceWidth=0,n._sourceHeight=0,n._textureInvalidated=!1,n.stencilRef=0,n.coordScale=[1,1],n._height=void 0,n.pixelRatio=1,n.resolution=0,n.rotation=0,n._source=null,n._width=void 0,n.x=0,n.y=0,n.immutable=null!==(e=o.immutable)&&void 0!==e&&e,n.requestRenderOnSourceChangedEnabled=null===(r=o.requestRenderOnSourceChangedEnabled)||void 0===r||r,n.source=a,n.requestRender=n.requestRender.bind((0,u.Z)(n)),n}return(0,o.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),(0,d.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,l.Z)((0,h.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"setSourceAsync",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,i){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,d.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort(),r=new AbortController,a=(0,f.hh)(),e.abrupt("return",((0,f.$F)(i,(function(){return r.abort()})),(0,f.$F)(r,(function(e){return a.reject(e)})),this._uploadStatus={controller:r,resolver:a},this.source=t,a.promise));case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,l.Z)((0,h.Z)(i.prototype),"updateTransitionProperties",this).call(this,e,t)}},{key:"setTransform",value:function(e){var t=(0,y.g)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),n=(0,r.Z)(i,2),a=n[0],s=n[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,l=o*this.height,h=Math.PI*this.rotation/180;(0,y.h)(t,t,(0,g.f)(a,s)),(0,y.h)(t,t,(0,g.f)(u/2,l/2)),(0,y.r)(t,t,-h),(0,y.h)(t,t,(0,g.f)(-u/2,-l/2)),(0,y.k)(t,t,(0,g.f)(u,l)),(0,y.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var i,r,a,s,o,u,l,h,c,p,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.context,r=t.painter,this._textureInvalidated){e.next=3;break}return e.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(i)),this.source){e.next=5;break}return e.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),n=this.source,a=k(n)?n instanceof _.Z?(0,d.yw)(n.getRenderedRasterPixels(),(function(e){return e.renderedRasterPixels})):S(n):n,e.prev=7,!(0,d.pC)(this._uploadStatus)){e.next=16;break}return s=this._uploadStatus,o=s.controller,u=s.resolver,l={signal:o.signal},h=this.width,c=this.height,p=this._texture,y=r.textureUploadManager,e.next=12,y.enqueueTextureUpdate({data:a,texture:p,width:h,height:c},l);case 12:u.resolve(),this._uploadStatus=null,e.next=17;break;case 16:this._texture.setData(a);case 17:this.ready(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),(0,f.H9)(e.t0);case 23:case"end":return e.stop()}var n}),e,this,[[7,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{dvs:(0,m.c)()}}},{key:"_createTexture",value:function(e){var t=this.immutable&&e.type===x.zO.WEBGL2;return new b.x(e,{target:w.No.TEXTURE_2D,pixelFormat:w.VI.RGBA,internalFormat:t?w.lP.RGBA8:w.VI.RGBA,dataType:w.Br.UNSIGNED_BYTE,wrapMode:w.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}]),i}(v.s)},90110:function(e,t,i){i.d(t,{c:function(){return p}});var r=i(93433),n=i(15671),a=i(43144),s=i(11752),o=i(61120),u=i(60136),l=i(29388),h=i(98533),c=i(80613),p=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments))._hasCrossfade=!1,e}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}},{key:"beforeRender",value:function(e){(0,s.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this._manageFade()}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[h.U.bitmap],target:function(){return t.children},drawPhase:c.jx.MAP});return[].concat((0,r.Z)((0,s.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n])}},{key:"_manageFade",value:function(){this.children.reduce((function(e,t){return e+(t.inFadeTransition?1:0)}),0)>=2?(this.children.forEach((function(e){return e.blendFunction="additive"})),this._hasCrossfade=!0):(this.children.forEach((function(e){return e.blendFunction="standard"})),this._hasCrossfade=!1)}}]),i}(i(64510).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return s}});var r=i(15671),n=i(43144),a=i(92026),s=function(){function e(t,i,n){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=n}return(0,n.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,a.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,a.Wi)(i.pixelBlock)){var r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},6326:function(e,t,i){i.r(t),i.d(t,{default:function(){return Y}});var r=i(93433),n=i(1413),a=i(29439),s=i(37762),o=i(74165),u=i(15861),l=i(60136),h=i(29388),c=i(43144),p=i(15671),d=i(27366),f=i(19545),y=i(40281),m=i(92026),g=i(94172),v=i(35995),_=i(49861),x=(i(63780),i(25243),i(69912)),w=i(53866),b=i(52587),k=i(78952),S=i(21857),Z=i(23084),V=i(78983),C=i(45956),I=i(90110),R=i(95986),P=i(75391),T=i(34035),D=i(67581),E=i(76200),M=i(585),B=i(80394),G=i(25866),A=i(40658),U=i(8548),L=i(53634),q=i(48673),F=i(91945),O=i(51378),N=function(){function e(t){if((0,p.Z)(this,e),t)this._ownsRctx=!1,this._rctx=t;else{if(e._instance)return e._instanceRefCount++,e._instance;e._instanceRefCount=1,e._instance=this,this._ownsRctx=!0;var i=document.createElement("canvas").getContext("webgl");i.getExtension("OES_texture_float"),this._rctx=new F.x(i,{})}var r=(0,A.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new G.Z(this._rctx,[0,0,1,0,0,1,1,1])}return(0,c.Z)(e,[{key:"reprojectTexture",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(0,b.iV)(e.extent,t),n=new M.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),a=(0,B.VO)(n,t,e.extent),s=a.x,o=a.y,u=(s+o)/2,l=Math.round((r.xmax-r.xmin)/u),h=Math.round((r.ymax-r.ymin)/u);u=(r.width/l+r.height/h)/2;var c=new M.Z({x:u,y:u,spatialReference:r.spatialReference}),p=(0,B.Qp)({projectedExtent:r,srcBufferExtent:e.extent,pixelSize:c,hasWrapAround:!0,spacing:[16,16]}),d=(0,q.Br)(this._rctx,p),f=new O.x(this._rctx,{width:l,height:h,pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,wrapMode:U.e8.CLAMP_TO_EDGE,samplingMode:U.cw.LINEAR,hasMipmap:!1}),y=new L.X(this._rctx,{colorTarget:U.Lm.TEXTURE,depthStencilTarget:U.OU.NONE,width:l,height:h},f);if(this._rctx.bindFramebuffer(y),this._rctx.setViewport(0,0,l,h),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(d,1),this._quad.bind(),this._program.setUniform2f("u_srcImageSize",e.texture.descriptor.width,e.texture.descriptor.height),this._program.setUniform2fv("u_transformSpacing",p.spacing),this._program.setUniform2fv("u_transformGridSize",p.size),this._program.setUniform2f("u_targetImageSize",l,h),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),d.dispose(),i){var m=new ImageData(y.descriptor.width,y.descriptor.height);return y.readPixels(0,0,y.descriptor.width,y.descriptor.height,U.VI.RGBA,U.Br.UNSIGNED_BYTE,m.data),y.detachColorTexture(U.VY.COLOR_ATTACHMENT0),y.dispose(),{texture:f,extent:r,imageData:m}}return y.detachColorTexture(U.VY.COLOR_ATTACHMENT0),y.dispose(),{texture:f,extent:r}}},{key:"reprojectBitmapData",value:function(e,t){var i=(0,C.JZ)(e.bitmapData)?(0,C.RL)(e.bitmapData):e.bitmapData,r=new O.x(this._rctx,{width:e.bitmapData.width,height:e.bitmapData.height,pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,wrapMode:U.e8.CLAMP_TO_EDGE,samplingMode:U.cw.LINEAR,hasMipmap:!1},i),n=this.reprojectTexture({texture:r,extent:e.extent},t,!0);n.texture.dispose();var a=document.createElement("canvas");return a.width=n.imageData.width,a.height=n.imageData.height,a.getContext("2d").putImageData(n.imageData,0,0),{bitmapData:a,extent:n.extent}}},{key:"loadAndReprojectBitmapData",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i,r){var n,a,s,u,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.default)(t,{responseType:"image"});case 2:if(n=e.sent.data,(a=document.createElement("canvas")).width=n.width,a.height=n.height,(s=a.getContext("2d")).drawImage(n,0,0),u=s.getImageData(0,0,a.width,a.height),!i.spatialReference.equals(r)){e.next=10;break}return e.abrupt("return",{bitmapData:u,extent:i});case 10:return l=this.reprojectBitmapData({bitmapData:u,extent:i},r),e.abrupt("return",{bitmapData:l.bitmapData,extent:l.extent});case 12:case"end":return e.stop()}}),e,this)})));return function(t,i,r){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this._ownsRctx?(e._instanceRefCount--,0===e._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),e._instance=null)):(this._quad.dispose(),this._program.dispose())}}]),e}();N._instanceRefCount=0;var j=(0,c.Z)((function e(){(0,p.Z)(this,e),this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]})),W=function(e){(0,l.Z)(i,e);var t=(0,h.Z)(i);function i(){var e;return(0,p.Z)(this,i),(e=t.apply(this,arguments))._bitmapIndex=new Map,e._mapImageContainer=new I.c,e._kmlVisualData=new j,e.allVisiblePoints=new V.J,e.allVisiblePolylines=new V.J,e.allVisiblePolygons=new V.J,e.allVisibleMapImages=new y.Z,e}return(0,c.Z)(i,[{key:"hitTest",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i){var r,n,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.layer,e.abrupt("return",[null===(r=this._pointsView)||void 0===r?void 0:r.hitTest(t),null===(n=this._polylinesView)||void 0===n?void 0:n.hitTest(t),null===(a=this._polygonsView)||void 0===a?void 0:a.hitTest(t)].flat().filter(Boolean).map((function(e){return e.layer=s,e.sourceLayer=s,{type:"graphic",graphic:e,layer:s,mapPoint:t}})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"update",value:function(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}},{key:"attach",value:function(){var e=this;this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new T.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:function(){return e.requestUpdate()},container:new P.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new T.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:function(){return e.requestUpdate()},container:new P.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new T.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:function(){return e.requestUpdate()},container:new P.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",(function(t){t.added.forEach((function(t){return e._addMapImage(t)})),t.removed.forEach((function(t){return e._removeMapImage(t)}))})),(0,g.YP)((function(){return e.layer.visibleSublayers}),(function(t){var i,r=(0,s.Z)(e._kmlVisualData.allSublayers);try{for(r.s();!(i=r.n()).done;){var n=(0,a.Z)(i.value,2);n[0];n[1].visibility=0}}catch(c){r.e(c)}finally{r.f()}var o,u=(0,s.Z)(t);try{for(u.s();!(o=u.n()).done;){var l=o.value,h=e._kmlVisualData.allSublayers.get(l.id);h&&(h.visibility=1)}}catch(c){u.e(c)}finally{u.f()}e._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new N}},{key:"detach",value:function(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null),this._imageReprojector&&(this._imageReprojector.destroy(),this._imageReprojector=null)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}},{key:"_addMapImage",value:function(e){var t=this;(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,w.Z.fromJSON(e.extent),this.view.spatialReference).then((function(i){var r=new C.eY(i.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});r.x=i.extent.xmin,r.y=i.extent.ymax,r.resolution=i.extent.width/i.bitmapData.width,r.rotation=e.rotation,t._mapImageContainer.addChild(r),t._bitmapIndex.set(e,r)}))}},{key:"_getViewDependentUrl",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,i){var r,a,s,u,l,h,c,p,d,y,g,_,x,S,V,C,I,R;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.viewFormat,a=t.viewBoundScale,s=t.httpQuery,!(0,m.pC)(r)){e.next=20;break}if(!(0,m.Wi)(i)){e.next=4;break}throw new Error("Loading this network link requires a view state.");case 4:return e.next=6,(0,b.zD)();case 6:if(!(0,m.pC)(a)||1===a){e.next=11;break}(l=new w.Z(i.extent)).expand(a),u=l,e.next=12;break;case 11:u=i.extent;case 12:return u=(0,b.iV)(u,k.Z.WGS84),h=(0,b.iV)(u,k.Z.WebMercator),c=u.xmin,p=u.xmax,d=u.ymin,y=u.ymax,g=i.size[0]*i.pixelRatio,_=i.size[1]*i.pixelRatio,x=Math.max(h.width,h.height),S={"[bboxWest]":c.toString(),"[bboxEast]":p.toString(),"[bboxSouth]":d.toString(),"[bboxNorth]":y.toString(),"[lookatLon]":u.center.x.toString(),"[lookatLat]":u.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":i.rotation.toString(),"[lookatTerrainLon]":u.center.x.toString(),"[lookatTerrainLat]":u.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":u.center.x.toString(),"[cameraLat]":u.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":g.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":f.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},V=function(e){for(var t in e)for(var i in S)e[t]=e[t].replace(i,S[i])},C=(0,v.u0)(r),V(C),I={},(0,m.pC)(s)&&(I=(0,v.u0)(s),V(I)),(R=(0,Z.en)(t.href)).query=(0,n.Z)((0,n.Z)((0,n.Z)({},R.query),C),I),e.abrupt("return","".concat(R.path,"?").concat((0,v.B7)(C)));case 20:return e.abrupt("return",t.href);case 21:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new j,e.next=3,this._loadVisualData(this.layer.url,i,t);case 3:this._kmlVisualData=i,this._refreshCollections();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_refreshCollections",value:function(){var e=this;this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item})))}},{key:"_isSublayerVisible",value:function(e){var t=this._kmlVisualData.allSublayers.get(e);return!!t.visibility&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}},{key:"_loadVisualData",value:function(e,t,i){var n=this;return this._fetchParsedKML(e,i).then(function(){var e=(0,u.Z)((0,o.Z)().mark((function e(a){var u,l,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=(0,s.Z)(a.sublayers),e.prev=1,h=(0,o.Z)().mark((function e(){var a,s,u,h,c,p,d,f,y,m;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=l.value,t.allSublayers.set(c.id,c),!c.points){e.next=8;break}return e.next=5,(0,S.Yu)(c.points);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=[];case 9:if(p=e.t0,!c.polylines){e.next=16;break}return e.next=13,(0,S.Yu)(c.polylines);case 13:e.t1=e.sent,e.next=17;break;case 16:e.t1=[];case 17:if(d=e.t1,!c.polygons){e.next=24;break}return e.next=21,(0,S.Yu)(c.polygons);case 21:e.t2=e.sent,e.next=25;break;case 24:e.t2=[];case 25:if(f=e.t2,y=c.mapImages||[],(a=t.allPoints).push.apply(a,(0,r.Z)(p.map((function(e){return{item:e,sublayerId:c.id}})))),(s=t.allPolylines).push.apply(s,(0,r.Z)(d.map((function(e){return{item:e,sublayerId:c.id}})))),(u=t.allPolygons).push.apply(u,(0,r.Z)(f.map((function(e){return{item:e,sublayerId:c.id}})))),(h=t.allMapImages).push.apply(h,(0,r.Z)(y.map((function(e){return{item:e,sublayerId:c.id}})))),!c.networkLink){e.next=33;break}return e.next=30,n._getViewDependentUrl(c.networkLink,n.view.state);case 30:return m=e.sent,e.next=33,n._loadVisualData(m,t,i);case 33:case"end":return e.stop()}}),e)})),u.s();case 4:if((l=u.n()).done){e.next=8;break}return e.delegateYield(h(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),u.e(e.t1);case 13:return e.prev=13,u.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}},{key:"_fetchParsedKML",value:function(e,t){return(0,S.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((function(e){return(0,S.Cw)(e.data)}))}},{key:"_removeMapImage",value:function(e){var t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}}]),i}((0,R.y)(D.Z));(0,d._)([(0,_.Cb)()],W.prototype,"_pointsView",void 0),(0,d._)([(0,_.Cb)()],W.prototype,"_polylinesView",void 0),(0,d._)([(0,_.Cb)()],W.prototype,"_polygonsView",void 0),(0,d._)([(0,_.Cb)()],W.prototype,"updating",void 0);var Y=W=(0,d._)([(0,x.j)("esri.views.2d.layers.KMLLayerView2D")],W)}}]);
//# sourceMappingURL=6326.25ca0ae3.chunk.js.map