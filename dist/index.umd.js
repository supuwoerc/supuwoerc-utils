!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).template=e.template||{},e.template.min=e.template.min||{},e.template.min.js={}))}(this,(function(e){"use strict";function t(e,t){return e.classList.contains(t)}function n(e){return Object.prototype.toString.call(e)}function o(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}function r(){const{userAgent:e}=navigator;return!/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}function i(e,t,n){var o,r=n||{},i=r.noTrailing,c=void 0!==i&&i,u=r.noLeading,a=void 0!==u&&u,s=r.debounceMode,f=void 0===s?void 0:s,l=!1,d=0;function p(){o&&clearTimeout(o)}function m(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var u=this,s=Date.now()-d;function m(){d=Date.now(),t.apply(u,r)}function g(){o=void 0}l||(a||!f||o||m(),p(),void 0===f&&s>e?a?(d=Date.now(),c||(o=setTimeout(f?g:m,e))):m():!0!==c&&(o=setTimeout(f?g:m,void 0===f?e-s:e)))}return m.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;p(),l=!n},m}e.addClass=function(e,n){t(e,n)||e.classList.add(n)},e.array2Tree=function(e,t="children",n="id",o="pid",r=""){const i=new Map,c=[];return e.forEach((e=>{const u=e[n],a=e[o],s={...e,[t]:i.get(u)?.[t]??[]};if(i.set(u,s),a!==r&&a){i.get(a)||i.set(a,{[t]:[]});const e=i.get(a);e&&e[t].push(s)}else c.push(s)})),c},e.clearAllCookie=function(){const e=document.cookie.split(";");for(let t=0;t<e.length;t+=1){const n=e[t],o=n.indexOf("="),r=o>-1?n.substr(0,o):n;document.cookie=`${r}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}},e.debounce=function(e,t,n){var o=(n||{}).atBegin;return i(e,t,{debounceMode:!1!==(void 0!==o&&o)})},e.ensurePrefix=function(e,t){return t.startsWith(e)?t:e+t},e.ensureSuffix=function(e,t){return t.endsWith(e)?t:t+e},e.generateUUID=function(){if("object"==typeof crypto){if("function"==typeof crypto.randomUUID)return crypto.randomUUID();if("function"==typeof crypto.getRandomValues&&"function"==typeof Uint8Array){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>{const t=Number(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}}let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(n=>{let o=16*Math.random();return e>0?(o=(e+o)%16|0,e=Math.floor(e/16)):(o=(t+o)%16|0,t=Math.floor(t/16)),("x"===n?o:3&o|8).toString(16)}))},e.getArrayItem=function(e,t){const{length:n}=e;let o=t;if(!(n<=0))return t<0&&(o+=n),e[o]},e.getCookie=function(e){const t=document.cookie.split(";").find((t=>{const[n]=t.split("=");return n.trim()===e}));if(t){const[,e]=t.split("=");return decodeURIComponent(e.trim())}return null},e.getElementSelector=function(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const n=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,n.unshift(e);break}{let n=t,o=1;for(n=n.previousElementSibling;n;)n.nodeName.toLowerCase()===e&&(o+=1),n=n.previousElementSibling;const r=t.nodeName.toLowerCase(),i=t.previousElementSibling?.nodeName.toLowerCase()===r,c=t.nextElementSibling?.nodeName.toLowerCase()===r,u=i||c;t!==document.body&&u&&(e=`${e}:nth-of-type(${o})`)}n.unshift(e),t=t.parentNode}return n.join(" > ")},e.getParents=function(e,t,n="id",o="children",r=((e,t)=>e===t)){const i=[],c=e=>{if(r(e[n],t))return i.push(e),!0;const u=e[o];if(u&&Array.isArray(u))for(const t of u)if(c(t))return i.push(e),!0;return!1};for(const t of e)if(c(t))return i.reverse();return[]},e.getQueryParam=function(e,t=window.location.href){return o(t).get(e)},e.getQueryParams=o,e.getTargetFromTree=function e(t,n,o="id",r=((e,t)=>e===t)){if(!Array.isArray(t))return null;for(const i of t){if(r(i[o],n))return i;if(i.children){const t=e(i.children,n,o,r);if(t)return t}}return null},e.hasClass=t,e.isBoolean=function(e){return"boolean"==typeof e},e.isDate=function(e){return"[object Date]"===n(e)},e.isDefined=function(e){return void 0!==e},e.isFunction=function(e){return"function"==typeof e},e.isHttpOrHttps=function(e){return e.startsWith("http://")||e.startsWith("https://")},e.isMobile=function(){return!r()},e.isNull=function(e){return"[object Null]"===n(e)},e.isNumber=function(e){return"number"==typeof e},e.isObject=function(e){return"[object Object]"===n(e)},e.isPc=r,e.isRegExp=function(e){return"[object RegExp]"===n(e)},e.isString=function(e){return"string"==typeof e},e.isSupportFontFamily=function(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const n=100,o=100,r=document.createElement("canvas"),i=r.getContext("2d");function c(e){i.clearRect(0,0,n,o),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const r=i.getImageData(0,0,n,o).data;return[].slice.call(r).filter((e=>0!==e))}return r.width=n,r.height=o,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",c(t).join("")!==c(e).join("")},e.isUndefined=function(e){return"[object Undefined]"===n(e)},e.moveArrayItem=function(e,t,n){if(t<0||t>=e.length||n<0||n>=e.length)throw new Error("Invalid index");const o=e.splice(t,1)[0];e.splice(n,0,o)},e.removeArrayItem=function(e,t){const n=e.indexOf(t);n>=0&&e.splice(n,1)},e.removeClass=function(e,n){t(e,n)&&e.classList.remove(n)},e.saveFile=function(e,t,n="application/octet-stream;charset=utf-8"){const o=new Blob([e],{type:n}),r=document.createElement("a");r.href=URL.createObjectURL(o),r.download=t,r.click(),URL.revokeObjectURL(r.href)},e.setCookie=function(e,t,n){const o=new Date;o.setTime((new Date).getTime()+n);const r=encodeURIComponent(t)+(n?`; expires=${o.toUTCString()}`:"");document.cookie=`${e}=${r}`},e.swapArrayItem=function(e,t,n){if(t<0||t>=e.length||n<0||n>=e.length)throw new Error("Invalid index");[e[t],e[n]]=[e[n],e[t]]},e.throttle=i,e.toString=n,e.tree2Array=function e(t,n="children"){return t.reduce(((t,o)=>{const r=o[n];return t.concat(o,e(r??[],n))}),[])},e.uniq=function(e){return Array.from(new Set(e))},e.uniqueBy=function(e,t){return e.reduce(((e,n)=>(-1===e.findIndex((e=>t(e,n)))&&e.push(n),e)),[])}}));
