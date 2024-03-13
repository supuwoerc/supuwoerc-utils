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
      const elNodeName = el.nodeName.toLowerCase();
      const hasPreSibling = el.previousElementSibling?.nodeName.toLowerCase() === elNodeName;
      const hasNextSibling = el.nextElementSibling?.nodeName.toLowerCase() === elNodeName;
      const hasSibling = hasPreSibling || hasNextSibling;
      if (el !== document.body && hasSibling) {
        selector = `${selector}:nth-of-type(${nth})`;
      }
    }
    path.unshift(selector);
    el = el.parentNode;
  }
  return path.join(" > ");
}
function hasClass(element, className) {
  return element.classList.contains(className);
}
function addClass(element, className) {
  if (!hasClass(element, className)) {
    element.classList.add(className);
  }
}
function removeClass(element, className) {
  if (hasClass(element, className)) {
    element.classList.remove(className);
  }
}

function toString(v) {
  return Object.prototype.toString.call(v);
}
function getQueryParams(url = window.location.href) {
  const urlObject = new URL(url);
  const params = new URLSearchParams(urlObject.search);
  return params;
}
function getQueryParam(param, url = window.location.href) {
  const params = getQueryParams(url);
  return params.get(param);
}
function generateUUID() {
  if (typeof crypto === "object") {
    if (typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    if (typeof crypto.getRandomValues === "function" && typeof Uint8Array === "function") {
      const callback = (c) => {
        const num = Number(c);
        return (num ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> num / 4).toString(16);
      };
      return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, callback);
    }
  }
  let timestamp = (/* @__PURE__ */ new Date()).getTime();
  let perforNow = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let random = Math.random() * 16;
    if (timestamp > 0) {
      random = (timestamp + random) % 16 | 0;
      timestamp = Math.floor(timestamp / 16);
    } else {
      random = (perforNow + random) % 16 | 0;
      perforNow = Math.floor(perforNow / 16);
    }
    return (c === "x" ? random : random & 3 | 8).toString(16);
  });
}
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");
  const foundCookie = cookies.find((cookie) => {
    const [cookieName] = cookie.split("=");
    const trimmedCookieName = cookieName.trim();
    return trimmedCookieName === name;
  });
  if (foundCookie) {
    const [, cookieValue] = foundCookie.split("=");
    return decodeURIComponent(cookieValue.trim());
  }
  return null;
}
function setCookie(name, value, expirationMilliseconds) {
  const expirationDate = /* @__PURE__ */ new Date();
  expirationDate.setTime((/* @__PURE__ */ new Date()).getTime() + expirationMilliseconds);
  const cookieValue = encodeURIComponent(value) + (expirationMilliseconds ? `; expires=${expirationDate.toUTCString()}` : "");
  document.cookie = `${name}=${cookieValue}`;
}
function clearAllCookie() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
function uniq(array) {
  return Array.from(new Set(array));
}
function uniqueBy(array, equalFunc) {
  return array.reduce((prev, cur) => {
    const index = prev.findIndex((item) => equalFunc(item, cur));
    if (index === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}
function getArrayItem(array, index) {
  const { length } = array;
  let targetIndex = index;
  if (length <= 0) {
    return void 0;
  }
  if (index < 0) {
    targetIndex += length;
  }
  return array[targetIndex];
}
function moveArrayItem(arr, from, to) {
  if (from < 0 || from >= arr.length || to < 0 || to >= arr.length) {
    throw new Error("Invalid index");
  }
  const item = arr.splice(from, 1)[0];
  arr.splice(to, 0, item);
}
function swapArrayItem(arr, index1, index2) {
  if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
    throw new Error("Invalid index");
  }
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
function removeArrayItem(array, value) {
  const index = array.indexOf(value);
  if (index >= 0) {
    array.splice(index, 1);
  }
}
function saveFile(data, filename, type = "application/octet-stream;charset=utf-8") {
  const blob = new Blob([data], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}
function ensurePrefix(prefix, str) {
  if (!str.startsWith(prefix)) {
    return prefix + str;
  }
  return str;
}
function ensureSuffix(suffix, str) {
  if (!str.endsWith(suffix)) {
    return str + suffix;
  }
  return str;
}
class Storage {
  storage;
  prefix = "";
  constructor(options) {
    if (options?.prefix) {
      this.prefix = options.prefix;
    }
    this.storage = window.localStorage;
  }
  set(key, value) {
    const realKey = this.getKey(key);
    const stringifyValue = Storage.stringify(value);
    this.storage.setItem(realKey, stringifyValue);
  }
  get(key) {
    const realKey = this.getKey(key);
    const stringifyValue = this.storage.getItem(realKey);
    if (!stringifyValue) {
      return null;
    }
    return Storage.parse(stringifyValue);
  }
  remove(key) {
    this.storage.removeItem(this.getKey(key));
  }
  clear() {
    this.storage.clear();
  }
  getKey(key) {
    if (this.prefix) {
      const tempPrefix = [].concat(this.prefix);
      return [...tempPrefix, key].join("_");
    }
    return key;
  }
  static stringify(v) {
    return JSON.stringify(v);
  }
  static parse(v) {
    return JSON.parse(v);
  }
}

function isHttpOrHttps(url) {
  return url.startsWith("http://") || url.startsWith("https://");
}
function isPc() {
  const { userAgent } = navigator;
  const result = /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  return !result;
}
function isMobile() {
  return !isPc();
}
function isSupportFontFamily(family) {
  if (typeof family !== "string") {
    throw new Error("argument is not a string");
  }
  const h = "Arial";
  if (family.toLowerCase() === h.toLowerCase()) {
    return true;
  }
  const e = "a";
  const d = 100;
  const a = 100;
  const i = 100;
  const c = document.createElement("canvas");
  const b = c.getContext("2d");
  c.width = a;
  c.height = i;
  b.textAlign = "center";
  b.fillStyle = "black";
  b.textBaseline = "middle";
  function g(j) {
    b.clearRect(0, 0, a, i);
    b.font = `${d}px ${j}, ${h}`;
    b.fillText(e, a / 2, i / 2);
    const k = b.getImageData(0, 0, a, i).data;
    return [].slice.call(k).filter((l) => {
      return l !== 0;
    });
  }
  return g(h).join("") !== g(family).join("");
}
function isDefined(val) {
  return typeof val !== "undefined";
}
function isUndefined(val) {
  return toString(val) === "[object Undefined]";
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isFunction(val) {
  return typeof val === "function";
}
function isNumber(val) {
  return typeof val === "number";
}
function isString(val) {
  return typeof val === "string";
}
function isObject(val) {
  return toString(val) === "[object Object]";
}
function isNull(val) {
  return toString(val) === "[object Null]";
}
function isRegExp(val) {
  return toString(val) === "[object RegExp]";
}
function isDate(val) {
  return toString(val) === "[object Date]";
}

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

function array2Tree(data, childrenKey = "children", idKey = "id", pidKey = "pid", rootPid = "") {
  const map = /* @__PURE__ */ new Map();
  const res = [];
  data.forEach((item) => {
    const id = item[idKey];
    const pid = item[pidKey];
    const wrapItem = { ...item, [childrenKey]: map.get(id)?.[childrenKey] ?? [] };
    map.set(id, wrapItem);
    if (pid === rootPid || !pid) {
      res.push(wrapItem);
    } else {
      if (!map.get(pid)) {
        map.set(pid, { [childrenKey]: [] });
      }
      const parent = map.get(pid);
      if (parent) {
        parent[childrenKey].push(wrapItem);
      }
    }
  });
  return res;
}
function tree2Array(tree, childrenKey = "children") {
  return tree.reduce((prev, cur) => {
    const children = cur[childrenKey];
    return prev.concat(cur, tree2Array(children ?? [], childrenKey));
  }, []);
}
function getParents(tree, target, idKey = "id", childrenKey = "children", equalFunc = (val, tarVal) => val === tarVal) {
  const stack = [];
  const dfs = (node) => {
    if (equalFunc(node[idKey], target)) {
      stack.push(node);
      return true;
    }
    const children = node[childrenKey];
    if (children && Array.isArray(children)) {
      for (const child of children) {
        if (dfs(child)) {
          stack.push(node);
          return true;
        }
      }
    }
    return false;
  };
  for (const node of tree) {
    if (dfs(node)) {
      return stack.reverse();
    }
  }
  return [];
}
function getTargetFromTree(tree, target, idKey = "id", equalFunc = (a, b) => a === b, childrenKey = "children") {
  if (!Array.isArray(tree)) {
    return null;
  }
  for (const item of tree) {
    if (equalFunc(item[idKey], target)) {
      return item;
    }
    if (item[childrenKey]) {
      const value = getTargetFromTree(item[childrenKey], target, idKey, equalFunc);
      if (value) {
        return value;
      }
    }
  }
  return null;
}

export { Storage, addClass, array2Tree, clearAllCookie, debounce, ensurePrefix, ensureSuffix, generateUUID, getArrayItem, getCookie, getElementSelector, getParents, getQueryParam, getQueryParams, getTargetFromTree, hasClass, isBoolean, isDate, isDefined, isFunction, isHttpOrHttps, isMobile, isNull, isNumber, isObject, isPc, isRegExp, isString, isSupportFontFamily, isUndefined, moveArrayItem, removeArrayItem, removeClass, saveFile, setCookie, swapArrayItem, throttle, toString, tree2Array, uniq, uniqueBy };
