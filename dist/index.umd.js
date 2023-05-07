(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.template = global.template || {}, global.template.min = global.template.min || {}, global.template.min.js = {})));
})(this, (function (exports) { 'use strict';

    function getCSSPath(node) {
      const parts = [];
      let wrapNode = node;
      while (wrapNode.parentElement) {
        let str = wrapNode.tagName.toLowerCase();
        if (wrapNode.id) {
          str += `#${wrapNode.id}`;
          parts.unshift(str);
          break;
        }
        const siblingsArr = Array.prototype.slice.call(wrapNode.parentElement.childNodes);
        const ind = siblingsArr.filter((n) => n.attributes).indexOf(wrapNode);
        parts.unshift(`${str}:nth-child(${ind + 1})`);
        wrapNode = wrapNode.parentElement;
      }
      return parts.join(" > ");
    }

    exports.getCSSPath = getCSSPath;

}));
