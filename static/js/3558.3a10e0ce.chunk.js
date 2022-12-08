"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[3558],{73558:function(e,i,t){t.r(i),t.d(i,{default:function(){return Z}});var r=t(37762),n=t(74165),h=t(15861),a=t(15671),s=t(43144),u=t(60136),c=t(29388),l=t(27366),o=t(52639),d=t(40281),g=t(49861),p=(t(63780),t(25243),t(69912)),f=t(95986),v=t(75391),y=t(34035),w=t(67581),_={remove:function(){},pause:function(){},resume:function(){}},k=function(e){(0,u.Z)(t,e);var i=(0,c.Z)(t);function t(){var e;return(0,a.Z)(this,t),(e=i.apply(this,arguments))._highlightIds=new Map,e}return(0,s.Z)(t,[{key:"attach",value:function(){var e=this;this.graphicsView=new y.Z({requestUpdateCallback:function(){return e.requestUpdate()},view:this.view,graphics:this.layer.graphics,container:new v.Z(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}},{key:"detach",value:function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}},{key:"hitTest",value:function(){var e=(0,h.Z)((0,n.Z)().mark((function e(i){var t=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.graphicsView?this.graphicsView.hitTest(i).map((function(e){return{type:"graphic",graphic:e,mapPoint:i,layer:t.layer}})):null);case 1:case"end":return e.stop()}}),e,this)})));return function(i){return e.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var e=(0,h.Z)((0,n.Z)().mark((function e(i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.graphicsView){e.next=2;break}return e.abrupt("return",this.graphicsView.hitTest(i).filter((function(e){return!!e.popupTemplate})));case 2:case"end":return e.stop()}}),e,this)})));return function(i){return e.apply(this,arguments)}}()},{key:"queryGraphics",value:function(){return Promise.resolve(this.graphicsView.graphics)}},{key:"update",value:function(e){this.graphicsView.processUpdate(e)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this.graphicsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return!this.graphicsView||this.graphicsView.updating}},{key:"highlight",value:function(e){var i,t,r=this;return"number"==typeof e?t=[e]:e instanceof o.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):d.Z.isCollection(e)&&e.length>0&&(t=e.map((function(e){return e&&e.uid})).toArray()),t=null===(i=t)||void 0===i?void 0:i.filter((function(e){return null!=e})),t.length?(this._addHighlight(t),{remove:function(){return r._removeHighlight(t)}}):_}},{key:"_addHighlight",value:function(e){var i,t=(0,r.Z)(e);try{for(t.s();!(i=t.n()).done;){var n=i.value;if(this._highlightIds.has(n)){var h=this._highlightIds.get(n);this._highlightIds.set(n,h+1)}else this._highlightIds.set(n,1)}}catch(a){t.e(a)}finally{t.f()}this._updateHighlight()}},{key:"_removeHighlight",value:function(e){var i,t=(0,r.Z)(e);try{for(t.s();!(i=t.n()).done;){var n=i.value;if(this._highlightIds.has(n)){var h=this._highlightIds.get(n)-1;0===h?this._highlightIds.delete(n):this._highlightIds.set(n,h)}}}catch(a){t.e(a)}finally{t.f()}this._updateHighlight()}},{key:"_updateHighlight",value:function(){var e;null===(e=this.graphicsView)||void 0===e||e.setHighlight(Array.from(this._highlightIds.keys()))}}]),t}((0,f.y)(w.Z));(0,l._)([(0,g.Cb)()],k.prototype,"graphicsView",void 0);var Z=k=(0,l._)([(0,p.j)("esri.views.2d.layers.GraphicsLayerView2D")],k)},75391:function(e,i,t){t.d(i,{Z:function(){return l}});var r=t(15671),n=t(43144),h=t(11752),a=t(61120),s=t(60136),u=t(29388),c=t(80613),l=function(e){(0,s.Z)(t,e);var i=(0,u.Z)(t);function t(){return(0,r.Z)(this,t),i.apply(this,arguments)}return(0,n.Z)(t,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,h.Z)((0,a.Z)(t.prototype),"renderChildren",this).call(this,e),e.drawPhase===c.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===c.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var i=e.painter.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}]),t}(t(82022).Z)}}]);
//# sourceMappingURL=3558.3a10e0ce.chunk.js.map