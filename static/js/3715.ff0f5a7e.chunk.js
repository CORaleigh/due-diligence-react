"use strict";(self.webpackChunkdue_diligence_react=self.webpackChunkdue_diligence_react||[]).push([[3715],{48734:function(n,e,t){function E(n){switch(n){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function _(n){switch(n){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function r(n){switch(n){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function T(n){switch(n){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}t.d(e,{B3:function(){return _},Op:function(){return T},U:function(){return r},n1:function(){return E}})},35888:function(n,e,t){t.d(e,{d:function(){return _}});var E=t(16889);function _(n,e,t){var _,A=n.byteLength/(4*e),N=new Uint32Array(n,0,A*e),u=new Uint32Array(A),o=null!==(_=null===t||void 0===t?void 0:t.minReduction)&&void 0!==_?_:0,O=(null===t||void 0===t?void 0:t.originalIndices)||null,a=O?O.length:0,I=(null===t||void 0===t?void 0:t.componentOffsets)||null,S=0;if(I)for(var c=0;c<I.length-1;c++){var f=I[c+1]-I[c];f>S&&(S=f)}else S=A;var C=Math.floor(1.1*S)+1;(null==R||R.length<2*C)&&(R=new Uint32Array((0,E.Sf)(2*C)));for(var s=0;s<2*C;s++)R[s]=0;for(var L=0,D=!!I&&!!O,U=D?a:A,l=D?new Uint32Array(a):null,M=1.96,P=0!==o?Math.ceil(4*M*M/(o*o)*o*(1-o)):U,G=1,F=I?I[1]:U,B=0;B<U;B++){if(B===P){var d=1-L/B;if(d+M*Math.sqrt(d*(1-d)/B)<o)return null;P*=2}if(B===F){for(var v=0;v<2*C;v++)R[v]=0;if(O)for(var h=I[G-1];h<I[G];h++)l[h]=u[O[h]];F=I[++G]}for(var H=D?O[B]:B,p=H*e,g=i(N,p,e),y=g%C,m=L;0!==R[2*y+1];){if(R[2*y]===g){var V=R[2*y+1]-1;if(r(N,p,V*e,e)){m=u[V];break}}++y>=C&&(y-=C)}m===L&&(R[2*y]=g,R[2*y+1]=H+1,L++),u[H]=m}if(0!==o&&1-L/A<o)return null;if(D){for(var Y=I[G-1];Y<l.length;Y++)l[Y]=u[O[Y]];u=l}var w=new Uint32Array(e*L);L=0;for(var X=0;X<U;X++)u[X]===L&&(T(N,(D?O[X]:X)*e,w,L*e,e),L++);if(O&&!D){for(var k=new Uint32Array(a),b=0;b<k.length;b++)k[b]=u[O[b]];u=k}return{buffer:w.buffer,indices:u,uniqueCount:L}}function r(n,e,t,E){for(var _=0;_<E;_++)if(n[e+_]!==n[t+_])return!1;return!0}function T(n,e,t,E,_){for(var r=0;r<_;r++)t[E+r]=n[e+r]}function i(n,e,t){for(var E=0,_=0;_<t;_++)E=(E=n[e+_]+E|0)+(E<<11)+(E>>>2)|0;return E>>>0}var R=null},55158:function(n,e,t){t.d(e,{U$:function(){return N}});var E=t(37762),_=t(15671),r=t(43144),T=t(25158),i=t(48734),R=function(){function n(e,t){(0,_.Z)(this,n),this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;var r,T=(0,E.Z)(e.fieldNames);try{for(T.s();!(r=T.n()).done;){var i=r.value,R=e.fields.get(i);this[i]=new R.constructor(this.buffer,R.offset,this.stride)}}catch(A){T.e(A)}finally{T.f()}}return(0,r.Z)(n,[{key:"stride",get:function(){return this.layout.stride}},{key:"count",get:function(){return this.buffer.byteLength/this.stride}},{key:"byteLength",get:function(){return this.buffer.byteLength}},{key:"getField",value:function(n,e){var t=this[n];return t&&t.elementCount===e.ElementCount&&t.elementType===e.ElementType?t:null}},{key:"slice",value:function(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}},{key:"copyFrom",value:function(n,e,t,E){var _=this.stride;if(_%4==0){var r=new Uint32Array(n.buffer,e*_,E*_/4);new Uint32Array(this.buffer,t*_,E*_/4).set(r)}else{var T=new Uint8Array(n.buffer,e*_,E*_);new Uint8Array(this.buffer,t*_,E*_).set(T)}}}]),n}(),A=function(){function n(){(0,_.Z)(this,n),this.stride=0,this.fields=new Map,this.fieldNames=[]}return(0,r.Z)(n,[{key:"vec2f",value:function(n,e){return this._appendField(n,T.Eu,e),this}},{key:"vec2f64",value:function(n,e){return this._appendField(n,T.q6,e),this}},{key:"vec3f",value:function(n,e){return this._appendField(n,T.ct,e),this}},{key:"vec3f64",value:function(n,e){return this._appendField(n,T.fP,e),this}},{key:"vec4f",value:function(n,e){return this._appendField(n,T.ek,e),this}},{key:"vec4f64",value:function(n,e){return this._appendField(n,T.Cd,e),this}},{key:"mat3f",value:function(n,e){return this._appendField(n,T.gK,e),this}},{key:"mat3f64",value:function(n,e){return this._appendField(n,T.ey,e),this}},{key:"mat4f",value:function(n,e){return this._appendField(n,T.bj,e),this}},{key:"mat4f64",value:function(n,e){return this._appendField(n,T.O1,e),this}},{key:"vec4u8",value:function(n,e){return this._appendField(n,T.mc,e),this}},{key:"f32",value:function(n,e){return this._appendField(n,T.ly,e),this}},{key:"f64",value:function(n,e){return this._appendField(n,T.oS,e),this}},{key:"u8",value:function(n,e){return this._appendField(n,T.D_,e),this}},{key:"u16",value:function(n,e){return this._appendField(n,T.av,e),this}},{key:"i8",value:function(n,e){return this._appendField(n,T.Hz,e),this}},{key:"vec2i8",value:function(n,e){return this._appendField(n,T.Vs,e),this}},{key:"vec2i16",value:function(n,e){return this._appendField(n,T.or,e),this}},{key:"vec2u8",value:function(n,e){return this._appendField(n,T.xA,e),this}},{key:"vec4u16",value:function(n,e){return this._appendField(n,T.v6,e),this}},{key:"u32",value:function(n,e){return this._appendField(n,T.Nu,e),this}},{key:"_appendField",value:function(n,e,t){var E=e.ElementCount*(0,i.n1)(e.ElementType),_=this.stride;this.fields.set(n,{size:E,constructor:e,offset:_,optional:t}),this.stride+=E,this.fieldNames.push(n)}},{key:"alignTo",value:function(n){return this.stride=Math.floor((this.stride+n-1)/n)*n,this}},{key:"hasField",value:function(n){return this.fieldNames.includes(n)}},{key:"createBuffer",value:function(n){return new R(this,n)}},{key:"createView",value:function(n){return new R(this,n)}},{key:"clone",value:function(){var e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((function(n,t){return e.fields.set(t,n)})),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}]),n}();function N(){return new A}},50256:function(n,e,t){t.d(e,{K:function(){return r}});var E=t(8548),_=t(61109);function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n.stride;return n.fieldNames.filter((function(e){var t=n.fields.get(e).optional;return!(t&&t.glPadding)})).map((function(E){var r=n.fields.get(E),i=r.constructor.ElementCount,R=T(r.constructor.ElementType),A=r.offset,N=!(!r.optional||!r.optional.glNormalized);return new _.G(E,i,R,A,t,N,e)}))}function T(n){var e=i[n];if(e)return e;throw new Error("BufferType not supported in WebGL")}var i={u8:E.g.UNSIGNED_BYTE,u16:E.g.UNSIGNED_SHORT,u32:E.g.UNSIGNED_INT,i8:E.g.BYTE,i16:E.g.SHORT,i32:E.g.INT,f32:E.g.FLOAT}},4760:function(n,e,t){var E;t.d(e,{T:function(){return E}}),function(n){n.POSITION="position",n.NORMAL="normal",n.UV0="uv0",n.AUXPOS1="auxpos1",n.AUXPOS2="auxpos2",n.MAPPOS="mapPos",n.COLOR="color",n.SYMBOLCOLOR="symbolColor",n.SIZE="size",n.TANGENT="tangent",n.OFFSET="offset",n.SUBDIVISIONFACTOR="subdivisionFactor",n.COLORFEATUREATTRIBUTE="colorFeatureAttribute",n.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",n.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",n.DISTANCETOSTART="distanceToStart",n.UVMAPSPACE="uvMapSpace",n.BOUNDINGRECT="boundingRect",n.UVREGION="uvRegion",n.NORMALCOMPRESSED="normalCompressed",n.PROFILERIGHT="profileRight",n.PROFILEUP="profileUp",n.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",n.FEATUREVALUE="featureValue",n.MODELORIGINHI="modelOriginHi",n.MODELORIGINLO="modelOriginLo",n.MODEL="model",n.MODELNORMAL="modelNormal",n.INSTANCECOLOR="instanceColor",n.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",n.LOCALTRANSFORM="localTransform",n.GLOBALTRANSFORM="globalTransform",n.BOUNDINGSPHERE="boundingSphere",n.MODELORIGIN="modelOrigin",n.MODELSCALEFACTORS="modelScaleFactors",n.FEATUREATTRIBUTE="featureAttribute",n.STATE="state",n.LODLEVEL="lodLevel",n.POSITION0="position0",n.POSITION1="position1",n.NORMALA="normalA",n.NORMALB="normalB",n.COMPONENTINDEX="componentIndex",n.VARIANTOFFSET="variantOffset",n.VARIANTSTROKE="variantStroke",n.VARIANTEXTENSION="variantExtension",n.U8PADDING="u8padding",n.U16PADDING="u16padding",n.SIDENESS="sideness",n.START="start",n.END="end",n.UP="up",n.EXTRUDE="extrude",n.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",n.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(E||(E={}))},67009:function(n,e,t){t.d(e,{Hr:function(){return N},dG:function(){return A},tf:function(){return T}});var E=t(50256),_=t(55158),r=t(4760),T=(0,_.U$)().vec3f(r.T.POSITION).u16(r.T.COMPONENTINDEX).u16(r.T.U16PADDING),i=(0,_.U$)().vec2u8(r.T.SIDENESS),R=((0,E.K)(i),(0,_.U$)().vec3f(r.T.POSITION0).vec3f(r.T.POSITION1).u16(r.T.COMPONENTINDEX).u8(r.T.VARIANTOFFSET,{glNormalized:!0}).u8(r.T.VARIANTSTROKE).u8(r.T.VARIANTEXTENSION,{glNormalized:!0}).u8(r.T.U8PADDING,{glPadding:!0}).u16(r.T.U16PADDING,{glPadding:!0})),A=R.clone().vec3f(r.T.NORMAL),N=R.clone().vec3f(r.T.NORMALA).vec3f(r.T.NORMALB);new Map([[r.T.POSITION0,0],[r.T.POSITION1,1],[r.T.COMPONENTINDEX,2],[r.T.VARIANTOFFSET,3],[r.T.VARIANTSTROKE,4],[r.T.VARIANTEXTENSION,5],[r.T.NORMAL,6],[r.T.NORMALA,6],[r.T.NORMALB,7],[r.T.SIDENESS,8]])},10662:function(n,e,t){t.d(e,{n:function(){return u}});var E,_,r=t(63780),T=t(16889),i=t(18722),R=t(11186),A=t(71353),N=-1;function u(n,e,t){var E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:C,_=n.vertices.position,A=n.vertices.componentIndex,u=(0,T.Vl)(E.anglePlanar),f=(0,T.Vl)(E.angleSignificantEdge),s=Math.cos(f),L=Math.cos(u),D=c.edge,U=D.position0,l=D.position1,M=D.faceNormal0,P=D.faceNormal1,G=S(n),F=I(n),B=F.length/4,d=e.allocate(B),v=0,h=B,H=t.allocate(h),p=0,g=0,y=0,m=(0,r.w6)(0,B),V=new Float32Array(B);(0,i.Ed)(V,(function(n,e,t){_.getVec(F[4*e+0],U),_.getVec(F[4*e+1],l),t[e]=(0,R.i)(U,l)})),m.sort((function(n,e){return V[e]-V[n]}));for(var Y=new Array,w=new Array,X=0;X<B;X++){var k=m[X],b=V[k],W=F[4*k+0],x=F[4*k+1],Z=F[4*k+2],K=F[4*k+3],j=K===N;if(_.getVec(W,U),_.getVec(x,l),j)(0,R.s)(M,G[3*Z+0],G[3*Z+1],G[3*Z+2]),(0,R.c)(P,M),D.componentIndex=A.get(W),D.cosAngle=(0,R.e)(M,P);else{if((0,R.s)(M,G[3*Z+0],G[3*Z+1],G[3*Z+2]),(0,R.s)(P,G[3*K+0],G[3*K+1],G[3*K+2]),D.componentIndex=A.get(W),D.cosAngle=(0,R.e)(M,P),O(D,L))continue;D.cosAngle<-.9999&&(0,R.c)(P,M)}g+=b,y++,j||o(D,s)?(e.write(d,v++,D),Y.push(b)):a(D,u)&&(t.write(H,p++,D),w.push(b))}var z=new Float32Array(Y.reverse()),Q=new Float32Array(w.reverse());return{regular:{instancesData:e.trim(d,v),lodInfo:{lengths:z}},silhouette:{instancesData:t.trim(H,p),lodInfo:{lengths:Q}},averageEdgeLength:g/y}}function o(n,e){return n.cosAngle<e}function O(n,e){return n.cosAngle>e}function a(n,e){var t=(0,T.ZF)(n.cosAngle),E=c.fwd,_=c.ortho;return(0,R.r)(E,n.position1,n.position0),t*((0,R.e)((0,R.f)(_,n.faceNormal0,n.faceNormal1),E)>0?-1:1)>e}function I(n){for(var e=n.faces.length/3,t=n.faces,E=n.neighbors,_=0,r=0;r<e;r++){var T=E[3*r+0],i=E[3*r+1],R=E[3*r+2],A=t[3*r+0],u=t[3*r+1],o=t[3*r+2];_+=T===N||A<u?1:0,_+=i===N||u<o?1:0,_+=R===N||o<A?1:0}for(var O=new Int32Array(4*_),a=0,I=0;I<e;I++){var S=E[3*I+0],c=E[3*I+1],f=E[3*I+2],C=t[3*I+0],s=t[3*I+1],L=t[3*I+2];(S===N||C<s)&&(O[a++]=C,O[a++]=s,O[a++]=I,O[a++]=S),(c===N||s<L)&&(O[a++]=s,O[a++]=L,O[a++]=I,O[a++]=c),(f===N||L<C)&&(O[a++]=L,O[a++]=C,O[a++]=I,O[a++]=f)}return O}function S(n){for(var e=n.faces.length/3,t=n.vertices.position,E=n.faces,_=f.v0,r=f.v1,T=f.v2,i=new Float32Array(3*e),A=0;A<e;A++){var N=E[3*A+0],u=E[3*A+1],o=E[3*A+2];t.getVec(N,_),t.getVec(u,r),t.getVec(o,T),(0,R.b)(r,r,_),(0,R.b)(T,T,_),(0,R.f)(_,r,T),(0,R.n)(_,_),i[3*A+0]=_[0],i[3*A+1]=_[1],i[3*A+2]=_[2]}return i}(_=E||(E={}))[_.SOLID=0]="SOLID",_[_.SKETCH=1]="SKETCH";var c={edge:{position0:(0,A.c)(),position1:(0,A.c)(),faceNormal0:(0,A.c)(),faceNormal1:(0,A.c)(),componentIndex:0,cosAngle:0},ortho:(0,A.c)(),fwd:(0,A.c)()},f={v0:(0,A.c)(),v1:(0,A.c)(),v2:(0,A.c)()},C={anglePlanar:4,angleSignificantEdge:35}},83715:function(n,e,t){t.d(e,{Kl:function(){return P},n_:function(){return h},kY:function(){return G},Yr:function(){return v}});var E=t(43144),_=t(15671),r=t(35888);function T(n,e,t){for(var E=e/3,_=new Uint32Array(t+1),r=new Uint32Array(t+1),T=function(n,e){n<e?_[n+1]++:r[e+1]++},i=0;i<E;i++){var R=n[3*i],A=n[3*i+1],N=n[3*i+2];T(R,A),T(A,N),T(N,R)}for(var u=0,o=0,O=0;O<t;O++){var a=_[O+1],I=r[O+1];_[O+1]=u,r[O+1]=o,u+=a,o+=I}for(var S=new Uint32Array(6*E),c=_[t],f=function(n,e,t){if(n<e){var E=_[n+1]++;S[2*E]=e,S[2*E+1]=t}else{var T=r[e+1]++;S[2*c+2*T]=n,S[2*c+2*T+1]=t}},C=0;C<E;C++){var s=n[3*C],L=n[3*C+1],D=n[3*C+2];f(s,L,C),f(L,D,C),f(D,s,C)}for(var U=function(n,e){for(var t=2*n,E=e-n,_=1;_<E;_++){for(var r=S[t+2*_],T=S[t+2*_+1],i=_-1;i>=0&&S[t+2*i]>r;i--)S[t+2*i+2]=S[t+2*i],S[t+2*i+3]=S[t+2*i+1];S[t+2*i+2]=r,S[t+2*i+3]=T}},l=0;l<t;l++)U(_[l],_[l+1]),U(c+r[l],c+r[l+1]);for(var M=new Int32Array(3*E),P=function(e,t){return e===n[3*t]?0:e===n[3*t+1]?1:e===n[3*t+2]?2:-1},G=function(n,e){var t=P(n,e);M[3*e+t]=-1},F=function(n,e,t,E){var _=P(n,e);M[3*e+_]=E;var r=P(t,E);M[3*E+r]=e},B=0;B<t;B++){for(var d=_[B],v=_[B+1],h=r[B],H=r[B+1];d<v&&h<H;){var p=S[2*d],g=S[2*c+2*h];p===g?(F(B,S[2*d+1],g,S[2*c+2*h+1]),d++,h++):p<g?(G(B,S[2*d+1]),d++):(G(g,S[2*c+2*h+1]),h++)}for(;d<v;)G(B,S[2*d+1]),d++;for(;h<H;)G(S[2*c+2*h],S[2*c+2*h+1]),h++}return M}var i=t(55158),R=t(4760),A=t(67009),N=t(84936),u=t(11186),o=t(71353),O=t(50256),a=function(){function n(){(0,_.Z)(this,n)}return(0,E.Z)(n,[{key:"updateSettings",value:function(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?C:f}},{key:"write",value:function(n,e,t){var E=this._edgeHashFunction(t);l.seed=E;var _=l.getIntRange(0,255),r=l.getIntRange(0,this.settings.variants-1),T=l.getFloat(),i=255*(.5*function(n,e){var t=n<0?-1:1;return Math.pow(Math.abs(n),e)*t}(-(1-Math.min(T/.7,1))+Math.max(0,T-.7)/(1-.7),1.2)+.5);n.position0.setVec(e,t.position0),n.position1.setVec(e,t.position1),n.componentIndex.set(e,t.componentIndex),n.variantOffset.set(e,_),n.variantStroke.set(e,r),n.variantExtension.set(e,i)}},{key:"trim",value:function(n,e){return n.slice(0,e)}}]),n}(),I=new Float32Array(6),S=new Uint32Array(I.buffer),c=new Uint32Array(1);function f(n){var e=I;e[0]=n.position0[0],e[1]=n.position0[1],e[2]=n.position0[2],e[3]=n.position1[0],e[4]=n.position1[1],e[5]=n.position1[2],c[0]=5381;for(var t=0;t<S.length;t++)c[0]=31*c[0]+S[t];return c[0]}function C(n){var e=I;e[0]=s(n.position0[0]),e[1]=s(n.position0[1]),e[2]=s(n.position0[2]),e[3]=s(n.position1[0]),e[4]=s(n.position1[1]),e[5]=s(n.position1[2]),c[0]=5381;for(var t=0;t<S.length;t++)c[0]=31*c[0]+S[t];return c[0]}function s(n){return Math.round(1e4*n)/1e4}var L=function(){function n(){(0,_.Z)(this,n),this._commonWriter=new a}return(0,E.Z)(n,[{key:"updateSettings",value:function(n){this._commonWriter.updateSettings(n)}},{key:"allocate",value:function(n){return A.dG.createBuffer(n)}},{key:"write",value:function(n,e,t){this._commonWriter.write(n,e,t),(0,u.a)(U,t.faceNormal0,t.faceNormal1),(0,u.n)(U,U),n.normal.setVec(e,U)}},{key:"trim",value:function(n,e){return this._commonWriter.trim(n,e)}}]),n}();L.Layout=A.dG,L.glLayout=(0,O.K)(A.dG,1);var D=function(){function n(){(0,_.Z)(this,n),this._commonWriter=new a}return(0,E.Z)(n,[{key:"updateSettings",value:function(n){this._commonWriter.updateSettings(n)}},{key:"allocate",value:function(n){return A.Hr.createBuffer(n)}},{key:"write",value:function(n,e,t){this._commonWriter.write(n,e,t),n.normalA.setVec(e,t.faceNormal0),n.normalB.setVec(e,t.faceNormal1)}},{key:"trim",value:function(n,e){return this._commonWriter.trim(n,e)}}]),n}();D.Layout=A.Hr,D.glLayout=(0,O.K)(A.Hr,1);var U=(0,o.c)(),l=new N.Z,M=t(10662);function P(n){var e=G(n.data,n.skipDeduplicate,n.indices,n.indicesLength);return B.updateSettings(n.writerSettings),d.updateSettings(n.writerSettings),(0,M.n)(e,B,d)}function G(n,e,t,E){if(e){var _=T(t,E,n.count);return new F(t,E,_,n)}var i=(0,r.d)(n.buffer,n.stride/4,{originalIndices:t,originalIndicesLength:E}),R=T(i.indices,E,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:R,vertices:A.tf.createView(i.buffer)}}var F=(0,E.Z)((function n(e,t,E,r){(0,_.Z)(this,n),this.faces=e,this.facesLength=t,this.neighbors=E,this.vertices=r})),B=new L,d=new D,v=(0,i.U$)().vec3f(R.T.POSITION0).vec3f(R.T.POSITION1),h=(0,i.U$)().vec3f(R.T.POSITION0).vec3f(R.T.POSITION1).u16(R.T.COMPONENTINDEX).u16(R.T.U16PADDING,{glPadding:!0})},61109:function(n,e,t){t.d(e,{G:function(){return r}});var E=t(43144),_=t(15671),r=(0,E.Z)((function n(e,t,E,r,T){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],R=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;(0,_.Z)(this,n),this.name=e,this.count=t,this.type=E,this.offset=r,this.stride=T,this.normalized=i,this.divisor=R}))},8548:function(n,e,t){var E,_,r,T,i,R,A,N,u,o,O,a,I,S,c,f,C,s,L,D,U,l;t.d(e,{Br:function(){return f},Ho:function(){return L},LR:function(){return R},Ld:function(){return G},Lm:function(){return U},Lu:function(){return g},MX:function(){return _},No:function(){return I},OU:function(){return l},Se:function(){return B},Tg:function(){return C},V7:function(){return H},VI:function(){return S},VY:function(){return P},Wf:function(){return A},Y5:function(){return h},_g:function(){return M},cw:function(){return O},db:function(){return T},e8:function(){return a},g:function(){return N},l1:function(){return s},lP:function(){return c},lk:function(){return E},q_:function(){return F},qi:function(){return D},w0:function(){return i},wb:function(){return u},xS:function(){return o},zi:function(){return r}}),function(n){n[n.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",n[n.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",n[n.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(n){n[n.POINTS=0]="POINTS",n[n.LINES=1]="LINES",n[n.LINE_LOOP=2]="LINE_LOOP",n[n.LINE_STRIP=3]="LINE_STRIP",n[n.TRIANGLES=4]="TRIANGLES",n[n.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",n[n.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(_||(_={})),function(n){n[n.ZERO=0]="ZERO",n[n.ONE=1]="ONE",n[n.SRC_COLOR=768]="SRC_COLOR",n[n.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",n[n.SRC_ALPHA=770]="SRC_ALPHA",n[n.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",n[n.DST_ALPHA=772]="DST_ALPHA",n[n.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",n[n.DST_COLOR=774]="DST_COLOR",n[n.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",n[n.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",n[n.CONSTANT_COLOR=32769]="CONSTANT_COLOR",n[n.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",n[n.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",n[n.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(r||(r={})),function(n){n[n.ADD=32774]="ADD",n[n.SUBTRACT=32778]="SUBTRACT",n[n.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",n[n.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",n[n.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",n[n.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",n[n.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",n[n.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(i||(i={})),function(n){n[n.FRONT=1028]="FRONT",n[n.BACK=1029]="BACK",n[n.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(R||(R={})),function(n){n[n.CW=2304]="CW",n[n.CCW=2305]="CCW"}(A||(A={})),function(n){n[n.BYTE=5120]="BYTE",n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.SHORT=5122]="SHORT",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.INT=5124]="INT",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.FLOAT=5126]="FLOAT"}(N||(N={})),function(n){n[n.NEVER=512]="NEVER",n[n.LESS=513]="LESS",n[n.EQUAL=514]="EQUAL",n[n.LEQUAL=515]="LEQUAL",n[n.GREATER=516]="GREATER",n[n.NOTEQUAL=517]="NOTEQUAL",n[n.GEQUAL=518]="GEQUAL",n[n.ALWAYS=519]="ALWAYS"}(u||(u={})),function(n){n[n.ZERO=0]="ZERO",n[n.KEEP=7680]="KEEP",n[n.REPLACE=7681]="REPLACE",n[n.INCR=7682]="INCR",n[n.DECR=7683]="DECR",n[n.INVERT=5386]="INVERT",n[n.INCR_WRAP=34055]="INCR_WRAP",n[n.DECR_WRAP=34056]="DECR_WRAP"}(o||(o={})),function(n){n[n.NEAREST=9728]="NEAREST",n[n.LINEAR=9729]="LINEAR",n[n.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",n[n.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",n[n.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",n[n.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(O||(O={})),function(n){n[n.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",n[n.REPEAT=10497]="REPEAT",n[n.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(a||(a={})),function(n){n[n.TEXTURE_2D=3553]="TEXTURE_2D",n[n.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",n[n.TEXTURE_3D=32879]="TEXTURE_3D",n[n.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",n[n.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",n[n.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",n[n.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",n[n.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(I||(I={})),function(n){n[n.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n[n.ALPHA=6406]="ALPHA",n[n.RGB=6407]="RGB",n[n.RGBA=6408]="RGBA",n[n.LUMINANCE=6409]="LUMINANCE",n[n.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",n[n.RED=6403]="RED",n[n.RG=33319]="RG",n[n.RED_INTEGER=36244]="RED_INTEGER",n[n.RG_INTEGER=33320]="RG_INTEGER",n[n.RGB_INTEGER=36248]="RGB_INTEGER",n[n.RGBA_INTEGER=36249]="RGBA_INTEGER"}(S||(S={})),function(n){n[n.RGBA4=32854]="RGBA4",n[n.R16F=33325]="R16F",n[n.RG16F=33327]="RG16F",n[n.RGB32F=34837]="RGB32F",n[n.RGBA16F=34842]="RGBA16F",n[n.R32F=33326]="R32F",n[n.RG32F=33328]="RG32F",n[n.RGBA32F=34836]="RGBA32F",n[n.R11F_G11F_B10F=35898]="R11F_G11F_B10F",n[n.RGB8=32849]="RGB8",n[n.RGBA8=32856]="RGBA8",n[n.RGB5_A1=32855]="RGB5_A1",n[n.R8=33321]="R8",n[n.RG8=33323]="RG8",n[n.R8I=33329]="R8I",n[n.R8UI=33330]="R8UI",n[n.R16I=33331]="R16I",n[n.R16UI=33332]="R16UI",n[n.R32I=33333]="R32I",n[n.R32UI=33334]="R32UI",n[n.RG8I=33335]="RG8I",n[n.RG8UI=33336]="RG8UI",n[n.RG16I=33337]="RG16I",n[n.RG16UI=33338]="RG16UI",n[n.RG32I=33339]="RG32I",n[n.RG32UI=33340]="RG32UI",n[n.RGB16F=34843]="RGB16F",n[n.RGB9_E5=35901]="RGB9_E5",n[n.SRGB8=35905]="SRGB8",n[n.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",n[n.RGB565=36194]="RGB565",n[n.RGBA32UI=36208]="RGBA32UI",n[n.RGB32UI=36209]="RGB32UI",n[n.RGBA16UI=36214]="RGBA16UI",n[n.RGB16UI=36215]="RGB16UI",n[n.RGBA8UI=36220]="RGBA8UI",n[n.RGB8UI=36221]="RGB8UI",n[n.RGBA32I=36226]="RGBA32I",n[n.RGB32I=36227]="RGB32I",n[n.RGBA16I=36232]="RGBA16I",n[n.RGB16I=36233]="RGB16I",n[n.RGBA8I=36238]="RGBA8I",n[n.RGB8I=36239]="RGB8I",n[n.R8_SNORM=36756]="R8_SNORM",n[n.RG8_SNORM=36757]="RG8_SNORM",n[n.RGB8_SNORM=36758]="RGB8_SNORM",n[n.RGBA8_SNORM=36759]="RGBA8_SNORM",n[n.RGB10_A2=32857]="RGB10_A2",n[n.RGB10_A2UI=36975]="RGB10_A2UI"}(c||(c={})),function(n){n[n.FLOAT=5126]="FLOAT",n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",n[n.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",n[n.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",n[n.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",n[n.BYTE=5120]="BYTE",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.SHORT=5122]="SHORT",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.INT=5124]="INT",n[n.HALF_FLOAT=5131]="HALF_FLOAT",n[n.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",n[n.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",n[n.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",n[n.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(f||(f={})),function(n){n[n.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",n[n.STENCIL_INDEX8=36168]="STENCIL_INDEX8",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n[n.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",n[n.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",n[n.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",n[n.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(C||(C={})),function(n){n[n.STATIC_DRAW=35044]="STATIC_DRAW",n[n.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",n[n.STREAM_DRAW=35040]="STREAM_DRAW",n[n.STATIC_READ=35045]="STATIC_READ",n[n.DYNAMIC_READ=35049]="DYNAMIC_READ",n[n.STREAM_READ=35041]="STREAM_READ",n[n.STATIC_COPY=35046]="STATIC_COPY",n[n.DYNAMIC_COPY=35050]="DYNAMIC_COPY",n[n.STREAM_COPY=35042]="STREAM_COPY"}(s||(s={})),function(n){n[n.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",n[n.VERTEX_SHADER=35633]="VERTEX_SHADER"}(L||(L={})),function(n){n[n.FRAMEBUFFER=36160]="FRAMEBUFFER",n[n.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",n[n.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(D||(D={})),function(n){n[n.TEXTURE=0]="TEXTURE",n[n.RENDER_BUFFER=1]="RENDER_BUFFER",n[n.CUBEMAP=2]="CUBEMAP"}(U||(U={})),function(n){n[n.NONE=0]="NONE",n[n.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",n[n.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",n[n.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",n[n.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(l||(l={}));var M,P,G=33984;!function(n){n[n.Texture=0]="Texture",n[n.BufferObject=1]="BufferObject",n[n.VertexArrayObject=2]="VertexArrayObject",n[n.Shader=3]="Shader",n[n.Program=4]="Program",n[n.FramebufferObject=5]="FramebufferObject",n[n.Renderbuffer=6]="Renderbuffer",n[n.Sync=7]="Sync",n[n.COUNT=8]="COUNT"}(M||(M={})),function(n){n[n.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",n[n.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",n[n.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",n[n.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",n[n.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",n[n.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",n[n.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",n[n.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",n[n.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",n[n.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",n[n.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",n[n.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",n[n.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",n[n.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",n[n.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",n[n.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={}));var F,B,d,v,h,H,p,g=33306;!function(n){n[n.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",n[n.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",n[n.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",n[n.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",n[n.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",n[n.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",n[n.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",n[n.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",n[n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(F||(F={})),function(n){n[n.FLOAT=5126]="FLOAT",n[n.FLOAT_VEC2=35664]="FLOAT_VEC2",n[n.FLOAT_VEC3=35665]="FLOAT_VEC3",n[n.FLOAT_VEC4=35666]="FLOAT_VEC4",n[n.INT=5124]="INT",n[n.INT_VEC2=35667]="INT_VEC2",n[n.INT_VEC3=35668]="INT_VEC3",n[n.INT_VEC4=35669]="INT_VEC4",n[n.BOOL=35670]="BOOL",n[n.BOOL_VEC2=35671]="BOOL_VEC2",n[n.BOOL_VEC3=35672]="BOOL_VEC3",n[n.BOOL_VEC4=35673]="BOOL_VEC4",n[n.FLOAT_MAT2=35674]="FLOAT_MAT2",n[n.FLOAT_MAT3=35675]="FLOAT_MAT3",n[n.FLOAT_MAT4=35676]="FLOAT_MAT4",n[n.SAMPLER_2D=35678]="SAMPLER_2D",n[n.SAMPLER_CUBE=35680]="SAMPLER_CUBE",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",n[n.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",n[n.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",n[n.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",n[n.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",n[n.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",n[n.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",n[n.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",n[n.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",n[n.SAMPLER_3D=35679]="SAMPLER_3D",n[n.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",n[n.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",n[n.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",n[n.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",n[n.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",n[n.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",n[n.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",n[n.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",n[n.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",n[n.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",n[n.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",n[n.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(n){n[n.OBJECT_TYPE=37138]="OBJECT_TYPE",n[n.SYNC_CONDITION=37139]="SYNC_CONDITION",n[n.SYNC_STATUS=37140]="SYNC_STATUS",n[n.SYNC_FLAGS=37141]="SYNC_FLAGS"}(d||(d={})),function(n){n[n.UNSIGNALED=37144]="UNSIGNALED",n[n.SIGNALED=37145]="SIGNALED"}(v||(v={})),function(n){n[n.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",n[n.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",n[n.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",n[n.WAIT_FAILED=37149]="WAIT_FAILED"}(h||(h={})),function(n){n[n.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(n){n[n.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(p||(p={}))}}]);
//# sourceMappingURL=3715.ff0f5a7e.chunk.js.map