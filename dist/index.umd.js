(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.template = global.template || {}, global.template.min = global.template.min || {}, global.template.min.js = {})));
})(this, (function (exports) { 'use strict';

    function getElementSelector(node) {
      if (!(node instanceof Element)) {
        throw new Error("The type of parameter node is incorrect");
      }
      let el = node;
      const path = [];
      while (el && el.nodeType === Node.ELEMENT_NODE) {
        let selector = el.nodeName.toLowerCase();
        if (el.id) {
          selector = `${selector}#${el.id}`;
          path.unshift(selector);
          break;
        } else {
          let sib = el;
          let nth = 1;
          sib = sib.previousElementSibling;
          while (sib) {
            if (sib.nodeName.toLowerCase() === selector) {
              nth += 1;
            }
            sib = sib.previousElementSibling;
          }
          selector = `${selector}:nth-of-type(${nth})`;
        }
        path.unshift(selector);
        el = el.parentNode;
      }
      return path.join(" > ");
    }

    exports.getElementSelector = getElementSelector;

}));
