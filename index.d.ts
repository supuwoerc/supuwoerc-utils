/**
 * @description 获取DOM元素的选择器
 * @param node 需要获取selector的元素
 * @returns 元素的css-selector
 */
declare function getElementSelector(node: Element): string;
/**
 * @description 判断DOM元素是否存在className
 * @param element DOM元素
 * @param className class类名
 * @returns 元素是否存在该class
 */
declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * @description 为DOM元素添加className
 * @param element DOM元素
 * @param className 需要添加的className
 */
declare function addClass(element: HTMLElement, className: string): void;
/**
 * @description 为DOM元素移除className
 * @param element DOM元素
 * @param className 需要移除的className
 */
declare function removeClass(element: HTMLElement, className: string): void;

/**
 * @description 获取url中的参数对象
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns URLSearchParams对象
 */
declare function getQueryParams(url?: string): URLSearchParams;
/**
 * @description 获取url中的参数值
 * @param param 需要获取的参数名字符串
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns 参数值
 */
declare function getQueryParam(param: string, url?: string): string | null;
/**
 * @description 生成uuid
 * @returns 唯一的uuid
 */
declare function generateUUID(): string;
/**
 * @description 根据键获取cookie值
 * @param name 需要获取的cookie键名
 * @returns cookie值
 */
declare function getCookie(name: string): string | null;
/**
 * @description 设置cookie
 * @param name 需要设置的cookie的键名
 * @param value 需要设置的cookie的值
 * @param expirationMilliseconds 过期时间,单位:毫秒
 */
declare function setCookie(name: string, value: string, expirationMilliseconds: number): void;
/**
 * @description 清理全部cookie键值对
 */
declare function clearAllCookie(): void;
/**
 * @description 对数组去重
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
declare function uniq<T>(array: Array<T>): T[];
/**
 * @description 对数组去重
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
declare function uniqueBy<T>(array: Array<T>, equalFunc: (a: T, b: T) => boolean): T[];

/**
 * @description 判断当前浏览器是否支持某一个字体
 * @param family 浏览器是否支持某种字体
 * @returns 是否支持
 */
declare function isSupportFontFamily(family: string): boolean;

/**
 * @description 检查 URL 是否以 "http://" 或 "https://" 开头
 * @param url 需要检查的url字符串
 * @returns 是否是http或https开始的字符串
 */
declare function isHttpOrHttps(url: string): boolean;
/**
 * @description 判断当前浏览器是否是pc端
 * @returns 当前浏览器是否是pc端
 */
declare function isPc(): boolean;
/**
 * @description 判断当前浏览器是否是pc端
 * @returns 当前浏览器是否是pc端
 */
declare function isMobile(): boolean;

export { addClass, clearAllCookie, generateUUID, getCookie, getElementSelector, getQueryParam, getQueryParams, hasClass, isHttpOrHttps, isMobile, isPc, isSupportFontFamily, removeClass, setCookie, uniq, uniqueBy };
