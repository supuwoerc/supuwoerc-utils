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
declare function uniqueBy<T>(array: Array<T>, equalFunc: (a: T, b: T) => boolean): T[];
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
 * @description 判断当前浏览器是否是pc端
 * @category Boolean
 * @returns 当前浏览器是否是pc端
 */
declare function isMobile(): boolean;
/**
 * @description 判断当前浏览器是否支持某一个字体
 * @category Boolean
 * @param family 浏览器是否支持某种字体
 * @returns 是否支持
 */
declare function isSupportFontFamily(family: string): boolean;

export { addClass, clearAllCookie, generateUUID, getArrayItem, getCookie, getElementSelector, getQueryParam, getQueryParams, hasClass, isHttpOrHttps, isMobile, isPc, isSupportFontFamily, moveArrayItem, removeClass, setCookie, swapArrayItem, uniq, uniqueBy };
