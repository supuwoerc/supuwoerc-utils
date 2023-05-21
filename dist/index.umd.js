!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(((e="undefined"!=typeof globalThis?globalThis:e||self).template=e.template||{},e.template.min=e.template.min||{},e.template.min.js={}))}(this,(function(e){"use strict";function t(e,t){return e.classList.contains(t)}function n(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}function o(){const{userAgent:e}=navigator;return!/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}function r(e,t,n){var o,r=n||{},i=r.noTrailing,c=void 0!==i&&i,a=r.noLeading,s=void 0!==a&&a,u=r.debounceMode,f=void 0===u?void 0:u,l=!1,d=0;function p(){o&&clearTimeout(o)}function m(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=this,u=Date.now()-d;function m(){d=Date.now(),t.apply(a,r)}function h(){o=void 0}l||(s||!f||o||m(),p(),void 0===f&&u>e?s?(d=Date.now(),c||(o=setTimeout(f?h:m,e))):m():!0!==c&&(o=setTimeout(f?h:m,void 0===f?e-u:e)))}return m.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;p(),l=!n},m}e.addClass=function(e,n){t(e,n)||e.classList.add(n)},e.array2Tree=function(e,t="children",n="id",o="pid",r=""){const i=new Map,c=[];return e.forEach((e=>{const a=e[n],s=e[o],u={...e,[t]:i.get(a)?.[t]??[]};if(i.set(a,u),s!==r&&s){i.get(s)||i.set(s,{[t]:[]});const e=i.get(s);e&&e[t].push(u)}else c.push(u)})),c},e.clearAllCookie=function(){const e=document.cookie.split(";");for(let t=0;t<e.length;t+=1){const n=e[t],o=n.indexOf("="),r=o>-1?n.substr(0,o):n;document.cookie=`${r}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}},e.debounce=function(e,t,n){var o=(n||{}).atBegin;return r(e,t,{debounceMode:!1!==(void 0!==o&&o)})},e.generateUUID=function(){if("object"==typeof crypto){if("function"==typeof crypto.randomUUID)return crypto.randomUUID();if("function"==typeof crypto.getRandomValues&&"function"==typeof Uint8Array){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>{const t=Number(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}}let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(n=>{let o=16*Math.random();return e>0?(o=(e+o)%16|0,e=Math.floor(e/16)):(o=(t+o)%16|0,t=Math.floor(t/16)),("x"===n?o:3&o|8).toString(16)}))},e.getArrayItem=function(e,t){const{length:n}=e;let o=t;if(!(n<=0))return t<0&&(o+=n),e[o]},e.getCookie=function(e){const t=document.cookie.split(";").find((t=>{const[n]=t.split("=");return n.trim()===e}));if(t){const[,e]=t.split("=");return decodeURIComponent(e.trim())}return null},e.getElementSelector=function(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const n=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,n.unshift(e);break}{let n=t,o=1;for(n=n.previousElementSibling;n;)n.nodeName.toLowerCase()===e&&(o+=1),n=n.previousElementSibling;const r=t.nodeName.toLowerCase(),i=t.previousElementSibling?.nodeName.toLowerCase()===r,c=t.nextElementSibling?.nodeName.toLowerCase()===r,a=i||c;t!==document.body&&a&&(e=`${e}:nth-of-type(${o})`)}n.unshift(e),t=t.parentNode}return n.join(" > ")},e.getParents=function(e,t,n="id",o="children",r=((e,t)=>e===t)){const i=[],c=e=>{if(r(e[n],t))return i.push(e),!0;const a=e[o];if(a&&Array.isArray(a))for(const t of a)if(c(t))return i.push(e),!0;return!1};for(const t of e)if(c(t))return i.reverse();return[]},e.getQueryParam=function(e,t=window.location.href){return n(t).get(e)},e.getQueryParams=n,e.hasClass=t,e.isHttpOrHttps=function(e){return e.startsWith("http://")||e.startsWith("https://")},e.isMobile=function(){return!o()},e.isPc=o,e.isSupportFontFamily=function(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const n=100,o=100,r=document.createElement("canvas"),i=r.getContext("2d");function c(e){i.clearRect(0,0,n,o),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const r=i.getImageData(0,0,n,o).data;return[].slice.call(r).filter((e=>0!==e))}return r.width=n,r.height=o,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",c(t).join("")!==c(e).join("")},e.moveArrayItem=function(e,t,n){if(t<0||t>=e.length||n<0||n>=e.length)throw new Error("Invalid index");const o=e.splice(t,1)[0];e.splice(n,0,o)},e.removeArrayItem=function(e,t){const n=e.indexOf(t);n>=0&&e.splice(n,1)},e.removeClass=function(e,n){t(e,n)&&e.classList.remove(n)},e.saveFile=function(e,t,n="application/octet-stream;charset=utf-8"){const o=new Blob([e],{type:n}),r=document.createElement("a");r.href=URL.createObjectURL(o),r.download=t,r.click(),URL.revokeObjectURL(r.href)},e.setCookie=function(e,t,n){const o=new Date;o.setTime((new Date).getTime()+n);const r=encodeURIComponent(t)+(n?`; expires=${o.toUTCString()}`:"");document.cookie=`${e}=${r}`},e.swapArrayItem=function(e,t,n){if(t<0||t>=e.length||n<0||n>=e.length)throw new Error("Invalid index");[e[t],e[n]]=[e[n],e[t]]},e.throttle=r,e.tree2Array=function e(t,n="children"){return t.reduce(((t,o)=>{const r=o[n];return t.concat(o,e(r??[],n))}),[])},e.uniq=function(e){return Array.from(new Set(e))},e.uniqueBy=function(e,t){return e.reduce(((e,n)=>(-1===e.findIndex((e=>t(e,n)))&&e.push(n),e)),[])}}));
