/* CloudWall General 1.0.2
* — Sugar 1.4.1
* — jQuery 1.11.0 + Migrate 1.2.1
* — jQuery.my 1.1.6
* — jQuery.tags 0.4
* – cw.lib 1.0.1
*/


/*Sugar 1.4.1*/
!function(){function e(e,t,n){var i=n||r(e);return i==="[object "+t+"]"}function t(t){var n="Array"===t&&ar.isArray||function(n,r){return e(n,t,r)};return wr[t]=n,n}function n(t,n){var r=function(r){return y(r)?e(r,n):typeof r===t};return wr[n]=r,r}function r(e){return pr.call(e)}function i(){o(sr),_(_r,function(e,t){o(fr[t])})}function o(e){e.SugarMethods||(u(e,"SugarMethods",{}),s(e,!1,!0,{extend:function(t,n,r){s(e,r!==!1,n,t)},sugarRestore:function(){return c(this,e,arguments,function(e,t,n){u(e,t,n.method)})},sugarRevert:function(){return c(this,e,arguments,function(e,t,n){n.existed?u(e,t,n.original):delete e[t]})}}))}function s(e,t,n,r){var i=t?e.prototype:e;o(e),_(r,function(r,o){var s=i[r],a=v(i,r);Rr(n)&&s&&(o=l(s,o,n)),n===!1&&s||u(i,r,o),e.SugarMethods[r]={method:o,existed:a,original:s,instance:t}})}function a(e,t,n,r,i){var o={};r=kr(r)?r.split(","):r,r.forEach(function(e,t){i(o,e,t)}),s(e,t,n,o)}function c(e,t,n,r){var i=0===n.length,o=h(n),s=!1;return _(t.SugarMethods,function(t,n){(i||-1!==o.indexOf(t))&&(s=!0,r(n.instance?e.prototype:e,t,n))}),s}function l(e,t,n){return function(){return n.apply(this,arguments)?t.apply(this,arguments):e.apply(this,arguments)}}function u(e,t,n){gr?sr.defineProperty(e,t,{value:n,configurable:!0,enumerable:!1,writable:!0}):e[t]=n}function h(e,t,n){var r,i=[],o=n||0;for(r=e.length;r>o;o++)i.push(e[o]),t&&t.call(e,e[o],o);return i}function d(e,t,n){var r=e[n||0];return Er(r)&&(e=r,n=0),h(e,t,n)}function f(e){if(!e||!e.call)throw new TypeError("Callback is not callable")}function p(e){return e!==or}function m(e){return e===or}function g(e,t){return!w(e)&&t in e}function v(e,t){return!!e&&mr.call(e,t)}function y(e){return!!e&&("object"==typeof e||vr&&Tr(e))}function w(e){var t=typeof e;return null==e||"string"===t||"number"===t||"boolean"===t}function b(e,t){t=t||r(e);try{if(e&&e.constructor&&!v(e,"constructor")&&!v(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}return!!e&&"[object Object]"===t&&"hasOwnProperty"in e}function _(e,t){var n;for(n in e)if(v(e,n)&&t.call(e,n,e[n],e)===!1)break}function C(e,t){for(var n=0;e>n;n++)t(n)}function S(e,t){return _(t,function(n){e[n]=t[n]}),e}function k(e){return w(e)&&(e=sr(e)),yr&&kr(e)&&E(e),e}function E(e){for(var t,n=0;t=e.charAt(n);)e[n++]=t}function x(e){S(this,k(e))}function T(e,t,n){var r=Dr(10,Or(t||0));return n=n||Lr,0>t&&(r=1/r),n(e*r)/r}function R(e){return e>=jr&&qr>=e||e>=Hr&&Br>=e}function A(){var e,t;for(t=0;9>=t;t++)e=O(t+Hr),Wr+=e,Ur[e]=O(t+jr);Ur[zr]="",Ur[$r]=Fr,Ur[Fr]=Fr,Ar=cr("["+Wr+$r+zr+Fr+"]","g")}function O(e){return ur.fromCharCode(e)}function D(){return"	\n\f\r   ᠎             \u2028\u2029　﻿"}function N(e,t){for(var n="",e=e.toString();t>0;)1&t&&(n+=e),(t>>=1)&&(e+=e);return n}function I(e,t){var n,r;return n=e.replace(Ar,function(e){var t=Ur[e];return t===Fr&&(r=!0),t}),r?parseFloat(n):parseInt(n,t||10)}function L(e,t,n,r){var i=Or(e).toString(r||10);return i=N("0",t-i.replace(/\.\d+/,"").length)+i,(n||0>e)&&(i=(0>e?"-":"+")+i),i}function P(e){if(e>=11&&13>=e)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function M(e,t){function n(e,n){(e||t.indexOf(n)>-1)&&(r+=n)}var r="";return t=t||"",n(e.multiline,"m"),n(e.ignoreCase,"i"),n(e.global,"g"),n(e.sticky,"y"),r}function j(e){return kr(e)||(e=ur(e)),e.replace(/([\\/\'*+?|()\[\]{}.^$])/g,"\\$1")}function q(e,t){return e["get"+(e._utc?"UTC":"")+t]()}function H(e,t,n){return e["set"+(e._utc&&"ISOWeek"!=t?"UTC":"")+t](n)}function B(e,t){var n,r,i,o,s,a,c,l,u=typeof e;if("string"===u)return e;if(i=pr.call(e),n=b(e,i),r=Er(e,i),null!=e&&n||r){if(t||(t=[]),t.length>1)for(c=t.length;c--;)if(t[c]===e)return"CYC";for(t.push(e),o=e.valueOf()+ur(e.constructor),s=r?e:sr.keys(e).sort(),c=0,l=s.length;l>c;c++)a=r?c:s[c],o+=a+B(e[a],t);t.pop()}else o=1/e===-1/0?"-0":ur(e&&e.valueOf?e.valueOf():e);return u+i+o}function F(e,t){return e===t?0!==e||1/e===1/t:$(e)&&$(t)?B(e)===B(t):!1}function $(e){var t=r(e);return br.test(t)||b(e,t)}function z(e,t,n){var r,i=e.length,o=t.length,s=t[o-1]!==!1,a=o>(s?1:2);return a?(r=[],h(t,function(t){return Cr(t)?!1:void r.push(W(e,i,t,s,n))}),r):W(e,i,t[0],s,n)}function W(e,t,n,r,i){return r&&(n%=t,0>n&&(n=t+n)),i?e.charAt(n):e[n]}function U(e,t){a(t,!0,!1,e,function(e,t){e[t+("equal"===t?"s":"")]=function(){return sr[t].apply(null,[this].concat(h(arguments)))}})}function V(e,t,n,r){var i=e.length,o=-1==r,s=o?i-1:0,a=K(n,s);for(0>a&&(a=i+a),(!o&&0>a||o&&a>=i)&&(a=s);o&&a>=0||!o&&i>a;){if(e[a]===t)return a;a+=r}return-1}function G(e,t,n,r){var i,o,s=e.length,a=0,c=p(n);if(f(t),0==s&&!c)throw new TypeError("Reduce called on empty array with no initial value");for(c?i=n:(i=e[r?s-1:a],a++);s>a;)o=r?s-a-1:a,o in e&&(i=t(i,e[o],o,e)),a++;return i}function K(e,t){return isNaN(e)?t:parseInt(e>>0)}function J(e){if(0===e.length)throw new TypeError("First argument must be defined")}function Y(){var e=D().match(/^\s+$/);try{ur.prototype.trim.call([1])}catch(t){e=!1}s(ur,!0,!e,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(cr("^["+D()+"]+"),"")},trimRight:function(){return this.replace(cr("["+D()+"]+$"),"")}})}function X(){var e=new lr(lr.UTC(1999,11,31)),t="1999-12-31T00:00:00.000Z",n=e.toISOString&&e.toISOString()===t;a(lr,!0,!n,"toISOString,toJSON",function(e,t){e[t]=function(){return L(this.getUTCFullYear(),4)+"-"+L(this.getUTCMonth()+1,2)+"-"+L(this.getUTCDate(),2)+"T"+L(this.getUTCHours(),2)+":"+L(this.getUTCMinutes(),2)+":"+L(this.getUTCSeconds(),2)+"."+L(this.getUTCMilliseconds(),3)+"Z"}})}function Q(e){return e=cr(e),function(t){return e.test(t)}}function Z(e){var t=e.getTime();return function(e){return!(!e||!e.getTime)&&e.getTime()===t}}function et(e){return function(t,n,r){return t===e||e.call(this,t,n,r)}}function tt(e){return function(t,n,r){return t===e||e.call(r,n,t,r)}}function nt(e,t){var n={};return function(r,i,o){var s;if(!y(r))return!1;for(s in e)if(n[s]=n[s]||it(e[s],t),n[s].call(o,r[s],i,o)===!1)return!1;return!0}}function rt(e){return function(t){return t===e||F(t,e)}}function it(e,t){if(w(e));else{if(Tr(e))return Q(e);if(xr(e))return Z(e);if(Rr(e))return t?tt(e):et(e);if(b(e))return nt(e,t)}return rt(e)}function ot(e,t,n,r){return t?t.apply?t.apply(n,r||[]):Rr(e[t])?e[t].call(e):e[t]:e}function st(e,t,n,r){var i,o,s=+e.length;for(0>n&&(n=e.length+n),o=isNaN(n)?0:n,r===!0&&(s+=o);s>o;){if(i=o%e.length,!(i in e))return at(e,t,o,r);if(t.call(e,e[i],i,e)===!1)break;o++}}function at(e,t,n){var r,i=[];for(r in e)ct(e,r)&&r>=n&&i.push(parseInt(r));return i.sort().each(function(n){return t.call(e,e[n],n,e)}),e}function ct(e,t){return t in e&&lt(t)==t&&4294967295!=t}function lt(e){return e>>>0}function ut(e,t,n,r,i,o){var s,a,c;return e.length>0&&(c=it(t),st(e,function(t,n){return c.call(o,t,n,e)?(s=t,a=n,!1):void 0},n,r)),i?a:s}function ht(e,t){var n,r=[],i={};return st(e,function(o,s){n=t?ot(o,t,e,[o,s,e]):o,yt(i,n)||r.push(o)}),r}function dt(e,t,n){var r=[],i={};return t.each(function(e){yt(i,e)}),e.each(function(e){var t=B(e),o=!$(e);vt(i,t,e,o)!==n&&(wt(i,t,e,o),r.push(e))}),r}function ft(e,t,n){t=t||1/0,n=n||0;var r=[];return st(e,function(e){Er(e)&&t>n?r=r.concat(ft(e,t,n+1)):r.push(e)}),r}function pt(e){return g(e,"length")&&!kr(e)&&!b(e)}function mt(e){return g(e,"length")&&("[object Arguments]"===r(e)||!!e.callee)}function gt(e){var t=[];return h(e,function(e){t=t.concat(e)}),t}function vt(e,t,n,r){var i=t in e;return r&&(e[t]||(e[t]=[]),i=-1!==e[t].indexOf(n)),i}function yt(e,t){var n=B(t),r=!$(t),i=vt(e,n,t,r);return r?e[n].push(t):e[n]=t,i}function wt(e,t,n,r){var i,o=0;if(r)for(i=e[t];o<i.length;)i[o]===n?i.splice(o,1):o+=1;else delete e[t]}function bt(e,t,n,r){var i,o,s,a,c=[],l="max"===n,u="min"===n,h=ar.isArray(e);for(o in e)if(e.hasOwnProperty(o)){if(i=e[o],a=ot(i,t,e,h?[i,parseInt(o),e]:[]),m(a))throw new TypeError("Cannot compare with undefined");a===s?c.push(i):(m(s)||l&&a>s||u&&s>a)&&(c=[i],s=a)}return h||(c=ft(c,1)),r?c:c[0]}function _t(e,t){var n,r,i,o,s,a,c=0,l=0,u=ar[Kr],h=ar[Jr],d=ar[Yr],f=ar[Gr],p=ar[Xr];e=Ct(e,u,h),t=Ct(t,u,h);do i=St(e,c,d),o=St(t,c,d),n=kt(i,f),r=kt(o,f),-1===n||-1===r?(n=e.charCodeAt(c)||null,r=t.charCodeAt(c)||null,p&&R(n)&&R(r)&&(n=I(e.slice(c)),r=I(t.slice(c)))):(s=i!==e.charAt(c),a=o!==t.charAt(c),s!==a&&0===l&&(l=s-a)),c+=1;while(null!=n&&null!=r&&n===r);return n===r?l:n-r}function Ct(e,t,n){return kr(e)||(e=ur(e)),n&&(e=e.toLowerCase()),t&&(e=e.replace(t,"")),e}function St(e,t,n){var r=e.charAt(t);return n[r]||r}function kt(e,t){return e?t.indexOf(e):null}function Et(){var e=ar.prototype.map,t=function(){var e=arguments;return e.length>0&&!Rr(e[0])};a(ar,!0,t,"every,all,some,filter,any,none,find,findIndex",function(e,t){var n=ar.prototype[t];e[t]=function(e){var t=it(e);return n.call(this,function(e,n){return t(e,n,this)})}}),s(ar,!0,t,{map:function(t){return e.call(this,function(e,n){return ot(e,t,this,[e,n,this])})}})}function xt(){var e="AÁÀÂÃĄBCĆČÇDĎÐEÉÈĚÊËĘFGĞHıIÍÌİÎÏJKLŁMNŃŇÑOÓÒÔPQRŘSŚŠŞTŤUÚÙŮÛÜVWXYÝZŹŻŽÞÆŒØÕÅÄÖ",t="AÁÀÂÃÄ,CÇ,EÉÈÊË,IÍÌİÎÏ,OÓÒÔÕÖ,Sß,UÚÙÛÜ";ar[Gr]=e.split("").map(function(e){return e+e.toLowerCase()}).join("");var n={};st(t.split(","),function(e){var t=e.charAt(0);st(e.slice(1).split(""),function(e){n[e]=t,n[e.toLowerCase()]=t.toLowerCase()})}),ar[Xr]=!0,ar[Jr]=!0,ar[Yr]=n}function Tt(e){return sr.keys(k(e))}function Rt(e,t){a(sr,!1,!0,e,function(e,n){e[n]=function(e,r,i){var o,s,a=Tt(e);return t||(s=it(r,!0)),o=ar.prototype[n].call(a,function(n){var i=e[n];return t?ot(i,r,e,[n,i,e]):s(i,n,e)},i),Er(o)&&(o=o.reduce(function(t,n){return t[n]=e[n],t},{})),o}}),U(e,x)}function At(){ar[Vr]=_t}function Ot(e){S(this,e),this.compiledFormats=pi.concat()}function Dt(e,t){var n;if(kr(e)||(e=""),n=yi[e]||yi[e.slice(0,2)],t===!1&&!n)throw new TypeError("Invalid locale.");return n||ri}function Nt(e,t){function n(e){var t=l[e];kr(t)?l[e]=t.split(","):t||(l[e]=[])}function r(e,t){return e=e.split("+").map(function(e){return e.replace(/(.+):(.+)$/,function(e,t,n){return n.split("|").map(function(e){return t+e}).join("|")})}).join("|"),e.split("|").forEach(t)}function i(e,t,n){var i=[];l[e].forEach(function(e,o){t&&(e+="+"+e.slice(0,3)),r(e,function(e,t){i[t*n+o]=e.toLowerCase()})}),l[e]=i}function o(e,t,n){var r="\\d{"+e+","+t+"}";return n&&(r+="|(?:"+Pt(l.numbers)+")+"),r}function s(){var e=["-?\\d+"].concat(l.articles);return l.numbers&&(e=e.concat(l.numbers)),Pt(e)}function a(e,t){l[e]=l[e]||t}function c(){var e=[];l.modifiersByName={},l.modifiers.push({name:"day",src:"yesterday",value:-1}),l.modifiers.push({name:"day",src:"today",value:0}),l.modifiers.push({name:"day",src:"tomorrow",value:1}),l.modifiers.forEach(function(t){var n=t.name;r(t.src,function(r){var i=l[n];l.modifiersByName[r]=t,e.push({name:n,src:r,value:t.value}),l[n]=i?i+"|"+r:r})}),l.day+="|"+Pt(l.weekdays),l.modifiers=e}var l,u;return l=new Ot(t),n("modifiers"),"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(n),u=!l.monthSuffix,i("months",u,12),i("weekdays",u,7),i("units",!1,8),i("numbers",!1,10),a("code",e),a("date",o(1,2,l.digitDate)),a("year","'\\d{2}|"+o(4,4)),a("num",s()),c(),l.monthSuffix&&(l.month=o(1,2),l.months="1,2,3,4,5,6,7,8,9,10,11,12".split(",").map(function(e){return e+l.monthSuffix})),l.full_month=o(1,2)+"|"+Pt(l.months),l.timeSuffixes.length>0&&l.addFormat(cn(hi,l),!1,ai),l.addFormat("{day}",!0),l.addFormat("{month}"+(l.monthSuffix||"")),l.addFormat("{year}"+(l.yearSuffix||"")),l.timeParse.forEach(function(e){l.addFormat(e,!0)}),l.dateParse.forEach(function(e){l.addFormat(e)}),yi[e]=l}function It(e,t,n,r){e.compiledFormats.unshift({variant:r,locale:e,reg:cr("^"+t+"$","i"),to:n})}function Lt(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function Pt(e){return e.filter(function(e){return!!e}).join("|")}function Mt(){var e=lr.SugarNewDate;return e?e():new lr}function jt(e,t){var n;return y(e[0])?e:Sr(e[0])&&!Sr(e[1])?[e[0]]:kr(e[0])&&t?[qt(e[0]),e[1]]:(n={},oi.forEach(function(t,r){n[t.name]=e[r]}),[n])}function qt(e,t){var n,r={};return n=e.match(/^(\d+)?\s?(\w+?)s?$/i),n&&(m(t)&&(t=parseInt(n[1])||1),r[n[2].toLowerCase()]=t),r}function Ht(e,t,n){var r,i;for(m(n)&&(n=si.length),r=t||0;n>r&&(i=si[r],e(i.name,i,r)!==!1);r++);}function Bt(e,t){var n,r,i={};return t.forEach(function(t,o){n=e[o+1],m(n)||""===n||("year"===t&&(i.yearAsString=n.replace(/'/,"")),r=parseFloat(n.replace(/'/,"").replace(/,/,".")),i[t]=isNaN(r)?n.toLowerCase():r)}),i}function Ft(e){return e=e.trim().replace(/^just (?=now)|\.+$/i,""),$t(e)}function $t(e){return e.replace(ii,function(e,t,n){var r,i,o=0,s=1;return t?e:(n.split("").reverse().forEach(function(e){var t=fi[e],n=t>9;n?(r&&(o+=s),s*=t/(i||1),i=t):(r===!1&&(s*=10),o+=s*t),r=n}),r&&(o+=s),o)})}function zt(e,t,n,r){function i(e){d.push(e)}function o(){d.forEach(function(e){e.call()})}function s(){var e=l.getWeekday();l.setWeekday(7*(m.num-1)+(e>w?w+7:w))}function a(){var e=f.modifiersByName[m.edge];Ht(function(e){return p(m[e])?(g=e,!1):void 0},4),"year"===g?m.specificity="month":("month"===g||"week"===g)&&(m.specificity="day"),l[(e.value<0?"endOf":"beginningOf")+Lt(g)](),-2===e.value&&l.reset()}function c(){var e;Ht(function(t,n,r){if("day"===t&&(t="date"),p(m[t])){if(r>=v)return hn(l),!1;e=e||{},e[t]=m[t],delete m[t]}}),e&&i(function(){l.set(e,!0)})}var l,u,h,d,f,m,g,v,w,b,C;return l=Mt(),d=[],l.utc(r),xr(e)?l.utc(e.isUTC()).setTime(e.getTime()):Sr(e)?l.setTime(e):y(e)?(l.set(e,!0),m=e):kr(e)&&(h=Dt(t),e=Ft(e),h&&_(h.getFormats(),function(n,r){var o=e.match(r.reg);return o?(f=r.locale,m=Bt(o,r.to,f),f.cachedFormat=r,m.utc&&l.utc(),m.timestamp?(m=m.timestamp,!1):(r.variant&&!kr(m.month)&&(kr(m.date)||h.hasVariant(t))&&(C=m.month,m.month=m.date,m.date=C),m.year&&2===m.yearAsString.length&&(m.year=Wt(m.year)),m.month&&(m.month=f.getMonth(m.month),m.shift&&!m.unit&&(m.unit=f.units[7])),m.weekday&&m.date?delete m.weekday:m.weekday&&(m.weekday=f.getWeekday(m.weekday),m.shift&&!m.unit&&(m.unit=f.units[5])),m.day&&(C=f.modifiersByName[m.day])?(m.day=C.value,l.reset(),u=!0):m.day&&(w=f.getWeekday(m.day))>-1&&(delete m.day,m.num&&m.month?(i(s),m.day=1):m.weekday=w),m.date&&!Sr(m.date)&&(m.date=f.getNumericDate(m.date)),f.matchPM(m.ampm)&&m.hour<12?m.hour+=12:f.matchAM(m.ampm)&&12===m.hour&&(m.hour=0),("offset_hours"in m||"offset_minutes"in m)&&(l.utc(),m.offset_minutes=m.offset_minutes||0,m.offset_minutes+=60*m.offset_hours,"-"===m.offset_sign&&(m.offset_minutes*=-1),m.minute-=m.offset_minutes),m.unit&&(u=!0,b=f.getNumber(m.num),v=f.getUnitIndex(m.unit),g=ni.units[v],c(),m.shift&&(b*=(C=f.modifiersByName[m.shift])?C.value:0),m.sign&&(C=f.modifiersByName[m.sign])&&(b*=C.value),p(m.weekday)&&(l.set({weekday:m.weekday},!0),delete m.weekday),m[g]=(m[g]||0)+b),m.edge&&i(a),"-"===m.year_sign&&(m.year*=-1),Ht(function(e,t,n){var r=m[e],i=r%1;i&&(m[si[n-1].name]=Lr(i*("second"===e?1e3:60)),m[e]=Ir(r))},1,4),!1)):void 0}),m?u?l.advance(m):(l._utc&&l.reset(),an(l,m,!0,!1,n)):("now"!==e&&(l=new lr(e)),r&&l.addMinutes(-l.getTimezoneOffset())),o(),l.utc(!1)),{date:l,set:m}}function Wt(e){return 100*Lr(q(Mt(),"FullYear")/100)-100*Lr(e/100)+e}function Ut(e){e=e.clone();var t=q(e,"Day")||7;return e.addDays(4-t).reset(),1+Ir(e.daysSince(e.clone().beginningOfYear())/7)}function Vt(e){var t,n=Or(e),r=n,i=0;return Ht(function(e,o,s){t=Ir(T(n/o.multiplier(),1)),t>=1&&(r=t,i=s)},1),[r,i,e]}function Gt(e){var t=Vt(e.millisecondsFromNow());return Kt(e,t)&&(t[0]=Or(e.monthsFromNow()),t[1]=6),t}function Kt(e,t){return 6===t[1]||5===t[1]&&4===t[0]&&e.daysFromNow()>=Mt().daysInMonth()}function Jt(){var e=function(e,t){var n=q(e,"Hours");return Dt(t).ampm[Ir(n/12)]||""};Zt("t",e,1),Zt("tt",e),Zt("T",e,1,1),Zt("TT",e,null,2)}function Yt(){var e=function(e,t){var n=q(e,"Day");return Dt(t).weekdays[n]};Zt("dow",e,3),Zt("Dow",e,3,1),Zt("weekday",e),Zt("Weekday",e,null,1)}function Xt(){Qt("mon",0,3),Qt("month",0),Qt("month2",1),Qt("month3",2)}function Qt(e,t,n){var r=function(e,n){var r=q(e,"Month");return Dt(n).months[r+12*t]};Zt(e,r,n),Zt(Lt(e),r,n,1)}function Zt(e,t,n,r){gi[e]=function(e,i){var o=t(e,i);return n&&(o=o.slice(0,n)),r&&(o=o.slice(0,r).toUpperCase()+o.slice(r)),o}}function en(e,t,n){gi[e]=t,gi[e+e]=function(e,n){return L(t(e,n),2)},n&&(gi[e+e+e]=function(e,n){return L(t(e,n),3)},gi[e+e+e+e]=function(e,n){return L(t(e,n),4)})}function tn(e){var t=e.match(/(\{\w+\})|[^{}]+/g);mi[e]=t.map(function(e){return e.replace(/\{(\w+)\}/,function(t,n){return e=gi[n]||n,n}),e})}function nn(e,t,n){var r,i,o,s,a="";for(r=mi[t],o=0,i=r.length;i>o;o++)s=r[o],a+=Rr(s)?s(e,n):s;return a}function rn(e,t,n,r){var i;return e.isValid()?(Date[t]?t=Date[t]:Rr(t)&&(i=Gt(e),t=t.apply(e,i.concat(Dt(r)))),!t&&n?(i=i||Gt(e),0===i[1]&&(i[1]=1,i[0]=1),Dt(r).getRelativeFormat(i)):(t=t||"long",("short"===t||"long"===t||"full"===t)&&(t=Dt(r)[t]),mi[t]||tn(t),nn(e,t,r))):"Invalid Date"}function on(e,t,n,r,i){var o,s,a,c,l,u,h=0,d=0,f=0;return o=zt(t,n,null,i),r>0&&(d=f=r,l=!0),o.date.isValid()?(o.set&&o.set.specificity&&(vi.forEach(function(t){t.name===o.set.specificity&&(h=t.multiplier(o.date,e-o.date)-1)}),u=Lt(o.set.specificity),(o.set.edge||o.set.shift)&&o.date["beginningOf"+u](),"month"===o.set.specificity&&(c=o.date.clone()["endOf"+u]().getTime()),!l&&o.set.sign&&"millisecond"!=o.set.specificity&&(d=50,f=-50)),s=e.getTime(),a=o.date.getTime(),c=c||a+h,c=sn(e,a,c),s>=a-d&&c+f>=s):!1}function sn(e,t,n){var r,i,o,s;return r=new lr(t),i=new lr(n).utc(e.isUTC()),23!==q(i,"Hours")&&(o=r.getTimezoneOffset(),s=i.getTimezoneOffset(),o!==s&&(n+=(s-o).minutes())),n}function an(e,t,n,r,i){function o(e){return p(t[e])?t[e]:t[e+"s"]}function s(e){return p(o(e))}function a(e,t){return s(e)||t&&s("weekday")}function c(){switch(i){case-1:return e>Mt();case 1:return e<Mt()}}var l,u;if(Sr(t)&&r)t={milliseconds:t};else if(Sr(t))return e.setTime(t),e;if(p(t.date)&&(t.day=t.date),Ht(function(r,i,o){var c="day"===r;return a(r,c)?(t.specificity=r,u=+o,!1):void(!n||"week"===r||c&&s("week")||H(e,i.method,c?1:0))}),vi.forEach(function(n,i){{var a,c=n.name,l=n.method;vi[i-1]}a=o(c),m(a)||(r?("week"===c&&(a=(t.day||0)+7*a,l="Date"),a=a*r+q(e,l)):"month"===c&&s("day")&&H(e,"Date",15),H(e,l,a),r&&"month"===c&&ln(e,a))}),!r&&!s("day")&&s("weekday")){var l=o("weekday");e.setWeekday(l)}return c()&&Ht(function(t,n){var r=n.ambiguous||"week"===t&&s("weekday");return r&&!a(t,"day"===t)?(e[n.addMethod](i),!1):void 0},u+1),e}function cn(e,t,n){var r,i={h:0,m:1,s:2};return t=t||ni,e.replace(/{([a-z])}/g,function(e,o){var s=[],a="h"===o,c=a&&!n;return"t"===o?t.ampm.join("|"):(a&&s.push(":"),(r=t.timeSuffixes[i[o]])&&s.push(r+"\\s*"),0===s.length?"":"(?:"+s.join("|")+")"+(c?"":"?"))})}function ln(e,t){0>t&&(t=t%12+12),t%12!=q(e,"Month")&&H(e,"Date",0)}function un(e,t,n){var r,i;return Sr(e[1])?r=jt(e)[0]:(r=e[0],i=e[1]),zt(r,i,t,n).date}function hn(e){e.setTime(0/0)}function dn(){si=vi.concat().reverse(),oi=vi.concat(),oi.splice(2,1)}function fn(){a(lr,!0,!0,vi,function(e,t,n){function r(e){var n=e/c,r=n%1,i=t.error||.999;return r&&Or(r%1)>i&&(n=Lr(n)),0>n?Nr(n):Ir(n)}var i,o,s=t.name,a=Lt(s),c=t.multiplier();t.addMethod="add"+a+"s",i=function(e,t){return r(this.getTime()-lr.create(e,t).getTime())},o=function(e,t){return r(lr.create(e,t).getTime()-this.getTime())},e[s+"sAgo"]=o,e[s+"sUntil"]=o,e[s+"sSince"]=i,e[s+"sFromNow"]=i,e[t.addMethod]=function(e,t){var n={};return n[s]=e,this.advance(n,t)},_n(t,c),3>n&&["Last","This","Next"].forEach(function(t){e["is"+t+a]=function(){return on(this,t+" "+s,"en")}}),4>n&&(e["beginningOf"+a]=function(){var e={};switch(s){case"year":e.year=q(this,"FullYear");break;case"month":e.month=q(this,"Month");break;case"day":e.day=q(this,"Date");break;case"week":e.weekday=0}return this.set(e,!0)},e["endOf"+a]=function(){var e={hours:23,minutes:59,seconds:59,milliseconds:999};switch(s){case"year":e.month=11,e.day=31;break;case"month":e.day=this.daysInMonth();break;case"week":e.weekday=6}return this.set(e,!0)})})}function pn(){ni.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",!0,["year_sign","year","month","date"],!1,!0),ni.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",!0,["date","month","year"],!0),ni.addFormat("{full_month}[-.](\\d{4,4})",!1,["month","year"]),ni.addFormat("\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/",!1,["timestamp"]),ni.addFormat(cn(hi,ni),!1,ai),pi=ni.compiledFormats.slice(0,7).reverse(),ni.compiledFormats=ni.compiledFormats.slice(7).concat(pi)}function mn(){en("f",function(e){return q(e,"Milliseconds")},!0),en("s",function(e){return q(e,"Seconds")}),en("m",function(e){return q(e,"Minutes")}),en("h",function(e){return q(e,"Hours")%12||12}),en("H",function(e){return q(e,"Hours")}),en("d",function(e){return q(e,"Date")}),en("M",function(e){return q(e,"Month")+1}),Jt(),Yt(),Xt(),gi.ms=gi.f,gi.milliseconds=gi.f,gi.seconds=gi.s,gi.minutes=gi.m,gi.hours=gi.h,gi["24hr"]=gi.H,gi["12hr"]=gi.h,gi.date=gi.d,gi.day=gi.d,gi.year=gi.yyyy}function gn(){a(lr,!0,!0,"short,long,full",function(e,t){e[t]=function(e){return rn(this,t,!1,e)}})}function vn(){di.split("").forEach(function(e,t){t>9&&(t=Dr(10,t-9)),fi[e]=t}),S(fi,Ur),ii=cr("([期週周])?(["+di+Wr+"]+)(?!昨)","g")}function yn(){var e="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),t=ni.weekdays.slice(0,7),n=ni.months.slice(0,12);a(lr,!0,!0,e.concat(t).concat(n),function(e,t){e["is"+Lt(t)]=function(e){return this.is(t,0,e)}})}function wn(){lr.utc||(lr.utc={create:function(){return un(arguments,0,!0)},past:function(){return un(arguments,-1,!0)},future:function(){return un(arguments,1,!0)}})}function bn(){s(lr,!1,!0,{RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"})}function _n(e,t){function n(){return Lr(this*t)}function r(){return un(arguments)[e.addMethod](this)}function i(){return un(arguments)[e.addMethod](-this)}var o=e.name,s={};s[o]=n,s[o+"s"]=n,s[o+"Before"]=i,s[o+"sBefore"]=i,s[o+"Ago"]=i,s[o+"sAgo"]=i,s[o+"After"]=r,s[o+"sAfter"]=r,s[o+"FromNow"]=r,s[o+"sFromNow"]=r,hr.extend(s)}function Cn(e,t,n,r,i){1/0!==t&&(e.timers||(e.timers=[]),Sr(t)||(t=1),e._canceled=!1,e.timers.push(setTimeout(function(){e._canceled||n.apply(r,i||[])},t)))}function Sn(e,t,n,r,i,o){var s,a,c,l=e.toFixed(20),u=l.search(/\./),h=l.search(/[1-9]/),d=u-h;return d>0&&(d-=1),a=Mr(Pr(Ir(d/3),i===!1?n.length:i),-r),s=n.charAt(a+r-1),-9>d&&(a=-3,t=Or(d)-9,s=n.slice(0,1)),c=o?Dr(2,10*a):Dr(10,3*a),T(e/c,t||0).format()+s.trim()}function kn(){function e(e){return function(t){return t?T(this,t,e):e(this)}}s(hr,!0,!0,{ceil:e(Nr),round:e(Lr),floor:e(Ir)}),a(hr,!0,!0,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(e,t){e[t]=function(e,n){return dr[t](this,e,n)}})}function En(e,t,n,r){var i,o,s,a,c=/^(.+?)(\[.*\])$/;(o=t.match(c))?(a=o[1],s=o[2].replace(/^\[|\]$/g,"").split("]["),s.forEach(function(t){i=!t||t.match(/^\d+$/),!a&&Er(e)&&(a=e.length),v(e,a)||(e[a]=i?[]:{}),e=e[a],a=t}),!a&&i&&(a=e.length.toString()),En(e,a,n,r)):e[t]=r&&"true"===n?!0:r&&"false"===n?!1:n}function xn(e,t){var n;return Er(t)||y(t)&&t.toString===pr?(n=[],_(t,function(t,r){e&&(t=e+"["+t+"]"),n.push(xn(t,r))}),n.join("&")):e?Tn(e)+"="+(xr(t)?t.getTime():Tn(t)):""}function Tn(e){return e||e===!1||0===e?encodeURIComponent(e).replace(/%20/g,"+"):""}function Rn(e,t,n){return Tr(e)?e.test(t):y(e)?e[t]===n:t===ur(e)}function An(e,t,n){var r,i=e instanceof x?new x:{};return _(e,function(e,o){r=!1,d(t,function(t){Rn(t,e,o)&&(r=!0)},1),r===n&&(i[e]=o)}),i}function On(){a(sr,!1,!0,_r,function(e,t){var n="is"+t;wi.push(n),e[n]=wr[t]})}function Dn(){s(sr,!1,function(){return 0===arguments.length},{extend:function(){var e=wi.concat(bi);"undefined"!=typeof ti&&(e=e.concat(ti)),U(e,sr)}})}function Nn(e,t){this.start=Pn(e),this.end=Pn(t)}function In(e){return kr(e)?e.charCodeAt(0):e}function Ln(e){return null==e?e:xr(e)?e.getTime():e.valueOf()}function Pn(e){return xr(e)?new lr(e.getTime()):Ln(e)}function Mn(e){var t=Ln(e);return!!t||0===t}function jn(e){var t,n,r;return Sr(e)?e:(t=e.toLowerCase().match(/^(\d+)?\s?(\w+?)s?$/i),n=parseInt(t[1])||1,r=t[2].slice(0,1).toUpperCase()+t[2].slice(1),r.match(/hour|minute|second/i)?r+="s":"Year"===r?r="FullYear":"Day"===r&&(r="Date"),[n,r])}function qn(e,t){var n,r,i,o;return Sr(t)?new lr(e.getTime()+t):(n=t[0],r=t[1],i=q(e,r),o=new lr(e.getTime()),H(o,r,i+n),o)}function Hn(e,t){return ur.fromCharCode(e.charCodeAt(0)+t)}function Bn(e,t){return e+t}function Fn(e){var t=ur.Inflector,e=t&&t.acronyms[e];return kr(e)?e:void 0}function $n(e){if(e=+e,0>e||1/0===e)throw new RangeError("Invalid number");return e}function zn(e,t){return N(p(t)?t:" ",e)}function Wn(e,t,n,r,i){var o,s,a,c;if(e.length<=t)return e.toString();switch(r=m(r)?"...":r,n){case"left":return s=i?Un(e,t,!0):e.slice(e.length-t),r+s;case"middle":return a=Nr(t/2),c=Ir(t/2),o=i?Un(e,a):e.slice(0,a),s=i?Un(e,c,!0):e.slice(e.length-c),o+r+s;default:return o=i?Un(e,t):e.slice(0,t),o+r}}function Un(e,t,n){if(n)return Un(e.reverse(),t).reverse();var r=cr("(?=["+D()+"])"),i=e.split(r),o=0;return i.filter(function(e){return o+=e.length,t>=o}).join("")}function Vn(e,t,n){return kr(t)&&(t=e.indexOf(t),-1===t&&(t=n?e.length:0)),t}function Gn(e){if(fr.btoa)return _i=fr.btoa,void(Ci=fr.atob);var t=/[^A-Za-z0-9\+\/\=]/g;_i=function(t){var n,r,i,o,s,a,c,l="",u=0;do n=t.charCodeAt(u++),r=t.charCodeAt(u++),i=t.charCodeAt(u++),o=n>>2,s=(3&n)<<4|r>>4,a=(15&r)<<2|i>>6,c=63&i,isNaN(r)?a=c=64:isNaN(i)&&(c=64),l=l+e.charAt(o)+e.charAt(s)+e.charAt(a)+e.charAt(c),n=r=i="",o=s=a=c="";while(u<t.length);return l},Ci=function(n){var r,i,o,s,a,c,l,u="",h=0;if(n.match(t))throw new Error("String contains invalid base64 characters");n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");do s=e.indexOf(n.charAt(h++)),a=e.indexOf(n.charAt(h++)),c=e.indexOf(n.charAt(h++)),l=e.indexOf(n.charAt(h++)),r=s<<2|a>>4,i=(15&a)<<4|c>>2,o=(3&c)<<6|l,u+=O(r),64!=c&&(u+=O(i)),64!=l&&(u+=O(o)),r=i=o="",s=a=c=l="";while(h<n.length);return u}}function Kn(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}function Jn(e,t,n){kr(t)&&Kn(Ti,t),Kn(Ti,n),e.unshift({rule:t,replacement:n})}function Yn(e,t){return e==t||"all"==e||!e}function Xn(e){return Ti.some(function(t){return new cr("\\b"+t+"$","i").test(e)})}function Qn(e,t){return e=kr(e)?e.toString():"",e.isBlank()||Xn(e)?e:Zn(e,t?Ei:xi)}function Zn(e,t){return _(t,function(t,n){return e.match(n.rule)?(e=e.replace(n.rule,n.replacement),!1):void 0}),e}function er(e){return e.replace(/^\W*[a-z]/,function(e){return e.toUpperCase()})}function tr(){Di.forEach(function(e){var t=cr("^["+e.source+"\\s]+$"),n=cr("["+e.source+"]");e.names.forEach(function(e){u(ur.prototype,"is"+e,function(){return t.test(this.trim())}),u(ur.prototype,"has"+e,function(){return n.test(this)})})})}function nr(e,t,n,r){Oi||rr();var i=h(t).join(""),o=Oi[r];return i=i.replace(/all/,"").replace(/(\w)lphabet|umbers?|atakana|paces?|unctuation/g,"$1"),e.replace(n,function(e){return!o[e]||i&&!i.has(o[e].type)?e:o[e].to})}function rr(){var e;Oi={zenkaku:{},hankaku:{}},Ii.forEach(function(e){C(e.end-e.start+1,function(t){t+=e.start,ir(e.type,O(t),O(t+Ni))})}),Fi.each(function(t,n){e=Bi.charAt(n),ir("k",e,t),t.match(qi)&&ir("k",e+"ﾞ",t.shift(1)),t.match(Hi)&&ir("k",e+"ﾟ",t.shift(2))}),ji.each(function(e,t){ir("p",Mi.charAt(t),e)}),ir("k","ｳﾞ","ヴ"),ir("k","ｦﾞ","ヺ"),ir("s"," ","　")}function ir(e,t,n){Oi.zenkaku[t]={type:e,to:n},Oi.hankaku[n]={type:e,to:t}}var or,sr=Object,ar=Array,cr=RegExp,lr=Date,ur=String,hr=Number,dr=Math,fr="undefined"!=typeof global?global:this,pr=sr.prototype.toString,mr=sr.prototype.hasOwnProperty,gr=sr.defineProperty&&sr.defineProperties,vr="function"==typeof cr(),yr=!("0"in new ur("a")),wr={},br=/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/,_r="Boolean,Number,String,Array,Date,RegExp,Function".split(","),Cr=n("boolean",_r[0]),Sr=n("number",_r[1]),kr=n("string",_r[2]),Er=t(_r[3]),xr=t(_r[4]),Tr=t(_r[5]),Rr=t(_r[6]);x.prototype.constructor=sr;var Ar,Or=dr.abs,Dr=dr.pow,Nr=dr.ceil,Ir=dr.floor,Lr=dr.round,Pr=dr.min,Mr=dr.max,jr=48,qr=57,Hr=65296,Br=65305,Fr=".",$r="．",zr=",",Wr="",Ur={};i(),A(),s(sr,!1,!1,{keys:function(e){var t=[];if(!y(e)&&!Tr(e)&&!Rr(e))throw new TypeError("Object required");return _(e,function(e){t.push(e)}),t}}),s(ar,!1,!1,{isArray:function(e){return Er(e)}}),s(ar,!0,!1,{every:function(e,t){var n=this.length,r=0;for(J(arguments);n>r;){if(r in this&&!e.call(t,this[r],r,this))return!1;r++}return!0},some:function(e,t){var n=this.length,r=0;for(J(arguments);n>r;){if(r in this&&e.call(t,this[r],r,this))return!0;r++}return!1},map:function(e,t){var t=arguments[1],n=this.length,r=0,i=new Array(n);for(J(arguments);n>r;)r in this&&(i[r]=e.call(t,this[r],r,this)),r++;return i},filter:function(e){var t=arguments[1],n=this.length,r=0,i=[];for(J(arguments);n>r;)r in this&&e.call(t,this[r],r,this)&&i.push(this[r]),r++;return i},indexOf:function(e){var t=arguments[1];return kr(this)?this.indexOf(e,t):V(this,e,t,1)},lastIndexOf:function(e){var t=arguments[1];return kr(this)?this.lastIndexOf(e,t):V(this,e,t,-1)},forEach:function(e){var t=this.length,n=0,r=arguments[1];for(f(e);t>n;)n in this&&e.call(r,this[n],n,this),n++},reduce:function(e){return G(this,e,arguments[1])},reduceRight:function(e){return G(this,e,arguments[1],!0)}}),s(Function,!0,!1,{bind:function(e){var t,n=this,r=h(arguments,null,1);if(!Rr(this))throw new TypeError("Function.prototype.bind called on a non-function");return t=function(){return n.apply(n.prototype&&this instanceof n?this:e,r.concat(h(arguments)))},t.prototype=this.prototype,t}}),s(lr,!1,!1,{now:function(){return(new lr).getTime()}}),Y(),X();var Vr="AlphanumericSort",Gr="AlphanumericSortOrder",Kr="AlphanumericSortIgnore",Jr="AlphanumericSortIgnoreCase",Yr="AlphanumericSortEquivalents",Xr="AlphanumericSortNatural";s(ar,!1,!0,{create:function(){var e=[];return h(arguments,function(t){(mt(t)||pt(t))&&(t=ar.prototype.slice.call(t,0)),e=e.concat(t)}),e}}),s(ar,!0,!1,{find:function(e,t){return f(e),ut(this,e,0,!1,!1,t)},findIndex:function(e,t){var n;return f(e),n=ut(this,e,0,!1,!0,t),m(n)?-1:n}}),s(ar,!0,!0,{findFrom:function(e,t,n){return ut(this,e,t,n)},findIndexFrom:function(e,t,n){var t=ut(this,e,t,n,!0);return m(t)?-1:t},findAll:function(e,t,n){var r,i=[];return this.length>0&&(r=it(e),st(this,function(e,t,n){r(e,t,n)&&i.push(e)},t,n)),i},count:function(e){return m(e)?this.length:this.findAll(e).length},removeAt:function(e,t){return m(e)?this:(m(t)&&(t=e),this.splice(e,t-e+1),this)},include:function(e,t){return this.clone().add(e,t)},exclude:function(){return ar.prototype.remove.apply(this.clone(),arguments)},clone:function(){return S([],this)},unique:function(e){return ht(this,e)},flatten:function(e){return ft(this,e)},union:function(){return ht(this.concat(gt(arguments)))},intersect:function(){return dt(this,gt(arguments),!1)},subtract:function(){return dt(this,gt(arguments),!0)},at:function(){return z(this,arguments)},first:function(e){return m(e)?this[0]:(0>e&&(e=0),this.slice(0,e))},last:function(e){if(m(e))return this[this.length-1];var t=this.length-e<0?0:this.length-e;return this.slice(t)},from:function(e){return this.slice(e)},to:function(e){return m(e)&&(e=this.length),this.slice(0,e)},min:function(e,t){return bt(this,e,"min",t)},max:function(e,t){return bt(this,e,"max",t)},least:function(e,t){return bt(this.groupBy.apply(this,[e]),"length","min",t)},most:function(e,t){return bt(this.groupBy.apply(this,[e]),"length","max",t)},sum:function(e){var t=e?this.map(e):this;return t.length>0?t.reduce(function(e,t){return e+t}):0},average:function(e){var t=e?this.map(e):this;return t.length>0?t.sum()/t.length:0},inGroups:function(e,t){var n=arguments.length>1,r=this,i=[],o=Nr(this.length/e);return C(e,function(e){var s=e*o,a=r.slice(s,s+o);n&&a.length<o&&C(o-a.length,function(){a=a.add(t)}),i.push(a)}),i},inGroupsOf:function(e,t){var n,r=[],i=this.length,o=this;return 0===i||0===e?o:(m(e)&&(e=1),m(t)&&(t=null),C(Nr(i/e),function(i){for(n=o.slice(e*i,e*i+e);n.length<e;)n.push(t);
r.push(n)}),r)},isEmpty:function(){return 0==this.compact().length},sortBy:function(e,t){var n=this.clone();return n.sort(function(r,i){var o,s,a;return o=ot(r,e,n,[r]),s=ot(i,e,n,[i]),a=kr(o)&&kr(s)?_t(o,s):s>o?-1:o>s?1:0,a*(t?-1:1)}),n},randomize:function(){for(var e,t,n=this.concat(),r=n.length;r;)e=dr.random()*r|0,t=n[--r],n[r]=n[e],n[e]=t;return n},zip:function(){var e=h(arguments);return this.map(function(t,n){return[t].concat(e.map(function(e){return n in e?e[n]:null}))})},sample:function(e){var t=this.randomize();return arguments.length>0?t.slice(0,e):t[0]},each:function(e,t,n){return st(this,e,t,n),this},add:function(e,t){return(!Sr(hr(t))||isNaN(t))&&(t=this.length),ar.prototype.splice.apply(this,[t,0].concat(e)),this},remove:function(){var e=this;return h(arguments,function(t){for(var n=0,r=it(t);n<e.length;)r(e[n],n,e)?e.splice(n,1):n++}),e},compact:function(e){var t=[];return st(this,function(n){Er(n)?t.push(n.compact()):e&&n?t.push(n):e||null==n||n.valueOf()!==n.valueOf()||t.push(n)}),t},groupBy:function(e,t){var n,r=this,i={};return st(r,function(t,o){n=ot(t,e,r,[t,o,r]),i[n]||(i[n]=[]),i[n].push(t)}),t&&_(i,t),i},none:function(){return!this.any.apply(this,arguments)}}),s(ar,!0,!0,{all:ar.prototype.every,any:ar.prototype.some,insert:ar.prototype.add}),s(sr,!1,!0,{map:function(e,t){var n,r,i={};for(n in e)v(e,n)&&(r=e[n],i[n]=ot(r,t,e,[n,r,e]));return i},reduce:function(e){var t=Tt(e).map(function(t){return e[t]});return t.reduce.apply(t,h(arguments,null,1))},each:function(e,t){return f(t),_(e,t),e},size:function(e){return Tt(e).length}});var Qr="any,all,none,count,find,findAll,isEmpty".split(","),Zr="sum,average,min,max,least,most".split(","),ei="map,reduce,size".split(","),ti=Qr.concat(Zr).concat(ei);Et(),xt(),Rt(Qr),Rt(Zr,!0),U(ei,x),At();var ni,ri,ii,oi,si,ai=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],ci="(?:[,.]\\d+)?",li="\\d{1,2}"+ci,ui="[0-5]\\d"+ci,hi="({t})?\\s*("+li+")(?:{h}("+ui+")?{m}(?::?("+ui+"){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",di="〇一二三四五六七八九十百千万",fi={},pi=[],mi={},gi={yyyy:function(e){return q(e,"FullYear")},yy:function(e){return q(e,"FullYear")%100},ord:function(e){var t=q(e,"Date");return t+P(t)},tz:function(e){return e.getUTCOffset()},isotz:function(e){return e.getUTCOffset(!0)},Z:function(e){return e.getUTCOffset()},ZZ:function(e){return e.getUTCOffset().replace(/(\d{2})$/,":$1")}},vi=[{name:"year",method:"FullYear",ambiguous:!0,multiplier:function(e){var t=e?e.isLeapYear()?1:0:.25;return 24*(365+t)*60*60*1e3}},{name:"month",error:.919,method:"Month",ambiguous:!0,multiplier:function(e,t){var n,r=30.4375;return e&&(n=e.daysInMonth(),t<=n.days()&&(r=n)),24*r*60*60*1e3}},{name:"week",method:"ISOWeek",multiplier:function(){return 6048e5}},{name:"day",error:.958,method:"Date",ambiguous:!0,multiplier:function(){return 864e5}},{name:"hour",method:"Hours",multiplier:function(){return 36e5}},{name:"minute",method:"Minutes",multiplier:function(){return 6e4}},{name:"second",method:"Seconds",multiplier:function(){return 1e3}},{name:"millisecond",method:"Milliseconds",multiplier:function(){return 1}}],yi={};Ot.prototype={getMonth:function(e){return Sr(e)?e-1:this.months.indexOf(e)%12},getWeekday:function(e){return this.weekdays.indexOf(e)%7},getNumber:function(e){var t;return Sr(e)?e:e&&-1!==(t=this.numbers.indexOf(e))?(t+1)%10:1},getNumericDate:function(e){var t=this;return e.replace(cr(this.num,"g"),function(e){var n=t.getNumber(e);return n||""})},getUnitIndex:function(e){return this.units.indexOf(e)%8},getRelativeFormat:function(e){return this.convertAdjustedToFormat(e,e[2]>0?"future":"past")},getDuration:function(e){return this.convertAdjustedToFormat(Vt(e),"duration")},hasVariant:function(e){return e=e||this.code,"en"===e||"en-US"===e?!0:this.variant},matchAM:function(e){return e===this.ampm[0]},matchPM:function(e){return e&&e===this.ampm[1]},convertAdjustedToFormat:function(e,t){var n,r,i,o=e[0],s=e[1],a=e[2],c=this[t]||this.relative;return Rr(c)?c.call(this,o,s,a,t):(i=this.plural&&o>1?1:0,r=this.units[8*i+s]||this.units[s],this.capitalizeUnit&&(r=Lt(r)),n=this.modifiers.filter(function(e){return"sign"==e.name&&e.value==(a>0?1:-1)})[0],c.replace(/\{(.*?)\}/g,function(e,t){switch(t){case"num":return o;case"unit":return r;case"sign":return n.src}}))},getFormats:function(){return this.cachedFormat?[this.cachedFormat].concat(this.compiledFormats):this.compiledFormats},addFormat:function(e,t,n,r,i){var o,s,a,c=n||[],l=this;e=e.replace(/\s+/g,"[,. ]*"),e=e.replace(/\{([^,]+?)\}/g,function(e,t){var r,i,o,s=t.match(/\?$/),a=t.match(/^(\d+)\??$/),u=t.match(/(\d)(?:-(\d))?/),h=t.replace(/[^a-z]+$/,"");return a?r=l.tokens[a[1]]:l[h]?r=l[h]:l[h+"s"]&&(r=l[h+"s"],u&&(i=[],r.forEach(function(e,t){var n=t%(l.units?8:r.length);n>=u[1]&&n<=(u[2]||u[1])&&i.push(e)}),r=i),r=Pt(r)),a?o="(?:"+r+")":(n||c.push(h),o="("+r+")"),s&&(o+="?"),o}),t?(o=cn(hi,l,i),s=["t","[\\s\\u3000]"].concat(l.timeMarker),a=e.match(/\\d\{\d,\d\}\)+\??$/),It(l,"(?:"+o+")[,\\s\\u3000]+?"+e,ai.concat(c),r),It(l,e+"(?:[,\\s]*(?:"+s.join("|")+(a?"+":"*")+")"+o+")?",c.concat(ai),r)):It(l,e,c,r)}},s(lr,!1,!0,{create:function(){return un(arguments)},past:function(){return un(arguments,-1)},future:function(){return un(arguments,1)},addLocale:function(e,t){return Nt(e,t)},setLocale:function(e){var t=Dt(e,!1);return ri=t,e&&e!=t.code&&(t.code=e),t},getLocale:function(e){return e?Dt(e,!1):ri},addFormat:function(e,t,n){It(Dt(n),e,t)}}),s(lr,!0,!0,{set:function(){var e=jt(arguments);return an(this,e[0],e[1])},setWeekday:function(e){return m(e)?void 0:H(this,"Date",q(this,"Date")+e-q(this,"Day"))},setISOWeek:function(e){var t=q(this,"Day")||7;if(!m(e))return this.set({month:0,date:4}),this.set({weekday:1}),e>1&&this.addWeeks(e-1),1!==t&&this.advance({days:t-1}),this.getTime()},getISOWeek:function(){return Ut(this)},beginningOfISOWeek:function(){var e=this.getDay();return 0===e?e=-6:1!==e&&(e=1),this.setWeekday(e),this.reset()},endOfISOWeek:function(){return 0!==this.getDay()&&this.setWeekday(7),this.endOfDay()},getUTCOffset:function(e){var t=this._utc?0:this.getTimezoneOffset(),n=e===!0?":":"";return!t&&e?"Z":L(Ir(-t/60),2,!0)+n+L(Or(t%60),2)},utc:function(e){return u(this,"_utc",e===!0||0===arguments.length),this},isUTC:function(){return!!this._utc||0===this.getTimezoneOffset()},advance:function(){var e=jt(arguments,!0);return an(this,e[0],e[1],1)},rewind:function(){var e=jt(arguments,!0);return an(this,e[0],e[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(e,t){return this.getTime()>lr.create(e).getTime()-(t||0)},isBefore:function(e,t){return this.getTime()<lr.create(e).getTime()+(t||0)},isBetween:function(e,t,n){var r=this.getTime(),i=lr.create(e).getTime(),o=lr.create(t).getTime(),s=Pr(i,o),a=Mr(i,o);return n=n||0,r>s-n&&a+n>r},isLeapYear:function(){var e=q(this,"FullYear");return e%4===0&&e%100!==0||e%400===0},daysInMonth:function(){return 32-q(new lr(q(this,"FullYear"),q(this,"Month"),32),"Date")},format:function(e,t){return rn(this,e,!1,t)},relative:function(e,t){return kr(e)&&(t=e,e=null),rn(this,e,!0,t)},is:function(e,t,n){var r,i;if(this.isValid()){if(kr(e))switch(e=e.trim().toLowerCase(),i=this.clone().utc(n),!0){case"future"===e:return this.getTime()>Mt().getTime();case"past"===e:return this.getTime()<Mt().getTime();case"weekday"===e:return q(i,"Day")>0&&q(i,"Day")<6;case"weekend"===e:return 0===q(i,"Day")||6===q(i,"Day");case(r=ni.weekdays.indexOf(e)%7)>-1:return q(i,"Day")===r;case(r=ni.months.indexOf(e)%12)>-1:return q(i,"Month")===r}return on(this,e,null,t,n)}},reset:function(e){var t,n={};return e=e||"hours","date"===e&&(e="days"),t=vi.some(function(t){return e===t.name||e===t.name+"s"}),n[e]=e.match(/^days?/)?1:0,t?this.set(n,!0):this},clone:function(){var e=new lr(this.getTime());return e.utc(!!this._utc),e}}),s(lr,!0,!0,{iso:function(){return this.toISOString()},getWeekday:lr.prototype.getDay,getUTCWeekday:lr.prototype.getUTCDay}),s(hr,!0,!0,{duration:function(e){return Dt(e).getDuration(this)}}),ni=ri=lr.addLocale("en",{plural:!0,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{date} {month}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]}),dn(),fn(),pn(),mn(),gn(),vn(),yn(),wn(),bn(),Date.addLocale("da",{plural:!0,months:"januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december",weekdays:"søndag|sondag,mandag,tirsdag,onsdag,torsdag,fredag,lørdag|lordag",units:"millisekund:|er,sekund:|er,minut:|ter,tim:e|er,dag:|e,ug:e|er|en,måned:|er|en+maaned:|er|en,år:||et+aar:||et",numbers:"en|et,to,tre,fire,fem,seks,syv,otte,ni,ti",tokens:"den,for",articles:"den","short":"d. {d}. {month} {yyyy}","long":"den {d}. {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d}. {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"forgårs|i forgårs|forgaars|i forgaars",value:-2},{name:"day",src:"i går|igår|i gaar|igaar",value:-1},{name:"day",src:"i dag|idag",value:0},{name:"day",src:"i morgen|imorgen",value:1},{name:"day",src:"over morgon|overmorgen|i over morgen|i overmorgen|iovermorgen",value:2},{name:"sign",src:"siden",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i sidste|sidste",value:-1},{name:"shift",src:"denne",value:0},{name:"shift",src:"næste|naeste",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1?} {num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{0?} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]}),Date.addLocale("de",{plural:!0,capitalizeUnit:!0,months:"Januar,Februar,März|Marz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",weekdays:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",units:"Millisekunde:|n,Sekunde:|n,Minute:|n,Stunde:|n,Tag:|en,Woche:|n,Monat:|en,Jahr:|en",numbers:"ein:|e|er|en|em,zwei,drei,vier,fuenf,sechs,sieben,acht,neun,zehn",tokens:"der","short":"{d}. {Month} {yyyy}","long":"{d}. {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d}. {Month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"um",ampm:"am,pm",modifiers:[{name:"day",src:"vorgestern",value:-2},{name:"day",src:"gestern",value:-1},{name:"day",src:"heute",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"übermorgen|ubermorgen|uebermorgen",value:2},{name:"sign",src:"vor:|her",value:-1},{name:"sign",src:"in",value:1},{name:"shift",src:"letzte:|r|n|s",value:-1},{name:"shift",src:"nächste:|r|n|s+nachste:|r|n|s+naechste:|r|n|s+kommende:n|r",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("es",{plural:!0,months:"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre",weekdays:"domingo,lunes,martes,miércoles|miercoles,jueves,viernes,sábado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,día|días|dia|dias,semana:|s,mes:|es,año|años|ano|anos",numbers:"uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez",tokens:"el,la,de","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"a las",ampm:"am,pm",modifiers:[{name:"day",src:"anteayer",value:-2},{name:"day",src:"ayer",value:-1},{name:"day",src:"hoy",value:0},{name:"day",src:"mañana|manana",value:1},{name:"sign",src:"hace",value:-1},{name:"sign",src:"dentro de",value:1},{name:"shift",src:"pasad:o|a",value:-1},{name:"shift",src:"próximo|próxima|proximo|proxima",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{0?}{1?} {unit=5-7} {shift}","{0?}{1?} {shift} {unit=5-7}"],timeParse:["{shift} {weekday}","{weekday} {shift}","{date?} {2?} {month} {2?} {year?}"]}),Date.addLocale("fi",{plural:!0,timeMarker:"kello",ampm:",",months:"tammikuu,helmikuu,maaliskuu,huhtikuu,toukokuu,kesäkuu,heinäkuu,elokuu,syyskuu,lokakuu,marraskuu,joulukuu",weekdays:"sunnuntai,maanantai,tiistai,keskiviikko,torstai,perjantai,lauantai",units:"millisekun:ti|tia|teja|tina|nin,sekun:ti|tia|teja|tina|nin,minuut:ti|tia|teja|tina|in,tun:ti|tia|teja|tina|nin,päiv:ä|ää|iä|änä|än,viik:ko|koa|koja|on|kona,kuukau:si|sia|tta|den|tena,vuo:si|sia|tta|den|tena",numbers:"yksi|ensimmäinen,kaksi|toinen,kolm:e|as,neljä:s,vii:si|des,kuu:si|des,seitsemä:n|s,kahdeksa:n|s,yhdeksä:n|s,kymmene:n|s",articles:"",optionals:"","short":"{d}. {month}ta {yyyy}","long":"{d}. {month}ta {yyyy} kello {H}.{mm}",full:"{Weekday}na {d}. {month}ta {yyyy} kello {H}.{mm}",relative:function(e,t,n,r){function i(n){return(1===e?"":e+" ")+o[8*n+t]}var o=this.units;switch(r){case"duration":return i(0);case"past":return i(e>1?1:0)+" sitten";case"future":return i(4)+" päästä"}},modifiers:[{name:"day",src:"toissa päivänä|toissa päiväistä",value:-2},{name:"day",src:"eilen|eilistä",value:-1},{name:"day",src:"tänään",value:0},{name:"day",src:"huomenna|huomista",value:1},{name:"day",src:"ylihuomenna|ylihuomista",value:2},{name:"sign",src:"sitten|aiemmin",value:-1},{name:"sign",src:"päästä|kuluttua|myöhemmin",value:1},{name:"edge",src:"viimeinen|viimeisenä",value:-2},{name:"edge",src:"lopussa",value:-1},{name:"edge",src:"ensimmäinen|ensimmäisenä",value:1},{name:"shift",src:"edellinen|edellisenä|edeltävä|edeltävänä|viime|toissa",value:-1},{name:"shift",src:"tänä|tämän",value:0},{name:"shift",src:"seuraava|seuraavana|tuleva|tulevana|ensi",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{num} {unit=4-5} {sign} {day}","{month} {year}","{shift} {unit=5-7}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1} {year?}","{date} {month} {year}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2} {shift} week","{0} {date}{1} of {month}","{0}{month?} {date?}{1} of {shift} {unit=6-7}"]}),Date.addLocale("fr",{plural:!0,months:"janvier,février|fevrier,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre|decembre",weekdays:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi",units:"milliseconde:|s,seconde:|s,minute:|s,heure:|s,jour:|s,semaine:|s,mois,an:|s|née|nee",numbers:"un:|e,deux,trois,quatre,cinq,six,sept,huit,neuf,dix",tokens:"l'|la|le","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"à",ampm:"am,pm",modifiers:[{name:"day",src:"hier",value:-1},{name:"day",src:"aujourd'hui",value:0},{name:"day",src:"demain",value:1},{name:"sign",src:"il y a",value:-1},{name:"sign",src:"dans|d'ici",value:1},{name:"shift",src:"derni:èr|er|ère|ere",value:-1},{name:"shift",src:"prochain:|e",value:1}],dateParse:["{sign} {num} {unit}","{sign} {num} {unit}","{0?} {unit=5-7} {shift}"],timeParse:["{weekday?} {0?} {date?} {month} {year?}","{0?} {weekday} {shift}"]}),Date.addLocale("it",{plural:!0,months:"Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre",weekdays:"Domenica,Luned:ì|i,Marted:ì|i,Mercoled:ì|i,Gioved:ì|i,Venerd:ì|i,Sabato",units:"millisecond:o|i,second:o|i,minut:o|i,or:a|e,giorn:o|i,settiman:a|e,mes:e|i,ann:o|i",numbers:"un:|a|o|',due,tre,quattro,cinque,sei,sette,otto,nove,dieci",tokens:"l'|la|il","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"alle",ampm:"am,pm",modifiers:[{name:"day",src:"ieri",value:-1},{name:"day",src:"oggi",value:0},{name:"day",src:"domani",value:1},{name:"day",src:"dopodomani",value:2},{name:"sign",src:"fa",value:-1},{name:"sign",src:"da adesso",value:1},{name:"shift",src:"scors:o|a",value:-1},{name:"shift",src:"prossim:o|a",value:1}],dateParse:["{num} {unit} {sign}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("ja",{monthSuffix:"月",weekdays:"日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日",units:"ミリ秒,秒,分,時間,日,週間|週,ヶ月|ヵ月|月,年","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {H}時{mm}分",full:"{yyyy}年{M}月{d}日 {Weekday} {H}時{mm}分{ss}秒",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"時,分,秒",ampm:"午前,午後",modifiers:[{name:"day",src:"一昨日",value:-2},{name:"day",src:"昨日",value:-1},{name:"day",src:"今日",value:0},{name:"day",src:"明日",value:1},{name:"day",src:"明後日",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"後",value:1},{name:"shift",src:"去|先",value:-1},{name:"shift",src:"来",value:1}],dateParse:["{num}{unit}{sign}"],timeParse:["{shift}{unit=5-7}{weekday?}","{year}年{month?}月?{date?}日?","{month}月{date?}日?","{date}日"]}),Date.addLocale("ko",{digitDate:!0,monthSuffix:"월",weekdays:"일요일,월요일,화요일,수요일,목요일,금요일,토요일",units:"밀리초,초,분,시간,일,주,개월|달,년",numbers:"일|한,이,삼,사,오,육,칠,팔,구,십","short":"{yyyy}년{M}월{d}일","long":"{yyyy}년{M}월{d}일 {H}시{mm}분",full:"{yyyy}년{M}월{d}일 {Weekday} {H}시{mm}분{ss}초",past:"{num}{unit} {sign}",future:"{num}{unit} {sign}",duration:"{num}{unit}",timeSuffixes:"시,분,초",ampm:"오전,오후",modifiers:[{name:"day",src:"그저께",value:-2},{name:"day",src:"어제",value:-1},{name:"day",src:"오늘",value:0},{name:"day",src:"내일",value:1},{name:"day",src:"모레",value:2},{name:"sign",src:"전",value:-1},{name:"sign",src:"후",value:1},{name:"shift",src:"지난|작",value:-1},{name:"shift",src:"이번",value:0},{name:"shift",src:"다음|내",value:1}],dateParse:["{num}{unit} {sign}","{shift?} {unit=5-7}"],timeParse:["{shift} {unit=5?} {weekday}","{year}년{month?}월?{date?}일?","{month}월{date?}일?","{date}일"]}),Date.addLocale("nl",{plural:!0,months:"januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december",weekdays:"zondag|zo,maandag|ma,dinsdag|di,woensdag|woe|wo,donderdag|do,vrijdag|vrij|vr,zaterdag|za",units:"milliseconde:|n,seconde:|n,minu:ut|ten,uur,dag:|en,we:ek|ken,maand:|en,jaar",numbers:"een,twee,drie,vier,vijf,zes,zeven,acht,negen",tokens:"","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"'s|om",modifiers:[{name:"day",src:"gisteren",value:-1},{name:"day",src:"vandaag",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"overmorgen",value:2},{name:"sign",src:"geleden",value:-1},{name:"sign",src:"vanaf nu",value:1},{name:"shift",src:"laatste|vorige|afgelopen",value:-1},{name:"shift",src:"volgend:|e",value:1}],dateParse:["{num} {unit} {sign}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("pl",{plural:!0,months:"Styczeń|Stycznia,Luty|Lutego,Marzec|Marca,Kwiecień|Kwietnia,Maj|Maja,Czerwiec|Czerwca,Lipiec|Lipca,Sierpień|Sierpnia,Wrzesień|Września,Październik|Października,Listopad|Listopada,Grudzień|Grudnia",weekdays:"Niedziela|Niedzielę,Poniedziałek,Wtorek,Środ:a|ę,Czwartek,Piątek,Sobota|Sobotę",units:"milisekund:a|y|,sekund:a|y|,minut:a|y|,godzin:a|y|,dzień|dni,tydzień|tygodnie|tygodni,miesiące|miesiące|miesięcy,rok|lata|lat",numbers:"jeden|jedną,dwa|dwie,trzy,cztery,pięć,sześć,siedem,osiem,dziewięć,dziesięć",optionals:"w|we,roku","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday}, {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"o",ampm:"am,pm",modifiers:[{name:"day",src:"przedwczoraj",value:-2},{name:"day",src:"wczoraj",value:-1},{name:"day",src:"dzisiaj|dziś",value:0},{name:"day",src:"jutro",value:1},{name:"day",src:"pojutrze",value:2},{name:"sign",src:"temu|przed",value:-1},{name:"sign",src:"za",value:1},{name:"shift",src:"zeszły|zeszła|ostatni|ostatnia",value:-1},{name:"shift",src:"następny|następna|następnego|przyszły|przyszła|przyszłego",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}","{0} {shift?} {weekday}"],timeParse:["{date} {month} {year?} {1}","{0} {shift?} {weekday}"]}),Date.addLocale("pt",{plural:!0,months:"janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro",weekdays:"domingo,segunda-feira,terça-feira,quarta-feira,quinta-feira,sexta-feira,sábado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,dia:|s,semana:|s,mês|mêses|mes|meses,ano:|s",numbers:"um,dois,três|tres,quatro,cinco,seis,sete,oito,nove,dez,uma,duas",tokens:"a,de","short":"{d} de {month} de {yyyy}","long":"{d} de {month} de {yyyy} {H}:{mm}",full:"{Weekday}, {d} de {month} de {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"às",ampm:"am,pm",modifiers:[{name:"day",src:"anteontem",value:-2},{name:"day",src:"ontem",value:-1},{name:"day",src:"hoje",value:0},{name:"day",src:"amanh:ã|a",value:1},{name:"sign",src:"atrás|atras|há|ha",value:-1},{name:"sign",src:"daqui a",value:1},{name:"shift",src:"passad:o|a",value:-1},{name:"shift",src:"próximo|próxima|proximo|proxima",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{date?} {1?} {month} {1?} {year?}","{0?} {shift} {weekday}"]}),Date.addLocale("ru",{months:"Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь",weekdays:"Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота",units:"миллисекунд:а|у|ы|,секунд:а|у|ы|,минут:а|у|ы|,час:||а|ов,день|день|дня|дней,недел:я|ю|и|ь|е,месяц:||а|ев|е,год|год|года|лет|году",numbers:"од:ин|ну,дв:а|е,три,четыре,пять,шесть,семь,восемь,девять,десять",tokens:"в|на,года","short":"{d} {month} {yyyy} года","long":"{d} {month} {yyyy} года {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} года {H}:{mm}:{ss}",relative:function(e,t,n,r){var i,o,s=e.toString().slice(-1);switch(!0){case e>=11&&15>=e:o=3;break;case 1==s:o=1;break;case s>=2&&4>=s:o=2;break;default:o=3}switch(i=e+" "+this.units[8*o+t],r){case"duration":return i;case"past":return i+" назад";case"future":return"через "+i}},timeMarker:"в",ampm:" утра, вечера",modifiers:[{name:"day",src:"позавчера",value:-2},{name:"day",src:"вчера",value:-1},{name:"day",src:"сегодня",value:0},{name:"day",src:"завтра",value:1},{name:"day",src:"послезавтра",value:2},{name:"sign",src:"назад",value:-1},{name:"sign",src:"через",value:1},{name:"shift",src:"прошл:ый|ой|ом",value:-1},{name:"shift",src:"следующ:ий|ей|ем",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{0?} {shift} {unit=5-7}"],timeParse:["{date} {month} {year?} {1?}","{0?} {shift} {weekday}"]}),Date.addLocale("sv",{plural:!0,months:"januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december",weekdays:"söndag|sondag,måndag:|en+mandag:|en,tisdag,onsdag,torsdag,fredag,lördag|lordag",units:"millisekund:|er,sekund:|er,minut:|er,timm:e|ar,dag:|ar,veck:a|or|an,månad:|er|en+manad:|er|en,år:||et+ar:||et",numbers:"en|ett,två|tva,tre,fyra,fem,sex,sju,åtta|atta,nio,tio",tokens:"den,för|for",articles:"den","short":"den {d} {month} {yyyy}","long":"den {d} {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"förrgår|i förrgår|iförrgår|forrgar|i forrgar|iforrgar",value:-2},{name:"day",src:"går|i går|igår|gar|i gar|igar",value:-1},{name:"day",src:"dag|i dag|idag",value:0},{name:"day",src:"morgon|i morgon|imorgon",value:1},{name:"day",src:"över morgon|övermorgon|i över morgon|i övermorgon|iövermorgon|over morgon|overmorgon|i over morgon|i overmorgon|iovermorgon",value:2},{name:"sign",src:"sedan|sen",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i förra|förra|i forra|forra",value:-1},{name:"shift",src:"denna",value:0},{name:"shift",src:"nästa|nasta",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1?} {num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{0?} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]}),Date.addLocale("zh-CN",{variant:!0,monthSuffix:"月",weekdays:"星期日|周日,星期一|周一,星期二|周二,星期三|周三,星期四|周四,星期五|周五,星期六|周六",units:"毫秒,秒钟,分钟,小时,天,个星期|周,个月,年",tokens:"日|号","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {tt}{h}:{mm}",full:"{yyyy}年{M}月{d}日 {weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"点|时,分钟?,秒",ampm:"上午,下午",modifiers:[{name:"day",src:"前天",value:-2},{name:"day",src:"昨天",value:-1},{name:"day",src:"今天",value:0},{name:"day",src:"明天",value:1},{name:"day",src:"后天",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"后",value:1},{name:"shift",src:"上|去",value:-1},{name:"shift",src:"这",value:0},{name:"shift",src:"下|明",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}年{month?}月?{date?}{0?}","{month}月{date?}{0?}","{date}[日号]"]}),Date.addLocale("zh-TW",{monthSuffix:"月",weekdays:"星期日|週日,星期一|週一,星期二|週二,星期三|週三,星期四|週四,星期五|週五,星期六|週六",units:"毫秒,秒鐘,分鐘,小時,天,個星期|週,個月,年",tokens:"日|號","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {tt}{h}:{mm}",full:"{yyyy}年{M}月{d}日 {Weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"點|時,分鐘?,秒",ampm:"上午,下午",modifiers:[{name:"day",src:"前天",value:-2},{name:"day",src:"昨天",value:-1},{name:"day",src:"今天",value:0},{name:"day",src:"明天",value:1},{name:"day",src:"後天",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"後",value:1},{name:"shift",src:"上|去",value:-1},{name:"shift",src:"這",value:0},{name:"shift",src:"下|明",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}年{month?}月?{date?}{0?}","{month}月{date?}{0?}","{date}[日號]"]}),s(Function,!0,!0,{lazy:function(e,t,n){function r(){return l.length<n-(u&&t?1:0)&&l.push([this,arguments]),u||(u=!0,t?i():Cn(r,o,i)),a}var i,o,s,a,c=this,l=[],u=!1;return e=e||1,n=n||1/0,o=Nr(e),s=Lr(o/e)||1,i=function(){var e,t=l.length;if(0!=t){for(e=Mr(t-s,0);t>e;)a=Function.prototype.apply.apply(c,l.shift()),t--;Cn(r,o,function(){u=!1,i()})}},r},throttle:function(e){return this.lazy(e,!0,1)},debounce:function(e){function t(){t.cancel(),Cn(t,e,n,this,arguments)}var n=this;return t},delay:function(e){var t=this,n=h(arguments,null,1);return Cn(t,e,t,t,n),t},every:function(e){function t(){n.apply(n,r),Cn(n,e,t)}var n=this,r=arguments;return r=r.length>1?h(r,null,1):[],Cn(n,e,t),n},cancel:function(){var e,t=this.timers;if(Er(t))for(;e=t.shift();)clearTimeout(e);return this._canceled=!0,this},after:function(e){var t=this,n=0,r=[];if(Sr(e)){if(0===e)return t.call(),t}else e=1;return function(){var i;return r.push(h(arguments)),n++,n==e?(i=t.call(this,r),n=0,r=[],i):void 0}},once:function(){return this.throttle(1/0,!0)},fill:function(){var e=this,t=h(arguments);return function(){var n=h(arguments);return t.forEach(function(e,t){(null!=e||t>=n.length)&&n.splice(t,0,e)}),e.apply(this,n)}}}),s(hr,!1,!0,{random:function(e,t){var n,r;return 1==arguments.length&&(t=e,e=0),n=Pr(e||0,m(t)?1:t),r=Mr(e||0,m(t)?1:t)+1,Ir(dr.random()*(r-n)+n)}}),s(hr,!0,!0,{log:function(e){return dr.log(this)/(e?dr.log(e):1)},abbr:function(e){return Sn(this,e,"kmbt",0,4)},metric:function(e,t){return Sn(this,e,"nμm kMGTPE",4,m(t)?1:t)},bytes:function(e,t){return Sn(this,e,"kMGTPE",0,m(t)?4:t,!0)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(e){return this%e===0},format:function(e,t,n){var r,i,o,s,a,c="";for(m(t)&&(t=","),m(n)&&(n="."),i=(Sr(e)?T(this,e||0).toFixed(Mr(e,0)):this.toString()).replace(/^-/,""),o=i.split("."),s=o[0],a=o[1],r=s.length;r>0;r-=3)r<s.length&&(c=t+c),c=s.slice(Mr(0,r-3),r)+c;return a&&(c+=n+N("0",(e||0)-a.length)+a),(0>this?"-":"")+c},hex:function(e){return this.pad(e||1,!1,16)},times:function(e){if(e)for(var t=0;this>t;t++)e.call(this,t);return this.toNumber()},chr:function(){return ur.fromCharCode(this)},pad:function(e,t,n){return L(this,e,t,n)},ordinalize:function(){var e=Or(this),t=parseInt(e.toString().slice(-2));return this+P(t)},toNumber:function(){return parseFloat(this,10)}}),kn();var wi="isObject,isNaN".split(","),bi="keys,values,select,reject,each,merge,clone,equal,watch,tap,has,toQueryString".split(",");s(sr,!1,!0,{watch:function(e,t,n){if(gr){var r=e[t];sr.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return r},set:function(i){r=n.call(e,t,r,i)}})}}}),s(sr,!1,function(){return arguments.length>1},{keys:function(e,t){var n=sr.keys(e);return n.forEach(function(n){t.call(e,n,e[n])}),n}}),s(sr,!1,!0,{isObject:function(e){return b(e)},isNaN:function(e){return Sr(e)&&e.valueOf()!==e.valueOf()},equal:function(e,t){return F(e,t)},extended:function(e){return new x(e)},merge:function(e,t,n,r){var i,o,s,a,c,l,u;if(e&&"string"!=typeof t)for(i in t)if(v(t,i)&&e){if(a=t[i],c=e[i],l=p(c),o=y(a),s=y(c),u=l&&r===!1?c:a,l&&Rr(r)&&(u=r.call(t,i,c,a)),n&&(o||s))if(xr(a))u=new lr(a.getTime());else{if(!Tr(a)){s||(e[i]=ar.isArray(a)?[]:{}),sr.merge(e[i],a,n,r);continue}u=new cr(a.source,M(a))}e[i]=u}return e},values:function(e,t){var n=[];return _(e,function(r,i){n.push(i),t&&t.call(e,i)}),n},clone:function(e,t){var n,i;if(!y(e))return e;if(i=r(e),xr(e,i)&&e.clone)return e.clone();if(xr(e,i)||Tr(e,i))return new e.constructor(e);if(e instanceof x)n=new x;else if(Er(e,i))n=[];else{if(!b(e,i))throw new TypeError("Clone must be a basic data type.");n={}}return sr.merge(n,e,t)},fromQueryString:function(e,t){var n=sr.extended();return e=e&&e.toString?e.toString():"",e.replace(/^.*?\?/,"").split("&").forEach(function(e){var r=e.split("=");2===r.length&&En(n,r[0],decodeURIComponent(r[1]),t)}),n},toQueryString:function(e,t){return xn(t,e)},tap:function(e,t){var n=t;return Rr(t)||(n=function(){t&&e[t]()}),n.call(e,e),e},has:function(e,t){return v(e,t)},select:function(e){return An(e,arguments,!0)},reject:function(e){return An(e,arguments,!1)}}),On(),Dn(),U(bi,x),Nn.prototype.toString=function(){return this.isValid()?this.start+".."+this.end:"Invalid Range"},s(Nn,!0,!0,{isValid:function(){return Mn(this.start)&&Mn(this.end)&&typeof this.start==typeof this.end},span:function(){return this.isValid()?Or(In(this.end)-In(this.start))+1:0/0},contains:function(e){return null==e?!1:e.start&&e.end?e.start>=this.start&&e.start<=this.end&&e.end>=this.start&&e.end<=this.end:e>=this.start&&e<=this.end},every:function(e,t){var n,r=this.start,i=this.end,o=r>i,s=r,a=0,c=[];for(Rr(e)&&(t=e,e=null),e=e||1,Sr(r)?n=Bn:kr(r)?n=Hn:xr(r)&&(e=jn(e),n=qn),o&&e>0&&(e*=-1);o?s>=i:i>=s;)c.push(s),t&&t(s,a),s=n(s,e),a++;
return c},union:function(e){return new Nn(this.start<e.start?this.start:e.start,this.end>e.end?this.end:e.end)},intersect:function(e){return e.start>this.end||e.end<this.start?new Nn(0/0,0/0):new Nn(this.start>e.start?this.start:e.start,this.end<e.end?this.end:e.end)},clone:function(){return new Nn(this.start,this.end)},clamp:function(e){var t,n=this.start,r=this.end,i=n>r?r:n,o=n>r?n:r;return t=i>e?i:e>o?o:e,Pn(t)}}),[hr,ur,lr].forEach(function(e){s(e,!1,!0,{range:function(t,n){return e.create&&(t=e.create(t),n=e.create(n)),new Nn(t,n)}})}),s(hr,!0,!0,{upto:function(e,t,n){return hr.range(this,e).every(n,t)},clamp:function(e,t){return new Nn(e,t).clamp(this)},cap:function(e){return this.clamp(or,e)}}),s(hr,!0,!0,{downto:hr.prototype.upto}),s(ar,!1,function(e){return e instanceof Nn},{create:function(e){return e.every()}}),s(cr,!1,!0,{escape:function(e){return j(e)}}),s(cr,!0,!0,{getFlags:function(){return M(this)},setFlags:function(e){return cr(this.source,e)},addFlag:function(e){return this.setFlags(M(this,e))},removeFlag:function(e){return this.setFlags(M(this).replace(e,""))}});var _i,Ci;s(ur,!0,!1,{repeat:function(e){return e=$n(e),N(this,e)}}),s(ur,!0,function(e){return Tr(e)||arguments.length>2},{startsWith:function(e){var t,n=arguments,r=n[1],i=n[2],o=this;return r&&(o=o.slice(r)),m(i)&&(i=!0),t=Tr(e)?e.source.replace("^",""):j(e),cr("^"+t,i?"":"i").test(o)},endsWith:function(e){var t,n=arguments,r=n[1],i=n[2],o=this;return p(r)&&(o=o.slice(0,r)),m(i)&&(i=!0),t=Tr(e)?e.source.replace("$",""):j(e),cr(t+"$",i?"":"i").test(o)}}),s(ur,!0,!0,{escapeRegExp:function(){return j(this)},escapeURL:function(e){return e?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(e){return e?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#x2f;/g,"/").replace(/&amp;/g,"&")},encodeBase64:function(){return _i(unescape(encodeURIComponent(this)))},decodeBase64:function(){return decodeURIComponent(escape(Ci(this)))},each:function(e,t){var n,r,i;if(Rr(e)?(t=e,e=/[\s\S]/g):e?kr(e)?e=cr(j(e),"gi"):Tr(e)&&(e=cr(e.source,M(e,"g"))):e=/[\s\S]/g,n=this.match(e)||[],t)for(r=0,i=n.length;i>r;r++)n[r]=t.call(this,n[r],r,n)||n[r];return n},shift:function(e){var t="";return e=e||0,this.codes(function(n){t+=O(n+e)}),t},codes:function(e){var t,n,r=[];for(t=0,n=this.length;n>t;t++){var i=this.charCodeAt(t);r.push(i),e&&e.call(this,i,t)}return r},chars:function(e){return this.each(e)},words:function(e){return this.trim().each(/\S+/g,e)},lines:function(e){return this.trim().each(/^.*$/gm,e)},paragraphs:function(e){var t=this.trim().split(/[\r\n]{2,}/);return t=t.map(function(t){if(e)var n=e.call(t);return n?n:t})},isBlank:function(){return 0===this.trim().length},has:function(e){return-1!==this.search(Tr(e)?e:j(e))},add:function(e,t){return t=m(t)?this.length:t,this.slice(0,t)+e+this.slice(t)},remove:function(e){return this.replace(e,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s　])+/g,function(e,t){return"　"===t?t:" "})},at:function(){return z(this,arguments,!0)},from:function(e){return this.slice(Vn(this,e,!0))},to:function(e){return m(e)&&(e=this.length),this.slice(0,Vn(this,e))},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(ur.Inflector&&ur.Inflector.acronymRegExp,function(e,t){return(t>0?"_":"")+e.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(e){return this.underscore().replace(/(^|_)([^_]+)/g,function(t,n,r,i){var o=Fn(r),s=e!==!1||i>0;return o?s?o:o.toLowerCase():s?r.capitalize():r})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var e=this,t=arguments.length>0?arguments:[""];return d(t,function(t){e=e.replace(cr("</?"+j(t)+"[^<>]*>","gi"),"")}),e},removeTags:function(){var e=this,t=arguments.length>0?arguments:["\\S+"];return d(t,function(t){var n=cr("<("+t+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");e=e.replace(n,"")}),e},truncate:function(e,t,n){return Wn(this,e,t,n)},truncateOnWord:function(e,t,n){return Wn(this,e,t,n,!0)},pad:function(e,t){var n,r,i;return e=$n(e),n=Mr(0,e-this.length)/2,r=Ir(n),i=Nr(n),zn(r,t)+this+zn(i,t)},padLeft:function(e,t){return e=$n(e),zn(Mr(0,e-this.length),t)+this},padRight:function(e,t){return e=$n(e),this+zn(Mr(0,e-this.length),t)},first:function(e){return m(e)&&(e=1),this.substr(0,e)},last:function(e){m(e)&&(e=1);var t=this.length-e<0?0:this.length-e;return this.substr(t)},toNumber:function(e){return I(this,e)},capitalize:function(e){var t;return this.toLowerCase().replace(e?/[^']/g:/^\S/,function(e){var n,r=e.toUpperCase();return n=t?e:r,t=r!==e,n})},assign:function(){var e={};return d(arguments,function(t,n){y(t)?S(e,t):e[n+1]=t}),this.replace(/\{([^{]+?)\}/g,function(t,n){return v(e,n)?e[n]:t})}}),s(ur,!0,!0,{insert:ur.prototype.add}),Gn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");var Si,ki,Ei=[],xi=[],Ti=[],Ri=[],Ai={};ki={acronym:function(e){Ai[e.toLowerCase()]=e;var t=sr.keys(Ai).map(function(e){return Ai[e]});ki.acronymRegExp=cr(t.join("|"),"g")},plural:function(e,t){Jn(Ei,e,t)},singular:function(e,t){Jn(xi,e,t)},irregular:function(e,t){var n=e.first(),r=e.from(1),i=t.first(),o=t.from(1),s=i.toUpperCase(),a=i.toLowerCase(),c=n.toUpperCase(),l=n.toLowerCase();Kn(Ti,e),Kn(Ti,t),c==s?(ki.plural(new cr("({1}){2}$".assign(n,r),"i"),"$1"+o),ki.plural(new cr("({1}){2}$".assign(i,o),"i"),"$1"+o),ki.singular(new cr("({1}){2}$".assign(i,o),"i"),"$1"+r)):(ki.plural(new cr("{1}{2}$".assign(c,r)),s+o),ki.plural(new cr("{1}{2}$".assign(l,r)),a+o),ki.plural(new cr("{1}{2}$".assign(s,o)),s+o),ki.plural(new cr("{1}{2}$".assign(a,o)),a+o),ki.singular(new cr("{1}{2}$".assign(s,o)),c+r),ki.singular(new cr("{1}{2}$".assign(a,o)),l+r))},uncountable:function(e){var t=ar.isArray(e)?e:h(arguments);Ti=Ti.concat(t)},human:function(e,t){Ri.unshift({rule:e,replacement:t})},clear:function(e){Yn(e,"singulars")&&(xi=[]),Yn(e,"plurals")&&(Ei=[]),Yn(e,"uncountables")&&(Ti=[]),Yn(e,"humans")&&(Ri=[]),Yn(e,"acronyms")&&(Ai={})}},Si=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"],ki.plural(/$/,"s"),ki.plural(/s$/gi,"s"),ki.plural(/(ax|test)is$/gi,"$1es"),ki.plural(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1i"),ki.plural(/(census|alias|status)$/gi,"$1es"),ki.plural(/(bu)s$/gi,"$1ses"),ki.plural(/(buffal|tomat)o$/gi,"$1oes"),ki.plural(/([ti])um$/gi,"$1a"),ki.plural(/([ti])a$/gi,"$1a"),ki.plural(/sis$/gi,"ses"),ki.plural(/f+e?$/gi,"ves"),ki.plural(/(cuff|roof)$/gi,"$1s"),ki.plural(/([ht]ive)$/gi,"$1s"),ki.plural(/([^aeiouy]o)$/gi,"$1es"),ki.plural(/([^aeiouy]|qu)y$/gi,"$1ies"),ki.plural(/(x|ch|ss|sh)$/gi,"$1es"),ki.plural(/(matr|vert|ind)(?:ix|ex)$/gi,"$1ices"),ki.plural(/([ml])ouse$/gi,"$1ice"),ki.plural(/([ml])ice$/gi,"$1ice"),ki.plural(/^(ox)$/gi,"$1en"),ki.plural(/^(oxen)$/gi,"$1"),ki.plural(/(quiz)$/gi,"$1zes"),ki.plural(/(phot|cant|hom|zer|pian|portic|pr|quart|kimon)o$/gi,"$1os"),ki.plural(/(craft)$/gi,"$1"),ki.plural(/([ft])[eo]{2}(th?)$/gi,"$1ee$2"),ki.singular(/s$/gi,""),ki.singular(/([pst][aiu]s)$/gi,"$1"),ki.singular(/([aeiouy])ss$/gi,"$1ss"),ki.singular(/(n)ews$/gi,"$1ews"),ki.singular(/([ti])a$/gi,"$1um"),ki.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/gi,"$1$2sis"),ki.singular(/(^analy)ses$/gi,"$1sis"),ki.singular(/(i)(f|ves)$/i,"$1fe"),ki.singular(/([aeolr]f?)(f|ves)$/i,"$1f"),ki.singular(/([ht]ive)s$/gi,"$1"),ki.singular(/([^aeiouy]|qu)ies$/gi,"$1y"),ki.singular(/(s)eries$/gi,"$1eries"),ki.singular(/(m)ovies$/gi,"$1ovie"),ki.singular(/(x|ch|ss|sh)es$/gi,"$1"),ki.singular(/([ml])(ous|ic)e$/gi,"$1ouse"),ki.singular(/(bus)(es)?$/gi,"$1"),ki.singular(/(o)es$/gi,"$1"),ki.singular(/(shoe)s?$/gi,"$1"),ki.singular(/(cris|ax|test)[ie]s$/gi,"$1is"),ki.singular(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1us"),ki.singular(/(census|alias|status)(es)?$/gi,"$1"),ki.singular(/^(ox)(en)?/gi,"$1"),ki.singular(/(vert|ind)(ex|ices)$/gi,"$1ex"),ki.singular(/(matr)(ix|ices)$/gi,"$1ix"),ki.singular(/(quiz)(zes)?$/gi,"$1"),ki.singular(/(database)s?$/gi,"$1"),ki.singular(/ee(th?)$/gi,"oo$1"),ki.irregular("person","people"),ki.irregular("man","men"),ki.irregular("child","children"),ki.irregular("sex","sexes"),ki.irregular("move","moves"),ki.irregular("save","saves"),ki.irregular("cow","kine"),ki.irregular("goose","geese"),ki.irregular("zombie","zombies"),ki.uncountable("equipment,information,rice,money,species,series,fish,sheep,jeans".split(",")),s(ur,!0,!0,{pluralize:function(){return Qn(this,!0)},singularize:function(){return Qn(this,!1)},humanize:function(){var e,t=Zn(this,Ri);return t=t.replace(/_id$/g,""),t=t.replace(/(_)?([a-z\d]*)/gi,function(t,n,r){return e=v(Ai,r)?Ai[r]:null,(n?" ":"")+(e||r.toLowerCase())}),er(t)},titleize:function(){var e,t,n,r=/[.:;!]$/;return this.spacify().humanize().words(function(i,o,s){return e=r.test(i),n=0==o||o==s.length-1||e||t,t=e,n||-1===Si.indexOf(i)?er(i):i}).join(" ")},parameterize:function(e){var t=this;return void 0===e&&(e="-"),t.normalize&&(t=t.normalize()),t=t.replace(/[^a-z0-9\-_]+/gi,e),e&&(t=t.replace(new cr("^{sep}+|{sep}+$|({sep}){sep}+".assign({sep:j(e)}),"g"),"$1")),encodeURI(t.toLowerCase())}}),ur.Inflector=ki,ur.Inflector.acronyms=Ai;var Oi,Di=[{names:["Arabic"],source:"؀-ۿ"},{names:["Cyrillic"],source:"Ѐ-ӿ"},{names:["Devanagari"],source:"ऀ-ॿ"},{names:["Greek"],source:"Ͱ-Ͽ"},{names:["Hangul"],source:"가-힯ᄀ-ᇿ"},{names:["Han","Kanji"],source:"一-鿿豈-﫿"},{names:["Hebrew"],source:"֐-׿"},{names:["Hiragana"],source:"぀-ゟ・-ー"},{names:["Kana"],source:"぀-ヿ｡-ﾟ"},{names:["Katakana"],source:"゠-ヿ｡-ﾟ"},{names:["Latin"],source:"--ÿĀ-ſƀ-ɏ"},{names:["Thai"],source:"฀-๿"}],Ni=65248,Ii=[{type:"a",start:65,end:90},{type:"a",start:97,end:122},{type:"n",start:48,end:57},{type:"p",start:33,end:47},{type:"p",start:58,end:64},{type:"p",start:91,end:96},{type:"p",start:123,end:126}],Li=/[\u0020-\u00A5]|[\uFF61-\uFF9F][ﾞﾟ]?/g,Pi=/[\u3000-\u301C]|[\u301A-\u30FC]|[\uFF01-\uFF60]|[\uFFE0-\uFFE6]/g,Mi="｡､｢｣¥¢£",ji="。、「」￥￠￡",qi=/[カキクケコサシスセソタチツテトハヒフヘホ]/,Hi=/[ハヒフヘホヲ]/,Bi="ｱｲｳｴｵｧｨｩｪｫｶｷｸｹｺｻｼｽｾｿﾀﾁﾂｯﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔｬﾕｭﾖｮﾗﾘﾙﾚﾛﾜｦﾝｰ･",Fi="アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー・";s(ur,!0,!0,{hankaku:function(){return nr(this,arguments,Pi,"hankaku")},zenkaku:function(){return nr(this,arguments,Li,"zenkaku")},hiragana:function(e){var t=this;return e!==!1&&(t=t.zenkaku("k")),t.replace(/[\u30A1-\u30F6]/g,function(e){return e.shift(-96)})},katakana:function(){return this.replace(/[\u3041-\u3096]/g,function(e){return e.shift(96)})}}),tr()}();

/*jQuery 2.1.3*/
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=Z.type(e);return"function"===n||Z.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return V.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=pt[e]={};return Z.each(e.match(ft)||[],function(e,n){t[n]=!0}),t}function s(){Y.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function c(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(bt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:wt.test(n)?Z.parseJSON(n):n}catch(i){}yt.set(e,t,n)}else n=void 0;return n}function u(){return!0}function l(){return!1}function h(){try{return Y.activeElement}catch(e){}}function d(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function f(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function p(e){var t=Mt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,r=e.length;r>n;n++)vt.set(e[n],"globalEval",!t||vt.get(t[n],"globalEval"))}function g(e,t){var n,r,i,o,s,a,c,u;if(1===t.nodeType){if(vt.hasData(e)&&(o=vt.access(e),s=vt.set(t,o),u=o.events)){delete s.handle,s.events={};for(i in u)for(n=0,r=u[i].length;r>n;n++)Z.event.add(t,i,u[i][n])}yt.hasData(e)&&(a=yt.access(e),c=Z.extend({},a),yt.set(t,c))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&kt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function w(t,n){var r,i=Z(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Z.css(i[0],"display");return i.detach(),o}function b(e){var t=Y,n=Bt[e];return n||(n=w(e,t),"none"!==n&&n||(Ht=(Ht||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ht[0].contentDocument,t.write(),t.close(),n=w(e,t),Ht.detach()),Bt[e]=n),n}function C(e,t,n){var r,i,o,s,a=e.style;return n=n||zt(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),$t.test(s)&&Ft.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function _(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function S(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Jt.length;i--;)if(t=Jt[i]+n,t in e)return t;return r}function k(e,t,n){var r=Ut.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function x(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+_t[o],!0,i)),r?("content"===n&&(s-=Z.css(e,"padding"+_t[o],!0,i)),"margin"!==n&&(s-=Z.css(e,"border"+_t[o]+"Width",!0,i))):(s+=Z.css(e,"padding"+_t[o],!0,i),"padding"!==n&&(s+=Z.css(e,"border"+_t[o]+"Width",!0,i)));return s}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=zt(e),s="border-box"===Z.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=C(e,t,o),(0>i||null==i)&&(i=e.style[t]),$t.test(i))return i;r=s&&(X.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+x(e,t,n||(s?"border":"content"),r,o)+"px"}function T(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=vt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&St(r)&&(o[s]=vt.access(r,"olddisplay",b(r.nodeName)))):(i=St(r),"none"===n&&i||vt.set(r,"olddisplay",i?n:Z.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function R(e,t,n,r,i){return new R.prototype.init(e,t,n,r,i)}function A(){return setTimeout(function(){Xt=void 0}),Xt=Z.now()}function O(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=_t[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function D(e,t,n){for(var r,i=(nn[t]||[]).concat(nn["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function N(e,t,n){var r,i,o,s,a,c,u,l,h=this,d={},f=e.style,p=e.nodeType&&St(e),m=vt.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,c=a.empty.fire,a.empty.fire=function(){a.unqueued||c()}),a.unqueued++,h.always(function(){h.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],u=Z.css(e,"display"),l="none"===u?vt.get(e,"olddisplay")||b(e.nodeName):u,"inline"===l&&"none"===Z.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Qt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;p=!0}d[r]=m&&m[r]||Z.style(e,r)}else u=void 0;if(Z.isEmptyObject(d))"inline"===("none"===u?b(e.nodeName):u)&&(f.display=u);else{m?"hidden"in m&&(p=m.hidden):m=vt.access(e,"fxshow",{}),o&&(m.hidden=!p),p?Z(e).show():h.done(function(){Z(e).hide()}),h.done(function(){var t;vt.remove(e,"fxshow");for(t in d)Z.style(e,t,d[t])});for(r in d)s=D(p?m[r]:0,r,h),r in m||(m[r]=s.start,p&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function L(e,t){var n,r,i,o,s;for(n in e)if(r=Z.camelCase(n),i=t[r],o=e[n],Z.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=Z.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function I(e,t,n){var r,i,o=0,s=tn.length,a=Z.Deferred().always(function(){delete c.elem}),c=function(){if(i)return!1;for(var t=Xt||A(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,s=0,c=u.tweens.length;c>s;s++)u.tweens[s].run(o);return a.notifyWith(e,[u,o,n]),1>o&&c?n:(a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xt||A(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Z.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?a.resolveWith(e,[u,t]):a.rejectWith(e,[u,t]),this}}),l=u.props;for(L(l,u.opts.specialEasing);s>o;o++)if(r=tn[o].call(u,e,l,u.opts))return r;return Z.map(l,D,u),Z.isFunction(u.opts.start)&&u.opts.start.call(e,u),Z.fx.timer(Z.extend(c,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ft)||[];if(Z.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function M(e,t,n,r){function i(a){var c;return o[a]=!0,Z.each(e[a]||[],function(e,a){var u=a(t,n,r);return"string"!=typeof u||s||o[u]?s?!(c=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),c}var o={},s=e===bn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function j(e,t){var n,r,i=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Z.extend(!0,e,r),e}function q(e,t,n){for(var r,i,o,s,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==c[0]&&c.unshift(o),n[o]):void 0}function H(e,t,n,r){var i,o,s,a,c,u={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(s=u[c+" "+o]||u["* "+o],!s)for(i in u)if(a=i.split(" "),a[1]===o&&(s=u[c+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[i]:u[i]!==!0&&(o=a[0],l.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(h){return{state:"parsererror",error:s?h:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}function B(e,t,n,r){var i;if(Z.isArray(t))Z.each(t,function(t,i){n||xn.test(e)?r(e,i):B(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Z.type(t))r(e,t);else for(i in t)B(e+"["+i+"]",t[i],n,r)}function F(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var $=[],z=$.slice,W=$.concat,U=$.push,V=$.indexOf,G={},K=G.toString,J=G.hasOwnProperty,X={},Y=e.document,Q="2.1.3",Z=function(e,t){return new Z.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,rt=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:Q,constructor:Z,selector:"",length:0,toArray:function(){return z.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:z.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(z.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:$.sort,splice:$.splice},Z.extend=Z.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===c&&(s=this,a--);c>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(u&&r&&(Z.isPlainObject(r)||(i=Z.isArray(r)))?(i?(i=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(u,o,r)):void 0!==r&&(s[t]=r));return s},Z.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==Z.type(e)||e.nodeType||Z.isWindow(e)?!1:e.constructor&&!J.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?G[K.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=Y.createElement("script"),t.text=e,Y.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,rt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Z.merge(r,"string"==typeof e?[e]:e):U.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:V.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),c=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&c.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&c.push(i);return W.apply([],c)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(r=z.call(arguments,2),i=function(){return e.apply(t||this,r.concat(z.call(arguments)))},i.guid=e.guid=e.guid||Z.guid++,i):void 0},now:Date.now,support:X}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()});var it=function(e){function t(e,t,n,r){var i,o,s,a,c,u,h,f,p,m;if((t?t.ownerDocument||t:B)!==N&&D(t),t=t||N,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!r&&I){if(11!==a&&(i=yt.exec(e)))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&q(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&C.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(s)),n}if(C.qsa&&(!P||!P.test(e))){if(f=h=H,p=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(u=x(e),(h=t.getAttribute("id"))?f=h.replace(bt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",c=u.length;c--;)u[c]=f+d(u[c]);p=wt.test(e)&&l(t.parentNode)||t,m=u.join(",")}if(m)try{return Q.apply(n,p.querySelectorAll(m)),n}catch(g){}finally{h||t.removeAttribute("id")}}}return T(e.replace(ct,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>_.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[H]=!0,e}function i(e){var t=N.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)_.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function c(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function h(){}function d(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=$++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,c,u=[F,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(c=t[H]||(t[H]={}),(a=c[r])&&a[0]===F&&a[1]===o)return u[2]=a[2];if(c[r]=u,u[2]=e(t,n,s))return!0}}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,s=[],a=0,c=e.length,u=null!=t;c>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),u&&t.push(a));return s}function v(e,t,n,i,o,s){return i&&!i[H]&&(i=v(i)),o&&!o[H]&&(o=v(o,s)),r(function(r,s,a,c){var u,l,h,d=[],f=[],p=s.length,v=r||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:g(v,d,e,a,c),w=n?o||(r?e:p||i)?[]:s:y;if(n&&n(y,w,a,c),i)for(u=g(w,f),i(u,[],a,c),l=u.length;l--;)(h=u[l])&&(w[f[l]]=!(y[f[l]]=h));if(r){if(o||e){if(o){for(u=[],l=w.length;l--;)(h=w[l])&&u.push(y[l]=h);o(null,w=[],u,c)}for(l=w.length;l--;)(h=w[l])&&(u=o?et(r,h):d[l])>-1&&(r[u]=!(s[u]=h))}}else w=g(w===s?w.splice(p,w.length):w),o?o(null,s,w,c):Q.apply(s,w)})}function y(e){for(var t,n,r,i=e.length,o=_.relative[e[0].type],s=o||_.relative[" "],a=o?1:0,c=f(function(e){return e===t},s,!0),u=f(function(e){return et(t,e)>-1},s,!0),l=[function(e,n,r){var i=!o&&(r||n!==R)||((t=n).nodeType?c(e,n,r):u(e,n,r));return t=null,i}];i>a;a++)if(n=_.relative[e[a].type])l=[f(p(l),n)];else{if(n=_.filter[e[a].type].apply(null,e[a].matches),n[H]){for(r=++a;i>r&&!_.relative[e[r].type];r++);return v(a>1&&p(l),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ct,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&d(e))}l.push(n)}return p(l)}function w(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,c,u){var l,h,d,f=0,p="0",m=r&&[],v=[],y=R,w=r||o&&_.find.TAG("*",u),b=F+=null==y?1:Math.random()||.1,C=w.length;for(u&&(R=s!==N&&s);p!==C&&null!=(l=w[p]);p++){if(o&&l){for(h=0;d=e[h++];)if(d(l,s,a)){c.push(l);break}u&&(F=b)}i&&((l=!d&&l)&&f--,r&&m.push(l))}if(f+=p,i&&p!==f){for(h=0;d=n[h++];)d(m,v,s,a);if(r){if(f>0)for(;p--;)m[p]||v[p]||(v[p]=X.call(c));v=g(v)}Q.apply(c,v),u&&!r&&v.length>0&&f+n.length>1&&t.uniqueSort(c)}return u&&(F=b,R=y),m};return i?r(s):s}var b,C,_,S,k,x,E,T,R,A,O,D,N,L,I,P,M,j,q,H="sizzle"+1*new Date,B=e.document,F=0,$=0,z=n(),W=n(),U=n(),V=function(e,t){return e===t&&(O=!0),0},G=1<<31,K={}.hasOwnProperty,J=[],X=J.pop,Y=J.push,Q=J.push,Z=J.slice,et=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},tt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",rt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",it=rt.replace("w","w#"),ot="\\["+nt+"*("+rt+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",st=":("+rt+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),ct=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ut=new RegExp("^"+nt+"*,"+nt+"*"),lt=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ht=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(st),ft=new RegExp("^"+it+"$"),pt={ID:new RegExp("^#("+rt+")"),CLASS:new RegExp("^\\.("+rt+")"),TAG:new RegExp("^("+rt.replace("w","w*")+")"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+tt+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wt=/[+~]/,bt=/'|\\/g,Ct=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),_t=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},St=function(){D()};try{Q.apply(J=Z.call(B.childNodes),B.childNodes),J[B.childNodes.length].nodeType}catch(kt){Q={apply:J.length?function(e,t){Y.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}C=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:B;return r!==N&&9===r.nodeType&&r.documentElement?(N=r,L=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",St,!1):n.attachEvent&&n.attachEvent("onunload",St)),I=!k(r),C.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),C.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),C.getElementsByClassName=vt.test(r.getElementsByClassName),C.getById=i(function(e){return L.appendChild(e).id=H,!r.getElementsByName||!r.getElementsByName(H).length}),C.getById?(_.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&I){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},_.filter.ID=function(e){var t=e.replace(Ct,_t);return function(e){return e.getAttribute("id")===t}}):(delete _.find.ID,_.filter.ID=function(e){var t=e.replace(Ct,_t);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),_.find.TAG=C.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):C.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},_.find.CLASS=C.getElementsByClassName&&function(e,t){return I?t.getElementsByClassName(e):void 0},M=[],P=[],(C.qsa=vt.test(r.querySelectorAll))&&(i(function(e){L.appendChild(e).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+nt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+nt+"*(?:value|"+tt+")"),e.querySelectorAll("[id~="+H+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+H+"+*").length||P.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+nt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(C.matchesSelector=vt.test(j=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&i(function(e){C.disconnectedMatch=j.call(e,"div"),j.call(e,"[s!='']:x"),M.push("!=",st)}),P=P.length&&new RegExp(P.join("|")),M=M.length&&new RegExp(M.join("|")),t=vt.test(L.compareDocumentPosition),q=t||vt.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return O=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!C.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===B&&q(B,e)?-1:t===r||t.ownerDocument===B&&q(B,t)?1:A?et(A,e)-et(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return O=!0,0;var n,i=0,o=e.parentNode,a=t.parentNode,c=[e],u=[t];if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:A?et(A,e)-et(A,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)c.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;c[i]===u[i];)i++;return i?s(c[i],u[i]):c[i]===B?-1:u[i]===B?1:0},r):N},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==N&&D(e),n=n.replace(ht,"='$1']"),!(!C.matchesSelector||!I||M&&M.test(n)||P&&P.test(n)))try{var r=j.call(e,n);if(r||C.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,N,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==N&&D(e),q(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==N&&D(e);var n=_.attrHandle[t.toLowerCase()],r=n&&K.call(_.attrHandle,t.toLowerCase())?n(e,t,!I):void 0;return void 0!==r?r:C.attributes||!I?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(O=!C.detectDuplicates,A=!C.sortStable&&e.slice(0),e.sort(V),O){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},S=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=S(t);return n},_=t.selectors={cacheLength:50,createPseudo:r,match:pt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ct,_t),e[3]=(e[3]||e[4]||e[5]||"").replace(Ct,_t),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&dt.test(n)&&(t=x(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ct,_t).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+nt+")"+e+"("+nt+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(at," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var u,l,h,d,f,p,m=o!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!c&&!a;if(g){if(o){for(;m;){for(h=t;h=h[m];)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[s?g.firstChild:g.lastChild],s&&y){for(l=g[H]||(g[H]={}),u=l[e]||[],f=u[0]===F&&u[1],d=u[0]===F&&u[2],h=f&&g.childNodes[f];h=++f&&h&&h[m]||(d=f=0)||p.pop();)if(1===h.nodeType&&++d&&h===t){l[e]=[F,f,d];break}}else if(y&&(u=(t[H]||(t[H]={}))[e])&&u[0]===F)d=u[1];else for(;(h=++f&&h&&h[m]||(d=f=0)||p.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++d||(y&&((h[H]||(h[H]={}))[e]=[F,d]),h!==t)););return d-=i,d===r||d%r===0&&d/r>=0}}},PSEUDO:function(e,n){var i,o=_.pseudos[e]||_.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[H]?o(n):o.length>1?(i=[e,e,"",n],_.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=et(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(ct,"$1"));return i[H]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(Ct,_t),function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),lang:r(function(e){return ft.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ct,_t).toLowerCase(),function(t){var n;do if(n=I?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!_.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},_.pseudos.nth=_.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})_.pseudos[b]=c(b);return h.prototype=_.filters=_.pseudos,_.setFilters=new h,x=t.tokenize=function(e,n){var r,i,o,s,a,c,u,l=W[e+" "];if(l)return n?0:l.slice(0);for(a=e,c=[],u=_.preFilter;a;){(!r||(i=ut.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),c.push(o=[])),r=!1,(i=lt.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ct," ")}),a=a.slice(r.length));for(s in _.filter)!(i=pt[s].exec(a))||u[s]&&!(i=u[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):W(e,c).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=x(e)),n=t.length;n--;)o=y(t[n]),o[H]?r.push(o):i.push(o);o=U(e,w(i,r)),o.selector=e}return o},T=t.select=function(e,t,n,r){var i,o,s,a,c,u="function"==typeof e&&e,h=!r&&x(e=u.selector||e);if(n=n||[],1===h.length){if(o=h[0]=h[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&C.getById&&9===t.nodeType&&I&&_.relative[o[1].type]){if(t=(_.find.ID(s.matches[0].replace(Ct,_t),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?0:o.length;i--&&(s=o[i],!_.relative[a=s.type]);)if((c=_.find[a])&&(r=c(s.matches[0].replace(Ct,_t),wt.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return Q.apply(n,r),n;break}}return(u||E(e,h))(r,t,!I,n,wt.test(e)&&l(t.parentNode)||t),n},C.sortStable=H.split("").sort(V).join("")===H,C.detectDuplicates=!!O,D(),C.sortDetached=i(function(e){return 1&e.compareDocumentPosition(N.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),C.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(tt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Z.find=it,Z.expr=it.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=it.uniqueSort,Z.text=it.getText,Z.isXMLDoc=it.isXML,Z.contains=it.contains;var ot=Z.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Z.find.matchesSelector(r,e)?[r]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(i[t],this))return!0
}));for(t=0;n>t;t++)Z.find(e,i[t],r);return r=this.pushStack(n>1?Z.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ot.test(e)?Z(e):e||[],!1).length}});var ct,ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=Z.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ut.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ct).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:Y,!0)),st.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=Y.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Y,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof ct.ready?ct.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};lt.prototype=Z.fn,ct=Z(Y);var ht=/^(?:parents|prev(?:Until|All))/,dt={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Z(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ot.test(e)||"string"!=typeof e?Z(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Z.unique(o):o)},index:function(e){return e?"string"==typeof e?V.call(Z(e),this[0]):V.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,r){var i=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Z.filter(r,i)),this.length>1&&(dt[e]||Z.unique(i),ht.test(e)&&i.reverse()),this.pushStack(i)}});var ft=/\S+/g,pt={};Z.Callbacks=function(e){e="string"==typeof e?pt[e]||o(e):Z.extend({},e);var t,n,r,i,s,a,c=[],u=!e.once&&[],l=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=c.length,r=!0;c&&s>a;a++)if(c[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,c&&(u?u.length&&l(u.shift()):t?c=[]:h.disable())},h={add:function(){if(c){var n=c.length;!function o(t){Z.each(t,function(t,n){var r=Z.type(n);"function"===r?e.unique&&h.has(n)||c.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?s=c.length:t&&(i=n,l(t))}return this},remove:function(){return c&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,c,n))>-1;)c.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,c)>-1:!(!c||!c.length)},empty:function(){return c=[],s=0,this},disable:function(){return c=u=t=void 0,this},disabled:function(){return!c},lock:function(){return u=void 0,t||h.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!c||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!n}};return h},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,r):r}},i={};return r.pipe=r.then,Z.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=z.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,c=1===a?e:Z.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?z.call(arguments):i,r===t?c.notifyWith(n,r):--a||c.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&Z.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(c.reject).progress(u(i,n,t)):--a;return a||c.resolveWith(r,o),c.promise()}});var mt;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(mt.resolveWith(Y,[Z]),Z.fn.triggerHandler&&(Z(Y).triggerHandler("ready"),Z(Y).off("ready"))))}}),Z.ready.promise=function(t){return mt||(mt=Z.Deferred(),"complete"===Y.readyState?setTimeout(Z.ready):(Y.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),mt.promise(t)},Z.ready.promise();var gt=Z.access=function(e,t,n,r,i,o,s){var a=0,c=e.length,u=null==n;if("object"===Z.type(n)){i=!0;for(a in n)Z.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,Z.isFunction(r)||(s=!0),u&&(s?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(Z(e),n)})),t))for(;c>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:u?t.call(e):c?t(e[0],n):o};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Z.isEmptyObject(o))Z.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Z.isArray(t)?r=t.concat(t.map(Z.camelCase)):(i=Z.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(ft)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var vt=new a,yt=new a,wt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bt=/([A-Z])/g;Z.extend({hasData:function(e){return yt.hasData(e)||vt.hasData(e)},data:function(e,t,n){return yt.access(e,t,n)},removeData:function(e,t){yt.remove(e,t)},_data:function(e,t,n){return vt.access(e,t,n)},_removeData:function(e,t){vt.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=yt.get(o),1===o.nodeType&&!vt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=Z.camelCase(r.slice(5)),c(o,r,i[r])));vt.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){yt.set(this,e)}):gt(this,function(t){var n,r=Z.camelCase(e);if(o&&void 0===t){if(n=yt.get(o,e),void 0!==n)return n;if(n=yt.get(o,r),void 0!==n)return n;if(n=c(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=yt.get(this,r);yt.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&yt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){yt.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=vt.get(e,t),n&&(!r||Z.isArray(n)?r=vt.access(e,t,Z.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),r=n.length,i=n.shift(),o=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return vt.get(e,n)||vt.access(e,n,{empty:Z.Callbacks("once memory").add(function(){vt.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Z.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=vt.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var Ct=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_t=["Top","Right","Bottom","Left"],St=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},kt=/^(?:checkbox|radio)$/i;!function(){var e=Y.createDocumentFragment(),t=e.appendChild(Y.createElement("div")),n=Y.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),X.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",X.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var xt="undefined";X.focusinBubbles="onfocusin"in e;var Et=/^key/,Tt=/^(?:mouse|pointer|contextmenu)|click/,Rt=/^(?:focusinfocus|focusoutblur)$/,At=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,r,i){var o,s,a,c,u,l,h,d,f,p,m,g=vt.get(e);if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Z.guid++),(c=g.events)||(c=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof Z!==xt&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ft)||[""],u=t.length;u--;)a=At.exec(t[u])||[],f=m=a[1],p=(a[2]||"").split(".").sort(),f&&(h=Z.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,h=Z.event.special[f]||{},l=Z.extend({type:f,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Z.expr.match.needsContext.test(i),namespace:p.join(".")},o),(d=c[f])||(d=c[f]=[],d.delegateCount=0,h.setup&&h.setup.call(e,r,p,s)!==!1||e.addEventListener&&e.addEventListener(f,s,!1)),h.add&&(h.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),Z.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,s,a,c,u,l,h,d,f,p,m,g=vt.hasData(e)&&vt.get(e);if(g&&(c=g.events)){for(t=(t||"").match(ft)||[""],u=t.length;u--;)if(a=At.exec(t[u])||[],f=m=a[1],p=(a[2]||"").split(".").sort(),f){for(h=Z.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,d=c[f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)l=d[o],!i&&m!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(d.splice(o,1),l.selector&&d.delegateCount--,h.remove&&h.remove.call(e,l));s&&!d.length&&(h.teardown&&h.teardown.call(e,p,g.handle)!==!1||Z.removeEvent(e,f,g.handle),delete c[f])}else for(f in c)Z.event.remove(e,f+t[u],n,r,!0);Z.isEmptyObject(c)&&(delete g.handle,vt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,c,u,l,h,d=[r||Y],f=J.call(t,"type")?t.type:t,p=J.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||Y,3!==r.nodeType&&8!==r.nodeType&&!Rt.test(f+Z.event.triggered)&&(f.indexOf(".")>=0&&(p=f.split("."),f=p.shift(),p.sort()),u=f.indexOf(":")<0&&"on"+f,t=t[Z.expando]?t:new Z.Event(f,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=p.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Z.makeArray(n,[t]),h=Z.event.special[f]||{},i||!h.trigger||h.trigger.apply(r,n)!==!1)){if(!i&&!h.noBubble&&!Z.isWindow(r)){for(c=h.delegateType||f,Rt.test(c+f)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(r.ownerDocument||Y)&&d.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)t.type=o>1?c:h.bindType||f,l=(vt.get(s,"events")||{})[t.type]&&vt.get(s,"handle"),l&&l.apply(s,n),l=u&&s[u],l&&l.apply&&Z.acceptData(s)&&(t.result=l.apply(s,n),t.result===!1&&t.preventDefault());return t.type=f,i||t.isDefaultPrevented()||h._default&&h._default.apply(d.pop(),n)!==!1||!Z.acceptData(r)||u&&Z.isFunction(r[f])&&!Z.isWindow(r)&&(a=r[u],a&&(r[u]=null),Z.event.triggered=f,r[f](),Z.event.triggered=void 0,a&&(r[u]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e);var t,n,r,i,o,s=[],a=z.call(arguments),c=(vt.get(this,"events")||{})[e.type]||[],u=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,c),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Z.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,c=e.target;if(a&&c.nodeType&&(!e.button||"click"!==e.type))for(;c!==this;c=c.parentNode||this)if(c.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Z(i,this).index(c)>=0:Z.find(i,this,null,[c]).length),r[i]&&r.push(o);r.length&&s.push({elem:c,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Y,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Tt.test(i)?this.mouseHooks:Et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=Y),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==h()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Z.event.trigger(i,null,t):Z.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?u:l):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=u,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!Z.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),X.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=vt.access(r,t);i||r.addEventListener(e,n,!0),vt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=vt.access(r,t)-1;i?vt.access(r,t,i):(r.removeEventListener(e,n,!0),vt.remove(r,t))}}}),Z.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=l;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Z().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Z(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=l),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var Ot=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Dt=/<([\w:]+)/,Nt=/<|&#?\w+;/,Lt=/<(?:script|style|link)/i,It=/checked\s*(?:[^=]|=\s*.checked.)/i,Pt=/^$|\/(?:java|ecma)script/i,Mt=/^true\/(.*)/,jt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,qt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qt.optgroup=qt.option,qt.tbody=qt.tfoot=qt.colgroup=qt.caption=qt.thead,qt.th=qt.td,Z.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),c=Z.contains(e.ownerDocument,e);if(!(X.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),o=v(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||v(e),s=s||v(a),r=0,i=o.length;i>r;r++)g(o[r],s[r]);else g(e,a);return s=v(a,"script"),s.length>0&&m(s,!c&&v(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,c,u,l=t.createDocumentFragment(),h=[],d=0,f=e.length;f>d;d++)if(i=e[d],i||0===i)if("object"===Z.type(i))Z.merge(h,i.nodeType?[i]:i);else if(Nt.test(i)){for(o=o||l.appendChild(t.createElement("div")),s=(Dt.exec(i)||["",""])[1].toLowerCase(),a=qt[s]||qt._default,o.innerHTML=a[1]+i.replace(Ot,"<$1></$2>")+a[2],u=a[0];u--;)o=o.lastChild;Z.merge(h,o.childNodes),o=l.firstChild,o.textContent=""}else h.push(t.createTextNode(i));for(l.textContent="",d=0;i=h[d++];)if((!r||-1===Z.inArray(i,r))&&(c=Z.contains(i.ownerDocument,i),o=v(l.appendChild(i),"script"),c&&m(o),n))for(u=0;i=o[u++];)Pt.test(i.type||"")&&n.push(i);return l},cleanData:function(e){for(var t,n,r,i,o=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(i=n[vt.expando],i&&(t=vt.cache[i]))){if(t.events)for(r in t.events)o[r]?Z.event.remove(n,r):Z.removeEvent(n,r,t.handle);vt.cache[i]&&delete vt.cache[i]}delete yt.cache[n[yt.expando]]}}}),Z.fn.extend({text:function(e){return gt(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Z.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return gt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Lt.test(e)&&!qt[(Dt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ot,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=W.apply([],e);var n,r,i,o,s,a,c=0,u=this.length,l=this,h=u-1,d=e[0],m=Z.isFunction(d);if(m||u>1&&"string"==typeof d&&!X.checkClone&&It.test(d))return this.each(function(n){var r=l.eq(n);m&&(e[0]=d.call(this,n,r.html())),r.domManip(e,t)});if(u&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Z.map(v(n,"script"),f),o=i.length;u>c;c++)s=n,c!==h&&(s=Z.clone(s,!0,!0),o&&Z.merge(i,v(s,"script"))),t.call(this[c],s,c);if(o)for(a=i[i.length-1].ownerDocument,Z.map(i,p),c=0;o>c;c++)s=i[c],Pt.test(s.type||"")&&!vt.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(jt,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,r=[],i=Z(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(i[s])[t](n),U.apply(r,n.get());return this.pushStack(r)}});var Ht,Bt={},Ft=/^margin/,$t=new RegExp("^("+Ct+")(?!px)[a-z%]+$","i"),zt=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=Y.documentElement,o=Y.createElement("div"),s=Y.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",X.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Z.extend(X,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(Y.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),s.removeChild(n),t}}))}(),Z.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var Wt=/^(none|table(?!-c[ea]).+)/,Ut=new RegExp("^("+Ct+")(.*)$","i"),Vt=new RegExp("^([+-])=("+Ct+")","i"),Gt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:"0",fontWeight:"400"},Jt=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=C(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z.camelCase(t),c=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=S(c,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:c[t]:(o=typeof n,"string"===o&&(i=Vt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Z.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||Z.cssNumber[a]||(n+="px"),X.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(c[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=S(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=C(e,t,r)),"normal"===i&&t in Kt&&(i=Kt[t]),""===n||n?(o=parseFloat(i),n===!0||Z.isNumeric(o)?o||0:i):i}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,r){return n?Wt.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Gt,function(){return E(e,t,r)}):E(e,t,r):void 0},set:function(e,n,r){var i=r&&zt(e);return k(e,n,r?x(e,t,r,"border-box"===Z.css(e,"boxSizing",!1,i),i):0)}}}),Z.cssHooks.marginRight=_(X.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},C,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+_t[r]+t]=o[r]||o[r-2]||o[0];return i}},Ft.test(e)||(Z.cssHooks[e+t].set=k)}),Z.fn.extend({css:function(e,t){return gt(this,function(e,t,n){var r,i,o={},s=0;if(Z.isArray(t)){for(r=zt(e),i=t.length;i>s;s++)o[t[s]]=Z.css(e,t[s],!1,r);return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return T(this,!0)},hide:function(){return T(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){St(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=R,R.prototype={constructor:R,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop];return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop];return this.pos=t=this.options.duration?Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=R.prototype.init,Z.fx.step={};var Xt,Yt,Qt=/^(?:toggle|show|hide)$/,Zt=new RegExp("^(?:([+-])=|)("+Ct+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[N],nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Zt.exec(t),o=i&&i[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==o&&+r)&&Zt.exec(Z.css(n.elem,e)),a=1,c=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--c)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};Z.Animation=Z.extend(I,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),Z.speed=function(e,t,n){var r=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return r.duration=Z.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Z.fx.speeds?Z.fx.speeds[r.duration]:Z.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Z.isFunction(r.old)&&r.old.call(this),r.queue&&Z.dequeue(this,r.queue)},r},Z.fn.extend({fadeTo:function(e,t,n,r){return this.filter(St).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Z.isEmptyObject(e),o=Z.speed(t,n,r),s=function(){var t=I(this,Z.extend({},e),o);(i||vt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Z.timers,s=vt.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&en.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=vt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Z.timers,s=r?r.length:0;for(n.finish=!0,Z.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];Z.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(O(t,!0),e,r,i)}}),Z.each({slideDown:O("show"),slideUp:O("hide"),slideToggle:O("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Xt=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Xt=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Yt||(Yt=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Yt),Yt=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=Y.createElement("input"),t=Y.createElement("select"),n=t.appendChild(Y.createElement("option"));e.type="checkbox",X.checkOn=""!==e.value,X.optSelected=n.selected,t.disabled=!0,X.optDisabled=!n.disabled,e=Y.createElement("input"),e.value="t",e.type="radio",X.radioValue="t"===e.value}();var rn,on,sn=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return gt(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===xt?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),r=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?on:rn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Z.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ft);if(o&&1===e.nodeType)for(;n=o[i++];)r=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!X.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||Z.find.attr;sn[t]=function(e,t,r){var i,o;return r||(o=sn[t],sn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,sn[t]=o),i}});var an=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return gt(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!Z.isXMLDoc(e),o&&(t=Z.propFix[t]||t,i=Z.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),X.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var cn=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,c=0,u=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(ft)||[];u>c;c++)if(n=this[c],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(cn," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=Z.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,c=0,u=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(ft)||[];u>c;c++)if(n=this[c],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(cn," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?Z.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Z(this),o=e.match(ft)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===xt||"boolean"===n)&&(this.className&&vt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":vt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(cn," ").indexOf(t)>=0)return!0;return!1}});var un=/\r/g;Z.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=Z.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Z(this).val()):e,null==i?i="":"number"==typeof i?i+="":Z.isArray(i)&&(i=Z.map(i,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=Z.valHooks[i.type]||Z.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(un,""):null==n?"":n)}}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,c=0>i?a:o?i:0;a>c;c++)if(n=r[c],!(!n.selected&&c!==i||(X.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Z.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=Z.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},X.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ln=Z.now(),hn=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var dn=/#.*$/,fn=/([?&])_=[^&]*/,pn=/^(.*?):[ \t]*([^\r\n]*)$/gm,mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gn=/^(?:GET|HEAD)$/,vn=/^\/\//,yn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,wn={},bn={},Cn="*/".concat("*"),_n=e.location.href,Sn=yn.exec(_n.toLowerCase())||[];Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_n,type:"GET",isLocal:mn.test(Sn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Cn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?j(j(e,Z.ajaxSettings),t):j(Z.ajaxSettings,e)},ajaxPrefilter:P(wn),ajaxTransport:P(bn),ajax:function(e,t){function n(e,t,n,s){var c,l,v,y,b,_=t;2!==w&&(w=2,a&&clearTimeout(a),r=void 0,o=s||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,n&&(y=q(h,C,n)),y=H(h,y,C,c),c?(h.ifModified&&(b=C.getResponseHeader("Last-Modified"),b&&(Z.lastModified[i]=b),b=C.getResponseHeader("etag"),b&&(Z.etag[i]=b)),204===e||"HEAD"===h.type?_="nocontent":304===e?_="notmodified":(_=y.state,l=y.data,v=y.error,c=!v)):(v=_,(e||!_)&&(_="error",0>e&&(e=0))),C.status=e,C.statusText=(t||_)+"",c?p.resolveWith(d,[l,_,C]):p.rejectWith(d,[C,_,v]),C.statusCode(g),g=void 0,u&&f.trigger(c?"ajaxSuccess":"ajaxError",[C,h,c?l:v]),m.fireWith(d,[C,_]),u&&(f.trigger("ajaxComplete",[C,h]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,c,u,l,h=Z.ajaxSetup({},t),d=h.context||h,f=h.context&&(d.nodeType||d.jquery)?Z(d):Z.event,p=Z.Deferred(),m=Z.Callbacks("once memory"),g=h.statusCode||{},v={},y={},w=0,b="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!s)for(s={};t=pn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return w||(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>w)for(t in e)g[t]=[g[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||b;return r&&r.abort(t),n(0,t),this}};if(p.promise(C).complete=m.add,C.success=C.done,C.error=C.fail,h.url=((e||h.url||_n)+"").replace(dn,"").replace(vn,Sn[1]+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=Z.trim(h.dataType||"*").toLowerCase().match(ft)||[""],null==h.crossDomain&&(c=yn.exec(h.url.toLowerCase()),h.crossDomain=!(!c||c[1]===Sn[1]&&c[2]===Sn[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(Sn[3]||("http:"===Sn[1]?"80":"443")))),h.data&&h.processData&&"string"!=typeof h.data&&(h.data=Z.param(h.data,h.traditional)),M(wn,h,t,C),2===w)return C;u=Z.event&&h.global,u&&0===Z.active++&&Z.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!gn.test(h.type),i=h.url,h.hasContent||(h.data&&(i=h.url+=(hn.test(i)?"&":"?")+h.data,delete h.data),h.cache===!1&&(h.url=fn.test(i)?i.replace(fn,"$1_="+ln++):i+(hn.test(i)?"&":"?")+"_="+ln++)),h.ifModified&&(Z.lastModified[i]&&C.setRequestHeader("If-Modified-Since",Z.lastModified[i]),Z.etag[i]&&C.setRequestHeader("If-None-Match",Z.etag[i])),(h.data&&h.hasContent&&h.contentType!==!1||t.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Cn+"; q=0.01":""):h.accepts["*"]);for(l in h.headers)C.setRequestHeader(l,h.headers[l]);if(h.beforeSend&&(h.beforeSend.call(d,C,h)===!1||2===w))return C.abort();b="abort";for(l in{success:1,error:1,complete:1})C[l](h[l]);if(r=M(bn,h,t,C)){C.readyState=1,u&&f.trigger("ajaxSend",[C,h]),h.async&&h.timeout>0&&(a=setTimeout(function(){C.abort("timeout")},h.timeout));try{w=1,r.send(v,n)}catch(_){if(!(2>w))throw _;n(-1,_)}}else n(-1,"No Transport");return C},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,r,i){return Z.isFunction(n)&&(i=i||r,r=n,n=void 0),Z.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var kn=/%20/g,xn=/\[\]$/,En=/\r?\n/g,Tn=/^(?:submit|button|image|reset|file)$/i,Rn=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,r=[],i=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){i(this.name,this.value)});else for(n in e)B(n,e[n],t,i);return r.join("&").replace(kn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&Rn.test(this.nodeName)&&!Tn.test(e)&&(this.checked||!kt.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var An=0,On={},Dn={0:200,1223:204},Nn=Z.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in On)On[e]()}),X.cors=!!Nn&&"withCredentials"in Nn,X.ajax=Nn=!!Nn,Z.ajaxTransport(function(e){var t;return X.cors||Nn&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++An;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete On[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Dn[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=On[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Ln=[],In=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ln.pop()||Z.expando+"_"+ln++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(In.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&In.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(In,"$1"+i):t.jsonp!==!1&&(t.url+=(hn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Z.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ln.push(i)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Y;var r=st.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Z.buildFragment([e],t,i),i&&i.length&&Z(i).remove(),Z.merge([],r.childNodes))};var Pn=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Pn)return Pn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Z.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Z("<div>").append(Z.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var Mn=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var r,i,o,s,a,c,u,l=Z.css(e,"position"),h=Z(e),d={};"static"===l&&(e.style.position="relative"),a=h.offset(),o=Z.css(e,"top"),c=Z.css(e,"left"),u=("absolute"===l||"fixed"===l)&&(o+c).indexOf("auto")>-1,u?(r=h.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(c)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+i),"using"in t?t.using.call(e,d):h.css(d)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)return t=o.documentElement,Z.contains(t,r)?(typeof r.getBoundingClientRect!==xt&&(i=r.getBoundingClientRect()),n=F(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(r=e.offset()),r.top+=Z.css(e[0],"borderTopWidth",!0),r.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Z.css(n,"marginTop",!0),left:t.left-r.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Mn;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||Mn})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Z.fn[t]=function(i){return gt(this,function(t,i,o){var s=F(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=_(X.pixelPosition,function(e,n){return n?(n=C(e,t),$t.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Z.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return gt(this,function(t,n,r){var i;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Z.css(t,n,s):Z.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var jn=e.jQuery,qn=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=qn),t&&e.jQuery===Z&&(e.jQuery=jn),Z},typeof t===xt&&(e.jQuery=e.$=Z),Z});

/*jQuery.my 1.1.6*/
!function(e){function t(){console.error.apply(console,arguments)}function n(e,t){return(t||"").split(".").reduce(function(e,t){return null!=e&&null!=e[t]?e[t]:void 0},e)}function r(e,t){var r,i;if(Q(t))return t;if(Y(t)){if(r=n(e,t),null==r&&(r=Object.clone(I._src[t],!0)),null==r&&(r=n(I,t),Q(r)&&Q(r._self)?r=Object.clone(r._self,!0):Q(r)&&(r=Object.clone(r,!0))),null==r&&n(e,"params.cache")&&(i=n(e,"params.cache"),tt(i)?r=i(t):Q(i)&&(r=it(t,i)),Q(r)&&(Q(r._self)&&(r=Object.clone(r._self,!0)),Object.merge(r,{params:{cache:i}},!0))),null!=r&&Q(r))return i=i||n(e,"params.cache"),i&&Object.merge(r,{params:{cache:i}},!0),r;throw"Component "+t+" not found"}return tt(t)?t.apply(e,Array.prototype.slice.call(arguments,2)):null}function o(r,i){var o,a,c,l,u,d=i||I,h=r;if(!(Q(d)&&Q(h)&&Q(h.ui)&&Y(h.id)))return"Invalid arguments.";d.hasOwnProperty("_src")||(d._src={}),c=h.id;try{h=Object.clone(r,!0)}catch(f){return"Can’t mount circular-referencing obj."}try{(!h.params||h.params&&!h.params.strict)&&C(h,!0)}catch(f){return"Invalid manifest, parse error."}if(o=s(h),Y(o))return t(o),o;if(Object.merge(h,{params:{strict:!0}},!0),d._src[c]=h,l=at.mask(d,c)){if(l.params&&l.params.protect)return"Can’t mount on protected.";l._self&&delete l._self,e.extend(!0,d,at.unmask("",c))}return e.extend(!0,d,at.unmask(h,c)),a=Object.keys(d._src).filter(function(e){return e.startsWith(c+".")}),a.sort(),a.forEach(function(t){var n;(n=at.mask(d,t))&&(n._self&&delete n._self,e.extend(!0,d,at.unmask("",t))),e.extend(!0,d,at.unmask(d._src[t],t))}),u=n(d,c),L?u._self=d._src[c]:Object.defineProperty(u,"_self",{get:function(){return d._src[c]},set:function(){throw"Can not change repo."},enumerable:!1,configurable:!0}),u}function s(e){var t,n,r=[];if(Q(e.files)&&Object.size(e.files))for(t in e.files)if(n=e.files[t],Q(n)&&n.data&&!n.url)if(N)try{at.base642blob(n.data,function(e){n.blob=e,n.url=N.createObjectURL(n.blob)},n.content_type||n.mime),r.push(t)}catch(i){return"Invalid base64 data in files/"+t+"."}else n.url="data:"+(n.content_type||n.mime)+";base64,"+n.data,r.push(t);return r}function a(n,r){Q(r)&&r.channel&&r.message&&n.find(".my-listen-"+at.sdbmCode(r.channel)).each(function(){var n,i=e(this),o=i.data("my"),s=void 0;if(o&&o.ui.listen&&tt(o.ui.listen[r.channel])){n=o.ui.listen[r.channel];try{s=n.call(o.manifest||o.root.my().manifest,o.data,r.message,i)}catch(a){t("Listener failed",a.message,a.stack)}void 0!==s&&(null===s?i.trigger("check"):s&&i.trigger("recalc"))}})}function c(t,r){function i(t,n){var r;return Y(t)?/[\/]/.test(t)?(r=M(!0,{},S,{ref:n,ajax:{url:t}}),K.test(n)&&(r.ajax.dataType="json")):t.length&&(r=M(!0,{},S,{ref:n,ajax:t})):Q(t)&&(r=M(!0,{},S,{ref:n,ajax:e.extend(!0,{},Object.select(t,["accepts","async","cache","data","dataType","xhrFields","password","timeout","type","url","username","headers"]))}),r.ajax.url||(r=null)),r}function o(){y.reject(C)}function s(){x+=1;var e=b[x];if(e)a(e).then(s).fail(o);else{var n=l(w),r=nt(Object.findAll(n,function(e,t){return!t}));r.length&&C.push((1===r.length?"Key "+r[0]+" is":"Keys "+r.join(", ")+" are")+" not present after all."),C.length?o():y.resolve(t)}}function a(n){function r(){l-=1,a?c.reject():.5>l&&c.resolve()}var i,o,s,a=!1,c=e.Deferred(),l=n.length;for(o=0;l>o;o++)i=n[o],s=Y(i.ajax)?_.loader:ot,s(i.ajax).then(function(e,n){K.test(n.ref)&&(null!=e?M(!0,t,at.unmask(e,n.ref.from(5))):(a=!0,C.push("Invalid data for ‘"+n.ref+"’ resource."))),r()}.fill(void 0,i)).fail(function(e,t){C.push("Failed to load ‘"+t.ref+"’ resource."),a=!0,r()}.fill(void 0,i));return c.promise()}function c(e){var r=!1;return K.test(e)?null!=n(t,e.from(5))&&(r=!0):null!=n(window,e)&&(r=!0),r}function l(e){for(var t in e)e[t]===!1&&(e[t]=c(t));return e}var u,d,h,f,p,m,g,v,y=e.Deferred(),b=[],w={},C=[],_=M(!0,{ajaxTimeout:1e4,loader:st.params.loader},r||{}),S={ref:null,ajax:{type:"GET",async:!0,timeout:_.ajaxTimeout}};if(Q(t))if(J(t.require)){for(f=t.require,u=0;u<f.length;u++)if(p=f[u],Y(p))w[p]=c(p);else if(Q(p)){v=[];for(d in p){if(m=null,p[d]===!0)w[d]=c(d);else if(Y(p[d])||Q(p[d]))m=i(p[d],d);else if(J(p[d])){for(m=[],h=0;h<p[d].length;h++)(Y(p[d][h])||Q(p[d][h]))&&(g=i(p[d][h],d),g&&m.push(g));m.length||(m=null)}m&&!(w[d]=c(d))&&v.add(m)}v.length&&b.push(v)}var x=-1;s()}else y.resolve(t);else y.reject(["Invalid manifest."]);return y.promise()}function l(e,t){var n,r,i=e.data("myval");return i||(r=u(e,st.vals),tt(r)&&(n=r(e,q),void 0===n?e.data("myval",function(e,t){return q!=t&&r(e,t),e.val()}.fill(e,void 0)):e.data("myval",r.fill(e,void 0))),i=e.data("myval")),tt(i)?(n=i(),(n!==t&&(0==t||0==n)||n!=t||Q(t))&&(n=i(t)),n):q}function u(e,t){function n(e,t,s){for(var a in t)if(""!=a&&e.is(a)){o=o+(o?" ### ":"")+a;var c=t[a],l=j(c);if(!/^(nul|un|ob)/.test(l)&&s>i)return r=c,void(i=s);l==$&&n(e,c,s+1)}q!=t[""]&&typeof t[""]!=$&&s>i&&(r=t[""],i=s)}var r=q,i=0,o="";return n(e,t,1),r}function d(e,t,n,r){var i,o,s,a=[],c=n.bind,l=j(c);if(l==V)return c.call(f(r).manifest,e,t,r);if(l===U||l===W){if(l===U&&!/\./.test(c))return t!=q?e[c]=t:void 0===e[c]&&(e[c]=q),e[c];for(l===U&&(a=c.split(".").each(function(e,t){this[t]=e+""})),l===W&&(a=c.slice(0).each(function(e,t){this[t]=e+""})),"this"===a[0]?(o=f(r).manifest,a.shift()):o=e,i=0;i<a.length;i++){if(i===a.length-1)return t!=q?o[a[i]]=t:void 0===o[a[i]]&&(o[a[i]]=q),o[a[i]];0==i?(s=o,o=o[a[0]]):(s=s[a[i-1]],o=o[a[i]]),void 0===o&&(o=s[a[i]]={})}}return q}function h(t,n,r,i){var o,s,a=r.check;if(a!=q){var c=f(i).params.messages,l=r.error,u=l||c.patternMismatch||c[""]||"Error";if(i.size()&&Object.prototype.hasOwnProperty.call(i[0],"validity")&&!i[0].validity.valid){var d=i[0].validationMessage+"";if(""!==d)return d.substr(0,1).toUpperCase()+d.substr(1);s=i[0].validity;for(o in s)""===d&&"valid"!=o&&X(s[o])&&s[o]&&c[o]&&(d=c[o]);return d||l}switch(j(a).to(1)){case"f":return p=a.call(f(i).manifest,t,n,i),null===p||void 0===p?"":p;case"r":return a.test(String(n))?"":u;case"a":return a.indexOf(n)>-1?"":u;case"s":return n==a?"":u;case"o":return a[n]?"":u;case"b":if(i.is(".my-form-list,.ui-sortable")){var h=i.data("listSrc")||i.data("my").listSrc||">*",p={};return i.find(h).filter("*:not(.ui-sortable-placeholder)").each(function(t){var n=e(this);n.data("my")&&!n.my("valid")&&(p[t]=n.my("errors"))}),p}return i.hasClass("my-form")&&a?i.my("valid")?"":i.my("errors"):""}return c.formError||"Error"}return""}function f(e){var t=e.my();return t?t.root?t.root.my():t:null}function p(t,n,r){var i=r.compact(),o=i.replace(/:disabled/g,""),s=o!==i,a="self:"===o.to(5);return a&&(o=o.replace(/^self:/g,"")),n.each(function(){var r=e(this),i=r.my(),c=!a&&i?i.container:r;c.toggleClass(o,!!t),s&&void 0!==i&&!!t!=!!i.disabled&&(r.my().disabled=!!t,i._disable||(r.my()._disable=u(n,st.offon).fill(void 0,n)),i._disable(!!t))}),n}function m(e,n,r){var i,o,s,a,c,u,f,g,v,y,b,w=!1,C=!1,_=e,S=_.my(),x="";if(S){if(g=S.selector,v=S.root,v.hasClass("my-form-init"))return{};if(y=v.find(g),b=v.my().ui,w=e.hasClass("my-form"),C=e.hasClass("my-form-list"),w?(i=e,o=S.ddata,s=S.dui,a=S.dparams):(i=S.container,o=S.data,s=S.ui,a=S.params),s.bind!=q){if(c=H(n)?n:l(y,d(o,q,s,y)),q!=s.check){x="Unknown error";try{x=h(o,c,s,y)}catch(k){t("Error "+k.message+" in .check validatir for "+g,v,k.stack)}}var E=a.errorCss,T="ui-state-error";try{q!=n&&(c=l(y,d(o,n,s,y)))}catch(k){x=a.messages.formError||"Error"}if(""===x)w?S.derrors[g]="":S.errors[g]="",i.removeClass(E),i.attr("title")&&i.attr("title",""),w||C||a.effect(i.find(a.errorTip),!1,a.animate/2),_.removeClass(T),_.find(".ui-widget").removeClass(T);else{if(w)S.derrors[g]=x;else if(C)S.errors[g]=x;else{i.addClass(E),S.errors[g]=x;var R=i.find(a.errorTip).eq(0);R.size()?a.effect(R.addClass(E).html(x),!0,a.animate):i.attr("title",(x||"").stripTags())}_.is(".hasDatepicker")&&(_.is("input")?_.addClass(T):_.find(".ui-widget").addClass(T)),_.is(".ui-slider")&&_.addClass(T)}}var A=n==q?c:n;if(s.css)for(u in s.css)f=s.css[u],et(f)?p(f.test(A),y,u):tt(f)&&p(f.call(v.my().manifest,o,A,y),y,u);var O,D,N=s.recalc,L=[],I={};if(r&&s.recalc&&v.my()){for(b=v.my().ui,O=0;O<N.length;O++)N[O]&&Y(N[O])&&(D=N[O].compact())&&b[D]&&(b[D].recalc?-1===L.indexOf(D)&&L.push(D):I[D]=!0);for(O=0;O<L.length;O++)I=M(!0,I,m(v.find(L[O]),q,r-1));if(n!==q){for(O in I)I[O]===!0&&O!=g&&(b[O].delay&&!b[O].recalc?b[O]._update(v.find(O),q,r-1):m(v.find(O),q,r-1));return{}}}return I||{}}}function g(e,t,n,r){var i,o,s,a,c,l,u,d,h,f=t;if(!Q(f)||isNaN(a=f.remember)||!Q(i=f.history))return q;if(Q(e)&&a){if(l=Object.clone(e,!0),u=Date.now(),s=nt(i).sort(),s.length&&(u-s.last()<f.historyDelay||Object.equal(i[s.last()],l)))return q;if(f.history[u]=l,s.push(u),s.length>=2*a){for(h={},o=a;2*a>o;o++)h[s[o]]=i[s[o]];t.history=h}return r||f.form.trigger(G),f.history[s.last()]}if(!isNaN(e)||e===q){if(c=parseInt(e)||0,0>c)return q;if(s=nt(i).sort(),c>=s.length&&(c=s.length-1),d=Object.clone(f.history[s[s.length-c-1]],!0),n){for(h={},o=0;o<s.length-c-1;o++)h[s[o]]=i[s[o]];t.history=h}return r||f.form.trigger(G),d}return r||f.form.trigger(G),q}function v(i,o,s,a){function c(){var t=null,o=S.manifest;if(tt(o)||Q(o)&&Q(o.ui)?g=o:Y(o)&&(g=r(E,o.replace(K,""))),g&&Y(S.bind)){var s=n(K.test(S.bind)?E:C.data,S.bind.replace(K,""));if(null===x&&(x=e.Deferred()),J(s)||S.list){i.addClass("my-form-list");var c="",u=">*";if(/^<.+>$/.test(S.list)?c=S.list:u=S.list||u,!c){var f=i.find(u);c="<div></div>",f.size()&&(c=e(c).append(f.eq(0).clone(!0)).html(),f.eq(0).remove())}i.data("formlist")||i.data("formlist",{}),i.data("formlist").generator={manifest:g,delay:(S.delay||_.delay||10)/1.3,template:c,selector:u,parent:E,bind:S.bind,hash:tt(S.hash)?S.hash.bind(E):d(S.hash),id:tt(S.id)?S.id.bind(E):d(S.id),ext:!(!S.id&&!S.hash),stamp:0},i.on("insert.my",function(t,n){t.stopPropagation();var r={what:void 0,where:0};null==n?r.where=1e6:Q(n)?Object.merge(r,n):(Y(n)||Z(n))&&(r.where=n),e(t.target).my("insert",r.where,r.what)}),i.on("remove.my",function(t){t.stopPropagation(),e(t.target).my("remove")})}else try{t=i.my(r(E,g),Q(s)?s:void 0)}catch(p){l("$.my subform init of "+a+" failed: "+p.message,p.stack)}}rt(t)?t.then(h,function(e,t){l("Init of subform "+a+" failed with error: "+e,t)}):h()}function l(e,n){t(e,n),x&&x.reject(e,n)}function d(e){var t=j(e).to(3);return e?"str"===t?n.fill(void 0,e):"arr"===t?at.mask.fill(void 0,e):null:null}function h(){i.each(function(){var t,n,r=e(this),c=!1,l=r[0].nextSibling;if(n=l&&l.CodeMirror?l.CodeMirror:null,n&&r.addClass("my-codemirror"),t=S.events||u(r,st.events),r.is(".my-form")?M(r.data("my"),{dui:S,root:o,selector:a,dparams:_,devents:t,ddata:C.data,container:_.container(r),derrors:C.errors}):(r.data("my",{events:t,selector:a,initial:p,previous:p,root:o,container:_.container(r),id:C.id,ui:S,data:C.data,params:_,errors:C.errors}),s._update=S.delay?m.debounce(S.delay):q,c=!0),c)if(r.cleditor&&r.parent().is(".cleditorMain")){var d=r.cleditor()[0];if(d&&d.$frame&&d.$frame[0]){r.addClass("my-cleditor"),M(r.data("my"),{container:_.container(r)});var h,f=function(e){r.val(e).trigger(G)},g=Number.random(1e5,1e6-1);e(d.$frame[0]).attr("id","cleditCool"+g),h=document.frames?document.frames["cleditCool"+g].document:e("#cleditCool"+g)[0].contentWindow.document;var w=e(h).find("body");e(h).bind("keyup.my",function(){f(e(this).find("body").html())}),r.parent().find("div.cleditorToolbar").bind("click.my mouseup.my",function(){f(w.html())}),e("body").on("click","div.cleditorPopup",function(){f(w.html())})}}else if(r.is("div.redactor_box textarea")){var x,k="my-redactor-9";try{x=r.getEditor(),k="my-redactor-8"}catch(E){x=r.redactor("getEditor")}x&&(r.addClass(k),x.bind("input.my keyup.my blur.my",function(e){e.trigger("redactor")}.fill(r)))}else r.is(".ace_editor")?ace.edit(i[0]).on(G,function(e){e.trigger("ace")}.fill(r)):n&&n.on(G,function(e){e.trigger("codemirror")}.fill(r));r.my()._changed=y.debounce(v),r.my()._recalc=b.debounce(v),r.bind(t,function(e){e.type==G&&e.stopPropagation(),c&&(C.locktill=Date.now()+s.delay),r.my()._changed(r,o,s,_)}),/check(\.my)?/.test(t+"")||r.on("check.my",function(){return r.my()._changed(r,o,s,_,!0),!1}),r.on("recalc.my, redraw.my",function(e){e.stopPropagation(),r.my()._recalc(r,o,s,_)})}),x&&x.resolve()}var f,p,g,v,C=o.my(),_=(C||{}).params,S=s,x=null,k=0,E=C.manifest;return C?(v=s.delay,i.size()?(S.init!=q&&(f=w(E,S.init,i,C)),rt(f)?(k+=1,x=e.Deferred(),f.then(c,function(e,t){l("Init of "+a+" failed: "+e,t)})):c()):at.con("Not found "+a+" selector.",o),x):(t("Failed to find $root building "+a+" selector."),null)}function y(e,t,n,r,i){var o=e.data("my"),s=t.data("my");if(o&&!o.disabled){g(o.ddata||o.data,o.dparams||o.params);var a=t.find(o.selector);m(e,i?q:l(a,q),n.recalcDepth||r.recalcDepth),void 0===s.orphan&&o.root.parent().hasClass("ui-sortable")&&(s.orphan=!o.root.parent().hasClass("my-form-list")),s.orphan&&o.root.parent().trigger("check"),r.change&&r.change.call(e)}}function b(e,t,r,i){var o=e.my();if(o&&!o.disabled){var s=t.find(o.selector);s.is(".my-form")?s.my("redraw"):m(e,s.is(".my-form-list")?n(s.my().data,s.data("formlist").generator.bind):q,r.recalcDepth||i.recalcDepth)}}function w(e,t,r,i){var o;if(Y(t)){if(o=n(e,t),void 0===o)return r.html(t.assign(i.data)),null}else o=t;if(tt(o))return o.apply(e,Array.prototype.slice.call(arguments,2));if(J(o))try{r.formgen(o)}catch(s){}return null}function C(e,t){var n,r=!t;for(n in e)e.hasOwnProperty(n)&&_(n,e,r)}function _(e,n,r){var i,o,s,a="";(r||!/^(data|files|require)$/.test(e))&&(i=n[e],a=j(i),/^(ob|ar)/.test(a)?C(i):"string"===a&&/^(function\s*\(|new\sRegExp)/.test(i)&&((o=i.match(/^function\s*\(([^\)]*)\)\s*\{([\s\S]*)\}[\s\n\r\t]*$/))&&3===o.length?(s=S(o[1],o[2]),"function"==typeof s?n[e]=s:t("Invalid function in XJSON, skipped",s.message,s.stack,i)):(o=i.match(/^new\sRegExp\s*\(\/([\s\S]+)\/([a-z]*)\)$/))&&3===o.length&&(s=x(o[1],o[2]),"function"==typeof s.test?n[e]=s:t("Invalid RegExp in XJSON, skipped",s.message,s.stack,i))))}function S(e,t){var n;try{n=new Function(e,t)}catch(r){n={message:r.message,stack:r.stack}}return n}function x(e,t){var n;try{n=new RegExp(e,t)}catch(r){n={message:r.message,stack:r.stack}}return n}function k(e,t,r){var i=Q(t)?t:null;return Object.each(e,function(t,n){var r=typeof n;/^str|^fu/.test(r)&&(e[t]={bind:n})}),Object.each(e,function(t,o){var s,a,c,l=[],u=[],d=/\s?[,;]\s?/;o.recalc&&(Y(o.recalc)?l=o.recalc.split(d):J(o.recalc)&&(l=o.recalc),l=l.compact(!0).unique()),l.length&&(e[t].recalc=l),null==o.bind&&(o.bind=function(){});var h;if(o.listen&&(h=E(o.listen),o.listen=Object.size(h)?h:void 0),o.watch)for(Y(o.watch)?u=o.watch.split(d):J(o.watch)&&(u=o.watch.slice(0)),u=u.compact(!0).unique(),c=0;c<u.length;c++)(s=e[u[c]])&&(a=s.recalc,a?Y(a)?s.recalc+=","+t:J(a)&&-1==a.indexOf(t)&&s.recalc.push(t):s.recalc=[t]);null!==i&&["css","check","manifest","list","hash","id"].each(function(e){if(Y(o[e])){var t=n(i,o[e].replace(K,""));null!=t&&(o[e]=t)}}),o.delay=isNaN(o.delay)?r.delay:o.delay-0}),e}function E(e){var t,n={},r=function(){return null};if(Y(e))e.split(/[,\s]+/).compact(!0).unique().map(function(e){n[e]=r});else if(J(e))e.compact(!0).unique().map(function(e){n[e]=r});else if(Q(e))for(t in e)n[t]=tt(e[t])?e[t]:function(){return e[t]};return n}function T(e){var t=e,n={};if(Y(t)&&(t=t.split(/[,\s]+/)),J(t)){for(t=t.compact(!0),i=0;i<t.length;i++)n[t[i]]=!0;return n}return Q(t)?e:null}function R(e,t){function n(i,o,s,a){var c,l,u,d,h=i;if(Y(h)&&(/[\r\n]/.test(h)||h.split("}",3).length>2?h=at.css2json(h):s.push(o+(/\{/.test(h)?h:"{"+h+"}"))),J(h)&&h.length)for(c=0;c<h.length;c++)n(h[c],o,s,a);else if(Q(h))for(c in h)for(d=r(o,c),l=0;l<d.length;l++)n(h[c],d[l],s,a);else if(tt(h))try{u=h.call(t,e,t),n(u,o,a,a)}catch(f){}}function r(e,t){var n,r="",i=t+"";return(" "===i.to(1)||/^[a-z]/i.test(i))&&(r=" "),n=i.split(/\s*,\s*/).compact(!0),n.length||n.push(""),n.map(function(t){return e+r+t})}var i=[],o=[],s=t;return Q(s)&&Q(s.style)?(n(t.style,"",i,o),[i,o]):""}function A(){return{con:function(){try{console.log.apply(console,arguments)}catch(e){}},clone:function(e){return e.clone?e.clone():e},extval:function(e){var t=e.my();return t&&t.data?t.data:e.data("value")||e.val()||e.text()||e.html()||""},jquix:function(e,t,n){return e[t](n?"disable":"enable")},overlap:function(){function e(e,t,n){return void 0===n||null===n?t:Q(n)?Object.merge(t,n,!1):n}if(!arguments.length)return{};if(1===arguments.length)return arguments[0];for(var t=1;t<arguments.length;t++)Object.merge(arguments[0],arguments[t],!1,e);return arguments[0]},patch:function t(e,n){for(var r in n)n.hasOwnProperty(r)&&(Q(n[r])?e.hasOwnProperty(r)?t(e[r],n[r]):e[r]=Object.clone(n[r],!0):e.hasOwnProperty(r)||(e[r]=J(n[r])?n[r].clone(!0):n[r]));return e},kickoff:function(e,t){var n,r=t&&"object"==typeof t?Object.clone(t,!0):{};for(n in e)e.hasOwnProperty(n)&&(delete e[n],void 0!==r[n]&&(e[n]=r[n]))},sdbmCode:function(e){for(var t=JSON.stringify(e),n=0,r=0;r<t.length;r++)n=t.charCodeAt(r)+(n<<6)+(n<<16)-n;return(1e11+n).toString(36)},tojson:function(){function e(e){return 10>e?"0"+e:e}function t(e,i,o){var s,a,c,l,u=0,d=i||0,h=n;switch(o&&Y(o)&&(u=String(o).length,h=String(o).repeat(10)),(typeof e).substr(0,3)){case"str":return r(e);case"num":return isFinite(e)?""+String(e):"null";case"boo":case"nul":return String(e);case"fun":return r(e.toString().replace(/^(function)([^\(]*)(\([^\)]*)([\n\t][^)]*)(\).*)/,"$1 $3$5").replace(/(})([^}]*$)/,"$1"));case"obj":if(!e)return"null";if(typeof e.toJSON===V)return t(e.toJSON(),d+(o?1:0),o);if(s=[],J(e)){for(a=0;a<e.length;a+=1)s.push(t(e[a],d+(o?1:0),o)||"null");return"["+s.join(","+(o?"\n"+h.to(d*u+u):""))+"]"}for(c in e)Y(c)&&(l=t(e[c],d+(o?1:0),o),l&&s.push((o?"\n"+h.to(d*u+u):"")+t(c,d+(o?1:0),o)+": "+l));return"{"+s.join(",")+(o?"\n"+h.to(d*u):"")+"}"}}Date.prototype.toJSON=function(){var t=this;return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"Z"},RegExp.prototype.toJSON=function(){return"new RegExp("+this.toString()+")"};var n="	".repeat(10),r=JSON.stringify;return t.fill(void 0,0,void 0)}(),fromjson:function(e){var t=JSON.parse(e);return C(t),t},mask:function(e,t){function r(e,t){if(!Q(t))return{};var n={};for(var i in t)!Q(t[i])&&e.hasOwnProperty(i)?n[i]=Object.clone(e[i],!0):e.hasOwnProperty(i)&&(n[i]=Q(e[i])?r(e[i],t[i]):Object.clone(e[i],!0));return n}if(!Q(e))return null;var i,o=t;if(Y(o))return n(e,o);if(J(o)){i=[];for(var s=0;s<o.length;s++)i[s]=Y(o[s])?n(e,o[s])||null:null;return i}return Q(o)?r(e,o):void 0},unmask:function(e,t){function n(e,t,n){var r,i,o,s=Object.clone(t,!0),a=0;if(/\./.test(n))for(i=n.split(".").each(function(e,t){this[t]=String(e).compact()}),r=e;a<i.length;a++)a===i.length-1&&(r[i[a]]=s),0===a?(r=e[i[0]],o=e):(o=o[i[a-1]],r=r[i[a]]),void 0===r&&(r=o[i[a]]={});else null!=t&&(e[n]=s);return e}var r={};if(Q(e)&&Q(t))return at.mask(e,t);if(J(e)&&J(t)){for(var i=0;i<t.length;i++)null!=e[i]&&n(r,e[i],t[i]);return r}return Y(t)?n({},e,t):null},getref:n,require:c,repo:function(){return I},restyles:function(){return P},unjson:function(e){return C(e),e},blob2base64:function(e,t,n){var r=new FileReader;r.onload=function(){t(n?r.result:r.result.split(",")[1])},r.readAsDataURL(e)},base642blob:function(e,t,n){for(var r,i=atob(e),o=i.length,s=new ArrayBuffer(o),a=new Uint8Array(s),c=0;o>c;c++)a[c]=i.charCodeAt(c);return r=new Blob([a],{type:n||"application/octet-stream"}),tt(t)?void t(r):r},base64:function(t,n,r){var i=(j(t),null),o=Y(t)?t:e.my.tojson(t),s=Y(r)?"data:"+r+";base64,":"";if(n){try{i=decodeURIComponent(escape(window.atob(o)))}catch(a){i=null}if(null!==i&&/(^".*"$)|(^\[.*\]$)|(^\{.*\}$)/.test(i))try{i=e.my.fromjson(i)}catch(a){i=null}return i}return s+window.btoa((r===!0?"ï»¿":"")+unescape(encodeURIComponent(o)))},css2json:function(e){var t=(e+"").replace(/\/\*[\s\S]+\*\//gm,"").replace(/@charset[^;]+;/gim,"").replace(/[\n\t\s]+/g," ").replace(/\}/g,"}ᴥ").replace(/^\n+/g,"").replace(/[\n\s]+$/g,"").split("ᴥ").compact(!0).reduce(function(e,t){var n,r,i,o=t.trim();return/^[^{]+\{[^\}]+\}$/.test(o)&&(n=o.to(-1).split("{"),r=" "+n[0].trim(),i=n[1].trim(),";"!=i.last()&&(i+=";"),e[r]||(e[r]=""),e[r]+=i),e},{});return t}}}var O,D="jQuery.my 1.1.4",N=window.URL||window.webkitURL,L=!document.addEventListener,I=n(e,"my.f.repo")?e.my.f.repo():{_src:{},_name:"Global manifest cache"},P=n(e,"my.f.restyles")?e.my.f.restyles():{},M=e.extend,j=e.type,q=null,H=function(e){return null!==e&&void 0!==e},B="{yyyy}-{MM}-{dd}",F="{HH}:{mm}",$="object",z="data",W="array",U="string",V="function",G="change",K=/^this\./,J=Object.isArray,X=Object.isBoolean,Y=Object.isString,Q=Object.isObject,Z=Object.isNumber,et=Object.isRegExp,tt=Object.isFunction,nt=Object.keys,rt=function(e){return!!(null!=e&&(Q(e)||e.jquery)&&tt(e.then)&&tt(e.fail)&&tt(e.state))},it=function(e,t){var r,i;return Y(e)?(r=e,i=n(Q(t)?t:I,r),"exist"===t?Q(i):i?Object.clone(i,!0):null):Q(e)?(i=o(e,t),Q(i)?i:null):void 0===e?I._src:null===e?Object.reject(I,/^_/):null},ot=e.ajax,st={vals:{".my-form":function(e,t){if(e&&e.my){var n=e.my(z);return Object.equal(n,t)?n:e.my(z,t,!0)}return t||q},".hasDatepicker":function(e,t){H(t)&&e.datepicker("setDate",""==t?t:Date.create(t));var n=e.datepicker("getDate");return n?n.format(B):""},".my-tags":function(e,t){return H(t)&&(Y(t)||Z(t)?e.tags(z,[t+""]):J(t)&&e.tags(z,t)),e.tags(z)},".ui-draggable":function(e,t){if(H(t)&&Q(t)){var n={};isNaN(t.left)||(n.left=Number(t.left).ceil(2)+"px"),isNaN(t.top)||(n.top=Number(t.top).ceil(2)+"px"),(n.left||n.top)&&e.css(n)}var r=e.position();return{left:t&&!isNaN(t.left)?(1*t.left).ceil(2):r.left.ceil(2),top:t&&!isNaN(t.top)?(1*t.top).ceil(2):r.top.ceil(2)}},".my-form-list":function(t,n){function i(){var n,r,i=e(this),o=i.data("my");o&&(n=i.data("formlist"),r=n.index,n.hash=b(o.data,r)+"",n.oid=w!==b?w(o.data,r)+"":n.hash),t.trigger("check.my")}function o(e){e.data("my").locktill+_/1.3<T&&e.my("redraw")}var s,a,c,l,u,d,h="ui-sortable",f="."+h+"-placeholder",p=t.data("formlist")||{},m=p.generator||{},g=m.selector||">.my-form",v=m.template||"<div></div>",y=/\{/.test(v),b=m.hash||at.sdbmCode,w=m.id||at.sdbmCode,C=m.ext,_=m.delay||50,S=t.is("."+h),x=!!t.children(f).size(),k=[],E=[],T=Date.now(),R=t.find(S?t.sortable("option","items"):g);if(H(n)&&J(n)){if(x)return n;if(a=[],R.each(function(){var t=e(this),n=t.data("my");n&&a.push(n.data)}),l=!1,a.length===n.length)for(l=!0,s=0;s<a.length;s++)a[s]!==n[s]&&(l=!1);if((!l||C)&&(c=e.extend(!0,[],a,n),!Object.equal(a,c)||c.length!=n.length)){var A=[],O=[],D={},N={};for(E=[],s=0;s<n.length;s++)O[s]=w(n[s],s)+"",D[O[s]]=s,A[s]=(w!==b?b(n[s],s):O[s])+"";for(R.each(function(){var t=e(this),n=t.data("formlist")||{},r=n.oid;r&&D.hasOwnProperty(r)?N[r]=e(this):t.is(".my-form")?t.my("remove",!0):t.remove()}),s=0;s<n.length;s++)N[O[s]]?(u=N[O[s]].detach().appendTo(t),k.push(u.my("data")),A[s]!==(u.data("formlist")||{}).hash&&E.push(u)):(u=e(y?v.assign(n[s]):v).appendTo(t),u.data("formlist",{list:n[s],index:s,hash:A[s],oid:O[s]}),u.my(r(m.parent,m.manifest,n[s],s,n,t),n[s]).then(function(e){e.on("change.my",i.debounce(_/1.3))}.fill(u)),k.push(u.my("data")));if(E.length&&C){for(s=0;s<E.length;s++)o(E[s]);E=[]}return k}return a}if(R.size()){if(T-m.stamp>1.4*_||T-m.stamp>100||!m.stashed||m.stashed.length!==R.size()-(x?1:0)){x&&(d=t.find(">."+h+"-helper"));var L=0;for(R.each(function(t,n){var r,i,o,s=e(n),a=!1;x&&s.hasClass(h+"-helper")||(x&&s.hasClass(h+"-placeholder")&&(s=d),r=s.data("my"),i=s.data("formlist"),r&&i&&(k.push(r.data),L!=i.index&&(i.index=L,a=!0),C&&(o=b(r.data,L)+"",o!==i.hash&&(i.hash=o,a=!0)),L+=1,a&&E.push(s)))}),s=0;s<E.length;s++)o(E[s]);E=[],m.stamp=T,m.stashed=k}else k=m.stashed.slice(0);return k}return n||[]},".ui-sortable":function(t,n){var r,i=[],o="ui-sortable",s=">."+o+"-placeholder",a=t.find(t.sortable("option","items"));if(H(n)&&J(n)){var c={},l={},u=n.unique();if(t.find("input:focus:eq(0),textarea:focus:eq(0)").size()||t.find(s).size())return u;a.each(function(){c[at.sdbmCode(at.extval(e(this)))]=e(this)});for(var d=u.length-1;d>=0;d--){var h=at.sdbmCode(u[d]);c[h]&&(c[h].prependTo(t).show(),l[h]=!0,-1==i.indexOf(u[d])&&i.push(u[d]))}i=i.reverse();for(d in c)l[d]||c[d].hide()}else{var f=t.find(s),p=t.eq(0);0!=f.size()?(p.my()[o]!=f.position().left+""+f.position().top?(a=a.filter(":visible:not(:disabled, .ui-state-disabled, .ui-sortable-helper)"),r=t.find(t.sortable("option","items")).filter(".ui-sortable-helper"),a.each(function(){var t=e(this);i.push(at.extval(t.is(".ui-sortable-placeholder")?r:t))}),p.my()[o]=f.position().left+""+f.position().top,p.my()[o+"1"]=i):i=p.my()[o+"1"],i==q&&a.each(function(){i.push(at.extval(e(this)))})):(a=t.find(t.sortable("option","items")).filter(":visible:not(:disabled, .ui-state-disabled)"),a.each(function(){i.push(at.extval(e(this)))}))}return i},"input[type=date]":function(e,t){if(H(t))return n=""!=t?Date.create(t).format(B):"",Y(n)&&!/Invalid/.test(n)&&e.val(n),n;var n=e.val();return""!=n?Date.create(n).format(B):""},"input[type=time]":function(e,t){if(H(t))return n=""!=t?Date.create(t).format(F):"",Y(n)&&!/Invalid/.test(n)&&e.val(n),n;var n=e.val();return""!=n?Date.create(n).format(F):""},input:{"[type='text'],[type='number'],[type='search'],[type='hidden'],[type='password'],[type='button'],[type='range'],:not([type])":{".ui-slider-input":function(e,t){H(t)&&e.val(t).slider("refresh")},".tagstrip input.value":function(e,t){H(t)&&e.val(t).trigger("update")},"div.select2-container+input":function(e,t){return H(t)&&JSON.stringify(t)!==JSON.stringify(e.select2("val"))&&e.select2("val",J(t)?t:[t]),e.select2("val")},"":function(e,t){H(t)&&e.val(t+"")}},":radio":function(t,n){var r=-1;if(H(n)){t.each(function(t){var i=e(this).val();n+""==i+""&&(r=t)});var i=t.eq(0).checkboxradio;if(i&&t.each(function(t){var n=e(this);r!=t&&n.is(":checked")&&n.prop("checked",!1).checkboxradio("refresh")}),r>-1){var o=t.eq(r);o.is(":checked")||(o.prop("checked",!0),i&&o.checkboxradio("refresh"))}else i||t.each(function(){e(this).prop("checked",!1)})}if(-1==r)for(var s=0;s<t.size();s++)t.eq(s).is(":checked")&&(r=s);return-1!=r?t.eq(r).val():""},":checkbox":function(t,n){var r=n,i=[];if(H(r)){J(r)||(r=[n]);var o=!!t.eq(0).checkboxradio;t.each(function(){var t=e(this),n=t.val(),s=t.is(":checked");-1!=r.indexOf(n)?(i.push(n),s||t.prop("checked",!0)):s&&t.prop("checked",!1),o&&t.checkboxradio("refresh")})}else t.each(function(){var t=e(this);t.is(":checked")&&i.push(t.val())});return i}},select:{".ui-slider-switch":function(e,t){H(t)&&(e.val(t+""),e.slider("refresh"))},"div.select2-container+select":{"[multiple]":function(e,t){return H(t)&&e.select2("val",J(t)?t:[t]),e.select2("val")},"":function(e,t){return H(t)&&e.select2("val",t+""),e.select2("val")}},"[multiple]":function(e,t){H(t)&&(e.val(t,[]),e.selectmenu&&(e.data("uiSelectmenu")||e.data("selectmenu"))&&e.selectmenu("refresh",!0))},"":function(e,t){H(t)&&(e.val(t+""),e.selectmenu&&(e.data("uiSelectmenu")||e.data("selectmenu"))&&e.selectmenu("refresh",!0))}},textarea:{".my-cleditor":function(e,t){return H(t)&&e.val(t).cleditor()[0].updateFrame(),e.val()},"div.redactor_box textarea,.redactor":function(e,t){var n=e.hasClass("my-redactor-9");return H(t)?(n?e.redactor("set",t):e.setCode(t,!1),t):n?e.redactor("get"):e.getCode()},".my-codemirror":function(e,t){return H(t)?(e[0].nextSibling.CodeMirror.setValue(t),t):e[0].nextSibling.CodeMirror.getValue()},"":function(e,t){H(t)&&e.val(t+"")}},"fieldset,form,section,footer,aside,.my-container":function(e,t){var n=Array.prototype.slice.call(e[0],0).sort(),r=t;return H(t)&&(Y(t)&&(r=t.split(/[,\s]+/).compact(!0)),J(r)&&(r.sort(),r.join(" ")!==n.join(" ")&&(e.atrr("css",r.join(" ")),n=r))),n},"div,span,a,p,li,td,th,h1,h2,h3,h4,h5,h6":{".ui-slider":function(e,t){return H(t)&&e.slider("option",e.slider("option","values")?"values":"value",at.clone(t)),at.clone(e.slider("option","values")||e.slider("option","value")||0)},".ui-buttonset":function(t,n){if(H(n)){if(""!=n){var r=q;if(t.find(":radio").each(function(){r=(e(this).val()||e(this).button("option","label"))==n?e(this):r}),r)return r.attr("checked",!0),t.buttonset("refresh"),n}}else{var i=t.find(":radio:checked");if(i.size()&&i.button)return i.val()||i.button("option","label")}return t.find(":radio:checked").attr("checked",!1),t.buttonset("refresh"),""},".ace_editor":function(e,t){return H(t)&&ace.edit(e[0]).setValue(t),ace.edit(e[0]).getValue(t)},"":function(e,t){return H(t)&&e.html(t),e.html()}},"pre,code":function(e,t){return H(t)&&e.html(t),e.html()},img:function(e,t){return H(t)&&e.attr("src",t),e.attr("src")||""},"":function(e,t){return H(t)&&e.html(t),e.html()||e.text()||String(e.val())||""}},msg:{"":{en:"Invalid input",ru:O="Неверное значение"},formError:{en:"Form error",ru:"Ошибка формы"},initFailed:{en:'<p class="my-error">Form init failed</p>',ru:'<p class="my-error">Ошибка инициализации формы</p>'},badInput:{en:"Invalid input",ru:O},patternMismatch:{en:"Pattern mismatch",ru:"Не соответствует шаблону"},rangeOverflow:{en:"Over maximum",ru:"Больше максимума"},rangeUnderflow:{en:"Under minimum",ru:"Меньше минимума"},stepMismatch:{en:"Step mismatch",ru:"Не кратно шагу"},tooLong:{en:"Too long",ru:"Слишком длинно"},typeMismatch:{en:"Invalid type",ru:"Неверный тип"},valueMissing:{en:"Required",ru:"Обязательное поле"}},events:{".hasDatepicker":"change.my check.my",".my-form,.my-tags":"change.my check.my",".ui-slider":"slide.my check.my","div.redactor_box textarea":"redactor.my check.my",".my-codemirror":"codemirror.my check.my",".ace_editor":"ace.my check.my",".my-form-list":"sortupdate.my check.my",".ui-sortable":"sortchange.my sortupdate.my check.my",".ui-draggable":"drag.my dragstop.my check.my","a, .pseudolink, input[type=button], button":"click.my","img, :radio, :checkbox":"click.my check.my","div.select2-container+input,div.select2-container+select":"change.my check.my input.my",".ui-buttonset,input, select, textarea":"blur.my change.my check.my"+("Micro"===navigator.appName.to(5)?" keyup.my":" input.my"),"":"check.my"},containers:{"*[data-role='fieldcontain'] *":{"input,textarea,select,button,:radio":function(e){return e.parents('[data-role="fieldcontain"]').eq(0)}},".tagstrip *.value":function(e){return e.parents(".tagstrip").eq(0)},"div.redactor_box textarea":function(e){return e.parents("div.redactor_box").eq(0).parent()},".my-tags,.hasDatepicker,.ui-widget,input,textarea,select,button":{".my-cleditor":function(e){return e.parents("div.cleditorMain").eq(0).parent()},"":function(t){var n=t[0].parentNode,r=n.nodeName;return/^(div|span|a|p|form|fieldset|li|ul|td|th|h\d)$/i.test(r)?e(n):t.parents("div,span,a,p,form,fieldset,li,ul,td,th,h1,h2,h3,h4,h5,h6").eq(0)}},"":function(e){return e}},offon:{".ace_editor":function(e,t){ace.edit(t[0]).setReadOnly(e)},".ui-selectable":function(e,t){at.jquix(t,"selectable",e)},".ui-slider":function(e,t){at.jquix(t,"slider",e)},".ui-draggable":function(e,t){at.jquix(t,"draggable",e)},".ui-buttonset":function(e,t){at.jquix(t,"buttonset",e)},".hasDatepicker":function(e,t){at.jquix(t,"datepicker",e)},".my-form":function(e,t){t.my("disabled",!!e)},"div.select2-container+input,div.select2-container+select":function(e,t){at.jquix(t,"select2",e)},".my-cleditor":function(e,t){t.cleditor()[0].disable(!!e)},"":function(e,t){t.attr("disabled",!!e)}},destroy:{".hasDatepicker":function(e){e.datepicker("destroy")},".ui-slider":function(e){e.slider("destroy")},".ui-sortable":{".my-form-list":function(t){t.find(">.my-form").each(function(){e(this).my("remove")}),t.removeClass("my-form-list"),t.sortable("destroy")},"":function(e){e.sortable("destroy")}},".my-form-list":function(t){t.find(">.my-form").each(function(){e(this).my("remove")})},".ui-draggable":function(e){e.draggable("destroy")},".my-redactor-8":function(e){e.destroyEditor(),e.removeClass("my-redactor-8")},"div.select2-container+input,div.select2-container+select":function(e){e.select2("destroy")},".my-form":function(e){e.my("remove")},textarea:{".my-codemirror":function(e){e[0].nextSibling.CodeMirror.toTextArea(),e.removeClass("my-codemirror")
}}}};st.params={container:function(e){return u(e,st.containers)(e)},change:q,recalcDepth:2,delay:0,strict:!1,restyle:-1,locale:O=(navigator.language||navigator.userLanguage||"en").substr(0,2),messages:Object.map(st.msg,function(e,t){return t[O]||t.en}),errorTip:".my-error-tip",errorCss:"my-error",animate:0,effect:function(e,t,n){return t?e.fadeIn(n):void e.fadeOut(n)},remember:0,silent:!1,history:{},historyDelay:100,loader:function(t){var n=e.Deferred(),r=it(t+"");return r?n.resolve(r):n.reject(null),n.promise()},ajaxTimeout:1e4};var at=A(),ct={init:function(r,i,o){function c(e){var t,r,i,o,s,a,c={},l=!0,u=e.inherit;if(c=T(u),!Object.size(c))return null;if(o=ut.parents(".my-form").eq(0),!o.size())return null;if(s=o.data("my"),!s||!s.manifest)return null;i=s.manifest,r=i.expose,l=!r;for(t in c)(l||r[t])&&(a=n(i,t),null!=a&&(/\./.test(t)||Y(c[t])?M(!0,j,at.unmask(a,Y(c[t])?c[t]:t)):e[t]=a))}function u(){var e,n;for(var e in X)for(n in L[e].listen)X[e].addClass("my-listen-"+at.sdbmCode(n));G.radio&&ut.on("radio.my",function(e,n){var r,i;if(Q(n)&&n.channel&&n.message&&tt(G.radio[n.channel])){r=G.radio[n.channel];try{i=r.call(G,e,n)}catch(o){t("Radio handler for form "+O+"failed",o.message,o.stack)}void 0!==i&&(e.stopPropagation(),i&&a(ut,n))}})}function h(){I.strict||C(j,!0),G=M(!0,G,Object.reject(j,["data"])),L=k(M(!0,{},j.ui||{}),G,I),G.radio&&(G.radio=E(G.radio)),G.expose&&(G.expose=T(G.expose)),A=Number.random(268435456,4294967295).toString(16),x=j.id||"my"+A,O=at.sdbmCode(x),G.id=x,I.form=ut,j.params&&j.params.depth&&(I.recalcDepth=j.params.depth);for(H in G)tt(G[H])&&(G[H]=G[H].bind(G));j.error&&(Y(j.error)?nt=function(e,t){return j.error.assign(M({message:e+"",err:t+""},j))}:tt(j.error)&&(nt=function(e,t){D=null;try{D=j.error(e,t)}catch(n){D=I.messages.initFailed}return D})),M(ut.data("my"),{id:x,cid:A,mid:O,errors:Object.extended(),ui:Object.extended(L),disabled:!1,manifest:G,locFiles:[],modals:{},radio:{}}),ut.addClass("my-form"),F="my-manifest-"+O,$="my-form-"+A,ut.addClass($+" "+F)}function f(t){function n(e,t){return'<style id="'+t+'" data-count="0">.'+t+e.join(" \n."+t)+"\n</style>"}G.style&&(B=R(ut,G,F,$),B&&B[0].length&&!t&&(W=e("style#"+F),W.size()||(W=e(n(B[0],F)).appendTo(e("body"))),W.data("count",1*W.data("count")+1),ut.data("my").style=W),B&&B[1].length&&(U=e("style#"+$),U.size()?t&&(e(n(B[1],$)).replaceAll(U),U=e("style#"+$)):(U=e(n(B[1],$)).appendTo(e("body")),I.restyle>-1&&!P[A]&&(P[A]=function(){f(!0)}.debounce(I.restyle)),ut.data("my").restyle=f.fill(!0).debounce(0)),ut.data("my").localStyle=U))}function p(){var t,n,r=e.Deferred();if(n=s(G),Y(n))b("Error decoding base64 to local Blob/URL",n),r.reject();else{if(N)for(t=0;t<n.length;t++)J.push(G.files[n[t]].url);J.length&&(ut.data("my").locFiles=J),r.resolve()}return r.promise()}function m(){if(j.init!=q){lt=ut.find(">*").clone();try{V=w(G,j.init,ut,j)}catch(t){return b(Y(t)?t:t.message,t.stack),ut}}if(rt(V)?V.then(function(){g()},function(e,t){b(e,t)}):g(),!et){if(!ut.my())return b("Internal error initializing controls",""),ut;ut.data("my").initial=M(!0,{},K),e.mobile&&e.mobile.changePage(e.mobile.activePage)}}function g(){function e(e){et||(t[e]=l(ut.find(e),q),n-=1,.5>n&&y(t))}var t={},n=Object.size(L);ut.addClass(ot),Object.each(L,function(t){if(!et){var n=ut.find(t),r=v(n,ut,L[t],t);rt(r)?r.then(e.fill(t)).fail(function(e,n){b("Error building "+t+", "+e,n)}):et||e(t)}})}function y(e){var t,n,r;for(var i in L){if(et)return;if(t=L[i],r=ut.find(i),r.size()){t.listen&&(X[i]=r.eq(0));try{n=d(K,q,t,r),n==q&&e[i]!=q&&void 0!==n&&d(K,e[i],t,r)}catch(o){at.con("Transient fail linking "+i+" of form $('.my-form-"+A+"')",o.message,o.stack)}try{n!=q&&l(r,n),r.eq(0).trigger("check.my")}catch(o){b("Error linking "+i,o.message,o.stack)}}}ut.removeClass(ot),lt=null,Z.resolve(K)}function b(e,n){var r;if(et=!0,t("Form "+x+" failed to initialize",e,n),ut.removeClass(ot),r=nt(e,n),Y(r)||Q(r)&&r.jquery?ut.html(r):r===!0&&ut.html(lt),I.silent)Z.resolve(K);else{if(!ut.my().ddata){if(ut.removeData("my"),ut.removeClass("my-form"),W)if("1"==W.data("count"))try{W.remove()}catch(i){}else W.data("count",W.data("count")-1);if(U)try{delete P[A],U.remove()}catch(i){}}Z.reject("Form "+x+" failed to initialize: "+e,n)}}var _,S,x,A,O,D,L,I,j,H,B,F,$,W,U,V,G={},K={},J=[],X={},Z=e.Deferred(),et=!1,nt=function(){},ot="my-form-init",ct="std",lt="";if(Y(r)){if(_=it(r),!_)return Z.reject("No manifest with id "+r+" found in repo."),Z.promise();Q(o)&&Q(i)?(_=M(_,i),S=o):S=i,ct="repo"}else _=r,S=i;if(!_)return this;j=Q(S)&&"repo"!=ct?M(!0,{},_):_;var ut=this.eq(0),dt=ut.my();return Q(dt)&&dt.id&&dt.ui?(at.con("jQuery.my is already bind.",ut),ut.my("ui",j.ui),ut.my(z,j.data),Z.resolve(ut.my(z)).promise()):(I=j.params||{},I.strict||(I=M(!0,{},I),C(I)),I=M(!0,{},st.params,I),Z.fail(function(){ut.removeClass($+" "+F)}),M(ut,Z.promise()),Q(S)?(K=at.patch(S,j.data||{}),j.data=K):K=j.data||{},G.data=K,ut.data("my",{data:K,params:I,promise:Z.promise(),locktill:0}),ut.addClass(ot),j.inherit&&c(j),at.require(j,I).then(function(){h(),p().then(function(){f(),m()})}).fail(function(e){h(),b("Linker of ‘require’ property failed.",e)}),Z.then(u),ut)},redraw:function(e,t){var n=this,r=n.my();return r&&r.ui&&(r.ui.each(function(t){var i=n.find(t);m(i,e?q:void 0,r.params.recalcDepth),e||(i.is(".my-form")&&i.my("redraw"),i.trigger(i.is(".my-form-list")?"redraw":"check.my"))}),!t&&e&&n.trigger(G)),n},data:function(e,t){var n=this;return Q(e)&&(n.my().data=at.overlap(n.my().data,e),this.my("redraw",t)),n.my().data},errors:function(){var t=e(this).my().errors,n={};for(var r in t)t[r]&&Y(t[r])&&(n[r]=t[r]),Q(t[r])&&nt(t[r]).length&&(n[r]=t[r]);return n},valid:function(){var t=e(this).my().errors,n=0;for(var r in t)t[r]&&Y(t[r])?n++:Q(t[r])&&nt(t[r]).length&&n++;return!n},reset:function(){try{at.kickoff(this.my().data,this.my().initial),this.my("redraw")}catch(e){return!1}return!0},id:function(e,t){if(Y(e))return it(e,t);var n=this.my();return n&&n.id?n.id:q},remove:function(e){var t,n,r,i,o,s,a,c,l=this;if(!this.my())return q;if(this.my().root&&!this.my().ddata&&(l=this.my().root),r=l.my(),o=r.data,a=r.cid,c=r.mid,l.unbind(".my"),Q(r)&&r.manifest&&tt(r.manifest.die))try{r.manifest.die.call(r.manifest,l,r.manifest)}catch(d){}if(t=r.style)if("1"==t.data("count"))try{t.remove()}catch(d){}else t.data("count",t.data("count")-1);if(n=r.localStyle)try{delete P[a],n.remove()}catch(d){}if(window.URL&&(i=r.locFiles)&&i.length)for(var h=0;h<i.length;h++)try{URL.revokeObjectURL(i[h])}catch(d){}if(s=(r||{}).ui,s&&s.each(function(e){var t,n,r,i=l.find(e);if((n=i.data("modal"))&&(n.cancel(),i.removeData("modal")),n=i.data("modals"))for(r in n)n[r]&&n[r].cancel();i.unbind(".my");try{t=u(i,st.destroy),tt(t)&&t(i)}catch(o){}i.removeData("formlist").removeData("myval").removeData("my")}),e&&l.is(".my-form"))l.remove();else if(l.data("formlist")&&l.is(".my-form")){var f=l.parents(".my-form-list").eq(0);l.remove(),f.trigger("check")}else l.removeData("formlist").removeData("myval").removeData("my").removeClass("my-form");return l.removeClass("my-form-"+a+" my-manifest-"+c),o},undo:function(e){var t,n=this,r=n.my(),i=r.params.history,o=nt(i).sort(),s=1*(parseInt(e)||0);return!o.length||0>s?q:(r.params.errors&&r.params.errors.values().compact(!0).length?Object.equal(r.data,r.lastCorrect)||(s+=1):Object.equal(i[o.last()],r.data)&&(s+=1),t=g(s,r.params,!0),t&&(at.kickoff(n.my().data,t),n.my("redraw")),n.my().data)},ui:function(e){var t,n=this,r=n.my(),i=[];if(!r)return q;M(!0,{},r.ui);if(!Q(e))return r.ui;for(t in e)i.push(t);for(r.ui=k(at.overlap(r.ui,e)),t=0;t<i.length;t++)v(n.find(i[t]),n,r.ui[i[t]],i[t]);for(t in e)n.find(t).eq(0).trigger("check");return r.ui},disabled:function(e){var t,n,r,i,o=this,s=o.my();if(!s)return void 0;if(e==q)return s.disabled;if(e){for(n in s.ui)t=o.find(n).eq(0),r=t.my(),r&&(r.predisabled=r.disabled),p(!0,t,":disabled");o.addClass("my-disabled")}else{for(n in s.ui)t=o.find(n).eq(0),r=t.my(),i=!1,r&&r.predisabled&&(i=!0),p(i,t,":disabled");o.removeClass("my-disabled"),o.my("redraw")}},find:function(e){var t=this,n=t.my();return n&&n.root&&(t=n.root),t.find(e)},radio:function(e,t){this.trigger("radio",Y(e)?{channel:e,message:t}:e)},manifest:function(e){return"json"==e?at.tojson(this.my().manifest):this.my().manifest},version:function(){return D},history:function(e,t){return g(e,this.my().params,t)},val:function(e){return l(this,e)},container:function(e){return u(e,st.containers)(e)},promise:function(e){return tt(e)&&this.my().promise.then(e),this.my().promise},index:function(){var e=this.my().root&&!this.my().ddata?this.my().root:this;return(e.data("formlist")||{}).index},insert:function(e,t){var r,i,o=this.is(".my-form-list")?this:this.my().root||this,s=o.is(".my-form-list")?o:o.parent(".my-form-list"),a=(o.data("formlist")||{}).index,c=t;if(null==a&&(a=0),r=n(s.my().data,s.data("formlist").generator.bind),!Q(c))if(Q(s.data("formlist").generator.manifest))c=Object.clone(s.data("formlist").generator.manifest.data,!0)||{};else{if(s===o)throw"No data to insert, cannot guess when manifest is function.";c=Object.clone(o.my().manifest.data,!0)}if("before"===e)i=a;else if("after"===e)i=a+1;else{if(isNaN(e))throw"Invalid position for insert";i=(1*e).clamp(0,r.length)}r.add(c,i),s.trigger("redraw")}};e.my||(e.my={}),e.extend(e.my,{f:e.extend({},at),tojson:at.tojson,fromjson:at.fromjson,radio:function(t,n){a(e(document),Y(t)?{channel:t,message:n}:t)},rules:st,cache:function(e,t){return tt(e)?it=e:it(e,t)},version:function(){return D},ajax:function(e){return tt(e)?ot=e:ot.apply(this,Array.prototype.slice.call(arguments))}}),e.my.chain=function(){function e(){if(r.length&&i){var t,n=r.shift(),o=function(){e.delay(n[1])}.once();try{t=n[0]()}catch(s){o()}rt(t)?(t.then(o,o),o.delay(n[1])):o()}}var t=1,n=1e3,r=[],i=!1,o=function(i,o,s){r.push([i,o||t,s||n]),e()};return o.delay=function(e){return isNaN(e)||(t=(e-0).clamp(0,1e6)),t},o.timeout=function(e){return isNaN(e)||(n=(e-0).clamp(1,1e6)),n},o.start=function(){i=!0,e()},o.stop=function(){i=!1},o}(),e.fn.my=function(t){var n;if(void 0===t)return this.data("my");if(Y(t)&&"{"==t.substr(0,1)){try{n=JSON.parse(t)}catch(r){}if(n)return ct.init.apply(this,[n].add(Array.prototype.slice.call(arguments,1)))}return Y(t)&&ct[t]?ct[t].apply(this,Array.prototype.slice.call(arguments,1)):Y(t)&&it(t,"exist")?ct.init.apply(this,arguments):typeof t!==$&&t?void e.error("Method "+t+" does not exist on jQuery.my"):ct.init.apply(this,arguments)},e(window).off(".my").on("radio.my",function(t,n){t.stopPropagation(),a(e(document),n)}).on("resize.my",function(){for(var e in P)try{P[e]()}catch(t){}}.debounce(100))}(jQuery),function(e){function t(e,t,n){if(c(t))return e+t;if(l(t))return n=i(!0,n,t),e;if(a(t)&&t.length>1&&c(t[1])){for(var r,u,h,f,p,m,g,v,y=t[0],b="",w=1;w<t.length;){if(c(t[w]))if(f=t[w].replace(/\s/g,""),h=f.split(/[\.#]/i),u=n.alias[h[0]]||h[0],r=f.substr(h[0].length),/^[a-z0-9]+(#[a-z0-9\-_]+)?(\.[a-z0-9\-_]+)*$/i.test(f)){g=d.tmpl[u]||d.tmpl[""],m={style:"","class":"",txt:""},v="";var C=l(t[w+1]);if(C){w+=1;for(p in t[w])""!==d.attnames[p]&&(m[d.attnames[p]||p]=t[w][p])}m.style||m["class"]||!n.styles[u]||(m.style=n.styles[u]),m.id||"#"!=r.to(1)||(m.id=r.from(1).split(".")[0]),!m["class"]&&/\./.test(r)&&(m["class"]=("#"==r.to(1)?r.substr(m.id.length+1):r).split(".").compact(!0).join(" "));for(p in m)v+=p+'="'+m[p]+'" ';if(C)for(p in t[w])""===d.attnames[p]&&(m[p]=t[w][p]);m.ext=v,!m.txt&&d.txt[u]&&(m.txt=d.txt[u](m)),m._tag=u,b+=typeof g==s?g(m)||"":typeof g==o?g.assign(m):""}else b+=t[w];w+=1}return b&&(b="<"+n.rowTag+' class="'+n.rowCss+'" '+(n.row?'style="width:'+n.row+"; ":"")+(n.label&&y?"padding-left:"+n.label+"; ":"")+'">'+(y?"<"+n.labelTag+' class="'+n.labelCss+'" '+(n.label?'style="display:inline-block;width:'+n.label+";margin-left:-"+n.label+'" ':"")+">"+y+"</"+n.labelTag+">":"")+b+"</"+n.rowTag+">"),e+b}return e}function n(e){var t=e;if(c(t)&&(t=t.split(/[\s,]/).compact(!0)),a(t)){for(var n={},r=0;r<t.length;r++){var i=t[r];if(l(i)){var o=Object.keys(i);1==o.length?n[o[0]]=i[o[0]]+"":n[i.id||i.key||i.name||""]=i.text||i.value||i.title||""}else n[i]=i+""}t=n}return l(t)?t:{}}function r(n,r){var o={};return a(n)?(i(!0,o,d.params,r||{}),n.length?n.reduce(t.fill(void 0,void 0,o),""):""):l(n)?void e.extend(d,n):""}var i=e.extend,o="string",s="function",a=Object.isArray,c=(Object.isBoolean,Object.isString),l=Object.isObject,u=(Object.isNumber,Object.isRegExp,Object.isFunction,'<input type="'),d={tmpl:{num:u+'number" {ext}/>',inp:u+'text" {ext}/>',sli:u+'range" {ext}/>',dat:u+'date" {ext}/>',btn:u+'button" {ext}/>',but:"<button {ext}>{txt}</button>",div:"<div {ext}>{txt}</div>",spn:"<span {ext}>{txt}</span>",sel:"<select {ext}>{txt}</select>",mul:'<select {ext} multiple="multiple">{txt}</select>',txt:"<textarea {ext}>{txt}</textarea>",err:' <span class="my-error-tip {class}" style="{style}">{txt}</span>',msg:'<div class="my-error-tip {class}" style="{style}">{txt}</div>',val:function(e){if(!a(e.vals))return"";var t=i({style:"",css:""},e);return t.txt=e.vals.reduce(function(e,t){return e+"<span class=\"my-shortcut\" onclick=\"$(this).parents('.my-row').find('input,textarea').val($(this).text()).trigger('blur')\">"+t+"</span> "}," "),'<span class="my-shortcuts {css}" style="{style}">{txt}</span>'.assign(t)},"":"<{_tag} {ext}>{txt}</{_tag}>"},txt:{sel:function(e){if(!e.vals)return"";var t=n(e.vals);return Object.keys(t).reduce(function(e,n){return e+'<option value="'+n+'">'+t[n]+"</option>"},"")}},params:{styles:{num:"width:30%;",dat:"width:30%;",inp:"width:100%",but:"width:30%",txt:"width:100%;max-width:100%;min-height:1px;word-break:break-word;",err:"display:none",msg:"display:none"},alias:{number:"num",date:"dat",slider:"sli",textarea:"txt",input:"inp",span:"spn",select:"select",vals:"val"},row:"",rowTag:"div",rowCss:"my-row",label:"",labelTag:"span",labelCss:"my-label"},defaults:{id:"","class":"",style:"",placeholder:"",value:"",rows:1},attnames:{css:"class",plc:"placeholder",val:"value",txt:"",vals:"",tip:"title"}},h={init:function(t,n){return e(this).html(r(t,n))}};e.my||(e.my={}),e.my.formgen=r,e.fn.formgen=function(t){return c(t)&&h[t]?h[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.formgen"):h.init.apply(this,arguments)}}(jQuery),function(e){function t(t,n,r,i){var o,a,c,d,h,f,p;if("object"==typeof n&&n.jquery)n.is("img")&&(f=n,h=n.attr("alt")||n.attr("title")||n.data("text")||"",a=f[0].naturalWidth||f[0].width,o=f[0].naturalHeight||f[0].height,1>o&&(o=1),1>a&&(a=1),d=e(window).width()-90,c=e(window).height()-90,o>c&&(a=a*(c/o)|0,o=c),a>d&&(a=d,o=o*(d/a)|0),p=300>a?300:a,s(t,{source:"image",manifest:{init:function(e){e.html(this.HTML),e.on("click.my","img:eq(0)",function(){e.trigger("cancel")})},HTML:'<img src="" class="db" style="max-width:'+a+"px;max-height:"+o+'px"><h4 class="mt10"></h4>',ui:{"img:eq(0)":"img",h4:{bind:"text",css:{hide:function(e,t){return!t}}}}},data:{img:f.attr("src"),text:h},esc:!0,screen:!0,width:i||p,focus:!1,global:!0,z:"1995"},r));else if(u(n)&&n.manifest)s(t,n,r);else{if(!l(n))return null;s(t,{source:"html",manifest:{init:function(e){e.html(this.HTML)},HTML:n,ui:{"div:eq(0)":function(){}}},data:{},esc:!0,focus:!1,width:i},r)}return t}var n,r={},i="body",o=!1,s=e.extend,a={},c=(Object.isArray,Object.isBoolean),l=Object.isString,u=Object.isObject,d=Object.isNumber,h=(Object.isRegExp,Object.isFunction);e(document).keydown(function(e){var t,n,r=e.keyCode;if(!1!==o&&(13===r||27===r)){if(n=o.data("modal"),t=n.form,27==r&&(n.esc||Object.equal(t.data("my").initial,t.my("data"))))return o.modal(!0),!1;if(13==r&&n.enter)return function(e){e.modal()}.fill(o).delay(50),!1}}),r.modal=function(n,r,s){var a,l={},u=e(i),d=u.find(">.my-modal-proxy"),f={global:!0,screen:!0,done:h(r)?r:void 0,z:"1995"};return c(n)||null==n?d.modal(n):(a=e.Deferred(),t(l,n,f,s)?o?a.reject("Locked").promise():(d.size()||(d=e('<div class="my-modal-proxy"></div>').prependTo(u),d.css({position:"absolute",top:"0",left:"0",margin:"0",padding:"0",width:"1px",height:"0"})),d.modal(l)):a.reject("Invalid data").promise())},r.modal.loading=function(t){e(i).find(">.my-modal").toggleClass("my-modal-loading",!!t)},r.modal.parent=function(t){return t&&e(t).size()?void(i=t):e(i)},r.modal.parentBack=function(t){return t&&e(t).size()?void(n=t):e(n||i)},r.modal.visible=function(){return!!o},e.my||(e.my={}),e.my.modal=r.modal,e.fn.modal=function(r,f,p){function m(){var t,n,r=window,i=!!L.global,o=C.offset(),s=R.offset();L.pos={px:o.left,py:o.top,pw:C.outerWidth(),ph:C.outerHeight(),ox:s.left,oy:s.top,ow:R.outerWidth(),oh:R.outerHeight(),ww:n,wh:t};var a=1*(L.x.match(/\-?\d+(\.\d+)?/)||[0])[0],c=1*(L.y.match(/\-?\d+(\.\d+)?/)||[0])[0],l=L.x.has("left")?-1:L.x.has("right")?1:0,u=L.y.has("top")?-1:L.y.has("bottom")?1:0,h=L.pos.ox+L.pos.ow/2-L.pos.px,f=L.pos.oy+L.pos.oh/2-L.pos.py;if(i&&(L.pos.wh=t=r.innerHeight||e(r).height(),L.pos.ww=n=r.innerWidth||e(r).width(),h=n/2,f=t/2.5),a=L.x.has("%")?L.pos.ow/100*a:a,c=L.y.has("%")?L.pos.oh/100*c:c,L.pos.pix=h,L.pos.piy=f,h=h+l*(L.pos.ow/2)+a*(l>0?-1:1)-(L.width+A)*(l+1)/2,i?(f=(t-L.height-20)/3,10>f&&(f=10)):f=f+u*(L.pos.oh/2)+c*(u>0?-1:1)-(L.height||0)*(u+1)/2,h=h.round(1),f=f.round(1),L.pos.vx=h,L.pos.vy=f,L.bound!==!1&&!L.global){var p=(d(L.bound)?L.bound:0).clamp(-100,100);L.pos.pw-2*p<L.width+A?L.pos.vx=-(L.width+A-L.pos.pw)/2:L.pos.vx+L.width+A>L.pos.pw-p?L.pos.vx=L.pos.pw-p-L.width-A:L.pos.vx<p&&(L.pos.vx=p),L.pos.ph-2*p<L.height?(L.pos.vy=p,L.height=L.pos.ph-2*p):L.pos.vy+L.height>L.pos.ph-p?L.pos.vy=L.pos.ph-p-L.height:L.pos.vy<p&&(L.pos.vy=p)}}function g(t){if(t||(L.height=b.outerHeight(),"manifest"!==L.source&&(L.width=b.width()),m()),b.css({width:L.width+A+"px",display:"block"}),L.global)b.css({left:"50%","margin-left":"-"+((L.width+A)/2).round(0)+"px"});else if(b.css({left:L.pos.vx+"px"}),L.nose){e("style#my-modal-style-"+L.cid).size()||b.append('<style id="my-modal-style-'+L.cid+'"></style>');var n="",r=e("style#my-modal-style-"+L.cid);("top"==L.nose||"bottom"==L.nose)&&(n+="div.my-modal-"+L.cid+".nose-"+L.nose+":before {left:"+(L.pos.ox-L.pos.px+L.pos.ow/2-L.pos.vx)+"px!important;}",r.text(n)),("left"==L.nose||"right"==L.nose)&&(n+="div.my-modal-"+L.cid+".nose-"+L.nose+":before {top:"+(L.pos.oy-L.pos.py+L.pos.oh/2-L.pos.vy)+"px!important;}",r.text(n))}L.screen?L.global?(_.css({top:0,left:0,width:2*L.pos.ww+"px",height:2*L.pos.wh+"px",display:"block",position:"fixed","z-index":L.z-1}),l(L.screen)&&_.css({background:L.screen?L.screen:"rgba(30,65,100,0.8)"})):_.css({top:0,left:0,position:"absolute",width:L.pos.pw+"px",height:L.pos.ph+"px",display:"block",background:l(L.screen)?L.screen:"rgba(40,80,120,0.5)","z-index":L.z-1}):_.size()&&_.hide(),L.height>L.pos.wh?(b.height(L.pos.wh-30),w.css({"overflow-y":e.browser.webkit?"overlay":"scroll"})):w.css({"overflow-y":"none"}),b.animate({top:L.pos.vy+"px",opacity:"1"},L.animate)}function v(){try{w.my("remove")}catch(t){}C.data("modals")[L.cid]=null,w.parent().unbind(".my").remove(),_.off(".my"+L.cid),L.screen&&function(e){e&&o||_.hide()}.delay(50,L.global),L.global&&(o=!1,e("body").css({overflow:"auto"}))}function y(e){try{D(null,null)}catch(t){}(function(){E.reject(e)}).delay(0)}var b,w,C,_,S,x,k,E=e.Deferred(),T={},R=this,A=0,O=0,D=h(f)?f:function(){return!1},N=u(r)?r:{},L=R.data("modal");if(s(R,E.promise()),L){if(null==r||c(r)){if(w=L.form,_=L.bg,C=L.root,D=L.done,x=w.my("data"),k=!1,r){try{D(null,null)}catch(I){}v(),R.removeData("modal"),a[L.cid]&&a[L.cid].reject("Cancelled"),delete a[L.cid],L=null}else{try{k=D(w.my("valid")?null:w.my("errors"),x)}catch(I){}k||(v(),R.removeData("modal"),function(){a[L.cid]&&a[L.cid].resolve(x),delete a[L.cid],L=null}.delay(0))}return R}if(N)return y("Locked"),R}return R.is(":visible")?(N=t(T,r,{}))?N.global&&o?(y("Locked"),R):(L=s({type:"DOM",source:"manifest",form:null,modal:null,root:null,bgroot:null,caller:R,manifest:{},data:{},global:!1,screen:!1,drag:!1,focus:!0,close:!0,silent:!0,esc:!1,enter:!1,bound:!1,nose:"",width:p||300,height:null,x:"0",y:"0",z:"1901",background:"white",css:"",animate:200},N,{promise:E.promise(),cid:Number.random(268435456,4294967295).toString(16)}),L.done=h(L.done)?L.done:D,l(L.align)&&L.align&&(L.x=(L.align.match(/(left|right):\-?\d+(\.\d+)?(%|px)?/g)||["0"])[0],L.y=(L.align.match(/(top|bottom):\-?\d+(\.\d+)?(%|px)?/g)||["0"])[0]),L.width=1*(e.my.f.getref(l(L.manifest)?e.my.cache(L.manifest):L.manifest,"params.width")||L.width),L.type="DOM",R.hasClass("my-form")?(L.type="form",L.root=L.root||R):R.data("my")?(L.type="control",L.root=L.root||R.my().root):(L.root=L.root||R.parents(".my-form").eq(0),L.root.size()||(L.root=e(i))),L.global?(L.root=e(i),L.bgroot=e(n||i)):L.bgroot=L.root,C=L.root,C.data("modals")||C.data("modals",{}),m(),b=e('<div class="my-modal my-modal-'+(L.global?"fullscreen ":"overlay ")+L.css+(L.nose?" nose-"+L.nose:"")+'"></div>').prependTo(L.root),b.addClass("my-modal-"+L.cid),A=b.outerWidth(),O=b.outerHeight(),b.hide(),b.html('<div class="my-modal-form"></div>'),w=b.find(".my-modal-form"),L.close&&(S=e(l(L.close)?L.close:'<div class="my-modal-close" title="Close">×</div>').prependTo(b).on("click.my",function(){R.modal(!0)}),S.css({"z-index":("+"===(L.z+"").to(1)?"+":"")+(1*L.z+1)})),_=L.bgroot.find(">.my-modal-screen"),L.screen&&(_.size()||(_=e('<div class="my-modal-screen" style="display:none;"></div>').prependTo(L.root)),L.esc&&_.on("click.my"+L.cid,function(){R.modal(!0)})),R.data("modal",L),L.silent&&b.on("change.my",function(){return!1}),b.css({display:"block",height:"none",opacity:"0.005","z-index":L.z,width:"auto"}),b.css(L.global?{position:"fixed",left:"50%",top:L.pos.vy+"px",display:"block",height:"none",opacity:"0.005","z-index":L.z,width:"auto","margin-left":"-"+((L.width+A)/2).round(0)+"px"}:{position:"absolute",left:L.pos.vx+"px",top:L.pos.vy+"px",display:"block",height:"none",opacity:"0.005","z-index":L.z,width:"auto"}),w.my(L.manifest,L.data).then(function(){var t,n,r,i,c;if(s(L,{form:w,bg:_,cancel:function(){R.modal(!0)},commit:function(){R.modal()}}),b.data("modal",L),L.height=b.outerHeight(),"manifest"!==L.source&&(L.width=b.width()),m(),b.css({top:L.pos.vy+"px"}),g(!0),C.data("modals")[L.cid]=L,a[L.cid]=E,w.bind("commit.my",function(){return L.commit.delay(50),!1}).bind("cancel.my",function(){return L.cancel.delay(50),!1}),b.bind("layout.my",function(){g()}.debounce(50)),L.global&&(o=R,e("body").css({overflow:"hidden"})),L.global||!L.esc&&!L.enter||w.bind("keydown.my",function(t){var n=t.keyCode;return 27==n&&L.esc?(L.cancel(),!1):13==n&&L.enter&&!e(t.target).is("textarea")?(L.commit.delay(50),!1):void 0}),L.focus===!0){i=!1,c=L.manifest.ui;for(r in c)i||(n=w.find(r),n.size()&&n.is("input, textarea")&&(i=!0,n.focus()))}else l(L.focus)&&w.find(L.focus).focus();if(t=w.find("img").filter(function(){return""!=e(this).attr("src")}),t.size()){var u=function(){"manifest"!==L.source&&b.css({width:"auto"}),g()}.after(t.size());t.each(function(){e(this).bind("load",u)})}L.drag&&e.fn.draggable&&(l(L.drag)?b.draggable({handle:L.drag}):b.draggable()),E.notify("Ready")}).fail(function(e){v(),R.data("modal",null),E.reject(e)}),R):(y("Invalid data"),R):(y("Object must be visible"),R)}}(jQuery);

/*jQuery Tags 0.4*/
!function(e){function t(e,t){var n,r=0,i=e.data("tags");if(i.data=[],t.length){var o=t.unique();for(i.tv={},e.find(".tag.active").trigger("click"),n=0;n<o.length;n++)i.ti[o[n]]&&(i.$t[o[n]].trigger("click"),r+=1)}r||(null!=i.empty?e.find(".tags-empty").trigger("click"):e.find(".tag.active").trigger("click"))}var n={init:function(n){var r,i,o,s,a,c,l,u,h,d,f=e(this),p=[],m=[],g={},v={},y={},w={data:[],tags:[],disabled:!1,event:"change",tagcss:"tag pseudolink",template:function(e){return('<span class="'+w.tagcss+' {css}" data-value="{value}">{name}</span>').assign(e)},empty:null,tagshim:" ",groupshim:" ",silent:!1},b=e.type(n),_=null;for("object"==b?e.extend(!0,w,n):"array"==b&&(w.tags=n.slice(0)),f.data("tags")&&(w.data=f.data("tags").data.slice(0)),null!=w.empty&&(l=w.empty,b=e.type(l),/^nu|^str/.test(b)?(c="",a=String(l)):"object"==b&&(a=Object.keys(l)[0],c=l[a]),"string"==typeof c&&(_=c,g[c]={name:a,i:null,j:null,value:c,css:"tags-empty"})),i=w.tags,a=0;a<i.length;a++){for(l=i[a],s=[],o=[],b=e.type(l),/^num|^str|^ob/.test(b)?o=[l]:"array"==b&&(o=l.slice(0).unique()),c=0;c<o.length;c++)if(u=o[c],h=e.type(u),/^num|^str/.test(h))s.push({name:String(u),value:String(u)});else if("object"==h)for(d in u)s.push({name:String(d),value:String(u[d])});s.length&&m.push(s.slice(0))}for(a=0;a<m.length;a++){for(s=[],c=0;c<m[a].length;c++)l=m[a][c].value,g[l]||(g[l]=!0,s.push(m[a][c]));s.length&&p.push(s.slice(0))}for(a=0;a<p.length;a++)for(c=0;c<p[a].length;c++)l=p[a][c].value,g[l]={name:p[a][c].name,i:a,j:c,value:l,css:"tags-row"+a};for(r="",null!=_&&(r+=w.template(g[_])+w.groupshim),a=0;a<p.length;a++)for(a&&(r+=w.groupshim),c=0;c<p[a].length;c++)c&&(r+=w.tagshim),r+=w.template(g[p[a][c].value]);return f.html(r),f.off(".tag"),f.on("click.tag",".tag",function(){var t,n,r=e(this),i=r.data("value");if(!w.disabled){if(r.is(".tags-empty"))f.find(".tag").removeClass("active"),v={},_&&(v[_]=!0),r.addClass("active");else{if(r.is(".active"))r.removeClass("active"),v[i]=!1;else{for(t=g[i].i,f.find(".tag.tags-row"+t).removeClass("active"),n=0;n<p[t].length;n++)v[p[t][n].value]=!1;r.addClass("active"),v[i]=!0,_&&(v[_]=!1)}Object.values(v).compact(!0).length?f.find(".tags-empty").removeClass("active"):(v={},_&&(v[_]=!0),f.find(".tags-empty").addClass("active"))}w.data=[];for(t in v)v[t]&&w.data.push(t);f.data("value",w.data),w.silent||f.trigger("change")}}),f.find(".tag").each(function(){var t=e(this),n=t.data("value");y[n]=t}),e.extend(w,{ti:g,tv:v,$t:y}),f.addClass("my-tags").data("tags",w),w.silent=!0,t(f,w.data),w.silent=!1,f},disable:function(t){void 0!==t&&(e(this).data("tags").disabled=!!t)},data:function(n){var r=e(this).data("tags"),i=n;return"string"==typeof i&&(i=[n]),r&&i&&"array"==e.type(i)&&!r.disabled?(r.silent=!0,t(e(this),i),r.silent=!1,e(this).data("tags").data):r?r.data:[]}};e.fn.tags=function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist in jQuery.tags"):n.init.apply(this,arguments)}}(jQuery);

/*
 * CloudWall.me 1.0.1 library functions
 * Require Sugar 1.4.x, jQuery1.10+, jQuery.my 1.0.0+
 */

if (!("cw" in window)) window.cw={};
if (!cw.lib) cw.lib={};

(function(root){
	
	var _version = "cw.lib 1.0.0";
	
	var P = {
		notes:"#cw-notes",
		notesDelay:3000,
		defaultJpegQuality:0.95,
		scrollAnimate:200
	}
	
	var n = function (o) {return o!==null && o!==undefined;},
	isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
	isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction;
	
	
	/******* GENERAL LIB FUNCTIONS *******/
	
	$.extend(root,{
		"config": function(){ return P },
		"version": function(){ return _version;},
		"scroll":function (pos) {
			$body = $(document);
			if (pos!=null) $body.animate({scrollTop:pos},P.scrollAnimate);
			else return $body.scrollTop();
		},
		"note":function _note (msg, type, delay){
			// Shows fading notes on right side of screen
			var type0=type||"";
			$('<div class="'+type0+'" style="display:none">'+msg+'</div>')
				.prependTo($(P.notes))
				.slideDown(100)
				.delay(delay||P.notesDelay)
				.fadeOut(700, function (){$(this).remove()});
			return type0;
		},
		"getref":$.my.f.getref, //get obj branch by ref (obj, string reference like "state.form.width")
		"json":$.my.f.tojson,
		"unjson":$.my.f.unjson,
		"sdbm":$.my.f.sdbmCode,
		"js2txt":(function(){
			// outputs js object as string
			// js2txt(srcObj, tabChar) >> string
			
			function f(n){return n<10?'0'+n:n;}
			var tabs= '\t'.repeat(20),  fj = JSON.stringify;
			function s2 (w, ctab0, tab){
				var tl=0,a,i,k,l,v,ctab=ctab0||0,xt = tabs;
				if (tab && isS(tab)) {
					tl=(tab+"").length;xt = (tab+"").repeat(20);
				}
				switch((typeof w).substr(0,3)){
					case 'str': return fj(w).replace(/<\/scri/ig,'<\\u002fscri');
					case'num':return isFinite(w)?''+String(w):'null';
					case 'boo': case'nul':return String(w); 
					case 'fun': return w.toString()
					.replace(/^(function)([^\(]*)(\([^\)]*)([\n\t][^)]*)(\).*)/,"$1 $3$5")
					.replace(/(})([^}]*$)/,'$1')
					.replace(/\n([^\t\n])/g,'\n'+(tab?xt.to(ctab*tl+tl):"")+'$1')
					.replace(/<\/scri/ig,'<\\u002fscri');
					//.replace(/\t\}$/,"}");
					case 'obj': if(!w) return'null';
						if (Object.isRegExp(w)) return w.toString();
						if (typeof w.toJSON==="function") return s2(w.toJSON(),ctab+(tab?1:0),tab);
						a=[];
						if (Object.isArray(w)){
							for(i=0; i<w.length; i+=1){
								a.push(s2(w[i],ctab+(tab?1:0),tab)||'null');
							}
							return'['
							+a.join(','+(tab?"\n"+xt.to(ctab*tl+tl):""))
							+']';
						}
						for (k in w) if (Object.isString(k)) {
							v=s2(w[k],ctab+(tab?1:0),tab);
							if(v) a.push((tab?"\n"+xt.to(ctab*tl+tl):"")
													 +s2(k,ctab+(tab?1:0),tab)+': '+v);
						};
						return '{'+a.join(',')+(tab?"\n"+xt.to(ctab*tl):"")+'}';
				}
			}
			return s2.fill(undefined,0,undefined);
		})(),
		"mask":$.my.f.mask,
		"unmask": $.my.f.unmask,
		
		"base64":  $.my.f.base64, //(s0, decode, prefix)
					// If s0 is not string it's stringified.
					// If decode is true, decodes base64, else encodes.
					// If prefix===true, utf-8 BOM is added,
					// If prefix is a string, it’s assumed mime,
					// 	  and added to encoded data.

		"tourl64": function (s0, pwd) {
			var s, res=null;
			if (!n(s0) || (pwd && !isS(pwd)) ) return null;
			if (pwd) {try {s="!"+root.enc(s0, pwd);} catch(e) {return null;}} 
			else {
				if (isS(s0) && /^[a-z0-9\-\_]*$/i.test(s0)) return s0;
				try {s="!"+root.base64(s0);} catch(e) {return null;}
			}	
			return s.replace(/=/g,"-").replace(/\//g,"_").replace(/\+/g,".");
		},
		"fromurl64": function (s0,pwd) {
			var s, res=null;
			if (!isS(s0) || (pwd && !isS(pwd)) ) return null;
			if (!/^[\!]?[A-Za-z0-9\-_\.]*$/.test(s0)) return null;
			if (s0.substr(0,1)!=="!") return s0;
			s=s0.from(1).replace(/-/g,"=").replace(/_/g,"/").replace(/\./g,"+");
			
			if (pwd) {try {s = root.dec(s,pwd);} catch(e) {return null;}} 
			else {try {s = root.base64(s,true);} catch(e) {return null;}}
			return s;
		},
		"today": function (){var d=new Date(); return d.getFullYear()+"-"+(d.getMonth()+1).pad(2)+"-"+(d.getDate()).pad(2)},
		"overlap": function (o1, o2) {
			//overlaps o2 over o1, arrays are completely replaced, not merged
			return Object.merge(o1,o2, false, function(key,a,b) {
				if ($.type(b)!="object") return b;
				else return Object.merge(a,b,false);
			});
		},
		"a2o":function(a0, all) {
			//converts array of string to object with keys of strings
			var ob = {}, s="", v;
			if (!Object.isArray(a0)) return ob;
			for (var i=0; i<a0.length;i++) {
				v = a0[i];
				if (all || v!==null &&  v!==undefined && v!==false && v!=="") {
					if (!ob[v]) ob[v]=0;
					ob[v]+=1;
				}
			}
			return ob;
		},
		"dry": function (obj, full) {
			/*  makes shallow copy of obj and
			 * removes all keys that starts with _ except _id and _rev,
			 * if full==true, removes _id and _rev */
			var dry = {},i; 
			for (i in obj) if (obj.hasOwnProperty(i) 
					&& (i.substr(0,1)!=="_" 
					|| (!full && (i==="_id" || i==="_rev")) || i==="_attachments")
			) dry[i]=obj[i];
			return dry;
		},
		"fuse":function fuse (o1, o2) {
			// overlaps o2 over o1, arrays are completely replaced with clone of, not merged
			if (arguments.length == 0) return {};
			if (arguments.length == 1) return arguments[0];
			for (var i=1; i<arguments.length;i++) Object.merge(arguments[0],arguments[i], false, function(key,a,b) {
				if (b===undefined || b===null) return a;
				if (isA(b)) return Object.clone(b,true);
				else if (!isO(b)) return b;
				else return Object.merge(a,b,false);
			});
			return arguments[0];
		},
		"dehtml": function (s0, trim0) {
			//removes all tags except <a>
			//trims to trim length
			var trim = trim0||1e6;
			var a = $('<div>'+s0.replace(/<\s*[b-z][^>]*>/gi,"").replace(/<\s*\/[b-z][^>]*>/gi," ")+'</div>')[0].childNodes;
			var t=[], i,j, html='', text='', stop=false;
			for (i=0;i<a.length && !stop; i++) {
				var w=a[i];
				if (w.outerHTML) {
					text+=w.text;
					html+=a[i].outerHTML+" ";
				} else {
					t=(w.textContent+"").removeTags().words().compact(true);
					for (j=0;j<t.length && !stop;j++) {
						text+=t[j]+" ";
						html+=t[j]+" ";
						if (text.length>trim) stop=true;
					}
				}
				if (text.length>trim) stop=true;
			}
			return html.compact()+(stop?"...":"");
		},
		"blob2base64": $.my.f.blob2base64,
		"base642blob": $.my.f.base642blob,
		"date": function (date, format0) {
		      /*
		       *	formats dates, format may be null (treated as "short"), 
		       *	"short", "long" "full"
		       *	or whatever (treated as "full")
		       *	example input date format: 2012.08.17 or 2009-12-31T10:00
		       * 
		       */
			var format = format0||"short", d = "", df = Date.create(date, "en"),
			 	x = function(s) {return df.format(s, "en")},
			 	f = {short:"{Mon}", long:"{Month}"}
			if (df.isValid()) {
				if (format=="tiny") {
					if (!df.isThisYear()) d = x("{mon}'{yy}").capitalize();
					else if (df.isToday()) {
						if (/([01][0-9]|2[0-3]):[0-5][0-9]/.test(String(date)) || $.type(date)=="number") d=x("{H}:{mm}");
						else d="Today";
					} else {
						d = df.isYesterday()?"Day ago":df.isTomorrow()?"Tomorrow":x("{Mon} {d}","en");
					}
				} else {
					if (format == "short" || format == "long") {
						d = df.isYesterday()?"Day ago":df.isToday()?"Today":df.isTomorrow()?"Tomorrow":x(f[format]+" {d}","en");
						d+= df.isThisYear()?"":x(" '{yy}");
					} else d = x("{Month} {d}, {yyyy}");
					if (/([01][0-9]|2[0-3]):[0-5][0-9]/.test(String(date)) || $.type(date)=="number") d+=x(", {H}:{mm}");
				}
				return d;
			}
			return "—";
		},
		"footprint": function _crc (doc){
			// makes quick CRC of json-nable object
			// (no fns and regexps, no circular refs)
			// of CouchDb formatted doc,
			// if obj is invalid return near random num
			var i, crc=Date.now().toString(36), dry={}, obj={}, att;
			try {
				//build proxy to hash
				dry = cw.lib.dry(doc);
				//maintain 1st level order
				Object.keys(dry)/*.sortBy()*/.forEach(function(i){obj[i]=dry[i]});
				dry=null;
				// trim unnecessery attachments info
				if (isO(doc._attachments) && Object.size(doc._attachments)) {
					att = doc._attachments;
					obj._attachments = {};
					for (i in att) obj._attachments[i] = Object.select(att[i],"digest")
				}
				crc = root.crc2(obj);
			} catch (e) {}
			return crc;
		},
		"crc2": (function() {
			var sdbm, keys = Object.keys,
			type = $.type;
	
			sdbm = function (s){
				//very fast hash used in Berkeley DB
			    for (var hash=0,i=0;i<s.length;i++)
					hash=s.charCodeAt(i)+(hash<<6)+(hash<<16)-hash;
			    return (1e11+hash).toString(36);
			};
		
			function _footprint (obj){
				var i,k,h,t = type(obj);
				if (/^(ob|ar)/.test(t)) {
					k=keys(obj);
					if ("array"!=t) k.sort();
					h="";
					for(i in k) h+="///"+k[i]+"/"+_footprint(obj[k[i]])+"///";
					return sdbm("///"+t+"/"+h);
				}
				else {
					return sdbm(obj+"");
				}
			}
			return _footprint;
		})(),
		"jsmin":function (input0, level0) {
			// minifies js, doug crockford jsmin
			// input is string or object,
			// outputs string
			var input = (isO(input0)||isA(input0)?cw.lib.json(input0):(input0+""))||'({})',
					level = level0 || 2,
					ret,
					a = '',
					b = '',
					EOF = -1,
					LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
					DIGITS = '0123456789',
					ALNUM = LETTERS + DIGITS + '_$\\',
					theLookahead = EOF;
		
			function isAlphanum(c) {
				return c != EOF && (ALNUM.has(c) || c.charCodeAt(0) > 126);
			}
		
			var iChar = 0,
					lInput = input.length;
		
			function getc() {
		
				var c = theLookahead;
				if (iChar == lInput) return EOF;
		
				theLookahead = EOF;
				if (c == EOF) { 	c = input.charAt(iChar); ++iChar; }
				if (c >= ' ' || c == '\n') return c;
				if (c == '\r') return '\n';
				return ' ';
			}
		
			function getcIC() {
				var c = theLookahead;
				if (iChar == lInput) return EOF;
				theLookahead = EOF;
				if (c == EOF) { c = input.charAt(iChar); 	++iChar; }
				if (c >= ' ' || c == '\n' || c == '\r') return c;
				return ' ';
			}
		
			function peek() {
				theLookahead = getc();
				return theLookahead;
			}
		
			function next() {
				var c = getc();
				if (c == '/') {
					switch (peek()) {
						case '/':
							for (;;) {
								c = getc();
								if (c <= '\n') return c;
							}
							break;
						case '*':
							getc();
							if (peek() == '!') {
								getc();
								var d = '/*!';
								for (;;) {
									c = getcIC(); 
									switch (c) {
										case '*':
											if (peek() == '/') {
												getc();
												return d + '*/';
											}
											break;
										case EOF:
											throw 'Error: Unterminated comment.';
										default: d += c;
									}
								}
							} else {
								for (;;) {
									switch (getc()) {
										case '*':
											if (peek() == '/') {
												getc();
												return ' ';
											}
											break;
										case EOF:
											throw 'Error: Unterminated comment.';
									}
								}
							}
							break;
						default:
							return c;
					}
				}
				return c;
			}
		
			function action(d) {
		
				var r = [];
		
				if (d == 1) {
					r.push(a);
				}
		
				if (d < 3) {
					a = b;
					if (a == '\'' || a == '"') {
						for (;;) {
							r.push(a);
							a = getc();
							if (a == b) break;
							if (a <= '\n') throw 'Error: unterminated string literal: ' + a;
							if (a == '\\') {
								r.push(a);
								a = getc();
							}
						}
					}
				}
		
				b = next();
		
				if (b == '/' && '(,=:[!&|'.has(a)) {
					r.push(a);
					r.push(b);
					for (;;) {
						a = getc();
						if (a == '/') break;
						else if (a == '\\') {
							r.push(a);
							a = getc();
						} 
						else if (a <= '\n') throw 'Error: unterminated Regular Expression literal';
						r.push(a);
					}
					b = next();
				}
		
				return r.join('');
			}
		
			function m() {	
				var r = [];
				a = '\n';
				r.push(action(3));
				while (a != EOF) {
					switch (a) {
						case ' ':
							if (isAlphanum(b)) {
								r.push(action(1));
							} else {
								r.push(action(2));
							}
							break;
						case '\n':
							switch (b) {
								case '{':
								case '[':
								case '(':
								case '+':
								case '-':
									r.push(action(1));
									break;
								case ' ':
									r.push(action(3));
									break;
								default:
									if (isAlphanum(b)) {
										r.push(action(1));
									} else {
										if (level == 1 && b != '\n') {
											r.push(action(1));
										} else {
											r.push(action(2));
										}
									}
							}
							break;
						default:
							switch (b) {
								case ' ':
									if (isAlphanum(a)) {
										r.push(action(1));
										break;
									}
									r.push(action(3));
									break;
								case '\n':
									if (level == 1 && a != '\n') {
										r.push(action(1));
									} else {
										switch (a) {
											case '}':
											case ']':
											case ')':
											case '+':
											case '-':
											case '"':
											case '\'':
												if (level == 3) r.push(action(3));
												else r.push(action(1));
												break;
											default:
												if (isAlphanum(a)) r.push(action(1));
												else r.push(action(3));
										}
									}
									break;
								default:
									r.push(action(1));
									break;
							}
					}
				}
				return r.join('');
			}
		
			ret = m(input);
			return ret.replace(/^\n+/,'');
			
		},
		"caret": (function () {
			
			// gets/sets caret, code from http://bit.ly/QmoAKW
			// cw.lib.caret ($elt or elt, caretPos or null)
			
			function getCaretPosition(element) {
				var ie = (typeof document.selection != "undefined" && document.selection.type != "Control") && true;
				var w3 = (typeof window.getSelection != "undefined") && true;
				var caretOffset = 0;
				if (w3) {
					var range = window.getSelection().getRangeAt(0);
					var preCaretRange = range.cloneRange();
					preCaretRange.selectNodeContents(element);
					preCaretRange.setEnd(range.endContainer, range.endOffset);
					caretOffset = preCaretRange.toString().length;
				}
				else if (ie) {
					var textRange = document.selection.createRange();
					var preCaretTextRange = document.body.createTextRange();
					preCaretTextRange.expand(element);
					preCaretTextRange.setEndPoint("EndToEnd", textRange);
					caretOffset = preCaretTextRange.text.length;
				}
				return caretOffset;
			}

			function setCaretPos(el, sPos){
			  /*range = document.createRange();					
			  range.setStart(el.firstChild, sPos);
			  range.setEnd  (el.firstChild, sPos);*/
			  var charIndex = 0, range = document.createRange();
					range.setStart(el, 0);
					range.collapse(true);
					var nodeStack = [el], node, foundStart = false, stop = false;

					while (!stop && (node = nodeStack.pop())) {
						if (node.nodeType == 3) {
							var nextCharIndex = charIndex + node.length;
							if (!foundStart && sPos >= charIndex && sPos <= nextCharIndex) {
								range.setStart(node, sPos - charIndex);
								foundStart = true;
							}
							if (foundStart && sPos >= charIndex && sPos <= nextCharIndex) {
								range.setEnd(node, sPos - charIndex);
								stop = true;
							}
							charIndex = nextCharIndex;
						} else {
							var i = node.childNodes.length;
							while (i--) {
								nodeStack.push(node.childNodes[i]);
							}
						}
					}
				selection = window.getSelection();				 
				selection.removeAllRanges();					   
				selection.addRange(range);
			} 
			
			return function getSetCaret(el0, pos) {
				if (!el0) return null;
				var el;
				if (el0.jquery) el = el0[0];
				else if (el0.nodeType===3) el = el0.parentNode;
				else el=el0;
				if (null==pos) return getCaretPosition(el);
				else return setCaretPos(el, pos);
			}
		})()
	}); // -- end cw.lib
	
	
	
	// Image processor
	// Require jQuery, Sugar
	// Code portions from http://www.html5rocks.com/en/tutorials/canvas/imagefilters/
	// Usage like
	// cw.lib.image($("#someImg")).resample(100).sharpen(2).gray().jpeg(0.5) >> returns dataURL
	// call to .jpeg() or .png() destroys underlying canvas and free mem on gc
	
	var fl = {};
	fl.getPixels = function(img) {
	  var c = fl.getCanvas(img.width, img.height);
	  var ctx = c.getContext('2d');
	  ctx.drawImage(img, 0,0, img.width, img.height);
	  return ctx.getImageData(0,0,c.width,c.height);
	};

	fl.getCanvas = function(w,h) {
	  var c = document.createElement('canvas');
	  c.width = w;c.height = h;
	  return c;
	};
	
	fl.filterImage = function(filter, image, var_args) {
	  var args = [fl.getPixels(image)];
	  for (var i=2; i<arguments.length; i++) args.push(arguments[i]);
	  var ct=fl.getCanvas(image.width, image.height);
	  ct.getContext('2d').putImageData(filter.apply(null, args) ,0,0 );
	  return ct;
	};
	
	fl.grayscale = function(pixels, args) {
	  var d = pixels.data;
	  for (var i=0; i<d.length; i+=4) {
	    var r = d[i];
	    var g = d[i+1];
	    var b = d[i+2];
	    // CIE luminance for the RGB
	    // The human eye is bad at seeing red and blue, so we de-emphasize them.
	    var v = 0.2126*r + 0.7152*g + 0.0722*b;
	    d[i] = d[i+1] = d[i+2] = v|0;
	  }
	  return pixels;
	};
	
	fl.tmpCanvas = document.createElement('canvas');
	fl.tmpCtx = fl.tmpCanvas.getContext('2d');

	fl.createImageData = function(w,h) {
	  return this.tmpCtx.createImageData(w,h);
	};

	fl.convolute = function(pixels, weights, opaque) {
	  var side = Math.round(Math.sqrt(weights.length));
	  var halfSide = Math.floor(side/2);
	  var src = pixels.data;
	  var sw = pixels.width;
	  var sh = pixels.height;
	  // pad output by the convolution matrix
	  var w = sw;
	  var h = sh;
	  var output = fl.createImageData(w, h);
	  var dst = output.data;
	  // go through the destination image pixels
	  var alphaFac = opaque ? 1 : 0;
	  for (var y=0; y<h; y++) {
	    for (var x=0; x<w; x++) {
	      var sy = y;
	      var sx = x;
	      var dstOff = (y*w+x)*4;
	      // calculate the weighed sum of the source image pixels that
	      // fall under the convolution matrix
	      var r=0, g=0, b=0, a=0;
	      for (var cy=0; cy<side; cy++) {
	        for (var cx=0; cx<side; cx++) {
	          var scy = sy + cy - halfSide;
	          var scx = sx + cx - halfSide;
	          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
	            var srcOff = (scy*sw+scx)*4;
	            var wt = weights[cy*side+cx];
	            r += src[srcOff] * wt;
	            g += src[srcOff+1] * wt;
	            b += src[srcOff+2] * wt;
	            a += src[srcOff+3] * wt;
	          }
	        }
	      }
	      dst[dstOff] = r;
	      dst[dstOff+1] = g;
	      dst[dstOff+2] = b;
	      dst[dstOff+3] = a + alphaFac*(255-a);
	    }
	  }
	  return output;
	};
	
	var FF = []; for (var i=0;i<256;i++) FF.push(i);
	
	root.image = function (obj0) {
		var obj=obj0, i, src;
		var im = {
			format:"",
			"canvas":function (){return src},
			"width":function(){return src.width},
			"height":function(){return src.height},
			"ctx":function (){
				return src.getContext('2d');
			},
			"data":function (){
				return src.getContext('2d').getImageData(0,0,src.width,src.height)
			},
			"jpeg":function(q, keep) {
				var s=src.toDataURL('image/jpeg',(parseFloat(q)||P.defaultJpegQuality).clamp(0.1,0.9999));
				if (!keep) im.destroy();
				return s;
			},
			"png": function (keep){
				var s=src.toDataURL('image/png');
				if (!keep) im.destroy();
				return s;
			},
			"destroy":function(){
				src=null;
			},
			"resample": function(width, height){
				if (isNaN(width)) throw "Invalid width to resample image";
				var iw=src.width,
					ih=src.height,
					w = parseInt(width).clamp(1,iw*5),
					h = parseInt(height)||parseInt(Math.round(w*ih/iw)).clamp(1,ih*5),
					cs2,cs;
				//resample
				cs =fl.getCanvas(w, h);
				if (w<iw/2) {
					// double downsample to remove
					// bilinear-scaler artifacts
					cs2 = fl.getCanvas(w*2, h*2);
					cs2.getContext("2d").drawImage(src, 0, 0, iw, ih, 0, 0, w*2, h*2);
					cs.getContext("2d").drawImage(cs2, 0, 0, w*2, h*2, 0, 0, w, h);
				} else {
					cs.getContext("2d").drawImage(src, 0, 0, iw, ih, 0, 0, w, h);
				};
				src=cs;
				return im;
			},
			"sharpen": function(q){
				var k=(parseFloat(q)||1).clamp(0.001,100),
					c=-0.03*k||-0.03, 
					t = -0.1*k||-0.1,
					r = 1-4*(c+t);
				src=fl.filterImage(fl.convolute, src, [c,t,c,t,r,t,c,t,c]);
				return im;
			},
			"gray":function (){
				src=fl.filterImage(fl.grayscale, src);
				return im;
			},
			"convolute":function(a){
				src=fl.filterImage(fl.convolute, src, a);
				return im;	
			},
			"map": function(){
				// cache transform
				var m=[FF.slice(0)], f, ctr=0;
				for (var i=0;i<arguments.length && i<3;i++) {
					if (isF(arguments[i])) {
						m[ctr]=[], f=arguments[i];
						try {
							for (var j=0;j<256;j++) m[i][j]=((f(j/255)||0)*255).clamp(0,255)|0;
							ctr+=1;
						} catch (e) {
							m[ctr]=FF.slice(0);
						}
					}
				};
				if (m.length===1) m[2]=m[1]=m[0];
				if (m.length===2) m[2]=m[1];
				
				
				//go
				var px = src.getContext('2d').getImageData(0,0,src.width,src.height),
					d=px.data;
				for (var i=0; i<d.length; i+=4) {
					d[i]=m[0][d[i]];
					d[i+1]=m[1][d[i+1]];
					d[i+2]=m[2][d[i+2]];
				}
				src.getContext('2d').putImageData(px,0,0);
				return im;
			},
			"brightness": function (gamma){
				var k=(parseFloat(gamma)||1).clamp(0.1,10), 
					f = function (a) {return Math.pow(a,1/gamma)};
				im.map(f);
				return im;
			},
			"contrast": function (gamma) {
				var k=(parseFloat(gamma)||1).clamp(0.1,10), 
				f = function (a) {
					var t = Math.abs((a-0.5)*2), hg = Math.pow(t,1/gamma)/2;
					return a>=0.5?hg+0.5:a-hg+t/2;
				};
				im.map(f);
				return im;
			}
		};
		if (isS(obj)) {
			if (/^data:image\/(jpe|png)$/.test(obj.substr(0,14))) i = new Image(), i.src=obj;
		} else if (typeof obj ==="object") {
			//is jQuery
			if (obj.jquery) obj=obj[0];
			//is image
			if (("nodeName" in obj) && /^(IMG|CANVAS)$/.test(obj.nodeName)) i=obj;
		} 
		if (i) {
			src=fl.getCanvas(i.width, i.height);
			src.getContext('2d').drawImage(i, 0, 0, i.width, i.height);
		}
		
		if (src) return im;
		else return null;
	}
})(cw.lib);





/**
* AES encriptor/decriptor,
* correctly encrypts/decrypts native js objects
* with functions and regexps
*	
* Requires SugarJS, jQuery.my
*
* Based on Mark Percival Gibberish-AES
* 
* Usage: cw.lib.enc(String or Any to encode, "password"), cw.lib.dec(encoded string, "password")
* Outputs: AES Encrypted text encoded in Base64
*/

$.extend(cw.lib, (function () {
	var SC = String.fromCharCode, Nr = 14, Nk = 8, Decrypt = false,
	J=function(a){return a.join("")},
    enc_utf8 = function(s)  {
        try {return unescape(encodeURIComponent(s));}
        catch(e) {throw 'Error on UTF-8 encode';}
    },

    dec_utf8 = function(s) {
        try { return decodeURIComponent(escape(s)); }
        catch(e) { throw ('Bad Key');}
    },

    padBlock = function(byteArr)  {
        var array = [], cpad, i=0;
        if (byteArr.length < 16) {
            cpad = 16 - byteArr.length;
            var a= [cpad, cpad, cpad, cpad];
            array = a.add(a.add(a));
        }
        for (;i < byteArr.length; i++) array[i] = byteArr[i];
        return array;
    },

    block2s = function(block, lastBlock) {
        var string = '', padding, i;
        if (lastBlock) {
            padding = block[15];
            if (padding > 16) {
                throw ('Bad Key');
            }
            if (padding === 16) {
                return '';
            }
            for (i = 0; i < 16 - padding; i++) {
                string += SC(block[i]);
            }
        } else {
            for (i = 0; i < 16; i++) {
                string += SC(block[i]);
            }
        }
        return string;
    },

    a2h = function(numArr){
        var string = [], i=0;
        for (; i < numArr.length; i++) {
            string.push((numArr[i] < 16 ? '0': '') + numArr[i].toString(16));
        }
        return J(string);
    },

    h2a = function(s) {
        var ret = [];
        s.replace(/(..)/g,
        function(s) {
            ret.push(parseInt(s, 16));
        });
        return ret;
    },

    s2a = function(string, binary) {
        if (! binary) string = enc_utf8(string);
        return string.codes();
    },


    randArr = function(num) {
        var result = [], i=0;
        for (; i < num; i++) result = result.concat(Math.floor(Math.random() * 256));
        return result;
    },

    openSSLKey = function(passwordArr, saltArr) {
        var rounds = 3,  key = [],
        iv = [], md5_hash = [],
        result = [], data00 = passwordArr.concat(saltArr), i=1;
        md5_hash[0] = MD5(data00);
        result = md5_hash[0];
        for (; i < rounds; i++) {
            md5_hash[i] = MD5(md5_hash[i - 1].concat(data00));
            result = result.concat(md5_hash[i]);
        }
        key = result.slice(0, 4 * Nk);
        iv = result.slice(4 * Nk, 4 * Nk + 16);
        return {
            key: key,
            iv: iv
        };
    },

    rawEncrypt = function(plaintext, key, iv) {
        // plaintext, key and iv as byte arrays
        key = expandKey(key);
        var numBlocks = Math.ceil(plaintext.length / 16),
        blocks = [],
        i,
        cipherBlocks = [];
        for (i = 0; i < numBlocks; i++) {
            blocks[i] = padBlock(plaintext.slice(i * 16, i * 16 + 16));
        }
        if (plaintext.length % 16 === 0) {
        	var a=[16, 16, 16, 16]
            blocks.push(a.add(a.add(a)));
            // CBC OpenSSL padding scheme
            numBlocks++;
        }
        for (i = 0; i < blocks.length; i++) {
            blocks[i] = (i === 0) ? xorBlocks(blocks[i], iv) : xorBlocks(blocks[i], cipherBlocks[i - 1]);
            cipherBlocks[i] = encryptBlock(blocks[i], key);
        }
        return cipherBlocks;
    },

    rawDecrypt = function(cryptArr, key, iv, binary) {
        //  cryptArr, key and iv as byte arrays
        key = expandKey(key);
        var numBlocks = cryptArr.length / 16,
        cipherBlocks = [],
        i=0,
        plainBlocks = [],
        string = [];
        for (; i < numBlocks; i++) {
            cipherBlocks.push(cryptArr.slice(i * 16, (i + 1) * 16));
        }
        for (i = cipherBlocks.length - 1; i >= 0; i--) {
            plainBlocks[i] = decryptBlock(cipherBlocks[i], key);
            plainBlocks[i] = (i === 0) ? xorBlocks(plainBlocks[i], iv) : xorBlocks(plainBlocks[i], cipherBlocks[i - 1]);
        }
        for (i = 0; i < numBlocks - 1; i++) {
            string.push(block2s(plainBlocks[i]));
        }
        string.push(block2s(plainBlocks[i], true));
        return binary ? J(string) : dec_utf8(J(string)); 
    },

    encryptBlock = function(block, words) {
        Decrypt = false;
        var state = addRoundKey(block, words, 0),
        round=1;
        for (; round < (Nr + 1); round++) {
            state = subBytes(state);
            state = shiftRows(state);
            if (round < Nr) {
                state = mixColumns(state);
            }
            //last round? don't mixColumns
            state = addRoundKey(state, words, round);
        }

        return state;
    },

    decryptBlock = function(block, words) {
        Decrypt = true;
        var state = addRoundKey(block, words, Nr),
        round;
        for (round = Nr - 1; round > -1; round--) {
            state = shiftRows(state);
            state = subBytes(state);
            state = addRoundKey(state, words, round);
            if (round > 0) {
                state = mixColumns(state);
            }
            //last round? don't mixColumns
        }

        return state;
    },

    subBytes = function(state) {
        var S = Decrypt ? SBoxInv: SBox,
        temp = [],
        i;
        for (i = 0; i < 16; i++) {
            temp[i] = S[state[i]];
        }
        return temp;
    },

    shiftRows = function(state) {
        var temp = [],
        shiftBy = Decrypt ? [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3] : [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11],
        i=0;
        for (; i < 16; i++) {
            temp[i] = state[shiftBy[i]];
        }
        return temp;
    },

    mixColumns = function(state) {
        var t = [],
        c=0;
        if (!Decrypt) {
            for (; c < 4; c++) {
                t[c * 4] = G2X[state[c * 4]] ^ G3X[state[1 + c * 4]] ^ state[2 + c * 4] ^ state[3 + c * 4];
                t[1 + c * 4] = state[c * 4] ^ G2X[state[1 + c * 4]] ^ G3X[state[2 + c * 4]] ^ state[3 + c * 4];
                t[2 + c * 4] = state[c * 4] ^ state[1 + c * 4] ^ G2X[state[2 + c * 4]] ^ G3X[state[3 + c * 4]];
                t[3 + c * 4] = G3X[state[c * 4]] ^ state[1 + c * 4] ^ state[2 + c * 4] ^ G2X[state[3 + c * 4]];
            }
        }else {
            for (; c < 4; c++) {
                t[c*4] = GEX[state[c*4]] ^ GBX[state[1+c*4]] ^ GDX[state[2+c*4]] ^ G9X[state[3+c*4]];
                t[1+c*4] = G9X[state[c*4]] ^ GEX[state[1+c*4]] ^ GBX[state[2+c*4]] ^ GDX[state[3+c*4]];
                t[2+c*4] = GDX[state[c*4]] ^ G9X[state[1+c*4]] ^ GEX[state[2+c*4]] ^ GBX[state[3+c*4]];
                t[3+c*4] = GBX[state[c*4]] ^ GDX[state[1+c*4]] ^ G9X[state[2+c*4]] ^ GEX[state[3+c*4]];
            }
        }
        
        return t;
    },

    addRoundKey = function(state, words, round) {
        var temp = [],
        i;
        for (i = 0; i < 16; i++) {
            temp[i] = state[i] ^ words[round][i];
        }
        return temp;
    },

    xorBlocks = function(block1, block2) {
        var temp = [],
        i;
        for (i = 0; i < 16; i++) {
            temp[i] = block1[i] ^ block2[i];
        }
        return temp;
    },

    expandKey = function(key) {
        // Expects a 1d number array
        var w = [],
        temp = [],
        i=0,
        r, t, wij,
        flat = [],
        j;

        for (i = 0; i < Nk; i++) {
            r = key.slice(4*i,4*i+4);
            w[i] = r;
        }

        for (i = Nk; i < (4 * (Nr + 1)); i++) {
            w[i] = [];
            for (t = 0; t < 4; t++) {
                temp[t] = w[i - 1][t];
            }
            if (i % Nk === 0) {
                temp = subWord(rotWord(temp));
                temp[0] ^= Rcon[i / Nk - 1];
            } else if (Nk > 6 && i % Nk === 4) {
                temp = subWord(temp);
            }
            for (t = 0; t < 4; t++) {
                w[i][t] = w[i - Nk][t] ^ temp[t];
            }
        }
        for (i = 0; i < (Nr + 1); i++) {
            flat[i] = [];
            for (j = 0; j < 4; j++) {
            	wij=w[i * 4 + j];
                flat[i].push(wij[0], wij[1], wij[2], wij[3]);
            }
        }
        return flat;
    },

    subWord = function(w) {
        // apply SBox to 4-byte word w
        for (var i = 0; i < 4; i++) {
            w[i] = SBox[w[i]];
        }
        return w;
    },

    rotWord = function(w) {
        // rotate 4-byte word w left by one byte
        var tmp = w[0],i=0;
        for (; i < 3; i++)  w[i] = w[i + 1];
        w[3] = tmp;
        return w;
    },

    strhex = function(str,size) {
        var i=0, ret = [];
        for (; i<str.length; i+=size) ret[i/size] = parseInt(str.substr(i,size), 16);
        return ret;
    },
    invertArr = function(arr) {
        var i=0, ret = [];
        for (; i<arr.length; i++) ret[arr[i]] = i;
        return ret;
    },
    Gxx = function(a, b) {
        var i=0, ret= 0;
        for (; i<8; i++) {
            ret = ((b&1)===1) ? ret^a : ret;
            a = (a>0x7f) ? 0x11b^(a<<1) : (a<<1);
            b >>>= 1;
        }
        return ret;
    },
    Gx = function(x) {
        var i=0, r = [];
        for (; i<256; i++)r[i] = Gxx(x, i);
        return r;
    },

SBox = strhex('637c777bf26b6fc53001672bfed7ab76ca82c97dfa5947f0add4a2af9ca472c0b7fd9326363ff7cc34a5e5f171d8311504c723c31896059a071280e2eb27b27509832c1a1b6e5aa0523bd6b329e32f8453d100ed20fcb15b6acbbe394a4c58cfd0efaafb434d338545f9027f503c9fa851a3408f929d38f5bcb6da2110fff3d2cd0c13ec5f974417c4a77e3d645d197360814fdc222a908846eeb814de5e0bdbe0323a0a4906245cc2d3ac629195e479e7c8376d8dd54ea96c56f4ea657aae08ba78252e1ca6b4c6e8dd741f4bbd8b8a703eb5664803f60e613557b986c11d9ee1f8981169d98e949b1e87e9ce5528df8ca1890dbfe6426841992d0fb054bb16',2),SBoxInv = invertArr(SBox),Rcon = strhex('01020408102040801b366cd8ab4d9a2f5ebc63c697356ad4b37dfaefc591',2),G2X = Gx(2),G3X = Gx(3),G9X = Gx(9),GBX = Gx(0xb),GDX = Gx(0xd), GEX = Gx(0xe),

    
    enc = function(string, pass, binary) {
        // string, password in plaintext
        var salt = randArr(8),
        pbe = openSSLKey(s2a(pass, binary), salt),
        key = pbe.key,
        iv = pbe.iv,
        cipherBlocks,
        saltBlock = [[83, 97, 108, 116, 101, 100, 95, 95].concat(salt)];
        string = s2a(string, binary);
        cipherBlocks = rawEncrypt(string, key, iv);
        // Spells out 'Salted__'
        cipherBlocks = saltBlock.concat(cipherBlocks);
        return Base64.encode(cipherBlocks);
    },

    dec = function(string, pass, binary) {
        // string, password in plaintext
        var cryptArr = Base64.decode(string),
        salt = cryptArr.slice(8, 16),
        pbe = openSSLKey(s2a(pass, binary), salt),
        key = pbe.key,
        iv = pbe.iv;
        cryptArr = cryptArr.slice(16, cryptArr.length);
        // Take off the Salted__ffeeddcc
        string = rawDecrypt(cryptArr, key, iv, binary);
        return string;
    },
    
    MD5 = function(numArr) {
		
        function rotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }

        function addUnsigned(lX, lY) {
            var lX4,
            lY4,
            lX8,
            lY8,
            lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }

        function f(x, y, z) {
            return (x & y) | ((~x) & z);
        }
        function g(x, y, z) {
            return (x & z) | (y & (~z));
        }
        function h(x, y, z) {
            return (x ^ y ^ z);
        }
        function funcI(x, y, z) {
            return (y ^ (x | (~z)));
        }

        function ff(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function gg(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function hh(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function ii(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(funcI(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function convertToWordArray(numArr) {
            var lWordCount,
            lMessageLength = numArr.length,
            lNumberOfWords_temp1 = lMessageLength + 8,
            lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64,
            lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
            lWordArray = [],
            lBytePosition = 0,
            lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (numArr[lByteCount] << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function wordToHex(lValue) {
            var lByte,
            lCount,
            wordToHexArr = [];
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                wordToHexArr = wordToHexArr.concat(lByte);
             }
            return wordToHexArr;
        }

        var x = [],
        k,
        AA,
        BB,
        CC,
        DD,
        a,
        b,
        c,
        d,
        rnd = strhex('67452301efcdab8998badcfe10325476d76aa478e8c7b756242070dbc1bdceeef57c0faf4787c62aa8304613fd469501698098d88b44f7afffff5bb1895cd7be6b901122fd987193a679438e49b40821f61e2562c040b340265e5a51e9b6c7aad62f105d02441453d8a1e681e7d3fbc821e1cde6c33707d6f4d50d87455a14eda9e3e905fcefa3f8676f02d98d2a4c8afffa39428771f6816d9d6122fde5380ca4beea444bdecfa9f6bb4b60bebfbc70289b7ec6eaa127fad4ef308504881d05d9d4d039e6db99e51fa27cf8c4ac5665f4292244432aff97ab9423a7fc93a039655b59c38f0ccc92ffeff47d85845dd16fa87e4ffe2ce6e0a30143144e0811a1f7537e82bd3af2352ad7d2bbeb86d391',8);

        x = convertToWordArray(numArr);

        a = rnd[0];
        b = rnd[1];
        c = rnd[2];
        d = rnd[3];

        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = ff(a, b, c, d, x[k + 0], 7, rnd[4]);
            d = ff(d, a, b, c, x[k + 1], 12, rnd[5]);
            c = ff(c, d, a, b, x[k + 2], 17, rnd[6]);
            b = ff(b, c, d, a, x[k + 3], 22, rnd[7]);
            a = ff(a, b, c, d, x[k + 4], 7, rnd[8]);
            d = ff(d, a, b, c, x[k + 5], 12, rnd[9]);
            c = ff(c, d, a, b, x[k + 6], 17, rnd[10]);
            b = ff(b, c, d, a, x[k + 7], 22, rnd[11]);
            a = ff(a, b, c, d, x[k + 8], 7, rnd[12]);
            d = ff(d, a, b, c, x[k + 9], 12, rnd[13]);
            c = ff(c, d, a, b, x[k + 10], 17, rnd[14]);
            b = ff(b, c, d, a, x[k + 11], 22, rnd[15]);
            a = ff(a, b, c, d, x[k + 12], 7, rnd[16]);
            d = ff(d, a, b, c, x[k + 13], 12, rnd[17]);
            c = ff(c, d, a, b, x[k + 14], 17, rnd[18]);
            b = ff(b, c, d, a, x[k + 15], 22, rnd[19]);
            a = gg(a, b, c, d, x[k + 1], 5, rnd[20]);
            d = gg(d, a, b, c, x[k + 6], 9, rnd[21]);
            c = gg(c, d, a, b, x[k + 11], 14, rnd[22]);
            b = gg(b, c, d, a, x[k + 0], 20, rnd[23]);
            a = gg(a, b, c, d, x[k + 5], 5, rnd[24]);
            d = gg(d, a, b, c, x[k + 10], 9, rnd[25]);
            c = gg(c, d, a, b, x[k + 15], 14, rnd[26]);
            b = gg(b, c, d, a, x[k + 4], 20, rnd[27]);
            a = gg(a, b, c, d, x[k + 9], 5, rnd[28]);
            d = gg(d, a, b, c, x[k + 14], 9, rnd[29]);
            c = gg(c, d, a, b, x[k + 3], 14, rnd[30]);
            b = gg(b, c, d, a, x[k + 8], 20, rnd[31]);
            a = gg(a, b, c, d, x[k + 13], 5, rnd[32]);
            d = gg(d, a, b, c, x[k + 2], 9, rnd[33]);
            c = gg(c, d, a, b, x[k + 7], 14, rnd[34]);
            b = gg(b, c, d, a, x[k + 12], 20, rnd[35]);
            a = hh(a, b, c, d, x[k + 5], 4, rnd[36]);
            d = hh(d, a, b, c, x[k + 8], 11, rnd[37]);
            c = hh(c, d, a, b, x[k + 11], 16, rnd[38]);
            b = hh(b, c, d, a, x[k + 14], 23, rnd[39]);
            a = hh(a, b, c, d, x[k + 1], 4, rnd[40]);
            d = hh(d, a, b, c, x[k + 4], 11, rnd[41]);
            c = hh(c, d, a, b, x[k + 7], 16, rnd[42]);
            b = hh(b, c, d, a, x[k + 10], 23, rnd[43]);
            a = hh(a, b, c, d, x[k + 13], 4, rnd[44]);
            d = hh(d, a, b, c, x[k + 0], 11, rnd[45]);
            c = hh(c, d, a, b, x[k + 3], 16, rnd[46]);
            b = hh(b, c, d, a, x[k + 6], 23, rnd[47]);
            a = hh(a, b, c, d, x[k + 9], 4, rnd[48]);
            d = hh(d, a, b, c, x[k + 12], 11, rnd[49]);
            c = hh(c, d, a, b, x[k + 15], 16, rnd[50]);
            b = hh(b, c, d, a, x[k + 2], 23, rnd[51]);
            a = ii(a, b, c, d, x[k + 0], 6, rnd[52]);
            d = ii(d, a, b, c, x[k + 7], 10, rnd[53]);
            c = ii(c, d, a, b, x[k + 14], 15, rnd[54]);
            b = ii(b, c, d, a, x[k + 5], 21, rnd[55]);
            a = ii(a, b, c, d, x[k + 12], 6, rnd[56]);
            d = ii(d, a, b, c, x[k + 3], 10, rnd[57]);
            c = ii(c, d, a, b, x[k + 10], 15, rnd[58]);
            b = ii(b, c, d, a, x[k + 1], 21, rnd[59]);
            a = ii(a, b, c, d, x[k + 8], 6, rnd[60]);
            d = ii(d, a, b, c, x[k + 15], 10, rnd[61]);
            c = ii(c, d, a, b, x[k + 6], 15, rnd[62]);
            b = ii(b, c, d, a, x[k + 13], 21, rnd[63]);
            a = ii(a, b, c, d, x[k + 4], 6, rnd[64]);
            d = ii(d, a, b, c, x[k + 11], 10, rnd[65]);
            c = ii(c, d, a, b, x[k + 2], 15, rnd[66]);
            b = ii(b, c, d, a, x[k + 9], 21, rnd[67]);
            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
        }

        return wordToHex(a).concat(wordToHex(b), wordToHex(c), wordToHex(d));
        
    },
    
    makeString = function (s0) {
    	return ((typeof s0==="object")?$.my.tojson(s0):s0+"");
    },
    
    decs = function (s0, pwd) {
    	var res="", obj;
    	if (s0==null) throw "Invalid aes source";
    	res = dec(s0+"", pwd+"");
    	if (/(^\{.*\}$)|(^\[.*\]$)|(^".*"$)/.test(res)) {
    		try {
    			res = $.my.fromjson(res);
	    	} catch (e) {}
    	}
    	return res;
    },
    
    encs = function (s0, pwd) {
    	var res="";
    	if (s0==null) throw "Invalid aes source";
    	return enc (makeString(s0), pwd+"");
    },
    
    makedocString = function (s0) {
    	return ((typeof s0==="object")?JSON.stringify(s0):s0);
    },
    
    decdoc = function (s0, pwd) {
    	var res="", obj;
    	if (null==s0) throw "Invalid aes source";
    	res = dec(s0, pwd+"");
    	if (/(^\{.*\}$)|(^\[.*\]$)|(^".*"$)/.test(res)) {
    		try {
    			res = JSON.parse(res);
	    	} catch (e) {}
    	}
    	return res;
    },
    
    encdoc = function (s0, pwd) {
    	var res="";
    	if (s0==null) throw "Invalid aes source";
    	return enc (JSON.stringify(s0), pwd+"");
    },
    
    md5s = function (s0) {
		if (s0==null) throw "Invalid md5 argument";
		return MD5(unescape(encodeURIComponent(makeString(s0))).codes())
		.map(function(e){return (e<16?"0":"")+e.toString(16)})
		.join("");
	},

    encString = function(plaintext, key, iv) {
        var i;
        plaintext = s2a(plaintext);

        key = s2a(key);
        for (i=key.length; i<32; i++){
            key[i] = 0;
        }

        if (iv === undefined) {
            // TODO: This is not defined anywhere... commented out...
            // iv = genIV();
        } else {
            iv = s2a(iv);
            for (i=iv.length; i<16; i++){
                iv[i] = 0;
            }
        }

        var ct = rawEncrypt(plaintext, key, iv);
        var ret = [iv];
        for (i=0; i<ct.length; i++){
            ret[ret.length] = ct[i];
        }
        return Base64.encode(ret);
    },

    decString = function(ciphertext, key) {
        var tmp = Base64.decode(ciphertext);
        var iv = tmp.slice(0, 16);
        var ct = tmp.slice(16, tmp.length);
        var i;

        key = s2a(key);
        for (i=key.length; i<32; i++){
            key[i] = 0;
        }

        var pt = rawDecrypt(ct, key, iv, false);
        return pt;
    },

    Base64 = (function(){
        // Takes a Nx16x1 byte array and converts it to Base64
        var Btoa=window.btoa;
        
        encode = function (b) {
        	var ch = new Array(b.length*16);
        	for (var i=0;i<b.length;i++) for (var j=0;j<16;j++) ch[i*16+j]=SC(b[i][j]);
        	return Btoa(ch.join(""));
        },
        
        decode = function(string){
        	var a=window.atob(string).codes();
        	return a;
        };
        
        //internet explorer
        //if(typeof Array.indexOf === "function")  _chars = chars;
        
        return {
            "encode": encode,
            "decode": decode
        };
    })(),
    
    hash8 = function hash8(s0) {
		if (s0==null) throw "Invalid hash8 argument";
		var chars = "abcdefghjkm0123456789oprstuvwxyz";
		var s = md5s(s0),i=0, hash='',p=0;
		while (i<32) {
			p=parseInt(s.substr(i,1),16);
			p+=parseInt(s.substr(i+1,1),16)*17;
			p+=parseInt(s.substr(i+2,1),16)*37;
			p+=parseInt(s.substr(i+3,1),16)*53;
			p=p%32;hash+=chars.substr(p,1);i+=4;
		}			
		return hash;
	};

	return {
	    "dec":decs,
	    "enc":encs,
	    "decDoc":decdoc,
	    "encDoc":encdoc,
	    "md5":md5s,
		"hash8": hash8,
		"hash4":function (s0) { 
			var s = hash8(s0),chars = "abcdefghjkm0123456789oprstuvwxyz",ac = chars.split(""),hash="",p=0;
			for (var i=0; i<8; i+=2) {
				p+=ac.indexOf(s.substr(i,1))*(7^i);
				p+=ac.indexOf(s.substr(i+1,1))*(11^i);
				hash+=chars.substr((p%32),1);
			}
			return hash;			
		},
		"key16":function(salt){
			return md5s(salt+""+Number.random(-1e20,1e20)+Date.now())
			+md5s(Number.random(-1e20,1e20)+""+salt);
		},
		"uuid":function(salt){
			return (Date.now()+"").substr(0,12)
				+hash8(salt+""+Number.random(-1e12,1e12)+Date.now());
		}
	};

})(cw.lib));