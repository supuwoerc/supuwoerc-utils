'use strict';

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
