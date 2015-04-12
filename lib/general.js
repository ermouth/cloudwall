/* CloudWall General 1.0.2
* — Sugar 1.4.1
* — jQuery 1.11.0 + Migrate 1.2.1
* — jQuery.my 1.1.2
* — jQuery.tags 0.4
* – cw.lib 1.0.1
*/


/*Sugar 1.4.1*/
!function(){function e(e,t,n){var i=n||r(e);return i==="[object "+t+"]"}function t(t){var n="Array"===t&&or.isArray||function(n,r){return e(n,t,r)};return br[t]=n,n}function n(t,n){var r=function(r){return y(r)?e(r,n):typeof r===t};return br[n]=r,r}function r(e){return mr.call(e)}function i(){a(sr),w(wr,function(e,t){a(hr[t])})}function a(e){e.SugarMethods||(l(e,"SugarMethods",{}),s(e,!1,!0,{extend:function(t,n,r){s(e,r!==!1,n,t)},sugarRestore:function(){return u(this,e,arguments,function(e,t,n){l(e,t,n.method)})},sugarRevert:function(){return u(this,e,arguments,function(e,t,n){n.existed?l(e,t,n.original):delete e[t]})}}))}function s(e,t,n,r){var i=t?e.prototype:e;a(e),w(r,function(r,a){var s=i[r],o=v(i,r);$r(n)&&s&&(a=c(s,a,n)),n===!1&&s||l(i,r,a),e.SugarMethods[r]={method:a,existed:o,original:s,instance:t}})}function o(e,t,n,r,i){var a={};r=Sr(r)?r.split(","):r,r.forEach(function(e,t){i(a,e,t)}),s(e,t,n,a)}function u(e,t,n,r){var i=0===n.length,a=d(n),s=!1;return w(t.SugarMethods,function(t,n){(i||-1!==a.indexOf(t))&&(s=!0,r(n.instance?e.prototype:e,t,n))}),s}function c(e,t,n){return function(){return n.apply(this,arguments)?t.apply(this,arguments):e.apply(this,arguments)}}function l(e,t,n){gr?sr.defineProperty(e,t,{value:n,configurable:!0,enumerable:!1,writable:!0}):e[t]=n}function d(e,t,n){var r,i=[],a=n||0;for(r=e.length;r>a;a++)i.push(e[a]),t&&t.call(e,e[a],a);return i}function f(e,t,n){var r=e[n||0];return Cr(r)&&(e=r,n=0),d(e,t,n)}function h(e){if(!e||!e.call)throw new TypeError("Callback is not callable")}function m(e){return e!==ar}function p(e){return e===ar}function g(e,t){return!b(e)&&t in e}function v(e,t){return!!e&&pr.call(e,t)}function y(e){return!!e&&("object"==typeof e||vr&&Tr(e))}function b(e){var t=typeof e;return null==e||"string"===t||"number"===t||"boolean"===t}function k(e,t){t=t||r(e);try{if(e&&e.constructor&&!v(e,"constructor")&&!v(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}return!!e&&"[object Object]"===t&&"hasOwnProperty"in e}function w(e,t){var n;for(n in e)if(v(e,n)&&t.call(e,n,e[n],e)===!1)break}function x(e,t){for(var n=0;e>n;n++)t(n)}function _(e,t){return w(t,function(n){e[n]=t[n]}),e}function S(e){return b(e)&&(e=sr(e)),yr&&Sr(e)&&C(e),e}function C(e){for(var t,n=0;t=e.charAt(n);)e[n++]=t}function E(e){_(this,S(e))}function T(e,t,n){var r=jr(10,Or(t||0));return n=n||Lr,0>t&&(r=1/r),n(e*r)/r}function $(e){return e>=Fr&&Ir>=e||e>=zr&&Pr>=e}function A(){var e,t;for(t=0;9>=t;t++)e=O(t+zr),Ur+=e,Hr[e]=O(t+Fr);Hr[Br]="",Hr[qr]=Wr,Hr[Wr]=Wr,Ar=ur("["+Ur+qr+Br+Wr+"]","g")}function O(e){return lr.fromCharCode(e)}function j(){return"	\n\f\r   ᠎             \u2028\u2029　﻿"}function N(e,t){for(var n="",e=e.toString();t>0;)1&t&&(n+=e),(t>>=1)&&(e+=e);return n}function M(e,t){var n,r;return n=e.replace(Ar,function(e){var t=Hr[e];return t===Wr&&(r=!0),t}),r?parseFloat(n):parseInt(n,t||10)}function L(e,t,n,r){var i=Or(e).toString(r||10);return i=N("0",t-i.replace(/\.\d+/,"").length)+i,(n||0>e)&&(i=(0>e?"-":"+")+i),i}function R(e){if(e>=11&&13>=e)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function D(e,t){function n(e,n){(e||t.indexOf(n)>-1)&&(r+=n)}var r="";return t=t||"",n(e.multiline,"m"),n(e.ignoreCase,"i"),n(e.global,"g"),n(e.sticky,"y"),r}function F(e){return Sr(e)||(e=lr(e)),e.replace(/([\\/\'*+?|()\[\]{}.^$])/g,"\\$1")}function I(e,t){return e["get"+(e._utc?"UTC":"")+t]()}function z(e,t,n){return e["set"+(e._utc&&"ISOWeek"!=t?"UTC":"")+t](n)}function P(e,t){var n,r,i,a,s,o,u,c,l=typeof e;if("string"===l)return e;if(i=mr.call(e),n=k(e,i),r=Cr(e,i),null!=e&&n||r){if(t||(t=[]),t.length>1)for(u=t.length;u--;)if(t[u]===e)return"CYC";for(t.push(e),a=e.valueOf()+lr(e.constructor),s=r?e:sr.keys(e).sort(),u=0,c=s.length;c>u;u++)o=r?u:s[u],a+=o+P(e[o],t);t.pop()}else a=1/e===-1/0?"-0":lr(e&&e.valueOf?e.valueOf():e);return l+i+a}function W(e,t){return e===t?0!==e||1/e===1/t:q(e)&&q(t)?P(e)===P(t):!1}function q(e){var t=r(e);return kr.test(t)||k(e,t)}function B(e,t,n){var r,i=e.length,a=t.length,s=t[a-1]!==!1,o=a>(s?1:2);return o?(r=[],d(t,function(t){return xr(t)?!1:void r.push(U(e,i,t,s,n))}),r):U(e,i,t[0],s,n)}function U(e,t,n,r,i){return r&&(n%=t,0>n&&(n=t+n)),i?e.charAt(n):e[n]}function H(e,t){o(t,!0,!1,e,function(e,t){e[t+("equal"===t?"s":"")]=function(){return sr[t].apply(null,[this].concat(d(arguments)))}})}function G(e,t,n,r){var i=e.length,a=-1==r,s=a?i-1:0,o=J(n,s);for(0>o&&(o=i+o),(!a&&0>o||a&&o>=i)&&(o=s);a&&o>=0||!a&&i>o;){if(e[o]===t)return o;o+=r}return-1}function V(e,t,n,r){var i,a,s=e.length,o=0,u=m(n);if(h(t),0==s&&!u)throw new TypeError("Reduce called on empty array with no initial value");for(u?i=n:(i=e[r?s-1:o],o++);s>o;)a=r?s-o-1:o,a in e&&(i=t(i,e[a],a,e)),o++;return i}function J(e,t){return isNaN(e)?t:parseInt(e>>0)}function Y(e){if(0===e.length)throw new TypeError("First argument must be defined")}function K(){var e=j().match(/^\s+$/);try{lr.prototype.trim.call([1])}catch(t){e=!1}s(lr,!0,!e,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(ur("^["+j()+"]+"),"")},trimRight:function(){return this.replace(ur("["+j()+"]+$"),"")}})}function Q(){var e=new cr(cr.UTC(1999,11,31)),t="1999-12-31T00:00:00.000Z",n=e.toISOString&&e.toISOString()===t;o(cr,!0,!n,"toISOString,toJSON",function(e,t){e[t]=function(){return L(this.getUTCFullYear(),4)+"-"+L(this.getUTCMonth()+1,2)+"-"+L(this.getUTCDate(),2)+"T"+L(this.getUTCHours(),2)+":"+L(this.getUTCMinutes(),2)+":"+L(this.getUTCSeconds(),2)+"."+L(this.getUTCMilliseconds(),3)+"Z"}})}function Z(e){return e=ur(e),function(t){return e.test(t)}}function X(e){var t=e.getTime();return function(e){return!(!e||!e.getTime)&&e.getTime()===t}}function et(e){return function(t,n,r){return t===e||e.call(this,t,n,r)}}function tt(e){return function(t,n,r){return t===e||e.call(r,n,t,r)}}function nt(e,t){var n={};return function(r,i,a){var s;if(!y(r))return!1;for(s in e)if(n[s]=n[s]||it(e[s],t),n[s].call(a,r[s],i,a)===!1)return!1;return!0}}function rt(e){return function(t){return t===e||W(t,e)}}function it(e,t){if(b(e));else{if(Tr(e))return Z(e);if(Er(e))return X(e);if($r(e))return t?tt(e):et(e);if(k(e))return nt(e,t)}return rt(e)}function at(e,t,n,r){return t?t.apply?t.apply(n,r||[]):$r(e[t])?e[t].call(e):e[t]:e}function st(e,t,n,r){var i,a,s=+e.length;for(0>n&&(n=e.length+n),a=isNaN(n)?0:n,r===!0&&(s+=a);s>a;){if(i=a%e.length,!(i in e))return ot(e,t,a,r);if(t.call(e,e[i],i,e)===!1)break;a++}}function ot(e,t,n){var r,i=[];for(r in e)ut(e,r)&&r>=n&&i.push(parseInt(r));return i.sort().each(function(n){return t.call(e,e[n],n,e)}),e}function ut(e,t){return t in e&&ct(t)==t&&4294967295!=t}function ct(e){return e>>>0}function lt(e,t,n,r,i,a){var s,o,u;return e.length>0&&(u=it(t),st(e,function(t,n){return u.call(a,t,n,e)?(s=t,o=n,!1):void 0},n,r)),i?o:s}function dt(e,t){var n,r=[],i={};return st(e,function(a,s){n=t?at(a,t,e,[a,s,e]):a,yt(i,n)||r.push(a)}),r}function ft(e,t,n){var r=[],i={};return t.each(function(e){yt(i,e)}),e.each(function(e){var t=P(e),a=!q(e);vt(i,t,e,a)!==n&&(bt(i,t,e,a),r.push(e))}),r}function ht(e,t,n){t=t||1/0,n=n||0;var r=[];return st(e,function(e){Cr(e)&&t>n?r=r.concat(ht(e,t,n+1)):r.push(e)}),r}function mt(e){return g(e,"length")&&!Sr(e)&&!k(e)}function pt(e){return g(e,"length")&&("[object Arguments]"===r(e)||!!e.callee)}function gt(e){var t=[];return d(e,function(e){t=t.concat(e)}),t}function vt(e,t,n,r){var i=t in e;return r&&(e[t]||(e[t]=[]),i=-1!==e[t].indexOf(n)),i}function yt(e,t){var n=P(t),r=!q(t),i=vt(e,n,t,r);return r?e[n].push(t):e[n]=t,i}function bt(e,t,n,r){var i,a=0;if(r)for(i=e[t];a<i.length;)i[a]===n?i.splice(a,1):a+=1;else delete e[t]}function kt(e,t,n,r){var i,a,s,o,u=[],c="max"===n,l="min"===n,d=or.isArray(e);for(a in e)if(e.hasOwnProperty(a)){if(i=e[a],o=at(i,t,e,d?[i,parseInt(a),e]:[]),p(o))throw new TypeError("Cannot compare with undefined");o===s?u.push(i):(p(s)||c&&o>s||l&&s>o)&&(u=[i],s=o)}return d||(u=ht(u,1)),r?u:u[0]}function wt(e,t){var n,r,i,a,s,o,u=0,c=0,l=or[Jr],d=or[Yr],f=or[Kr],h=or[Vr],m=or[Qr];e=xt(e,l,d),t=xt(t,l,d);do i=_t(e,u,f),a=_t(t,u,f),n=St(i,h),r=St(a,h),-1===n||-1===r?(n=e.charCodeAt(u)||null,r=t.charCodeAt(u)||null,m&&$(n)&&$(r)&&(n=M(e.slice(u)),r=M(t.slice(u)))):(s=i!==e.charAt(u),o=a!==t.charAt(u),s!==o&&0===c&&(c=s-o)),u+=1;while(null!=n&&null!=r&&n===r);return n===r?c:n-r}function xt(e,t,n){return Sr(e)||(e=lr(e)),n&&(e=e.toLowerCase()),t&&(e=e.replace(t,"")),e}function _t(e,t,n){var r=e.charAt(t);return n[r]||r}function St(e,t){return e?t.indexOf(e):null}function Ct(){var e=or.prototype.map,t=function(){var e=arguments;return e.length>0&&!$r(e[0])};o(or,!0,t,"every,all,some,filter,any,none,find,findIndex",function(e,t){var n=or.prototype[t];e[t]=function(e){var t=it(e);return n.call(this,function(e,n){return t(e,n,this)})}}),s(or,!0,t,{map:function(t){return e.call(this,function(e,n){return at(e,t,this,[e,n,this])})}})}function Et(){var e="AÁÀÂÃĄBCĆČÇDĎÐEÉÈĚÊËĘFGĞHıIÍÌİÎÏJKLŁMNŃŇÑOÓÒÔPQRŘSŚŠŞTŤUÚÙŮÛÜVWXYÝZŹŻŽÞÆŒØÕÅÄÖ",t="AÁÀÂÃÄ,CÇ,EÉÈÊË,IÍÌİÎÏ,OÓÒÔÕÖ,Sß,UÚÙÛÜ";or[Vr]=e.split("").map(function(e){return e+e.toLowerCase()}).join("");var n={};st(t.split(","),function(e){var t=e.charAt(0);st(e.slice(1).split(""),function(e){n[e]=t,n[e.toLowerCase()]=t.toLowerCase()})}),or[Qr]=!0,or[Yr]=!0,or[Kr]=n}function Tt(e){return sr.keys(S(e))}function $t(e,t){o(sr,!1,!0,e,function(e,n){e[n]=function(e,r,i){var a,s,o=Tt(e);return t||(s=it(r,!0)),a=or.prototype[n].call(o,function(n){var i=e[n];return t?at(i,r,e,[n,i,e]):s(i,n,e)},i),Cr(a)&&(a=a.reduce(function(t,n){return t[n]=e[n],t},{})),a}}),H(e,E)}function At(){or[Gr]=wt}function Ot(e){_(this,e),this.compiledFormats=mi.concat()}function jt(e,t){var n;if(Sr(e)||(e=""),n=yi[e]||yi[e.slice(0,2)],t===!1&&!n)throw new TypeError("Invalid locale.");return n||ri}function Nt(e,t){function n(e){var t=c[e];Sr(t)?c[e]=t.split(","):t||(c[e]=[])}function r(e,t){return e=e.split("+").map(function(e){return e.replace(/(.+):(.+)$/,function(e,t,n){return n.split("|").map(function(e){return t+e}).join("|")})}).join("|"),e.split("|").forEach(t)}function i(e,t,n){var i=[];c[e].forEach(function(e,a){t&&(e+="+"+e.slice(0,3)),r(e,function(e,t){i[t*n+a]=e.toLowerCase()})}),c[e]=i}function a(e,t,n){var r="\\d{"+e+","+t+"}";return n&&(r+="|(?:"+Rt(c.numbers)+")+"),r}function s(){var e=["-?\\d+"].concat(c.articles);return c.numbers&&(e=e.concat(c.numbers)),Rt(e)}function o(e,t){c[e]=c[e]||t}function u(){var e=[];c.modifiersByName={},c.modifiers.push({name:"day",src:"yesterday",value:-1}),c.modifiers.push({name:"day",src:"today",value:0}),c.modifiers.push({name:"day",src:"tomorrow",value:1}),c.modifiers.forEach(function(t){var n=t.name;r(t.src,function(r){var i=c[n];c.modifiersByName[r]=t,e.push({name:n,src:r,value:t.value}),c[n]=i?i+"|"+r:r})}),c.day+="|"+Rt(c.weekdays),c.modifiers=e}var c,l;return c=new Ot(t),n("modifiers"),"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(n),l=!c.monthSuffix,i("months",l,12),i("weekdays",l,7),i("units",!1,8),i("numbers",!1,10),o("code",e),o("date",a(1,2,c.digitDate)),o("year","'\\d{2}|"+a(4,4)),o("num",s()),u(),c.monthSuffix&&(c.month=a(1,2),c.months="1,2,3,4,5,6,7,8,9,10,11,12".split(",").map(function(e){return e+c.monthSuffix})),c.full_month=a(1,2)+"|"+Rt(c.months),c.timeSuffixes.length>0&&c.addFormat(un(di,c),!1,oi),c.addFormat("{day}",!0),c.addFormat("{month}"+(c.monthSuffix||"")),c.addFormat("{year}"+(c.yearSuffix||"")),c.timeParse.forEach(function(e){c.addFormat(e,!0)}),c.dateParse.forEach(function(e){c.addFormat(e)}),yi[e]=c}function Mt(e,t,n,r){e.compiledFormats.unshift({variant:r,locale:e,reg:ur("^"+t+"$","i"),to:n})}function Lt(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function Rt(e){return e.filter(function(e){return!!e}).join("|")}function Dt(){var e=cr.SugarNewDate;return e?e():new cr}function Ft(e,t){var n;return y(e[0])?e:_r(e[0])&&!_r(e[1])?[e[0]]:Sr(e[0])&&t?[It(e[0]),e[1]]:(n={},ai.forEach(function(t,r){n[t.name]=e[r]}),[n])}function It(e,t){var n,r={};return n=e.match(/^(\d+)?\s?(\w+?)s?$/i),n&&(p(t)&&(t=parseInt(n[1])||1),r[n[2].toLowerCase()]=t),r}function zt(e,t,n){var r,i;for(p(n)&&(n=si.length),r=t||0;n>r&&(i=si[r],e(i.name,i,r)!==!1);r++);}function Pt(e,t){var n,r,i={};return t.forEach(function(t,a){n=e[a+1],p(n)||""===n||("year"===t&&(i.yearAsString=n.replace(/'/,"")),r=parseFloat(n.replace(/'/,"").replace(/,/,".")),i[t]=isNaN(r)?n.toLowerCase():r)}),i}function Wt(e){return e=e.trim().replace(/^just (?=now)|\.+$/i,""),qt(e)}function qt(e){return e.replace(ii,function(e,t,n){var r,i,a=0,s=1;return t?e:(n.split("").reverse().forEach(function(e){var t=hi[e],n=t>9;n?(r&&(a+=s),s*=t/(i||1),i=t):(r===!1&&(s*=10),a+=s*t),r=n}),r&&(a+=s),a)})}function Bt(e,t,n,r){function i(e){f.push(e)}function a(){f.forEach(function(e){e.call()})}function s(){var e=c.getWeekday();c.setWeekday(7*(p.num-1)+(e>b?b+7:b))}function o(){var e=h.modifiersByName[p.edge];zt(function(e){return m(p[e])?(g=e,!1):void 0},4),"year"===g?p.specificity="month":("month"===g||"week"===g)&&(p.specificity="day"),c[(e.value<0?"endOf":"beginningOf")+Lt(g)](),-2===e.value&&c.reset()}function u(){var e;zt(function(t,n,r){if("day"===t&&(t="date"),m(p[t])){if(r>=v)return dn(c),!1;e=e||{},e[t]=p[t],delete p[t]}}),e&&i(function(){c.set(e,!0)})}var c,l,d,f,h,p,g,v,b,k,x;return c=Dt(),f=[],c.utc(r),Er(e)?c.utc(e.isUTC()).setTime(e.getTime()):_r(e)?c.setTime(e):y(e)?(c.set(e,!0),p=e):Sr(e)&&(d=jt(t),e=Wt(e),d&&w(d.getFormats(),function(n,r){var a=e.match(r.reg);return a?(h=r.locale,p=Pt(a,r.to,h),h.cachedFormat=r,p.utc&&c.utc(),p.timestamp?(p=p.timestamp,!1):(r.variant&&!Sr(p.month)&&(Sr(p.date)||d.hasVariant(t))&&(x=p.month,p.month=p.date,p.date=x),p.year&&2===p.yearAsString.length&&(p.year=Ut(p.year)),p.month&&(p.month=h.getMonth(p.month),p.shift&&!p.unit&&(p.unit=h.units[7])),p.weekday&&p.date?delete p.weekday:p.weekday&&(p.weekday=h.getWeekday(p.weekday),p.shift&&!p.unit&&(p.unit=h.units[5])),p.day&&(x=h.modifiersByName[p.day])?(p.day=x.value,c.reset(),l=!0):p.day&&(b=h.getWeekday(p.day))>-1&&(delete p.day,p.num&&p.month?(i(s),p.day=1):p.weekday=b),p.date&&!_r(p.date)&&(p.date=h.getNumericDate(p.date)),h.matchPM(p.ampm)&&p.hour<12?p.hour+=12:h.matchAM(p.ampm)&&12===p.hour&&(p.hour=0),("offset_hours"in p||"offset_minutes"in p)&&(c.utc(),p.offset_minutes=p.offset_minutes||0,p.offset_minutes+=60*p.offset_hours,"-"===p.offset_sign&&(p.offset_minutes*=-1),p.minute-=p.offset_minutes),p.unit&&(l=!0,k=h.getNumber(p.num),v=h.getUnitIndex(p.unit),g=ni.units[v],u(),p.shift&&(k*=(x=h.modifiersByName[p.shift])?x.value:0),p.sign&&(x=h.modifiersByName[p.sign])&&(k*=x.value),m(p.weekday)&&(c.set({weekday:p.weekday},!0),delete p.weekday),p[g]=(p[g]||0)+k),p.edge&&i(o),"-"===p.year_sign&&(p.year*=-1),zt(function(e,t,n){var r=p[e],i=r%1;i&&(p[si[n-1].name]=Lr(i*("second"===e?1e3:60)),p[e]=Mr(r))},1,4),!1)):void 0}),p?l?c.advance(p):(c._utc&&c.reset(),on(c,p,!0,!1,n)):("now"!==e&&(c=new cr(e)),r&&c.addMinutes(-c.getTimezoneOffset())),a(),c.utc(!1)),{date:c,set:p}}function Ut(e){return 100*Lr(I(Dt(),"FullYear")/100)-100*Lr(e/100)+e}function Ht(e){e=e.clone();var t=I(e,"Day")||7;return e.addDays(4-t).reset(),1+Mr(e.daysSince(e.clone().beginningOfYear())/7)}function Gt(e){var t,n=Or(e),r=n,i=0;return zt(function(e,a,s){t=Mr(T(n/a.multiplier(),1)),t>=1&&(r=t,i=s)},1),[r,i,e]}function Vt(e){var t=Gt(e.millisecondsFromNow());return Jt(e,t)&&(t[0]=Or(e.monthsFromNow()),t[1]=6),t}function Jt(e,t){return 6===t[1]||5===t[1]&&4===t[0]&&e.daysFromNow()>=Dt().daysInMonth()}function Yt(){var e=function(e,t){var n=I(e,"Hours");return jt(t).ampm[Mr(n/12)]||""};Xt("t",e,1),Xt("tt",e),Xt("T",e,1,1),Xt("TT",e,null,2)}function Kt(){var e=function(e,t){var n=I(e,"Day");return jt(t).weekdays[n]};Xt("dow",e,3),Xt("Dow",e,3,1),Xt("weekday",e),Xt("Weekday",e,null,1)}function Qt(){Zt("mon",0,3),Zt("month",0),Zt("month2",1),Zt("month3",2)}function Zt(e,t,n){var r=function(e,n){var r=I(e,"Month");return jt(n).months[r+12*t]};Xt(e,r,n),Xt(Lt(e),r,n,1)}function Xt(e,t,n,r){gi[e]=function(e,i){var a=t(e,i);return n&&(a=a.slice(0,n)),r&&(a=a.slice(0,r).toUpperCase()+a.slice(r)),a}}function en(e,t,n){gi[e]=t,gi[e+e]=function(e,n){return L(t(e,n),2)},n&&(gi[e+e+e]=function(e,n){return L(t(e,n),3)},gi[e+e+e+e]=function(e,n){return L(t(e,n),4)})}function tn(e){var t=e.match(/(\{\w+\})|[^{}]+/g);pi[e]=t.map(function(e){return e.replace(/\{(\w+)\}/,function(t,n){return e=gi[n]||n,n}),e})}function nn(e,t,n){var r,i,a,s,o="";for(r=pi[t],a=0,i=r.length;i>a;a++)s=r[a],o+=$r(s)?s(e,n):s;return o}function rn(e,t,n,r){var i;return e.isValid()?(Date[t]?t=Date[t]:$r(t)&&(i=Vt(e),t=t.apply(e,i.concat(jt(r)))),!t&&n?(i=i||Vt(e),0===i[1]&&(i[1]=1,i[0]=1),jt(r).getRelativeFormat(i)):(t=t||"long",("short"===t||"long"===t||"full"===t)&&(t=jt(r)[t]),pi[t]||tn(t),nn(e,t,r))):"Invalid Date"}function an(e,t,n,r,i){var a,s,o,u,c,l,d=0,f=0,h=0;return a=Bt(t,n,null,i),r>0&&(f=h=r,c=!0),a.date.isValid()?(a.set&&a.set.specificity&&(vi.forEach(function(t){t.name===a.set.specificity&&(d=t.multiplier(a.date,e-a.date)-1)}),l=Lt(a.set.specificity),(a.set.edge||a.set.shift)&&a.date["beginningOf"+l](),"month"===a.set.specificity&&(u=a.date.clone()["endOf"+l]().getTime()),!c&&a.set.sign&&"millisecond"!=a.set.specificity&&(f=50,h=-50)),s=e.getTime(),o=a.date.getTime(),u=u||o+d,u=sn(e,o,u),s>=o-f&&u+h>=s):!1}function sn(e,t,n){var r,i,a,s;return r=new cr(t),i=new cr(n).utc(e.isUTC()),23!==I(i,"Hours")&&(a=r.getTimezoneOffset(),s=i.getTimezoneOffset(),a!==s&&(n+=(s-a).minutes())),n}function on(e,t,n,r,i){function a(e){return m(t[e])?t[e]:t[e+"s"]}function s(e){return m(a(e))}function o(e,t){return s(e)||t&&s("weekday")}function u(){switch(i){case-1:return e>Dt();case 1:return e<Dt()}}var c,l;if(_r(t)&&r)t={milliseconds:t};else if(_r(t))return e.setTime(t),e;if(m(t.date)&&(t.day=t.date),zt(function(r,i,a){var u="day"===r;return o(r,u)?(t.specificity=r,l=+a,!1):void(!n||"week"===r||u&&s("week")||z(e,i.method,u?1:0))}),vi.forEach(function(n,i){{var o,u=n.name,c=n.method;vi[i-1]}o=a(u),p(o)||(r?("week"===u&&(o=(t.day||0)+7*o,c="Date"),o=o*r+I(e,c)):"month"===u&&s("day")&&z(e,"Date",15),z(e,c,o),r&&"month"===u&&cn(e,o))}),!r&&!s("day")&&s("weekday")){var c=a("weekday");e.setWeekday(c)}return u()&&zt(function(t,n){var r=n.ambiguous||"week"===t&&s("weekday");return r&&!o(t,"day"===t)?(e[n.addMethod](i),!1):void 0},l+1),e}function un(e,t,n){var r,i={h:0,m:1,s:2};return t=t||ni,e.replace(/{([a-z])}/g,function(e,a){var s=[],o="h"===a,u=o&&!n;return"t"===a?t.ampm.join("|"):(o&&s.push(":"),(r=t.timeSuffixes[i[a]])&&s.push(r+"\\s*"),0===s.length?"":"(?:"+s.join("|")+")"+(u?"":"?"))})}function cn(e,t){0>t&&(t=t%12+12),t%12!=I(e,"Month")&&z(e,"Date",0)}function ln(e,t,n){var r,i;return _r(e[1])?r=Ft(e)[0]:(r=e[0],i=e[1]),Bt(r,i,t,n).date}function dn(e){e.setTime(0/0)}function fn(){si=vi.concat().reverse(),ai=vi.concat(),ai.splice(2,1)}function hn(){o(cr,!0,!0,vi,function(e,t,n){function r(e){var n=e/u,r=n%1,i=t.error||.999;return r&&Or(r%1)>i&&(n=Lr(n)),0>n?Nr(n):Mr(n)}var i,a,s=t.name,o=Lt(s),u=t.multiplier();t.addMethod="add"+o+"s",i=function(e,t){return r(this.getTime()-cr.create(e,t).getTime())},a=function(e,t){return r(cr.create(e,t).getTime()-this.getTime())},e[s+"sAgo"]=a,e[s+"sUntil"]=a,e[s+"sSince"]=i,e[s+"sFromNow"]=i,e[t.addMethod]=function(e,t){var n={};return n[s]=e,this.advance(n,t)},wn(t,u),3>n&&["Last","This","Next"].forEach(function(t){e["is"+t+o]=function(){return an(this,t+" "+s,"en")}}),4>n&&(e["beginningOf"+o]=function(){var e={};switch(s){case"year":e.year=I(this,"FullYear");break;case"month":e.month=I(this,"Month");break;case"day":e.day=I(this,"Date");break;case"week":e.weekday=0}return this.set(e,!0)},e["endOf"+o]=function(){var e={hours:23,minutes:59,seconds:59,milliseconds:999};switch(s){case"year":e.month=11,e.day=31;break;case"month":e.day=this.daysInMonth();break;case"week":e.weekday=6}return this.set(e,!0)})})}function mn(){ni.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",!0,["year_sign","year","month","date"],!1,!0),ni.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",!0,["date","month","year"],!0),ni.addFormat("{full_month}[-.](\\d{4,4})",!1,["month","year"]),ni.addFormat("\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/",!1,["timestamp"]),ni.addFormat(un(di,ni),!1,oi),mi=ni.compiledFormats.slice(0,7).reverse(),ni.compiledFormats=ni.compiledFormats.slice(7).concat(mi)}function pn(){en("f",function(e){return I(e,"Milliseconds")},!0),en("s",function(e){return I(e,"Seconds")}),en("m",function(e){return I(e,"Minutes")}),en("h",function(e){return I(e,"Hours")%12||12}),en("H",function(e){return I(e,"Hours")}),en("d",function(e){return I(e,"Date")}),en("M",function(e){return I(e,"Month")+1}),Yt(),Kt(),Qt(),gi.ms=gi.f,gi.milliseconds=gi.f,gi.seconds=gi.s,gi.minutes=gi.m,gi.hours=gi.h,gi["24hr"]=gi.H,gi["12hr"]=gi.h,gi.date=gi.d,gi.day=gi.d,gi.year=gi.yyyy}function gn(){o(cr,!0,!0,"short,long,full",function(e,t){e[t]=function(e){return rn(this,t,!1,e)}})}function vn(){fi.split("").forEach(function(e,t){t>9&&(t=jr(10,t-9)),hi[e]=t}),_(hi,Hr),ii=ur("([期週周])?(["+fi+Ur+"]+)(?!昨)","g")}function yn(){var e="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),t=ni.weekdays.slice(0,7),n=ni.months.slice(0,12);o(cr,!0,!0,e.concat(t).concat(n),function(e,t){e["is"+Lt(t)]=function(e){return this.is(t,0,e)}})}function bn(){cr.utc||(cr.utc={create:function(){return ln(arguments,0,!0)},past:function(){return ln(arguments,-1,!0)},future:function(){return ln(arguments,1,!0)}})}function kn(){s(cr,!1,!0,{RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"})}function wn(e,t){function n(){return Lr(this*t)}function r(){return ln(arguments)[e.addMethod](this)}function i(){return ln(arguments)[e.addMethod](-this)}var a=e.name,s={};s[a]=n,s[a+"s"]=n,s[a+"Before"]=i,s[a+"sBefore"]=i,s[a+"Ago"]=i,s[a+"sAgo"]=i,s[a+"After"]=r,s[a+"sAfter"]=r,s[a+"FromNow"]=r,s[a+"sFromNow"]=r,dr.extend(s)}function xn(e,t,n,r,i){1/0!==t&&(e.timers||(e.timers=[]),_r(t)||(t=1),e._canceled=!1,e.timers.push(setTimeout(function(){e._canceled||n.apply(r,i||[])},t)))}function _n(e,t,n,r,i,a){var s,o,u,c=e.toFixed(20),l=c.search(/\./),d=c.search(/[1-9]/),f=l-d;return f>0&&(f-=1),o=Dr(Rr(Mr(f/3),i===!1?n.length:i),-r),s=n.charAt(o+r-1),-9>f&&(o=-3,t=Or(f)-9,s=n.slice(0,1)),u=a?jr(2,10*o):jr(10,3*o),T(e/u,t||0).format()+s.trim()}function Sn(){function e(e){return function(t){return t?T(this,t,e):e(this)}}s(dr,!0,!0,{ceil:e(Nr),round:e(Lr),floor:e(Mr)}),o(dr,!0,!0,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(e,t){e[t]=function(e,n){return fr[t](this,e,n)}})}function Cn(e,t,n,r){var i,a,s,o,u=/^(.+?)(\[.*\])$/;(a=t.match(u))?(o=a[1],s=a[2].replace(/^\[|\]$/g,"").split("]["),s.forEach(function(t){i=!t||t.match(/^\d+$/),!o&&Cr(e)&&(o=e.length),v(e,o)||(e[o]=i?[]:{}),e=e[o],o=t}),!o&&i&&(o=e.length.toString()),Cn(e,o,n,r)):e[t]=r&&"true"===n?!0:r&&"false"===n?!1:n}function En(e,t){var n;return Cr(t)||y(t)&&t.toString===mr?(n=[],w(t,function(t,r){e&&(t=e+"["+t+"]"),n.push(En(t,r))}),n.join("&")):e?Tn(e)+"="+(Er(t)?t.getTime():Tn(t)):""}function Tn(e){return e||e===!1||0===e?encodeURIComponent(e).replace(/%20/g,"+"):""}function $n(e,t,n){return Tr(e)?e.test(t):y(e)?e[t]===n:t===lr(e)}function An(e,t,n){var r,i=e instanceof E?new E:{};return w(e,function(e,a){r=!1,f(t,function(t){$n(t,e,a)&&(r=!0)},1),r===n&&(i[e]=a)}),i}function On(){o(sr,!1,!0,wr,function(e,t){var n="is"+t;bi.push(n),e[n]=br[t]})}function jn(){s(sr,!1,function(){return 0===arguments.length},{extend:function(){var e=bi.concat(ki);"undefined"!=typeof ti&&(e=e.concat(ti)),H(e,sr)}})}function Nn(e,t){this.start=Rn(e),this.end=Rn(t)}function Mn(e){return Sr(e)?e.charCodeAt(0):e}function Ln(e){return null==e?e:Er(e)?e.getTime():e.valueOf()}function Rn(e){return Er(e)?new cr(e.getTime()):Ln(e)}function Dn(e){var t=Ln(e);return!!t||0===t}function Fn(e){var t,n,r;return _r(e)?e:(t=e.toLowerCase().match(/^(\d+)?\s?(\w+?)s?$/i),n=parseInt(t[1])||1,r=t[2].slice(0,1).toUpperCase()+t[2].slice(1),r.match(/hour|minute|second/i)?r+="s":"Year"===r?r="FullYear":"Day"===r&&(r="Date"),[n,r])}function In(e,t){var n,r,i,a;return _r(t)?new cr(e.getTime()+t):(n=t[0],r=t[1],i=I(e,r),a=new cr(e.getTime()),z(a,r,i+n),a)}function zn(e,t){return lr.fromCharCode(e.charCodeAt(0)+t)}function Pn(e,t){return e+t}function Wn(e){var t=lr.Inflector,e=t&&t.acronyms[e];return Sr(e)?e:void 0}function qn(e){if(e=+e,0>e||1/0===e)throw new RangeError("Invalid number");return e}function Bn(e,t){return N(m(t)?t:" ",e)}function Un(e,t,n,r,i){var a,s,o,u;if(e.length<=t)return e.toString();switch(r=p(r)?"...":r,n){case"left":return s=i?Hn(e,t,!0):e.slice(e.length-t),r+s;case"middle":return o=Nr(t/2),u=Mr(t/2),a=i?Hn(e,o):e.slice(0,o),s=i?Hn(e,u,!0):e.slice(e.length-u),a+r+s;default:return a=i?Hn(e,t):e.slice(0,t),a+r}}function Hn(e,t,n){if(n)return Hn(e.reverse(),t).reverse();var r=ur("(?=["+j()+"])"),i=e.split(r),a=0;return i.filter(function(e){return a+=e.length,t>=a}).join("")}function Gn(e,t,n){return Sr(t)&&(t=e.indexOf(t),-1===t&&(t=n?e.length:0)),t}function Vn(e){if(hr.btoa)return wi=hr.btoa,void(xi=hr.atob);var t=/[^A-Za-z0-9\+\/\=]/g;wi=function(t){var n,r,i,a,s,o,u,c="",l=0;do n=t.charCodeAt(l++),r=t.charCodeAt(l++),i=t.charCodeAt(l++),a=n>>2,s=(3&n)<<4|r>>4,o=(15&r)<<2|i>>6,u=63&i,isNaN(r)?o=u=64:isNaN(i)&&(u=64),c=c+e.charAt(a)+e.charAt(s)+e.charAt(o)+e.charAt(u),n=r=i="",a=s=o=u="";while(l<t.length);return c},xi=function(n){var r,i,a,s,o,u,c,l="",d=0;if(n.match(t))throw new Error("String contains invalid base64 characters");n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");do s=e.indexOf(n.charAt(d++)),o=e.indexOf(n.charAt(d++)),u=e.indexOf(n.charAt(d++)),c=e.indexOf(n.charAt(d++)),r=s<<2|o>>4,i=(15&o)<<4|u>>2,a=(3&u)<<6|c,l+=O(r),64!=u&&(l+=O(i)),64!=c&&(l+=O(a)),r=i=a="",s=o=u=c="";while(d<n.length);return l}}function Jn(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}function Yn(e,t,n){Sr(t)&&Jn(Ti,t),Jn(Ti,n),e.unshift({rule:t,replacement:n})}function Kn(e,t){return e==t||"all"==e||!e}function Qn(e){return Ti.some(function(t){return new ur("\\b"+t+"$","i").test(e)})}function Zn(e,t){return e=Sr(e)?e.toString():"",e.isBlank()||Qn(e)?e:Xn(e,t?Ci:Ei)}function Xn(e,t){return w(t,function(t,n){return e.match(n.rule)?(e=e.replace(n.rule,n.replacement),!1):void 0}),e}function er(e){return e.replace(/^\W*[a-z]/,function(e){return e.toUpperCase()})}function tr(){ji.forEach(function(e){var t=ur("^["+e.source+"\\s]+$"),n=ur("["+e.source+"]");e.names.forEach(function(e){l(lr.prototype,"is"+e,function(){return t.test(this.trim())}),l(lr.prototype,"has"+e,function(){return n.test(this)})})})}function nr(e,t,n,r){Oi||rr();var i=d(t).join(""),a=Oi[r];return i=i.replace(/all/,"").replace(/(\w)lphabet|umbers?|atakana|paces?|unctuation/g,"$1"),e.replace(n,function(e){return!a[e]||i&&!i.has(a[e].type)?e:a[e].to})}function rr(){var e;Oi={zenkaku:{},hankaku:{}},Mi.forEach(function(e){x(e.end-e.start+1,function(t){t+=e.start,ir(e.type,O(t),O(t+Ni))})}),Wi.each(function(t,n){e=Pi.charAt(n),ir("k",e,t),t.match(Ii)&&ir("k",e+"ﾞ",t.shift(1)),t.match(zi)&&ir("k",e+"ﾟ",t.shift(2))}),Fi.each(function(e,t){ir("p",Di.charAt(t),e)}),ir("k","ｳﾞ","ヴ"),ir("k","ｦﾞ","ヺ"),ir("s"," ","　")}function ir(e,t,n){Oi.zenkaku[t]={type:e,to:n},Oi.hankaku[n]={type:e,to:t}}var ar,sr=Object,or=Array,ur=RegExp,cr=Date,lr=String,dr=Number,fr=Math,hr="undefined"!=typeof global?global:this,mr=sr.prototype.toString,pr=sr.prototype.hasOwnProperty,gr=sr.defineProperty&&sr.defineProperties,vr="function"==typeof ur(),yr=!("0"in new lr("a")),br={},kr=/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/,wr="Boolean,Number,String,Array,Date,RegExp,Function".split(","),xr=n("boolean",wr[0]),_r=n("number",wr[1]),Sr=n("string",wr[2]),Cr=t(wr[3]),Er=t(wr[4]),Tr=t(wr[5]),$r=t(wr[6]);E.prototype.constructor=sr;var Ar,Or=fr.abs,jr=fr.pow,Nr=fr.ceil,Mr=fr.floor,Lr=fr.round,Rr=fr.min,Dr=fr.max,Fr=48,Ir=57,zr=65296,Pr=65305,Wr=".",qr="．",Br=",",Ur="",Hr={};i(),A(),s(sr,!1,!1,{keys:function(e){var t=[];if(!y(e)&&!Tr(e)&&!$r(e))throw new TypeError("Object required");return w(e,function(e){t.push(e)}),t}}),s(or,!1,!1,{isArray:function(e){return Cr(e)}}),s(or,!0,!1,{every:function(e,t){var n=this.length,r=0;for(Y(arguments);n>r;){if(r in this&&!e.call(t,this[r],r,this))return!1;r++}return!0},some:function(e,t){var n=this.length,r=0;for(Y(arguments);n>r;){if(r in this&&e.call(t,this[r],r,this))return!0;r++}return!1},map:function(e,t){var t=arguments[1],n=this.length,r=0,i=new Array(n);for(Y(arguments);n>r;)r in this&&(i[r]=e.call(t,this[r],r,this)),r++;return i},filter:function(e){var t=arguments[1],n=this.length,r=0,i=[];for(Y(arguments);n>r;)r in this&&e.call(t,this[r],r,this)&&i.push(this[r]),r++;return i},indexOf:function(e){var t=arguments[1];return Sr(this)?this.indexOf(e,t):G(this,e,t,1)},lastIndexOf:function(e){var t=arguments[1];return Sr(this)?this.lastIndexOf(e,t):G(this,e,t,-1)},forEach:function(e){var t=this.length,n=0,r=arguments[1];for(h(e);t>n;)n in this&&e.call(r,this[n],n,this),n++},reduce:function(e){return V(this,e,arguments[1])},reduceRight:function(e){return V(this,e,arguments[1],!0)}}),s(Function,!0,!1,{bind:function(e){var t,n=this,r=d(arguments,null,1);if(!$r(this))throw new TypeError("Function.prototype.bind called on a non-function");return t=function(){return n.apply(n.prototype&&this instanceof n?this:e,r.concat(d(arguments)))},t.prototype=this.prototype,t}}),s(cr,!1,!1,{now:function(){return(new cr).getTime()}}),K(),Q();var Gr="AlphanumericSort",Vr="AlphanumericSortOrder",Jr="AlphanumericSortIgnore",Yr="AlphanumericSortIgnoreCase",Kr="AlphanumericSortEquivalents",Qr="AlphanumericSortNatural";s(or,!1,!0,{create:function(){var e=[];return d(arguments,function(t){(pt(t)||mt(t))&&(t=or.prototype.slice.call(t,0)),e=e.concat(t)}),e}}),s(or,!0,!1,{find:function(e,t){return h(e),lt(this,e,0,!1,!1,t)},findIndex:function(e,t){var n;return h(e),n=lt(this,e,0,!1,!0,t),p(n)?-1:n}}),s(or,!0,!0,{findFrom:function(e,t,n){return lt(this,e,t,n)},findIndexFrom:function(e,t,n){var t=lt(this,e,t,n,!0);return p(t)?-1:t},findAll:function(e,t,n){var r,i=[];return this.length>0&&(r=it(e),st(this,function(e,t,n){r(e,t,n)&&i.push(e)},t,n)),i},count:function(e){return p(e)?this.length:this.findAll(e).length},removeAt:function(e,t){return p(e)?this:(p(t)&&(t=e),this.splice(e,t-e+1),this)},include:function(e,t){return this.clone().add(e,t)},exclude:function(){return or.prototype.remove.apply(this.clone(),arguments)},clone:function(){return _([],this)},unique:function(e){return dt(this,e)},flatten:function(e){return ht(this,e)},union:function(){return dt(this.concat(gt(arguments)))},intersect:function(){return ft(this,gt(arguments),!1)},subtract:function(){return ft(this,gt(arguments),!0)},at:function(){return B(this,arguments)},first:function(e){return p(e)?this[0]:(0>e&&(e=0),this.slice(0,e))},last:function(e){if(p(e))return this[this.length-1];var t=this.length-e<0?0:this.length-e;return this.slice(t)},from:function(e){return this.slice(e)},to:function(e){return p(e)&&(e=this.length),this.slice(0,e)},min:function(e,t){return kt(this,e,"min",t)},max:function(e,t){return kt(this,e,"max",t)},least:function(e,t){return kt(this.groupBy.apply(this,[e]),"length","min",t)},most:function(e,t){return kt(this.groupBy.apply(this,[e]),"length","max",t)},sum:function(e){var t=e?this.map(e):this;return t.length>0?t.reduce(function(e,t){return e+t}):0},average:function(e){var t=e?this.map(e):this;return t.length>0?t.sum()/t.length:0},inGroups:function(e,t){var n=arguments.length>1,r=this,i=[],a=Nr(this.length/e);return x(e,function(e){var s=e*a,o=r.slice(s,s+a);n&&o.length<a&&x(a-o.length,function(){o=o.add(t)}),i.push(o)}),i},inGroupsOf:function(e,t){var n,r=[],i=this.length,a=this;return 0===i||0===e?a:(p(e)&&(e=1),p(t)&&(t=null),x(Nr(i/e),function(i){for(n=a.slice(e*i,e*i+e);n.length<e;)n.push(t);
r.push(n)}),r)},isEmpty:function(){return 0==this.compact().length},sortBy:function(e,t){var n=this.clone();return n.sort(function(r,i){var a,s,o;return a=at(r,e,n,[r]),s=at(i,e,n,[i]),o=Sr(a)&&Sr(s)?wt(a,s):s>a?-1:a>s?1:0,o*(t?-1:1)}),n},randomize:function(){for(var e,t,n=this.concat(),r=n.length;r;)e=fr.random()*r|0,t=n[--r],n[r]=n[e],n[e]=t;return n},zip:function(){var e=d(arguments);return this.map(function(t,n){return[t].concat(e.map(function(e){return n in e?e[n]:null}))})},sample:function(e){var t=this.randomize();return arguments.length>0?t.slice(0,e):t[0]},each:function(e,t,n){return st(this,e,t,n),this},add:function(e,t){return(!_r(dr(t))||isNaN(t))&&(t=this.length),or.prototype.splice.apply(this,[t,0].concat(e)),this},remove:function(){var e=this;return d(arguments,function(t){for(var n=0,r=it(t);n<e.length;)r(e[n],n,e)?e.splice(n,1):n++}),e},compact:function(e){var t=[];return st(this,function(n){Cr(n)?t.push(n.compact()):e&&n?t.push(n):e||null==n||n.valueOf()!==n.valueOf()||t.push(n)}),t},groupBy:function(e,t){var n,r=this,i={};return st(r,function(t,a){n=at(t,e,r,[t,a,r]),i[n]||(i[n]=[]),i[n].push(t)}),t&&w(i,t),i},none:function(){return!this.any.apply(this,arguments)}}),s(or,!0,!0,{all:or.prototype.every,any:or.prototype.some,insert:or.prototype.add}),s(sr,!1,!0,{map:function(e,t){var n,r,i={};for(n in e)v(e,n)&&(r=e[n],i[n]=at(r,t,e,[n,r,e]));return i},reduce:function(e){var t=Tt(e).map(function(t){return e[t]});return t.reduce.apply(t,d(arguments,null,1))},each:function(e,t){return h(t),w(e,t),e},size:function(e){return Tt(e).length}});var Zr="any,all,none,count,find,findAll,isEmpty".split(","),Xr="sum,average,min,max,least,most".split(","),ei="map,reduce,size".split(","),ti=Zr.concat(Xr).concat(ei);Ct(),Et(),$t(Zr),$t(Xr,!0),H(ei,E),At();var ni,ri,ii,ai,si,oi=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],ui="(?:[,.]\\d+)?",ci="\\d{1,2}"+ui,li="[0-5]\\d"+ui,di="({t})?\\s*("+ci+")(?:{h}("+li+")?{m}(?::?("+li+"){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",fi="〇一二三四五六七八九十百千万",hi={},mi=[],pi={},gi={yyyy:function(e){return I(e,"FullYear")},yy:function(e){return I(e,"FullYear")%100},ord:function(e){var t=I(e,"Date");return t+R(t)},tz:function(e){return e.getUTCOffset()},isotz:function(e){return e.getUTCOffset(!0)},Z:function(e){return e.getUTCOffset()},ZZ:function(e){return e.getUTCOffset().replace(/(\d{2})$/,":$1")}},vi=[{name:"year",method:"FullYear",ambiguous:!0,multiplier:function(e){var t=e?e.isLeapYear()?1:0:.25;return 24*(365+t)*60*60*1e3}},{name:"month",error:.919,method:"Month",ambiguous:!0,multiplier:function(e,t){var n,r=30.4375;return e&&(n=e.daysInMonth(),t<=n.days()&&(r=n)),24*r*60*60*1e3}},{name:"week",method:"ISOWeek",multiplier:function(){return 6048e5}},{name:"day",error:.958,method:"Date",ambiguous:!0,multiplier:function(){return 864e5}},{name:"hour",method:"Hours",multiplier:function(){return 36e5}},{name:"minute",method:"Minutes",multiplier:function(){return 6e4}},{name:"second",method:"Seconds",multiplier:function(){return 1e3}},{name:"millisecond",method:"Milliseconds",multiplier:function(){return 1}}],yi={};Ot.prototype={getMonth:function(e){return _r(e)?e-1:this.months.indexOf(e)%12},getWeekday:function(e){return this.weekdays.indexOf(e)%7},getNumber:function(e){var t;return _r(e)?e:e&&-1!==(t=this.numbers.indexOf(e))?(t+1)%10:1},getNumericDate:function(e){var t=this;return e.replace(ur(this.num,"g"),function(e){var n=t.getNumber(e);return n||""})},getUnitIndex:function(e){return this.units.indexOf(e)%8},getRelativeFormat:function(e){return this.convertAdjustedToFormat(e,e[2]>0?"future":"past")},getDuration:function(e){return this.convertAdjustedToFormat(Gt(e),"duration")},hasVariant:function(e){return e=e||this.code,"en"===e||"en-US"===e?!0:this.variant},matchAM:function(e){return e===this.ampm[0]},matchPM:function(e){return e&&e===this.ampm[1]},convertAdjustedToFormat:function(e,t){var n,r,i,a=e[0],s=e[1],o=e[2],u=this[t]||this.relative;return $r(u)?u.call(this,a,s,o,t):(i=this.plural&&a>1?1:0,r=this.units[8*i+s]||this.units[s],this.capitalizeUnit&&(r=Lt(r)),n=this.modifiers.filter(function(e){return"sign"==e.name&&e.value==(o>0?1:-1)})[0],u.replace(/\{(.*?)\}/g,function(e,t){switch(t){case"num":return a;case"unit":return r;case"sign":return n.src}}))},getFormats:function(){return this.cachedFormat?[this.cachedFormat].concat(this.compiledFormats):this.compiledFormats},addFormat:function(e,t,n,r,i){var a,s,o,u=n||[],c=this;e=e.replace(/\s+/g,"[,. ]*"),e=e.replace(/\{([^,]+?)\}/g,function(e,t){var r,i,a,s=t.match(/\?$/),o=t.match(/^(\d+)\??$/),l=t.match(/(\d)(?:-(\d))?/),d=t.replace(/[^a-z]+$/,"");return o?r=c.tokens[o[1]]:c[d]?r=c[d]:c[d+"s"]&&(r=c[d+"s"],l&&(i=[],r.forEach(function(e,t){var n=t%(c.units?8:r.length);n>=l[1]&&n<=(l[2]||l[1])&&i.push(e)}),r=i),r=Rt(r)),o?a="(?:"+r+")":(n||u.push(d),a="("+r+")"),s&&(a+="?"),a}),t?(a=un(di,c,i),s=["t","[\\s\\u3000]"].concat(c.timeMarker),o=e.match(/\\d\{\d,\d\}\)+\??$/),Mt(c,"(?:"+a+")[,\\s\\u3000]+?"+e,oi.concat(u),r),Mt(c,e+"(?:[,\\s]*(?:"+s.join("|")+(o?"+":"*")+")"+a+")?",u.concat(oi),r)):Mt(c,e,u,r)}},s(cr,!1,!0,{create:function(){return ln(arguments)},past:function(){return ln(arguments,-1)},future:function(){return ln(arguments,1)},addLocale:function(e,t){return Nt(e,t)},setLocale:function(e){var t=jt(e,!1);return ri=t,e&&e!=t.code&&(t.code=e),t},getLocale:function(e){return e?jt(e,!1):ri},addFormat:function(e,t,n){Mt(jt(n),e,t)}}),s(cr,!0,!0,{set:function(){var e=Ft(arguments);return on(this,e[0],e[1])},setWeekday:function(e){return p(e)?void 0:z(this,"Date",I(this,"Date")+e-I(this,"Day"))},setISOWeek:function(e){var t=I(this,"Day")||7;if(!p(e))return this.set({month:0,date:4}),this.set({weekday:1}),e>1&&this.addWeeks(e-1),1!==t&&this.advance({days:t-1}),this.getTime()},getISOWeek:function(){return Ht(this)},beginningOfISOWeek:function(){var e=this.getDay();return 0===e?e=-6:1!==e&&(e=1),this.setWeekday(e),this.reset()},endOfISOWeek:function(){return 0!==this.getDay()&&this.setWeekday(7),this.endOfDay()},getUTCOffset:function(e){var t=this._utc?0:this.getTimezoneOffset(),n=e===!0?":":"";return!t&&e?"Z":L(Mr(-t/60),2,!0)+n+L(Or(t%60),2)},utc:function(e){return l(this,"_utc",e===!0||0===arguments.length),this},isUTC:function(){return!!this._utc||0===this.getTimezoneOffset()},advance:function(){var e=Ft(arguments,!0);return on(this,e[0],e[1],1)},rewind:function(){var e=Ft(arguments,!0);return on(this,e[0],e[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(e,t){return this.getTime()>cr.create(e).getTime()-(t||0)},isBefore:function(e,t){return this.getTime()<cr.create(e).getTime()+(t||0)},isBetween:function(e,t,n){var r=this.getTime(),i=cr.create(e).getTime(),a=cr.create(t).getTime(),s=Rr(i,a),o=Dr(i,a);return n=n||0,r>s-n&&o+n>r},isLeapYear:function(){var e=I(this,"FullYear");return e%4===0&&e%100!==0||e%400===0},daysInMonth:function(){return 32-I(new cr(I(this,"FullYear"),I(this,"Month"),32),"Date")},format:function(e,t){return rn(this,e,!1,t)},relative:function(e,t){return Sr(e)&&(t=e,e=null),rn(this,e,!0,t)},is:function(e,t,n){var r,i;if(this.isValid()){if(Sr(e))switch(e=e.trim().toLowerCase(),i=this.clone().utc(n),!0){case"future"===e:return this.getTime()>Dt().getTime();case"past"===e:return this.getTime()<Dt().getTime();case"weekday"===e:return I(i,"Day")>0&&I(i,"Day")<6;case"weekend"===e:return 0===I(i,"Day")||6===I(i,"Day");case(r=ni.weekdays.indexOf(e)%7)>-1:return I(i,"Day")===r;case(r=ni.months.indexOf(e)%12)>-1:return I(i,"Month")===r}return an(this,e,null,t,n)}},reset:function(e){var t,n={};return e=e||"hours","date"===e&&(e="days"),t=vi.some(function(t){return e===t.name||e===t.name+"s"}),n[e]=e.match(/^days?/)?1:0,t?this.set(n,!0):this},clone:function(){var e=new cr(this.getTime());return e.utc(!!this._utc),e}}),s(cr,!0,!0,{iso:function(){return this.toISOString()},getWeekday:cr.prototype.getDay,getUTCWeekday:cr.prototype.getUTCDay}),s(dr,!0,!0,{duration:function(e){return jt(e).getDuration(this)}}),ni=ri=cr.addLocale("en",{plural:!0,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{date} {month}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]}),fn(),hn(),mn(),pn(),gn(),vn(),yn(),bn(),kn(),Date.addLocale("da",{plural:!0,months:"januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december",weekdays:"søndag|sondag,mandag,tirsdag,onsdag,torsdag,fredag,lørdag|lordag",units:"millisekund:|er,sekund:|er,minut:|ter,tim:e|er,dag:|e,ug:e|er|en,måned:|er|en+maaned:|er|en,år:||et+aar:||et",numbers:"en|et,to,tre,fire,fem,seks,syv,otte,ni,ti",tokens:"den,for",articles:"den","short":"d. {d}. {month} {yyyy}","long":"den {d}. {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d}. {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"forgårs|i forgårs|forgaars|i forgaars",value:-2},{name:"day",src:"i går|igår|i gaar|igaar",value:-1},{name:"day",src:"i dag|idag",value:0},{name:"day",src:"i morgen|imorgen",value:1},{name:"day",src:"over morgon|overmorgen|i over morgen|i overmorgen|iovermorgen",value:2},{name:"sign",src:"siden",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i sidste|sidste",value:-1},{name:"shift",src:"denne",value:0},{name:"shift",src:"næste|naeste",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1?} {num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{0?} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]}),Date.addLocale("de",{plural:!0,capitalizeUnit:!0,months:"Januar,Februar,März|Marz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",weekdays:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",units:"Millisekunde:|n,Sekunde:|n,Minute:|n,Stunde:|n,Tag:|en,Woche:|n,Monat:|en,Jahr:|en",numbers:"ein:|e|er|en|em,zwei,drei,vier,fuenf,sechs,sieben,acht,neun,zehn",tokens:"der","short":"{d}. {Month} {yyyy}","long":"{d}. {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d}. {Month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"um",ampm:"am,pm",modifiers:[{name:"day",src:"vorgestern",value:-2},{name:"day",src:"gestern",value:-1},{name:"day",src:"heute",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"übermorgen|ubermorgen|uebermorgen",value:2},{name:"sign",src:"vor:|her",value:-1},{name:"sign",src:"in",value:1},{name:"shift",src:"letzte:|r|n|s",value:-1},{name:"shift",src:"nächste:|r|n|s+nachste:|r|n|s+naechste:|r|n|s+kommende:n|r",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("es",{plural:!0,months:"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre",weekdays:"domingo,lunes,martes,miércoles|miercoles,jueves,viernes,sábado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,día|días|dia|dias,semana:|s,mes:|es,año|años|ano|anos",numbers:"uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez",tokens:"el,la,de","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"a las",ampm:"am,pm",modifiers:[{name:"day",src:"anteayer",value:-2},{name:"day",src:"ayer",value:-1},{name:"day",src:"hoy",value:0},{name:"day",src:"mañana|manana",value:1},{name:"sign",src:"hace",value:-1},{name:"sign",src:"dentro de",value:1},{name:"shift",src:"pasad:o|a",value:-1},{name:"shift",src:"próximo|próxima|proximo|proxima",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{0?}{1?} {unit=5-7} {shift}","{0?}{1?} {shift} {unit=5-7}"],timeParse:["{shift} {weekday}","{weekday} {shift}","{date?} {2?} {month} {2?} {year?}"]}),Date.addLocale("fi",{plural:!0,timeMarker:"kello",ampm:",",months:"tammikuu,helmikuu,maaliskuu,huhtikuu,toukokuu,kesäkuu,heinäkuu,elokuu,syyskuu,lokakuu,marraskuu,joulukuu",weekdays:"sunnuntai,maanantai,tiistai,keskiviikko,torstai,perjantai,lauantai",units:"millisekun:ti|tia|teja|tina|nin,sekun:ti|tia|teja|tina|nin,minuut:ti|tia|teja|tina|in,tun:ti|tia|teja|tina|nin,päiv:ä|ää|iä|änä|än,viik:ko|koa|koja|on|kona,kuukau:si|sia|tta|den|tena,vuo:si|sia|tta|den|tena",numbers:"yksi|ensimmäinen,kaksi|toinen,kolm:e|as,neljä:s,vii:si|des,kuu:si|des,seitsemä:n|s,kahdeksa:n|s,yhdeksä:n|s,kymmene:n|s",articles:"",optionals:"","short":"{d}. {month}ta {yyyy}","long":"{d}. {month}ta {yyyy} kello {H}.{mm}",full:"{Weekday}na {d}. {month}ta {yyyy} kello {H}.{mm}",relative:function(e,t,n,r){function i(n){return(1===e?"":e+" ")+a[8*n+t]}var a=this.units;switch(r){case"duration":return i(0);case"past":return i(e>1?1:0)+" sitten";case"future":return i(4)+" päästä"}},modifiers:[{name:"day",src:"toissa päivänä|toissa päiväistä",value:-2},{name:"day",src:"eilen|eilistä",value:-1},{name:"day",src:"tänään",value:0},{name:"day",src:"huomenna|huomista",value:1},{name:"day",src:"ylihuomenna|ylihuomista",value:2},{name:"sign",src:"sitten|aiemmin",value:-1},{name:"sign",src:"päästä|kuluttua|myöhemmin",value:1},{name:"edge",src:"viimeinen|viimeisenä",value:-2},{name:"edge",src:"lopussa",value:-1},{name:"edge",src:"ensimmäinen|ensimmäisenä",value:1},{name:"shift",src:"edellinen|edellisenä|edeltävä|edeltävänä|viime|toissa",value:-1},{name:"shift",src:"tänä|tämän",value:0},{name:"shift",src:"seuraava|seuraavana|tuleva|tulevana|ensi",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{num} {unit=4-5} {sign} {day}","{month} {year}","{shift} {unit=5-7}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1} {year?}","{date} {month} {year}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2} {shift} week","{0} {date}{1} of {month}","{0}{month?} {date?}{1} of {shift} {unit=6-7}"]}),Date.addLocale("fr",{plural:!0,months:"janvier,février|fevrier,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre|decembre",weekdays:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi",units:"milliseconde:|s,seconde:|s,minute:|s,heure:|s,jour:|s,semaine:|s,mois,an:|s|née|nee",numbers:"un:|e,deux,trois,quatre,cinq,six,sept,huit,neuf,dix",tokens:"l'|la|le","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"à",ampm:"am,pm",modifiers:[{name:"day",src:"hier",value:-1},{name:"day",src:"aujourd'hui",value:0},{name:"day",src:"demain",value:1},{name:"sign",src:"il y a",value:-1},{name:"sign",src:"dans|d'ici",value:1},{name:"shift",src:"derni:èr|er|ère|ere",value:-1},{name:"shift",src:"prochain:|e",value:1}],dateParse:["{sign} {num} {unit}","{sign} {num} {unit}","{0?} {unit=5-7} {shift}"],timeParse:["{weekday?} {0?} {date?} {month} {year?}","{0?} {weekday} {shift}"]}),Date.addLocale("it",{plural:!0,months:"Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre",weekdays:"Domenica,Luned:ì|i,Marted:ì|i,Mercoled:ì|i,Gioved:ì|i,Venerd:ì|i,Sabato",units:"millisecond:o|i,second:o|i,minut:o|i,or:a|e,giorn:o|i,settiman:a|e,mes:e|i,ann:o|i",numbers:"un:|a|o|',due,tre,quattro,cinque,sei,sette,otto,nove,dieci",tokens:"l'|la|il","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"alle",ampm:"am,pm",modifiers:[{name:"day",src:"ieri",value:-1},{name:"day",src:"oggi",value:0},{name:"day",src:"domani",value:1},{name:"day",src:"dopodomani",value:2},{name:"sign",src:"fa",value:-1},{name:"sign",src:"da adesso",value:1},{name:"shift",src:"scors:o|a",value:-1},{name:"shift",src:"prossim:o|a",value:1}],dateParse:["{num} {unit} {sign}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("ja",{monthSuffix:"月",weekdays:"日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日",units:"ミリ秒,秒,分,時間,日,週間|週,ヶ月|ヵ月|月,年","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {H}時{mm}分",full:"{yyyy}年{M}月{d}日 {Weekday} {H}時{mm}分{ss}秒",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"時,分,秒",ampm:"午前,午後",modifiers:[{name:"day",src:"一昨日",value:-2},{name:"day",src:"昨日",value:-1},{name:"day",src:"今日",value:0},{name:"day",src:"明日",value:1},{name:"day",src:"明後日",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"後",value:1},{name:"shift",src:"去|先",value:-1},{name:"shift",src:"来",value:1}],dateParse:["{num}{unit}{sign}"],timeParse:["{shift}{unit=5-7}{weekday?}","{year}年{month?}月?{date?}日?","{month}月{date?}日?","{date}日"]}),Date.addLocale("ko",{digitDate:!0,monthSuffix:"월",weekdays:"일요일,월요일,화요일,수요일,목요일,금요일,토요일",units:"밀리초,초,분,시간,일,주,개월|달,년",numbers:"일|한,이,삼,사,오,육,칠,팔,구,십","short":"{yyyy}년{M}월{d}일","long":"{yyyy}년{M}월{d}일 {H}시{mm}분",full:"{yyyy}년{M}월{d}일 {Weekday} {H}시{mm}분{ss}초",past:"{num}{unit} {sign}",future:"{num}{unit} {sign}",duration:"{num}{unit}",timeSuffixes:"시,분,초",ampm:"오전,오후",modifiers:[{name:"day",src:"그저께",value:-2},{name:"day",src:"어제",value:-1},{name:"day",src:"오늘",value:0},{name:"day",src:"내일",value:1},{name:"day",src:"모레",value:2},{name:"sign",src:"전",value:-1},{name:"sign",src:"후",value:1},{name:"shift",src:"지난|작",value:-1},{name:"shift",src:"이번",value:0},{name:"shift",src:"다음|내",value:1}],dateParse:["{num}{unit} {sign}","{shift?} {unit=5-7}"],timeParse:["{shift} {unit=5?} {weekday}","{year}년{month?}월?{date?}일?","{month}월{date?}일?","{date}일"]}),Date.addLocale("nl",{plural:!0,months:"januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december",weekdays:"zondag|zo,maandag|ma,dinsdag|di,woensdag|woe|wo,donderdag|do,vrijdag|vrij|vr,zaterdag|za",units:"milliseconde:|n,seconde:|n,minu:ut|ten,uur,dag:|en,we:ek|ken,maand:|en,jaar",numbers:"een,twee,drie,vier,vijf,zes,zeven,acht,negen",tokens:"","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"'s|om",modifiers:[{name:"day",src:"gisteren",value:-1},{name:"day",src:"vandaag",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"overmorgen",value:2},{name:"sign",src:"geleden",value:-1},{name:"sign",src:"vanaf nu",value:1},{name:"shift",src:"laatste|vorige|afgelopen",value:-1},{name:"shift",src:"volgend:|e",value:1}],dateParse:["{num} {unit} {sign}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("pl",{plural:!0,months:"Styczeń|Stycznia,Luty|Lutego,Marzec|Marca,Kwiecień|Kwietnia,Maj|Maja,Czerwiec|Czerwca,Lipiec|Lipca,Sierpień|Sierpnia,Wrzesień|Września,Październik|Października,Listopad|Listopada,Grudzień|Grudnia",weekdays:"Niedziela|Niedzielę,Poniedziałek,Wtorek,Środ:a|ę,Czwartek,Piątek,Sobota|Sobotę",units:"milisekund:a|y|,sekund:a|y|,minut:a|y|,godzin:a|y|,dzień|dni,tydzień|tygodnie|tygodni,miesiące|miesiące|miesięcy,rok|lata|lat",numbers:"jeden|jedną,dwa|dwie,trzy,cztery,pięć,sześć,siedem,osiem,dziewięć,dziesięć",optionals:"w|we,roku","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday}, {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"o",ampm:"am,pm",modifiers:[{name:"day",src:"przedwczoraj",value:-2},{name:"day",src:"wczoraj",value:-1},{name:"day",src:"dzisiaj|dziś",value:0},{name:"day",src:"jutro",value:1},{name:"day",src:"pojutrze",value:2},{name:"sign",src:"temu|przed",value:-1},{name:"sign",src:"za",value:1},{name:"shift",src:"zeszły|zeszła|ostatni|ostatnia",value:-1},{name:"shift",src:"następny|następna|następnego|przyszły|przyszła|przyszłego",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}","{0} {shift?} {weekday}"],timeParse:["{date} {month} {year?} {1}","{0} {shift?} {weekday}"]}),Date.addLocale("pt",{plural:!0,months:"janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro",weekdays:"domingo,segunda-feira,terça-feira,quarta-feira,quinta-feira,sexta-feira,sábado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,dia:|s,semana:|s,mês|mêses|mes|meses,ano:|s",numbers:"um,dois,três|tres,quatro,cinco,seis,sete,oito,nove,dez,uma,duas",tokens:"a,de","short":"{d} de {month} de {yyyy}","long":"{d} de {month} de {yyyy} {H}:{mm}",full:"{Weekday}, {d} de {month} de {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"às",ampm:"am,pm",modifiers:[{name:"day",src:"anteontem",value:-2},{name:"day",src:"ontem",value:-1},{name:"day",src:"hoje",value:0},{name:"day",src:"amanh:ã|a",value:1},{name:"sign",src:"atrás|atras|há|ha",value:-1},{name:"sign",src:"daqui a",value:1},{name:"shift",src:"passad:o|a",value:-1},{name:"shift",src:"próximo|próxima|proximo|proxima",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{date?} {1?} {month} {1?} {year?}","{0?} {shift} {weekday}"]}),Date.addLocale("ru",{months:"Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь",weekdays:"Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота",units:"миллисекунд:а|у|ы|,секунд:а|у|ы|,минут:а|у|ы|,час:||а|ов,день|день|дня|дней,недел:я|ю|и|ь|е,месяц:||а|ев|е,год|год|года|лет|году",numbers:"од:ин|ну,дв:а|е,три,четыре,пять,шесть,семь,восемь,девять,десять",tokens:"в|на,года","short":"{d} {month} {yyyy} года","long":"{d} {month} {yyyy} года {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} года {H}:{mm}:{ss}",relative:function(e,t,n,r){var i,a,s=e.toString().slice(-1);switch(!0){case e>=11&&15>=e:a=3;break;case 1==s:a=1;break;case s>=2&&4>=s:a=2;break;default:a=3}switch(i=e+" "+this.units[8*a+t],r){case"duration":return i;case"past":return i+" назад";case"future":return"через "+i}},timeMarker:"в",ampm:" утра, вечера",modifiers:[{name:"day",src:"позавчера",value:-2},{name:"day",src:"вчера",value:-1},{name:"day",src:"сегодня",value:0},{name:"day",src:"завтра",value:1},{name:"day",src:"послезавтра",value:2},{name:"sign",src:"назад",value:-1},{name:"sign",src:"через",value:1},{name:"shift",src:"прошл:ый|ой|ом",value:-1},{name:"shift",src:"следующ:ий|ей|ем",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{0?} {shift} {unit=5-7}"],timeParse:["{date} {month} {year?} {1?}","{0?} {shift} {weekday}"]}),Date.addLocale("sv",{plural:!0,months:"januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december",weekdays:"söndag|sondag,måndag:|en+mandag:|en,tisdag,onsdag,torsdag,fredag,lördag|lordag",units:"millisekund:|er,sekund:|er,minut:|er,timm:e|ar,dag:|ar,veck:a|or|an,månad:|er|en+manad:|er|en,år:||et+ar:||et",numbers:"en|ett,två|tva,tre,fyra,fem,sex,sju,åtta|atta,nio,tio",tokens:"den,för|for",articles:"den","short":"den {d} {month} {yyyy}","long":"den {d} {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"förrgår|i förrgår|iförrgår|forrgar|i forrgar|iforrgar",value:-2},{name:"day",src:"går|i går|igår|gar|i gar|igar",value:-1},{name:"day",src:"dag|i dag|idag",value:0},{name:"day",src:"morgon|i morgon|imorgon",value:1},{name:"day",src:"över morgon|övermorgon|i över morgon|i övermorgon|iövermorgon|over morgon|overmorgon|i over morgon|i overmorgon|iovermorgon",value:2},{name:"sign",src:"sedan|sen",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i förra|förra|i forra|forra",value:-1},{name:"shift",src:"denna",value:0},{name:"shift",src:"nästa|nasta",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1?} {num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{0?} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]}),Date.addLocale("zh-CN",{variant:!0,monthSuffix:"月",weekdays:"星期日|周日,星期一|周一,星期二|周二,星期三|周三,星期四|周四,星期五|周五,星期六|周六",units:"毫秒,秒钟,分钟,小时,天,个星期|周,个月,年",tokens:"日|号","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {tt}{h}:{mm}",full:"{yyyy}年{M}月{d}日 {weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"点|时,分钟?,秒",ampm:"上午,下午",modifiers:[{name:"day",src:"前天",value:-2},{name:"day",src:"昨天",value:-1},{name:"day",src:"今天",value:0},{name:"day",src:"明天",value:1},{name:"day",src:"后天",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"后",value:1},{name:"shift",src:"上|去",value:-1},{name:"shift",src:"这",value:0},{name:"shift",src:"下|明",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}年{month?}月?{date?}{0?}","{month}月{date?}{0?}","{date}[日号]"]}),Date.addLocale("zh-TW",{monthSuffix:"月",weekdays:"星期日|週日,星期一|週一,星期二|週二,星期三|週三,星期四|週四,星期五|週五,星期六|週六",units:"毫秒,秒鐘,分鐘,小時,天,個星期|週,個月,年",tokens:"日|號","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {tt}{h}:{mm}",full:"{yyyy}年{M}月{d}日 {Weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"點|時,分鐘?,秒",ampm:"上午,下午",modifiers:[{name:"day",src:"前天",value:-2},{name:"day",src:"昨天",value:-1},{name:"day",src:"今天",value:0},{name:"day",src:"明天",value:1},{name:"day",src:"後天",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"後",value:1},{name:"shift",src:"上|去",value:-1},{name:"shift",src:"這",value:0},{name:"shift",src:"下|明",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}年{month?}月?{date?}{0?}","{month}月{date?}{0?}","{date}[日號]"]}),s(Function,!0,!0,{lazy:function(e,t,n){function r(){return c.length<n-(l&&t?1:0)&&c.push([this,arguments]),l||(l=!0,t?i():xn(r,a,i)),o}var i,a,s,o,u=this,c=[],l=!1;return e=e||1,n=n||1/0,a=Nr(e),s=Lr(a/e)||1,i=function(){var e,t=c.length;if(0!=t){for(e=Dr(t-s,0);t>e;)o=Function.prototype.apply.apply(u,c.shift()),t--;xn(r,a,function(){l=!1,i()})}},r},throttle:function(e){return this.lazy(e,!0,1)},debounce:function(e){function t(){t.cancel(),xn(t,e,n,this,arguments)}var n=this;return t},delay:function(e){var t=this,n=d(arguments,null,1);return xn(t,e,t,t,n),t},every:function(e){function t(){n.apply(n,r),xn(n,e,t)}var n=this,r=arguments;return r=r.length>1?d(r,null,1):[],xn(n,e,t),n},cancel:function(){var e,t=this.timers;if(Cr(t))for(;e=t.shift();)clearTimeout(e);return this._canceled=!0,this},after:function(e){var t=this,n=0,r=[];if(_r(e)){if(0===e)return t.call(),t}else e=1;return function(){var i;return r.push(d(arguments)),n++,n==e?(i=t.call(this,r),n=0,r=[],i):void 0}},once:function(){return this.throttle(1/0,!0)},fill:function(){var e=this,t=d(arguments);return function(){var n=d(arguments);return t.forEach(function(e,t){(null!=e||t>=n.length)&&n.splice(t,0,e)}),e.apply(this,n)}}}),s(dr,!1,!0,{random:function(e,t){var n,r;return 1==arguments.length&&(t=e,e=0),n=Rr(e||0,p(t)?1:t),r=Dr(e||0,p(t)?1:t)+1,Mr(fr.random()*(r-n)+n)}}),s(dr,!0,!0,{log:function(e){return fr.log(this)/(e?fr.log(e):1)},abbr:function(e){return _n(this,e,"kmbt",0,4)},metric:function(e,t){return _n(this,e,"nμm kMGTPE",4,p(t)?1:t)},bytes:function(e,t){return _n(this,e,"kMGTPE",0,p(t)?4:t,!0)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(e){return this%e===0},format:function(e,t,n){var r,i,a,s,o,u="";for(p(t)&&(t=","),p(n)&&(n="."),i=(_r(e)?T(this,e||0).toFixed(Dr(e,0)):this.toString()).replace(/^-/,""),a=i.split("."),s=a[0],o=a[1],r=s.length;r>0;r-=3)r<s.length&&(u=t+u),u=s.slice(Dr(0,r-3),r)+u;return o&&(u+=n+N("0",(e||0)-o.length)+o),(0>this?"-":"")+u},hex:function(e){return this.pad(e||1,!1,16)},times:function(e){if(e)for(var t=0;this>t;t++)e.call(this,t);return this.toNumber()},chr:function(){return lr.fromCharCode(this)},pad:function(e,t,n){return L(this,e,t,n)},ordinalize:function(){var e=Or(this),t=parseInt(e.toString().slice(-2));return this+R(t)},toNumber:function(){return parseFloat(this,10)}}),Sn();var bi="isObject,isNaN".split(","),ki="keys,values,select,reject,each,merge,clone,equal,watch,tap,has,toQueryString".split(",");s(sr,!1,!0,{watch:function(e,t,n){if(gr){var r=e[t];sr.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return r},set:function(i){r=n.call(e,t,r,i)}})}}}),s(sr,!1,function(){return arguments.length>1},{keys:function(e,t){var n=sr.keys(e);return n.forEach(function(n){t.call(e,n,e[n])}),n}}),s(sr,!1,!0,{isObject:function(e){return k(e)},isNaN:function(e){return _r(e)&&e.valueOf()!==e.valueOf()},equal:function(e,t){return W(e,t)},extended:function(e){return new E(e)},merge:function(e,t,n,r){var i,a,s,o,u,c,l;if(e&&"string"!=typeof t)for(i in t)if(v(t,i)&&e){if(o=t[i],u=e[i],c=m(u),a=y(o),s=y(u),l=c&&r===!1?u:o,c&&$r(r)&&(l=r.call(t,i,u,o)),n&&(a||s))if(Er(o))l=new cr(o.getTime());else{if(!Tr(o)){s||(e[i]=or.isArray(o)?[]:{}),sr.merge(e[i],o,n,r);continue}l=new ur(o.source,D(o))}e[i]=l}return e},values:function(e,t){var n=[];return w(e,function(r,i){n.push(i),t&&t.call(e,i)}),n},clone:function(e,t){var n,i;if(!y(e))return e;if(i=r(e),Er(e,i)&&e.clone)return e.clone();if(Er(e,i)||Tr(e,i))return new e.constructor(e);if(e instanceof E)n=new E;else if(Cr(e,i))n=[];else{if(!k(e,i))throw new TypeError("Clone must be a basic data type.");n={}}return sr.merge(n,e,t)},fromQueryString:function(e,t){var n=sr.extended();return e=e&&e.toString?e.toString():"",e.replace(/^.*?\?/,"").split("&").forEach(function(e){var r=e.split("=");2===r.length&&Cn(n,r[0],decodeURIComponent(r[1]),t)}),n},toQueryString:function(e,t){return En(t,e)},tap:function(e,t){var n=t;return $r(t)||(n=function(){t&&e[t]()}),n.call(e,e),e},has:function(e,t){return v(e,t)},select:function(e){return An(e,arguments,!0)},reject:function(e){return An(e,arguments,!1)}}),On(),jn(),H(ki,E),Nn.prototype.toString=function(){return this.isValid()?this.start+".."+this.end:"Invalid Range"},s(Nn,!0,!0,{isValid:function(){return Dn(this.start)&&Dn(this.end)&&typeof this.start==typeof this.end},span:function(){return this.isValid()?Or(Mn(this.end)-Mn(this.start))+1:0/0},contains:function(e){return null==e?!1:e.start&&e.end?e.start>=this.start&&e.start<=this.end&&e.end>=this.start&&e.end<=this.end:e>=this.start&&e<=this.end},every:function(e,t){var n,r=this.start,i=this.end,a=r>i,s=r,o=0,u=[];for($r(e)&&(t=e,e=null),e=e||1,_r(r)?n=Pn:Sr(r)?n=zn:Er(r)&&(e=Fn(e),n=In),a&&e>0&&(e*=-1);a?s>=i:i>=s;)u.push(s),t&&t(s,o),s=n(s,e),o++;
return u},union:function(e){return new Nn(this.start<e.start?this.start:e.start,this.end>e.end?this.end:e.end)},intersect:function(e){return e.start>this.end||e.end<this.start?new Nn(0/0,0/0):new Nn(this.start>e.start?this.start:e.start,this.end<e.end?this.end:e.end)},clone:function(){return new Nn(this.start,this.end)},clamp:function(e){var t,n=this.start,r=this.end,i=n>r?r:n,a=n>r?n:r;return t=i>e?i:e>a?a:e,Rn(t)}}),[dr,lr,cr].forEach(function(e){s(e,!1,!0,{range:function(t,n){return e.create&&(t=e.create(t),n=e.create(n)),new Nn(t,n)}})}),s(dr,!0,!0,{upto:function(e,t,n){return dr.range(this,e).every(n,t)},clamp:function(e,t){return new Nn(e,t).clamp(this)},cap:function(e){return this.clamp(ar,e)}}),s(dr,!0,!0,{downto:dr.prototype.upto}),s(or,!1,function(e){return e instanceof Nn},{create:function(e){return e.every()}}),s(ur,!1,!0,{escape:function(e){return F(e)}}),s(ur,!0,!0,{getFlags:function(){return D(this)},setFlags:function(e){return ur(this.source,e)},addFlag:function(e){return this.setFlags(D(this,e))},removeFlag:function(e){return this.setFlags(D(this).replace(e,""))}});var wi,xi;s(lr,!0,!1,{repeat:function(e){return e=qn(e),N(this,e)}}),s(lr,!0,function(e){return Tr(e)||arguments.length>2},{startsWith:function(e){var t,n=arguments,r=n[1],i=n[2],a=this;return r&&(a=a.slice(r)),p(i)&&(i=!0),t=Tr(e)?e.source.replace("^",""):F(e),ur("^"+t,i?"":"i").test(a)},endsWith:function(e){var t,n=arguments,r=n[1],i=n[2],a=this;return m(r)&&(a=a.slice(0,r)),p(i)&&(i=!0),t=Tr(e)?e.source.replace("$",""):F(e),ur(t+"$",i?"":"i").test(a)}}),s(lr,!0,!0,{escapeRegExp:function(){return F(this)},escapeURL:function(e){return e?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(e){return e?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#x2f;/g,"/").replace(/&amp;/g,"&")},encodeBase64:function(){return wi(unescape(encodeURIComponent(this)))},decodeBase64:function(){return decodeURIComponent(escape(xi(this)))},each:function(e,t){var n,r,i;if($r(e)?(t=e,e=/[\s\S]/g):e?Sr(e)?e=ur(F(e),"gi"):Tr(e)&&(e=ur(e.source,D(e,"g"))):e=/[\s\S]/g,n=this.match(e)||[],t)for(r=0,i=n.length;i>r;r++)n[r]=t.call(this,n[r],r,n)||n[r];return n},shift:function(e){var t="";return e=e||0,this.codes(function(n){t+=O(n+e)}),t},codes:function(e){var t,n,r=[];for(t=0,n=this.length;n>t;t++){var i=this.charCodeAt(t);r.push(i),e&&e.call(this,i,t)}return r},chars:function(e){return this.each(e)},words:function(e){return this.trim().each(/\S+/g,e)},lines:function(e){return this.trim().each(/^.*$/gm,e)},paragraphs:function(e){var t=this.trim().split(/[\r\n]{2,}/);return t=t.map(function(t){if(e)var n=e.call(t);return n?n:t})},isBlank:function(){return 0===this.trim().length},has:function(e){return-1!==this.search(Tr(e)?e:F(e))},add:function(e,t){return t=p(t)?this.length:t,this.slice(0,t)+e+this.slice(t)},remove:function(e){return this.replace(e,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s　])+/g,function(e,t){return"　"===t?t:" "})},at:function(){return B(this,arguments,!0)},from:function(e){return this.slice(Gn(this,e,!0))},to:function(e){return p(e)&&(e=this.length),this.slice(0,Gn(this,e))},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(lr.Inflector&&lr.Inflector.acronymRegExp,function(e,t){return(t>0?"_":"")+e.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(e){return this.underscore().replace(/(^|_)([^_]+)/g,function(t,n,r,i){var a=Wn(r),s=e!==!1||i>0;return a?s?a:a.toLowerCase():s?r.capitalize():r})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var e=this,t=arguments.length>0?arguments:[""];return f(t,function(t){e=e.replace(ur("</?"+F(t)+"[^<>]*>","gi"),"")}),e},removeTags:function(){var e=this,t=arguments.length>0?arguments:["\\S+"];return f(t,function(t){var n=ur("<("+t+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");e=e.replace(n,"")}),e},truncate:function(e,t,n){return Un(this,e,t,n)},truncateOnWord:function(e,t,n){return Un(this,e,t,n,!0)},pad:function(e,t){var n,r,i;return e=qn(e),n=Dr(0,e-this.length)/2,r=Mr(n),i=Nr(n),Bn(r,t)+this+Bn(i,t)},padLeft:function(e,t){return e=qn(e),Bn(Dr(0,e-this.length),t)+this},padRight:function(e,t){return e=qn(e),this+Bn(Dr(0,e-this.length),t)},first:function(e){return p(e)&&(e=1),this.substr(0,e)},last:function(e){p(e)&&(e=1);var t=this.length-e<0?0:this.length-e;return this.substr(t)},toNumber:function(e){return M(this,e)},capitalize:function(e){var t;return this.toLowerCase().replace(e?/[^']/g:/^\S/,function(e){var n,r=e.toUpperCase();return n=t?e:r,t=r!==e,n})},assign:function(){var e={};return f(arguments,function(t,n){y(t)?_(e,t):e[n+1]=t}),this.replace(/\{([^{]+?)\}/g,function(t,n){return v(e,n)?e[n]:t})}}),s(lr,!0,!0,{insert:lr.prototype.add}),Vn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");var _i,Si,Ci=[],Ei=[],Ti=[],$i=[],Ai={};Si={acronym:function(e){Ai[e.toLowerCase()]=e;var t=sr.keys(Ai).map(function(e){return Ai[e]});Si.acronymRegExp=ur(t.join("|"),"g")},plural:function(e,t){Yn(Ci,e,t)},singular:function(e,t){Yn(Ei,e,t)},irregular:function(e,t){var n=e.first(),r=e.from(1),i=t.first(),a=t.from(1),s=i.toUpperCase(),o=i.toLowerCase(),u=n.toUpperCase(),c=n.toLowerCase();Jn(Ti,e),Jn(Ti,t),u==s?(Si.plural(new ur("({1}){2}$".assign(n,r),"i"),"$1"+a),Si.plural(new ur("({1}){2}$".assign(i,a),"i"),"$1"+a),Si.singular(new ur("({1}){2}$".assign(i,a),"i"),"$1"+r)):(Si.plural(new ur("{1}{2}$".assign(u,r)),s+a),Si.plural(new ur("{1}{2}$".assign(c,r)),o+a),Si.plural(new ur("{1}{2}$".assign(s,a)),s+a),Si.plural(new ur("{1}{2}$".assign(o,a)),o+a),Si.singular(new ur("{1}{2}$".assign(s,a)),u+r),Si.singular(new ur("{1}{2}$".assign(o,a)),c+r))},uncountable:function(e){var t=or.isArray(e)?e:d(arguments);Ti=Ti.concat(t)},human:function(e,t){$i.unshift({rule:e,replacement:t})},clear:function(e){Kn(e,"singulars")&&(Ei=[]),Kn(e,"plurals")&&(Ci=[]),Kn(e,"uncountables")&&(Ti=[]),Kn(e,"humans")&&($i=[]),Kn(e,"acronyms")&&(Ai={})}},_i=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"],Si.plural(/$/,"s"),Si.plural(/s$/gi,"s"),Si.plural(/(ax|test)is$/gi,"$1es"),Si.plural(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1i"),Si.plural(/(census|alias|status)$/gi,"$1es"),Si.plural(/(bu)s$/gi,"$1ses"),Si.plural(/(buffal|tomat)o$/gi,"$1oes"),Si.plural(/([ti])um$/gi,"$1a"),Si.plural(/([ti])a$/gi,"$1a"),Si.plural(/sis$/gi,"ses"),Si.plural(/f+e?$/gi,"ves"),Si.plural(/(cuff|roof)$/gi,"$1s"),Si.plural(/([ht]ive)$/gi,"$1s"),Si.plural(/([^aeiouy]o)$/gi,"$1es"),Si.plural(/([^aeiouy]|qu)y$/gi,"$1ies"),Si.plural(/(x|ch|ss|sh)$/gi,"$1es"),Si.plural(/(matr|vert|ind)(?:ix|ex)$/gi,"$1ices"),Si.plural(/([ml])ouse$/gi,"$1ice"),Si.plural(/([ml])ice$/gi,"$1ice"),Si.plural(/^(ox)$/gi,"$1en"),Si.plural(/^(oxen)$/gi,"$1"),Si.plural(/(quiz)$/gi,"$1zes"),Si.plural(/(phot|cant|hom|zer|pian|portic|pr|quart|kimon)o$/gi,"$1os"),Si.plural(/(craft)$/gi,"$1"),Si.plural(/([ft])[eo]{2}(th?)$/gi,"$1ee$2"),Si.singular(/s$/gi,""),Si.singular(/([pst][aiu]s)$/gi,"$1"),Si.singular(/([aeiouy])ss$/gi,"$1ss"),Si.singular(/(n)ews$/gi,"$1ews"),Si.singular(/([ti])a$/gi,"$1um"),Si.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/gi,"$1$2sis"),Si.singular(/(^analy)ses$/gi,"$1sis"),Si.singular(/(i)(f|ves)$/i,"$1fe"),Si.singular(/([aeolr]f?)(f|ves)$/i,"$1f"),Si.singular(/([ht]ive)s$/gi,"$1"),Si.singular(/([^aeiouy]|qu)ies$/gi,"$1y"),Si.singular(/(s)eries$/gi,"$1eries"),Si.singular(/(m)ovies$/gi,"$1ovie"),Si.singular(/(x|ch|ss|sh)es$/gi,"$1"),Si.singular(/([ml])(ous|ic)e$/gi,"$1ouse"),Si.singular(/(bus)(es)?$/gi,"$1"),Si.singular(/(o)es$/gi,"$1"),Si.singular(/(shoe)s?$/gi,"$1"),Si.singular(/(cris|ax|test)[ie]s$/gi,"$1is"),Si.singular(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1us"),Si.singular(/(census|alias|status)(es)?$/gi,"$1"),Si.singular(/^(ox)(en)?/gi,"$1"),Si.singular(/(vert|ind)(ex|ices)$/gi,"$1ex"),Si.singular(/(matr)(ix|ices)$/gi,"$1ix"),Si.singular(/(quiz)(zes)?$/gi,"$1"),Si.singular(/(database)s?$/gi,"$1"),Si.singular(/ee(th?)$/gi,"oo$1"),Si.irregular("person","people"),Si.irregular("man","men"),Si.irregular("child","children"),Si.irregular("sex","sexes"),Si.irregular("move","moves"),Si.irregular("save","saves"),Si.irregular("cow","kine"),Si.irregular("goose","geese"),Si.irregular("zombie","zombies"),Si.uncountable("equipment,information,rice,money,species,series,fish,sheep,jeans".split(",")),s(lr,!0,!0,{pluralize:function(){return Zn(this,!0)},singularize:function(){return Zn(this,!1)},humanize:function(){var e,t=Xn(this,$i);return t=t.replace(/_id$/g,""),t=t.replace(/(_)?([a-z\d]*)/gi,function(t,n,r){return e=v(Ai,r)?Ai[r]:null,(n?" ":"")+(e||r.toLowerCase())}),er(t)},titleize:function(){var e,t,n,r=/[.:;!]$/;return this.spacify().humanize().words(function(i,a,s){return e=r.test(i),n=0==a||a==s.length-1||e||t,t=e,n||-1===_i.indexOf(i)?er(i):i}).join(" ")},parameterize:function(e){var t=this;return void 0===e&&(e="-"),t.normalize&&(t=t.normalize()),t=t.replace(/[^a-z0-9\-_]+/gi,e),e&&(t=t.replace(new ur("^{sep}+|{sep}+$|({sep}){sep}+".assign({sep:F(e)}),"g"),"$1")),encodeURI(t.toLowerCase())}}),lr.Inflector=Si,lr.Inflector.acronyms=Ai;var Oi,ji=[{names:["Arabic"],source:"؀-ۿ"},{names:["Cyrillic"],source:"Ѐ-ӿ"},{names:["Devanagari"],source:"ऀ-ॿ"},{names:["Greek"],source:"Ͱ-Ͽ"},{names:["Hangul"],source:"가-힯ᄀ-ᇿ"},{names:["Han","Kanji"],source:"一-鿿豈-﫿"},{names:["Hebrew"],source:"֐-׿"},{names:["Hiragana"],source:"぀-ゟ・-ー"},{names:["Kana"],source:"぀-ヿ｡-ﾟ"},{names:["Katakana"],source:"゠-ヿ｡-ﾟ"},{names:["Latin"],source:"--ÿĀ-ſƀ-ɏ"},{names:["Thai"],source:"฀-๿"}],Ni=65248,Mi=[{type:"a",start:65,end:90},{type:"a",start:97,end:122},{type:"n",start:48,end:57},{type:"p",start:33,end:47},{type:"p",start:58,end:64},{type:"p",start:91,end:96},{type:"p",start:123,end:126}],Li=/[\u0020-\u00A5]|[\uFF61-\uFF9F][ﾞﾟ]?/g,Ri=/[\u3000-\u301C]|[\u301A-\u30FC]|[\uFF01-\uFF60]|[\uFFE0-\uFFE6]/g,Di="｡､｢｣¥¢£",Fi="。、「」￥￠￡",Ii=/[カキクケコサシスセソタチツテトハヒフヘホ]/,zi=/[ハヒフヘホヲ]/,Pi="ｱｲｳｴｵｧｨｩｪｫｶｷｸｹｺｻｼｽｾｿﾀﾁﾂｯﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔｬﾕｭﾖｮﾗﾘﾙﾚﾛﾜｦﾝｰ･",Wi="アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー・";s(lr,!0,!0,{hankaku:function(){return nr(this,arguments,Ri,"hankaku")},zenkaku:function(){return nr(this,arguments,Li,"zenkaku")},hiragana:function(e){var t=this;return e!==!1&&(t=t.zenkaku("k")),t.replace(/[\u30A1-\u30F6]/g,function(e){return e.shift(-96)})},katakana:function(){return this.replace(/[\u3041-\u3096]/g,function(e){return e.shift(96)})}}),tr()}();

/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);

/*
 * jQuery.my 1.1.2
 * Requires jQuery 1.11.0+, SugarJS 1.3.9-1.4.x
 *
 * — Unjson recognizes functions with trailing spaces
 * — Fixed manifest versions interference on cache updates
 * — Fixed issue with Chrome Function.toString for anonymous fns
 *
 * More details at jquerymy.com
 * 
 * @ermouth, thanks @carpogoryanin, @ftescht
 * 2015-04-12
 */

;(function ($) {var _version = "jQuery.my 1.1.2";

	// Some shortcuts and constants
	var lang = "en",
		wURL = window.URL || window.webkitURL,
		ie8 = !document.addEventListener,
		forms = _getref($,"my.f.repo")? $.my.f.repo():{_src:{}, _name:"Global manifest cache"},
		restyles = _getref($,"my.f.restyles")? $.my.f.restyles():{},
		
		$E = $.extend,  T = $.type, N = null, TMP,
		n = function (o) {return o!==null && o!==undefined;},
		d8 = "{yyyy}-{MM}-{dd}", h24="{HH}:{mm}",
		Ob = "object", Da = "data", Ar = "array",
		St = "string", Fu = "function", Ch = "change",
		rthis = /^this\./,
		
		isA = Object.isArray,
		isB = Object.isBoolean,
		isS = Object.isString,
		isO = Object.isObject,
		isN = Object.isNumber,
		isR = Object.isRegExp,
		isF = Object.isFunction,
		isP = function (a) {/*is promise*/return !!(null!=a&&(isO(a)||a.jquery)&&isF(a.then)&&isF(a.fail)&&isF(a.state));};

	
	//=======================================
	// Manifest repo getter/setter and helpers

	var _cache = function _localCache (A1, A2) {
		// ( no args ) – returns all forms obj container
		// ({manifest},  {container}) – caches form in container, id must be defined, return form or null
		// ({manifest}) – caches form in local container, id must be defined
		// ("form.Id", "exist") – true/false
		// ("form.Id", {container}) – get from container
		// ("form.Id") – get from local cache
		var ref, obj;
		if (isS(A1)) {
			ref=A1;
			obj = _getref(isO(A2)?A2:forms, ref);
			if ("exist"===A2) return isO(obj);
			return !obj?null:Object.clone(obj,true);
		} else if (isO(A1)){
			obj = _putmanifest (A1, A2);
			if (!isO(obj)) {
				return null;
			}
			return obj;
		} else if (undefined===A1) {
			return forms._src;
		} else if (null===A1) {
			return Object.reject(forms,/^_/);
		}else return null;
	};

	// - - - - - - - - - - - - - - - - - - - -

	function _getref(obj,ref) {
		//gets branch of obj by string ref like "data.list.items.1"
		return (ref||"").split(".").reduce(function (a,b){
			if (null!=a && null!=a[b]) return a[b];
			else return undefined;
		}, obj);
	}

	// - - - - - - - - - - - - - - - - - - - -

	function _manifest (manifest, ref) {
		// Dereferences pointer to form component,
		// manifest is caller manifest obj,
		// internal function
		var t, ext;
		if (isO(ref)) return ref;
		else if (isS(ref)) {

			//try to find it on manifest
			t = _getref(manifest, ref);

			//then in local repo as original
			if (null==t) t = Object.clone(forms._src[ref],true);

			//then in local repo as part of component
			if (null==t) {
				t = _getref(forms, ref);
				if (isO(t) && isO(t._self)) t=Object.clone(t._self,true);
				else if (isO(t)) t = Object.clone(t,true);
			}

			//then in ext repo as part of component
			if (null==t && _getref(manifest,"params.cache")) {
				ext = _getref(manifest,"params.cache");
				if (isF(ext)) t = ext(ref);
				else if (isO(ext)) t = _cache(ref, ext);

				if (isO(t)){
					if (isO(t._self)) t=Object.clone(t._self,true);
					Object.merge(t, {params:{cache:ext}}, true);
				}
			}

			if (null!=t && isO(t)) {
				ext = ext||_getref(manifest,"params.cache");
				if (ext) Object.merge(t, {params:{cache:ext}}, true);
				return t;
			}
			else throw "Component "+ref+" not found";

		} else if (isF(ref)) {
			return ref.apply(manifest, Array.prototype.slice.call(arguments, 2));
		} else return null;
	}

	// - - - - - - - - - - - - - - - - - - - -

	function _putmanifest (obj0, root0) {
		// Mounts obj to root in a branch, defined in
		// obj.id property. If id =="x.y.z", root will be
		// deep extended with {x:{y:{z:obj}}}.
		// obj also is unjsonned and extended with _self ref,
		// which point to original version of obj.

		//Returns direct link to entire branch obj or string error.

		var i, j, keys, file, root=root0||forms, obj=obj0, path, id, prev, res;

		if (!(isO(root) && isO(obj) && isO(obj.ui) && isS(obj.id)))
			return "Invalid arguments.";

		if (!root.hasOwnProperty("_src")) root._src={};

		id = obj.id;


		//path = id.split(".");

		try {obj=Object.clone(obj0, true);}
		catch (e) {return "Can’t mount circular-referencing obj.";}

		//unwind string defs of functions
		try {if (!obj.params || (obj.params && !obj.params.strict)) _unjson(obj, true);}
		catch (e) {
			return "Invalid manifest, parse error.";
		}

		//blobify files
		i = _files2urls (obj);
		if (isS(i)) {
			f.con(i);
			return i;
		}

		//mark manifest as unjsonned
		Object.merge(obj,{params:{strict:true}}, true);
		// save it
		root._src[id] = obj;


		if (prev=f.mask(root, id)) {
			if (prev.params && prev.params.protect) return "Can’t mount on protected.";
			else {
				// Remove prev version
				if (prev._self) delete prev._self;
				$.extend(!0, root, f.unmask("",id));
			}
		} 
		
		// Mount new version
		$.extend (!0, root, f.unmask(obj, id));
		
		// Re-mount sub-manifests if any
		keys = Object
		.keys(root._src)
		.filter(function(e){
			return e.startsWith(id+'.');
		});
		keys.sort();
		keys.forEach(function(id){
			var prev;
			if (prev=f.mask(root, id)) {
				// Remove subform if any
				if (prev._self) delete prev._self;
				$.extend (!0, root, f.unmask("",id));
			}
			// Re-mount version from repo
			$.extend (!0, root, f.unmask(root._src[id], id))
		});
		
		// Mount _self link to uncompiled manifest
		res = _getref(root,id);

		if (ie8) res["_self"] = root._src[id];
		else Object.defineProperty(res, "_self", {
			get: function () { return root._src[id]; },
			set: function () { throw "Can not change repo.";},
			enumerable : false,
			configurable : true
		});
		
		// End manifest 

		return res;
	}


	function _files2urls (obj) {
		var i, flist = [], file;
		if (isO(obj.files) && Object.size(obj.files)) {
			//blobify files
			for (i in obj.files) {
				file = obj.files[i];
				if (isO(file) && file.data && !file.url) {
					if (wURL) {
						try {
							f.base642blob(file.data,function(res){
								file.blob = res;
								file.url = wURL.createObjectURL(file.blob);
							},(file.content_type||file.mime));
							flist.push(i);
						} catch(e) {
							return "Invalid base64 data in files/"+i+".";
						}
					} else {
						//ie8-9 fallback
						file.url = 'data:'+(file.content_type||file.mime)+';base64,'+file.data;
						flist.push(i);
					}
				}
			}
		}
		return flist;
	}
	


	//########################################################
	// Storage of rules defined by cascading selectors
	// very similar to css. Leafs are processors
	// or processing rules for this type of node

	var MY = {


	//getter and setter functions for different types of nodes

	vals : {

	/**/	".my-form": function ($o, v) {
			//object is jQuery.my instance
				if ($o && $o.my ) {var d = $o.my(Da); return Object.equal(d,v)?d:$o.my(Da, v, true);}
				else return v||N;
			},

	/**/	".hasDatepicker":function ($o,v) {
			//object has jQ UI datepicker
				if(n(v)) $o.datepicker("setDate", ((v=="")?v:Date.create(v)));
				var date = $o.datepicker("getDate");
				return (date?date.format(d8):"");
			},

	/**/	".my-tags": function ($o,v) {
				//object is jQ tags control
				if (n(v)) {
					if (isS(v) || isN(v)) $o.tags(Da,[v+""]);
					else if (isA(v)) $o.tags(Da,v);
				}
				return $o.tags(Da);
			},

	/**/	".ui-draggable": function ($o,v) {
			//object is jQ UI draggable
				if (n(v) && isO(v)) {
					var c = {};
					if (!isNaN(v.left)) c.left = Number(v.left).ceil(2)+"px";
					if (!isNaN(v.top)) c.top = Number(v.top).ceil(2)+"px";
					if (c.left || c.top) $o.css(c);
				}
				var p = $o.position();
				return {
					left:((v&&!isNaN(v.left))?(v.left*1).ceil(2):p.left.ceil(2)),
					top:((v&&!isNaN(v.top))?(v.top*1).ceil(2):p.top.ceil(2))
				};
			},

	/**/	".my-form-list": function ($o,list) {
			//object is list of forms
				var i,old,mod,eq,ctr = 0,
					sP = "ui-sortable", sPlc= "."+sP+"-placeholder",
					od = $o.data("formlist")||{},
					gen = od.generator||{},
					itemSel = gen.selector||">.my-form",
					tmpl = gen.template||"<div></div>",
					tmplIsVar = /\{/.test(tmpl),
					hasher = gen.hash|| f.sdbmCode,
					ider = gen.id|| f.sdbmCode,
					extHasher = gen.ext,
					delay = gen.delay||50,
					sortable = $o.is("."+sP),
					sorting = !!$o.children(sPlc).size(),
					result=[], redraw = [],
					$n, $drag, now = Date.now();
				var $c = sortable?$o.find($o.sortable("option","items")):$o.find(itemSel);

				if (n(list) && isA(list)) {
					//return list passed if dragging taking place
					if (sorting) return list;
					// first we must estimate
					// if putting new data over old
					// changes anything
					old= []; $c.each(function () {
						var $x = $(this), xd = $x.data("my");
						if (xd) old.push(xd.data);
					});

					//fast compare
					eq=false;
					if (old.length===list.length) for (eq=true, i=0;i<old.length;i++) if (old[i]!==list[i]) eq=false;

					if (!eq || extHasher){
						// more comprehemsive compare, for example
						// applying [{a:1},{b:4}] over [{a:1,b:2},{a:3,b:4}]
						// must not force any recalc
						mod = $.extend(true, [], old, list);
						if (!Object.equal(old,mod) || mod.length!=list.length) {
							//we have new data, hash it
							var hash=[],  oid = [], xoid = {}, present={};

							redraw = [];

							// Build id <-> idx and hashes
							for (i=0;i<list.length;i++) {
								oid[i]=ider(list[i], i)+"";
								xoid[oid[i]]=i;
								hash[i] = (ider!==hasher? hasher(list[i], i):oid[i])+"";
							}
							//clean childs with no match to new data
							$c.each(function () {
								var $x = $(this),
									md = $x.data("formlist")||{},
									coid = md.oid;
								if (coid && xoid.hasOwnProperty(coid)) present[coid] = $(this);
								else {
									if ($x.is(".my-form")) $x.my("remove", true);
									else $x.remove();
								}
							});

							//iterate list
							for (i=0;i<list.length;i++) {
								if (present[oid[i]]) {
									$n = present[oid[i]].detach().appendTo($o);
									result.push($n.my("data"));

									// decide if we must redraw
									if (hash[i]!==($n.data("formlist")||{}).hash) redraw.push($n);

								} else {
									$n = $(tmplIsVar?tmpl.assign(list[i]):tmpl).appendTo($o);
									$n.data("formlist",{
										list:list[i],
										index:i,
										hash:hash[i],
										oid:oid[i]
									});

									//ToDo – allow it to be async
									$n.my(
										_manifest (gen.parent, gen.manifest, list[i], i, list, $o),
										list[i]
									).then(function($n){
										$n.on("change.my", _itemChange.debounce(delay/1.3));
									}.fill($n));
									result.push($n.my("data"));
								}
							}
							// redraw if any
							if (redraw.length && extHasher){
								for (i=0;i<redraw.length;i++) _redraw(redraw[i]);
								redraw = [];
							}
							return result;
						}
					}
					return old;

				} else if ($c.size()) {
					if ((now-gen.stamp>1.4*delay)
						|| now-gen.stamp > 100
						|| !gen.stashed
						|| (gen.stashed.length !== $c.size()-(sorting?1:0))
					) {
						
						if (sorting) $drag = $o.find('>.'+sP+'-helper');
						var ri=0;
						$c.each(function (idx, elt) {
							var $x = $(elt), xd, xf, chash, dirty = false;
							if (!sorting || !$x.hasClass(sP+'-helper')) {
								if (sorting && $x.hasClass(sP + '-placeholder')) $x = $drag;
								xd = $x.data("my");
								xf = $x.data("formlist");
								if (xd && xf) {
									result.push(xd.data);
									if (ri != xf.index) {
										xf.index = ri;
										dirty = !0;
									}
									if (extHasher) {
										chash = hasher(xd.data, ri)+"";
										if (chash !== xf.hash) {
											xf.hash = chash;
											dirty = !0;
										}
									}
									ri += 1;
									if (dirty) redraw.push($x);
								}
							}
						});
						for (i=0;i<redraw.length;i++) _redraw(redraw[i]);
						redraw=[];

						gen.stamp = now;
						gen.stashed = result;
					}
					else result = gen.stashed.slice(0);
					return result;
				}
				return list||[];

				function _itemChange () {
					var $this = $(this), df, i,
						dd=$this.data("my");
					if (dd) {
						df = $this.data("formlist");
						i = df.index;
						df.hash = hasher(dd.data, i)+"";
						if (ider!==hasher) df.oid = ider(dd.data, i)+"";
						else df.oid =df.hash;
					}
					$o.trigger("check.my");
				}

				function _redraw($form) {
					if ($form.data("my").locktill+delay/1.3<now) $form.my("redraw");
				}
			},

	/**/	".ui-sortable": function ($o, list) {
				//jQ UI sortable
				var a = [],
					sP = "ui-sortable",
					sPlaceholder= ">."+sP+"-placeholder",
					$c = $o.find($o.sortable("option","items")),
					$m;
				if (n(list) && isA(list)) {
					var w = {}, z={}, v = list.unique();
					//return list passed if some field has focus of dragging taking place
					if (
						$o.find("input:focus:eq(0),textarea:focus:eq(0)").size() ||
						$o.find(sPlaceholder).size()
					) return v;
					$c.each(function () {w[f.sdbmCode(f.extval($(this)))] = $(this);});
					for (var i=v.length-1; i>=0; i--) {
						var j = f.sdbmCode(v[i]);
						if (w[j]) {
							w[j].prependTo($o).show();z[j]=true;
							if (a.indexOf(v[i])==-1) a.push(v[i]);
						}
					}
					a=a.reverse();
					for (i in w) if (!z[i]) w[i].hide();
				} else {
					var $p = $o.find(sPlaceholder), $q = $o.eq(0);
					if ($p.size()!=0) {

						//if placeholder state changed saving new data
						if ($q.my()[sP] != $p.position().left+""+$p.position().top) {
							$c = $c.filter(":visible:not(:disabled, .ui-state-disabled, .ui-sortable-helper)");
							$m = $o.find($o.sortable("option","items")).filter(".ui-sortable-helper");
							$c.each(function () {
								var $x = $(this);
								if ($x.is(".ui-sortable-placeholder")) {a.push(f.extval($m));}
								else a.push(f.extval($x));
							});
							//caching placeholder state and data retrieved
							$q.my()[sP] = $p.position().left+""+$p.position().top;
							$q.my()[sP+"1"] = a;
						} else a = $q.my()[sP+"1"];
						if (a==N) $c.each(function () {a.push(f.extval($(this)));});
					} else {
						$c = $o.find($o.sortable("option","items"))
							.filter(":visible:not(:disabled, .ui-state-disabled)");
						$c.each(function () {a.push(f.extval($(this)));});
					}
				}
				return a;
			},

	/**/	"input[type=date]":function ($o,v) {
				//object is date input
				if(n(v)) {
					if (v!="") d = Date.create(v).format(d8); else d = "";
					if (isS(d) && !/Invalid/.test(d)) $o.val(d);
					return d;
				}
				var d = $o.val();
				return (d!=""?Date.create(d).format(d8):"");
			},

	/**/	"input[type=time]":function ($o,v) {
				//object is time input
				if(n(v)) {
					if (v!="") d = Date.create(v).format(h24); else d = "";
					if (isS(d) && !/Invalid/.test(d)) $o.val(d);
					return d;
				}
				var d = $o.val();
				return (d!=""?Date.create(d).format(h24):"");
			},


	/**/	"input":{
				"[type='text'],[type='number'],[type='search'],[type='hidden'],[type='password'],[type='button'],[type='range'],:not([type])":{
				//nearly all main input types and button

					".ui-slider-input": function ($o,v) {
					//input with jQ UI slider() applied
						if (n(v)) $o.val(v).slider("refresh");
					},

					".tagstrip input.value": function ($o,v) {
					//input of tagstrip() applied
						if (n(v)) $o.val(v).trigger("update");
					},

					"div.select2-container+input": function ($o, v) {
					//select2
						if (n(v) && JSON.stringify(v)!== JSON.stringify($o.select2("val")))
							$o.select2("val", (isA(v)?v:[v]));
						return $o.select2("val");
					},

					"": function ($o,v) {if(n(v)) $o.val(v+"");}
				},

				":radio":function ($o,v) {
				//radio buttons
					var pos = -1;
					if (n(v)) {
						$o.each(function (ind) {
							var val = $(this).val();
							if ((v+"")===(val+"")) pos=ind;
						});
						var jqcheck = $o.eq(0).checkboxradio;
						if (jqcheck) $o.each(function (ind){
								var $x = $(this);
								if (pos!=ind && $x.is(":checked"))
									$x.prop("checked",false).checkboxradio("refresh");
							});
						if (pos>-1) {
							var $x = $o.eq(pos);
							if (!$x.is(":checked")) {
								$x.prop("checked",true);
								if (jqcheck) $x.checkboxradio("refresh");
							}
						} else if (!jqcheck) $o.each(function () { $(this).prop("checked",false); });
					}
					if (pos==-1) for (var ind=0; ind<$o.size(); ind++) {
						if ($o.eq(ind).is(":checked")) pos=ind;
					}
					return pos!=-1?$o.eq(pos).val():"";
				},

				":checkbox": function ($o, v0) {
				//checkbox
					var pos = -1, v = v0, a = [];
					if (n(v)) {
						if (!isA(v)) v = [v0];
						var jqcheck = !!$o.eq(0).checkboxradio;
						$o.each(function (ind) {
							var $x = $(this), val = $x.val(), on = $x.is(":checked");
							if (v.indexOf(val)!=-1) {
								a.push(val);
								if (!on) $x.prop("checked", true);
							} else if (on) $x.prop("checked", false);
							if (jqcheck) $x.checkboxradio("refresh");
						});
					} else {
						$o.each(function () {
							var $x = $(this);
							if ($x.is(":checked")) a.push($x.val());
						});
					}
					return a;
				}
			},

	/**/	"select": {
				".ui-slider-switch": function ($o,v) {
				//on-off in jQ Mobile
					if (n(v)) {
						$o.val(v+"");
						$o.slider("refresh");
					}
				},
				"div.select2-container+select":{
					"[multiple]": function ($o, v) {
						if (n(v)) $o.select2("val", (isA(v)?v:[v]));
						return $o.select2("val");
					},
					"":function ($o, v) {
						if (n(v)) $o.select2("val", v+"");
						return $o.select2("val");
					}
				},
				"[multiple]": function ($o,v) {
					if (n(v)) {
						$o.val(v,[]);
						if ($o.selectmenu && $o.data("uiSelectmenu")) $o.selectmenu("refresh",true);
						//the only way to check if we have jQ UI selectmenu() attached
					}
				},
				"": function ($o,v) {
					if (n(v)) {
						$o.val(v+"");
						if ($o.selectmenu) {
						//now ditinguish between jQ selectmenu plugin and jQ Mobile
							if ($o.data("uiSelectmenu")) $o.selectmenu("refresh",true);
							else $o.find("option").each(function (i){
								var $x = $(this);
								if (f.extval($x) == v) $o.selectmenu("value",i);
							});
			}}}},

	/**/	"textarea": {
				".my-cleditor":function ($o,v) {
					if(n(v)) $o.val(v).cleditor()[0].updateFrame();
					return $o.val();
				},
				"div.redactor_box textarea,.redactor": function ($o,v) {
                    var r9 = $o.hasClass('my-redactor-9');
                    if(n(v)) {
                        if(r9) $o.redactor('set', v);
                        else $o.setCode(v, false);
                        return v;
                    }
                    return r9 ? $o.redactor('get') : $o.getCode();
				},
				".my-codemirror":function ($o,v){
					if (n(v)) {
						$o[0].nextSibling.CodeMirror.setValue(v);
						return v;
					}
					return $o[0].nextSibling.CodeMirror.getValue();
				},
				"":function ($o,v) {if(n(v)) $o.val(v+"");}
			},

	/**/	"fieldset,form,section,aside,.my-container": function ($o, v) {
			//object is class-manageable container,
			//value is an array of css rules
				var clist = Array.prototype.slice.call($o[0],0).sort(),
					list = v;
				if (n(v)) {
					if (isS(v)) list = v.split(/[,\s]+/).compact(true);
					if (isA(list)) {
						list.sort();
						if (list.join(" ")!==clist.join(" ")) {
							$o.atrr("css", list.join(" "));
							clist = list;
						}
					}
				}
				return clist;
			},

	/**/	"div,span,a,p,li,td,th,h1,h2,h3,h4,h5,h6":{
				".ui-slider":function ($o, v){
					if(n(v)) $o.slider("option",$o.slider("option","values")?"values":"value", f.clone(v));
					return f.clone($o.slider("option","values")||$o.slider("option","value")||0);
				},
				".ui-buttonset": function ($o,v) {
				//jQ UI buttonset ()
					if (!n(v)) {
						var jor = $o.find(":radio:checked");
						if (jor.size() && jor.button) return jor.val()||jor.button("option", "label") ;
					} else if (v!="") {
						var jon = N;
						$o.find(":radio").each(function () {
							jon=( ($(this).val()||$(this).button("option", "label"))==v?$(this):jon );
						});
						if (jon) {
							jon.attr("checked",true);
							$o.buttonset("refresh");
							return v;
						}
					}
					$o.find(":radio:checked").attr("checked",false);
					$o.buttonset("refresh");
					return "";
				},
				".ace_editor":function ($o,v) {
					if(n(v)) ace.edit($o[0]).setValue(v);
					return ace.edit($o[0]).getValue(v);
				},
				"": function ($o,v) {
					if(n(v)) $o.html(v);
					return $o.html();
				}
			},
	/**/	"pre,code":function ($o,v) {
				if(n(v)) $o.html(v);
				return $o.html();
			},
	/**/	"img":function ($o,v) {
				if (n(v)) $o.attr("src",v);
				return $o.attr("src")||"";
			},
	/**/	"":function ($o,v) {
				if (n(v)) $o.html(v);
				return $o.html()||$o.text()||String($o.val())||"";
			}
		},


	//messages
	//########################################################

		msg:{
			"":{en:"Invalid input", ru:(TMP="Неверное значение")},

			formError:{en:"Form error",ru:"Ошибка формы"},
			initFailed:{
				en:'<p class="my-error">Form init failed</p>',
				ru:'<p class="my-error">Ошибка инициализации формы</p>'
			},

			badInput:{en:"Invalid input", ru:TMP},
			patternMismatch:{en:"Pattern mismatch", ru:"Не соответствует шаблону"},
			rangeOverflow:{en:"Over maximum", ru:"Больше максимума"},
			rangeUnderflow:{en:"Under minimum", ru:"Меньше минимума"},
			stepMismatch:{en:"Step mismatch", ru:"Не кратно шагу"},
			tooLong:{en:"Too long", ru:"Слишком длинно"},
			typeMismatch:{en:"Invalid type", ru:"Неверный тип"},
			valueMissing:{en:"Required", ru:"Обязательное поле"}
		},


	//different controls' events to watch for
	//########################################################

		events: {
			".hasDatepicker":"change.my check.my",
			".my-form,.my-tags":"change.my check.my",
			".ui-slider":"slide.my check.my",
			"div.redactor_box textarea":"redactor.my check.my",
			".my-codemirror":"codemirror.my check.my",
			".ace_editor":"ace.my check.my",
			".my-form-list":"sortupdate.my check.my",
			".ui-sortable":"sortchange.my sortupdate.my check.my",
			".ui-draggable":"drag.my dragstop.my check.my",
			"a, .pseudolink, input[type=button], button": "click.my",
			"img, :radio, :checkbox": "click.my check.my",
			"div.select2-container+input,div.select2-container+select":"change.my check.my input.my",
			".ui-buttonset,input, select, textarea":
				"blur.my change.my check.my"+(navigator.appName.to(5)==="Micro"?" keyup.my":" input.my"),
			"":"check.my"
		},

	//functions retrieving container for different controls
	//########################################################

		containers: {
			"*[data-role='fieldcontain'] *":{ //jQuery Mobile
				"input,textarea,select,button,:radio": function ($o) {
					return $o.parents('[data-role="fieldcontain"]').eq(0);
				}
			},
			".tagstrip *.value": function ($o){ //$.tagstrip()
				return $o.parents('.tagstrip').eq(0);
			},
			"div.redactor_box textarea":function ($o){
				return $o.parents('div.redactor_box').eq(0).parent();
			},
			".my-tags,.hasDatepicker,.ui-widget,input,textarea,select,button" :{
				".my-cleditor": function ($o) {
					return $o.parents('div.cleditorMain').eq(0).parent();
				},
				"": function ($o) {
					var p = $o[0].parentNode, t = p.nodeName;
					if (/^(div|span|a|p|form|fieldset|li|ul|td|th|h\d)$/i.test(t)) return $(p);
					else return $o.parents('div,span,a,p,form,fieldset,li,ul,td,th,h1,h2,h3,h4,h5,h6').eq(0);
				}
			},
			"": function ($o) {return $o;}

		},

	//disablers and enablers
	//########################################################

		offon: { //if x==true disables control else enables
			".ace_editor": function (x,$o) {ace.edit($o[0]).setReadOnly(x);},
			".ui-selectable": function (x,$o) {f.jquix($o,"selectable",x);},
			".ui-slider": function (x,$o) {f.jquix($o,"slider",x);},
			".ui-draggable": function (x,$o) {f.jquix($o,"draggable",x);},
			".ui-buttonset": function (x,$o) {f.jquix($o,"buttonset",x);},
			".hasDatepicker": function (x,$o) {f.jquix($o,"datepicker",x);},
			".my-form":function (x,$o){$o.my("disabled", !!x);},
			"div.select2-container+input,div.select2-container+select":
				function (x,$o) {f.jquix($o,"select2",x);},
			".my-cleditor": function (x,$o) { $o.cleditor()[0].disable(!!x);},
			"": function (x, $o) {$o.attr("disabled", !!x);}
		},

	//destructors
	//########################################################
		destroy:{
			".hasDatepicker":function ($o){$o.datepicker("destroy");},
			".ui-slider":function ($o){$o.slider("destroy");},
			".ui-sortable":{
				".my-form-list":function ($o){
					$o.find(">.my-form").each(function () {
						$(this).my("remove");
					});
                    $o.removeClass("my-form-list");
					$o.sortable("destroy");
				},
				"":function ($o){$o.sortable("destroy");}
			},
			".my-form-list":function ($o){
				$o.find(">.my-form").each(function () {
					$(this).my("remove");
				});

			},
			".ui-draggable":function ($o){$o.draggable("destroy");},
			".my-redactor-8":function ($o){
                $o.destroyEditor();
                $o.removeClass("my-redactor-8");
            },
			"div.select2-container+input,div.select2-container+select":
				function ($o){$o.select2('destroy');},
			".my-form": function ($o) {$o.my("remove");},
            "textarea": {
                ".my-codemirror": function ($o) {
                    $o[0].nextSibling.CodeMirror.toTextArea();
                    $o.removeClass("my-codemirror")
                }
            }
		}
	};

	//default values for .params section of manifest
	//########################################################

	MY.params = {
		container:function ($o) {									// container getter
			return _traverse($o, MY.containers)($o);
		},
		change:N,
		recalcDepth:2,												// depth of dependencies resolver tree
		delay:0,													// default delay of bind invocation
		strict:false,												// if true form assumed unjsonned
		restyle:-1,													// delay of <style> repaint on screen resize, -1 for no repaint
		locale:(TMP=(navigator.language||navigator.userLanguage||"en").substr(0,2)),
		messages:Object.map(MY.msg, function (k,v){return v[TMP]||v.en;}),
		errorTip:".my-error-tip",									// $ selector of err tip container
		errorCss:"my-error",										// class applied on container on err
		animate:0,													// err tips animation duration
		effect: function ($e, onoff, duration) { 					// err tips animation effect
			if (onoff) return $e.fadeIn(duration); $e.fadeOut(duration);
		},
		remember:0, 												// undo steps to remember
		silent:false,
		history:{}, 												// form undo history
		historyDelay:100, 											// delay in ms between  calls of history(),
		loader: function (manifestId, parentId) {					// default loader
			var pi = $.Deferred(), m = _cache(manifestId+"");
			if (m) pi.resolve(m);
			else pi.reject(null);
			return pi.promise();
		},
		ajaxTimeout:10000
	};

	var f = _getHelpersLib();

	
	
	
	//########## SYSTEM FUNCTIONS ##########
	
	//=======================================
	// Pub/sub broadcaster
	 function _broadcast($root, msg) {
		var supress = false, fc, next;
		if (isO(msg) && msg.channel && msg.message) {
			$root.find(".my-listen-"+f.sdbmCode(msg.channel))
			.each(function(){	
				var $c = $(this), 
					my = $c.data("my"),
					fn, v=undefined;
				if (my && my.ui.listen && isF(my.ui.listen[msg.channel]) ) {
					fn = my.ui.listen[msg.channel];
					try{ 
						v = fn.call( my.manifest || my.root.my().manifest,  my.data, msg.message, $c); 
					} catch(e) {
						f.con("Listener failed: "+e.message, e.stack)
					}
					if (v!==undefined) {
						if (v===null) $c.trigger("check");
						else if (v) $c.trigger("recalc");
					}
				}	
			});
		}
	}


	//=======================================
	// Require
	 
	function _require(man ,params0){
		// Checks and loads required libs,
		// returns promise resolved with manifest
		// or rejected with err list.
		var i, j, k, pi = $.Deferred(),
			chunks = [], checks = {}, err=[], r, line,
			params = $E(true, {
				ajaxTimeout:10000,
				loader: MY.params.loader
			}, params0||{}),
			row, subrow, chunk,
			Row = {ref:null, ajax:{type:"GET", async:true, timeout: params.ajaxTimeout}};

		if (!isO(man)) pi.reject(["Invalid manifest."]);
		else if (!isA(man.require)) pi.resolve(man);
		else {
			r = man.require;
			for (i=0;i< r.length;i++) {
				line = r[i];
				if (isS(line)) checks[line] = _exist(line);
				else if (isO(line)) {
					chunk = [];
					for (j in line) {
						row=null;
						if (line[j]===true) {
							// global, we can’t load it, just check presence
							checks[j] = _exist(j);
						}
						else if (isS(line[j]) || isO(line[j])) {
							row = _row(line[j], j);
						} else if (isA(line[j])) {
							row = [];
							// array of requests
							for (k=0;k<line[j].length;k++) {
								if (isS(line[j][k]) || isO(line[j][k])) {
									subrow = _row(line[j][k], j);
									if (subrow) row.push(subrow);
								}
							}
							if (!row.length) row = null;
						}
						if (row && !(checks[j] = _exist(j))) chunk.add(row);
					}
					if (chunk.length) chunks.push(chunk);
				}
			}

			// we have chunks list and check list
			// iterate chunks
			var pos = -1;
			_next();
		}

		return pi.promise();

		//---------------------------------

		function _row (line, j) {
			var row;
			if (isS(line)) {
				// url?
				if (/[\/]/.test(line)) {
					row = $E(true,{}, Row, {ref:j, ajax:{url:line}});
					if (rthis.test(j)) row.ajax.dataType = "json";
				}
				// manifest ref?
				else if (line.length){
					row = $E(true,{}, Row,{ref:j, ajax: line});
				}
			}
			else if (isO(line)) {
				// full params set for ajax request
				row = $E(true,{}, Row, {ref:j, ajax:$.extend(
					true,
					{},
					Object.select( 
						line, 
						[
						 "accepts","async","cache","data","dataType","xhrFields", 
						 "password","timeout","type","url","username","headers"
						]
					)
				)});
				if (!row.ajax.url) row = null;
			}
			return row;
		}

		//---------------------------------

		function _fail(){
			pi.reject(err);
		}

		//---------------------------------

		function _next(){
			pos +=1;
			var chunk = chunks[pos];
			if (!chunk) {
				// we are done, recheck
				var list = _present(checks),
					errs = Object.keys(Object.findAll(list, function(i, e) {return !e}));
				if (errs.length) err.push(
					(errs.length===1?'Key '+errs[0]+' is':('Keys '+errs.join(", ")+' are'))
					+' not present after all.'
				);
				if (err.length) _fail();
				else pi.resolve(man);
			}
			else _chunk(chunk).then(_next).fail(_fail);
		}

		//---------------------------------

		function _chunk (chunk) {
			var row, i, stop = false,
				pi = $.Deferred(),
				ctr = chunk.length,
				loader,script;
			for (i=0;i<ctr;i++) {
				row = chunk[i];
				loader = isS(row.ajax)?params.loader:$.ajax,
				script = isO(row.ajax) && /\.js$/i.test(row.ajax.url);
				loader(row.ajax)
				.then(function(data, row){
					if (rthis.test(row.ref)) {
						if (data != null) {
							$E(true, man, f.unmask(data, row.ref.from(5)));
						} else{
							stop = true;
							err.push('Invalid data for ‘'+row.ref+'’ resource.');
						}
					}
					countdown();
				}.fill(undefined, row)/*.debounce(script?100:0)*/)
				.fail(function(e, row){
					err.push('Failed to load ‘'+row.ref+'’ resource.');
					stop = true;
					countdown();
				}.fill(undefined, row));
			}

			return pi.promise();

			function countdown (){
				ctr-=1;
				if (stop) pi.reject();
				else if (ctr<0.5) pi.resolve();
			}
		}

		//---------------------------------

		function _exist(ref){
			// check if ref exists in window or manifest
			var res = false;
			if (rthis.test(ref)) {
				if (_getref(man, ref.from(5)) != null) res=true;
			} else if (_getref(window, ref) != null) res=true;
			return res;
		}

		//---------------------------------

		function _present (list) {
			for (var i in list) if (list[i]===false) list[i] = _exist(i);
			return list;
		}
		
	} // -- end _require ---


	//=======================================

	function _field ($o, v) {
	//gets or sets the value of $o control
	//selects appropriate function for setting-retrieving
	//and attaches it to $o.data("myval");
		var fn = $o.data("myval"), r, fval;
		if (!fn) {
		// look for appropriate function and cache it
			fval = _traverse ($o, MY.vals);
			if (isF(fval)) {
				r = fval($o, N);
				if (r===undefined) {
				//if function returns undefined we use .val() by default
					$o.data("myval", (function ($o, v) {
						if (N != v) fval($o, v);
						return $o.val();
					}).fill($o, undefined));
				} else $o.data("myval", fval.fill($o, undefined));
			}
			fn = $o.data("myval");
		}
		if (isF(fn)) {
			r = fn();
			if ((r!==v && (false==v || false==r)) || r != v || isO(v)) r = fn(v);
			return r;
		} else return N;
	}


	//=======================================

	function _traverse ($o, rules) {
	//traverses tree of rules to find
	//first sprig with selector matching $o.
	//returns match or null
		var fval = N, flevel=0, fselector="";
		go ($o,rules,1);
		return fval;

		// - - - - - - - - - - - - - - - - - - - - - - -

		function go ($o, os, level) {
			for (var i in os) if (i!="" && $o.is(i)) {
				fselector = fselector+ (fselector?" ### ":"") + i;
				var oi=os[i], otype = T(oi);
				if ( !(/^(nul|un|ob)/).test(otype) && level>flevel) {
					fval=oi; flevel = level; return;
				} else if (otype==Ob) go ($o, oi, level+1); //recursion down
			}
			if (N != os[""] && typeof os[""]!=Ob && level>flevel)  {
				fval=os[""];
				flevel = level;
			}
		}
	}


	//=======================================

	function _bind (data, val, uiNode, $formNode) {
	//sets or retrieves data using bind function
		var i, path=[], ptr, preptr, that,
			bind = uiNode.bind,
			bt = T(bind);
		if (bt == Fu) {
			return bind.call(_form($formNode).manifest, data, val, $formNode);
		}
		if (bt === St || bt === Ar) {
			if (bt === St && !/\./.test(bind)) {
				//index is flat
				if (val != N) data[bind] = val;
				else if (data[bind]===undefined) data[bind] = N;
				return data[bind];
			}
			//index is composite, we need to traverse tree
			//and create some branches if needed
			if (bt === St) path = bind.split(".").each(function (a,i){this[i]=a+"";});
			if (bt === Ar) path = bind.slice(0).each(function (a,i){this[i]=a+"";});

			if (path[0]==="this") {
				ptr = _form($formNode).manifest;
				path.shift();
			} else ptr = data;

			for (i=0;i<path.length;i++) {
				if (i===path.length-1) {
					//we'r in the hole
					if (val!=N) ptr[path[i]] = val;
					else if (ptr[path[i]]===undefined) ptr[path[i]] = N;
					return ptr[path[i]];
				}
				if (i==0) {
					preptr= ptr;
					ptr = ptr[path[0]];
				} else {
					preptr = preptr[path[i-1]];
					ptr = ptr[path[i]];
				}
				if (ptr===undefined) ptr = preptr[path[i]] = {};
			}
		}
		return N;
	}


	//=======================================

	function _validate (data,val, uiNode, $formNode) {
		//checks if val fails to meet uiNode.check condition
		var pat = uiNode.check, i, v;
		if (pat != N) {
			var msg = _form($formNode).params.messages,
				err = uiNode.error,
				err0 = err||msg.patternMismatch||msg[""]||"Error";

			if (
					$formNode.size() &&
					Object.prototype.hasOwnProperty.call($formNode[0], "validity") &&
					!$formNode[0].validity.valid
			) {
				var syserr=$formNode[0].validationMessage+"";
				if (syserr!=="") return syserr.substr(0,1).toUpperCase()+syserr.substr(1);
				else {
					v = $formNode[0].validity;
					for (i in v) {
						if (syserr==="" && i!="valid" && isB(v[i]) && v[i] && msg[i]) syserr=msg[i];
					}
					return syserr||err;
				}
			}

			switch(T(pat).to(1)){
				case "f":	/*return pat.call(_form($formNode).manifest, data, val, $formNode);*/{
                    ret = pat.call(_form($formNode).manifest, data, val, $formNode);
                    return (ret === null || ret === undefined) ? "" : ret;
                }
				case "r":	return ( (pat.test(String(val))) ? "":err0 );
				case "a":	return ( (pat.indexOf(val)>-1)?"":err0);
				case "s":	return (val==pat?"":err0);
				case "o":	return pat[val]?"":err0;
				case "b":	{
					if ($formNode.is(".my-form-list,.ui-sortable")) {
						var sel = $formNode.data("listSrc")||$formNode.data("my").listSrc||">*", ret={};
						$formNode
							.find(sel)
							.filter("*:not(.ui-sortable-placeholder)")
							.each(function (idx){
								var $e = $(this);
								if ($e.data("my") && !$e.my("valid")) ret[idx]=$e.my("errors");
							});
						return ret;
					} else if ($formNode.hasClass("my-form")){
						return !pat?"":$formNode.my("valid")?"":$formNode.my("errors");
					}
					return "";
				}
			}
			return msg.formError||"Error";
		}
		return "";
	}


	//=======================================

	function _form ($formNode) {
	//get control's root.my()
		var $my = $formNode.my();
		if (!$my) return null;
		return $my.root?$my.root.my():$my;
	}


	//=======================================

	function _css (onOff, $we, css0) {
	//applies-discards conditional formatting or enables-disables field
		var css = css0.compact(),
			r = css.replace(/:disabled/g,''),
			disable = (r!==css),
			toSelf = (r.to(5)==="self:");
		if (toSelf) {
			r = r.replace(/^self:/g,'')
		}
		$we.each(function () {
			var $d = $(this),
				d = $d.my(),
				$o = ((!toSelf && d)?d.container:$d);

			$o.toggleClass(r, !!onOff);

			if (disable && d!==undefined && !!onOff != !!d.disabled) {
				//we have :disabled
				$d.my().disabled = !!onOff;
				if (!d._disable) $d.my()._disable = _traverse($we, MY.offon).fill(undefined, $we);
				d._disable(!!onOff);
			}
		});
		return $we;
	}


	//=======================================

	function _update ($o, value, depth) {
	//validates and updates field and all dependent fields,
	//applies conditional formatting
		var $box, d, oui, p, val, css, oc,
			selector, $root, $we, ui,
			isForm = false, isList = false,
			$this = $o,
			xdata = $this.my(),
			err="";

		if (xdata) {
			selector = xdata.selector;
			$root = xdata.root;
			if ($root.hasClass("my-form-init")) return {};
			$we = $root.find(selector);
			ui = $root.my().ui;
			isForm = $o.hasClass("my-form");
			isList = $o.hasClass("my-form-list");
			if (isForm){
				$box = $o; d = xdata.ddata; oui = xdata.dui; p =  xdata.dparams;
			}
			else {
				$box = xdata.container; d = xdata.data; oui = xdata.ui; p =  xdata.params;
			}
			//exec bind if any
			if (oui.bind != N) {
				if (n(value)) val = value;
				else val = _field($we,_bind(d,N,oui,$we));

				//validating and storing if correct
				//applying or removing error styles
				if (N != oui.check) {
					err="Unknown error";
					try { err = _validate(d, val, oui, $we); }
					catch (e) { f.con ("Error "+ e.message+" validating "+selector, $root , e.stack); }
				}

				var ec = p.errorCss;
				var jqec = "ui-state-error";

				try {
					if (N != value) val = _field($we, _bind(d, value, oui, $we));
				}
				catch (e) { err=p.messages.formError || "Error"; }

				if (err==="") {
					if (!isForm) xdata.errors[selector]= "";
					else xdata.derrors[selector]= "";
					$box.removeClass(ec);
					if ($box.attr("title")) $box.attr("title","");
					if (!isForm && !isList) p.effect($box.find(p.errorTip), false ,(p.animate/2));
					$this.removeClass(jqec); $this.find(".ui-widget").removeClass(jqec);
				} else {
					if (isForm)  xdata.derrors[selector]= err;
					else if (isList) xdata.errors[selector]= err;
					else {
						$box.addClass(ec);
						xdata.errors[selector]= err;
						var $tip=$box.find(p.errorTip).eq(0);
						if ($tip.size()){
							p.effect($tip.addClass(ec).html(err), true, p.animate);
						} else $box.attr("title",(err || "").stripTags());
					}

					if ($this.is(".hasDatepicker")) {
						if ($this.is("input")) $this.addClass(jqec);
						else $this.find(".ui-widget").addClass(jqec);
					}
					if ($this.is(".ui-slider")) $this.addClass(jqec);
				}
			}
			//applying conditional formatting if any
			var cssval = (value==N?val:value);
			if (oui.css) {
				for (css in oui.css) {
					oc = oui.css[css];
					if (isR(oc)) _css (oc.test(cssval), $we, css);
					else if (isF(oc)) _css (oc.call($root.my().manifest, d,cssval,$we), $we, css);
				}
			}

			//recalculating dependent fields
			var i, list = oui.recalc, dest = [], once = {}, item;

			if (depth && oui.recalc &&  $root.my()) {
				ui = $root.my().ui;
				for (i=0; i<list.length; i++) {
					if (list[i] && isS(list[i]) && (item = list[i].compact()) && ui[item]) {
						if (ui[item].recalc) {
							if (dest.indexOf(item) === -1) dest.push(item);
						} else once[item]=true;
					}
				}
				for (i=0; i<dest.length; i++)
					once = $E(true, once, _update($root.find(dest[i]), N, depth-1));

				if (value!==N) {
					// here is a trick -- we may call _update ($o, undefined, 1)
					// and force update if we want only retrieve without recalc
					for (i in once) if (once[i]===true && i!=selector) {
						if (ui[i].delay && !ui[i].recalc) ui[i]._update($root.find(i), N, depth-1);
						else _update($root.find(i), N, depth-1);
					}
					return {};
				}
			}
			return once||{};
		}
	}


	//=======================================

	function _history (x, params, remove, silent) {
	// push or retrieves current state to history,

		var p = params, h, i, k, l, n, step, time, old, newh;
		if (
			!isO (p) ||
			isNaN (l=p.remember) ||
			!isO (h=p.history)
		) return N;

		if (isO(x) && l) {
			step = Object.clone(x, true);
			time = Date.now();
			k = Object.keys(h).sort();
			if (k.length && (time-k.last() < p.historyDelay || Object.equal(h[k.last()], step))) return N;
			p.history[time] = step;
			k.push(time);
			if (k.length >= l*2) {
				newh = {};
				for (i=l; i<l*2; i++) newh[k[i]] = h[k[i]];
				params.history = newh;
			}
			if (!silent) p.form.trigger(Ch);
			return p.history[k.last()];
		}
		else if (!isNaN(x) || x===N) {
			n = parseInt(x) || 0;
			if (n<0) return N;
			k = Object.keys(h).sort();
			if (n>=k.length) n = k.length-1;
			old = Object.clone(p.history[k[k.length-n-1]], true);
			if (remove) {
				newh = {};
				for (i=0; i<k.length-n-1; i++) newh[k[i]] = h[k[i]];
				params.history = newh;
			}
			if (!silent) p.form.trigger(Ch);
			return old;
		}
		else if (!silent) p.form.trigger(Ch);
		return N;
	}


	//=======================================

	function _build ($o, $root, uiNode, selector) {
	//initializes control
		var rd = $root.my(),
			p = (rd || {}).params,
			ui=uiNode,
			pi = null,
			tracker,
			v, ctr=0,
			subform,
			man = rd.manifest,
			delay;

		if (!rd) {
			f.con ("Failed to find $root building "+selector+" selector.");
			return null;
		}

		delay = uiNode.delay;

		if ($o.size()) {
			//first exec init
			// init if we have one
			if (ui.init!=N) tracker = _prepare(man, ui.init, $o, rd);

			if (isP(tracker))  {
				//we ve got  async init
				ctr+=1;
				pi = $.Deferred();
				tracker.then(_subform, function (msg, obj){
					_fail("Init of "+selector+" failed: "+msg,obj);
				});
			} else _subform();
		} else f.con ("Not found "+selector+" selector.",$root);

		return pi;


		// - - - - - - - - - - - - - - - - - - - - - - -

		function _subform (){
			var child=null, childman = ui.manifest;
			// if we have manifest, retrieve it
			if (isF(childman) || (isO(childman) && isO(childman.ui))) subform = childman;
			else if (isS(childman)) {
				// static bind if manifest is string ref,
				// not dynamic to speed up long list renders
				subform=_manifest (man, childman.replace(rthis,''));
			}

			// ...and apply
			if (subform && isS(ui.bind)) {
				//decrypt bind link and check if we have one in .data
				var linked = _getref(rthis.test(ui.bind)?man:rd.data,ui.bind.replace(rthis,''));
				if (pi===null) pi = $.Deferred();
				if (isA(linked) || ui.list){

					// we have list
					$o.addClass("my-form-list");

					//generate system fields
					var ltmpl="", lsel =">*";
					if (/^<.+>$/.test(ui.list)) ltmpl=ui.list;
					else lsel = ui.list||lsel;
					if (!ltmpl) {
						var $t0 = $o.find(lsel);
						ltmpl='<div></div>';
						if ($t0.size()) {
							ltmpl = $(ltmpl).append($t0.eq(0).clone(true)).html();
							$t0.eq(0).remove();
						}
					}

					//mount data
					if (!$o.data("formlist")) $o.data("formlist",{});
					$o.data("formlist").generator={
						manifest:subform,
						delay:(ui.delay||p.delay||10)/1.3,
						template:ltmpl,
						selector:lsel,
						parent:man,
						bind:ui.bind,
						hash:isF(ui.hash)?ui.hash.bind(man):_snapshooter(ui.hash),
						id: isF(ui.id)?ui.id.bind(man):_snapshooter(ui.id),
						ext:!!(ui.id || ui.hash),
						stamp:0
					};

					//mount insert
					$o.on("insert.my", function (evt, obj){
						evt.stopPropagation();
						var p = {what:undefined, where:0};
						if (null==obj) p.where=1e6;
						else if (isO(obj)) Object.merge(p,obj);
						else if (isS(obj) || isN(obj)) p.where = obj;
						$(evt.target).my("insert",p.where, p.what);
					});

					//mount remove
					$o.on("remove.my", function (evt){
						evt.stopPropagation();
						$(evt.target).my("remove");
					});

				} else {
					try {
						child = $o.my(
							_manifest (man, subform),
							isO(linked)?linked:undefined
						);
					}
					catch (e) {_fail("$.my subform init of " +selector+" failed: "+e.message, e.stack);}
				}
			}
			if (isP(child)) {
				//we've got promised subform init
				child.then(countdown, function (msg, obj){
					_fail("Init of subform "+selector+" failed with error: "+msg,obj);
				});
			} else countdown();
		}


		// - - - - - - - - - - - - - - - - - - - - - - -

		function _fail (msg, obj){
			f.con(msg, obj);
			if (pi) pi.reject(msg, obj);
		}

		// - - - - - - - - - - - - - - - - - - - - - - -

		function _snapshooter (src) {
			var t = T(src).to(3);
			return !src?null:
			t==="str"?_getref.fill(undefined, src):
			t==="arr"? f.mask.fill(undefined, src):
			null;
		}

		// - - - - - - - - - - - - - - - - - - - - - - -

		function countdown () {
			//start applying monitors to controls
			//right before this moment all controls are irresponsive
			$o.each(function () {
				var $this = $(this),
					events,
					cm, isControl = false,
					ns = $this[0].nextSibling;

				//codemirror fix
				cm = ( ns && ns.CodeMirror)?ns.CodeMirror:null;
				if (cm) $this.addClass("my-codemirror");

				//get events
				events = ui.events||_traverse($this, MY.events);

				if (!$this.is(".my-form")) {
					$this.data("my",{
						events:events,
						selector:selector,
						initial:v,
						previous:v,
						root:$root,
						container:p.container($this),
						id:rd.id,
						ui:ui,
						data:rd.data,
						params:p,
						errors:rd.errors
					});
					uiNode._update = ui.delay?_update.debounce(ui.delay):N;
					isControl = true;
				} else {
					$E($this.data("my"),{
						dui:ui,
						root:$root,
						selector:selector,
						dparams:p,
						devents:events,
						ddata:rd.data,
						container:p.container($this),
						derrors:rd.errors
					});

				}

				// Fixes for different composite controls
				if (isControl) {

					//special cleditor fix
					//thanks ima007@stackoverflow.com for concept
					if ($this.cleditor && $this.parent().is(".cleditorMain")) {
						var cledit = $this.cleditor()[0];
						if (cledit && cledit.$frame && cledit.$frame[0]) {
							//mark as cleditor
							$this.addClass("my-cleditor");
							$E($this.data("my"), {container: p.container($this)});
							var cChange = function (v) {
								$this.val(v).trigger(Ch);
							};
							var cleditFrame, r = Number.random(1e5, 1e6 - 1);
							//aux event handlers for cleditor instance
							$(cledit.$frame[0]).attr("id", "cleditCool" + r);
							if (!document.frames)
								cleditFrame = $("#cleditCool" + r)[0].contentWindow.document;
							else cleditFrame = document.frames["cleditCool" + r].document;
							var $ibody = $(cleditFrame).find("body");
							$(cleditFrame).bind('keyup.my', function () {
								cChange($(this).find("body").html());
							});
							$this.parent()
								.find("div.cleditorToolbar")
								.bind("click.my mouseup.my", function () {
									cChange($ibody.html());
								});
							$("body").on("click", "div.cleditorPopup", function () {
								cChange($ibody.html());
							});
						}
					}

					//redactor fix
					else if ($this.is("div.redactor_box textarea")) {
						//$this.getEditor()
						// .bind("input keyup blur",(function ($o){$o.trigger("redactor");})
						// .fill($this));
						var editor, version = 'my-redactor-9';
						try {
							editor = $this.getEditor();
							version = 'my-redactor-8';
						} catch (e) {
							editor = $this.redactor('getEditor');
						}
						if (editor) {
							$this.addClass(version);
							editor.bind("input.my keyup.my blur.my", (function ($o) {
								$o.trigger("redactor");
							}).fill($this));
						}
					}

					//ace fix
					else if ($this.is(".ace_editor"))
						ace.edit($o[0]).on(Ch, (function ($o) {
							$o.trigger("ace");
						}).fill($this));

					// codemirror fix
					else if (cm) {
						cm.on(Ch, (function ($o) {
							$o.trigger("codemirror");
						}).fill($this));
					}
				}

				//create debounced change handler
				$this.my()._changed = (_changed).debounce(delay);
				$this.my()._recalc =  (_recalc).debounce(delay);

				//bind events to the control
				$this.bind(events, function (evt) {
					if (evt.type==Ch) evt.stopPropagation();
					if (isControl) rd.locktill = Date.now()+uiNode.delay;
					$this.my()._changed($this, $root, uiNode, p);
				});

				// if we have no check, attach its silent version
				if (!/check(\.my)?/.test(events+"")) $this.on("check.my", function(evt){
					$this.my()._changed($this, $root, uiNode, p, true);
					return false;
				});

				//bind events to the control
				$this.on("recalc.my, redraw.my", function (evt) {
					evt.stopPropagation();
					$this.my()._recalc($this,$root,uiNode,p);
				});
			});

			// we've done
			if (pi) pi.resolve();
		} // end countdown
	}


	//=======================================

	function _changed ($o, $root, uiNode, p, silent) {
	// called when control is changed
		var d = $o.data("my"),
			r = $root.data("my");
		if (d && !d.disabled) {
			_history(d.ddata||d.data, d.dparams||d.params);
			var $we = $root.find(d.selector);
			_update($o, !silent?_field($we, N):N, uiNode.recalcDepth||p.recalcDepth);

			if (undefined === r.orphan) {
				if (d.root.parent().hasClass("ui-sortable")) {
					r.orphan = !d.root.parent().hasClass("my-form-list");
				}
			}
			if (r.orphan) d.root.parent().trigger("check");
			if (p.change) p.change.call($o);
		}
	}

//=======================================

	function _recalc ($o,$root,uiNode,p) {
	// called when control must update
		var d = $o.my();
		if (d && !d.disabled) {
			var $we = $root.find(d.selector);
			if (($we).is(".my-form")) $we.my("redraw");
			else _update($o,
				($we.is(".my-form-list")?_getref($we.my().data,$we.data("formlist").generator.bind):N),
				uiNode.recalcDepth||p.recalcDepth);
		}
	}


	//=======================================

	function _prepare (that, init0, $o, d) {
	// prepares init, applies data if its string template,
    // dereferences it if it is pointer,
	// and calls function or formgen
        var init;
		if (isS(init0)) {
            init = _getref(that, init0);
            if (undefined === init) {
                $o.html(init0.assign(d.data));
                return null;
            }
        } else init = init0;
		if (isF(init)) return init.apply(that, Array.prototype.slice.call(arguments,2));
		else if (isA(init)) {
			try {$o.formgen(init);}
			catch(e){}
		}
		return null;
	}


	//=======================================

	function _unjson (node, exclude){
		//recursively unwinds string def of funcs and regexps, modifies  source obj!
		var i="", nd, t="", incl = !exclude, a=[];
		for (i in node) if (node.hasOwnProperty(i) && (incl || !/^(data|files|require)$/.test(i))) {
			nd = node[i];
			t = T(nd);
			if (/^(ob|ar)/.test(t)) _unjson(nd);
			else if (t==="string" && /^(function\s*\(|new\sRegExp)/.test(nd)) {
				if (a = nd.match(/^function\s*\(([^\)]*)\)\s*\{([\s\S]*)\}[\s\n\r\t]*$/)) {
					if (a.length===3) {
						try { node[i] = Function(a[1], a[2]); }
						catch(e){ console.log(e.message, e.stack, nd);}
					}
				}
				else if (a = nd.match(/^new\sRegExp\s*\(\/([\s\S]+)\/([a-z]*)\)$/)) {
					if (a.length===3) {
						try { node[i] = RegExp(a[1], a[2]); }
						catch (e) { console.log(e.message, e.stack, nd); }
					}
				}
			}
		}
		a=null;
	}



	//=======================================

	function _normalize (ui, manifest0, p) {
	//unwinds ui recalcs, short defs and watch hooks, modifies source obj!
	//move shorthand binds to bind attr
		var manifest = isO(manifest0)?manifest0:null;
		Object.each(ui, function (i,v){
			var t = typeof v;
			if (/^str|^fu/.test(t)) ui[i] = {bind:v};
		});
		Object.each(ui, function (i,v){
			//correct ui definitions
			//with simplified syntax
			
			//unfold 'recalc'
			var list=[], watch=[], row , re=/\s?[,;]\s?/, rr, j;
			if (v.recalc) {
				if (isS(v.recalc)) list = v.recalc.split(re);
				else if (isA(v.recalc)) list = v.recalc;
				list = list.compact(true).unique();
			}
			if (list.length) ui[i].recalc=list;

			// make dummy bind if none
			if (null==v.bind) v.bind=function () {};
			
			// unfold 'listen'
			var listen;
			if (v.listen) {
				listen = _functionize(v.listen);
				if (Object.size(listen)) v.listen = listen;
				else v.listen = undefined;
			}

			// unfold 'watch' and extend appropriate 'recalc'
			if (v.watch) {
				if (isS(v.watch)) watch = v.watch.split(re);
				else if (isA(v.watch)) watch = v.watch.slice(0);
				watch = watch.compact(true).unique();
				for (j=0; j<watch.length; j++) if (row = ui[watch[j]]) {
					rr= row.recalc;
					if (!rr) row.recalc=[i];
					else if (isS(rr)) row.recalc+=","+i;
					else if (isA(rr) && rr.indexOf(i)==-1) row.recalc.push(i);
				}
			}

			// unfold child manifest if any
			if (null!==manifest) ["css","check","manifest","list","hash","id"].each(function (elt){
				if (isS(v[elt])) {
					var ref = _getref (manifest, v[elt].replace(rthis,""));
					if (ref!=null) v[elt]=ref;
				}
			});

			v.delay = !isNaN(v.delay)? v.delay-0: p.delay;
		});
		return ui;
	}
	
	//=======================================
	
	function _functionize(a){
		var i, r = {}, row, f0 = function(){return null;};
		if (isS(a)) a.split(/[,\s]+/).compact(true).unique().map(function(e){r[e]=f0});
		else if (isA(a)) a.compact(true).unique().map(function(e){r[e]=f0});
		else if (isO(a)) {
			for (i in a) {
				if (!isF(a[i])) r[i] = function(){return a[i]};
				else r[i] = a[i];
			}
		}
		return r;
	}
	
	//======================================
	
	function _sa2obj (src){
		var a = src, r={};
		if (isS(a)) a=a.split(/[,\s]+/);
		if (isA(a)) {
			a=a.compact(true);
			for (i=0;i<a.length;i++) r[a[i]] = true;
			return r;
		}
		else if (isO(a)) return src;
		else return null;
	}


	//=======================================

	function _style ($o, manifest, localOnly) {
	// converts .style section of manifest
	// into two css rile lists for form
		var  aglob=[], aloc=[], man=manifest;
		if (!isO(man) || !isO(man.style)) return "";

		crawl(manifest.style, "", aglob, aloc);
		return [aglob, aloc];


		function crawl (branch0, key, aglob, aloc){
			var i, j, b, a, branch = branch0;
			if (isS(branch)) {
				if (/[\r\n]/.test(branch) || branch.split("}",3).length>2) {
					branch = f.css2json(branch);
				}
				else aglob.push(key+(/\{/.test(branch)?branch:'{'+branch+'}'));
			}
			if (isA(branch) && branch.length) {
				for (i=0;i<branch.length; i++) crawl(branch[i], key, aglob, aloc);
			}
			else if (isO(branch)) {
				for (i in branch) {
					a = unfold(key, i);
					for (j=0;j<a.length;j++) crawl(branch[i],a[j], aglob, aloc);
				}
			}
			else if (isF(branch)) {
				try {
					b = branch.call(manifest, $o, manifest);
					crawl (b, key, aloc, aloc);
				} catch (e) {}
			}
		}

		function unfold (key, selector) {
			var pre="", ext=selector+"", a;
			if (" "===ext.to(1) || /^[a-z]/i.test(ext)) pre=" ";
			a = ext.split(/\s*,\s*/).compact(true);
			if (!a.length) a.push("");
			return a.map(function (e) {return key+pre+e;});
		}
	}



//######### PUBLIC METHODS ##############

	var methods = {

		//######### INIT ##############

		"init" : function ( A0,A1,A2 ) {
			var data0, defaults,
				myid, cid, mid, manifest = {}, html,
				d = {}, ui, p, data, i,
				locFiles=[],
				$listeners={},
				style, manClass, formClass,
				$style, $locstyle,
				pi = $.Deferred(),
				_fail=false,
				tracker,
				ehandler=function () {},
				initCss = "my-form-init",
				mode="std",
				backup="";

			if (isS(A0)) {
				data0=_cache(A0);
				if (data0) {
					if (isO(A2) && isO(A1)) {
						data0=$E(data0,A1);
						defaults=A2;
					}
					else defaults = A1;
					mode="repo";
				} else {
					pi.reject("No manifest with id "+A0+" found in repo.");
					return pi.promise();
				}
			} else {
				data0=A0;
				defaults = A1;
			}

			if (!data0) return this;

			if (isO(defaults) && mode!="repo") data = $E(true,{},data0);
			else data = data0;

			var $root = this.eq(0), rd=$root.my();

			if (isO(rd) && rd.id && rd.ui) {
				f.con ("jQuery.my is already bind.",$root);
				$root.my("ui",data.ui);
				$root.my(Da,data.data);
				return pi.resolve($root.my(Da)).promise();
			}

			// combine params
			p = data.params||{};
			if (!p.strict) {
				p = $E(true, {}, p); _unjson(p);
			}
			p = $E(true, {}, MY.params, p);

			// fail finalizer
			pi.fail(function () {
				$root.removeClass(formClass+" "+manClass);
			});

			//extend root with promise methods
			$E($root, pi.promise());

			//mount data
			if (isO(defaults)) {
				d = f.patch(defaults, data.data||{});
				data.data=d;
			} else d = data.data || {};

			manifest.data = d;


			// early-bind data to $root
			$root.data("my", {
				data:d,
				params:p,
				promise:pi.promise(),
				locktill:0
			});

			$root.addClass(initCss);
			
			// Manage inherits
			if (data.inherit) _inherits(data);

			// Start
			f.require(data, p)
			.then(function(){
				_makeup();
				_files().then(function(){
					_styler();
					_runInit();
				});
			})
			.fail(function(err){
				_makeup();
				_f("Linker of ‘require’ property failed.", err)
			});
			
			// turn on radio & listeners
			pi.then(_initRadio);


			return $root;
			
			
			//-----------------------------------------------------
			
			// Mounts inherits, mutates source
			function _inherits (m){
				var i, r ={}, exp, noexp = true, 
				a = m.inherit, 
				man, $p, mp, obj;
				r = _sa2obj(a);
				if (!Object.size(r)) return null;
				
				//detect parent 
				$p = $root.parents(".my-form").eq(0);
				if (!$p.size()) return null;
				// get parent man
				mp = $p.data("my");
				if (!mp || !mp.manifest) return null;
				man = mp.manifest;
				exp = man.expose;
				noexp = !exp;
				for (i in r) {
					if (noexp || exp[i]) {
						obj = _getref(man, i);
						if (obj!=null) {
							if (!/\./.test(i) && !isS(r[i])) m[i] = obj;
							else $E(true,data,f.unmask(obj,isS(r[i])?r[i]:i));
						}
					}
					
				}
			}
			
			
			//-----------------------------------------------------
			
			// Starts radio relay and per-control listeners
			function _initRadio (){
				
				var i,j;
				for (var i in $listeners) {
					for (j in ui[i].listen) {
						$listeners[i].addClass("my-listen-"+f.sdbmCode(j));
					}
				}
				if (manifest.radio) {
					$root.on("radio.my", function(evt, msg){
						var supress = false, fc, next;
						if (isO(msg) && msg.channel && msg.message && isF(manifest.radio[msg.channel])) {
							
							fc = manifest.radio[msg.channel];
							
							try {next = fc.call(manifest,evt,msg);} 
							catch(e) {f.con("Radio handler failed: "+e.message, e.stack)}
							
							if (next!==undefined) {
								evt.stopPropagation();
								if (next) _broadcast($root, msg);
							}
						}
					});
				}
				//$listeners=null;
			}
			

			//-----------------------------------------------------

			// prepares manifest and helpers
			function _makeup (){

				// unwind stringified fn and regexps defs
				if (!p.strict) _unjson(data, true);
				manifest = $E(true,manifest,Object.reject(data, ["data"]));

				// normalize ui section
				ui = _normalize($E(true,{}, data.ui||{}), manifest, p);
				
				// normalize radio section
				if (manifest.radio) manifest.radio = _functionize(manifest.radio);
				
				// normalize expose section
				if (manifest.expose) manifest.expose = _sa2obj(manifest.expose);

				// ids
				cid = Number.random(268435456,4294967295).toString(16);
				myid =  data.id || ("my"+cid);
				mid = f.sdbmCode(myid);
				manifest.id = myid;

				p.form=$root;

				if (data.params && data.params.depth) p.recalcDepth=data.params.depth;

				//bind ‘this’ to 1st level manifest functions
				for (i in manifest) if (isF(manifest[i])) manifest[i] = manifest[i].bind(manifest);

				//mount error handler
				if (data.error) {
					if (isS(data.error)) {
						ehandler = function (msg,err) {
							return data.error.assign($E({
								message:msg+"",
								err:err+""
							}, data));
						};
					} else if (isF(data.error)) {
						ehandler = function (err, stack) {
							html=null;
							try {html = data.error(err,stack);}
							catch (e) {	html = p.messages.initFailed;}
							return html;
						};
					}
				}

				//mount params to form DOM node
				$E($root.data("my"), {
					id: myid,
					cid: cid,
					mid: mid,
					errors:Object.extended(),
					ui:Object.extended(ui),
					disabled:false,
					manifest:manifest,
					locFiles:[],
					modals:{},
					radio:{}
				});

				// mount classes and styles if any
				$root.addClass("my-form");

				manClass = "my-manifest-"+mid;
				formClass = "my-form-"+cid;

				$root.addClass(formClass+" "+manClass);
			}


			//-----------------------------------------------------

			// generates context-dependent styles
			function _styler (onlyLocals) {
				var h = "";
				if (manifest.style) {
					style = _style($root, manifest, manClass, formClass);
					if (style && style[0].length && !onlyLocals) {
						$style = $('style#' + manClass);
						if (!$style.size()) {
							$style = $(html(style[0], manClass)).appendTo($("body"));
						}

						$style.data("count", $style.data("count") * 1 + 1);
						$root.data("my").style = $style;
					}

					if (style && style[1].length) {
						$locstyle = $('style#' + formClass);
						if (!$locstyle.size()) {
							$locstyle = $(html(style[1], formClass)).appendTo($("body"));
							if (p.restyle>-1 && !restyles[cid]) {
								restyles[cid] = (function restyle (){ _styler(true)}).debounce(p.restyle);
							} 
							$root.data("my").restyle = _styler.fill(true).debounce(0);
						}
						else if (onlyLocals) {
							$(html(style[1], formClass)).replaceAll($locstyle);
							$locstyle = $('style#' + formClass);
						}

						$root.data("my").localStyle = $locstyle;
					}
				}
				
				function html(styles, prefixCss) {
					return ('<style id="' + prefixCss + '" data-count="0">' +
							"." + prefixCss + styles.join(' \n.' + prefixCss) + '\n' +
							'</style>');
				}
			}

			//-----------------------------------------------------

			// prepare files section
			function _files () {
				var i, pi = $.Deferred(), flist;

				flist = _files2urls (manifest);
				if (isS(flist)) {
					_f("Error decoding base64 to local Blob/URL", flist);
					pi.reject();
				}
				else {
					if (wURL) for(i=0;i<flist.length;i++) locFiles.push(manifest.files[flist[i]].url);
					if (locFiles.length) $root.data("my").locFiles = locFiles;

					pi.resolve();
				}

				return pi.promise();
			}


			//-----------------------------------------------------

			// init starter
			function _runInit(){
				//initialize
				if (data.init!=N) {
					backup = $root.find(">*").clone();
					try {
						tracker = _prepare(manifest, data.init, $root, data);
					} catch (e) {
						_f(isS(e)?e:e.message, e.stack);
						return $root;
					}
				}
				// init returned promise?
				if (isP(tracker)) {
					tracker.then(function () {_controls();}, function (err,obj){_f(err, obj);});
				} else _controls();

				if (!_fail) {
					if (!$root.my()) return _f("Internal error initializing controls",""), $root;

					//save initial data for $.my("reset")
					$root.data("my").initial = $E(true,{},d);

					//init $.mobile if any
					if ($.mobile) $.mobile.changePage($.mobile.activePage);
				}
			}


			//-----------------------------------------------------

			//build and init controls
			function _controls (){
				var formState={}, ctr=Object.size(ui);

				$root.addClass(initCss);

				// build controls (init and premount)
				Object.each(ui, function (selector) {
					if (_fail) return;
					var $o = $root.find(selector),
						built = _build($o, $root, ui[selector], selector);

					if (isP(built)) {
						//we've got promise
						built.then(
							countdown.fill(selector)
						).fail(function (msg, obj){
							_f("Error building "+selector+", "+msg, obj);
						});
					}
					else if (!_fail) countdown(selector);
				});

				function countdown(selector){
					if (!_fail) {
						formState[selector]=_field($root.find(selector),N);
						ctr-=1; if (ctr<.5) _values(formState);
					}
				}

			}

			//-----------------------------------------------------

			//apply values to controls
			function _values (formState) {
				var uiNode, v, $o;
				for (var selector in ui) {
					if (_fail) return;
					uiNode = ui[selector];
					$o = $root.find(selector);
					if ($o.size()) {
						if (uiNode.listen) $listeners[selector] = $o.eq(0);
						try {
							v = _bind(d, N, uiNode, $o);
							if (v==N && formState[selector]!=N && v!==undefined)
								_bind(d, formState[selector], uiNode, $o);
						}
						catch (e) {
							f.con("Transient fail linking " +selector
								+" of form $('.my-form-"+cid+"')",
								e.message, e.stack
							);
						}
						try {
							if (v!=N) _field($o,v);
							$o.eq(0).trigger("check.my");
						} catch (e) {
							_f("Error linking "+selector, e.message, e.stack);
						}
					}
				}
				$root.removeClass(initCss);
				backup=null;
				pi.resolve(d);
			}

			//-----------------------------------------------------

			// Fail handler
			function _f (msg, obj) {
				var html;
				_fail=true;
				f.con("Form "+myid+" failed to initialize: "+msg, obj);
				$root.removeClass(initCss);
				html = ehandler(msg, obj);
				if (isS(html) || (isO(html) && html.jquery)) $root.html(html);
				else if (html===true) $root.html(backup);
				if (!p.silent) {
					if(!$root.my().ddata) {
						$root.removeData("my");
						$root.removeClass("my-form");
						if ($style) {
							if ($style.data("count")=="1") {
								try{$style.remove();}catch(e){}
							}
							else $style.data("count", $style.data("count")-1);
						}
						if ($locstyle) {
							try{
								delete restyles[cid];
								$locstyle.remove();
							}catch(e){}
						}
					}
					pi.reject("Form "+myid+" failed to initialize: "+msg, obj);
				} else pi.resolve(d);
			}
		}, //end init



		//###### REDRAW ######

		"redraw": function ( noRecalc, silent) {
			var $x = this, d = $x.my();
			if (d && d.ui) {
				d.ui.each(function (key) {
					var $n = $x.find(key);
					_update($n, noRecalc?N:undefined , d.params.recalcDepth);
					if (!noRecalc) {
						if ($n.is(".my-form")) $n.my("redraw");
						if ($n.is(".my-form-list")) $n.trigger("redraw");
						else $n.trigger("check.my");
					}
				});
				if (!silent && noRecalc) $x.trigger(Ch);
			}
			return $x;
		},

		//###### SET OR RETRIEVE DATA ######

		"data": function (data, noRecalc) {
			var $x = this;
			if (isO(data)) {
				$x.my().data = f.overlap($x.my().data, data);
				this.my("redraw", noRecalc);
			}
			return $x.my().data;
		},

		//###### RETURNS ERRORS ######

		"errors": function () {
			var e0 = $(this).my().errors, e = {};
			for (var i in e0) {
				if (e0[i] && isS(e0[i])) e[i]=e0[i];
				if (isO(e0[i]) && Object.keys(e0[i]).length) e[i]=e0[i];
			}
			return e;
		},

		//###### RETURNS true IF FORM VALID ######

		"valid": function () {
			var e = $(this).my().errors, ctr=0;
			for (var i in e) {
				if (e[i] && isS(e[i])) ctr++;
				else if (isO(e[i]) && Object.keys(e[i]).length) ctr++;
			}
			return !ctr;
		},

		//###### RESET INITIAL VALUES ######

		"reset": function () {
			try {
				f.kickoff(this.my().data, this.my().initial);
				this.my("redraw");
			} catch (e) {return false;}
			return true;
		},

		//###### GET id OR SEARCH BY id ######

		"id": function (id, obj) {
			if (isS(id)) return _cache(id, obj);
			else {
				var d = this.my();
				return (d && d.id)?d.id:N;
			}
		},

		//###### UNMOUNT jQuery.my INSTANCE FROM THE DOM ######

		"remove": function (fromDOM){
			var $o = this,
				$style,
				$locstyle, m,
				locFiles,
				d, ui, cid, mid;

            if (!this.my()) return N;

			//child elt requests form removal
			if (this.my().root && !this.my().ddata) $o = this.my().root;

            m =  $o.my();
			d =  m.data;
            cid = m.cid;
            mid = m.mid;


			// close modals if any
			// if ($o.data("modals")) {}


			// stop event listeners
			$o.unbind(".my");
			
			// exec done
			if (isO(m) && m.manifest && isF(m.manifest.die)) {
				try {
					m.manifest.die.call(m.manifest, $o, m.manifest);
				} catch(e){}
			}

			// remove stylesheets
			if ($style=m.style) {
				if ($style.data("count")=="1") {
					try{$style.remove();}catch(e){}
				}
				else $style.data("count", $style.data("count")-1);
			}
			if ($locstyle=m.localStyle) {
				try{
					delete restyles[cid];
					$locstyle.remove();
				}catch(e){}
			}

			// revoke data urls
			if (window.URL && (locFiles = m.locFiles) && locFiles.length) {
				for (var i=0;i< locFiles.length; i++) {
					try { URL.revokeObjectURL(locFiles[i]); } catch(e) {}
				}
			}

			// remove $.my from ui entries
			ui = (m||{}).ui;
			if (ui) {
				ui.each(function (key){
					var $we = $o.find(key), f, mw, i;

					// close dependent modal
					if (mw = $we.data("modal")) {
						mw.cancel();
						$we.removeData("modal");
					}

					//close child modals
					if (mw = $we.data("modals")) {
						for (i in mw) if (mw[i]) mw[i].cancel();
					}

					$we.unbind(".my");
					try{
						f = _traverse($we, MY.destroy);
						if (isF(f)) f($we);
					}catch(e){}
					$we .removeData("formlist")
						.removeData("myval")
						.removeData("my");
				});
			}

			if (fromDOM && $o.is(".my-form")){
				$o.remove();
			}
			else if ($o.data("formlist") && $o.is(".my-form")) {
				var $p = $o.parents(".my-form-list").eq(0);
				$o.remove();
				$p.trigger("check");
			}
			else {
				$o.removeData("formlist")
				.removeData("myval")
				.removeData("my")
				.removeClass("my-form");
			}

            $o.removeClass("my-form-"+cid+" my-manifest-"+mid);

			return d;//returns data collected by removed instance
		},

		//###### UNDO ######

		"undo": function (steps){
			var $this = this,
				d = $this.my(),
				h = d.params.history,
				k = Object.keys(h).sort(),
				diff = 1*(parseInt(steps)||0),
				state;
			if (!k.length || diff<0) return N;
			if (!d.params.errors || !d.params.errors.values().compact(true).length) {
				if ( Object.equal(h[k.last()], d.data)) diff+=1;
			} else if (!Object.equal(d.data, d.lastCorrect)) diff+=1;

			state  = _history(diff, d.params, true);

			if (state) {
				f.kickoff($this.my().data, state);
				$this.my("redraw");
			}
			return $this.my().data;
		},

		//###### UI RUNTIME GETTER-SETTER ######

		"ui": function (u) {
			var $x = this, d = $x.my(), a=[], i;
			if (!d) return N;
			var ui = $E(true, {}, d.ui);
			if (!isO(u)) return d.ui;
			for (i in u) if (true || !ui[i]) a.push(i); //controls to (re)init
			d.ui = _normalize(f.overlap(d.ui,u));
			for (i=0;i<a.length;i++) _build($x.find(a[i]), $x, d.ui[a[i]], a[i]);
			for (i in u) $x.find(i).eq(0).trigger("check");
			return d.ui;
		},

		//###### ENABLE-DISABLE FORM ######

		"disabled": function (bool) {
			var $d, i, dn,onOff,
				$x = this,
				d = $x.my();
			if (!d) return undefined;
			if (bool==N) return d.disabled;
			if (!!bool) {
				//disable all controls
				for (i in d.ui) {
					$d = $x.find(i).eq(0);
					dn = $d.my();
					if (dn) dn.predisabled = dn.disabled;
					_css(true, $d, ":disabled");
				}
				$x.addClass("my-disabled");
			} else {
				for (i in d.ui) {
					$d = $x.find(i).eq(0);
					dn = $d.my();
					onOff = false;
					if (dn && dn.predisabled) onOff=true;
					_css(onOff, $d, ":disabled");
				}
				$x.removeClass("my-disabled");
				$x.my("redraw");
			}
		},

		//###### CONTROL RELATED ######

		"find": function _findUiNode(sel) {
			var $x = this, d = $x.my();
			if (d && d.root) $x=d.root;
			return $x.find(sel);
		},
		
		"radio": function _emitRadioMessage (channel, msg) {
			this.trigger("radio", isS(channel)?{channel:channel, message:msg}:channel); 
		},

		//###### SYSTEM ######

		"manifest": function (format) {
			return format=="json"?f.tojson(this.my().manifest):this.my().manifest;
		},
		"version": function () {return _version;},
		"history": function (a,c) {return _history(a, this.my().params, c);},
		"val": function (v) {return _field(this, v);},
		"container": function ($o) {return _traverse($o, MY.containers)($o);},
		"promise": function (fn) {if (isF(fn)) this.my().promise.then(fn); return this.my().promise;},

		//###### LIST RELATED ######
		"index": function () {
			var o = (this.my().root && !this.my().ddata)?this.my().root:this;
			return (o.data("formlist")||{}).index;
		},
		"insert": function (where, what) {
			var src = this.is(".my-form-list")?this:(this.my().root||this),
				o = src.is(".my-form-list")?src:src.parent(".my-form-list"),
				pos = (src.data("formlist")||{}).index,
				list,
				obj = what,
				idx;
			if (null==pos) pos=0;
			list = _getref(o.my().data, o.data("formlist").generator.bind);
			if (!isO(obj)) {
				if (!isO(o.data("formlist").generator.manifest)) {
					if (o===src) throw "No data to insert, cannot guess when manifest is function.";
					obj = Object.clone(src.my().manifest.data,true);
				}
				else obj = Object.clone(o.data("formlist").generator.manifest.data,true)||{};
			}


			if ("before"===where) idx=pos;
			else if("after"===where) idx=pos+1;
			else if (!isNaN(where)) {
				idx=(1*where).clamp(0, list.length);
			} else throw "Invalid position for insert";
			list.add(obj, idx);
			o.trigger("redraw");
		}
	};
	
	
	// Extend $.my obj

	if (!$.my) $.my={};

	$.extend($.my,{
		f: $.extend({}, f),
		tojson:f.tojson,
		fromjson:f.fromjson,
		radio: function(channel, msg){ 
			_broadcast($(document), isS(channel)?{channel:channel, message:msg}:channel); 
		},
		rules:MY,
		cache:function (A1, A2) {
			if (isF(A1)) return _cache = A1;
			else return _cache(A1, A2);
		},
		version: function () {return _version;}
	});

    // Chain runner

    $.my.chain = (function(){
        var delay = 1, timeout = 1000,
            chain = [],
            state = false,
            put = function (def, d, t) {
                chain.push([def, d || delay, t || timeout]);
                next();
            };
        put.delay = function (d) {
            if (!isNaN(d)) delay = (d-0).clamp(0,1e6);
            return delay;
        };
        put.timeout = function (d) {
            if (!isNaN(d)) timeout = (d-0).clamp(1,1e6);
            return timeout;
        };
        put.start = function () { state = true; next(); };
        put.stop = function () { state = false; };

        return put;

        function next (){
            if (chain.length && state) {
                var f = chain.shift(),
                    res,
                    go = function () {  next.delay(f[1]);  }.once();
                try {  res = f[0](); }
                catch (e) {  go(); }
                if (isP(res)) {
                    res.then(go, go);
                    go.delay(f[1]);
                } else go();
            }
        }
    })();


	// Mount everything over jQuery

	$.fn.my = function (method) {
		var form;
		if (method===undefined) return this.data("my");
		if (isS(method) && method.substr(0,1)=="{" ) {
			try{form = JSON.parse(method);}catch(e){}
			if (form) return methods.init.apply(this,[form].add(Array.prototype.slice.call(arguments, 1)));
		}
		if (isS(method) && methods[method])
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		else if (isS(method) && _cache(method,"exist")) return methods.init.apply(this, arguments);
		else if (typeof method === Ob || !method ) return methods.init.apply(this, arguments);
		else $.error('Method ' + method + ' does not exist on jQuery.my');
	};
	
	// Set event monitors
	$(window)
	.off(".my")
	.on("radio.my", function(evt, data){ 
		evt.stopPropagation(); 
		_broadcast($(document), data); 
	})
	.on("resize.my", function myWindowResize () {
		for (var i in restyles) try {
			restyles[i]();
		} catch (e) {}
	}.debounce(100));

	
	return;

	// # # # # # # # # # # # # # # # # # # # # # # # # # END $.MY PLUGIN INIT # # # # # # # # # # # # # # # # # # # # # # # # #
	
	

	//### Helpers builder

	function _getHelpersLib() {
	return {
		"con": function () {try {console.log (arguments);} catch (e) {}},
		"clone": function (o) {return o.clone?o.clone():o;},
		"extval": function ($x) {
			var d = $x.my(); if (d&&d.data) return d.data;
			return $x.data("value")||$x.val()||$x.text()||$x.html()||"";
		},
		"jquix": function ($o, plugin, offon) {return $o[plugin](offon?"disable":"enable");},
		"overlap": function (o1, o2) {
			if (!arguments.length) return {};
			if (arguments.length === 1) return arguments[0];
			for (var i=1; i<arguments.length;i++) Object.merge(arguments[0], arguments[i], false, _cmp);
			return arguments[0];

			function _cmp (key, a, b) {
				if (b===undefined || b===null) return a;
				if (!isO(b)) return b;
				else return Object.merge(a,b,false);
			}
		},
		"patch": function patcher (a,b) {
			//applies b over a in deep, if a already has non-object node it stays untouched
			// if no, b properties are cloned.
			// patch ({y:{w:2,a:[1,2]}}, {x:1, y:{w:5,z:3,a:[3,4,5]}}) >>{x:1,y:{w:2,a:[1,2],z:3}}.
			// Returns mutated a.
			for (var i in b) {
				if (b.hasOwnProperty(i)) {
					if (isO(b[i])) {
						if (!a.hasOwnProperty(i))  a[i]=Object.clone(b[i],true);
						else patcher (a[i],b[i]);
					} else if (!a.hasOwnProperty(i)) {
						if (isA(b[i])) a[i]=b[i].clone(true);
						else a[i]=b[i];
					}
				}
			}
			return a;
		},
		"kickoff": function (a,b) {
			//replaces a content with b content;
			var def = b && typeof b == "object" ? Object.clone(b, true) : {}, i;
			for (i in a) if (a.hasOwnProperty(i)) {
				delete a[i];
				if (def[i] !== undefined) a[i] = def[i];
			}
		},
		"sdbmCode":function (s0){
			//very fast hash used in Berkeley DB
		    for (var s = JSON.stringify(s0), hash=0,i=0;i<s.length;i++)
				hash=s.charCodeAt(i)+(hash<<6)+(hash<<16)-hash;
		    return (1e11+hash).toString(36);
		},
		"tojson":(function () {
			function f(n){return n<10?'0'+n:n;}
			Date.prototype.toJSON=function () {
				var t=this;return t.getUTCFullYear()+'-'+f(t.getUTCMonth()+1)+'-'+f(t.getUTCDate())+
				'T'+f(t.getUTCHours())+':'+f(t.getUTCMinutes())+':'+f(t.getUTCSeconds())+'Z';
			};
			RegExp.prototype.toJSON = function () {return "new RegExp("+this.toString()+")";};
			var tabs= '\t'.repeat(10), fj = JSON.stringify;

			// - - - - - - - - - - - - - - - - - - - - - - -
			function s2 (w, ctab0, tab){
				var tl=0,a,i,k,v,ctab=ctab0||0,xt = tabs;
				if (tab && isS(tab)) {tl=String(tab).length;xt = String(tab).repeat(10);}
				switch((typeof w).substr(0,3)){
					case 'str': return fj(w);case'num':return isFinite(w)?''+String(w)+'':'null';
					case 'boo': case'nul':return String(w);
					case 'fun': return fj(
						w.toString()
						.replace(/^(function)([^\(]*)(\([^\)]*)([\n\t][^)]*)(\).*)/,"$1 $3$5")
						.replace(/(})([^}]*$)/,'$1')
					);
					case 'obj': if(!w) return'null';
					if (typeof w.toJSON===Fu) return s2(w.toJSON(),ctab+(tab?1:0),tab);
					a=[];
					if (isA(w)){
						for(i=0; i<w.length; i+=1){a.push(s2(w[i],ctab+(tab?1:0),tab)||'null');}
						return'['+a.join(','+(tab?"\n"+xt.to(ctab*tl+tl):""))+']';
					}
					for (k in w) if (isS(k)) {
						v=s2(w[k],ctab+(tab?1:0),tab);
						if(v) a.push((tab?"\n"+xt.to(ctab*tl+tl):"")+s2(k,ctab+(tab?1:0),tab)+': '+v);
					}
					return '{'+a.join(',')+(tab?"\n"+xt.to(ctab*tl):"")+'}';
				}
			}

			return s2.fill(undefined,0,undefined);

		})(),
		"fromjson": function (s) {var obj = JSON.parse(s); _unjson(obj);return obj;},
		"mask":function (src, mask0) {
			//returns src obj masked with mask
			if (!isO(src)) return null;
			var res, mask=mask0;
			if (isS(mask)) {
				return _getref(src, mask);
			} else if (isA(mask)) {
				res = [];
				for (var i=0;i<mask.length;i++) {
					res[i]=isS(mask[i])?_getref(src, mask[i])||null:null;
				}
				return res;
			} else if (isO(mask))
				return _merge(src, mask);
			//- - - -
			function _merge(src, mask) {
				if (!isO(mask)) return {};
				var dest = {};
				for (var i in mask) {
					if (!isO(mask[i]) && src.hasOwnProperty(i)) {
						dest[i]=Object.clone(src[i],true);
					}
					else if (src.hasOwnProperty(i)) {
						if (isO(src[i])) dest[i]=_merge(src[i],mask[i]);
						else dest[i] = Object.clone(src[i],true);
					}
				}
				return dest;
			}
		},
		"unmask": function (src, mask) {
			// unfolds masked into obj
			var res={};
			if (isO(src) && isO(mask)) return f.mask(src,mask);
			else if (isA(src) && isA(mask)) {
				for (var i=0;i<mask.length;i++) {
					if (src[i]!=null) _blow(res, src[i], mask[i]);
				}
				return res;
			} else if (isS(mask)) return _blow({}, src, mask);
			else return null;

			//- - -
			function _blow(data, src, ref) {
				var ptr, path, preptr, val=Object.clone(src,true), i=0;
				if (!/\./.test(ref)) {
					//ref is flat
					if (null!=src) data[ref] = val;
				} else {
					path = ref.split(".").each(function (a,i){this[i]=String(a).compact();});
					ptr = data;
					for (;i<path.length;i++) {
						if (i===path.length-1) ptr[path[i]] = val; //we'r in the hole
						if (i===0) ptr = data[path[0]], preptr= data;
						else preptr = preptr[path[i-1]], ptr = ptr[path[i]];
						if (undefined===ptr) ptr = preptr[path[i]] = {};
					}
				}
				return data;
			}
		},
		"getref":_getref,
		"require":_require,
		"repo": function(){return forms;},
		"restyles":function(){return restyles;},
		"unjson":function (obj) {
			_unjson(obj);
			return obj;
		},
		"blob2base64": function(blob, done, nosplit) {
			var reader = new FileReader();
			reader.onload = function() {done(nosplit?reader.result:reader.result.split(',')[1])};
			reader.readAsDataURL(blob);
		},
		"base642blob": function(base64, done,  mime) {
			var binary = atob(base64),
				len = binary.length,
				buffer = new ArrayBuffer(len),
				view = new Uint8Array(buffer),
				blob;
			for (var i = 0; i < len; i++) view[i] = binary.charCodeAt(i);
			blob = new Blob([view], {type:mime||"application/octet-stream"});
			if (isF(done)) done(blob);
			else return blob;
		},
		"base64": function (s0, decode, prefix0) {
			// If s0 is not string it's stringified
			// If decode is true, decodes base64, else encodes
			// If prefix===true, utf-8 BOM is added,
			// If prefix is a string, it’s assumed mime,
			// 	  and added to encoded data
			var st=T(s0), r=null,
				s= (isS(s0)?s0:$.my.tojson(s0)),
				prefix = isS(prefix0)?'data:'+prefix0+';base64,':"";
			if(decode) {
				try {r = decodeURIComponent(escape(window.atob(s)));}catch(e) {r=null;}
				if (null!==r && /(^".*"$)|(^\[.*\]$)|(^\{.*\}$)/.test(r)) {
					try {r = $.my.fromjson(r);}catch(e) {r=null;}
				}
				return r;
			}
			return prefix + window.btoa(
					(prefix0===true?"\xEF\xBB\xBF":"")
					+unescape(encodeURIComponent(s))
			);
		},
		"css2json": function(css){
			var res =
			((css+"")
			.replace(/\/\*[\s\S]+\*\//gm,"")
			.replace(/@charset[^;]+;/gim,'')
			.replace(/[\n\t\s]+/g,' ')
			.replace(/\}/g,'}ᴥ')
			.replace(/^\n+/g,"").replace(/[\n\s]+$/g,"")
			.split('ᴥ')
			.compact(true)
			.reduce(function(a,b){
				var t = b.trim(), p, k, v;
				if (/^[^{]+\{[^\}]+\}$/.test(t)) {
					p = t.to(-1).split("{");
					k = " "+p[0].trim();
					v = p[1].trim();
					if (v.last()!=";") v+=";";
					if (!a[k]) a[k]="";
					a[k]+=v;
				}
				return a;
			},{}));
			return res;
		}
	};
	} //### end helpers


})(jQuery); // end $.my



//#############################################################################################

/* jQuery.formgen 0.4
 * Generates forms markup for $.my from lean-syntax DSL.
 * Returns html string.
 *
 * $(somediv).formgen("[
 * 		// Redefines params for subsequent rows, can be partial
 * 		{ row:"400px", label:"100px", rowCss:"rowClass", labelCss:"", labelTag:""},
 *
 * 		// First row
 * 		["Text4label", "inp#Name.person-name",{placeholder:"Your name"}],
 *
 * 		// Some free HTML
 * 		'<div class="shim"><div>',
 *
 * 		// Row with several controls and HTML, no label
 * 		["", "num#age",{style:"width:50px"}, "<i>years</i> ", "num#year", {style:"width:100px"}, " born"],
 *
 * 		// Select with opts, understands many formats
 * 		["Choose one", "sel#mychoice",
 * 			{vals:[
 * 				"Fish",
 * 				"Meat",
 * 				{id:"Poultry", text:"Chicken"},
 * 				{"Ice Tea":"Tea1"}
 * 		]}]
 *
 *		//and so on. Shortcuts for controls are below in the code.
 * ]")
 *
 * */

(function ($){
	//Some shortcuts and constants
	var $E = $.extend, n = function (o) {return o!==null && o!==undefined;},  N = null,
		Ob="object", Da="data", Ar = "array", St = "string", Fu="function", Ch = "change",
		isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
		isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction;
	var iHead = '<input type="',
		iTail = ' {ext} ';
	var f = {
		tmpl:{
			"num"	:iHead+'number" {ext}/>',
			"inp"	:iHead+'text" {ext}/>',
			"sli"	:iHead+'range" {ext}/>',
			"dat"	:iHead+'date" {ext}/>',
			"btn"	:iHead+'button" {ext}/>',
			"but"	:'<button {ext}>{txt}</button>',
			"div"	:'<div {ext}>{txt}</div>',
			"spn"	:'<span {ext}>{txt}</span>',
			"sel"	:'<select {ext}>{txt}</select>',
			"mul"	:'<select {ext} multiple="multiple">{txt}</select>',
			"txt"	:'<textarea {ext}>{txt}</textarea>',
			"err"	:' <span class="my-error-tip {class}" style="{style}">{txt}</span>',
			"msg"	:'<div class="my-error-tip {class}" style="{style}">{txt}</div>',
			"val"	:function (p) {
				if (!isA(p.vals)) return "";
				var p0=$E({style:"",css:""},p);
				p0.txt=p.vals.reduce(function (a,b){
					return a+'<span class="my-shortcut" '
							+'onclick="$(this).parents(\'.my-row\')'
							+'.find(\'input,textarea\').val($(this).text()).trigger(\'blur\')">'
							+b+'</span> ';
				}," ");
				return ('<span class="my-shortcuts {css}" style="{style}">{txt}</span>').assign(p0);
			},
			""	:'<{_tag} {ext}>{txt}</{_tag}>'
		},
		txt:{
			sel:function (p) {
				if (!p.vals) return "";
				var obj = decrypt(p.vals);
				return Object.keys(obj).reduce(function (a,b){
					return a+'<option value="'+b+'">'+obj[b]+'</option>';
				},'');
			}
		},
		params:{
			styles:{num:"width:30%;", dat:"width:30%;", inp:"width:100%", but:"width:30%",
					txt:"width:100%;max-width:100%;min-height:1px;word-break:break-word;",
					err:"display:none",msg:"display:none"},
			alias: {number:"num",date:"dat",slider:"sli",textarea:"txt",input:"inp",
					span:"spn",select:"select",vals:"val"},
			row:"",
			rowTag:"div",
			rowCss:"my-row",
			label:"",
			labelTag:"span",
			labelCss:"my-label"
		},

		defaults:{id:"","class":"",style:"",placeholder:"",value:"",rows:1},
		attnames:{css:"class",plc:"placeholder",val:"value",txt:"",vals:"",tip:"title"}
	};


	function chain(a,b,sys) {
		if (isS(b)) return a+b;
		if (isO(b)) {
			sys = $E(true,sys, b);
			return a;
		} else if (isA(b) && b.length>1 && isS(b[1])) {

			var lbl = b[0],html="",key,type,a0,b0,i=1,j,p,tmpl,ext;

			//iterate through row's inside items
			while (i<b.length) {
				if (isS(b[i])) {
					b0 = b[i].replace(/\s/g,"");
					a0 = b0.split(/[\.#]/i);
					type=sys.alias[a0[0]]||a0[0];
					key = b0.substr(a0[0].length);
					if (/^[a-z0-9]+(#[a-z0-9\-_]+)?(\.[a-z0-9\-_]+)*$/i.test(b0)) {
						tmpl = f.tmpl[type] || f.tmpl[""];
						p={style:"","class":"",txt:""};ext="";

						//mount params over p
						var isExt = isO(b[i+1]);
						if (isExt) {
							i+=1;
							for (j in b[i]) if (f.attnames[j]!=="") p[f.attnames[j]||j]=b[i][j];
						}
						//apply default styles-classes
						if (!p.style && !p["class"] && sys.styles[type]) p.style=sys.styles[type];
						if (!p.id && key.to(1)=="#") p.id=key.from(1).split(".")[0];
						if (!p["class"] && /\./.test(key)) p["class"]=
							(key.to(1)=="#"?key.substr(p.id.length+1):key)
							.split(".")
							.compact(true)
							.join(" ");

						//combine attributes and others
						for (j in p) ext+=j+'="'+p[j]+'" ';
						if (isExt)	for (j in b[i]) if (f.attnames[j]==="") p[j]=b[i][j];
						p.ext=ext;

						//try to gen text if no
						if (!p.txt && f.txt[type]) p.txt=f.txt[type](p);

						//attach _tag
						p._tag=type;

						//execute template
						html+=typeof tmpl == Fu?tmpl(p)||"":typeof tmpl == St?tmpl.assign(p):"";

					} else html+=b[i];
				}
				i+=1;
			}
			//somth is generated, make row
			if (html) {
				html =
					'<'+sys.rowTag+' class="'+sys.rowCss+'" '
					+(sys.row?'style="width:'+sys.row+'; ':"")
					+(sys.label && lbl?'padding-left:'+sys.label+'; ':"")
					+'">'
					+(lbl?(
						'<'+sys.labelTag+' class="'+sys.labelCss+'" '
						+(sys.label?'style="display:inline-block;width:'+sys.label+';margin-left:-'+sys.label+'" ':"")
						+'>'+lbl+'</'+sys.labelTag+'>'
					):"")
					+html+'</'+sys.rowTag+'>';
			}
			return a+html;
		}
		return a;
	}

	function decrypt (elt0) {
	//translates different forms like [val, val val]
	//{id:"",text:""} {key:"",value:""} and so on
	// into object {key1:val1, key2:val2, ...}
		var elt = elt0;
		if (isS(elt)) {
			elt = elt.split(/[\s,]/).compact(true);
		}
		if (isA(elt)) {
			var obj={};
			for (var i=0;i<elt.length;i++) {
				var e = elt[i];
				if (isO(e)) {
					var keys=Object.keys(e);
					if (keys.length==1) obj[keys[0]]=e[keys[0]]+"";
					else obj[e.id||e.key||e.name||""]=(e.text||e.value||e.title||"");

				} else obj[e]=e+"";
			}
			elt=obj;
		}
		if (isO(elt)) return elt;
		else return {};
	}

	function formgen (form, params){
		//find params in form if any
		var sys={};
		if (isA(form)) {
			$E(true,sys,f.params, params||{});
			return form.length?form.reduce(chain.fill(undefined,undefined,sys),''):"";
		} else if (isO(form)) {
			$.extend(f, form)
		}else return "";
	}

	//return formgen;
	var methods={
		init: function (form, params) {
			return $(this).html(formgen(form, params));
		}
	};


	if (!$.my) $.my={};
	$.my.formgen = formgen;
	$.fn.formgen = function (method) {
		if (isS(method) && methods[method]) return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		else if (typeof method === 'object' || !method ) return methods.init.apply(this,arguments);
		else $.error('Method '+ method+' does not exist on jQuery.formgen');
	};

})(jQuery);




//#############################################################################################

/* jQuery.my.modal 1.1.0
 * Requires Sugar 1.4.~, jQuery 1.11+, $.my 1.0.0+
 *
 * Modal dialog constructor/manager. Singleton, allows only one instance of popup.
 * Returns promise, which is resolved on dialog normal close or rejected if modal fails to init.
 * After content is succesfully initialized promise progress receives notification "Ready".
 *
 * $obj.modal or
 * $.my.modal (Obj, done, width) >> null or
 * 									promise [resolve(formData or true), reject (errMessage, errStack)]
 *
 * Obj is one of following types:
 * 		1. jQuery image – will raise modal with the image and text from title or data-text attributes
 * 		2. HTML string – will raise modal with html content
 * 		3. Object of type
 * 			{
 * 				manifest: formManifest Object,
 * 				data: initialData Object or none,
 * 				width: formWidth Number or none,
 * 				done: callback Function (formErrors, data) or none,
 * 				esc: false, enables/disables close on escape keypress,
 * 				enter: false, enables commit on Enter keypress
 * 				nose:"", left|right|top|bottom – where to put nose
 * 				global: false, force global modal
 * 				screen: false, show/hide screen div
 * 				drag: false, allows drag of modal if $ ui draggable plugin installed
 *	 			align:"top|bottom:NUM%|px;left|right:NUM%|px",
 *				bound: false or number, defines if modal must lay inside root,
 *				background:"white" background color in CSS format
 * 			}
 * 			will raise modal with $.my form inside. Form must call $obj.modal(false) or emit
 * 			"commit" event on itself to close with sendind data. Calling $obj.modal(true) or
 * 			emitting "cancel" event on form will close modal sending null as data with no error.
 *
 * 			Callback in obj overlaps done provided as second arg, same for width.
 *
 * 			Callback is called prior promise and unlike promise receives 2 arguments,
 * 			not one, even when form succeded. If callback returns true, dialog remains
 *			opened and promise – pending.
 *
 * 		4. null, undefined or false – close dialog and calls done(formErrors, data),
 * 		   if done return false or null promise is resoved with data,
 * 		   else modal stays open
 * 		5. true (strict boolean) – close dialog and calls done (null, null),
 * 		   then promise is rejected with "Cancelled" string
 *
 * 		If modal on $obj is already open, invoking $obj.modal return promise that is
 * 		immediatly rejected with error "Locked", done is called with (null, null).
 *
 * $.my.modal.visible() >> Boolean
 * 		Indicates if global modal is opened.
 *
 * $.my.modal.parent (selector or null) >> jQuery object
 * 		Sets or gets parent DOM node, where all $.my.modal stuff is prepended.
 * 		To work good must be called prior to 1st $.my.modal call.
*/

(function ($){

	var root={}, parent = "body", parentBack, isOpen = false,
		$E = $.extend, M = {},
		isA = Object.isArray, isB = Object.isBoolean, isS = Object.isString, isO = Object.isObject,
		isN = Object.isNumber, isR = Object.isRegExp, isF = Object.isFunction;
	

	//Close modal on escape

	$(document).keydown(function (e) {
		var code = e.keyCode, $f, m;
		if (false!==isOpen && (code ===13 || code === 27)) {
			m = isOpen.data("modal");
			$f = m.form;
			if (code == 27 && ( m.esc || Object.equal($f.data("my").initial, $f.my("data")) ) ) {
				isOpen.modal(true);
				return false;
			}
			else if (code == 13 && m.enter ) {
				(function($f){
					$f.modal();
				}).fill(isOpen).delay(50);
				return false;
			}
		}

	});

	// - - - - - - - - - - - - - - - - - -

	function _convert (o, obj, ovl, width0) {
		var h, w,h0,w0,text,$i,width;
		// $ image
		if (typeof obj == "object" && obj.jquery) {
			if (obj.is("img")) {
				$i = obj;
				text = obj.attr("alt") || obj.attr("title") || obj.data("text")||"";
				w = $i[0].naturalWidth || $i[0].width;
				h = $i[0].naturalHeight || $i[0].height;
				if (h<1) h=1;
				if (w<1) w=1;
				w0=$(window).width()-90;
				h0=$(window).height()-90;
				if (h0<h) w = (w*(h0/h))|0, h=h0;
				if (w0<w) w=w0, h=(h*(w0/w))|0;
				width=w<300?300:w;
				$E(o, {
					source:"image",
					manifest:{
						init: function($o){
							$o.html(this.HTML);
							$o.on("click.my","img:eq(0)", function(){
								$o.trigger("cancel");
							});
						},
						HTML:'<img src="" class="db" style="max-width:'+w+'px;max-height:'+h+'px">'
							+'<h4 class="mt10"></h4>',
						ui:{
							"img:eq(0)":"img",
							"h4":{
								bind:"text",
								css:{hide:function(d,v){return !v}}
							}
						}
					},
					data:{img:$i.attr("src"),text:text},
					esc:true,
					screen:true,
					width:width0||width,
					focus:false,
					global:true,
					z:"1995"
				}, ovl);
			}
		}

		// $.my form
		else if (isO(obj) && obj.manifest) {
			$E(o, obj, ovl);
		}

		//plain html
		else if (isS(obj)) {
			$E(o, {
				source:"html",
				manifest:{
					init: function($o){ $o.html(this.HTML); },
					HTML:obj,
					ui:{ "div:eq(0)":function(){} }
				},
				data:{},
				esc:true,
				focus:false,
				width:width0
			}, ovl);
		}

		else return null;

		return o;
	}


	// - - - - - - - - - - - - - - - - - -

	root.modal = function modal (obj, done0, w0) {
		var o = {},
			$r = $(parent), pi,
			$o=$r.find(">.my-modal-proxy"),
			ovl = {
				global:true,
				screen:true,
				done:isF(done0)?done0:undefined,
				z:"1995"
			};
		if (!isB(obj) && null!=obj) {
			pi = $.Deferred();

			if (!_convert(o, obj, ovl, w0)) {
				return pi.reject("Invalid data").promise();
			}

			if (isOpen) { return  pi.reject("Locked").promise(); }
			else {
				if (!$o.size()) {
					$o = $('<div class="my-modal-proxy"></div>').prependTo($r);
					$o.css({position:"absolute",top:"0",left:"0",margin:"0",padding:"0",width:"1px",height:"0"});
				}

				return $o.modal(o);
			}

		} else {
			return $o.modal(obj);
		}
	}

	// - - - - - - - - - - - - - - - - - -


	root.modal.loading = function (onoff) {
		$(parent).find(">.my-modal").toggleClass("my-modal-loading",!!onoff);
	}

	root.modal.parent = function (s) {
	// sets parent DOM node selector for $.my.modal
		if (!s || !$(s).size()) return $(parent);
		parent = s;
	}

	root.modal.parentBack = function (s) {
		// sets parent DOM node selector for $.my.modal background
		if (!s || !$(s).size()) return $(parentBack||parent);
		parentBack = s;
	}

	root.modal.visible = function () {return !!isOpen;}

	if (!$.my) $.my={};
	$.my.modal = root.modal;


	// ###############################
	// Extend jQuery with modal plugin

	$.fn.modal = function (obj0, done0, width0) {
		var pi = $.Deferred(), o={},
			$m, $f, $o = this, $r, $bg, $cl, $nose, padx=0, pady=0,
			done = isF(done0)?done0:function(){ return false; },
			obj = isO(obj0)?obj0:{},
			m = $o.data("modal"),
			md, stop;

		$E($o, pi.promise());

		// check if this already has modal

		if (m) {
			if (obj0==null || isB(obj0)) {

				// ##### CLOSE MODAL ##########

				$f = m.form;
				$bg = m.bg; $r = m.root; done = m.done;
				md = $f.my("data");
				stop = false;

				if (!obj0) {
					// check if we can close
					try{
						stop = done ($f.my("valid")?null:$f.my("errors"), md);
					}catch(e){}
					if (!stop) {
						_remove();
						$o.removeData("modal");
						// async resolve
						(function () {
							if (M[m.cid]) M[m.cid].resolve(md);
							delete M[m.cid];
							m=null;
						}).delay(0);
					}
				} else {
					// force close
					try {done(null, null);} catch(e){}
					_remove();
					$o.removeData("modal");
					if (M[m.cid]) M[m.cid].reject("Cancelled");
					delete M[m.cid];
					m=null;
				}

				return $o;


			} else if (obj) {
				// reinit is not allowed
				_f("Locked");
				return $o;
			}
		}

		// check if $o is visble
		if (!$o.is(":visible")) {
			_f("Object must be visible");
			return $o;
		}

		// convert
		if (!(obj = _convert(o, obj0, {}))) {
			_f("Invalid data");
			return $o;
		}

		// check if fullscreen opened
		if (obj.global && isOpen) {
			_f("Locked");
			return $o;
		}


		// ##### NEW MODAL ##########

		m=$E({
			type:"DOM", source:"manifest",
			form:null,			// $obj of the form
			modal:null,			// $obj of the modal wrapper
			root:null,			// $obj, modal is appended to
			bgroot:null,		// $obj, root for bg
			caller:$o,			// $obj modal is linked with
			
			manifest:{}, 
			data:{},

			global:false,
			screen: false,
			drag:false,
			focus:true,
			close:true,
			silent:true,
			esc: false, 
			enter: false,
			bound:false,
			
			nose: "", 
			width:width0||300, height:null,
			x:"0", y:"0", z:"1901", 
			background:"white",
			css:"",
			animate:200
		}, obj, {
			promise: pi.promise(),
			cid:Number.random(268435456,4294967295).toString(16)
		});
		m.done = isF(m.done)? m.done:done;

		//parse align
		if (isS(m.align) && m.align) {
			m.x = (m.align.match(/(left|right):\-?\d+(\.\d+)?(%|px)?/g)||["0"])[0];
			m.y = (m.align.match(/(top|bottom):\-?\d+(\.\d+)?(%|px)?/g)||["0"])[0];
		}

		//refine width
		m.width=1*($.my.f.getref(
			isS(m.manifest)?$.my.cache(m.manifest):m.manifest,
			"params.width"
		) || m.width );

		// guess if $o is ctrl, form or just dom node
		// find parent container

		m.type = "DOM";
		if ($o.hasClass("my-form")) {
			m.type = "form";
			m.root = m.root || $o;				//itself
		}
		else if ($o.data("my")) {
			m.type = "control";
			m.root = m.root || $o.my().root;	// parent form
		}
		else {
			m.root = m.root || $o.parents(".my-form").eq(0);
			if (!m.root.size()) m.root = $(parent); // global parent
		}

		if (m.global) {
			m.root = $(parent);
			m.bgroot = $(parentBack||parent);
		} else m.bgroot = m.root;

		$r = m.root;
		if (!$r.data("modals")) $r.data("modals",{});


		// calculate z-index


		_measure();

		// ##### Create modal DOM wrapper #####

		// create wrappers if none defined
		$m= $('<div class="my-modal my-modal-'+ (m.global?"fullscreen ":"overlay ")
			+ m.css + (m.nose?" nose-"+ m.nose:"")
			+'"></div>').prependTo(m.root);
		$m.addClass("my-modal-"+ m.cid);

		padx=$m.outerWidth();
		pady = $m.outerHeight();
		$m.hide();

		//rebuild modal form obj
		$m.html('<div class="my-modal-form"></div>');
		$f = $m.find(".my-modal-form");

		// close btn
		if (m.close) {
			$cl = $(isS(m.close)? m.close:'<div class="my-modal-close" title="Close">×</div>')
				.prependTo($m).on("click.my",function () {$o.modal(true);});
			$cl.css({"z-index":((m.z+"").to(1)==="+"?"+":"")+(m.z*1+1)});
		}
		

		$bg = m.bgroot.find(">.my-modal-screen");
		if (m.screen)  {
			if (!$bg.size()) {
				$bg = $('<div class="my-modal-screen" style="display:none;"></div>')
					.prependTo(m.root);

			}

			if (m.esc) $bg.on("click.my"+ m.cid, function () { $o.modal(true); });
		}

		// mount data
		$o.data("modal", m);

		// silent
		if (m.silent) $m.on("change.my", function(){ return false; })

		// position
		$m.css({
			display:"block",
			height:"none",
			opacity:"0.005",
			"z-index": m.z,
			width:"auto"
		});

		if (!m.global) $m.css({
			position: "absolute",
			left: m.pos.vx+"px",
			top: m.pos.vy+"px",
			display:"block",
			height:"none",
			opacity:"0.005",
			"z-index": m.z,
			width:"auto"
		});
		else $m.css({
			position: "fixed",
			left:"50%",
			top: m.pos.vy+"px",
			display:"block",
			height:"none",
			opacity:"0.005",
			"z-index": m.z,
			width:"auto",
			"margin-left":"-"+((m.width+padx)/2).round(0)+"px"
		});

		// try to init form

		$f.my(m.manifest, m.data).then(function () {
			var $img, $i, i, focus, ui;
			//success
			$E(m,{
				form: $f,
				bg:$bg,
				cancel: function(){$o.modal(true)},
				commit: function(){$o.modal()}
			});
			$m.data("modal",m);

			// adjust form
			m.height = $m.outerHeight();
			if (m.source !== "manifest") m.width = $m.width();
			_measure();
			$m.css({top:m.pos.vy+"px"});
			_adjust(true);

			// remember cid in parent form root
			$r.data("modals")[m.cid] = m;

			// memoize modal promise
			M[m.cid] = pi;

			// bind event listeners
			$f.bind("commit.my", function(){
				m.commit.delay(50);
				return false;
			}).bind("cancel.my", function(){
				m.cancel.delay(50);
				return false;
			});

			$m.bind("layout.my", function(){
				_adjust();
			}.debounce(50));

			// fullscreen tuneups
			if (m.global) {
				isOpen = $o;
				$("body").css({overflow:"hidden"});
			}

			// esc and enter monitors
			if (!m.global && (m.esc || m.enter)) {
				$f.bind("keydown.my", function(e) {
					var code = e.keyCode;
					if (code == 27 && m.esc) {
						m.cancel();
						return false;
					}
					else if (code == 13 && m.enter && !($(e.target).is("textarea"))){
						m.commit.delay(50);
						return false;
					}
				})
			}

			// autofocus
			if (m.focus===true) {
				focus = false;
				ui = m.manifest.ui;
				for (i in ui) {
					if (!focus) {
						$i = $f.find(i);
						if ($i.size() && $i.is("input, textarea")) {
							focus = true; $i.focus();
						}
					}
				}
			}
			else if (isS(m.focus)) $f.find(m.focus).focus();

			//If we have images, count them and reheight on load
			$img = $f.find("img").filter(function () {return $(this).attr("src")!="";});
			if ($img.size()) {
				var _imgdone = function(){
					if (m.source !== "manifest") $m.css({width:"auto"});
					_adjust();
				}.after($img.size());
				$img.each(function () {$(this).bind("load", _imgdone);});
			}

			// Draggable
			if (m.drag && $.fn.draggable) {
				if (!isS(m.drag)) $m.draggable();
				else $m.draggable({handle: m.drag});
			}

			pi.notify("Ready");
		})
		.fail(function (err){
			_remove();
			$o.data("modal", null);
			pi.reject(err);
		});

		return $o;


		//### Helpers

		function _measure(){
			// measure $o, its pos
			// and modal offsets rel to container

			var W = window, h, w,
				isfs = !!m.global,
				ro = $r.offset(), oo = $o.offset();

			m.pos = {
				px: ro.left, py: ro.top,
				pw: $r.outerWidth(), ph: $r.outerHeight(),

				ox: oo.left, oy: oo.top,
				ow: $o.outerWidth(), oh: $o.outerHeight(),

				ww:w, wh:h
			};
			//if (m.width> m.pos.pw) m.width= m.pos.pw;

			// calculate offsets
			var dx = (m.x.match(/\-?\d+(\.\d+)?/)||[0])[0]* 1,
				dy = (m.y.match(/\-?\d+(\.\d+)?/)||[0])[0]* 1,
				sx = m.x.has("left")?-1: m.x.has("right")?1: 0,
				sy = m.y.has("top")?-1: m.y.has("bottom")?1: 0,
				vx = m.pos.ox + m.pos.ow/2 - m.pos.px,
				vy = m.pos.oy + m.pos.oh/2 - m.pos.py;

			if (isfs) {
				m.pos.wh = h = W.innerHeight || $(W).height();
				m.pos.ww = w = W.innerWidth || $(W).width();
				vx = w/2;
				vy = h/2.5;
			}
			dx = m.x.has("%")? m.pos.ow/100*dx:dx;
			dy = m.y.has("%")? m.pos.oh/100*dy:dy;

			m.pos.pix = vx; m.pos.piy = vy;
			

			vx = vx + sx*(m.pos.ow/2)
				+ dx*(sx>0?-1:1)
				- (m.width+padx)*(sx+1)/2;

			if (isfs) {
				vy = (h - m.height-20)/3;
				if (vy<10) vy=10;
			} else {
				vy = vy + sy*(m.pos.oh/2)
					+ dy*(sy>0?-1:1)
					- ((m.height||0)/*+pady*/)*(sy+1)/2;
			}

			vx = vx.round(1); vy = vy.round(1);

			m.pos.vx = vx; m.pos.vy = vy;
			
			if (m.bound!==false && !m.global) {
				var mb = (isN(m.bound)?m.bound:0).clamp(-100,100);
				
				//width
				
				if (m.pos.pw - 2*mb < m.width+padx) {
					// we are wider
					m.pos.vx = -(m.width+padx-m.pos.pw)/2
				}
				else if (m.pos.vx+m.width+padx > m.pos.pw-mb) {
					// we went over right
					m.pos.vx =  m.pos.pw-mb - m.width-padx;
				} else if (m.pos.vx<mb) {
					// we went under left
					m.pos.vx = mb;
				}
				
				// height
				if (m.pos.ph-2*mb < m.height) {
					// we are taller
					m.pos.vy = mb;
					m.height = m.pos.ph-2*mb;
				}
				else if (m.pos.vy+m.height > m.pos.ph-mb) {
					// we went over bottom
					m.pos.vy =  m.pos.ph-mb - m.height;
				} else if (m.pos.vy<mb) {
					// we went under top
					m.pos.vy = mb;
				}
			}
			
		}

		// - - - - - - - - - - - - - - - - - -

		function _adjust (skipMeasure){
			//adjust modal position,
			if (!skipMeasure) {
				m.height  =  $m.outerHeight();
				if (m.source !== "manifest") m.width = $m.width();
				_measure();
			}
			$m.css({
				width: (m.width+padx)+"px",
				display:"block"
			});

			if (!m.global) {
				$m.css({ left: m.pos.vx+"px"});
				if (m.nose) {
					if (!$("style#my-modal-style-"+m.cid).size()){
						$m.append('<style id="my-modal-style-'+m.cid+'"></style>');
					}
					var h = "", $s = $("style#my-modal-style-"+m.cid);
					if (m.nose=="top" || m.nose=="bottom") {
						h+='div.my-modal-'+m.cid+'.nose-'+m.nose+':before {left:'
							+ (m.pos.ox - m.pos.px + m.pos.ow/2 - m.pos.vx)
							+'px!important;}';
						$s.text(h);
					}
					if (m.nose=="left" || m.nose=="right") {
						h+='div.my-modal-'+m.cid+'.nose-'+m.nose+':before {top:'
							+ (m.pos.oy - m.pos.py + m.pos.oh/2 - m.pos.vy)
							+'px!important;}';
						$s.text(h);
					}
				}
			}
			else $m.css({
				left:"50%",
				"margin-left":"-"+((m.width+padx)/2).round(0)+"px"
			});


			if (m.screen) {
				if (!m.global) $bg.css({
					top:0, left:0, position:"absolute",
					width: m.pos.pw+"px",
					height: m.pos.ph+"px",
					display:"block",
					background:isS(m.screen)? m.screen:'rgba(40,80,120,0.5)',
					"z-index":m.z-1
				});
				else {
					$bg.css({
						top:0, left:0,
						width:(m.pos.ww*2)+"px",
						height:(m.pos.wh*2)+"px",
						display:"block",
						position:"fixed",
						"z-index":m.z-1
					});
					if (isS(m.screen)) $bg.css({
						background:m.screen? m.screen:'rgba(30,65,100,0.8)'
					});
				}
			}
			else if ($bg.size()) $bg.hide();

			if (m.height> m.pos.wh) {
				$m.height(m.pos.wh-30);
				$f.css({"overflow-y":$.browser.webkit?"overlay":"scroll"});
			} else {
				$f.css({"overflow-y":"none"});
			}

			$m.animate({top: m.pos.vy+"px", opacity:"1"}, m.animate);
		}

		// - - - - - - - - - - - - - - - - - -

		function _remove(){
			try { $f.my("remove"); } catch(e){}
			$r.data("modals")[m.cid] = null;
			$f.parent().unbind(".my").remove();
			$bg.off(".my"+ m.cid);
			if (m.screen) {
				(function(g){
					if (!g || !isOpen) $bg.hide();
				}).delay(50, m.global); // curry m.global
			}
			if (m.global) {
				isOpen = false;
				$("body").css({overflow:"auto"});
			}
		}

		// - - - - - - - - - - - - - - - - - -

		function _f(msg) {
			try { done(null, null); } catch(e) {}
			(function () { pi.reject(msg); }).delay(0);
		}

	};

})(jQuery);


/*jQuery Tags 0.4*/
!function(e){function t(e,t){var n,r=0,i=e.data("tags");if(i.data=[],t.length){var a=t.unique();for(i.tv={},e.find(".tag.active").trigger("click"),n=0;n<a.length;n++)i.ti[a[n]]&&(i.$t[a[n]].trigger("click"),r+=1)}r||(null!=i.empty?e.find(".tags-empty").trigger("click"):e.find(".tag.active").trigger("click"))}var n={init:function(n){var r,i,a,s,o,u,c,l,d,f,h=e(this),m=[],p=[],g={},v={},y={},b={data:[],tags:[],disabled:!1,event:"change",tagcss:"tag pseudolink",template:function(e){return('<span class="'+b.tagcss+' {css}" data-value="{value}">{name}</span>').assign(e)},empty:null,tagshim:" ",groupshim:" ",silent:!1},k=e.type(n),w=null;for("object"==k?e.extend(!0,b,n):"array"==k&&(b.tags=n.slice(0)),h.data("tags")&&(b.data=h.data("tags").data.slice(0)),null!=b.empty&&(c=b.empty,k=e.type(c),/^nu|^str/.test(k)?(u="",o=String(c)):"object"==k&&(o=Object.keys(c)[0],u=c[o]),"string"==typeof u&&(w=u,g[u]={name:o,i:null,j:null,value:u,css:"tags-empty"})),i=b.tags,o=0;o<i.length;o++){for(c=i[o],s=[],a=[],k=e.type(c),/^num|^str|^ob/.test(k)?a=[c]:"array"==k&&(a=c.slice(0).unique()),u=0;u<a.length;u++)if(l=a[u],d=e.type(l),/^num|^str/.test(d))s.push({name:String(l),value:String(l)});else if("object"==d)for(f in l)s.push({name:String(f),value:String(l[f])});s.length&&p.push(s.slice(0))}for(o=0;o<p.length;o++){for(s=[],u=0;u<p[o].length;u++)c=p[o][u].value,g[c]||(g[c]=!0,s.push(p[o][u]));s.length&&m.push(s.slice(0))}for(o=0;o<m.length;o++)for(u=0;u<m[o].length;u++)c=m[o][u].value,g[c]={name:m[o][u].name,i:o,j:u,value:c,css:"tags-row"+o};for(r="",null!=w&&(r+=b.template(g[w])+b.groupshim),o=0;o<m.length;o++)for(o&&(r+=b.groupshim),u=0;u<m[o].length;u++)u&&(r+=b.tagshim),r+=b.template(g[m[o][u].value]);return h.html(r),h.off(".tag"),h.on("click.tag",".tag",function(){var t,n,r=e(this),i=r.data("value");if(!b.disabled){if(r.is(".tags-empty"))h.find(".tag").removeClass("active"),v={},w&&(v[w]=!0),r.addClass("active");else{if(r.is(".active"))r.removeClass("active"),v[i]=!1;else{for(t=g[i].i,h.find(".tag.tags-row"+t).removeClass("active"),n=0;n<m[t].length;n++)v[m[t][n].value]=!1;r.addClass("active"),v[i]=!0,w&&(v[w]=!1)}Object.values(v).compact(!0).length?h.find(".tags-empty").removeClass("active"):(v={},w&&(v[w]=!0),h.find(".tags-empty").addClass("active"))}b.data=[];for(t in v)v[t]&&b.data.push(t);h.data("value",b.data),b.silent||h.trigger("change")}}),h.find(".tag").each(function(){var t=e(this),n=t.data("value");y[n]=t}),e.extend(b,{ti:g,tv:v,$t:y}),h.addClass("my-tags").data("tags",b),b.silent=!0,t(h,b.data),b.silent=!1,h},disable:function(t){void 0!==t&&(e(this).data("tags").disabled=!!t)},data:function(n){var r=e(this).data("tags"),i=n;return"string"==typeof i&&(i=[n]),r&&i&&"array"==e.type(i)&&!r.disabled?(r.silent=!0,t(e(this),i),r.silent=!1,e(this).data("tags").data):r?r.data:[]}};e.fn.tags=function(t){return n[t]?n[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist in jQuery.tags"):n.init.apply(this,arguments)}}(jQuery);

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