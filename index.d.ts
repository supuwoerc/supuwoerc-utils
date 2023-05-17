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
 * @description 判断当前浏览器是否支持某一个字体
 * @param family 浏览器是否支持某种字体
 * @returns 是否支持
 */
declare function isSupportFontFamily(family: string): boolean;

export { addClass, generateUUID, getCookie, getElementSelector, getQueryParam, getQueryParams, hasClass, isSupportFontFamily, removeClass };
