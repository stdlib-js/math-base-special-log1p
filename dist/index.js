"use strict";var q=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var p=q(function(k,T){
function O(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}T.exports=O
});var H=q(function(z,g){
var S=require('@stdlib/math-base-assert-is-nan/dist'),L=require('@stdlib/number-float64-base-get-high-word/dist'),c=require('@stdlib/number-float64-base-set-high-word/dist'),_=require('@stdlib/constants-float64-pinf/dist'),h=require('@stdlib/constants-float64-ninf/dist'),I=require('@stdlib/constants-float64-exponent-bias/dist'),A=p(),l=.6931471803691238,N=19082149292705877e-26,F=.41421356237309503,R=-.2928932188134525,W=1862645149230957e-24,y=5551115123125783e-32,M=9007199254740992,d=.6666666666666666;function E(r){var a,e,t,v,u,n,o,s,f,i;if(r<-1||S(r))return NaN;if(r===-1)return h;if(r===_||r===0)return r;if(r<0?t=-r:t=r,i=1,t<F){if(t<W)return t<y?r:r-r*r*.5;r>R&&(i=0,v=r,e=1)}return i!==0&&(t<M?(f=1+r,e=L(f),i=(e>>20)-I,i>0?u=1-(f-r):u=r-(f-1),u/=f):(f=r,e=L(f),i=(e>>20)-I,u=0),e&=1048575,e<434334?f=c(f,e|1072693248):(i+=1,f=c(f,e|1071644672),e=1048576-e>>2),v=f-1),a=.5*v*v,e===0?v===0?(u+=i*N,i*l+u):(s=a*(1-d*v),i*l-(s-(i*N+u)-v)):(n=v/(2+v),o=n*n,s=o*A(o),i===0?v-(a-n*(a+s)):i*l-(a-(n*(a+s)+(i*N+u))-v))}g.exports=E
});var P=H();module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
