// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=r&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,a,f,u;if(null==r)return n.call(r);i=r[o],u=o,e=null!=(f=r)&&t.call(f,u);try{r[o]=void 0}catch(t){return n.call(r)}return a=n.call(r),e?r[o]=i:delete r[o],a}:function(r){return n.call(r)},i="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var f,u="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(i&&t instanceof Uint32Array||"[object Uint32Array]"===e(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?u:function(){throw new Error("not implemented")};var y=f,c="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,NaN]),t=n,r=(c&&t instanceof Float64Array||"[object Float64Array]"===e(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A=v,U="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,256,257]),t=n,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===e(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=b,N="function"==typeof Uint16Array;var h="function"==typeof Uint16Array?Uint16Array:null;var F,I="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,65536,65537]),t=n,r=(N&&t instanceof Uint16Array||"[object Uint16Array]"===e(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,s={uint16:F,uint8:d};(S=new s.uint16(1))[0]=4660;var E=52===new s.uint8(S.buffer)[0],j=!0===E?1:0,T=new A(1),g=new y(T.buffer);function O(r){return T[0]=r,g[j]}var P=!0===E?1:0,V=new A(1),Y=new y(V.buffer);function _(r,n){return V[0]=r,Y[P]=n>>>0,V[0]}var x=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY;var k=.6931471803691238,q=1.9082149292705877e-10;function z(r){var n,t,o,e,i,a,f,u,y,c;if(r<-1||function(r){return r!=r}(r))return NaN;if(-1===r)return G;if(r===x)return r;if(0===r)return r;if(c=1,(o=r<0?-r:r)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(c=0,e=r,t=1)}return 0!==c&&(o<9007199254740992?(i=(c=((t=O(y=1+r))>>20)-1023)>0?1-(y-r):r-(y-1),i/=y):(c=((t=O(y=r))>>20)-1023,i=0),(t&=1048575)<434334?y=_(y,1072693248|t):(c+=1,y=_(y,1071644672|t),t=1048576-t>>2),e=y-1),n=.5*e*e,0===t?0===e?c*k+(i+=c*q):c*k-((u=n*(1-.6666666666666666*e))-(c*q+i)-e):(u=(f=(a=e/(2+e))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===c?e-(n-a*(n+u)):c*k-(n-(a*(n+u)+(c*q+i))-e))}export{z as default};
//# sourceMappingURL=mod.js.map
