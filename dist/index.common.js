"use strict";function e(e,t){return e.classList.contains(t)}function t(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}exports.addClass=function(t,o){e(t,o)||t.classList.add(o)},exports.clearAllCookie=function(){const e=document.cookie.split(";");for(let t=0;t<e.length;t+=1){const o=e[t],n=o.indexOf("="),r=n>-1?o.substr(0,n):o;document.cookie=`${r}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}},exports.generateUUID=function(){if("object"==typeof crypto){if("function"==typeof crypto.randomUUID)return crypto.randomUUID();if("function"==typeof crypto.getRandomValues&&"function"==typeof Uint8Array){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>{const t=Number(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}}let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(o=>{let n=16*Math.random();return e>0?(n=(e+n)%16|0,e=Math.floor(e/16)):(n=(t+n)%16|0,t=Math.floor(t/16)),("x"===o?n:3&n|8).toString(16)}))},exports.getCookie=function(e){const t=document.cookie.split(";").find((t=>{const[o]=t.split("=");return o.trim()===e}));if(t){const[,e]=t.split("=");return decodeURIComponent(e.trim())}return null},exports.getElementSelector=function(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const o=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,o.unshift(e);break}{let o=t,n=1;for(o=o.previousElementSibling;o;)o.nodeName.toLowerCase()===e&&(n+=1),o=o.previousElementSibling;e=`${e}:nth-of-type(${n})`}o.unshift(e),t=t.parentNode}return o.join(" > ")},exports.getQueryParam=function(e,o=window.location.href){return t(o).get(e)},exports.getQueryParams=t,exports.hasClass=e,exports.isSupportFontFamily=function(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const o=100,n=100,r=document.createElement("canvas"),i=r.getContext("2d");function s(e){i.clearRect(0,0,o,n),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const r=i.getImageData(0,0,o,n).data;return[].slice.call(r).filter((e=>0!==e))}return r.width=o,r.height=n,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",s(t).join("")!==s(e).join("")},exports.removeClass=function(t,o){e(t,o)&&t.classList.remove(o)},exports.setCookie=function(e,t,o){const n=new Date;n.setTime((new Date).getTime()+o);const r=encodeURIComponent(t)+(o?`; expires=${n.toUTCString()}`:"");document.cookie=`${e}=${r}`};