/**
 * @description 获取DOM元素的选择器
 * @category CSS
 * @category String
 * @param node 需要获取selector的元素
 * @returns 元素的css-selector
 */
declare function getElementSelector(node: Element): string;
/**
 * @description 判断DOM元素是否存在className
 * @category CSS
 * @category Boolean
 * @param element DOM元素
 * @param className class类名
 * @returns 元素是否存在该class
 */
declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * @description 为DOM元素添加className
 * @category CSS
 * @param element DOM元素
 * @param className 需要添加的className
 */
declare function addClass(element: HTMLElement, className: string): void;
/**
 * @description 为DOM元素移除className
 * @category CSS
 * @param element DOM元素
 * @param className 需要移除的className
 */
declare function removeClass(element: HTMLElement, className: string): void;

interface TreeNode {
    id: keyof any;
    pid?: keyof any;
    [key: keyof any]: any;
}
type Tree<T = TreeNode, K extends string = 'children'> = T & {
    [P in K]?: Tree<T, K>[];
};
type EqualFunc<T> = (a: T, b: T) => boolean;

interface StorageOptions {
    prefix?: string | string[];
}

/**
 * @description 数据toString
 * @param v 原始数据
 * @returns 转为string的结果
 */
declare function toString(v: any): string;
/**
 * @description 获取url中的参数对象
 * @category URl
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns URLSearchParams对象
 */
declare function getQueryParams(url?: string): URLSearchParams;
/**
 * @description 获取url中的参数值
 * @category URl
 * @param param 需要获取的参数名字符串
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns 参数值
 */
declare function getQueryParam(param: string, url?: string): string | null;
/**
 * @description 生成uuid
 * @category String
 * @returns 唯一的uuid
 */
declare function generateUUID(): string;
/**
 * @description 根据键获取cookie值
 * @category Cookie
 * @param name 需要获取的cookie键名
 * @returns cookie值
 */
declare function getCookie(name: string): string | null;
/**
 * @description 设置cookie
 * @category Cookie
 * @param name 需要设置的cookie的键名
 * @param value 需要设置的cookie的值
 * @param expirationMilliseconds 过期时间,单位:毫秒
 */
declare function setCookie(name: string, value: string, expirationMilliseconds: number): void;
/**
 * @description 清理全部cookie键值对
 * @category Cookie
 */
declare function clearAllCookie(): void;
/**
 * @description 对数组去重
 * @category Array
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
declare function uniq<T>(array: Array<T>): T[];
/**
 * @description 对数组去重
 * @category Array
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
declare function uniqueBy<T>(array: Array<T>, equalFunc: EqualFunc<T>): T[];
/**
 * @description 根据索引获取数组中元素
 * @category Array
 * @param array 数组
 * @param index 索引,可以是负数
 * @returns 数组对应索引上的元素
 */
declare function getArrayItem<T>(array: Array<T>, index: number): T | undefined;
/**
 * @description 移动数组元素
 * @category Array
 * @param arr 原始数组
 * @param from 需要移动元素的索引
 * @param to 需要移动到的位置
 */
declare function moveArrayItem<T>(arr: T[], from: number, to: number): void;
/**
 * @description 交换数组中两个元素的位置
 * @category Array
 * @param arr 原始数组
 * @param index1 元素1的索引
 * @param index2 元素2的索引
 */
declare function swapArrayItem<T>(arr: T[], index1: number, index2: number): void;
/**
 * @description 从数组中删除指定元素,存在重复元素将删除第一个
 * @category Array
 * @param array 原始数组
 * @param value 需要删除的元素
 * @returns
 */
declare function removeArrayItem<T>(array: T[], value: T): void;
/**
 * @description 保存文件
 * @category File
 * @category Blob
 * @param data 文件Blob数据
 * @param filename 文件名称,如果需要从header.content-disposition获取,开发者需要自行处理
 * @param type 文件的MIME类型,参考:https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
declare function saveFile(data: BlobPart, filename: string, type?: string): void;
/**
 * @description 根据原始字符串生成固定前缀的新字符串
 * @category String
 * @param prefix 需要的前缀
 * @param str 原始字符串
 * @returns 确认前缀的新字符串
 */
declare function ensurePrefix(prefix: string, str: string): string;
/**
 * @description 根据原始字符串生成固定后缀的新字符串
 * @category String
 * @param suffix 需要的后缀
 * @param str 原始字符串
 * @returns 确认后缀的新字符串
 */
declare function ensureSuffix(suffix: string, str: string): string;
declare class Storage<Mapping extends Record<keyof unknown, unknown>> {
    private storage;
    private prefix;
    constructor(options?: StorageOptions);
    set<Key extends keyof Mapping, Value = Mapping[Key]>(key: Key, value: Value): void;
    get<Key extends keyof Mapping, Value = Mapping[Key]>(key: Key): Value | null;
    remove<Key extends keyof Mapping>(key: Key): void;
    clear(): void;
    private getKey;
    static stringify(v: unknown): string;
    static parse<T>(v: string): T;
}

/**
 * @description 检查 URL 是否以 "http://" 或 "https://" 开头
 * @category Boolean
 * @param url 需要检查的url字符串
 * @returns 是否是http或https开始的字符串
 */
declare function isHttpOrHttps(url: string): boolean;
/**
 * @description 判断当前浏览器是否是pc端
 * @category Boolean
 * @returns 当前浏览器是否是pc端
 */
declare function isPc(): boolean;
/**
 * @description 判断当前浏览器是否是移动端
 * @category Boolean
 * @returns 当前浏览器是否是移动端
 */
declare function isMobile(): boolean;
/**
 * @description 判断当前浏览器是否支持某一个字体
 * @category Boolean
 * @param family 浏览器是否支持某种字体
 * @returns 是否支持
 */
declare function isSupportFontFamily(family: string): boolean;
/**
 * @description 判断一个值不是undefined
 * @category Boolean
 * @param val 原始值
 * @returns 当值不是undefined返回true,否则为false
 */
declare function isDefined<T = any>(val?: T): boolean;
/**
 * @description 判断一个值是undefined
 * @category Boolean
 * @param val 原始值
 * @returns 当值是undefine返回true,否则为false
 */
declare function isUndefined(val: any): boolean;
/**
 * @description 判断一个值是不是boolean
 * @category Boolean
 * @param val 原始值
 * @returns 当值是boolean返回true,否则为false
 */
declare function isBoolean(val: any): boolean;
/**
 * @description 判断一个值是不是function
 * @category Boolean
 * @param val 原始值
 * @returns 当值是function返回true,否则为false
 */
declare function isFunction(val: any): boolean;
/**
 * @description 判断一个值是不是number
 * @category Boolean
 * @param val 原始值
 * @returns 当值是number返回true,否则为false
 */
declare function isNumber(val: any): boolean;
/**
 * @description 判断一个值是不是string
 * @category Boolean
 * @param val 原始值
 * @returns 当值是string返回true,否则为false
 */
declare function isString(val: any): boolean;
/**
 * @description 判断一个值是不是Object
 * @category Boolean
 * @param val 原始值
 * @returns 当值是object返回true,否则为false
 */
declare function isObject(val: any): boolean;
/**
 * @description 判断一个值是不是null
 * @category Boolean
 * @param val 原始值
 * @returns 当值是null返回true,否则为false
 */
declare function isNull(val: any): boolean;
/**
 * @description 判断一个值是不是RegExp
 * @category Boolean
 * @param val 原始值
 * @returns 当值是RegExp返回true,否则为false
 */
declare function isRegExp(val: any): boolean;
/**
 * @description 判断一个值是不是Date
 * @category Boolean
 * @param val 原始值
 * @returns 当值是Date返回true,否则为false
 */
declare function isDate(val: any): boolean;

// Type definitions for throttle-debounce 5.0
// Project: https://github.com/niksy/throttle-debounce
// Definitions by: Marek Buchar <https://github.com/czbuchi>, Frank Li <https://github.com/franklixuefei>, Thomas Oddsund <https://github.com/oddsund>, Seiya <https://github.com/seiyab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface CancelOptions {
    upcomingOnly?: boolean;
}

interface Cancel {
    cancel: (options?: CancelOptions) => void;
}

interface NoReturn<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): void;
}

interface ThrottleOptions {
    noTrailing?: boolean;
    noLeading?: boolean;
    debounceMode?: boolean;
}

interface DebounceOptions {
    atBegin?: boolean;
}

type throttle<T extends (...args: any[]) => any> = NoReturn<T> & Cancel;

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * throttled-function is executed.
 *
 * @param options
 * An object to configure options.
 *
 * @param options.noTrailing
 * Optional, defaults to false. If noTrailing is true, callback will only execute
 * every `delay` milliseconds while the throttled-function is being called. If
 * noTrailing is false or unspecified, callback will be executed one final time
 * after the last throttled-function call. (After the throttled-function has not
 * been called for `delay` milliseconds, the internal counter is reset)
 *
 * @param options.noLeading
 * Optional, defaults to false. If noLeading is false, the first throttled-function
 * call will execute callback immediately. If noLeading is true, the first the
 * callback execution will be skipped. It should be noted that callback will never
 * executed if both noLeading = true and noTrailing = true.
 *
 * @param options.debounceMode If `debounceMode` is true (at begin), schedule
 * `callback` to execute after `delay` ms. If `debounceMode` is false (at end),
 * schedule `callback` to execute after `delay` ms.
 *
 * @return
 * A new, throttled, function.
 */
declare function throttle<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: ThrottleOptions,
): throttle<T>;
type debounce<T extends (...args: any[]) => any> = NoReturn<T> & Cancel;

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param delay
 * A zero-or-greater delay in milliseconds. For event callbacks, values around
 * 100 or 250 (or even higher) are most useful.
 *
 * @param callback
 * A function to be executed after delay milliseconds. The `this` context and
 * all arguments are passed through, as-is, to `callback` when the
 * debounced-function is executed.
 *
 * @param options
 * An object to configure options.
 *
 * @param options.atBegin
 * If atBegin is false or unspecified, callback will only be executed `delay`
 * milliseconds after the last debounced-function call. If atBegin is true,
 * callback will be executed only at the first debounced-function call. (After
 * the throttled-function has not been called for `delay` milliseconds, the
 * internal counter is reset).
 *
 * @return
 * A new, debounced function.
 */
declare function debounce<T extends (...args: any[]) => any>(
    delay: number,
    callback: T,
    options?: DebounceOptions,
): debounce<T>;

/**
 * @description 将数组组装为树结构
 * @category Tree
 * @category Array
 * @param data 原始数据数组
 * @param childrenKey 组装为树状数据时的子节点的键名
 * @param idKey 数据的唯一标识,作为父子节点的关联依据
 * @param pidKey 数据的父节点idKey的值
 * @param rootPid 根节点的pid
 * @returns 树状数据数组
 */
declare function array2Tree<T extends Record<keyof any, any> = TreeNode>(data: T[], childrenKey?: string, idKey?: keyof T, pidKey?: keyof T, rootPid?: string): Tree<T>[];
/**
 * @description 将树状数据平铺
 * @category Tree
 * @category Array
 * @param tree 需要平铺的树状数据
 * @param childrenKey 树状数据的子节点的键名
 * @returns 平铺后的数据
 */
declare function tree2Array<T = TreeNode>(tree: Tree<T>[], childrenKey?: keyof T): T[];
/**
 * @description 根据唯一值查找树状数据中父节点到自身完整路径
 * @category Tree
 * @category Array
 * @param tree 树状数据
 * @param target 目标值
 * @param idKey 目标值键名,默认为id
 * @param childrenKey 子节点键名,默认为children
 * @param equalFunc 判断相等的方法,默认比较方法使用'==='
 * @returns 树状数据根节点到自身的完整路径
 */
declare function getParents<T = Partial<TreeNode>>(tree: T[], target: any, idKey?: keyof T, childrenKey?: keyof T, equalFunc?: EqualFunc<any>): T[];
/**
 * @description 从树状数据查找目标值对象
 * @category Tree
 * @category Array
 * @param tree 树状数据
 * @param target 目标值
 * @param idKey 目标值键名,默认为id
 * @param equalFunc 判断相等的方法,默认比较方法使用'==='
 * @returns
 */
declare function getTargetFromTree<T = Partial<TreeNode>>(tree: T[], target: any, idKey?: keyof T, equalFunc?: EqualFunc<any>, childrenKey?: keyof T): T | null;

export { Storage, addClass, array2Tree, clearAllCookie, debounce, ensurePrefix, ensureSuffix, generateUUID, getArrayItem, getCookie, getElementSelector, getParents, getQueryParam, getQueryParams, getTargetFromTree, hasClass, isBoolean, isDate, isDefined, isFunction, isHttpOrHttps, isMobile, isNull, isNumber, isObject, isPc, isRegExp, isString, isSupportFontFamily, isUndefined, moveArrayItem, removeArrayItem, removeClass, saveFile, setCookie, swapArrayItem, throttle, toString, tree2Array, uniq, uniqueBy };
