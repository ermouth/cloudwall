/* CloudWall General 1.0.2
* — Sugar 1.4.1
* — jQuery 1.11.0 + Migrate 1.2.1
* — jQuery.my 1.1.6
* — jQuery.tags 0.4
* – cw.lib 1.0.1
*/


/*Sugar 1.4.1*/
!function(){function t(t,e,n){var o=n||i(t);return o==="[object "+e+"]"}function e(e){var n="Array"===e&&ai.isArray||function(n,i){return t(n,e,i)};return wi[e]=n,n}function n(e,n){var i=function(i){return y(i)?t(i,n):typeof i===e};return wi[n]=i,i}function i(t){return pi.call(t)}function o(){r(si),C(Ci,function(t,e){r(fi[e])})}function r(t){t.SugarMethods||(u(t,"SugarMethods",{}),s(t,!1,!0,{extend:function(e,n,i){s(t,i!==!1,n,e)},sugarRestore:function(){return l(this,t,arguments,function(t,e,n){u(t,e,n.method)})},sugarRevert:function(){return l(this,t,arguments,function(t,e,n){n.existed?u(t,e,n.original):delete t[e]})}}))}function s(t,e,n,i){var o=e?t.prototype:t;r(t),C(i,function(i,r){var s=o[i],a=v(o,i);Ai(n)&&s&&(r=c(s,r,n)),n===!1&&s||u(o,i,r),t.SugarMethods[i]={method:r,existed:a,original:s,instance:e}})}function a(t,e,n,i,o){var r={};i=xi(i)?i.split(","):i,i.forEach(function(t,e){o(r,t,e)}),s(t,e,n,r)}function l(t,e,n,i){var o=0===n.length,r=h(n),s=!1;return C(e.SugarMethods,function(e,n){(o||-1!==r.indexOf(e))&&(s=!0,i(n.instance?t.prototype:t,e,n))}),s}function c(t,e,n){return function(){return n.apply(this,arguments)?e.apply(this,arguments):t.apply(this,arguments)}}function u(t,e,n){gi?si.defineProperty(t,e,{value:n,configurable:!0,enumerable:!1,writable:!0}):t[e]=n}function h(t,e,n){var i,o=[],r=n||0;for(i=t.length;i>r;r++)o.push(t[r]),e&&e.call(t,t[r],r);return o}function d(t,e,n){var i=t[n||0];return Ti(i)&&(t=i,n=0),h(t,e,n)}function f(t){if(!t||!t.call)throw new TypeError("Callback is not callable")}function p(t){return t!==ri}function m(t){return t===ri}function g(t,e){return!w(t)&&e in t}function v(t,e){return!!t&&mi.call(t,e)}function y(t){return!!t&&("object"==typeof t||vi&&Ei(t))}function w(t){var e=typeof t;return null==t||"string"===e||"number"===e||"boolean"===e}function b(t,e){e=e||i(t);try{if(t&&t.constructor&&!v(t,"constructor")&&!v(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}return!!t&&"[object Object]"===e&&"hasOwnProperty"in t}function C(t,e){var n;for(n in t)if(v(t,n)&&e.call(t,n,t[n],t)===!1)break}function S(t,e){for(var n=0;t>n;n++)e(n)}function k(t,e){return C(e,function(n){t[n]=e[n]}),t}function x(t){return w(t)&&(t=si(t)),yi&&xi(t)&&T(t),t}function T(t){for(var e,n=0;e=t.charAt(n);)t[n++]=e}function R(t){k(this,x(t))}function E(t,e,n){var i=Oi(10,Di(e||0));return n=n||Hi,0>e&&(i=1/i),n(t*i)/i}function A(t){return t>=Li&&$i>=t||t>=Bi&&zi>=t}function _(){var t,e;for(e=0;9>=e;e++)t=D(e+Bi),Vi+=t,Ui[t]=D(e+Li);Ui[ji]="",Ui[Wi]=Fi,Ui[Fi]=Fi,_i=li("["+Vi+Wi+ji+Fi+"]","g")}function D(t){return ui.fromCharCode(t)}function O(){return"	\n\f\r   ᠎             \u2028\u2029　﻿"}function P(t,e){for(var n="",t=t.toString();e>0;)1&e&&(n+=t),(e>>=1)&&(t+=t);return n}function N(t,e){var n,i;return n=t.replace(_i,function(t){var e=Ui[t];return e===Fi&&(i=!0),e}),i?parseFloat(n):parseInt(n,e||10)}function H(t,e,n,i){var o=Di(t).toString(i||10);return o=P("0",e-o.replace(/\.\d+/,"").length)+o,(n||0>t)&&(o=(0>t?"-":"+")+o),o}function M(t){if(t>=11&&13>=t)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function I(t,e){function n(t,n){(t||e.indexOf(n)>-1)&&(i+=n)}var i="";return e=e||"",n(t.multiline,"m"),n(t.ignoreCase,"i"),n(t.global,"g"),n(t.sticky,"y"),i}function L(t){return xi(t)||(t=ui(t)),t.replace(/([\\/\'*+?|()\[\]{}.^$])/g,"\\$1")}function $(t,e){return t["get"+(t._utc?"UTC":"")+e]()}function B(t,e,n){return t["set"+(t._utc&&"ISOWeek"!=e?"UTC":"")+e](n)}function z(t,e){var n,i,o,r,s,a,l,c,u=typeof t;if("string"===u)return t;if(o=pi.call(t),n=b(t,o),i=Ti(t,o),null!=t&&n||i){if(e||(e=[]),e.length>1)for(l=e.length;l--;)if(e[l]===t)return"CYC";for(e.push(t),r=t.valueOf()+ui(t.constructor),s=i?t:si.keys(t).sort(),l=0,c=s.length;c>l;l++)a=i?l:s[l],r+=a+z(t[a],e);e.pop()}else r=1/t===-1/0?"-0":ui(t&&t.valueOf?t.valueOf():t);return u+o+r}function F(t,e){return t===e?0!==t||1/t===1/e:W(t)&&W(e)?z(t)===z(e):!1}function W(t){var e=i(t);return bi.test(e)||b(t,e)}function j(t,e,n){var i,o=t.length,r=e.length,s=e[r-1]!==!1,a=r>(s?1:2);return a?(i=[],h(e,function(e){return Si(e)?!1:void i.push(V(t,o,e,s,n))}),i):V(t,o,e[0],s,n)}function V(t,e,n,i,o){return i&&(n%=e,0>n&&(n=e+n)),o?t.charAt(n):t[n]}function U(t,e){a(e,!0,!1,t,function(t,e){t[e+("equal"===e?"s":"")]=function(){return si[e].apply(null,[this].concat(h(arguments)))}})}function G(t,e,n,i){var o=t.length,r=-1==i,s=r?o-1:0,a=K(n,s);for(0>a&&(a=o+a),(!r&&0>a||r&&a>=o)&&(a=s);r&&a>=0||!r&&o>a;){if(t[a]===e)return a;a+=i}return-1}function q(t,e,n,i){var o,r,s=t.length,a=0,l=p(n);if(f(e),0==s&&!l)throw new TypeError("Reduce called on empty array with no initial value");for(l?o=n:(o=t[i?s-1:a],a++);s>a;)r=i?s-a-1:a,r in t&&(o=e(o,t[r],r,t)),a++;return o}function K(t,e){return isNaN(t)?e:parseInt(t>>0)}function Y(t){if(0===t.length)throw new TypeError("First argument must be defined")}function X(){var t=O().match(/^\s+$/);try{ui.prototype.trim.call([1])}catch(e){t=!1}s(ui,!0,!t,{trim:function(){return this.toString().trimLeft().trimRight()},trimLeft:function(){return this.replace(li("^["+O()+"]+"),"")},trimRight:function(){return this.replace(li("["+O()+"]+$"),"")}})}function J(){var t=new ci(ci.UTC(1999,11,31)),e="1999-12-31T00:00:00.000Z",n=t.toISOString&&t.toISOString()===e;a(ci,!0,!n,"toISOString,toJSON",function(t,e){t[e]=function(){return H(this.getUTCFullYear(),4)+"-"+H(this.getUTCMonth()+1,2)+"-"+H(this.getUTCDate(),2)+"T"+H(this.getUTCHours(),2)+":"+H(this.getUTCMinutes(),2)+":"+H(this.getUTCSeconds(),2)+"."+H(this.getUTCMilliseconds(),3)+"Z"}})}function Q(t){return t=li(t),function(e){return t.test(e)}}function Z(t){var e=t.getTime();return function(t){return!(!t||!t.getTime)&&t.getTime()===e}}function te(t){return function(e,n,i){return e===t||t.call(this,e,n,i)}}function ee(t){return function(e,n,i){return e===t||t.call(i,n,e,i)}}function ne(t,e){var n={};return function(i,o,r){var s;if(!y(i))return!1;for(s in t)if(n[s]=n[s]||oe(t[s],e),n[s].call(r,i[s],o,r)===!1)return!1;return!0}}function ie(t){return function(e){return e===t||F(e,t)}}function oe(t,e){if(w(t));else{if(Ei(t))return Q(t);if(Ri(t))return Z(t);if(Ai(t))return e?ee(t):te(t);if(b(t))return ne(t,e)}return ie(t)}function re(t,e,n,i){return e?e.apply?e.apply(n,i||[]):Ai(t[e])?t[e].call(t):t[e]:t}function se(t,e,n,i){var o,r,s=+t.length;for(0>n&&(n=t.length+n),r=isNaN(n)?0:n,i===!0&&(s+=r);s>r;){if(o=r%t.length,!(o in t))return ae(t,e,r,i);if(e.call(t,t[o],o,t)===!1)break;r++}}function ae(t,e,n){var i,o=[];for(i in t)le(t,i)&&i>=n&&o.push(parseInt(i));return o.sort().each(function(n){return e.call(t,t[n],n,t)}),t}function le(t,e){return e in t&&ce(e)==e&&4294967295!=e}function ce(t){return t>>>0}function ue(t,e,n,i,o,r){var s,a,l;return t.length>0&&(l=oe(e),se(t,function(e,n){return l.call(r,e,n,t)?(s=e,a=n,!1):void 0},n,i)),o?a:s}function he(t,e){var n,i=[],o={};return se(t,function(r,s){n=e?re(r,e,t,[r,s,t]):r,ye(o,n)||i.push(r)}),i}function de(t,e,n){var i=[],o={};return e.each(function(t){ye(o,t)}),t.each(function(t){var e=z(t),r=!W(t);ve(o,e,t,r)!==n&&(we(o,e,t,r),i.push(t))}),i}function fe(t,e,n){e=e||1/0,n=n||0;var i=[];return se(t,function(t){Ti(t)&&e>n?i=i.concat(fe(t,e,n+1)):i.push(t)}),i}function pe(t){return g(t,"length")&&!xi(t)&&!b(t)}function me(t){return g(t,"length")&&("[object Arguments]"===i(t)||!!t.callee)}function ge(t){var e=[];return h(t,function(t){e=e.concat(t)}),e}function ve(t,e,n,i){var o=e in t;return i&&(t[e]||(t[e]=[]),o=-1!==t[e].indexOf(n)),o}function ye(t,e){var n=z(e),i=!W(e),o=ve(t,n,e,i);return i?t[n].push(e):t[n]=e,o}function we(t,e,n,i){var o,r=0;if(i)for(o=t[e];r<o.length;)o[r]===n?o.splice(r,1):r+=1;else delete t[e]}function be(t,e,n,i){var o,r,s,a,l=[],c="max"===n,u="min"===n,h=ai.isArray(t);for(r in t)if(t.hasOwnProperty(r)){if(o=t[r],a=re(o,e,t,h?[o,parseInt(r),t]:[]),m(a))throw new TypeError("Cannot compare with undefined");a===s?l.push(o):(m(s)||c&&a>s||u&&s>a)&&(l=[o],s=a)}return h||(l=fe(l,1)),i?l:l[0]}function Ce(t,e){var n,i,o,r,s,a,l=0,c=0,u=ai[Ki],h=ai[Yi],d=ai[Xi],f=ai[qi],p=ai[Ji];t=Se(t,u,h),e=Se(e,u,h);do o=ke(t,l,d),r=ke(e,l,d),n=xe(o,f),i=xe(r,f),-1===n||-1===i?(n=t.charCodeAt(l)||null,i=e.charCodeAt(l)||null,p&&A(n)&&A(i)&&(n=N(t.slice(l)),i=N(e.slice(l)))):(s=o!==t.charAt(l),a=r!==e.charAt(l),s!==a&&0===c&&(c=s-a)),l+=1;while(null!=n&&null!=i&&n===i);return n===i?c:n-i}function Se(t,e,n){return xi(t)||(t=ui(t)),n&&(t=t.toLowerCase()),e&&(t=t.replace(e,"")),t}function ke(t,e,n){var i=t.charAt(e);return n[i]||i}function xe(t,e){return t?e.indexOf(t):null}function Te(){var t=ai.prototype.map,e=function(){var t=arguments;return t.length>0&&!Ai(t[0])};a(ai,!0,e,"every,all,some,filter,any,none,find,findIndex",function(t,e){var n=ai.prototype[e];t[e]=function(t){var e=oe(t);return n.call(this,function(t,n){return e(t,n,this)})}}),s(ai,!0,e,{map:function(e){return t.call(this,function(t,n){return re(t,e,this,[t,n,this])})}})}function Re(){var t="AÁÀÂÃĄBCĆČÇDĎÐEÉÈĚÊËĘFGĞHıIÍÌİÎÏJKLŁMNŃŇÑOÓÒÔPQRŘSŚŠŞTŤUÚÙŮÛÜVWXYÝZŹŻŽÞÆŒØÕÅÄÖ",e="AÁÀÂÃÄ,CÇ,EÉÈÊË,IÍÌİÎÏ,OÓÒÔÕÖ,Sß,UÚÙÛÜ";ai[qi]=t.split("").map(function(t){return t+t.toLowerCase()}).join("");var n={};se(e.split(","),function(t){var e=t.charAt(0);se(t.slice(1).split(""),function(t){n[t]=e,n[t.toLowerCase()]=e.toLowerCase()})}),ai[Ji]=!0,ai[Yi]=!0,ai[Xi]=n}function Ee(t){return si.keys(x(t))}function Ae(t,e){a(si,!1,!0,t,function(t,n){t[n]=function(t,i,o){var r,s,a=Ee(t);return e||(s=oe(i,!0)),r=ai.prototype[n].call(a,function(n){var o=t[n];return e?re(o,i,t,[n,o,t]):s(o,n,t)},o),Ti(r)&&(r=r.reduce(function(e,n){return e[n]=t[n],e},{})),r}}),U(t,R)}function _e(){ai[Gi]=Ce}function De(t){k(this,t),this.compiledFormats=mo.concat()}function Oe(t,e){var n;if(xi(t)||(t=""),n=wo[t]||wo[t.slice(0,2)],e===!1&&!n)throw new TypeError("Invalid locale.");return n||io}function Pe(t,e){function n(t){var e=c[t];xi(e)?c[t]=e.split(","):e||(c[t]=[])}function i(t,e){return t=t.split("+").map(function(t){return t.replace(/(.+):(.+)$/,function(t,e,n){return n.split("|").map(function(t){return e+t}).join("|")})}).join("|"),t.split("|").forEach(e)}function o(t,e,n){var o=[];c[t].forEach(function(t,r){e&&(t+="+"+t.slice(0,3)),i(t,function(t,e){o[e*n+r]=t.toLowerCase()})}),c[t]=o}function r(t,e,n){var i="\\d{"+t+","+e+"}";return n&&(i+="|(?:"+Me(c.numbers)+")+"),i}function s(){var t=["-?\\d+"].concat(c.articles);return c.numbers&&(t=t.concat(c.numbers)),Me(t)}function a(t,e){c[t]=c[t]||e}function l(){var t=[];c.modifiersByName={},c.modifiers.push({name:"day",src:"yesterday",value:-1}),c.modifiers.push({name:"day",src:"today",value:0}),c.modifiers.push({name:"day",src:"tomorrow",value:1}),c.modifiers.forEach(function(e){var n=e.name;i(e.src,function(i){var o=c[n];c.modifiersByName[i]=e,t.push({name:n,src:i,value:e.value}),c[n]=o?o+"|"+i:i})}),c.day+="|"+Me(c.weekdays),c.modifiers=t}var c,u;return c=new De(e),n("modifiers"),"months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse".split(",").forEach(n),u=!c.monthSuffix,o("months",u,12),o("weekdays",u,7),o("units",!1,8),o("numbers",!1,10),a("code",t),a("date",r(1,2,c.digitDate)),a("year","'\\d{2}|"+r(4,4)),a("num",s()),l(),c.monthSuffix&&(c.month=r(1,2),c.months="1,2,3,4,5,6,7,8,9,10,11,12".split(",").map(function(t){return t+c.monthSuffix})),c.full_month=r(1,2)+"|"+Me(c.months),c.timeSuffixes.length>0&&c.addFormat(ln(ho,c),!1,ao),c.addFormat("{day}",!0),c.addFormat("{month}"+(c.monthSuffix||"")),c.addFormat("{year}"+(c.yearSuffix||"")),c.timeParse.forEach(function(t){c.addFormat(t,!0)}),c.dateParse.forEach(function(t){c.addFormat(t)}),wo[t]=c}function Ne(t,e,n,i){t.compiledFormats.unshift({variant:i,locale:t,reg:li("^"+e+"$","i"),to:n})}function He(t){return t.slice(0,1).toUpperCase()+t.slice(1)}function Me(t){return t.filter(function(t){return!!t}).join("|")}function Ie(){var t=ci.SugarNewDate;return t?t():new ci}function Le(t,e){var n;return y(t[0])?t:ki(t[0])&&!ki(t[1])?[t[0]]:xi(t[0])&&e?[$e(t[0]),t[1]]:(n={},ro.forEach(function(e,i){n[e.name]=t[i]}),[n])}function $e(t,e){var n,i={};return n=t.match(/^(\d+)?\s?(\w+?)s?$/i),n&&(m(e)&&(e=parseInt(n[1])||1),i[n[2].toLowerCase()]=e),i}function Be(t,e,n){var i,o;for(m(n)&&(n=so.length),i=e||0;n>i&&(o=so[i],t(o.name,o,i)!==!1);i++);}function ze(t,e){var n,i,o={};return e.forEach(function(e,r){n=t[r+1],m(n)||""===n||("year"===e&&(o.yearAsString=n.replace(/'/,"")),i=parseFloat(n.replace(/'/,"").replace(/,/,".")),o[e]=isNaN(i)?n.toLowerCase():i)}),o}function Fe(t){return t=t.trim().replace(/^just (?=now)|\.+$/i,""),We(t)}function We(t){return t.replace(oo,function(t,e,n){var i,o,r=0,s=1;return e?t:(n.split("").reverse().forEach(function(t){var e=po[t],n=e>9;n?(i&&(r+=s),s*=e/(o||1),o=e):(i===!1&&(s*=10),r+=s*e),i=n}),i&&(r+=s),r)})}function je(t,e,n,i){function o(t){d.push(t)}function r(){d.forEach(function(t){t.call()})}function s(){var t=c.getWeekday();c.setWeekday(7*(m.num-1)+(t>w?w+7:w))}function a(){var t=f.modifiersByName[m.edge];Be(function(t){return p(m[t])?(g=t,!1):void 0},4),"year"===g?m.specificity="month":("month"===g||"week"===g)&&(m.specificity="day"),c[(t.value<0?"endOf":"beginningOf")+He(g)](),-2===t.value&&c.reset()}function l(){var t;Be(function(e,n,i){if("day"===e&&(e="date"),p(m[e])){if(i>=v)return hn(c),!1;t=t||{},t[e]=m[e],delete m[e]}}),t&&o(function(){c.set(t,!0)})}var c,u,h,d,f,m,g,v,w,b,S;return c=Ie(),d=[],c.utc(i),Ri(t)?c.utc(t.isUTC()).setTime(t.getTime()):ki(t)?c.setTime(t):y(t)?(c.set(t,!0),m=t):xi(t)&&(h=Oe(e),t=Fe(t),h&&C(h.getFormats(),function(n,i){var r=t.match(i.reg);return r?(f=i.locale,m=ze(r,i.to,f),f.cachedFormat=i,m.utc&&c.utc(),m.timestamp?(m=m.timestamp,!1):(i.variant&&!xi(m.month)&&(xi(m.date)||h.hasVariant(e))&&(S=m.month,m.month=m.date,m.date=S),m.year&&2===m.yearAsString.length&&(m.year=Ve(m.year)),m.month&&(m.month=f.getMonth(m.month),m.shift&&!m.unit&&(m.unit=f.units[7])),m.weekday&&m.date?delete m.weekday:m.weekday&&(m.weekday=f.getWeekday(m.weekday),m.shift&&!m.unit&&(m.unit=f.units[5])),m.day&&(S=f.modifiersByName[m.day])?(m.day=S.value,c.reset(),u=!0):m.day&&(w=f.getWeekday(m.day))>-1&&(delete m.day,m.num&&m.month?(o(s),m.day=1):m.weekday=w),m.date&&!ki(m.date)&&(m.date=f.getNumericDate(m.date)),f.matchPM(m.ampm)&&m.hour<12?m.hour+=12:f.matchAM(m.ampm)&&12===m.hour&&(m.hour=0),("offset_hours"in m||"offset_minutes"in m)&&(c.utc(),m.offset_minutes=m.offset_minutes||0,m.offset_minutes+=60*m.offset_hours,"-"===m.offset_sign&&(m.offset_minutes*=-1),m.minute-=m.offset_minutes),m.unit&&(u=!0,b=f.getNumber(m.num),v=f.getUnitIndex(m.unit),g=no.units[v],l(),m.shift&&(b*=(S=f.modifiersByName[m.shift])?S.value:0),m.sign&&(S=f.modifiersByName[m.sign])&&(b*=S.value),p(m.weekday)&&(c.set({weekday:m.weekday},!0),delete m.weekday),m[g]=(m[g]||0)+b),m.edge&&o(a),"-"===m.year_sign&&(m.year*=-1),Be(function(t,e,n){var i=m[t],o=i%1;o&&(m[so[n-1].name]=Hi(o*("second"===t?1e3:60)),m[t]=Ni(i))},1,4),!1)):void 0}),m?u?c.advance(m):(c._utc&&c.reset(),an(c,m,!0,!1,n)):("now"!==t&&(c=new ci(t)),i&&c.addMinutes(-c.getTimezoneOffset())),r(),c.utc(!1)),{date:c,set:m}}function Ve(t){return 100*Hi($(Ie(),"FullYear")/100)-100*Hi(t/100)+t}function Ue(t){t=t.clone();var e=$(t,"Day")||7;return t.addDays(4-e).reset(),1+Ni(t.daysSince(t.clone().beginningOfYear())/7)}function Ge(t){var e,n=Di(t),i=n,o=0;return Be(function(t,r,s){e=Ni(E(n/r.multiplier(),1)),e>=1&&(i=e,o=s)},1),[i,o,t]}function qe(t){var e=Ge(t.millisecondsFromNow());return Ke(t,e)&&(e[0]=Di(t.monthsFromNow()),e[1]=6),e}function Ke(t,e){return 6===e[1]||5===e[1]&&4===e[0]&&t.daysFromNow()>=Ie().daysInMonth()}function Ye(){var t=function(t,e){var n=$(t,"Hours");return Oe(e).ampm[Ni(n/12)]||""};Ze("t",t,1),Ze("tt",t),Ze("T",t,1,1),Ze("TT",t,null,2)}function Xe(){var t=function(t,e){var n=$(t,"Day");return Oe(e).weekdays[n]};Ze("dow",t,3),Ze("Dow",t,3,1),Ze("weekday",t),Ze("Weekday",t,null,1)}function Je(){Qe("mon",0,3),Qe("month",0),Qe("month2",1),Qe("month3",2)}function Qe(t,e,n){var i=function(t,n){var i=$(t,"Month");return Oe(n).months[i+12*e]};Ze(t,i,n),Ze(He(t),i,n,1)}function Ze(t,e,n,i){vo[t]=function(t,o){var r=e(t,o);return n&&(r=r.slice(0,n)),i&&(r=r.slice(0,i).toUpperCase()+r.slice(i)),r}}function tn(t,e,n){vo[t]=e,vo[t+t]=function(t,n){return H(e(t,n),2)},n&&(vo[t+t+t]=function(t,n){return H(e(t,n),3)},vo[t+t+t+t]=function(t,n){return H(e(t,n),4)})}function en(t){var e=t.match(/(\{\w+\})|[^{}]+/g);go[t]=e.map(function(t){return t.replace(/\{(\w+)\}/,function(e,n){return t=vo[n]||n,n}),t})}function nn(t,e,n){var i,o,r,s,a="";for(i=go[e],r=0,o=i.length;o>r;r++)s=i[r],a+=Ai(s)?s(t,n):s;return a}function on(t,e,n,i){var o;return t.isValid()?(Date[e]?e=Date[e]:Ai(e)&&(o=qe(t),e=e.apply(t,o.concat(Oe(i)))),!e&&n?(o=o||qe(t),0===o[1]&&(o[1]=1,o[0]=1),Oe(i).getRelativeFormat(o)):(e=e||"long",("short"===e||"long"===e||"full"===e)&&(e=Oe(i)[e]),go[e]||en(e),nn(t,e,i))):"Invalid Date"}function rn(t,e,n,i,o){var r,s,a,l,c,u,h=0,d=0,f=0;return r=je(e,n,null,o),i>0&&(d=f=i,c=!0),r.date.isValid()?(r.set&&r.set.specificity&&(yo.forEach(function(e){e.name===r.set.specificity&&(h=e.multiplier(r.date,t-r.date)-1)}),u=He(r.set.specificity),(r.set.edge||r.set.shift)&&r.date["beginningOf"+u](),"month"===r.set.specificity&&(l=r.date.clone()["endOf"+u]().getTime()),!c&&r.set.sign&&"millisecond"!=r.set.specificity&&(d=50,f=-50)),s=t.getTime(),a=r.date.getTime(),l=l||a+h,l=sn(t,a,l),s>=a-d&&l+f>=s):!1}function sn(t,e,n){var i,o,r,s;return i=new ci(e),o=new ci(n).utc(t.isUTC()),23!==$(o,"Hours")&&(r=i.getTimezoneOffset(),s=o.getTimezoneOffset(),r!==s&&(n+=(s-r).minutes())),n}function an(t,e,n,i,o){function r(t){return p(e[t])?e[t]:e[t+"s"]}function s(t){return p(r(t))}function a(t,e){return s(t)||e&&s("weekday")}function l(){switch(o){case-1:return t>Ie();case 1:return t<Ie()}}var c,u;if(ki(e)&&i)e={milliseconds:e};else if(ki(e))return t.setTime(e),t;if(p(e.date)&&(e.day=e.date),Be(function(i,o,r){var l="day"===i;return a(i,l)?(e.specificity=i,u=+r,!1):void(!n||"week"===i||l&&s("week")||B(t,o.method,l?1:0))}),yo.forEach(function(n,o){{var a,l=n.name,c=n.method;yo[o-1]}a=r(l),m(a)||(i?("week"===l&&(a=(e.day||0)+7*a,c="Date"),a=a*i+$(t,c)):"month"===l&&s("day")&&B(t,"Date",15),B(t,c,a),i&&"month"===l&&cn(t,a))}),!i&&!s("day")&&s("weekday")){var c=r("weekday");t.setWeekday(c)}return l()&&Be(function(e,n){var i=n.ambiguous||"week"===e&&s("weekday");return i&&!a(e,"day"===e)?(t[n.addMethod](o),!1):void 0},u+1),t}function ln(t,e,n){var i,o={h:0,m:1,s:2};return e=e||no,t.replace(/{([a-z])}/g,function(t,r){var s=[],a="h"===r,l=a&&!n;return"t"===r?e.ampm.join("|"):(a&&s.push(":"),(i=e.timeSuffixes[o[r]])&&s.push(i+"\\s*"),0===s.length?"":"(?:"+s.join("|")+")"+(l?"":"?"))})}function cn(t,e){0>e&&(e=e%12+12),e%12!=$(t,"Month")&&B(t,"Date",0)}function un(t,e,n){var i,o;return ki(t[1])?i=Le(t)[0]:(i=t[0],o=t[1]),je(i,o,e,n).date}function hn(t){t.setTime(0/0)}function dn(){so=yo.concat().reverse(),ro=yo.concat(),ro.splice(2,1)}function fn(){a(ci,!0,!0,yo,function(t,e,n){function i(t){var n=t/l,i=n%1,o=e.error||.999;return i&&Di(i%1)>o&&(n=Hi(n)),0>n?Pi(n):Ni(n)}var o,r,s=e.name,a=He(s),l=e.multiplier();e.addMethod="add"+a+"s",o=function(t,e){return i(this.getTime()-ci.create(t,e).getTime())},r=function(t,e){return i(ci.create(t,e).getTime()-this.getTime())},t[s+"sAgo"]=r,t[s+"sUntil"]=r,t[s+"sSince"]=o,t[s+"sFromNow"]=o,t[e.addMethod]=function(t,e){var n={};return n[s]=t,this.advance(n,e)},Cn(e,l),3>n&&["Last","This","Next"].forEach(function(e){t["is"+e+a]=function(){return rn(this,e+" "+s,"en")}}),4>n&&(t["beginningOf"+a]=function(){var t={};switch(s){case"year":t.year=$(this,"FullYear");break;case"month":t.month=$(this,"Month");break;case"day":t.day=$(this,"Date");break;case"week":t.weekday=0}return this.set(t,!0)},t["endOf"+a]=function(){var t={hours:23,minutes:59,seconds:59,milliseconds:999};switch(s){case"year":t.month=11,t.day=31;break;case"month":t.day=this.daysInMonth();break;case"week":t.weekday=6}return this.set(t,!0)})})}function pn(){no.addFormat("([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?",!0,["year_sign","year","month","date"],!1,!0),no.addFormat("(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?",!0,["date","month","year"],!0),no.addFormat("{full_month}[-.](\\d{4,4})",!1,["month","year"]),no.addFormat("\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/",!1,["timestamp"]),no.addFormat(ln(ho,no),!1,ao),mo=no.compiledFormats.slice(0,7).reverse(),no.compiledFormats=no.compiledFormats.slice(7).concat(mo)}function mn(){tn("f",function(t){return $(t,"Milliseconds")},!0),tn("s",function(t){return $(t,"Seconds")}),tn("m",function(t){return $(t,"Minutes")}),tn("h",function(t){return $(t,"Hours")%12||12}),tn("H",function(t){return $(t,"Hours")}),tn("d",function(t){return $(t,"Date")}),tn("M",function(t){return $(t,"Month")+1}),Ye(),Xe(),Je(),vo.ms=vo.f,vo.milliseconds=vo.f,vo.seconds=vo.s,vo.minutes=vo.m,vo.hours=vo.h,vo["24hr"]=vo.H,vo["12hr"]=vo.h,vo.date=vo.d,vo.day=vo.d,vo.year=vo.yyyy}function gn(){a(ci,!0,!0,"short,long,full",function(t,e){t[e]=function(t){return on(this,e,!1,t)}})}function vn(){fo.split("").forEach(function(t,e){e>9&&(e=Oi(10,e-9)),po[t]=e}),k(po,Ui),oo=li("([期週周])?(["+fo+Vi+"]+)(?!昨)","g")}function yn(){var t="today,yesterday,tomorrow,weekday,weekend,future,past".split(","),e=no.weekdays.slice(0,7),n=no.months.slice(0,12);a(ci,!0,!0,t.concat(e).concat(n),function(t,e){t["is"+He(e)]=function(t){return this.is(e,0,t)}})}function wn(){ci.utc||(ci.utc={create:function(){return un(arguments,0,!0)},past:function(){return un(arguments,-1,!0)},future:function(){return un(arguments,1,!0)}})}function bn(){s(ci,!1,!0,{RFC1123:"{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}",RFC1036:"{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}",ISO8601_DATE:"{yyyy}-{MM}-{dd}",ISO8601_DATETIME:"{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}"})}function Cn(t,e){function n(){return Hi(this*e)}function i(){return un(arguments)[t.addMethod](this)}function o(){return un(arguments)[t.addMethod](-this)}var r=t.name,s={};s[r]=n,s[r+"s"]=n,s[r+"Before"]=o,s[r+"sBefore"]=o,s[r+"Ago"]=o,s[r+"sAgo"]=o,s[r+"After"]=i,s[r+"sAfter"]=i,s[r+"FromNow"]=i,s[r+"sFromNow"]=i,hi.extend(s)}function Sn(t,e,n,i,o){1/0!==e&&(t.timers||(t.timers=[]),ki(e)||(e=1),t._canceled=!1,t.timers.push(setTimeout(function(){t._canceled||n.apply(i,o||[])},e)))}function kn(t,e,n,i,o,r){var s,a,l,c=t.toFixed(20),u=c.search(/\./),h=c.search(/[1-9]/),d=u-h;return d>0&&(d-=1),a=Ii(Mi(Ni(d/3),o===!1?n.length:o),-i),s=n.charAt(a+i-1),-9>d&&(a=-3,e=Di(d)-9,s=n.slice(0,1)),l=r?Oi(2,10*a):Oi(10,3*a),E(t/l,e||0).format()+s.trim()}function xn(){function t(t){return function(e){return e?E(this,e,t):t(this)}}s(hi,!0,!0,{ceil:t(Pi),round:t(Hi),floor:t(Ni)}),a(hi,!0,!0,"abs,pow,sin,asin,cos,acos,tan,atan,exp,pow,sqrt",function(t,e){t[e]=function(t,n){return di[e](this,t,n)}})}function Tn(t,e,n,i){var o,r,s,a,l=/^(.+?)(\[.*\])$/;(r=e.match(l))?(a=r[1],s=r[2].replace(/^\[|\]$/g,"").split("]["),s.forEach(function(e){o=!e||e.match(/^\d+$/),!a&&Ti(t)&&(a=t.length),v(t,a)||(t[a]=o?[]:{}),t=t[a],a=e}),!a&&o&&(a=t.length.toString()),Tn(t,a,n,i)):t[e]=i&&"true"===n?!0:i&&"false"===n?!1:n}function Rn(t,e){var n;return Ti(e)||y(e)&&e.toString===pi?(n=[],C(e,function(e,i){t&&(e=t+"["+e+"]"),n.push(Rn(e,i))}),n.join("&")):t?En(t)+"="+(Ri(e)?e.getTime():En(e)):""}function En(t){return t||t===!1||0===t?encodeURIComponent(t).replace(/%20/g,"+"):""}function An(t,e,n){return Ei(t)?t.test(e):y(t)?t[e]===n:e===ui(t)}function _n(t,e,n){var i,o=t instanceof R?new R:{};return C(t,function(t,r){i=!1,d(e,function(e){An(e,t,r)&&(i=!0)},1),i===n&&(o[t]=r)}),o}function Dn(){a(si,!1,!0,Ci,function(t,e){var n="is"+e;bo.push(n),t[n]=wi[e]})}function On(){s(si,!1,function(){return 0===arguments.length},{extend:function(){var t=bo.concat(Co);"undefined"!=typeof eo&&(t=t.concat(eo)),U(t,si)}})}function Pn(t,e){this.start=Mn(t),this.end=Mn(e)}function Nn(t){return xi(t)?t.charCodeAt(0):t}function Hn(t){return null==t?t:Ri(t)?t.getTime():t.valueOf()}function Mn(t){return Ri(t)?new ci(t.getTime()):Hn(t)}function In(t){var e=Hn(t);return!!e||0===e}function Ln(t){var e,n,i;return ki(t)?t:(e=t.toLowerCase().match(/^(\d+)?\s?(\w+?)s?$/i),n=parseInt(e[1])||1,i=e[2].slice(0,1).toUpperCase()+e[2].slice(1),i.match(/hour|minute|second/i)?i+="s":"Year"===i?i="FullYear":"Day"===i&&(i="Date"),[n,i])}function $n(t,e){var n,i,o,r;return ki(e)?new ci(t.getTime()+e):(n=e[0],i=e[1],o=$(t,i),r=new ci(t.getTime()),B(r,i,o+n),r)}function Bn(t,e){return ui.fromCharCode(t.charCodeAt(0)+e)}function zn(t,e){return t+e}function Fn(t){var e=ui.Inflector,t=e&&e.acronyms[t];return xi(t)?t:void 0}function Wn(t){if(t=+t,0>t||1/0===t)throw new RangeError("Invalid number");return t}function jn(t,e){return P(p(e)?e:" ",t)}function Vn(t,e,n,i,o){var r,s,a,l;if(t.length<=e)return t.toString();switch(i=m(i)?"...":i,n){case"left":return s=o?Un(t,e,!0):t.slice(t.length-e),i+s;case"middle":return a=Pi(e/2),l=Ni(e/2),r=o?Un(t,a):t.slice(0,a),s=o?Un(t,l,!0):t.slice(t.length-l),r+i+s;default:return r=o?Un(t,e):t.slice(0,e),r+i}}function Un(t,e,n){if(n)return Un(t.reverse(),e).reverse();var i=li("(?=["+O()+"])"),o=t.split(i),r=0;return o.filter(function(t){return r+=t.length,e>=r}).join("")}function Gn(t,e,n){return xi(e)&&(e=t.indexOf(e),-1===e&&(e=n?t.length:0)),e}function qn(t){if(fi.btoa)return So=fi.btoa,void(ko=fi.atob);var e=/[^A-Za-z0-9\+\/\=]/g;So=function(e){var n,i,o,r,s,a,l,c="",u=0;do n=e.charCodeAt(u++),i=e.charCodeAt(u++),o=e.charCodeAt(u++),r=n>>2,s=(3&n)<<4|i>>4,a=(15&i)<<2|o>>6,l=63&o,isNaN(i)?a=l=64:isNaN(o)&&(l=64),c=c+t.charAt(r)+t.charAt(s)+t.charAt(a)+t.charAt(l),n=i=o="",r=s=a=l="";while(u<e.length);return c},ko=function(n){var i,o,r,s,a,l,c,u="",h=0;if(n.match(e))throw new Error("String contains invalid base64 characters");n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");do s=t.indexOf(n.charAt(h++)),a=t.indexOf(n.charAt(h++)),l=t.indexOf(n.charAt(h++)),c=t.indexOf(n.charAt(h++)),i=s<<2|a>>4,o=(15&a)<<4|l>>2,r=(3&l)<<6|c,u+=D(i),64!=l&&(u+=D(o)),64!=c&&(u+=D(r)),i=o=r="",s=a=l=c="";while(h<n.length);return u}}function Kn(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}function Yn(t,e,n){xi(e)&&Kn(Ao,e),Kn(Ao,n),t.unshift({rule:e,replacement:n})}function Xn(t,e){return t==e||"all"==t||!t}function Jn(t){return Ao.some(function(e){return new li("\\b"+e+"$","i").test(t)})}function Qn(t,e){return t=xi(t)?t.toString():"",t.isBlank()||Jn(t)?t:Zn(t,e?Ro:Eo)}function Zn(t,e){return C(e,function(e,n){return t.match(n.rule)?(t=t.replace(n.rule,n.replacement),!1):void 0}),t}function ti(t){return t.replace(/^\W*[a-z]/,function(t){return t.toUpperCase()})}function ei(){Po.forEach(function(t){var e=li("^["+t.source+"\\s]+$"),n=li("["+t.source+"]");t.names.forEach(function(t){u(ui.prototype,"is"+t,function(){return e.test(this.trim())}),u(ui.prototype,"has"+t,function(){return n.test(this)})})})}function ni(t,e,n,i){Oo||ii();var o=h(e).join(""),r=Oo[i];return o=o.replace(/all/,"").replace(/(\w)lphabet|umbers?|atakana|paces?|unctuation/g,"$1"),t.replace(n,function(t){return!r[t]||o&&!o.has(r[t].type)?t:r[t].to})}function ii(){var t;Oo={zenkaku:{},hankaku:{}},Ho.forEach(function(t){S(t.end-t.start+1,function(e){e+=t.start,oi(t.type,D(e),D(e+No))})}),Wo.each(function(e,n){t=Fo.charAt(n),oi("k",t,e),e.match(Bo)&&oi("k",t+"ﾞ",e.shift(1)),e.match(zo)&&oi("k",t+"ﾟ",e.shift(2))}),$o.each(function(t,e){oi("p",Lo.charAt(e),t)}),oi("k","ｳﾞ","ヴ"),oi("k","ｦﾞ","ヺ"),oi("s"," ","　")}function oi(t,e,n){Oo.zenkaku[e]={type:t,to:n},Oo.hankaku[n]={type:t,to:e}}var ri,si=Object,ai=Array,li=RegExp,ci=Date,ui=String,hi=Number,di=Math,fi="undefined"!=typeof global?global:this,pi=si.prototype.toString,mi=si.prototype.hasOwnProperty,gi=si.defineProperty&&si.defineProperties,vi="function"==typeof li(),yi=!("0"in new ui("a")),wi={},bi=/^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/,Ci="Boolean,Number,String,Array,Date,RegExp,Function".split(","),Si=n("boolean",Ci[0]),ki=n("number",Ci[1]),xi=n("string",Ci[2]),Ti=e(Ci[3]),Ri=e(Ci[4]),Ei=e(Ci[5]),Ai=e(Ci[6]);R.prototype.constructor=si;var _i,Di=di.abs,Oi=di.pow,Pi=di.ceil,Ni=di.floor,Hi=di.round,Mi=di.min,Ii=di.max,Li=48,$i=57,Bi=65296,zi=65305,Fi=".",Wi="．",ji=",",Vi="",Ui={};o(),_(),s(si,!1,!1,{keys:function(t){var e=[];if(!y(t)&&!Ei(t)&&!Ai(t))throw new TypeError("Object required");return C(t,function(t){e.push(t)}),e}}),s(ai,!1,!1,{isArray:function(t){return Ti(t)}}),s(ai,!0,!1,{every:function(t,e){var n=this.length,i=0;for(Y(arguments);n>i;){if(i in this&&!t.call(e,this[i],i,this))return!1;i++}return!0},some:function(t,e){var n=this.length,i=0;for(Y(arguments);n>i;){if(i in this&&t.call(e,this[i],i,this))return!0;i++}return!1},map:function(t,e){var e=arguments[1],n=this.length,i=0,o=new Array(n);for(Y(arguments);n>i;)i in this&&(o[i]=t.call(e,this[i],i,this)),i++;return o},filter:function(t){var e=arguments[1],n=this.length,i=0,o=[];for(Y(arguments);n>i;)i in this&&t.call(e,this[i],i,this)&&o.push(this[i]),i++;return o},indexOf:function(t){var e=arguments[1];return xi(this)?this.indexOf(t,e):G(this,t,e,1)},lastIndexOf:function(t){var e=arguments[1];return xi(this)?this.lastIndexOf(t,e):G(this,t,e,-1)},forEach:function(t){var e=this.length,n=0,i=arguments[1];for(f(t);e>n;)n in this&&t.call(i,this[n],n,this),n++},reduce:function(t){return q(this,t,arguments[1])},reduceRight:function(t){return q(this,t,arguments[1],!0)}}),s(Function,!0,!1,{bind:function(t){var e,n=this,i=h(arguments,null,1);if(!Ai(this))throw new TypeError("Function.prototype.bind called on a non-function");return e=function(){return n.apply(n.prototype&&this instanceof n?this:t,i.concat(h(arguments)))},e.prototype=this.prototype,e}}),s(ci,!1,!1,{now:function(){return(new ci).getTime()}}),X(),J();var Gi="AlphanumericSort",qi="AlphanumericSortOrder",Ki="AlphanumericSortIgnore",Yi="AlphanumericSortIgnoreCase",Xi="AlphanumericSortEquivalents",Ji="AlphanumericSortNatural";s(ai,!1,!0,{create:function(){var t=[];return h(arguments,function(e){(me(e)||pe(e))&&(e=ai.prototype.slice.call(e,0)),t=t.concat(e)}),t}}),s(ai,!0,!1,{find:function(t,e){return f(t),ue(this,t,0,!1,!1,e)},findIndex:function(t,e){var n;return f(t),n=ue(this,t,0,!1,!0,e),m(n)?-1:n}}),s(ai,!0,!0,{findFrom:function(t,e,n){return ue(this,t,e,n)},findIndexFrom:function(t,e,n){var e=ue(this,t,e,n,!0);return m(e)?-1:e},findAll:function(t,e,n){var i,o=[];return this.length>0&&(i=oe(t),se(this,function(t,e,n){i(t,e,n)&&o.push(t)},e,n)),o},count:function(t){return m(t)?this.length:this.findAll(t).length},removeAt:function(t,e){return m(t)?this:(m(e)&&(e=t),this.splice(t,e-t+1),this)},include:function(t,e){return this.clone().add(t,e)},exclude:function(){return ai.prototype.remove.apply(this.clone(),arguments)},clone:function(){return k([],this)},unique:function(t){return he(this,t)},flatten:function(t){return fe(this,t)},union:function(){return he(this.concat(ge(arguments)))},intersect:function(){return de(this,ge(arguments),!1)},subtract:function(){return de(this,ge(arguments),!0)},at:function(){return j(this,arguments)},first:function(t){return m(t)?this[0]:(0>t&&(t=0),this.slice(0,t))},last:function(t){if(m(t))return this[this.length-1];var e=this.length-t<0?0:this.length-t;return this.slice(e)},from:function(t){return this.slice(t)},to:function(t){return m(t)&&(t=this.length),this.slice(0,t)},min:function(t,e){return be(this,t,"min",e)},max:function(t,e){return be(this,t,"max",e)},least:function(t,e){return be(this.groupBy.apply(this,[t]),"length","min",e)},most:function(t,e){return be(this.groupBy.apply(this,[t]),"length","max",e)},sum:function(t){var e=t?this.map(t):this;return e.length>0?e.reduce(function(t,e){return t+e}):0},average:function(t){var e=t?this.map(t):this;return e.length>0?e.sum()/e.length:0},inGroups:function(t,e){var n=arguments.length>1,i=this,o=[],r=Pi(this.length/t);return S(t,function(t){var s=t*r,a=i.slice(s,s+r);n&&a.length<r&&S(r-a.length,function(){a=a.add(e)}),o.push(a)}),o},inGroupsOf:function(t,e){var n,i=[],o=this.length,r=this;return 0===o||0===t?r:(m(t)&&(t=1),m(e)&&(e=null),S(Pi(o/t),function(o){for(n=r.slice(t*o,t*o+t);n.length<t;)n.push(e);
i.push(n)}),i)},isEmpty:function(){return 0==this.compact().length},sortBy:function(t,e){var n=this.clone();return n.sort(function(i,o){var r,s,a;return r=re(i,t,n,[i]),s=re(o,t,n,[o]),a=xi(r)&&xi(s)?Ce(r,s):s>r?-1:r>s?1:0,a*(e?-1:1)}),n},randomize:function(){for(var t,e,n=this.concat(),i=n.length;i;)t=di.random()*i|0,e=n[--i],n[i]=n[t],n[t]=e;return n},zip:function(){var t=h(arguments);return this.map(function(e,n){return[e].concat(t.map(function(t){return n in t?t[n]:null}))})},sample:function(t){var e=this.randomize();return arguments.length>0?e.slice(0,t):e[0]},each:function(t,e,n){return se(this,t,e,n),this},add:function(t,e){return(!ki(hi(e))||isNaN(e))&&(e=this.length),ai.prototype.splice.apply(this,[e,0].concat(t)),this},remove:function(){var t=this;return h(arguments,function(e){for(var n=0,i=oe(e);n<t.length;)i(t[n],n,t)?t.splice(n,1):n++}),t},compact:function(t){var e=[];return se(this,function(n){Ti(n)?e.push(n.compact()):t&&n?e.push(n):t||null==n||n.valueOf()!==n.valueOf()||e.push(n)}),e},groupBy:function(t,e){var n,i=this,o={};return se(i,function(e,r){n=re(e,t,i,[e,r,i]),o[n]||(o[n]=[]),o[n].push(e)}),e&&C(o,e),o},none:function(){return!this.any.apply(this,arguments)}}),s(ai,!0,!0,{all:ai.prototype.every,any:ai.prototype.some,insert:ai.prototype.add}),s(si,!1,!0,{map:function(t,e){var n,i,o={};for(n in t)v(t,n)&&(i=t[n],o[n]=re(i,e,t,[n,i,t]));return o},reduce:function(t){var e=Ee(t).map(function(e){return t[e]});return e.reduce.apply(e,h(arguments,null,1))},each:function(t,e){return f(e),C(t,e),t},size:function(t){return Ee(t).length}});var Qi="any,all,none,count,find,findAll,isEmpty".split(","),Zi="sum,average,min,max,least,most".split(","),to="map,reduce,size".split(","),eo=Qi.concat(Zi).concat(to);Te(),Re(),Ae(Qi),Ae(Zi,!0),U(to,R),_e();var no,io,oo,ro,so,ao=["ampm","hour","minute","second","ampm","utc","offset_sign","offset_hours","offset_minutes","ampm"],lo="(?:[,.]\\d+)?",co="\\d{1,2}"+lo,uo="[0-5]\\d"+lo,ho="({t})?\\s*("+co+")(?:{h}("+uo+")?{m}(?::?("+uo+"){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))",fo="〇一二三四五六七八九十百千万",po={},mo=[],go={},vo={yyyy:function(t){return $(t,"FullYear")},yy:function(t){return $(t,"FullYear")%100},ord:function(t){var e=$(t,"Date");return e+M(e)},tz:function(t){return t.getUTCOffset()},isotz:function(t){return t.getUTCOffset(!0)},Z:function(t){return t.getUTCOffset()},ZZ:function(t){return t.getUTCOffset().replace(/(\d{2})$/,":$1")}},yo=[{name:"year",method:"FullYear",ambiguous:!0,multiplier:function(t){var e=t?t.isLeapYear()?1:0:.25;return 24*(365+e)*60*60*1e3}},{name:"month",error:.919,method:"Month",ambiguous:!0,multiplier:function(t,e){var n,i=30.4375;return t&&(n=t.daysInMonth(),e<=n.days()&&(i=n)),24*i*60*60*1e3}},{name:"week",method:"ISOWeek",multiplier:function(){return 6048e5}},{name:"day",error:.958,method:"Date",ambiguous:!0,multiplier:function(){return 864e5}},{name:"hour",method:"Hours",multiplier:function(){return 36e5}},{name:"minute",method:"Minutes",multiplier:function(){return 6e4}},{name:"second",method:"Seconds",multiplier:function(){return 1e3}},{name:"millisecond",method:"Milliseconds",multiplier:function(){return 1}}],wo={};De.prototype={getMonth:function(t){return ki(t)?t-1:this.months.indexOf(t)%12},getWeekday:function(t){return this.weekdays.indexOf(t)%7},getNumber:function(t){var e;return ki(t)?t:t&&-1!==(e=this.numbers.indexOf(t))?(e+1)%10:1},getNumericDate:function(t){var e=this;return t.replace(li(this.num,"g"),function(t){var n=e.getNumber(t);return n||""})},getUnitIndex:function(t){return this.units.indexOf(t)%8},getRelativeFormat:function(t){return this.convertAdjustedToFormat(t,t[2]>0?"future":"past")},getDuration:function(t){return this.convertAdjustedToFormat(Ge(t),"duration")},hasVariant:function(t){return t=t||this.code,"en"===t||"en-US"===t?!0:this.variant},matchAM:function(t){return t===this.ampm[0]},matchPM:function(t){return t&&t===this.ampm[1]},convertAdjustedToFormat:function(t,e){var n,i,o,r=t[0],s=t[1],a=t[2],l=this[e]||this.relative;return Ai(l)?l.call(this,r,s,a,e):(o=this.plural&&r>1?1:0,i=this.units[8*o+s]||this.units[s],this.capitalizeUnit&&(i=He(i)),n=this.modifiers.filter(function(t){return"sign"==t.name&&t.value==(a>0?1:-1)})[0],l.replace(/\{(.*?)\}/g,function(t,e){switch(e){case"num":return r;case"unit":return i;case"sign":return n.src}}))},getFormats:function(){return this.cachedFormat?[this.cachedFormat].concat(this.compiledFormats):this.compiledFormats},addFormat:function(t,e,n,i,o){var r,s,a,l=n||[],c=this;t=t.replace(/\s+/g,"[,. ]*"),t=t.replace(/\{([^,]+?)\}/g,function(t,e){var i,o,r,s=e.match(/\?$/),a=e.match(/^(\d+)\??$/),u=e.match(/(\d)(?:-(\d))?/),h=e.replace(/[^a-z]+$/,"");return a?i=c.tokens[a[1]]:c[h]?i=c[h]:c[h+"s"]&&(i=c[h+"s"],u&&(o=[],i.forEach(function(t,e){var n=e%(c.units?8:i.length);n>=u[1]&&n<=(u[2]||u[1])&&o.push(t)}),i=o),i=Me(i)),a?r="(?:"+i+")":(n||l.push(h),r="("+i+")"),s&&(r+="?"),r}),e?(r=ln(ho,c,o),s=["t","[\\s\\u3000]"].concat(c.timeMarker),a=t.match(/\\d\{\d,\d\}\)+\??$/),Ne(c,"(?:"+r+")[,\\s\\u3000]+?"+t,ao.concat(l),i),Ne(c,t+"(?:[,\\s]*(?:"+s.join("|")+(a?"+":"*")+")"+r+")?",l.concat(ao),i)):Ne(c,t,l,i)}},s(ci,!1,!0,{create:function(){return un(arguments)},past:function(){return un(arguments,-1)},future:function(){return un(arguments,1)},addLocale:function(t,e){return Pe(t,e)},setLocale:function(t){var e=Oe(t,!1);return io=e,t&&t!=e.code&&(e.code=t),e},getLocale:function(t){return t?Oe(t,!1):io},addFormat:function(t,e,n){Ne(Oe(n),t,e)}}),s(ci,!0,!0,{set:function(){var t=Le(arguments);return an(this,t[0],t[1])},setWeekday:function(t){return m(t)?void 0:B(this,"Date",$(this,"Date")+t-$(this,"Day"))},setISOWeek:function(t){var e=$(this,"Day")||7;if(!m(t))return this.set({month:0,date:4}),this.set({weekday:1}),t>1&&this.addWeeks(t-1),1!==e&&this.advance({days:e-1}),this.getTime()},getISOWeek:function(){return Ue(this)},beginningOfISOWeek:function(){var t=this.getDay();return 0===t?t=-6:1!==t&&(t=1),this.setWeekday(t),this.reset()},endOfISOWeek:function(){return 0!==this.getDay()&&this.setWeekday(7),this.endOfDay()},getUTCOffset:function(t){var e=this._utc?0:this.getTimezoneOffset(),n=t===!0?":":"";return!e&&t?"Z":H(Ni(-e/60),2,!0)+n+H(Di(e%60),2)},utc:function(t){return u(this,"_utc",t===!0||0===arguments.length),this},isUTC:function(){return!!this._utc||0===this.getTimezoneOffset()},advance:function(){var t=Le(arguments,!0);return an(this,t[0],t[1],1)},rewind:function(){var t=Le(arguments,!0);return an(this,t[0],t[1],-1)},isValid:function(){return!isNaN(this.getTime())},isAfter:function(t,e){return this.getTime()>ci.create(t).getTime()-(e||0)},isBefore:function(t,e){return this.getTime()<ci.create(t).getTime()+(e||0)},isBetween:function(t,e,n){var i=this.getTime(),o=ci.create(t).getTime(),r=ci.create(e).getTime(),s=Mi(o,r),a=Ii(o,r);return n=n||0,i>s-n&&a+n>i},isLeapYear:function(){var t=$(this,"FullYear");return t%4===0&&t%100!==0||t%400===0},daysInMonth:function(){return 32-$(new ci($(this,"FullYear"),$(this,"Month"),32),"Date")},format:function(t,e){return on(this,t,!1,e)},relative:function(t,e){return xi(t)&&(e=t,t=null),on(this,t,!0,e)},is:function(t,e,n){var i,o;if(this.isValid()){if(xi(t))switch(t=t.trim().toLowerCase(),o=this.clone().utc(n),!0){case"future"===t:return this.getTime()>Ie().getTime();case"past"===t:return this.getTime()<Ie().getTime();case"weekday"===t:return $(o,"Day")>0&&$(o,"Day")<6;case"weekend"===t:return 0===$(o,"Day")||6===$(o,"Day");case(i=no.weekdays.indexOf(t)%7)>-1:return $(o,"Day")===i;case(i=no.months.indexOf(t)%12)>-1:return $(o,"Month")===i}return rn(this,t,null,e,n)}},reset:function(t){var e,n={};return t=t||"hours","date"===t&&(t="days"),e=yo.some(function(e){return t===e.name||t===e.name+"s"}),n[t]=t.match(/^days?/)?1:0,e?this.set(n,!0):this},clone:function(){var t=new ci(this.getTime());return t.utc(!!this._utc),t}}),s(ci,!0,!0,{iso:function(){return this.toISOString()},getWeekday:ci.prototype.getDay,getUTCWeekday:ci.prototype.getUTCDay}),s(hi,!0,!0,{duration:function(t){return Oe(t).getDuration(this)}}),no=io=ci.addLocale("en",{plural:!0,timeMarker:"at",ampm:"am,pm",months:"January,February,March,April,May,June,July,August,September,October,November,December",weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",units:"millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s",numbers:"one,two,three,four,five,six,seven,eight,nine,ten",articles:"a,an,the",tokens:"the,st|nd|rd|th,of","short":"{Month} {d}, {yyyy}","long":"{Month} {d}, {yyyy} {h}:{mm}{tt}",full:"{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",modifiers:[{name:"sign",src:"ago|before",value:-1},{name:"sign",src:"from now|after|from|in|later",value:1},{name:"edge",src:"last day",value:-2},{name:"edge",src:"end",value:-1},{name:"edge",src:"first day|beginning",value:1},{name:"shift",src:"last",value:-1},{name:"shift",src:"the|this",value:0},{name:"shift",src:"next",value:1}],dateParse:["{month} {year}","{shift} {unit=5-7}","{0?} {date}{1}","{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}"],timeParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1?} {year?}","{date} {month} {year}","{date} {month}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2?} {shift} week","{num} {unit=4-5} {sign} {day}","{0?} {date}{1} of {month}","{0?}{month?} {date?}{1?} of {shift} {unit=6-7}"]}),dn(),fn(),pn(),mn(),gn(),vn(),yn(),wn(),bn(),Date.addLocale("da",{plural:!0,months:"januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december",weekdays:"søndag|sondag,mandag,tirsdag,onsdag,torsdag,fredag,lørdag|lordag",units:"millisekund:|er,sekund:|er,minut:|ter,tim:e|er,dag:|e,ug:e|er|en,måned:|er|en+maaned:|er|en,år:||et+aar:||et",numbers:"en|et,to,tre,fire,fem,seks,syv,otte,ni,ti",tokens:"den,for",articles:"den","short":"d. {d}. {month} {yyyy}","long":"den {d}. {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d}. {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"forgårs|i forgårs|forgaars|i forgaars",value:-2},{name:"day",src:"i går|igår|i gaar|igaar",value:-1},{name:"day",src:"i dag|idag",value:0},{name:"day",src:"i morgen|imorgen",value:1},{name:"day",src:"over morgon|overmorgen|i over morgen|i overmorgen|iovermorgen",value:2},{name:"sign",src:"siden",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i sidste|sidste",value:-1},{name:"shift",src:"denne",value:0},{name:"shift",src:"næste|naeste",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1?} {num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{0?} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]}),Date.addLocale("de",{plural:!0,capitalizeUnit:!0,months:"Januar,Februar,März|Marz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember",weekdays:"Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag",units:"Millisekunde:|n,Sekunde:|n,Minute:|n,Stunde:|n,Tag:|en,Woche:|n,Monat:|en,Jahr:|en",numbers:"ein:|e|er|en|em,zwei,drei,vier,fuenf,sechs,sieben,acht,neun,zehn",tokens:"der","short":"{d}. {Month} {yyyy}","long":"{d}. {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d}. {Month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"um",ampm:"am,pm",modifiers:[{name:"day",src:"vorgestern",value:-2},{name:"day",src:"gestern",value:-1},{name:"day",src:"heute",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"übermorgen|ubermorgen|uebermorgen",value:2},{name:"sign",src:"vor:|her",value:-1},{name:"sign",src:"in",value:1},{name:"shift",src:"letzte:|r|n|s",value:-1},{name:"shift",src:"nächste:|r|n|s+nachste:|r|n|s+naechste:|r|n|s+kommende:n|r",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("es",{plural:!0,months:"enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre",weekdays:"domingo,lunes,martes,miércoles|miercoles,jueves,viernes,sábado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,día|días|dia|dias,semana:|s,mes:|es,año|años|ano|anos",numbers:"uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez",tokens:"el,la,de","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"a las",ampm:"am,pm",modifiers:[{name:"day",src:"anteayer",value:-2},{name:"day",src:"ayer",value:-1},{name:"day",src:"hoy",value:0},{name:"day",src:"mañana|manana",value:1},{name:"sign",src:"hace",value:-1},{name:"sign",src:"dentro de",value:1},{name:"shift",src:"pasad:o|a",value:-1},{name:"shift",src:"próximo|próxima|proximo|proxima",value:1}],dateParse:["{sign} {num} {unit}","{num} {unit} {sign}","{0?}{1?} {unit=5-7} {shift}","{0?}{1?} {shift} {unit=5-7}"],timeParse:["{shift} {weekday}","{weekday} {shift}","{date?} {2?} {month} {2?} {year?}"]}),Date.addLocale("fi",{plural:!0,timeMarker:"kello",ampm:",",months:"tammikuu,helmikuu,maaliskuu,huhtikuu,toukokuu,kesäkuu,heinäkuu,elokuu,syyskuu,lokakuu,marraskuu,joulukuu",weekdays:"sunnuntai,maanantai,tiistai,keskiviikko,torstai,perjantai,lauantai",units:"millisekun:ti|tia|teja|tina|nin,sekun:ti|tia|teja|tina|nin,minuut:ti|tia|teja|tina|in,tun:ti|tia|teja|tina|nin,päiv:ä|ää|iä|änä|än,viik:ko|koa|koja|on|kona,kuukau:si|sia|tta|den|tena,vuo:si|sia|tta|den|tena",numbers:"yksi|ensimmäinen,kaksi|toinen,kolm:e|as,neljä:s,vii:si|des,kuu:si|des,seitsemä:n|s,kahdeksa:n|s,yhdeksä:n|s,kymmene:n|s",articles:"",optionals:"","short":"{d}. {month}ta {yyyy}","long":"{d}. {month}ta {yyyy} kello {H}.{mm}",full:"{Weekday}na {d}. {month}ta {yyyy} kello {H}.{mm}",relative:function(t,e,n,i){function o(n){return(1===t?"":t+" ")+r[8*n+e]}var r=this.units;switch(i){case"duration":return o(0);case"past":return o(t>1?1:0)+" sitten";case"future":return o(4)+" päästä"}},modifiers:[{name:"day",src:"toissa päivänä|toissa päiväistä",value:-2},{name:"day",src:"eilen|eilistä",value:-1},{name:"day",src:"tänään",value:0},{name:"day",src:"huomenna|huomista",value:1},{name:"day",src:"ylihuomenna|ylihuomista",value:2},{name:"sign",src:"sitten|aiemmin",value:-1},{name:"sign",src:"päästä|kuluttua|myöhemmin",value:1},{name:"edge",src:"viimeinen|viimeisenä",value:-2},{name:"edge",src:"lopussa",value:-1},{name:"edge",src:"ensimmäinen|ensimmäisenä",value:1},{name:"shift",src:"edellinen|edellisenä|edeltävä|edeltävänä|viime|toissa",value:-1},{name:"shift",src:"tänä|tämän",value:0},{name:"shift",src:"seuraava|seuraavana|tuleva|tulevana|ensi",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{num} {unit=4-5} {sign} {day}","{month} {year}","{shift} {unit=5-7}"],timeParse:["{0} {num}{1} {day} of {month} {year?}","{weekday?} {month} {date}{1} {year?}","{date} {month} {year}","{shift} {weekday}","{shift} week {weekday}","{weekday} {2} {shift} week","{0} {date}{1} of {month}","{0}{month?} {date?}{1} of {shift} {unit=6-7}"]}),Date.addLocale("fr",{plural:!0,months:"janvier,février|fevrier,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre|decembre",weekdays:"dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi",units:"milliseconde:|s,seconde:|s,minute:|s,heure:|s,jour:|s,semaine:|s,mois,an:|s|née|nee",numbers:"un:|e,deux,trois,quatre,cinq,six,sept,huit,neuf,dix",tokens:"l'|la|le","short":"{d} {month} {yyyy}","long":"{d} {month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{sign} {num} {unit}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"à",ampm:"am,pm",modifiers:[{name:"day",src:"hier",value:-1},{name:"day",src:"aujourd'hui",value:0},{name:"day",src:"demain",value:1},{name:"sign",src:"il y a",value:-1},{name:"sign",src:"dans|d'ici",value:1},{name:"shift",src:"derni:èr|er|ère|ere",value:-1},{name:"shift",src:"prochain:|e",value:1}],dateParse:["{sign} {num} {unit}","{sign} {num} {unit}","{0?} {unit=5-7} {shift}"],timeParse:["{weekday?} {0?} {date?} {month} {year?}","{0?} {weekday} {shift}"]}),Date.addLocale("it",{plural:!0,months:"Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre",weekdays:"Domenica,Luned:ì|i,Marted:ì|i,Mercoled:ì|i,Gioved:ì|i,Venerd:ì|i,Sabato",units:"millisecond:o|i,second:o|i,minut:o|i,or:a|e,giorn:o|i,settiman:a|e,mes:e|i,ann:o|i",numbers:"un:|a|o|',due,tre,quattro,cinque,sei,sette,otto,nove,dieci",tokens:"l'|la|il","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"alle",ampm:"am,pm",modifiers:[{name:"day",src:"ieri",value:-1},{name:"day",src:"oggi",value:0},{name:"day",src:"domani",value:1},{name:"day",src:"dopodomani",value:2},{name:"sign",src:"fa",value:-1},{name:"sign",src:"da adesso",value:1},{name:"shift",src:"scors:o|a",value:-1},{name:"shift",src:"prossim:o|a",value:1}],dateParse:["{num} {unit} {sign}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("ja",{monthSuffix:"月",weekdays:"日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日",units:"ミリ秒,秒,分,時間,日,週間|週,ヶ月|ヵ月|月,年","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {H}時{mm}分",full:"{yyyy}年{M}月{d}日 {Weekday} {H}時{mm}分{ss}秒",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"時,分,秒",ampm:"午前,午後",modifiers:[{name:"day",src:"一昨日",value:-2},{name:"day",src:"昨日",value:-1},{name:"day",src:"今日",value:0},{name:"day",src:"明日",value:1},{name:"day",src:"明後日",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"後",value:1},{name:"shift",src:"去|先",value:-1},{name:"shift",src:"来",value:1}],dateParse:["{num}{unit}{sign}"],timeParse:["{shift}{unit=5-7}{weekday?}","{year}年{month?}月?{date?}日?","{month}月{date?}日?","{date}日"]}),Date.addLocale("ko",{digitDate:!0,monthSuffix:"월",weekdays:"일요일,월요일,화요일,수요일,목요일,금요일,토요일",units:"밀리초,초,분,시간,일,주,개월|달,년",numbers:"일|한,이,삼,사,오,육,칠,팔,구,십","short":"{yyyy}년{M}월{d}일","long":"{yyyy}년{M}월{d}일 {H}시{mm}분",full:"{yyyy}년{M}월{d}일 {Weekday} {H}시{mm}분{ss}초",past:"{num}{unit} {sign}",future:"{num}{unit} {sign}",duration:"{num}{unit}",timeSuffixes:"시,분,초",ampm:"오전,오후",modifiers:[{name:"day",src:"그저께",value:-2},{name:"day",src:"어제",value:-1},{name:"day",src:"오늘",value:0},{name:"day",src:"내일",value:1},{name:"day",src:"모레",value:2},{name:"sign",src:"전",value:-1},{name:"sign",src:"후",value:1},{name:"shift",src:"지난|작",value:-1},{name:"shift",src:"이번",value:0},{name:"shift",src:"다음|내",value:1}],dateParse:["{num}{unit} {sign}","{shift?} {unit=5-7}"],timeParse:["{shift} {unit=5?} {weekday}","{year}년{month?}월?{date?}일?","{month}월{date?}일?","{date}일"]}),Date.addLocale("nl",{plural:!0,months:"januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december",weekdays:"zondag|zo,maandag|ma,dinsdag|di,woensdag|woe|wo,donderdag|do,vrijdag|vrij|vr,zaterdag|za",units:"milliseconde:|n,seconde:|n,minu:ut|ten,uur,dag:|en,we:ek|ken,maand:|en,jaar",numbers:"een,twee,drie,vier,vijf,zes,zeven,acht,negen",tokens:"","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{num} {unit} {sign}",duration:"{num} {unit}",timeMarker:"'s|om",modifiers:[{name:"day",src:"gisteren",value:-1},{name:"day",src:"vandaag",value:0},{name:"day",src:"morgen",value:1},{name:"day",src:"overmorgen",value:2},{name:"sign",src:"geleden",value:-1},{name:"sign",src:"vanaf nu",value:1},{name:"shift",src:"laatste|vorige|afgelopen",value:-1},{name:"shift",src:"volgend:|e",value:1}],dateParse:["{num} {unit} {sign}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{weekday?} {date?} {month} {year?}","{shift} {weekday}"]}),Date.addLocale("pl",{plural:!0,months:"Styczeń|Stycznia,Luty|Lutego,Marzec|Marca,Kwiecień|Kwietnia,Maj|Maja,Czerwiec|Czerwca,Lipiec|Lipca,Sierpień|Sierpnia,Wrzesień|Września,Październik|Października,Listopad|Listopada,Grudzień|Grudnia",weekdays:"Niedziela|Niedzielę,Poniedziałek,Wtorek,Środ:a|ę,Czwartek,Piątek,Sobota|Sobotę",units:"milisekund:a|y|,sekund:a|y|,minut:a|y|,godzin:a|y|,dzień|dni,tydzień|tygodnie|tygodni,miesiące|miesiące|miesięcy,rok|lata|lat",numbers:"jeden|jedną,dwa|dwie,trzy,cztery,pięć,sześć,siedem,osiem,dziewięć,dziesięć",optionals:"w|we,roku","short":"{d} {Month} {yyyy}","long":"{d} {Month} {yyyy} {H}:{mm}",full:"{Weekday}, {d} {Month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"o",ampm:"am,pm",modifiers:[{name:"day",src:"przedwczoraj",value:-2},{name:"day",src:"wczoraj",value:-1},{name:"day",src:"dzisiaj|dziś",value:0},{name:"day",src:"jutro",value:1},{name:"day",src:"pojutrze",value:2},{name:"sign",src:"temu|przed",value:-1},{name:"sign",src:"za",value:1},{name:"shift",src:"zeszły|zeszła|ostatni|ostatnia",value:-1},{name:"shift",src:"następny|następna|następnego|przyszły|przyszła|przyszłego",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{shift} {unit=5-7}","{0} {shift?} {weekday}"],timeParse:["{date} {month} {year?} {1}","{0} {shift?} {weekday}"]}),Date.addLocale("pt",{plural:!0,months:"janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro",weekdays:"domingo,segunda-feira,terça-feira,quarta-feira,quinta-feira,sexta-feira,sábado|sabado",units:"milisegundo:|s,segundo:|s,minuto:|s,hora:|s,dia:|s,semana:|s,mês|mêses|mes|meses,ano:|s",numbers:"um,dois,três|tres,quatro,cinco,seis,sete,oito,nove,dez,uma,duas",tokens:"a,de","short":"{d} de {month} de {yyyy}","long":"{d} de {month} de {yyyy} {H}:{mm}",full:"{Weekday}, {d} de {month} de {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",timeMarker:"às",ampm:"am,pm",modifiers:[{name:"day",src:"anteontem",value:-2},{name:"day",src:"ontem",value:-1},{name:"day",src:"hoje",value:0},{name:"day",src:"amanh:ã|a",value:1},{name:"sign",src:"atrás|atras|há|ha",value:-1},{name:"sign",src:"daqui a",value:1},{name:"shift",src:"passad:o|a",value:-1},{name:"shift",src:"próximo|próxima|proximo|proxima",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{0?} {unit=5-7} {shift}","{0?} {shift} {unit=5-7}"],timeParse:["{date?} {1?} {month} {1?} {year?}","{0?} {shift} {weekday}"]}),Date.addLocale("ru",{months:"Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь",weekdays:"Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота",units:"миллисекунд:а|у|ы|,секунд:а|у|ы|,минут:а|у|ы|,час:||а|ов,день|день|дня|дней,недел:я|ю|и|ь|е,месяц:||а|ев|е,год|год|года|лет|году",numbers:"од:ин|ну,дв:а|е,три,четыре,пять,шесть,семь,восемь,девять,десять",tokens:"в|на,года","short":"{d} {month} {yyyy} года","long":"{d} {month} {yyyy} года {H}:{mm}",full:"{Weekday} {d} {month} {yyyy} года {H}:{mm}:{ss}",relative:function(t,e,n,i){var o,r,s=t.toString().slice(-1);switch(!0){case t>=11&&15>=t:r=3;break;case 1==s:r=1;break;case s>=2&&4>=s:r=2;break;default:r=3}switch(o=t+" "+this.units[8*r+e],i){case"duration":return o;case"past":return o+" назад";case"future":return"через "+o}},timeMarker:"в",ampm:" утра, вечера",modifiers:[{name:"day",src:"позавчера",value:-2},{name:"day",src:"вчера",value:-1},{name:"day",src:"сегодня",value:0},{name:"day",src:"завтра",value:1},{name:"day",src:"послезавтра",value:2},{name:"sign",src:"назад",value:-1},{name:"sign",src:"через",value:1},{name:"shift",src:"прошл:ый|ой|ом",value:-1},{name:"shift",src:"следующ:ий|ей|ем",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{month} {year}","{0?} {shift} {unit=5-7}"],timeParse:["{date} {month} {year?} {1?}","{0?} {shift} {weekday}"]}),Date.addLocale("sv",{plural:!0,months:"januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december",weekdays:"söndag|sondag,måndag:|en+mandag:|en,tisdag,onsdag,torsdag,fredag,lördag|lordag",units:"millisekund:|er,sekund:|er,minut:|er,timm:e|ar,dag:|ar,veck:a|or|an,månad:|er|en+manad:|er|en,år:||et+ar:||et",numbers:"en|ett,två|tva,tre,fyra,fem,sex,sju,åtta|atta,nio,tio",tokens:"den,för|for",articles:"den","short":"den {d} {month} {yyyy}","long":"den {d} {month} {yyyy} {H}:{mm}",full:"{Weekday} den {d} {month} {yyyy} {H}:{mm}:{ss}",past:"{num} {unit} {sign}",future:"{sign} {num} {unit}",duration:"{num} {unit}",ampm:"am,pm",modifiers:[{name:"day",src:"förrgår|i förrgår|iförrgår|forrgar|i forrgar|iforrgar",value:-2},{name:"day",src:"går|i går|igår|gar|i gar|igar",value:-1},{name:"day",src:"dag|i dag|idag",value:0},{name:"day",src:"morgon|i morgon|imorgon",value:1},{name:"day",src:"över morgon|övermorgon|i över morgon|i övermorgon|iövermorgon|over morgon|overmorgon|i over morgon|i overmorgon|iovermorgon",value:2},{name:"sign",src:"sedan|sen",value:-1},{name:"sign",src:"om",value:1},{name:"shift",src:"i förra|förra|i forra|forra",value:-1},{name:"shift",src:"denna",value:0},{name:"shift",src:"nästa|nasta",value:1}],dateParse:["{num} {unit} {sign}","{sign} {num} {unit}","{1?} {num} {unit} {sign}","{shift} {unit=5-7}"],timeParse:["{0?} {weekday?} {date?} {month} {year}","{date} {month}","{shift} {weekday}"]}),Date.addLocale("zh-CN",{variant:!0,monthSuffix:"月",weekdays:"星期日|周日,星期一|周一,星期二|周二,星期三|周三,星期四|周四,星期五|周五,星期六|周六",units:"毫秒,秒钟,分钟,小时,天,个星期|周,个月,年",tokens:"日|号","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {tt}{h}:{mm}",full:"{yyyy}年{M}月{d}日 {weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"点|时,分钟?,秒",ampm:"上午,下午",modifiers:[{name:"day",src:"前天",value:-2},{name:"day",src:"昨天",value:-1},{name:"day",src:"今天",value:0},{name:"day",src:"明天",value:1},{name:"day",src:"后天",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"后",value:1},{name:"shift",src:"上|去",value:-1},{name:"shift",src:"这",value:0},{name:"shift",src:"下|明",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}年{month?}月?{date?}{0?}","{month}月{date?}{0?}","{date}[日号]"]}),Date.addLocale("zh-TW",{monthSuffix:"月",weekdays:"星期日|週日,星期一|週一,星期二|週二,星期三|週三,星期四|週四,星期五|週五,星期六|週六",units:"毫秒,秒鐘,分鐘,小時,天,個星期|週,個月,年",tokens:"日|號","short":"{yyyy}年{M}月{d}日","long":"{yyyy}年{M}月{d}日 {tt}{h}:{mm}",full:"{yyyy}年{M}月{d}日 {Weekday} {tt}{h}:{mm}:{ss}",past:"{num}{unit}{sign}",future:"{num}{unit}{sign}",duration:"{num}{unit}",timeSuffixes:"點|時,分鐘?,秒",ampm:"上午,下午",modifiers:[{name:"day",src:"前天",value:-2},{name:"day",src:"昨天",value:-1},{name:"day",src:"今天",value:0},{name:"day",src:"明天",value:1},{name:"day",src:"後天",value:2},{name:"sign",src:"前",value:-1},{name:"sign",src:"後",value:1},{name:"shift",src:"上|去",value:-1},{name:"shift",src:"這",value:0},{name:"shift",src:"下|明",value:1}],dateParse:["{num}{unit}{sign}","{shift}{unit=5-7}"],timeParse:["{shift}{weekday}","{year}年{month?}月?{date?}{0?}","{month}月{date?}{0?}","{date}[日號]"]}),s(Function,!0,!0,{lazy:function(t,e,n){function i(){return c.length<n-(u&&e?1:0)&&c.push([this,arguments]),u||(u=!0,e?o():Sn(i,r,o)),a}var o,r,s,a,l=this,c=[],u=!1;return t=t||1,n=n||1/0,r=Pi(t),s=Hi(r/t)||1,o=function(){var t,e=c.length;if(0!=e){for(t=Ii(e-s,0);e>t;)a=Function.prototype.apply.apply(l,c.shift()),e--;Sn(i,r,function(){u=!1,o()})}},i},throttle:function(t){return this.lazy(t,!0,1)},debounce:function(t){function e(){e.cancel(),Sn(e,t,n,this,arguments)}var n=this;return e},delay:function(t){var e=this,n=h(arguments,null,1);return Sn(e,t,e,e,n),e},every:function(t){function e(){n.apply(n,i),Sn(n,t,e)}var n=this,i=arguments;return i=i.length>1?h(i,null,1):[],Sn(n,t,e),n},cancel:function(){var t,e=this.timers;if(Ti(e))for(;t=e.shift();)clearTimeout(t);return this._canceled=!0,this},after:function(t){var e=this,n=0,i=[];if(ki(t)){if(0===t)return e.call(),e}else t=1;return function(){var o;return i.push(h(arguments)),n++,n==t?(o=e.call(this,i),n=0,i=[],o):void 0}},once:function(){return this.throttle(1/0,!0)},fill:function(){var t=this,e=h(arguments);return function(){var n=h(arguments);return e.forEach(function(t,e){(null!=t||e>=n.length)&&n.splice(e,0,t)}),t.apply(this,n)}}}),s(hi,!1,!0,{random:function(t,e){var n,i;return 1==arguments.length&&(e=t,t=0),n=Mi(t||0,m(e)?1:e),i=Ii(t||0,m(e)?1:e)+1,Ni(di.random()*(i-n)+n)}}),s(hi,!0,!0,{log:function(t){return di.log(this)/(t?di.log(t):1)},abbr:function(t){return kn(this,t,"kmbt",0,4)},metric:function(t,e){return kn(this,t,"nμm kMGTPE",4,m(e)?1:e)},bytes:function(t,e){return kn(this,t,"kMGTPE",0,m(e)?4:e,!0)+"B"},isInteger:function(){return this%1==0},isOdd:function(){return!isNaN(this)&&!this.isMultipleOf(2)},isEven:function(){return this.isMultipleOf(2)},isMultipleOf:function(t){return this%t===0},format:function(t,e,n){var i,o,r,s,a,l="";for(m(e)&&(e=","),m(n)&&(n="."),o=(ki(t)?E(this,t||0).toFixed(Ii(t,0)):this.toString()).replace(/^-/,""),r=o.split("."),s=r[0],a=r[1],i=s.length;i>0;i-=3)i<s.length&&(l=e+l),l=s.slice(Ii(0,i-3),i)+l;return a&&(l+=n+P("0",(t||0)-a.length)+a),(0>this?"-":"")+l},hex:function(t){return this.pad(t||1,!1,16)},times:function(t){if(t)for(var e=0;this>e;e++)t.call(this,e);return this.toNumber()},chr:function(){return ui.fromCharCode(this)},pad:function(t,e,n){return H(this,t,e,n)},ordinalize:function(){var t=Di(this),e=parseInt(t.toString().slice(-2));return this+M(e)},toNumber:function(){return parseFloat(this,10)}}),xn();var bo="isObject,isNaN".split(","),Co="keys,values,select,reject,each,merge,clone,equal,watch,tap,has,toQueryString".split(",");s(si,!1,!0,{watch:function(t,e,n){if(gi){var i=t[e];si.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return i},set:function(o){i=n.call(t,e,i,o)}})}}}),s(si,!1,function(){return arguments.length>1},{keys:function(t,e){var n=si.keys(t);return n.forEach(function(n){e.call(t,n,t[n])}),n}}),s(si,!1,!0,{isObject:function(t){return b(t)},isNaN:function(t){return ki(t)&&t.valueOf()!==t.valueOf()},equal:function(t,e){return F(t,e)},extended:function(t){return new R(t)},merge:function(t,e,n,i){var o,r,s,a,l,c,u;if(t&&"string"!=typeof e)for(o in e)if(v(e,o)&&t){if(a=e[o],l=t[o],c=p(l),r=y(a),s=y(l),u=c&&i===!1?l:a,c&&Ai(i)&&(u=i.call(e,o,l,a)),n&&(r||s))if(Ri(a))u=new ci(a.getTime());else{if(!Ei(a)){s||(t[o]=ai.isArray(a)?[]:{}),si.merge(t[o],a,n,i);continue}u=new li(a.source,I(a))}t[o]=u}return t},values:function(t,e){var n=[];return C(t,function(i,o){n.push(o),e&&e.call(t,o)}),n},clone:function(t,e){var n,o;if(!y(t))return t;if(o=i(t),Ri(t,o)&&t.clone)return t.clone();if(Ri(t,o)||Ei(t,o))return new t.constructor(t);if(t instanceof R)n=new R;else if(Ti(t,o))n=[];else{if(!b(t,o))throw new TypeError("Clone must be a basic data type.");n={}}return si.merge(n,t,e)},fromQueryString:function(t,e){var n=si.extended();return t=t&&t.toString?t.toString():"",t.replace(/^.*?\?/,"").split("&").forEach(function(t){var i=t.split("=");2===i.length&&Tn(n,i[0],decodeURIComponent(i[1]),e)}),n},toQueryString:function(t,e){return Rn(e,t)},tap:function(t,e){var n=e;return Ai(e)||(n=function(){e&&t[e]()}),n.call(t,t),t},has:function(t,e){return v(t,e)},select:function(t){return _n(t,arguments,!0)},reject:function(t){return _n(t,arguments,!1)}}),Dn(),On(),U(Co,R),Pn.prototype.toString=function(){return this.isValid()?this.start+".."+this.end:"Invalid Range"},s(Pn,!0,!0,{isValid:function(){return In(this.start)&&In(this.end)&&typeof this.start==typeof this.end},span:function(){return this.isValid()?Di(Nn(this.end)-Nn(this.start))+1:0/0},contains:function(t){return null==t?!1:t.start&&t.end?t.start>=this.start&&t.start<=this.end&&t.end>=this.start&&t.end<=this.end:t>=this.start&&t<=this.end},every:function(t,e){var n,i=this.start,o=this.end,r=i>o,s=i,a=0,l=[];for(Ai(t)&&(e=t,t=null),t=t||1,ki(i)?n=zn:xi(i)?n=Bn:Ri(i)&&(t=Ln(t),n=$n),r&&t>0&&(t*=-1);r?s>=o:o>=s;)l.push(s),e&&e(s,a),s=n(s,t),a++;
return l},union:function(t){return new Pn(this.start<t.start?this.start:t.start,this.end>t.end?this.end:t.end)},intersect:function(t){return t.start>this.end||t.end<this.start?new Pn(0/0,0/0):new Pn(this.start>t.start?this.start:t.start,this.end<t.end?this.end:t.end)},clone:function(){return new Pn(this.start,this.end)},clamp:function(t){var e,n=this.start,i=this.end,o=n>i?i:n,r=n>i?n:i;return e=o>t?o:t>r?r:t,Mn(e)}}),[hi,ui,ci].forEach(function(t){s(t,!1,!0,{range:function(e,n){return t.create&&(e=t.create(e),n=t.create(n)),new Pn(e,n)}})}),s(hi,!0,!0,{upto:function(t,e,n){return hi.range(this,t).every(n,e)},clamp:function(t,e){return new Pn(t,e).clamp(this)},cap:function(t){return this.clamp(ri,t)}}),s(hi,!0,!0,{downto:hi.prototype.upto}),s(ai,!1,function(t){return t instanceof Pn},{create:function(t){return t.every()}}),s(li,!1,!0,{escape:function(t){return L(t)}}),s(li,!0,!0,{getFlags:function(){return I(this)},setFlags:function(t){return li(this.source,t)},addFlag:function(t){return this.setFlags(I(this,t))},removeFlag:function(t){return this.setFlags(I(this).replace(t,""))}});var So,ko;s(ui,!0,!1,{repeat:function(t){return t=Wn(t),P(this,t)}}),s(ui,!0,function(t){return Ei(t)||arguments.length>2},{startsWith:function(t){var e,n=arguments,i=n[1],o=n[2],r=this;return i&&(r=r.slice(i)),m(o)&&(o=!0),e=Ei(t)?t.source.replace("^",""):L(t),li("^"+e,o?"":"i").test(r)},endsWith:function(t){var e,n=arguments,i=n[1],o=n[2],r=this;return p(i)&&(r=r.slice(0,i)),m(o)&&(o=!0),e=Ei(t)?t.source.replace("$",""):L(t),li(e+"$",o?"":"i").test(r)}}),s(ui,!0,!0,{escapeRegExp:function(){return L(this)},escapeURL:function(t){return t?encodeURIComponent(this):encodeURI(this)},unescapeURL:function(t){return t?decodeURI(this):decodeURIComponent(this)},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2f;")},unescapeHTML:function(){return this.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#x2f;/g,"/").replace(/&amp;/g,"&")},encodeBase64:function(){return So(unescape(encodeURIComponent(this)))},decodeBase64:function(){return decodeURIComponent(escape(ko(this)))},each:function(t,e){var n,i,o;if(Ai(t)?(e=t,t=/[\s\S]/g):t?xi(t)?t=li(L(t),"gi"):Ei(t)&&(t=li(t.source,I(t,"g"))):t=/[\s\S]/g,n=this.match(t)||[],e)for(i=0,o=n.length;o>i;i++)n[i]=e.call(this,n[i],i,n)||n[i];return n},shift:function(t){var e="";return t=t||0,this.codes(function(n){e+=D(n+t)}),e},codes:function(t){var e,n,i=[];for(e=0,n=this.length;n>e;e++){var o=this.charCodeAt(e);i.push(o),t&&t.call(this,o,e)}return i},chars:function(t){return this.each(t)},words:function(t){return this.trim().each(/\S+/g,t)},lines:function(t){return this.trim().each(/^.*$/gm,t)},paragraphs:function(t){var e=this.trim().split(/[\r\n]{2,}/);return e=e.map(function(e){if(t)var n=t.call(e);return n?n:e})},isBlank:function(){return 0===this.trim().length},has:function(t){return-1!==this.search(Ei(t)?t:L(t))},add:function(t,e){return e=m(e)?this.length:e,this.slice(0,e)+t+this.slice(e)},remove:function(t){return this.replace(t,"")},reverse:function(){return this.split("").reverse().join("")},compact:function(){return this.trim().replace(/([\r\n\s　])+/g,function(t,e){return"　"===e?e:" "})},at:function(){return j(this,arguments,!0)},from:function(t){return this.slice(Gn(this,t,!0))},to:function(t){return m(t)&&(t=this.length),this.slice(0,Gn(this,t))},dasherize:function(){return this.underscore().replace(/_/g,"-")},underscore:function(){return this.replace(/[-\s]+/g,"_").replace(ui.Inflector&&ui.Inflector.acronymRegExp,function(t,e){return(e>0?"_":"")+t.toLowerCase()}).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").toLowerCase()},camelize:function(t){return this.underscore().replace(/(^|_)([^_]+)/g,function(e,n,i,o){var r=Fn(i),s=t!==!1||o>0;return r?s?r:r.toLowerCase():s?i.capitalize():i})},spacify:function(){return this.underscore().replace(/_/g," ")},stripTags:function(){var t=this,e=arguments.length>0?arguments:[""];return d(e,function(e){t=t.replace(li("</?"+L(e)+"[^<>]*>","gi"),"")}),t},removeTags:function(){var t=this,e=arguments.length>0?arguments:["\\S+"];return d(e,function(e){var n=li("<("+e+")[^<>]*(?:\\/>|>.*?<\\/\\1>)","gi");t=t.replace(n,"")}),t},truncate:function(t,e,n){return Vn(this,t,e,n)},truncateOnWord:function(t,e,n){return Vn(this,t,e,n,!0)},pad:function(t,e){var n,i,o;return t=Wn(t),n=Ii(0,t-this.length)/2,i=Ni(n),o=Pi(n),jn(i,e)+this+jn(o,e)},padLeft:function(t,e){return t=Wn(t),jn(Ii(0,t-this.length),e)+this},padRight:function(t,e){return t=Wn(t),this+jn(Ii(0,t-this.length),e)},first:function(t){return m(t)&&(t=1),this.substr(0,t)},last:function(t){m(t)&&(t=1);var e=this.length-t<0?0:this.length-t;return this.substr(e)},toNumber:function(t){return N(this,t)},capitalize:function(t){var e;return this.toLowerCase().replace(t?/[^']/g:/^\S/,function(t){var n,i=t.toUpperCase();return n=e?t:i,e=i!==t,n})},assign:function(){var t={};return d(arguments,function(e,n){y(e)?k(t,e):t[n+1]=e}),this.replace(/\{([^{]+?)\}/g,function(e,n){return v(t,n)?t[n]:e})}}),s(ui,!0,!0,{insert:ui.prototype.add}),qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");var xo,To,Ro=[],Eo=[],Ao=[],_o=[],Do={};To={acronym:function(t){Do[t.toLowerCase()]=t;var e=si.keys(Do).map(function(t){return Do[t]});To.acronymRegExp=li(e.join("|"),"g")},plural:function(t,e){Yn(Ro,t,e)},singular:function(t,e){Yn(Eo,t,e)},irregular:function(t,e){var n=t.first(),i=t.from(1),o=e.first(),r=e.from(1),s=o.toUpperCase(),a=o.toLowerCase(),l=n.toUpperCase(),c=n.toLowerCase();Kn(Ao,t),Kn(Ao,e),l==s?(To.plural(new li("({1}){2}$".assign(n,i),"i"),"$1"+r),To.plural(new li("({1}){2}$".assign(o,r),"i"),"$1"+r),To.singular(new li("({1}){2}$".assign(o,r),"i"),"$1"+i)):(To.plural(new li("{1}{2}$".assign(l,i)),s+r),To.plural(new li("{1}{2}$".assign(c,i)),a+r),To.plural(new li("{1}{2}$".assign(s,r)),s+r),To.plural(new li("{1}{2}$".assign(a,r)),a+r),To.singular(new li("{1}{2}$".assign(s,r)),l+i),To.singular(new li("{1}{2}$".assign(a,r)),c+i))},uncountable:function(t){var e=ai.isArray(t)?t:h(arguments);Ao=Ao.concat(e)},human:function(t,e){_o.unshift({rule:t,replacement:e})},clear:function(t){Xn(t,"singulars")&&(Eo=[]),Xn(t,"plurals")&&(Ro=[]),Xn(t,"uncountables")&&(Ao=[]),Xn(t,"humans")&&(_o=[]),Xn(t,"acronyms")&&(Do={})}},xo=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"],To.plural(/$/,"s"),To.plural(/s$/gi,"s"),To.plural(/(ax|test)is$/gi,"$1es"),To.plural(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1i"),To.plural(/(census|alias|status)$/gi,"$1es"),To.plural(/(bu)s$/gi,"$1ses"),To.plural(/(buffal|tomat)o$/gi,"$1oes"),To.plural(/([ti])um$/gi,"$1a"),To.plural(/([ti])a$/gi,"$1a"),To.plural(/sis$/gi,"ses"),To.plural(/f+e?$/gi,"ves"),To.plural(/(cuff|roof)$/gi,"$1s"),To.plural(/([ht]ive)$/gi,"$1s"),To.plural(/([^aeiouy]o)$/gi,"$1es"),To.plural(/([^aeiouy]|qu)y$/gi,"$1ies"),To.plural(/(x|ch|ss|sh)$/gi,"$1es"),To.plural(/(matr|vert|ind)(?:ix|ex)$/gi,"$1ices"),To.plural(/([ml])ouse$/gi,"$1ice"),To.plural(/([ml])ice$/gi,"$1ice"),To.plural(/^(ox)$/gi,"$1en"),To.plural(/^(oxen)$/gi,"$1"),To.plural(/(quiz)$/gi,"$1zes"),To.plural(/(phot|cant|hom|zer|pian|portic|pr|quart|kimon)o$/gi,"$1os"),To.plural(/(craft)$/gi,"$1"),To.plural(/([ft])[eo]{2}(th?)$/gi,"$1ee$2"),To.singular(/s$/gi,""),To.singular(/([pst][aiu]s)$/gi,"$1"),To.singular(/([aeiouy])ss$/gi,"$1ss"),To.singular(/(n)ews$/gi,"$1ews"),To.singular(/([ti])a$/gi,"$1um"),To.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/gi,"$1$2sis"),To.singular(/(^analy)ses$/gi,"$1sis"),To.singular(/(i)(f|ves)$/i,"$1fe"),To.singular(/([aeolr]f?)(f|ves)$/i,"$1f"),To.singular(/([ht]ive)s$/gi,"$1"),To.singular(/([^aeiouy]|qu)ies$/gi,"$1y"),To.singular(/(s)eries$/gi,"$1eries"),To.singular(/(m)ovies$/gi,"$1ovie"),To.singular(/(x|ch|ss|sh)es$/gi,"$1"),To.singular(/([ml])(ous|ic)e$/gi,"$1ouse"),To.singular(/(bus)(es)?$/gi,"$1"),To.singular(/(o)es$/gi,"$1"),To.singular(/(shoe)s?$/gi,"$1"),To.singular(/(cris|ax|test)[ie]s$/gi,"$1is"),To.singular(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1us"),To.singular(/(census|alias|status)(es)?$/gi,"$1"),To.singular(/^(ox)(en)?/gi,"$1"),To.singular(/(vert|ind)(ex|ices)$/gi,"$1ex"),To.singular(/(matr)(ix|ices)$/gi,"$1ix"),To.singular(/(quiz)(zes)?$/gi,"$1"),To.singular(/(database)s?$/gi,"$1"),To.singular(/ee(th?)$/gi,"oo$1"),To.irregular("person","people"),To.irregular("man","men"),To.irregular("child","children"),To.irregular("sex","sexes"),To.irregular("move","moves"),To.irregular("save","saves"),To.irregular("cow","kine"),To.irregular("goose","geese"),To.irregular("zombie","zombies"),To.uncountable("equipment,information,rice,money,species,series,fish,sheep,jeans".split(",")),s(ui,!0,!0,{pluralize:function(){return Qn(this,!0)},singularize:function(){return Qn(this,!1)},humanize:function(){var t,e=Zn(this,_o);return e=e.replace(/_id$/g,""),e=e.replace(/(_)?([a-z\d]*)/gi,function(e,n,i){return t=v(Do,i)?Do[i]:null,(n?" ":"")+(t||i.toLowerCase())}),ti(e)},titleize:function(){var t,e,n,i=/[.:;!]$/;return this.spacify().humanize().words(function(o,r,s){return t=i.test(o),n=0==r||r==s.length-1||t||e,e=t,n||-1===xo.indexOf(o)?ti(o):o}).join(" ")},parameterize:function(t){var e=this;return void 0===t&&(t="-"),e.normalize&&(e=e.normalize()),e=e.replace(/[^a-z0-9\-_]+/gi,t),t&&(e=e.replace(new li("^{sep}+|{sep}+$|({sep}){sep}+".assign({sep:L(t)}),"g"),"$1")),encodeURI(e.toLowerCase())}}),ui.Inflector=To,ui.Inflector.acronyms=Do;var Oo,Po=[{names:["Arabic"],source:"؀-ۿ"},{names:["Cyrillic"],source:"Ѐ-ӿ"},{names:["Devanagari"],source:"ऀ-ॿ"},{names:["Greek"],source:"Ͱ-Ͽ"},{names:["Hangul"],source:"가-힯ᄀ-ᇿ"},{names:["Han","Kanji"],source:"一-鿿豈-﫿"},{names:["Hebrew"],source:"֐-׿"},{names:["Hiragana"],source:"぀-ゟ・-ー"},{names:["Kana"],source:"぀-ヿ｡-ﾟ"},{names:["Katakana"],source:"゠-ヿ｡-ﾟ"},{names:["Latin"],source:"--ÿĀ-ſƀ-ɏ"},{names:["Thai"],source:"฀-๿"}],No=65248,Ho=[{type:"a",start:65,end:90},{type:"a",start:97,end:122},{type:"n",start:48,end:57},{type:"p",start:33,end:47},{type:"p",start:58,end:64},{type:"p",start:91,end:96},{type:"p",start:123,end:126}],Mo=/[\u0020-\u00A5]|[\uFF61-\uFF9F][ﾞﾟ]?/g,Io=/[\u3000-\u301C]|[\u301A-\u30FC]|[\uFF01-\uFF60]|[\uFFE0-\uFFE6]/g,Lo="｡､｢｣¥¢£",$o="。、「」￥￠￡",Bo=/[カキクケコサシスセソタチツテトハヒフヘホ]/,zo=/[ハヒフヘホヲ]/,Fo="ｱｲｳｴｵｧｨｩｪｫｶｷｸｹｺｻｼｽｾｿﾀﾁﾂｯﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔｬﾕｭﾖｮﾗﾘﾙﾚﾛﾜｦﾝｰ･",Wo="アイウエオァィゥェォカキクケコサシスセソタチツッテトナニヌネノハヒフヘホマミムメモヤャユュヨョラリルレロワヲンー・";s(ui,!0,!0,{hankaku:function(){return ni(this,arguments,Io,"hankaku")},zenkaku:function(){return ni(this,arguments,Mo,"zenkaku")},hiragana:function(t){var e=this;return t!==!1&&(e=e.zenkaku("k")),e.replace(/[\u30A1-\u30F6]/g,function(t){return t.shift(-96)})},katakana:function(){return this.replace(/[\u3041-\u3096]/g,function(t){return t.shift(96)})}}),ei()}();

/*jQuery 2.1.3*/
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=Z.type(e);return"function"===n||Z.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function i(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return q.call(t,e)>=0!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=pt[e]={};return Z.each(e.match(ft)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function l(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(bt,"-$1").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:wt.test(n)?Z.parseJSON(n):n}catch(r){}yt.set(e,t,n)}else n=void 0;return n}function c(){return!0}function u(){return!1}function h(){try{return J.activeElement}catch(e){}}function d(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function f(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function p(e){var t=Lt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,i=e.length;i>n;n++)vt.set(e[n],"globalEval",!t||vt.get(t[n],"globalEval"))}function g(e,t){var n,i,r,o,s,a,l,c;if(1===t.nodeType){if(vt.hasData(e)&&(o=vt.access(e),s=vt.set(t,o),c=o.events)){delete s.handle,s.events={};for(r in c)for(n=0,i=c[r].length;i>n;n++)Z.event.add(t,r,c[r][n])}yt.hasData(e)&&(a=yt.access(e),l=Z.extend({},a),yt.set(t,l))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&xt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function w(t,n){var i,r=Z(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:Z.css(r[0],"display");return r.detach(),o}function b(e){var t=J,n=jt[e];return n||(n=w(e,t),"none"!==n&&n||(Bt=(Bt||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Bt[0].contentDocument,t.write(),t.close(),n=w(e,t),Bt.detach()),jt[e]=n),n}function C(e,t,n){var i,r,o,s,a=e.style;return n=n||Wt(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),zt.test(s)&&Ft.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function S(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function k(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),i=t,r=Xt.length;r--;)if(t=Xt[r]+n,t in e)return t;return i}function x(e,t,n){var i=Ut.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function T(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+St[o],!0,r)),i?("content"===n&&(s-=Z.css(e,"padding"+St[o],!0,r)),"margin"!==n&&(s-=Z.css(e,"border"+St[o]+"Width",!0,r))):(s+=Z.css(e,"padding"+St[o],!0,r),"padding"!==n&&(s+=Z.css(e,"border"+St[o]+"Width",!0,r)));return s}function E(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=Wt(e),s="border-box"===Z.css(e,"boxSizing",!1,o);if(0>=r||null==r){if(r=C(e,t,o),(0>r||null==r)&&(r=e.style[t]),zt.test(r))return r;i=s&&(Y.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+T(e,t,n||(s?"border":"content"),i,o)+"px"}function R(e,t){for(var n,i,r,o=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(o[s]=vt.get(i,"olddisplay"),n=i.style.display,t?(o[s]||"none"!==n||(i.style.display=""),""===i.style.display&&kt(i)&&(o[s]=vt.access(i,"olddisplay",b(i.nodeName)))):(r=kt(i),"none"===n&&r||vt.set(i,"olddisplay",r?n:Z.css(i,"display"))));for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[s]||"":"none"));return e}function A(e,t,n,i,r){return new A.prototype.init(e,t,n,i,r)}function D(){return setTimeout(function(){Yt=void 0}),Yt=Z.now()}function _(e,t){var n,i=0,r={height:e};for(t=t?1:0;4>i;i+=2-t)n=St[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function O(e,t,n){for(var i,r=(nn[t]||[]).concat(nn["*"]),o=0,s=r.length;s>o;o++)if(i=r[o].call(n,t,e))return i}function N(e,t,n){var i,r,o,s,a,l,c,u,h=this,d={},f=e.style,p=e.nodeType&&kt(e),m=vt.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,h.always(function(){h.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],c=Z.css(e,"display"),u="none"===c?vt.get(e,"olddisplay")||b(e.nodeName):c,"inline"===u&&"none"===Z.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],Qt.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(p?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;p=!0}d[i]=m&&m[i]||Z.style(e,i)}else c=void 0;if(Z.isEmptyObject(d))"inline"===("none"===c?b(e.nodeName):c)&&(f.display=c);else{m?"hidden"in m&&(p=m.hidden):m=vt.access(e,"fxshow",{}),o&&(m.hidden=!p),p?Z(e).show():h.done(function(){Z(e).hide()}),h.done(function(){var t;vt.remove(e,"fxshow");for(t in d)Z.style(e,t,d[t])});for(i in d)s=O(p?m[i]:0,i,h),i in m||(m[i]=s.start,p&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function P(e,t){var n,i,r,o,s;for(n in e)if(i=Z.camelCase(n),r=t[i],o=e[n],Z.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),s=Z.cssHooks[i],s&&"expand"in s){o=s.expand(o),delete e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function H(e,t,n){var i,r,o=0,s=tn.length,a=Z.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=Yt||D(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,o=1-i,s=0,l=c.tweens.length;l>s;s++)c.tweens[s].run(o);return a.notifyWith(e,[c,o,n]),1>o&&l?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Yt||D(),duration:n.duration,tweens:[],createTween:function(t,n){var i=Z.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;i>n;n++)c.tweens[n].run(1);return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),u=c.props;for(P(u,c.opts.specialEasing);s>o;o++)if(i=tn[o].call(c,e,u,c.opts))return i;return Z.map(u,O,c),Z.isFunction(c.opts.start)&&c.opts.start.call(e,c),Z.fx.timer(Z.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function M(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(ft)||[];if(Z.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function L(e,t,n,i){function r(a){var l;return o[a]=!0,Z.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||s||o[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),r(c),!1)}),l}var o={},s=e===bn;return r(t.dataTypes[0])||!o["*"]&&r("*")}function I(e,t){var n,i,r=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&Z.extend(!0,e,i),e}function $(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function B(e,t,n,i){var r,o,s,a,l,c={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(s=c[l+" "+o]||c["* "+o],!s)for(r in c)if(a=r.split(" "),a[1]===o&&(s=c[l+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[r]:c[r]!==!0&&(o=a[0],u.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(h){return{state:"parsererror",error:s?h:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function j(e,t,n,i){var r;if(Z.isArray(t))Z.each(t,function(t,r){n||Tn.test(e)?i(e,r):j(e+"["+("object"==typeof r?t:"")+"]",r,n,i)});else if(n||"object"!==Z.type(t))i(e,t);else for(r in t)j(e+"["+r+"]",t[r],n,i)}function F(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var z=[],W=z.slice,V=z.concat,U=z.push,q=z.indexOf,G={},K=G.toString,X=G.hasOwnProperty,Y={},J=e.document,Q="2.1.3",Z=function(e,t){return new Z.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,it=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:Q,constructor:Z,selector:"",length:0,toArray:function(){return W.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:W.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:z.sort,splice:z.splice},Z.extend=Z.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(c&&i&&(Z.isPlainObject(i)||(r=Z.isArray(i)))?(r?(r=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(c,o,i)):void 0!==i&&(s[t]=i));return s},Z.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==Z.type(e)||e.nodeType||Z.isWindow(e)?!1:e.constructor&&!X.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?G[K.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,it)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var r,o=0,s=e.length,a=n(e);if(i){if(a)for(;s>o&&(r=t.apply(e[o],i),r!==!1);o++);else for(o in e)if(r=t.apply(e[o],i),r===!1)break}else if(a)for(;s>o&&(r=t.call(e[o],o,e[o]),r!==!1);o++);else for(o in e)if(r=t.call(e[o],o,e[o]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?Z.merge(i,"string"==typeof e?[e]:e):U.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:q.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;n>i;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;s>o;o++)i=!t(e[o],o),i!==a&&r.push(e[o]);return r},map:function(e,t,i){var r,o=0,s=e.length,a=n(e),l=[];if(a)for(;s>o;o++)r=t(e[o],o,i),null!=r&&l.push(r);else for(o in e)r=t(e[o],o,i),null!=r&&l.push(r);return V.apply([],l)},guid:1,proxy:function(e,t){var n,i,r;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(i=W.call(arguments,2),r=function(){return e.apply(t||this,i.concat(W.call(arguments)))},r.guid=e.guid=e.guid||Z.guid++,r):void 0},now:Date.now,support:Y}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()});var rt=function(e){function t(e,t,n,i){var r,o,s,a,l,c,h,f,p,m;if((t?t.ownerDocument||t:j)!==N&&O(t),t=t||N,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!i&&H){if(11!==a&&(r=yt.exec(e)))if(s=r[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&$(t,o)&&o.id===s)return n.push(o),n}else{if(r[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((s=r[3])&&C.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(s)),n}if(C.qsa&&(!M||!M.test(e))){if(f=h=B,p=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=T(e),(h=t.getAttribute("id"))?f=h.replace(bt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",l=c.length;l--;)c[l]=f+d(c[l]);p=wt.test(e)&&u(t.parentNode)||t,m=c.join(",")}if(m)try{return Q.apply(n,p.querySelectorAll(m)),n}catch(g){}finally{h||t.removeAttribute("id")}}}return R(e.replace(lt,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>S.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[B]=!0,e}function r(e){var t=N.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=e.length;i--;)S.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function h(){}function d(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;return i}function f(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=z++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,o)}:function(t,n,s){var a,l,c=[F,o];if(s){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(l=t[B]||(t[B]={}),(a=l[i])&&a[0]===F&&a[1]===o)return c[2]=a[2];if(l[i]=c,c[2]=e(t,n,s))return!0}}}function p(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function m(e,n,i){for(var r=0,o=n.length;o>r;r++)t(e,n[r],i);return i}function g(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;l>a;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),c&&t.push(a));return s}function v(e,t,n,r,o,s){return r&&!r[B]&&(r=v(r)),o&&!o[B]&&(o=v(o,s)),i(function(i,s,a,l){var c,u,h,d=[],f=[],p=s.length,v=i||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?v:g(v,d,e,a,l),w=n?o||(i?e:p||r)?[]:s:y;if(n&&n(y,w,a,l),r)for(c=g(w,f),r(c,[],a,l),u=c.length;u--;)(h=c[u])&&(w[f[u]]=!(y[f[u]]=h));if(i){if(o||e){if(o){for(c=[],u=w.length;u--;)(h=w[u])&&c.push(y[u]=h);o(null,w=[],c,l)}for(u=w.length;u--;)(h=w[u])&&(c=o?et(i,h):d[u])>-1&&(i[c]=!(s[c]=h))}}else w=g(w===s?w.splice(p,w.length):w),o?o(null,s,w,l):Q.apply(s,w)})}function y(e){for(var t,n,i,r=e.length,o=S.relative[e[0].type],s=o||S.relative[" "],a=o?1:0,l=f(function(e){return e===t},s,!0),c=f(function(e){return et(t,e)>-1},s,!0),u=[function(e,n,i){var r=!o&&(i||n!==A)||((t=n).nodeType?l(e,n,i):c(e,n,i));return t=null,r}];r>a;a++)if(n=S.relative[e[a].type])u=[f(p(u),n)];else{if(n=S.filter[e[a].type].apply(null,e[a].matches),n[B]){for(i=++a;r>i&&!S.relative[e[i].type];i++);return v(a>1&&p(u),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(lt,"$1"),n,i>a&&y(e.slice(a,i)),r>i&&y(e=e.slice(i)),r>i&&d(e))}u.push(n)}return p(u)}function w(e,n){var r=n.length>0,o=e.length>0,s=function(i,s,a,l,c){var u,h,d,f=0,p="0",m=i&&[],v=[],y=A,w=i||o&&S.find.TAG("*",c),b=F+=null==y?1:Math.random()||.1,C=w.length;for(c&&(A=s!==N&&s);p!==C&&null!=(u=w[p]);p++){if(o&&u){for(h=0;d=e[h++];)if(d(u,s,a)){l.push(u);break}c&&(F=b)}r&&((u=!d&&u)&&f--,i&&m.push(u))}if(f+=p,r&&p!==f){for(h=0;d=n[h++];)d(m,v,s,a);if(i){if(f>0)for(;p--;)m[p]||v[p]||(v[p]=Y.call(l));v=g(v)}Q.apply(l,v),c&&!i&&v.length>0&&f+n.length>1&&t.uniqueSort(l)}return c&&(F=b,A=y),m};return r?i(s):s}var b,C,S,k,x,T,E,R,A,D,_,O,N,P,H,M,L,I,$,B="sizzle"+1*new Date,j=e.document,F=0,z=0,W=n(),V=n(),U=n(),q=function(e,t){return e===t&&(_=!0),0},G=1<<31,K={}.hasOwnProperty,X=[],Y=X.pop,J=X.push,Q=X.push,Z=X.slice,et=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},tt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",rt=it.replace("w","w#"),ot="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+rt+"))|)"+nt+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),lt=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ct=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ht=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(st),ft=new RegExp("^"+rt+"$"),pt={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+tt+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wt=/[+~]/,bt=/'|\\/g,Ct=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),St=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},kt=function(){O()};try{Q.apply(X=Z.call(j.childNodes),j.childNodes),X[j.childNodes.length].nodeType}catch(xt){Q={apply:X.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}C=t.support={},x=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},O=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:j;return i!==N&&9===i.nodeType&&i.documentElement?(N=i,P=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",kt,!1):n.attachEvent&&n.attachEvent("onunload",kt)),H=!x(i),C.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),C.getElementsByTagName=r(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),C.getElementsByClassName=vt.test(i.getElementsByClassName),C.getById=r(function(e){return P.appendChild(e).id=B,!i.getElementsByName||!i.getElementsByName(B).length}),C.getById?(S.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&H){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},S.filter.ID=function(e){var t=e.replace(Ct,St);return function(e){return e.getAttribute("id")===t}}):(delete S.find.ID,S.filter.ID=function(e){var t=e.replace(Ct,St);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),S.find.TAG=C.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):C.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},S.find.CLASS=C.getElementsByClassName&&function(e,t){return H?t.getElementsByClassName(e):void 0},L=[],M=[],(C.qsa=vt.test(i.querySelectorAll))&&(r(function(e){P.appendChild(e).innerHTML="<a id='"+B+"'></a><select id='"+B+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&M.push("[*^$]="+nt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||M.push("\\["+nt+"*(?:value|"+tt+")"),e.querySelectorAll("[id~="+B+"-]").length||M.push("~="),e.querySelectorAll(":checked").length||M.push(":checked"),e.querySelectorAll("a#"+B+"+*").length||M.push(".#.+[+~]")}),r(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&M.push("name"+nt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(C.matchesSelector=vt.test(I=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&r(function(e){C.disconnectedMatch=I.call(e,"div"),I.call(e,"[s!='']:x"),L.push("!=",st)}),M=M.length&&new RegExp(M.join("|")),L=L.length&&new RegExp(L.join("|")),t=vt.test(P.compareDocumentPosition),$=t||vt.test(P.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},q=t?function(e,t){if(e===t)return _=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!C.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===j&&$(j,e)?-1:t===i||t.ownerDocument===j&&$(j,t)?1:D?et(D,e)-et(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return _=!0,0;var n,r=0,o=e.parentNode,a=t.parentNode,l=[e],c=[t];if(!o||!a)return e===i?-1:t===i?1:o?-1:a?1:D?et(D,e)-et(D,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;l[r]===c[r];)r++;return r?s(l[r],c[r]):l[r]===j?-1:c[r]===j?1:0},i):N},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==N&&O(e),n=n.replace(ht,"='$1']"),!(!C.matchesSelector||!H||L&&L.test(n)||M&&M.test(n)))try{var i=I.call(e,n);if(i||C.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(r){}return t(n,N,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==N&&O(e),$(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==N&&O(e);var n=S.attrHandle[t.toLowerCase()],i=n&&K.call(S.attrHandle,t.toLowerCase())?n(e,t,!H):void 0;return void 0!==i?i:C.attributes||!H?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(_=!C.detectDuplicates,D=!C.sortStable&&e.slice(0),e.sort(q),_){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return D=null,e},k=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=k(t);return n},S=t.selectors={cacheLength:50,createPseudo:i,match:pt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ct,St),e[3]=(e[3]||e[4]||e[5]||"").replace(Ct,St),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&dt.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ct,St).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+nt+")"+e+"("+nt+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e);return null==o?"!="===n:n?(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(at," ")+" ").indexOf(i)>-1:"|="===n?o===i||o.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,h,d,f,p,m=o!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a;if(g){if(o){for(;m;){for(h=t;h=h[m];)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[s?g.firstChild:g.lastChild],s&&y){for(u=g[B]||(g[B]={}),c=u[e]||[],f=c[0]===F&&c[1],d=c[0]===F&&c[2],h=f&&g.childNodes[f];h=++f&&h&&h[m]||(d=f=0)||p.pop();)if(1===h.nodeType&&++d&&h===t){u[e]=[F,f,d];break}}else if(y&&(c=(t[B]||(t[B]={}))[e])&&c[0]===F)d=c[1];else for(;(h=++f&&h&&h[m]||(d=f=0)||p.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++d||(y&&((h[B]||(h[B]={}))[e]=[F,d]),h!==t)););return d-=r,d===i||d%i===0&&d/i>=0}}},PSEUDO:function(e,n){var r,o=S.pseudos[e]||S.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[B]?o(n):o.length>1?(r=[e,e,"",n],S.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),s=r.length;s--;)i=et(e,r[s]),e[i]=!(t[i]=r[s])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=E(e.replace(lt,"$1"));return r[B]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(Ct,St),function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ct,St).toLowerCase(),function(t){var n;do if(n=H?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===P},focus:function(e){return e===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!S.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:c(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},S.pseudos.nth=S.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})S.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})S.pseudos[b]=l(b);return h.prototype=S.filters=S.pseudos,S.setFilters=new h,T=t.tokenize=function(e,n){var i,r,o,s,a,l,c,u=V[e+" "];if(u)return n?0:u.slice(0);for(a=e,l=[],c=S.preFilter;a;){(!i||(r=ct.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=ut.exec(a))&&(i=r.shift(),o.push({value:i,type:r[0].replace(lt," ")}),a=a.slice(i.length));for(s in S.filter)!(r=pt[s].exec(a))||c[s]&&!(r=c[s](r))||(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):V(e,l).slice(0)},E=t.compile=function(e,t){var n,i=[],r=[],o=U[e+" "];if(!o){for(t||(t=T(e)),n=t.length;n--;)o=y(t[n]),o[B]?i.push(o):r.push(o);o=U(e,w(r,i)),o.selector=e}return o},R=t.select=function(e,t,n,i){var r,o,s,a,l,c="function"==typeof e&&e,h=!i&&T(e=c.selector||e);if(n=n||[],1===h.length){if(o=h[0]=h[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&C.getById&&9===t.nodeType&&H&&S.relative[o[1].type]){if(t=(S.find.ID(s.matches[0].replace(Ct,St),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=pt.needsContext.test(e)?0:o.length;r--&&(s=o[r],!S.relative[a=s.type]);)if((l=S.find[a])&&(i=l(s.matches[0].replace(Ct,St),wt.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(r,1),e=i.length&&d(o),!e)return Q.apply(n,i),n;break}}return(c||E(e,h))(i,t,!H,n,wt.test(e)&&u(t.parentNode)||t),n},C.sortStable=B.split("").sort(q).join("")===B,C.detectDuplicates=!!_,O(),C.sortDetached=r(function(e){return 1&e.compareDocumentPosition(N.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),C.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(tt,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);Z.find=rt,Z.expr=rt.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=rt.uniqueSort,Z.text=rt.getText,Z.isXMLDoc=rt.isXML,Z.contains=rt.contains;var ot=Z.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?Z.find.matchesSelector(i,e)?[i]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,i=[],r=this;if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(r[t],this))return!0
}));for(t=0;n>t;t++)Z.find(e,r[t],i);return i=this.pushStack(n>1?Z.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&ot.test(e)?Z(e):e||[],!1).length}});var lt,ct=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ut=Z.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ct.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||lt).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),st.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof lt.ready?lt.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};ut.prototype=Z.fn,lt=Z(J);var ht=/^(?:parents|prev(?:Until|All))/,dt={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&Z(e).is(n))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,r=this.length,o=[],s=ot.test(e)||"string"!=typeof e?Z(e,t||this.context):0;r>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Z.unique(o):o)},index:function(e){return e?"string"==typeof e?q.call(Z(e),this[0]):q.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,i){var r=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=Z.filter(i,r)),this.length>1&&(dt[e]||Z.unique(r),ht.test(e)&&r.reverse()),this.pushStack(r)}});var ft=/\S+/g,pt={};Z.Callbacks=function(e){e="string"==typeof e?pt[e]||o(e):Z.extend({},e);var t,n,i,r,s,a,l=[],c=!e.once&&[],u=function(o){for(t=e.memory&&o,n=!0,a=r||0,r=0,s=l.length,i=!0;l&&s>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}i=!1,l&&(c?c.length&&u(c.shift()):t?l=[]:h.disable())},h={add:function(){if(l){var n=l.length;!function o(t){Z.each(t,function(t,n){var i=Z.type(n);"function"===i?e.unique&&h.has(n)||l.push(n):n&&n.length&&"string"!==i&&o(n)})}(arguments),i?s=l.length:t&&(r=n,u(t))}return this},remove:function(){return l&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,l,n))>-1;)l.splice(n,1),i&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],s=0,this},disable:function(){return l=c=t=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,t||h.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!l||n&&!c||(t=t||[],t=[e,t.slice?t.slice():t],i?c.push(t):u(t)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!n}};return h},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t];r[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,i):i}},r={};return i.pipe=i.then,Z.each(t,function(e,o){var s=o[2],a=o[3];i[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=s.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,o=W.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,l=1===a?e:Z.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?W.call(arguments):r,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>r;r++)o[r]&&Z.isFunction(o[r].promise)?o[r].promise().done(c(r,i,o)).fail(l.reject).progress(c(r,n,t)):--a;return a||l.resolveWith(i,o),l.promise()}});var mt;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(mt.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(t){return mt||(mt=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),mt.promise(t)},Z.ready.promise();var gt=Z.access=function(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;if("object"===Z.type(n)){r=!0;for(a in n)Z.access(e,t,a,n[a],!0,o,s)}else if(void 0!==i&&(r=!0,Z.isFunction(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(Z(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):o};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,r=this.key(e),o=this.cache[r];if("string"==typeof t)o[t]=n;else if(Z.isEmptyObject(o))Z.extend(this.cache[r],t);else for(i in t)o[i]=t[i];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,r,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Z.isArray(t)?i=t.concat(t.map(Z.camelCase)):(r=Z.camelCase(t),t in s?i=[t,r]:(i=r,i=i in s?[i]:i.match(ft)||[])),n=i.length;for(;n--;)delete s[i[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var vt=new a,yt=new a,wt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bt=/([A-Z])/g;Z.extend({hasData:function(e){return yt.hasData(e)||vt.hasData(e)},data:function(e,t,n){return yt.access(e,t,n)},removeData:function(e,t){yt.remove(e,t)},_data:function(e,t,n){return vt.access(e,t,n)},_removeData:function(e,t){vt.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=yt.get(o),1===o.nodeType&&!vt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=Z.camelCase(i.slice(5)),l(o,i,r[i])));vt.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){yt.set(this,e)}):gt(this,function(t){var n,i=Z.camelCase(e);if(o&&void 0===t){if(n=yt.get(o,e),void 0!==n)return n;if(n=yt.get(o,i),void 0!==n)return n;if(n=l(o,i,void 0),void 0!==n)return n}else this.each(function(){var n=yt.get(this,i);yt.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&yt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){yt.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=vt.get(e,t),n&&(!i||Z.isArray(n)?i=vt.access(e,t,Z.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),i=n.length,r=n.shift(),o=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,s,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return vt.get(e,n)||vt.access(e,n,{empty:Z.Callbacks("once memory").add(function(){vt.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=Z.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=vt.get(o[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var Ct=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,St=["Top","Right","Bottom","Left"],kt=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},xt=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Tt="undefined";Y.focusinBubbles="onfocusin"in e;var Et=/^key/,Rt=/^(?:mouse|pointer|contextmenu)|click/,At=/^(?:focusinfocus|focusoutblur)$/,Dt=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,c,u,h,d,f,p,m,g=vt.get(e);if(g)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=Z.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof Z!==Tt&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ft)||[""],c=t.length;c--;)a=Dt.exec(t[c])||[],f=m=a[1],p=(a[2]||"").split(".").sort(),f&&(h=Z.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,h=Z.event.special[f]||{},u=Z.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&Z.expr.match.needsContext.test(r),namespace:p.join(".")},o),(d=l[f])||(d=l[f]=[],d.delegateCount=0,h.setup&&h.setup.call(e,i,p,s)!==!1||e.addEventListener&&e.addEventListener(f,s,!1)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,u):d.push(u),Z.event.global[f]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,c,u,h,d,f,p,m,g=vt.hasData(e)&&vt.get(e);if(g&&(l=g.events)){for(t=(t||"").match(ft)||[""],c=t.length;c--;)if(a=Dt.exec(t[c])||[],f=m=a[1],p=(a[2]||"").split(".").sort(),f){for(h=Z.event.special[f]||{},f=(i?h.delegateType:h.bindType)||f,d=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)u=d[o],!r&&m!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(o,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));s&&!d.length&&(h.teardown&&h.teardown.call(e,p,g.handle)!==!1||Z.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)Z.event.remove(e,f+t[c],n,i,!0);Z.isEmptyObject(l)&&(delete g.handle,vt.remove(e,"events"))}},trigger:function(t,n,i,r){var o,s,a,l,c,u,h,d=[i||J],f=X.call(t,"type")?t.type:t,p=X.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!At.test(f+Z.event.triggered)&&(f.indexOf(".")>=0&&(p=f.split("."),f=p.shift(),p.sort()),c=f.indexOf(":")<0&&"on"+f,t=t[Z.expando]?t:new Z.Event(f,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=p.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:Z.makeArray(n,[t]),h=Z.event.special[f]||{},r||!h.trigger||h.trigger.apply(i,n)!==!1)){if(!r&&!h.noBubble&&!Z.isWindow(i)){for(l=h.delegateType||f,At.test(l+f)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||J)&&d.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)t.type=o>1?l:h.bindType||f,u=(vt.get(s,"events")||{})[t.type]&&vt.get(s,"handle"),u&&u.apply(s,n),u=c&&s[c],u&&u.apply&&Z.acceptData(s)&&(t.result=u.apply(s,n),t.result===!1&&t.preventDefault());return t.type=f,r||t.isDefaultPrevented()||h._default&&h._default.apply(d.pop(),n)!==!1||!Z.acceptData(i)||c&&Z.isFunction(i[f])&&!Z.isWindow(i)&&(a=i[c],a&&(i[c]=null),Z.event.triggered=f,i[f](),Z.event.triggered=void 0,a&&(i[c]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e);var t,n,i,r,o,s=[],a=W.call(arguments),l=(vt.get(this,"events")||{})[e.type]||[],c=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,l),t=0;(r=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,i=((Z.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,s=[],a=t.delegateCount,l=e.target;if(a&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],n=0;a>n;n++)o=t[n],r=o.selector+" ",void 0===i[r]&&(i[r]=o.needsContext?Z(r,this).index(l)>=0:Z.find(r,this,null,[l]).length),i[r]&&i.push(o);i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,i,r=e.type,o=e,s=this.fixHooks[r];for(s||(this.fixHooks[r]=s=Rt.test(r)?this.mouseHooks:Et.test(r)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==h()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?Z.event.trigger(r,null,t):Z.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?c:u):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=c,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return(!r||r!==i&&!Z.contains(i,r))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Y.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=vt.access(i,t);r||i.addEventListener(e,n,!0),vt.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=vt.access(i,t)-1;r?vt.access(i,t,r):(i.removeEventListener(e,n,!0),vt.remove(i,t))}}}),Z.fn.extend({on:function(e,t,n,i,r){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=u;else if(!i)return this;return 1===r&&(o=i,i=function(e){return Z().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,Z(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=u),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var _t=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ot=/<([\w:]+)/,Nt=/<|&#?\w+;/,Pt=/<(?:script|style|link)/i,Ht=/checked\s*(?:[^=]|=\s*.checked.)/i,Mt=/^$|\/(?:java|ecma)script/i,Lt=/^true\/(.*)/,It=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,$t={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$t.optgroup=$t.option,$t.tbody=$t.tfoot=$t.colgroup=$t.caption=$t.thead,$t.th=$t.td,Z.extend({clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=Z.contains(e.ownerDocument,e);if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),o=v(e),i=0,r=o.length;r>i;i++)y(o[i],s[i]);if(t)if(n)for(o=o||v(e),s=s||v(a),i=0,r=o.length;r>i;i++)g(o[i],s[i]);else g(e,a);return s=v(a,"script"),s.length>0&&m(s,!l&&v(e,"script")),a},buildFragment:function(e,t,n,i){for(var r,o,s,a,l,c,u=t.createDocumentFragment(),h=[],d=0,f=e.length;f>d;d++)if(r=e[d],r||0===r)if("object"===Z.type(r))Z.merge(h,r.nodeType?[r]:r);else if(Nt.test(r)){for(o=o||u.appendChild(t.createElement("div")),s=(Ot.exec(r)||["",""])[1].toLowerCase(),a=$t[s]||$t._default,o.innerHTML=a[1]+r.replace(_t,"<$1></$2>")+a[2],c=a[0];c--;)o=o.lastChild;Z.merge(h,o.childNodes),o=u.firstChild,o.textContent=""}else h.push(t.createTextNode(r));for(u.textContent="",d=0;r=h[d++];)if((!i||-1===Z.inArray(r,i))&&(l=Z.contains(r.ownerDocument,r),o=v(u.appendChild(r),"script"),l&&m(o),n))for(c=0;r=o[c++];)Mt.test(r.type||"")&&n.push(r);return u},cleanData:function(e){for(var t,n,i,r,o=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(r=n[vt.expando],r&&(t=vt.cache[r]))){if(t.events)for(i in t.events)o[i]?Z.event.remove(n,i):Z.removeEvent(n,i,t.handle);vt.cache[r]&&delete vt.cache[r]}delete yt.cache[n[yt.expando]]}}}),Z.fn.extend({text:function(e){return gt(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?Z.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return gt(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Pt.test(e)&&!$t[(Ot.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(_t,"<$1></$2>");try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(r){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=V.apply([],e);var n,i,r,o,s,a,l=0,c=this.length,u=this,h=c-1,d=e[0],m=Z.isFunction(d);if(m||c>1&&"string"==typeof d&&!Y.checkClone&&Ht.test(d))return this.each(function(n){var i=u.eq(n);m&&(e[0]=d.call(this,n,i.html())),i.domManip(e,t)});if(c&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(r=Z.map(v(n,"script"),f),o=r.length;c>l;l++)s=n,l!==h&&(s=Z.clone(s,!0,!0),o&&Z.merge(r,v(s,"script"))),t.call(this[l],s,l);if(o)for(a=r[r.length-1].ownerDocument,Z.map(r,p),l=0;o>l;l++)s=r[l],Mt.test(s.type||"")&&!vt.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(It,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,i=[],r=Z(e),o=r.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(r[s])[t](n),U.apply(i,n.get());return this.pushStack(i)}});var Bt,jt={},Ft=/^margin/,zt=new RegExp("^("+Ct+")(?!px)[a-z%]+$","i"),Wt=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",r.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,i="4px"===t.width,r.removeChild(o)}var n,i,r=J.documentElement,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Z.extend(Y,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",r.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(o),s.removeChild(n),t}}))}(),Z.swap=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=s[o];return r};var Vt=/^(none|table(?!-c[ea]).+)/,Ut=new RegExp("^("+Ct+")(.*)$","i"),qt=new RegExp("^([+-])=("+Ct+")","i"),Gt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:"0",fontWeight:"400"},Xt=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=C(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=Z.camelCase(t),l=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=k(l,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:l[t]:(o=typeof n,"string"===o&&(r=qt.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(Z.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||Z.cssNumber[a]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n)),void 0)}},css:function(e,t,n,i){var r,o,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=k(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=C(e,t,i)),"normal"===r&&t in Kt&&(r=Kt[t]),""===n||n?(o=parseFloat(r),n===!0||Z.isNumeric(o)?o||0:r):r}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,i){return n?Vt.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Gt,function(){return E(e,t,i)}):E(e,t,i):void 0},set:function(e,n,i){var r=i&&Wt(e);return x(e,n,i?T(e,t,i,"border-box"===Z.css(e,"boxSizing",!1,r),r):0)}}}),Z.cssHooks.marginRight=S(Y.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},C,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];4>i;i++)r[e+St[i]+t]=o[i]||o[i-2]||o[0];return r}},Ft.test(e)||(Z.cssHooks[e+t].set=x)}),Z.fn.extend({css:function(e,t){return gt(this,function(e,t,n){var i,r,o={},s=0;if(Z.isArray(t)){for(i=Wt(e),r=t.length;r>s;s++)o[t[s]]=Z.css(e,t[s],!1,i);return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return R(this,!0)},hide:function(){return R(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){kt(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=A,A.prototype={constructor:A,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=A.propHooks[this.prop];return e&&e.get?e.get(this):A.propHooks._default.get(this)},run:function(e){var t,n=A.propHooks[this.prop];return this.pos=t=this.options.duration?Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):A.propHooks._default.set(this),this}},A.prototype.init.prototype=A.prototype,A.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},A.propHooks.scrollTop=A.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=A.prototype.init,Z.fx.step={};var Yt,Jt,Qt=/^(?:toggle|show|hide)$/,Zt=new RegExp("^(?:([+-])=|)("+Ct+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[N],nn={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=Zt.exec(t),o=r&&r[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==o&&+i)&&Zt.exec(Z.css(n.elem,e)),a=1,l=20;if(s&&s[3]!==o){o=o||s[3],r=r||[],s=+i||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+o);while(a!==(a=n.cur()/i)&&1!==a&&--l)}return r&&(s=n.start=+s||+i||0,n.unit=o,n.end=r[1]?s+(r[1]+1)*r[2]:+r[2]),n}]};Z.Animation=Z.extend(H,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,i=0,r=e.length;r>i;i++)n=e[i],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),Z.speed=function(e,t,n){var i=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return i.duration=Z.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in Z.fx.speeds?Z.fx.speeds[i.duration]:Z.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){Z.isFunction(i.old)&&i.old.call(this),i.queue&&Z.dequeue(this,i.queue)},i},Z.fn.extend({fadeTo:function(e,t,n,i){return this.filter(kt).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=Z.isEmptyObject(e),o=Z.speed(t,n,i),s=function(){var t=H(this,Z.extend({},e),o);(r||vt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=Z.timers,s=vt.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&en.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=vt.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=Z.timers,s=i?i.length:0;for(n.finish=!0,Z.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);
delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];Z.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,i,r)}}),Z.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Yt=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Yt=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Jt||(Jt=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Jt),Jt=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=n.selected,t.disabled=!0,Y.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Y.radioValue="t"===e.value}();var rn,on,sn=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return gt(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Tt?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),i=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?on:rn)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=Z.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(ft);if(o&&1===e.nodeType)for(;n=o[r++];)i=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||Z.find.attr;sn[t]=function(e,t,i){var r,o;return i||(o=sn[t],sn[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,sn[t]=o),r}});var an=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return gt(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!Z.isXMLDoc(e),o&&(t=Z.propFix[t]||t,r=Z.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var ln=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,i,r,o,s,a="string"==typeof e&&e,l=0,c=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(ft)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):" ")){for(o=0;r=t[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");s=Z.trim(i),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,i,r,o,s,a=0===arguments.length||"string"==typeof e&&e,l=0,c=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(ft)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):"")){for(o=0;r=t[o++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");s=e?Z.trim(i):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,i=0,r=Z(this),o=e.match(ft)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else(n===Tt||"boolean"===n)&&(this.className&&vt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":vt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ln," ").indexOf(t)>=0)return!0;return!1}});var cn=/\r/g;Z.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=Z.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,Z(this).val()):e,null==r?r="":"number"==typeof r?r+="":Z.isArray(r)&&(r=Z.map(r,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return t=Z.valHooks[r.type]||Z.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(cn,""):null==n?"":n)}}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||0>r,s=o?null:[],a=o?r+1:i.length,l=0>r?a:o?r:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==r||(Y.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,i,r=e.options,o=Z.makeArray(t),s=r.length;s--;)i=r[s],(i.selected=Z.inArray(i.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},Y.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var un=Z.now(),hn=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(i){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var dn=/#.*$/,fn=/([?&])_=[^&]*/,pn=/^(.*?):[ \t]*([^\r\n]*)$/gm,mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gn=/^(?:GET|HEAD)$/,vn=/^\/\//,yn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,wn={},bn={},Cn="*/".concat("*"),Sn=e.location.href,kn=yn.exec(Sn.toLowerCase())||[];Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Sn,type:"GET",isLocal:mn.test(kn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Cn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?I(I(e,Z.ajaxSettings),t):I(Z.ajaxSettings,e)},ajaxPrefilter:M(wn),ajaxTransport:M(bn),ajax:function(e,t){function n(e,t,n,s){var l,u,v,y,b,S=t;2!==w&&(w=2,a&&clearTimeout(a),i=void 0,o=s||"",C.readyState=e>0?4:0,l=e>=200&&300>e||304===e,n&&(y=$(h,C,n)),y=B(h,y,C,l),l?(h.ifModified&&(b=C.getResponseHeader("Last-Modified"),b&&(Z.lastModified[r]=b),b=C.getResponseHeader("etag"),b&&(Z.etag[r]=b)),204===e||"HEAD"===h.type?S="nocontent":304===e?S="notmodified":(S=y.state,u=y.data,v=y.error,l=!v)):(v=S,(e||!S)&&(S="error",0>e&&(e=0))),C.status=e,C.statusText=(t||S)+"",l?p.resolveWith(d,[u,S,C]):p.rejectWith(d,[C,S,v]),C.statusCode(g),g=void 0,c&&f.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?u:v]),m.fireWith(d,[C,S]),c&&(f.trigger("ajaxComplete",[C,h]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,o,s,a,l,c,u,h=Z.ajaxSetup({},t),d=h.context||h,f=h.context&&(d.nodeType||d.jquery)?Z(d):Z.event,p=Z.Deferred(),m=Z.Callbacks("once memory"),g=h.statusCode||{},v={},y={},w=0,b="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===w){if(!s)for(s={};t=pn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===w?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return w||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return w||(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>w)for(t in e)g[t]=[g[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||b;return i&&i.abort(t),n(0,t),this}};if(p.promise(C).complete=m.add,C.success=C.done,C.error=C.fail,h.url=((e||h.url||Sn)+"").replace(dn,"").replace(vn,kn[1]+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=Z.trim(h.dataType||"*").toLowerCase().match(ft)||[""],null==h.crossDomain&&(l=yn.exec(h.url.toLowerCase()),h.crossDomain=!(!l||l[1]===kn[1]&&l[2]===kn[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(kn[3]||("http:"===kn[1]?"80":"443")))),h.data&&h.processData&&"string"!=typeof h.data&&(h.data=Z.param(h.data,h.traditional)),L(wn,h,t,C),2===w)return C;c=Z.event&&h.global,c&&0===Z.active++&&Z.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!gn.test(h.type),r=h.url,h.hasContent||(h.data&&(r=h.url+=(hn.test(r)?"&":"?")+h.data,delete h.data),h.cache===!1&&(h.url=fn.test(r)?r.replace(fn,"$1_="+un++):r+(hn.test(r)?"&":"?")+"_="+un++)),h.ifModified&&(Z.lastModified[r]&&C.setRequestHeader("If-Modified-Since",Z.lastModified[r]),Z.etag[r]&&C.setRequestHeader("If-None-Match",Z.etag[r])),(h.data&&h.hasContent&&h.contentType!==!1||t.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Cn+"; q=0.01":""):h.accepts["*"]);for(u in h.headers)C.setRequestHeader(u,h.headers[u]);if(h.beforeSend&&(h.beforeSend.call(d,C,h)===!1||2===w))return C.abort();b="abort";for(u in{success:1,error:1,complete:1})C[u](h[u]);if(i=L(bn,h,t,C)){C.readyState=1,c&&f.trigger("ajaxSend",[C,h]),h.async&&h.timeout>0&&(a=setTimeout(function(){C.abort("timeout")},h.timeout));try{w=1,i.send(v,n)}catch(S){if(!(2>w))throw S;n(-1,S)}}else n(-1,"No Transport");return C},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,i,r){return Z.isFunction(n)&&(r=r||i,i=n,n=void 0),Z.ajax({url:e,type:t,dataType:r,data:n,success:i})}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var xn=/%20/g,Tn=/\[\]$/,En=/\r?\n/g,Rn=/^(?:submit|button|image|reset|file)$/i,An=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,i=[],r=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){r(this.name,this.value)});else for(n in e)j(n,e[n],t,r);return i.join("&").replace(xn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&An.test(this.nodeName)&&!Rn.test(e)&&(this.checked||!xt.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Dn=0,_n={},On={0:200,1223:204},Nn=Z.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in _n)_n[e]()}),Y.cors=!!Nn&&"withCredentials"in Nn,Y.ajax=Nn=!!Nn,Z.ajaxTransport(function(e){var t;return Y.cors||Nn&&!e.crossDomain?{send:function(n,i){var r,o=e.xhr(),s=++Dn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)o[r]=e.xhrFields[r];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(r in n)o.setRequestHeader(r,n[r]);t=function(e){return function(){t&&(delete _n[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?i(o.status,o.statusText):i(On[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=_n[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Pn=[],Hn=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Pn.pop()||Z.expando+"_"+un++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=t.jsonp!==!1&&(Hn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(r=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Hn,"$1"+r):t.jsonp!==!1&&(t.url+=(hn.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return s||Z.error(r+" was not called"),s[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){s=arguments},i.always(function(){e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,Pn.push(r)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var i=st.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=Z.buildFragment([e],t,r),r&&r.length&&Z(r).remove(),Z.merge([],i.childNodes))};var Mn=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Mn)return Mn.apply(this,arguments);var i,r,o,s=this,a=e.indexOf(" ");return a>=0&&(i=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&Z.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?Z("<div>").append(Z.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var Ln=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c,u=Z.css(e,"position"),h=Z(e),d={};"static"===u&&(e.style.position="relative"),a=h.offset(),o=Z.css(e,"top"),l=Z.css(e,"left"),c=("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1,c?(i=h.position(),s=i.top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):h.css(d)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument;if(o)return t=o.documentElement,Z.contains(t,i)?(typeof i.getBoundingClientRect!==Tt&&(r=i.getBoundingClientRect()),n=F(o),{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(i=e.offset()),i.top+=Z.css(e[0],"borderTopWidth",!0),i.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-Z.css(n,"marginTop",!0),left:t.left-i.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Ln;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||Ln})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n;Z.fn[t]=function(r){return gt(this,function(t,r,o){var s=F(t);return void 0===o?s?s[n]:t[r]:void(s?s.scrollTo(i?e.pageXOffset:o,i?o:e.pageYOffset):t[r]=o)},t,r,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=S(Y.pixelPosition,function(e,n){return n?(n=C(e,t),zt.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){Z.fn[i]=function(i,r){var o=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||r===!0?"margin":"border");return gt(this,function(t,n,i){var r;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?Z.css(t,n,s):Z.style(t,n,i,s)},t,o?i:void 0,o,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var In=e.jQuery,$n=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=$n),t&&e.jQuery===Z&&(e.jQuery=In),Z},typeof t===Tt&&(e.jQuery=e.$=Z),Z});

/*jQuery.my 1.1.7*/
!function(e){function t(){window.console&&console.error.apply(console,arguments)}function n(){window.console&&console.log.apply(console,arguments)}function r(e,t){return(t||"").split(".").reduce(function(e,t){return null!=e&&null!=e[t]?e[t]:void 0},e)}function o(e,t){var n,i;if(Z(t))return t;if(Q(t)){if(n=r(e,t),null==n&&(n=Object.clone(M._src[t],!0)),null==n&&(n=r(M,t),Z(n)&&Z(n._self)?n=Object.clone(n._self,!0):Z(n)&&(n=Object.clone(n,!0))),null==n&&r(e,"params.cache")&&(i=r(e,"params.cache"),nt(i)?n=i(t):Z(i)&&(n=ot(t,i)),Z(n)&&(Z(n._self)&&(n=Object.clone(n._self,!0)),Object.merge(n,{params:{cache:i}},!0))),null!=n&&Z(n))return i=i||r(e,"params.cache"),i&&Object.merge(n,{params:{cache:i}},!0),n;throw"Component "+t+" not found."}return nt(t)?t.apply(e,Array.prototype.slice.call(arguments,2)):null}function s(n,i){var o,s,l,c,u,h=i||M,d=n;if(!(Z(h)&&Z(d)&&Z(d.ui)&&Q(d.id)))return"Can’t save manifest into cache, invalid arguments.";h.hasOwnProperty("_src")||(h._src={}),l=d.id;try{d=Object.clone(n,!0)}catch(f){return"Can’t save circular-referencing object into cache."}try{(!d.params||d.params&&!d.params.strict)&&S(d,!0)}catch(f){return"Invalid manifest, parse error."}if(o=a(d),Q(o))return t(o),o;if(Object.merge(d,{params:{strict:!0}},!0),h._src[l]=d,c=lt.mask(h,l)){if(c.params&&c.params.protect)return"Can’t save manifest into cache over protected one.";c._self&&delete c._self,e.extend(!0,h,lt.unmask("",l))}return e.extend(!0,h,lt.unmask(d,l)),s=Object.keys(h._src).filter(function(e){return e.startsWith(l+".")}),s.sort(),s.forEach(function(t){var n;(n=lt.mask(h,t))&&(n._self&&delete n._self,e.extend(!0,h,lt.unmask("",t))),e.extend(!0,h,lt.unmask(h._src[t],t))}),u=r(h,l),H?u._self=h._src[l]:Object.defineProperty(u,"_self",{get:function(){return h._src[l]},set:function(){throw"Can’t change manifest cache entry directly."},enumerable:!1,configurable:!0}),u}function a(e){var t,n,i=[];if(Z(e.files)&&Object.size(e.files))for(t in e.files){if(n=e.files[t],!Z(n))return"Non-object member "+t+" in files section.";if(Q(n.data)&&!n.url)if(P)try{lt.base642blob(n.data,function(e){n.blob=e,n.url=P.createObjectURL(n.blob)},n.content_type||n.mime),i.push(t)}catch(r){return"Invalid base64 data in files/"+t+"."}else n.url="data:"+(n.content_type||n.mime)+";base64,"+n.data,i.push(t)}return i}function l(n,i){Z(i)&&i.channel&&i.message&&n.find(".my-listen-"+lt.sdbmCode(i.channel)).each(function(){var n,r=e(this),o=r.data("my"),s=void 0;if(o&&o.ui.listen&&nt(o.ui.listen[i.channel])){n=o.ui.listen[i.channel];try{s=n.call(o.manifest||o.root.my().manifest,o.data,i.message,r)}catch(a){t("Listener failed",a.message,a.stack)}void 0!==s&&(null===s?r.trigger("check"):s&&r.trigger("recalc"))}})}function c(t,n){function i(t,n){var i;return Q(t)?/[\/]/.test(t)?(i=I(!0,{},k,{ref:n,ajax:{url:t}}),X.test(n)&&(i.ajax.dataType="json")):t.length&&(i=I(!0,{},k,{ref:n,ajax:t})):Z(t)&&(i=I(!0,{},k,{ref:n,ajax:e.extend(!0,{},Object.select(t,["accepts","async","cache","data","dataType","xhrFields","password","timeout","type","url","username","headers"]))}),i.ajax.url||(i=null)),i}function o(){y.reject(C)}function s(){x+=1;var e=w[x];if(e)a(e).then(s).fail(o);else{var n=c(b),i=it(Object.findAll(n,function(e,t){return!t}));i.length&&C.push((1===i.length?"Key "+i[0]+" is":"Keys "+i.join(", ")+" are")+" not present after all."),C.length?o():y.resolve(t)}}function a(n){function i(){c-=1,a?l.reject():.5>c&&l.resolve()}var r,o,s,a=!1,l=e.Deferred(),c=n.length;for(o=0;c>o;o++)r=n[o],s=Q(r.ajax)?S.loader:st,s(r.ajax).then(function(e,n){X.test(n.ref)&&(null!=e?I(!0,t,lt.unmask(e,n.ref.from(5))):(a=!0,C.push("Invalid data for ‘"+n.ref+"’ resource."))),i()}.fill(void 0,r)).fail(function(e,t){C.push("Failed to load ‘"+t.ref+"’ resource."),a=!0,i()}.fill(void 0,r));return l.promise()}function l(e){var n=!1;return X.test(e)?null!=r(t,e.from(5))&&(n=!0):null!=r(window,e)&&(n=!0),n}function c(e){for(var t in e)e[t]===!1&&(e[t]=l(t));return e}var u,h,d,f,p,m,g,v,y=e.Deferred(),w=[],b={},C=[],S=I(!0,{ajaxTimeout:1e4,loader:at.params.loader},n||{}),k={ref:null,ajax:{type:"GET",async:!0,timeout:S.ajaxTimeout}};if(Z(t))if(Y(t.require)){for(f=t.require,u=0;u<f.length;u++)if(p=f[u],Q(p))b[p]=l(p);else if(Z(p)){v=[];for(h in p){if(m=null,p[h]===!0)b[h]=l(h);else if(Q(p[h])||Z(p[h]))m=i(p[h],h);else if(Y(p[h])){for(m=[],d=0;d<p[h].length;d++)(Q(p[h][d])||Z(p[h][d]))&&(g=i(p[h][d],h),g&&m.push(g));m.length||(m=null)}m&&!(b[h]=l(h))&&v.add(m)}v.length&&w.push(v)}var x=-1;s()}else y.resolve(t);else y.reject(["Invalid manifest."]);return y.promise()}function u(e,t){var n,i,r=e.data("myval");return r||(i=h(e,at.vals),nt(i)&&(n=i(e,j),void 0===n?e.data("myval",function(e,t){return j!=t&&i(e,t),e.val()}.fill(e,void 0)):e.data("myval",i.fill(e,void 0))),r=e.data("myval")),nt(r)?(n=r(),(n!==t&&(0==t||0==n)||n!=t||Z(t))&&(n=r(t)),n):j}function h(e,t){function n(e,t,s){for(var a in t)if(""!=a&&e.is(a)){o=o+(o?" ### ":"")+a;var l=t[a],c=$(l);if(!/^(nul|un|ob)/.test(c)&&s>r)return i=l,void(r=s);c==W&&n(e,l,s+1)}j!=t[""]&&typeof t[""]!=W&&s>r&&(i=t[""],r=s)}var i=j,r=0,o="";return n(e,t,1),i}function d(e,t,n,i){var r,o,s,a=[],l=n.bind,c=$(l);if(c==G)return l.call(p(i).manifest,e,t,i);if(c===U||c===q){if(c===U&&!/\./.test(l))return t!=j?e[l]=t:void 0===e[l]&&(e[l]=j),e[l];for(c===U&&(a=l.split(".").each(function(e,t){this[t]=e+""})),c===q&&(a=l.slice(0).each(function(e,t){this[t]=e+""})),"this"===a[0]?(o=p(i).manifest,a.shift()):o=e,r=0;r<a.length;r++){if(r===a.length-1)return t!=j?o[a[r]]=t:void 0===o[a[r]]&&(o[a[r]]=j),o[a[r]];0==r?(s=o,o=o[a[0]]):(s=s[a[r-1]],o=o[a[r]]),void 0===o&&(o=s[a[r]]={})}}return j}function f(t,n,i,r){var o,s,a=i.check;if(a!=j){var l=p(r).params.messages,c=i.error,u=c||l.patternMismatch||l[""]||"Error";if(r.size()&&Object.prototype.hasOwnProperty.call(r[0],"validity")&&!r[0].validity.valid){var h=r[0].validationMessage+"";if(""!==h)return h.substr(0,1).toUpperCase()+h.substr(1);s=r[0].validity;for(o in s)""===h&&"valid"!=o&&J(s[o])&&s[o]&&l[o]&&(h=l[o]);return h||c}switch($(a).to(1)){case"f":return f=a.call(p(r).manifest,t,n,r),null===f||void 0===f?"":f;case"r":return a.test(String(n))?"":u;case"a":return a.indexOf(n)>-1?"":u;case"s":return n==a?"":u;case"o":return a[n]?"":u;case"b":if(r.is(".my-form-list,.ui-sortable")){var d=r.data("listSrc")||r.data("my").listSrc||">*",f={};return r.find(d).filter("*:not(.ui-sortable-placeholder)").each(function(t){var n=e(this);n.data("my")&&!n.my("valid")&&(f[t]=n.my("errors"))}),f}return r.hasClass("my-form")&&a?r.my("valid")?"":r.my("errors"):""}return l.formError||"Error"}return""}function p(e){var t=e.my();return t?t.root?t.root.my():t:null}function m(t,n,i){var r=i.compact(),o=r.replace(/:disabled/g,""),s=o!==r,a="self:"===o.to(5);return a&&(o=o.replace(/^self:/g,"")),n.each(function(){var i=e(this),r=i.my(),l=!a&&r?r.container:i;l.toggleClass(o,!!t),s&&void 0!==r&&!!t!=!!r.disabled&&(i.my().disabled=!!t,r._disable||(i.my()._disable=h(n,at.offon).fill(void 0,n)),r._disable(!!t))}),n}function g(e,n,i){var r,o,s,a,l,c,h,p,v,y,w,b=!1,C=!1,S=e,k=S.my(),x="";if(k){if(p=k.selector,v=k.root,v.hasClass("my-form-init"))return{};if(y=v.find(p),w=v.my().ui,b=e.hasClass("my-form"),C=e.hasClass("my-form-list"),b?(r=e,o=k.ddata,s=k.dui,a=k.dparams):(r=k.container,o=k.data,s=k.ui,a=k.params),s.bind!=j){if(l=B(n)?n:u(y,d(o,j,s,y)),j!=s.check){x="Unknown error";try{x=f(o,l,s,y)}catch(T){t("Error "+T.message+" in .check validator for "+p,v,T.stack)}}var E=a.errorCss,R="ui-state-error";try{j!=n&&(l=u(y,d(o,n,s,y)))}catch(T){x=a.messages.formError||"Error"}if(""===x)b?k.derrors[p]="":k.errors[p]="",r.removeClass(E),r.attr("title")&&r.attr("title",""),b||C||a.effect(r.find(a.errorTip),!1,a.animate/2),S.removeClass(R),S.find(".ui-widget").removeClass(R);else{if(b)k.derrors[p]=x;else if(C)k.errors[p]=x;else{r.addClass(E),k.errors[p]=x;var A=r.find(a.errorTip).eq(0);A.size()?a.effect(A.addClass(E).html(x),!0,a.animate):r.attr("title",(x||"").stripTags())}S.is(".hasDatepicker")&&(S.is("input")?S.addClass(R):S.find(".ui-widget").addClass(R)),S.is(".ui-slider")&&S.addClass(R)}}var D=n==j?l:n;if(s.css)for(c in s.css)h=s.css[c],tt(h)?m(h.test(D),y,c):nt(h)&&m(h.call(v.my().manifest,o,D,y),y,c);var O,_,N=s.recalc,P=[],H={};if(i&&s.recalc&&v.my()){for(w=v.my().ui,O=0;O<N.length;O++)N[O]&&Q(N[O])&&(_=N[O].compact())&&w[_]&&(w[_].recalc?-1===P.indexOf(_)&&P.push(_):H[_]=!0);for(O=0;O<P.length;O++)H=I(!0,H,g(v.find(P[O]),j,i-1));if(n!==j){for(O in H)H[O]===!0&&O!=p&&(w[O].delay&&!w[O].recalc?w[O]._update(v.find(O),j,i-1):g(v.find(O),j,i-1));return{}}}return H||{}}}function v(e,t,n,i){var r,o,s,a,l,c,u,h,d,f=t;if(!Z(f)||isNaN(a=f.remember)||!Z(r=f.history))return j;if(Z(e)&&a){if(c=Object.clone(e,!0),u=Date.now(),s=it(r).sort(),s.length&&(u-s.last()<f.historyDelay||Object.equal(r[s.last()],c)))return j;if(f.history[u]=c,s.push(u),s.length>=2*a){for(d={},o=a;2*a>o;o++)d[s[o]]=r[s[o]];t.history=d}return i||f.form.trigger(K),f.history[s.last()]}if(!isNaN(e)||e===j){if(l=parseInt(e)||0,0>l)return j;if(s=it(r).sort(),l>=s.length&&(l=s.length-1),h=Object.clone(f.history[s[s.length-l-1]],!0),n){for(d={},o=0;o<s.length-l-1;o++)d[s[o]]=r[s[o]];t.history=d}return i||f.form.trigger(K),h}return i||f.form.trigger(K),j}function y(i,s,a,l){function c(){var t=null,n=T.manifest;if(nt(n)||Z(n)&&Z(n.ui)?y=n:Q(n)&&(y=o(A,n.replace(X,""))),y&&Q(T.bind)){var s=r(X.test(T.bind)?A:k.data,T.bind.replace(X,""));if(null===E&&(E=e.Deferred()),Y(s)||T.list){i.addClass("my-form-list");var a="",c=">*";if(/^<.+>$/.test(T.list)?a=T.list:c=T.list||c,!a){var h=i.find(c);a="<div></div>",h.size()&&(a=e(a).append(h.eq(0).clone(!0)).html(),h.eq(0).remove())}i.data("formlist")||i.data("formlist",{}),i.data("formlist").generator={manifest:y,delay:(T.delay||x.delay||10)/1.3,template:a,selector:c,parent:A,bind:T.bind,hash:nt(T.hash)?T.hash.bind(A):Q(T.hash)?d.fill(void 0,T.hash):Y(T.hash)?f.fill(void 0,T.hash.slice(0)):null,id:nt(T.id)?T.id.bind(A):Q(T.id)?d.fill(void 0,T.id):Y(T.id)?f.fill(void 0,T.id.slice(0)):null,ext:!(!T.id&&!T.hash),stamp:0},i.on("insert.my",function(t,n){t.stopPropagation();var i={what:void 0,where:0};null==n?i.where=1e6:Z(n)?Object.merge(i,n):(Q(n)||et(n))&&(i.where=n),e(t.target).my("insert",i.where,i.what)}),i.on("remove.my",function(t){t.stopPropagation(),e(t.target).my("remove")})}else try{t=i.my(o(A,y),Z(s)?s:void 0)}catch(m){u("$.my subform init of "+l+" failed: "+m.message,m.stack)}}rt(t)?t.then(p,function(e,t){u("Init of subform "+l+" failed with error: "+e,t)}):p()}function u(e,n){t(e,n),E&&E.reject(e,n)}function d(e,t){var n=r(e,t)||"";return"string"==typeof n?n:lt.sdbmCode(n)}function f(e,t){return lt.sdbmCode(lt.mask(e,t))}function p(){i.each(function(){var t,n,r=e(this),o=!1,c=r[0].nextSibling;if(n=c&&c.CodeMirror?c.CodeMirror:null,n&&r.addClass("my-codemirror"),t=T.events||h(r,at.events),r.is(".my-form")?I(r.data("my"),{dui:T,root:s,selector:l,dparams:x,devents:t,ddata:k.data,container:x.container(r),derrors:k.errors}):(r.data("my",{events:t,selector:l,initial:v,previous:v,root:s,container:x.container(r),id:k.id,ui:T,data:k.data,params:x,errors:k.errors}),a._update=T.delay?g.debounce(T.delay):j,o=!0),o)if(r.cleditor&&r.parent().is(".cleditorMain")){var u=r.cleditor()[0];if(u&&u.$frame&&u.$frame[0]){r.addClass("my-cleditor"),I(r.data("my"),{container:x.container(r)});var d,f=function(e){r.val(e).trigger(K)},p=Number.random(1e5,1e6-1);e(u.$frame[0]).attr("id","cleditCool"+p),d=document.frames?document.frames["cleditCool"+p].document:e("#cleditCool"+p)[0].contentWindow.document;var m=e(d).find("body");e(d).bind("keyup.my",function(){f(e(this).find("body").html())}),r.parent().find("div.cleditorToolbar").bind("click.my mouseup.my",function(){f(m.html())}),e("body").on("click","div.cleditorPopup",function(){f(m.html())})}}else if(r.is("div.redactor_box textarea")){var y,C="my-redactor-9";try{y=r.getEditor(),C="my-redactor-8"}catch(E){y=r.redactor("getEditor")}y&&(r.addClass(C),y.bind("input.my keyup.my blur.my",function(e){e.trigger("redactor")}.fill(r)))}else r.is(".ace_editor")?ace.edit(i[0]).on(K,function(e){e.trigger("ace")}.fill(r)):n&&n.on(K,function(e){e.trigger("codemirror")}.fill(r));r.my()._changed=w.debounce(S),r.my()._recalc=b.debounce(S),r.bind(t,function(e){e.type==K&&e.stopPropagation(),o&&(k.locktill=Date.now()+a.delay),r.my()._changed(r,s,a,x)}),/check(\.my)?/.test(t+"")||r.on("check.my",function(){return r.my()._changed(r,s,a,x,!0),!1}),r.on("recalc.my, redraw.my",function(e){e.stopPropagation(),r.my()._recalc(r,s,a,x)})}),E&&E.resolve()}var m,v,y,S,k=s.my(),x=(k||{}).params,T=a,E=null,R=0,A=k.manifest;return k?(S=a.delay,i.size()?(T.init!=j&&(m=C(A,T.init,i,k)),rt(m)?(R+=1,E=e.Deferred(),m.then(c,function(e,t){u("Init of "+l+" failed: "+e,t)})):c()):n("Not found "+l+" selector.",s),E):(t("Failed to find $root building "+l+" selector."),null)}function w(e,t,n,i,r){var o=e.data("my"),s=t.data("my");if(o&&!o.disabled){v(o.ddata||o.data,o.dparams||o.params);var a=t.find(o.selector);g(e,r?j:u(a,j),n.recalcDepth||i.recalcDepth),void 0===s.orphan&&o.root.parent().hasClass("ui-sortable")&&(s.orphan=!o.root.parent().hasClass("my-form-list")),s.orphan&&o.root.parent().trigger("check"),i.change&&i.change.call(e)}}function b(e,t,n,i){var o=e.my();if(o&&!o.disabled){var s=t.find(o.selector);s.is(".my-form")?s.my("redraw"):g(e,s.is(".my-form-list")?r(s.my().data,s.data("formlist").generator.bind):j,n.recalcDepth||i.recalcDepth)}}function C(e,t,n,i){var o;if(Q(t)){if(o=r(e,t),void 0===o)return n.html(t.assign(i.data)),null}else o=t;if(nt(o))return o.apply(e,Array.prototype.slice.call(arguments,2));if(Y(o))try{n.formgen(o)}catch(s){}return null}function S(e,t){var n,i=!t;for(n in e)e.hasOwnProperty(n)&&k(n,e,i)}function k(e,n,i){var r,o,s,a="";(i||!/^(data|files|require)$/.test(e))&&(r=n[e],a=$(r),/^(ob|ar)/.test(a)?S(r):"string"===a&&/^(function\s*\(|new\sRegExp)/.test(r)&&((o=r.match(/^function\s*\(([^\)]*)\)\s*\{([\s\S]*)\}[\s\n\r\t]*$/))&&3===o.length?(s=x(o[1],o[2]),"function"==typeof s?n[e]=s:t("Invalid function in XJSON, skipped",s.message,s.stack,r)):(o=r.match(/^new\sRegExp\s*\(\/([\s\S]+)\/([a-z]*)\)$/))&&3===o.length&&(s=T(o[1],o[2]),"function"==typeof s.test?n[e]=s:t("Invalid RegExp in XJSON, skipped",s.message,s.stack,r))))}function x(e,t){var n;try{n=new Function(e,t)}catch(i){n={message:i.message,stack:i.stack}}return n}function T(e,t){var n;try{n=new RegExp(e,t)}catch(i){n={message:i.message,stack:i.stack}}return n}function E(e,t,n){var i=Z(t)?t:null;return Object.each(e,function(t,n){var i=typeof n;/^str|^fu/.test(i)&&(e[t]={bind:n})}),Object.each(e,function(t,o){var s,a,l,c=[],u=[],h=/\s?[,;]\s?/;o.recalc&&(Q(o.recalc)?c=o.recalc.split(h):Y(o.recalc)&&(c=o.recalc),c=c.compact(!0).unique()),c.length&&(e[t].recalc=c),null==o.bind&&(o.bind=function(){});var d;if(o.listen&&(d=R(o.listen),o.listen=Object.size(d)?d:void 0),o.hasOwnProperty("watch"))for(Q(o.watch)?u=o.watch.split(h):Y(o.watch)&&(u=o.watch.slice(0)),u=u.compact(!0).unique(),l=0;l<u.length;l++)(s=e[u[l]])&&(a=s.recalc,a?Q(a)?s.recalc+=","+t:Y(a)&&-1==a.indexOf(t)&&s.recalc.push(t):s.recalc=[t]);null!==i&&["css","check","manifest","list","hash","id"].each(function(e){if(Q(o[e])){var t=r(i,o[e].replace(X,""));null==t||Q(t)||(o[e]=t)}}),o.delay=isNaN(o.delay)?n.delay:o.delay-0}),e}function R(e){var t,n={},i=function(){return null};if(Q(e))e.split(/[,\s]+/).compact(!0).unique().map(function(e){n[e]=i});else if(Y(e))e.compact(!0).unique().map(function(e){n[e]=i});else if(Z(e))for(t in e)n[t]=nt(e[t])?e[t]:function(){return e[t]};return n}function A(e){var t=e,n={};if(Q(t)&&(t=t.split(/[,\s]+/)),Y(t)){for(t=t.compact(!0),i=0;i<t.length;i++)n[t[i]]=!0;return n}return Z(t)?e:null}function D(e,t){function n(r,o,s,a){var l,c,u,h,d=r;if(Q(d)&&(/[\r\n]/.test(d)||d.split("}",3).length>2?d=lt.css2json(d):s.push(o+(/\{/.test(d)?d:"{"+d+"}"))),Y(d)&&d.length)for(l=0;l<d.length;l++)n(d[l],o,s,a);else if(Z(d))for(l in d)for(h=i(o,l),c=0;c<h.length;c++)n(d[l],h[c],s,a);else if(nt(d))try{u=d.call(t,e,t),n(u,o,a,a)}catch(f){}}function i(e,t){var n,i="",r=t+"";return(" "===r.to(1)||/^[a-z]/i.test(r))&&(i=" "),n=r.split(/\s*,\s*/).compact(!0),n.length||n.push(""),n.map(function(t){return e+i+t})}var r=[],o=[],s=t;return Z(s)&&Z(s.style)?(n(t.style,"",r,o),[r,o]):""}function O(){return{con:n,clone:function(e){return e.clone?e.clone():e},extval:function(e){var t=e.my();return t&&t.data?t.data:e.data("value")||e.val()||e.text()||e.html()||""},jquix:function(e,t,n){return e[t](n?"disable":"enable")},overlap:function(){function e(e,t,n){return void 0===n||null===n?t:Z(n)?Object.merge(t,n,!1):n}if(!arguments.length)return{};if(1===arguments.length)return arguments[0];for(var t=1;t<arguments.length;t++)Object.merge(arguments[0],arguments[t],!1,e);return arguments[0]},patch:function t(e,n){for(var i in n)n.hasOwnProperty(i)&&(Z(n[i])?e.hasOwnProperty(i)?t(e[i],n[i]):e[i]=Object.clone(n[i],!0):e.hasOwnProperty(i)||(e[i]=Y(n[i])?n[i].clone(!0):n[i]));return e},kickoff:function(e,t){var n,i=t&&"object"==typeof t?Object.clone(t,!0):{};for(n in e)e.hasOwnProperty(n)&&(delete e[n],void 0!==i[n]&&(e[n]=i[n]))},sdbmCode:function(e){for(var t=JSON.stringify(e),n=0,i=0;i<t.length;i++)n=t.charCodeAt(i)+(n<<6)+(n<<16)-n;return(1e11+n).toString(36)},tojson:function(){function e(e){return 10>e?"0"+e:e}function t(e,r,o){var s,a,l,c,u=0,h=r||0,d=n;switch(o&&Q(o)&&(u=String(o).length,d=String(o).repeat(10)),(typeof e).substr(0,3)){case"str":return i(e);case"num":return isFinite(e)?""+String(e):"null";case"boo":case"nul":return String(e);case"fun":return i(e.toString().replace(/^(function)([^\(]*)(\([^\)]*)([\n\t][^)]*)(\).*)/,"$1 $3$5").replace(/(})([^}]*$)/,"$1"));case"obj":if(!e)return"null";if(typeof e.toJSON===G)return t(e.toJSON(),h+(o?1:0),o);if(s=[],Y(e)){for(a=0;a<e.length;a+=1)s.push(t(e[a],h+(o?1:0),o)||"null");return"["+s.join(","+(o?"\n"+d.to(h*u+u):""))+"]"}for(l in e)Q(l)&&(c=t(e[l],h+(o?1:0),o),c&&s.push((o?"\n"+d.to(h*u+u):"")+t(l,h+(o?1:0),o)+": "+c));return"{"+s.join(",")+(o?"\n"+d.to(h*u):"")+"}"}}Date.prototype.toJSON=function(){var t=this;return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"Z"},RegExp.prototype.toJSON=function(){return"new RegExp("+this.toString()+")"};var n="	".repeat(10),i=JSON.stringify;return t.fill(void 0,0,void 0)}(),fromjson:function(e){var t=JSON.parse(e);return S(t),t},mask:function(e,t){function n(e,t){if(!Z(t))return{};var i={};for(var r in t)!Z(t[r])&&e.hasOwnProperty(r)?i[r]=Object.clone(e[r],!0):e.hasOwnProperty(r)&&(i[r]=Z(e[r])?n(e[r],t[r]):Object.clone(e[r],!0));return i}if(!Z(e))return null;var i,o=t;if(Q(o))return r(e,o);if(Y(o)){i=[];for(var s=0;s<o.length;s++)i[s]=Q(o[s])?r(e,o[s])||null:null;return i}return Z(o)?n(e,o):void 0},unmask:function(e,t){function n(e,t,n){var i,r,o,s=Object.clone(t,!0),a=0;if(/\./.test(n))for(r=n.split(".").each(function(e,t){this[t]=String(e).compact()}),i=e;a<r.length;a++)a===r.length-1&&(i[r[a]]=s),0===a?(i=e[r[0]],o=e):(o=o[r[a-1]],i=i[r[a]]),void 0===i&&(i=o[r[a]]={});else null!=t&&(e[n]=s);return e}var i={};if(Z(e)&&Z(t))return lt.mask(e,t);if(Y(e)&&Y(t)){for(var r=0;r<t.length;r++)null!=e[r]&&n(i,e[r],t[r]);return i}return Q(t)?n({},e,t):null},getref:r,require:c,repo:function(){return M},restyles:function(){return L},unjson:function(e){return S(e),e},blob2base64:function(e,t,n){var i=new FileReader;i.onload=function(){t(n?i.result:i.result.split(",")[1])},i.readAsDataURL(e)},base642blob:function(e,t,n){for(var i,r=atob(e),o=r.length,s=new ArrayBuffer(o),a=new Uint8Array(s),l=0;o>l;l++)a[l]=r.charCodeAt(l);return i=new Blob([a],{type:n||"application/octet-stream"}),nt(t)?void t(i):i},base64:function(t,n,i){var r=($(t),null),o=Q(t)?t:e.my.tojson(t),s=Q(i)?"data:"+i+";base64,":"";if(n){try{r=decodeURIComponent(escape(window.atob(o)))}catch(a){r=null}if(null!==r&&/(^".*"$)|(^\[.*\]$)|(^\{.*\}$)/.test(r))try{r=e.my.fromjson(r)}catch(a){r=null}return r}return s+window.btoa((i===!0?"ï»¿":"")+unescape(encodeURIComponent(o)))},css2json:function(e){var t=(e+"").replace(/\/\*[\s\S]+\*\//gm,"").replace(/@charset[^;]+;/gim,"").replace(/[\n\t\s]+/g," ").replace(/\}/g,"}ᴥ").replace(/^\n+/g,"").replace(/[\n\s]+$/g,"").split("ᴥ").compact(!0).reduce(function(e,t){var n,i,r,o=t.trim();return/^[^{]+\{[^\}]+\}$/.test(o)&&(n=o.to(-1).split("{"),i=" "+n[0].trim(),r=n[1].trim(),";"!=r.last()&&(r+=";"),e[i]||(e[i]=""),e[i]+=r),e},{});return t}}}var _,N="jQuery.my 1.1.8",P=window.URL||window.webkitURL,H=!document.addEventListener,M=r(e,"my.f.repo")?e.my.f.repo():{_src:{},_name:"Default manifest cache"},L=r(e,"my.f.restyles")?e.my.f.restyles():{},I=e.extend,$=e.type,j=null,B=function(e){return null!==e&&void 0!==e},z="{yyyy}-{MM}-{dd}",F="{HH}:{mm}",W="object",V="data",q="array",U="string",G="function",K="change",X=/^this\./,Y=Object.isArray,J=Object.isBoolean,Q=Object.isString,Z=Object.isObject,et=Object.isNumber,tt=Object.isRegExp,nt=Object.isFunction,it=Object.keys,rt=function(e){return!!(null!=e&&(Z(e)||e.jquery)&&nt(e.then)&&nt(e.fail)&&nt(e.state))},ot=function(e,t){var n,i;return Q(e)?(n=e,i=r(Z(t)?t:M,n),"exist"===t?Z(i):i?Object.clone(i,!0):null):Z(e)?(i=s(e,t),Z(i)?i:null):void 0===e?M._src:null===e?Object.reject(M,/^_/):null},st=e.ajax,at={vals:{".my-form":function(e,t){if(e&&e.my){var n=e.my(V);return Object.equal(n,t)?n:e.my(V,t,!0)}return t||j},".hasDatepicker":function(e,t){B(t)&&e.datepicker("setDate",""==t?t:Date.create(t));var n=e.datepicker("getDate");return n?n.format(z):""},".my-tags":function(e,t){return B(t)&&(Q(t)||et(t)?e.tags(V,[t+""]):Y(t)&&e.tags(V,t)),e.tags(V)},".ui-draggable":function(e,t){if(B(t)&&Z(t)){var n={};isNaN(t.left)||(n.left=Number(t.left).ceil(2)+"px"),isNaN(t.top)||(n.top=Number(t.top).ceil(2)+"px"),(n.left||n.top)&&e.css(n)}var i=e.position();return{left:t&&!isNaN(t.left)?(1*t.left).ceil(2):i.left.ceil(2),top:t&&!isNaN(t.top)?(1*t.top).ceil(2):i.top.ceil(2)}},".my-form-list":function(t,n){function i(){var n,i,r=e(this),o=r.data("my");o&&(n=r.data("formlist"),i=n.index,n.hash=w(o.data,i)+"",n.oid=b!==w?b(o.data,i)+"":n.hash),t.trigger("check.my")}function r(e){e.data("my").locktill+S/1.3<R&&e.my("redraw")}var s,a,l,c,u,h,d="ui-sortable",f="."+d+"-placeholder",p=t.data("formlist")||{},m=p.generator||{},g=m.selector||">.my-form",v=m.template||"<div></div>",y=/\{/.test(v),w=m.hash||lt.sdbmCode,b=m.id||lt.sdbmCode,C=m.ext,S=m.delay||50,k=t.is("."+d),x=!!t.children(f).size(),T=[],E=[],R=Date.now(),A=t.find(k?t.sortable("option","items"):g);if(B(n)&&Y(n)){if(x)return n;if(a=[],A.each(function(){var t=e(this),n=t.data("my");n&&a.push(n.data)}),c=!1,a.length===n.length)for(c=!0,s=0;s<a.length;s++)a[s]!==n[s]&&(c=!1);if((!c||C)&&(l=e.extend(!0,[],a,n),!Object.equal(a,l)||l.length!=n.length)){var D=[],O=[],_={},N={};for(E=[],s=0;s<n.length;s++)O[s]=b(n[s],s)+"",_[O[s]]=s,D[s]=(b!==w?w(n[s],s):O[s])+"";for(A.each(function(){var t=e(this),n=t.data("formlist")||{},i=n.oid;i&&_.hasOwnProperty(i)?N[i]=e(this):t.is(".my-form")?t.my("remove",!0):t.remove()}),s=0;s<n.length;s++)N[O[s]]?(u=N[O[s]].detach().appendTo(t),T.push(u.my("data")),D[s]!==(u.data("formlist")||{}).hash&&E.push(u)):(u=e(y?v.assign(n[s]):v).appendTo(t),u.data("formlist",{list:n[s],index:s,hash:D[s],oid:O[s]}),u.my(o(m.parent,m.manifest,n[s],s,n,t),n[s]).then(function(e){e.on("change.my",i.debounce(S/1.3))}.fill(u)),T.push(u.my("data")));if(E.length&&C){for(s=0;s<E.length;s++)r(E[s]);E=[]}return T}return a}if(A.size()){if(R-m.stamp>1.4*S||R-m.stamp>100||!m.stashed||m.stashed.length!==A.size()-(x?1:0)){x&&(h=t.find(">."+d+"-helper"));var P=0;for(A.each(function(t,n){var i,r,o,s=e(n),a=!1;x&&s.hasClass(d+"-helper")||(x&&s.hasClass(d+"-placeholder")&&(s=h),i=s.data("my"),r=s.data("formlist"),i&&r&&(T.push(i.data),P!=r.index&&(r.index=P,a=!0),C&&(o=w(i.data,P)+"",o!==r.hash&&(r.hash=o,a=!0)),P+=1,a&&E.push(s)))}),s=0;s<E.length;s++)r(E[s]);E=[],m.stamp=R,m.stashed=T}else T=m.stashed.slice(0);return T}return n||[]},".ui-sortable":function(t,n){var i,r=[],o="ui-sortable",s=">."+o+"-placeholder",a=t.find(t.sortable("option","items"));if(B(n)&&Y(n)){var l={},c={},u=n.unique();if(t.find("input:focus:eq(0),textarea:focus:eq(0)").size()||t.find(s).size())return u;a.each(function(){l[lt.sdbmCode(lt.extval(e(this)))]=e(this)});for(var h=u.length-1;h>=0;h--){var d=lt.sdbmCode(u[h]);l[d]&&(l[d].prependTo(t).show(),c[d]=!0,-1==r.indexOf(u[h])&&r.push(u[h]))}r=r.reverse();for(h in l)c[h]||l[h].hide()}else{var f=t.find(s),p=t.eq(0);0!=f.size()?(p.my()[o]!=f.position().left+""+f.position().top?(a=a.filter(":visible:not(:disabled, .ui-state-disabled, .ui-sortable-helper)"),i=t.find(t.sortable("option","items")).filter(".ui-sortable-helper"),a.each(function(){var t=e(this);r.push(lt.extval(t.is(".ui-sortable-placeholder")?i:t))}),p.my()[o]=f.position().left+""+f.position().top,p.my()[o+"1"]=r):r=p.my()[o+"1"],r==j&&a.each(function(){r.push(lt.extval(e(this)))})):(a=t.find(t.sortable("option","items")).filter(":visible:not(:disabled, .ui-state-disabled)"),a.each(function(){r.push(lt.extval(e(this)))}))}return r},"input[type=date]":function(e,t){if(B(t))return n=""!=t?Date.create(t).format(z):"",Q(n)&&!/Invalid/.test(n)&&e.val(n),n;var n=e.val();return""!=n?Date.create(n).format(z):""},"input[type=time]":function(e,t){if(B(t))return n=""!=t?Date.create(t).format(F):"",Q(n)&&!/Invalid/.test(n)&&e.val(n),n;var n=e.val();return""!=n?Date.create(n).format(F):""},input:{"[type='text'],[type='number'],[type='search'],[type='hidden'],[type='password'],[type='button'],[type='range'],:not([type])":{".ui-slider-input":function(e,t){B(t)&&e.val(t).slider("refresh")},".tagstrip input.value":function(e,t){B(t)&&e.val(t).trigger("update")},"div.select2-container+input":function(e,t){return B(t)&&JSON.stringify(t)!==JSON.stringify(e.select2("val"))&&e.select2("val",Y(t)?t:[t]),e.select2("val")},"":function(e,t){B(t)&&e.val(t+"")}},":radio":function(t,n){var i=-1;if(B(n)){t.each(function(t){var r=e(this).val();n+""==r+""&&(i=t)});var r=t.eq(0).checkboxradio;if(r&&t.each(function(t){var n=e(this);i!=t&&n.is(":checked")&&n.prop("checked",!1).checkboxradio("refresh")}),i>-1){var o=t.eq(i);o.is(":checked")||(o.prop("checked",!0),r&&o.checkboxradio("refresh"))}else r||t.each(function(){e(this).prop("checked",!1)})}if(-1==i)for(var s=0;s<t.size();s++)t.eq(s).is(":checked")&&(i=s);return-1!=i?t.eq(i).val():""},":checkbox":function(t,n){var i=n,r=[];if(B(i)){Y(i)||(i=[n]);var o=!!t.eq(0).checkboxradio;t.each(function(){var t=e(this),n=t.val(),s=t.is(":checked");-1!=i.indexOf(n)?(r.push(n),s||t.prop("checked",!0)):s&&t.prop("checked",!1),o&&t.checkboxradio("refresh")})}else t.each(function(){var t=e(this);t.is(":checked")&&r.push(t.val())});return r}},select:{".ui-slider-switch":function(e,t){B(t)&&(e.val(t+""),e.slider("refresh"))},"div.select2-container+select":{"[multiple]":function(e,t){return B(t)&&e.select2("val",Y(t)?t:[t]),e.select2("val")},"":function(e,t){return B(t)&&e.select2("val",t+""),e.select2("val")}},"[multiple]":function(e,t){B(t)&&(e.val(t,[]),e.selectmenu&&(e.data("uiSelectmenu")||e.data("selectmenu"))&&e.selectmenu("refresh",!0))},"":function(e,t){B(t)&&(e.val(t+""),e.selectmenu&&(e.data("uiSelectmenu")||e.data("selectmenu"))&&e.selectmenu("refresh",!0))}},textarea:{".my-cleditor":function(e,t){return B(t)&&e.val(t).cleditor()[0].updateFrame(),e.val()},"div.redactor_box textarea,.redactor":function(e,t){var n=e.hasClass("my-redactor-9");return B(t)?(n?e.redactor("set",t):e.setCode(t,!1),t):n?e.redactor("get"):e.getCode()},".my-codemirror":function(e,t){return B(t)?(e[0].nextSibling.CodeMirror.setValue(t),t):e[0].nextSibling.CodeMirror.getValue()},"":function(e,t){B(t)&&e.val(t+"")}},"fieldset,form,section,footer,aside,.my-container":function(e,t){var n=Array.prototype.slice.call(e[0],0).sort(),i=t;return B(t)&&(Q(t)&&(i=t.split(/[,\s]+/).compact(!0)),Y(i)&&(i.sort(),i.join(" ")!==n.join(" ")&&(e.atrr("css",i.join(" ")),n=i))),n},"div,span,a,p,li,td,th,h1,h2,h3,h4,h5,h6":{".ui-slider":function(e,t){return B(t)&&e.slider("option",e.slider("option","values")?"values":"value",lt.clone(t)),lt.clone(e.slider("option","values")||e.slider("option","value")||0)},".ui-buttonset":function(t,n){if(B(n)){if(""!=n){var i=j;if(t.find(":radio").each(function(){i=(e(this).val()||e(this).button("option","label"))==n?e(this):i}),i)return i.attr("checked",!0),t.buttonset("refresh"),n}}else{var r=t.find(":radio:checked");if(r.size()&&r.button)return r.val()||r.button("option","label")}return t.find(":radio:checked").attr("checked",!1),t.buttonset("refresh"),""},".ace_editor":function(e,t){return B(t)&&ace.edit(e[0]).setValue(t),ace.edit(e[0]).getValue(t)},"":function(e,t){return B(t)&&e.html(t),e.html()}},"pre,code":function(e,t){return B(t)&&e.html(t),e.html()},img:function(e,t){return B(t)&&e.attr("src",t),e.attr("src")||""},"":function(e,t){return B(t)&&e.html(t),e.html()||e.text()||String(e.val())||""}},msg:{"":{en:"Invalid input",ru:_="Неверное значение"},formError:{en:"Form error",ru:"Ошибка формы"},initFailed:{en:'<p class="my-error">Form init failed</p>',ru:'<p class="my-error">Ошибка инициализации формы</p>'},badInput:{en:"Invalid input",ru:_},patternMismatch:{en:"Pattern mismatch",ru:"Не соответствует шаблону"},rangeOverflow:{en:"Over maximum",ru:"Больше максимума"},rangeUnderflow:{en:"Under minimum",ru:"Меньше минимума"},stepMismatch:{en:"Step mismatch",ru:"Не кратно шагу"},tooLong:{en:"Too long",ru:"Слишком длинно"},typeMismatch:{en:"Invalid type",ru:"Неверный тип"},valueMissing:{en:"Required",ru:"Обязательное поле"}},events:{".hasDatepicker":"change.my check.my",".my-form,.my-tags":"change.my check.my",".ui-slider":"slide.my check.my","div.redactor_box textarea":"redactor.my check.my",".my-codemirror":"codemirror.my check.my",".ace_editor":"ace.my check.my",".my-form-list":"sortupdate.my check.my",".ui-sortable":"sortchange.my sortupdate.my check.my",".ui-draggable":"drag.my dragstop.my check.my","a, .pseudolink, input[type=button], button":"click.my","img, :radio, :checkbox":"click.my check.my","div.select2-container+input,div.select2-container+select":"change.my check.my input.my",".ui-buttonset,input, select, textarea":"blur.my change.my check.my"+("Micro"===navigator.appName.to(5)?" keyup.my":" input.my"),"":"check.my"},containers:{"*[data-role='fieldcontain'] *":{"input,textarea,select,button,:radio":function(e){return e.parents('[data-role="fieldcontain"]').eq(0)}},".tagstrip *.value":function(e){return e.parents(".tagstrip").eq(0)},"div.redactor_box textarea":function(e){return e.parents("div.redactor_box").eq(0).parent()},".my-tags,.hasDatepicker,.ui-widget,input,textarea,select,button":{".my-cleditor":function(e){return e.parents("div.cleditorMain").eq(0).parent()},"":function(t){var n=t[0].parentNode,i=n.nodeName;return/^(div|span|a|p|form|fieldset|li|ul|td|th|h\d)$/i.test(i)?e(n):t.parents("div,span,a,p,form,fieldset,li,ul,td,th,h1,h2,h3,h4,h5,h6").eq(0)}},"":function(e){return e}},offon:{".ace_editor":function(e,t){ace.edit(t[0]).setReadOnly(e)},".ui-selectable":function(e,t){lt.jquix(t,"selectable",e)},".ui-slider":function(e,t){lt.jquix(t,"slider",e)},".ui-draggable":function(e,t){lt.jquix(t,"draggable",e)},".ui-buttonset":function(e,t){lt.jquix(t,"buttonset",e)},".hasDatepicker":function(e,t){lt.jquix(t,"datepicker",e)},".my-form":function(e,t){t.my("disabled",!!e)},"div.select2-container+input,div.select2-container+select":function(e,t){lt.jquix(t,"select2",e)},".my-cleditor":function(e,t){t.cleditor()[0].disable(!!e)},"":function(e,t){t.attr("disabled",!!e)}},destroy:{".hasDatepicker":function(e){e.datepicker("destroy")},".ui-slider":function(e){e.slider("destroy")},".ui-sortable":{".my-form-list":function(t){t.find(">.my-form").each(function(){e(this).my("remove")}),t.removeClass("my-form-list"),t.sortable("destroy")},"":function(e){e.sortable("destroy")}},".my-form-list":function(t){t.find(">.my-form").each(function(){e(this).my("remove")})},".ui-draggable":function(e){e.draggable("destroy")
},".my-redactor-8":function(e){e.destroyEditor(),e.removeClass("my-redactor-8")},"div.select2-container+input,div.select2-container+select":function(e){e.select2("destroy")},".my-form":function(e){e.my("remove")},textarea:{".my-codemirror":function(e){e[0].nextSibling.CodeMirror.toTextArea(),e.removeClass("my-codemirror")}}}};at.params={container:function(e){return h(e,at.containers)(e)},change:j,recalcDepth:2,delay:0,strict:!1,restyle:-1,locale:_=(navigator.language||navigator.userLanguage||"en").substr(0,2),messages:Object.map(at.msg,function(e,t){return t[_]||t.en}),errorTip:".my-error-tip",errorCss:"my-error",animate:0,effect:function(e,t,n){return t?e.fadeIn(n):void e.fadeOut(n)},remember:0,silent:!1,history:{},historyDelay:100,loader:function(t){var n=e.Deferred(),i=ot(t+"");return i?n.resolve(i):n.reject(null),n.promise()},ajaxTimeout:1e4};var lt=O(),ct={init:function(i,o,s){function c(e){var t,n,i,o,s,a,l={},c=!0,u=e.inherit;if(l=A(u),!Object.size(l))return null;if(o=ht.parents(".my-form").eq(0),!o.size())return null;if(s=o.data("my"),!s||!s.manifest)return null;i=s.manifest,n=i.expose,c=!n;for(t in l)(c||n[t])&&(a=r(i,t),null!=a&&(/\./.test(t)||Q(l[t])?I(!0,$,lt.unmask(a,Q(l[t])?l[t]:t)):e[t]=a))}function h(){var e,n;for(var e in J)for(n in H[e].listen)J[e].addClass("my-listen-"+lt.sdbmCode(n));K.radio&&ht.on("radio.my",function(e,n){var i,r;if(Z(n)&&n.channel&&n.message&&nt(K.radio[n.channel])){i=K.radio[n.channel];try{r=i.call(K,e,n)}catch(o){t("Radio handler for form "+_+"failed",o.message,o.stack)}void 0!==r&&(e.stopPropagation(),r&&l(ht,n))}})}function f(){M.strict||S($,!0),K=I(!0,K,Object.reject($,["data"])),H=E(I(!0,{},$.ui||{}),K,M),K.radio&&(K.radio=R(K.radio)),K.expose&&(K.expose=A(K.expose)),O=Number.random(268435456,4294967295).toString(16),T=$.id||"my"+O,_=lt.sdbmCode(T),K.id=T,M.form=ht,$.params&&$.params.depth&&(M.recalcDepth=$.params.depth);for(B in K)nt(K[B])&&(K[B]=K[B].bind(K));$.error&&(Q(K.error)?it=function(e,t){return K.error.assign(I({message:e+"",err:t+""},K))}:nt($.error)&&(it=function(e,t){N=null;try{N=$.error(e,t)}catch(n){N=M.messages.initFailed}return N})),I(ht.data("my"),{id:T,cid:O,mid:_,errors:Object.extended(),ui:Object.extended(H),disabled:!1,manifest:K,locFiles:[],modals:{},radio:{}}),ht.addClass("my-form"),F="my-manifest-"+_,W="my-form-"+O,ht.addClass(W+" "+F)}function p(t){function n(e,t){return'<style id="'+t+'" data-count="0">.'+t+e.join(" \n."+t)+"\n</style>"}K.style&&(z=D(ht,K,F,W),z&&z[0].length&&!t&&(q=e("style#"+F),q.size()||(q=e(n(z[0],F)).appendTo(e("body"))),q.data("count",1*q.data("count")+1),ht.data("my").style=q),z&&z[1].length&&(U=e("style#"+W),U.size()?t&&(e(n(z[1],W)).replaceAll(U),U=e("style#"+W)):(U=e(n(z[1],W)).appendTo(e("body")),M.restyle>-1&&!L[O]&&(L[O]=function(){p(!0)}.debounce(M.restyle)),ht.data("my").restyle=p.fill(!0).debounce(0)),ht.data("my").localStyle=U))}function m(){var t,n,i=e.Deferred();if(n=a(K),Q(n))b("Error decoding base64 to local Blob/URL",n),i.reject();else{if(P)for(t=0;t<n.length;t++)Y.push(K.files[n[t]].url);Y.length&&(ht.data("my").locFiles=Y),i.resolve()}return i.promise()}function g(){if($.init!=j){ut=ht.find(">*").clone();try{G=C(K,$.init,ht,$)}catch(t){return b(Q(t)?t:t.message,t.stack),ht}}if(rt(G)?G.then(function(){v()},function(e,t){b(e,t)}):v(),!tt){if(!ht.my())return b("Internal error initializing controls.",""),ht;ht.data("my").initial=I(!0,{},X),e.mobile&&e.mobile.changePage(e.mobile.activePage)}}function v(){function e(e){tt||(t[e]=u(ht.find(e),j),n-=1,.5>n&&w(t))}var t={},n=Object.size(H);ht.addClass(st),Object.each(H,function(t){if(!tt){var n=ht.find(t),i=y(n,ht,H[t],t);rt(i)?i.then(e.fill(t)).fail(function(e,n){b("Error building "+t+", "+e,n)}):tt||e(t)}})}function w(e){var n,i,r;for(var o in H){if(tt)return;if(n=H[o],r=ht.find(o),r.size()){n.listen&&(J[o]=r.eq(0));try{i=d(X,j,n,r),i==j&&e[o]!=j&&void 0!==i&&d(X,e[o],n,r)}catch(s){t("Transient fail linking "+o+" of form $('.my-form-"+O+"')",s.message,s.stack)}try{i!=j&&u(r,i),r.eq(0).trigger("check.my")}catch(s){b("Error linking "+o,s.message,s.stack)}}}ht.removeClass(st),ut=null,et.resolve(X)}function b(e,n){var i;if(tt=!0,t("Form "+T+" failed to initialize.",e,n),ht.removeClass(st),i=it(e,n),Q(i)||Z(i)&&i.jquery?ht.html(i):i===!0&&ht.html(ut),M.silent)et.resolve(X);else{if(!ht.my().ddata){if(ht.removeData("my"),ht.removeClass("my-form"),q)if("1"==q.data("count"))try{q.remove()}catch(r){}else q.data("count",q.data("count")-1);if(U)try{delete L[O],U.remove()}catch(r){}}et.reject("Form "+T+" failed to initialize: "+e,n)}}var k,x,T,O,_,N,H,M,$,B,z,F,W,q,U,G,K={},X={},Y=[],J={},et=e.Deferred(),tt=!1,it=function(){},st="my-form-init",ct="std",ut="";if(Q(i)){if(k=ot(i),!k)return et.reject("No manifest with id "+i+" found in repo."),et.promise();Z(s)&&Z(o)?(k=I(k,o),x=s):x=o,ct="repo"}else k=i,x=o;if(!k)return this;$=Z(x)&&"repo"!=ct?I(!0,{},k):k;var ht=this.eq(0),dt=ht.my();return Z(dt)&&dt.id&&dt.ui?(n("jQuery.my is already bind.",ht),ht.my("ui",$.ui),ht.my(V,$.data),et.resolve(ht.my(V)).promise()):(M=$.params||{},M.strict||(M=I(!0,{},M),S(M)),M=I(!0,{},at.params,M),et.fail(function(){ht.removeClass(W+" "+F)}),I(ht,et.promise()),Z(x)?(X=lt.patch(x,$.data||{}),$.data=X):X=$.data||{},K.data=X,ht.data("my",{data:X,params:M,promise:et.promise(),locktill:0}),ht.addClass(st),$.inherit&&c($),lt.require($,M).then(function(){f(),m().then(function(){p(),g()})}).fail(function(e){f(),b("Linker of ‘require’ property failed.",e)}),et.then(h),ht)},redraw:function(e,t){var n=this,i=n.my();return i&&i.ui&&(i.ui.each(function(t){var r=n.find(t);g(r,e?j:void 0,i.params.recalcDepth),e||(r.is(".my-form")&&r.my("redraw"),r.trigger(r.is(".my-form-list")?"redraw":"check.my"))}),!t&&e&&n.trigger(K)),n},data:function(e,t){var n=this;return Z(e)&&(n.my().data=lt.overlap(n.my().data,e),this.my("redraw",t)),n.my().data},errors:function(){var t=e(this).my().errors,n={};for(var i in t)t[i]&&Q(t[i])&&(n[i]=t[i]),Z(t[i])&&it(t[i]).length&&(n[i]=t[i]);return n},valid:function(){var t=e(this).my().errors,n=0;for(var i in t)t[i]&&Q(t[i])?n++:Z(t[i])&&it(t[i]).length&&n++;return!n},reset:function(){try{lt.kickoff(this.my().data,this.my().initial),this.my("redraw")}catch(e){return!1}return!0},id:function(e,t){if(Q(e))return ot(e,t);var n=this.my();return n&&n.id?n.id:j},remove:function(e){var t,n,i,r,o,s,a,l,c=this;if(!this.my())return j;if(this.my().root&&!this.my().ddata&&(c=this.my().root),i=c.my(),o=i.data,a=i.cid,l=i.mid,c.unbind(".my"),Z(i)&&i.manifest&&nt(i.manifest.die))try{i.manifest.die.call(i.manifest,c,i.manifest)}catch(u){}if(t=i.style)if("1"==t.data("count"))try{t.remove()}catch(u){}else t.data("count",t.data("count")-1);if(n=i.localStyle)try{delete L[a],n.remove()}catch(u){}if(window.URL&&(r=i.locFiles)&&r.length)for(var d=0;d<r.length;d++)try{URL.revokeObjectURL(r[d])}catch(u){}if(s=(i||{}).ui,s&&s.each(function(e){var t,n,i,r=c.find(e);if((n=r.data("modal"))&&(n.cancel(),r.removeData("modal")),n=r.data("modals"))for(i in n)n[i]&&n[i].cancel();r.unbind(".my");try{t=h(r,at.destroy),nt(t)&&t(r)}catch(o){}r.removeData("formlist").removeData("myval").removeData("my")}),e&&c.is(".my-form"))c.remove();else if(c.data("formlist")&&c.is(".my-form")){var f=c.parents(".my-form-list").eq(0);c.remove(),f.trigger("check")}else c.removeData("formlist").removeData("myval").removeData("my").removeClass("my-form");return c.removeClass("my-form-"+a+" my-manifest-"+l),o},undo:function(e){var t,n=this,i=n.my(),r=i.params.history,o=it(r).sort(),s=1*(parseInt(e)||0);return!o.length||0>s?j:(i.params.errors&&i.params.errors.values().compact(!0).length?Object.equal(i.data,i.lastCorrect)||(s+=1):Object.equal(r[o.last()],i.data)&&(s+=1),t=v(s,i.params,!0),t&&(lt.kickoff(n.my().data,t),n.my("redraw")),n.my().data)},ui:function(e){var t,n=this,i=n.my(),r=[];if(!i)return j;I(!0,{},i.ui);if(!Z(e))return i.ui;for(t in e)r.push(t);for(i.ui=E(lt.overlap(i.ui,e)),t=0;t<r.length;t++)y(n.find(r[t]),n,i.ui[r[t]],r[t]);for(t in e)n.find(t).eq(0).trigger("check");return i.ui},disabled:function(e){var t,n,i,r,o=this,s=o.my();if(!s)return void 0;if(e==j)return s.disabled;if(e){for(n in s.ui)t=o.find(n).eq(0),i=t.my(),i&&(i.predisabled=i.disabled),m(!0,t,":disabled");o.addClass("my-disabled")}else{for(n in s.ui)t=o.find(n).eq(0),i=t.my(),r=!1,i&&i.predisabled&&(r=!0),m(r,t,":disabled");o.removeClass("my-disabled"),o.my("redraw")}},find:function(e){var t=this,n=t.my();return n&&n.root&&(t=n.root),t.find(e)},radio:function(e,t){this.trigger("radio",Q(e)?{channel:e,message:t}:e)},manifest:function(e){return"json"==e?lt.tojson(this.my().manifest):this.my().manifest},version:function(){return N},history:function(e,t){return v(e,this.my().params,t)},val:function(e){return u(this,e)},container:function(e){return h(e,at.containers)(e)},promise:function(e){return nt(e)&&this.my().promise.then(e),this.my().promise},index:function(){var e=this.my().root&&!this.my().ddata?this.my().root:this;return(e.data("formlist")||{}).index},insert:function(e,t){var n,i,o=this.is(".my-form-list")?this:this.my().root||this,s=o.is(".my-form-list")?o:o.parent(".my-form-list"),a=(o.data("formlist")||{}).index,l=t;if(null==a&&(a=0),n=r(s.my().data,s.data("formlist").generator.bind),!Z(l))if(Z(s.data("formlist").generator.manifest))l=Object.clone(s.data("formlist").generator.manifest.data,!0)||{};else{if(s===o)throw"No data to insert, cannot guess when manifest is function.";l=Object.clone(o.my().manifest.data,!0)}if("before"===e)i=a;else if("after"===e)i=a+1;else{if(isNaN(e))throw"Invalid position for insert";i=(1*e).clamp(0,n.length)}n.add(l,i),s.trigger("redraw")}};e.my||(e.my={}),e.extend(e.my,{f:e.extend({},lt),tojson:lt.tojson,fromjson:lt.fromjson,radio:function(t,n){l(e(document),Q(t)?{channel:t,message:n}:t)},rules:at,cache:function(e,t){return nt(e)?ot=e:ot(e,t)},version:function(){return N},ajax:function(e){return nt(e)?st=e:st.apply(this,Array.prototype.slice.call(arguments))}}),e.my.chain=function(){function e(){if(i.length&&r){var t,n=i.shift(),o=function(){e.delay(n[1])}.once();try{t=n[0]()}catch(s){o()}rt(t)?(t.then(o,o),o.delay(n[1])):o()}}var t=1,n=1e3,i=[],r=!1,o=function(r,o,s){i.push([r,o||t,s||n]),e()};return o.delay=function(e){return isNaN(e)||(t=(e-0).clamp(0,1e6)),t},o.timeout=function(e){return isNaN(e)||(n=(e-0).clamp(1,1e6)),n},o.start=function(){r=!0,e()},o.stop=function(){r=!1},o}(),e.fn.my=function(t){var n;if(void 0===t)return this.data("my");if(Q(t)&&"{"==t.substr(0,1)){try{n=JSON.parse(t)}catch(i){}if(n)return ct.init.apply(this,[n].add(Array.prototype.slice.call(arguments,1)))}return Q(t)&&ct[t]?ct[t].apply(this,Array.prototype.slice.call(arguments,1)):Q(t)&&ot(t,"exist")?ct.init.apply(this,arguments):typeof t!==W&&t?void e.error("Method "+t+" does not exist on jQuery.my"):ct.init.apply(this,arguments)},e(window).off(".my").on("radio.my",function(t,n){t.stopPropagation(),l(e(document),n)}).on("resize.my",function(){for(var e in L)try{L[e]()}catch(t){}}.debounce(100))}(jQuery),function(e){function t(e,t,n){if(l(t))return e+t;if(c(t))return n=r(!0,n,t),e;if(a(t)&&t.length>1&&l(t[1])){for(var i,u,d,f,p,m,g,v,y=t[0],w="",b=1;b<t.length;){if(l(t[b]))if(f=t[b].replace(/\s/g,""),d=f.split(/[\.#]/i),u=n.alias[d[0]]||d[0],i=f.substr(d[0].length),/^[a-z0-9]+(#[a-z0-9\-_]+)?(\.[a-z0-9\-_]+)*$/i.test(f)){g=h.tmpl[u]||h.tmpl[""],m={style:"","class":"",txt:""},v="";var C=c(t[b+1]);if(C){b+=1;for(p in t[b])""!==h.attnames[p]&&(m[h.attnames[p]||p]=t[b][p])}m.style||m["class"]||!n.styles[u]||(m.style=n.styles[u]),m.id||"#"!=i.to(1)||(m.id=i.from(1).split(".")[0]),!m["class"]&&/\./.test(i)&&(m["class"]=("#"==i.to(1)?i.substr(m.id.length+1):i).split(".").compact(!0).join(" "));for(p in m)v+=p+'="'+m[p]+'" ';if(C)for(p in t[b])""===h.attnames[p]&&(m[p]=t[b][p]);m.ext=v,!m.txt&&h.txt[u]&&(m.txt=h.txt[u](m)),m._tag=u,w+=typeof g==s?g(m)||"":typeof g==o?g.assign(m):""}else w+=t[b];b+=1}return w&&(w="<"+n.rowTag+' class="'+n.rowCss+'" '+(n.row?'style="width:'+n.row+"; ":"")+(n.label&&y?"padding-left:"+n.label+"; ":"")+'">'+(y?"<"+n.labelTag+' class="'+n.labelCss+'" '+(n.label?'style="display:inline-block;width:'+n.label+";margin-left:-"+n.label+'" ':"")+">"+y+"</"+n.labelTag+">":"")+w+"</"+n.rowTag+">"),e+w}return e}function n(e){var t=e;if(l(t)&&(t=t.split(/[\s,]/).compact(!0)),a(t)){for(var n={},i=0;i<t.length;i++){var r=t[i];if(c(r)){var o=Object.keys(r);1==o.length?n[o[0]]=r[o[0]]+"":n[r.id||r.key||r.name||""]=r.text||r.value||r.title||""}else n[r]=r+""}t=n}return c(t)?t:{}}function i(n,i){var o={};return a(n)?(r(!0,o,h.params,i||{}),n.length?n.reduce(t.fill(void 0,void 0,o),""):""):c(n)?void e.extend(h,n):""}var r=e.extend,o="string",s="function",a=Object.isArray,l=(Object.isBoolean,Object.isString),c=Object.isObject,u=(Object.isNumber,Object.isRegExp,Object.isFunction,'<input type="'),h={tmpl:{num:u+'number" {ext}/>',inp:u+'text" {ext}/>',sli:u+'range" {ext}/>',dat:u+'date" {ext}/>',btn:u+'button" {ext}/>',pwd:u+'password" {ext}/>',but:"<button {ext}>{txt}</button>",div:"<div {ext}>{txt}</div>",spn:"<span {ext}>{txt}</span>",sel:"<select {ext}>{txt}</select>",mul:'<select {ext} multiple="multiple">{txt}</select>',txt:"<textarea {ext}>{txt}</textarea>",err:' <span class="my-error-tip {class}" style="{style}">{txt}</span>',msg:'<div class="my-error-tip {class}" style="{style}">{txt}</div>',val:function(e){if(!a(e.vals))return"";var t=r({style:"",css:""},e);return t.txt=e.vals.reduce(function(e,t){return e+"<span class=\"my-shortcut\" onclick=\"$(this).parents('.my-row').find('input,textarea').val($(this).text()).trigger('blur')\">"+t+"</span> "}," "),'<span class="my-shortcuts {css}" style="{style}">{txt}</span>'.assign(t)},"":"<{_tag} {ext}>{txt}</{_tag}>"},txt:{sel:function(e){if(!e.vals)return"";var t=n(e.vals);return Object.keys(t).reduce(function(e,n){return e+'<option value="'+n+'">'+t[n]+"</option>"},"")}},params:{styles:{num:"width:30%;",dat:"width:30%;",inp:"width:100%",pwd:"width:100%",but:"width:30%",txt:"width:100%;max-width:100%;min-height:1px;word-break:break-word;",err:"display:none",msg:"display:none"},alias:{number:"num",date:"dat",slider:"sli",textarea:"txt",input:"inp",span:"spn",select:"select",vals:"val"},row:"",rowTag:"div",rowCss:"my-row",label:"",labelTag:"span",labelCss:"my-label"},defaults:{id:"","class":"",style:"",placeholder:"",value:"",rows:1},attnames:{css:"class",plc:"placeholder",val:"value",txt:"",vals:"",tip:"title"}},d={init:function(t,n){return e(this).html(i(t,n))}};e.my||(e.my={}),e.my.formgen=i,e.fn.formgen=function(t){return l(t)&&d[t]?d[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.formgen"):d.init.apply(this,arguments)}}(jQuery),function(e){function t(t,n,i,r){var o,a,l,h,d,f,p;if("object"==typeof n&&n.jquery)n.is("img")&&(f=n,d=n.attr("alt")||n.attr("title")||n.data("text")||"",a=f[0].naturalWidth||f[0].width,o=f[0].naturalHeight||f[0].height,1>o&&(o=1),1>a&&(a=1),h=e(window).width()-90,l=e(window).height()-90,o>l&&(a=a*(l/o)|0,o=l),a>h&&(a=h,o=o*(h/a)|0),p=300>a?300:a,s(t,{source:"image",manifest:{init:function(e){e.html(this.HTML),e.on("click.my","img:eq(0)",function(){e.trigger("cancel")})},HTML:'<img src="" class="db" style="max-width:'+a+"px;max-height:"+o+'px"><h4 class="mt10"></h4>',ui:{"img:eq(0)":"img",h4:{bind:"text",css:{hide:function(e,t){return!t}}}}},data:{img:f.attr("src"),text:d},esc:!0,screen:!0,width:r||p,focus:!1,global:!0,z:"1995"},i));else if(u(n)&&n.manifest)s(t,n,i);else{if(!c(n))return null;s(t,{source:"html",manifest:{init:function(e){e.html(this.HTML)},HTML:n,ui:{"div:eq(0)":function(){}}},data:{},esc:!0,focus:!1,width:r},i)}return t}var n,i={},r="body",o=!1,s=e.extend,a={},l=(Object.isArray,Object.isBoolean),c=Object.isString,u=Object.isObject,h=Object.isNumber,d=(Object.isRegExp,Object.isFunction);e(document).keydown(function(e){var t,n,i=e.keyCode;if(!1!==o&&(13===i||27===i)){if(n=o.data("modal"),t=n.form,27==i&&(n.esc||Object.equal(t.data("my").initial,t.my("data"))))return o.modal(!0),!1;if(13==i&&n.enter)return function(e){e.modal()}.fill(o).delay(50),!1}}),i.modal=function(n,i,s){var a,c={},u=e(r),h=u.find(">.my-modal-proxy"),f={global:!0,screen:!0,done:d(i)?i:void 0,z:"1995"};return l(n)||null==n?h.modal(n):(a=e.Deferred(),t(c,n,f,s)?o?a.reject("Locked").promise():(h.size()||(h=e('<div class="my-modal-proxy"></div>').prependTo(u),h.css({position:"absolute",top:"0",left:"0",margin:"0",padding:"0",width:"1px",height:"0"})),h.modal(c)):a.reject("Invalid data").promise())},i.modal.loading=function(t){e(r).find(">.my-modal").toggleClass("my-modal-loading",!!t)},i.modal.parent=function(t){return t&&e(t).size()?void(r=t):e(r)},i.modal.parentBack=function(t){return t&&e(t).size()?void(n=t):e(n||r)},i.modal.visible=function(){return!!o},e.my||(e.my={}),e.my.modal=i.modal,e.fn.modal=function(i,f,p){function m(){var t,n,i=window,r=!!P.global,o=C.offset(),s=A.offset();P.pos={px:o.left,py:o.top,pw:C.outerWidth(),ph:C.outerHeight(),ox:s.left,oy:s.top,ow:A.outerWidth(),oh:A.outerHeight(),ww:n,wh:t};var a=1*(P.x.match(/\-?\d+(\.\d+)?/)||[0])[0],l=1*(P.y.match(/\-?\d+(\.\d+)?/)||[0])[0],c=P.x.has("left")?-1:P.x.has("right")?1:0,u=P.y.has("top")?-1:P.y.has("bottom")?1:0,d=P.pos.ox+P.pos.ow/2-P.pos.px,f=P.pos.oy+P.pos.oh/2-P.pos.py;if(r&&(P.pos.wh=t=i.innerHeight||e(i).height(),P.pos.ww=n=i.innerWidth||e(i).width(),d=n/2,f=t/2.5),a=P.x.has("%")?P.pos.ow/100*a:a,l=P.y.has("%")?P.pos.oh/100*l:l,P.pos.pix=d,P.pos.piy=f,d=d+c*(P.pos.ow/2)+a*(c>0?-1:1)-(P.width+D)*(c+1)/2,r?(f=(t-P.height-20)/3,10>f&&(f=10)):f=f+u*(P.pos.oh/2)+l*(u>0?-1:1)-(P.height||0)*(u+1)/2,d=d.round(1),f=f.round(1),P.pos.vx=d,P.pos.vy=f,P.bound!==!1&&!P.global){var p=(h(P.bound)?P.bound:0).clamp(-100,100);P.pos.pw-2*p<P.width+D?P.pos.vx=-(P.width+D-P.pos.pw)/2:P.pos.vx+P.width+D>P.pos.pw-p?P.pos.vx=P.pos.pw-p-P.width-D:P.pos.vx<p&&(P.pos.vx=p),P.pos.ph-2*p<P.height?(P.pos.vy=p,P.height=P.pos.ph-2*p):P.pos.vy+P.height>P.pos.ph-p?P.pos.vy=P.pos.ph-p-P.height:P.pos.vy<p&&(P.pos.vy=p)}}function g(t){if(t||(P.height=w.outerHeight(),"manifest"!==P.source&&(P.width=w.width()),m()),w.css({width:P.width+D+"px",display:"block"}),P.global)w.css({left:"50%","margin-left":"-"+((P.width+D)/2).round(0)+"px"});else if(w.css({left:P.pos.vx+"px"}),P.nose){e("style#my-modal-style-"+P.cid).size()||w.append('<style id="my-modal-style-'+P.cid+'"></style>');var n="",i=e("style#my-modal-style-"+P.cid);("top"==P.nose||"bottom"==P.nose)&&(n+="div.my-modal-"+P.cid+".nose-"+P.nose+":before {left:"+(P.pos.ox-P.pos.px+P.pos.ow/2-P.pos.vx)+"px!important;}",i.text(n)),("left"==P.nose||"right"==P.nose)&&(n+="div.my-modal-"+P.cid+".nose-"+P.nose+":before {top:"+(P.pos.oy-P.pos.py+P.pos.oh/2-P.pos.vy)+"px!important;}",i.text(n))}P.screen?P.global?(S.css({top:0,left:0,width:2*P.pos.ww+"px",height:2*P.pos.wh+"px",display:"block",position:"fixed","z-index":P.z-1}),c(P.screen)&&S.css({background:P.screen?P.screen:"rgba(25, 39, 59, 0.88)"})):S.css({top:0,left:0,position:"absolute",width:P.pos.pw+"px",height:P.pos.ph+"px",display:"block",background:c(P.screen)?P.screen:"rgba(40,80,120,0.6)","z-index":P.z-1}):S.size()&&S.hide(),P.height>P.pos.wh?(w.height(P.pos.wh-30),b.css({"overflow-y":e.browser.webkit?"overlay":"scroll"})):b.css({"overflow-y":"none"}),w.animate({top:P.pos.vy+"px",opacity:"1"},P.animate)}function v(){try{b.my("remove")}catch(t){}try{C.data("modals")[P.cid]=null}catch(t){}b.parent().unbind(".my").remove(),S.off(".my"+P.cid),P.screen&&function(e){e&&o||S.hide(),e&&!o&&S.css({background:"rgba(25, 39, 59, 0.88)"})}.delay(50,P.global),P.global&&(o=!1,e("body").css({overflow:"auto"}))}function y(e){try{_(null,null)}catch(t){}(function(){E.reject(e)}).delay(0)}var w,b,C,S,k,x,T,E=e.Deferred(),R={},A=this,D=0,O=0,_=d(f)?f:function(){return!1},N=u(i)?i:{},P=A.data("modal");if(s(A,E.promise()),P){if(null==i||l(i)){if(b=P.form,S=P.bg,C=P.root,_=P.done,x=b.my("data"),T=!1,i){try{_(null,null)}catch(H){}if(v(),A.removeData("modal"),a[P.cid])try{a[P.cid].reject("Cancelled")}catch(H){}delete a[P.cid],P=null}else{try{T=_(b.my("valid")?null:b.my("errors"),x)}catch(H){}T||(v(),A.removeData("modal"),function(){a[P.cid]&&a[P.cid].resolve(x),delete a[P.cid],P=null}.delay(0))}return A}if(N)return y("Locked"),A}return A.is(":visible")?(N=t(R,i,{}))?N.global&&o?(y("Locked"),A):(P=s({type:"DOM",source:"manifest",form:null,modal:null,root:null,bgroot:null,caller:A,manifest:{},data:{},global:!1,screen:!1,drag:!1,focus:!0,close:!0,silent:!0,esc:!1,enter:!1,bound:!1,nose:"",width:p||300,height:null,x:"0",y:"0",z:"1901",background:"white",css:"",animate:200},N,{promise:E.promise(),cid:Number.random(268435456,4294967295).toString(16)}),P.done=d(P.done)?P.done:_,c(P.align)&&P.align&&(P.x=(P.align.match(/(left|right):\-?\d+(\.\d+)?(%|px)?/g)||["0"])[0],P.y=(P.align.match(/(top|bottom):\-?\d+(\.\d+)?(%|px)?/g)||["0"])[0]),P.width=1*(e.my.f.getref(c(P.manifest)?e.my.cache(P.manifest):P.manifest,"params.width")||P.width),P.type="DOM",A.hasClass("my-form")?(P.type="form",P.root=P.root||A):A.data("my")?(P.type="control",P.root=P.root||A.my().root):(P.root=P.root||A.parents(".my-form").eq(0),P.root.size()||(P.root=e(r))),P.global?(P.root=e(r),P.bgroot=e(n||r)):P.bgroot=P.root,C=P.root,C.data("modals")||C.data("modals",{}),m(),w=e('<div class="my-modal my-modal-'+(P.global?"fullscreen ":"overlay ")+P.css+(P.nose?" nose-"+P.nose:"")+'"></div>').prependTo(P.root),w.addClass("my-modal-"+P.cid),D=w.outerWidth(),O=w.outerHeight(),w.hide(),w.html('<div class="my-modal-form"></div>'),b=w.find(".my-modal-form"),P.close&&(k=e(c(P.close)?P.close:'<div class="my-modal-close" title="Close">×</div>').prependTo(w).on("click.my",function(){A.modal(!0)}),k.css({"z-index":("+"===(P.z+"").to(1)?"+":"")+(1*P.z+1)})),S=P.bgroot.find(">.my-modal-screen"),P.screen&&(S.size()||(S=e('<div class="my-modal-screen" style="display:none;"></div>').prependTo(P.root)),P.esc&&S.on("click.my"+P.cid,function(){A.modal(!0)})),A.data("modal",P),P.silent&&w.on("change.my",function(){return!1}),w.css({display:"block",height:"none",opacity:"0.005","z-index":P.z,width:"auto"}),w.css(P.global?{position:"fixed",left:"50%",top:P.pos.vy+"px",display:"block",height:"none",opacity:"0.005","z-index":P.z,width:"auto","margin-left":"-"+((P.width+D)/2).round(0)+"px"}:{position:"absolute",left:P.pos.vx+"px",top:P.pos.vy+"px",display:"block",height:"none",opacity:"0.005","z-index":P.z,width:"auto"}),b.my(P.manifest,P.data).then(function(){var t,n,i,r,l;if(s(P,{form:b,bg:S,cancel:function(){A.modal(!0)},commit:function(){A.modal()}}),w.data("modal",P),P.height=w.outerHeight(),"manifest"!==P.source&&(P.width=w.width()),m(),w.css({top:P.pos.vy+"px"}),g(!0),C.data("modals")[P.cid]=P,a[P.cid]=E,b.bind("commit.my",function(){return P.commit.delay(50),!1}).bind("cancel.my",function(){return P.cancel.delay(50),!1}),w.bind("layout.my",function(){g()}.debounce(50)),P.global&&(o=A,e("body").css({overflow:"hidden"})),P.global||!P.esc&&!P.enter||b.bind("keydown.my",function(t){var n=t.keyCode;return 27==n&&P.esc?(P.cancel(),!1):13==n&&P.enter&&!e(t.target).is("textarea")?(P.commit.delay(50),!1):void 0}),P.focus===!0){r=!1,l=P.manifest.ui;for(i in l)r||(n=b.find(i),n.size()&&n.is("input, textarea")&&(r=!0,n.focus()))}else c(P.focus)&&b.find(P.focus).focus();if(t=b.find("img").filter(function(){return""!=e(this).attr("src")}),t.size()){var u=function(){"manifest"!==P.source&&w.css({width:"auto"}),g()}.after(t.size());t.each(function(){e(this).bind("load",u)})}P.drag&&e.fn.draggable&&(c(P.drag)?w.draggable({handle:P.drag}):w.draggable()),E.notify("Ready")}).fail(function(e){v(),A.data("modal",null),E.reject(e)}),A):(y("Invalid data"),A):(y("Object must be visible"),A)}}(jQuery);

/*jQuery Tags 0.4*/
!function(t){function e(t,e){var n,i=0,o=t.data("tags");if(o.data=[],e.length){var r=e.unique();for(o.tv={},t.find(".tag.active").trigger("click"),n=0;n<r.length;n++)o.ti[r[n]]&&(o.$t[r[n]].trigger("click"),i+=1)}i||(null!=o.empty?t.find(".tags-empty").trigger("click"):t.find(".tag.active").trigger("click"))}var n={init:function(n){var i,o,r,s,a,l,c,u,h,d,f=t(this),p=[],m=[],g={},v={},y={},w={data:[],tags:[],disabled:!1,event:"change",tagcss:"tag pseudolink",template:function(t){return('<span class="'+w.tagcss+' {css}" data-value="{value}">{name}</span>').assign(t)},empty:null,tagshim:" ",groupshim:" ",silent:!1},b=t.type(n),C=null;for("object"==b?t.extend(!0,w,n):"array"==b&&(w.tags=n.slice(0)),f.data("tags")&&(w.data=f.data("tags").data.slice(0)),null!=w.empty&&(c=w.empty,b=t.type(c),/^nu|^str/.test(b)?(l="",a=String(c)):"object"==b&&(a=Object.keys(c)[0],l=c[a]),"string"==typeof l&&(C=l,g[l]={name:a,i:null,j:null,value:l,css:"tags-empty"})),o=w.tags,a=0;a<o.length;a++){for(c=o[a],s=[],r=[],b=t.type(c),/^num|^str|^ob/.test(b)?r=[c]:"array"==b&&(r=c.slice(0).unique()),l=0;l<r.length;l++)if(u=r[l],h=t.type(u),/^num|^str/.test(h))s.push({name:String(u),value:String(u)});else if("object"==h)for(d in u)s.push({name:String(d),value:String(u[d])});s.length&&m.push(s.slice(0))}for(a=0;a<m.length;a++){for(s=[],l=0;l<m[a].length;l++)c=m[a][l].value,g[c]||(g[c]=!0,s.push(m[a][l]));s.length&&p.push(s.slice(0))}for(a=0;a<p.length;a++)for(l=0;l<p[a].length;l++)c=p[a][l].value,g[c]={name:p[a][l].name,i:a,j:l,value:c,css:"tags-row"+a};for(i="",null!=C&&(i+=w.template(g[C])+w.groupshim),a=0;a<p.length;a++)for(a&&(i+=w.groupshim),l=0;l<p[a].length;l++)l&&(i+=w.tagshim),i+=w.template(g[p[a][l].value]);return f.html(i),f.off(".tag"),f.on("click.tag",".tag",function(){var e,n,i=t(this),o=i.data("value");if(!w.disabled){if(i.is(".tags-empty"))f.find(".tag").removeClass("active"),v={},C&&(v[C]=!0),i.addClass("active");else{if(i.is(".active"))i.removeClass("active"),v[o]=!1;else{for(e=g[o].i,f.find(".tag.tags-row"+e).removeClass("active"),n=0;n<p[e].length;n++)v[p[e][n].value]=!1;i.addClass("active"),v[o]=!0,C&&(v[C]=!1)}Object.values(v).compact(!0).length?f.find(".tags-empty").removeClass("active"):(v={},C&&(v[C]=!0),f.find(".tags-empty").addClass("active"))}w.data=[];for(e in v)v[e]&&w.data.push(e);f.data("value",w.data),w.silent||f.trigger("change")}}),f.find(".tag").each(function(){var e=t(this),n=e.data("value");y[n]=e}),t.extend(w,{ti:g,tv:v,$t:y}),f.addClass("my-tags").data("tags",w),w.silent=!0,e(f,w.data),w.silent=!1,f},disable:function(e){void 0!==e&&(t(this).data("tags").disabled=!!e)},data:function(n){var i=t(this).data("tags"),o=n;return"string"==typeof o&&(o=[n]),i&&o&&"array"==t.type(o)&&!i.disabled?(i.silent=!0,e(t(this),o),i.silent=!1,t(this).data("tags").data):i?i.data:[]}};t.fn.tags=function(e){return n[e]?n[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist in jQuery.tags"):n.init.apply(this,arguments)}}(jQuery);

/*
 * CloudWall.me 1.0.1 library functions
 * Require Sugar 1.4.x, jQuery1.10+, jQuery.my 1.0.0+
 */

if (!("cw" in window)) window.cw={};
if (!cw.lib) cw.lib={};

(function(root){
	
	var _version = "cw.lib 1.0.1";
	
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