// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";var d=.6931471803691238,m=1.9082149292705877e-10;function o(o){var f,a,j,l,h,p,b,u,c,g;if(o<-1||t(o))return NaN;if(-1===o)return r;if(o===n)return o;if(0===o)return o;if(g=1,(j=o<0?-o:o)<.41421356237309503){if(j<1.862645149230957e-9)return j<5551115123125783e-32?o:o-o*o*.5;o>-.2928932188134525&&(g=0,l=o,a=1)}return 0!==g&&(j<9007199254740992?(h=(g=((a=s(c=1+o))>>20)-i)>0?1-(c-o):o-(c-1),h/=c):(g=((a=s(c=o))>>20)-i,h=0),(a&=1048575)<434334?c=e(c,1072693248|a):(g+=1,c=e(c,1071644672|a),a=1048576-a>>2),l=c-1),f=.5*l*l,0===a?0===l?g*d+(h+=g*m):g*d-((u=f*(1-.6666666666666666*l))-(g*m+h)-l):(u=(b=(p=l/(2+l))*p)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(b),0===g?l-(f-p*(f+u)):g*d-(f-(p*(f+u)+(g*m+h))-l))}export{o as default};
//# sourceMappingURL=index.mjs.map
