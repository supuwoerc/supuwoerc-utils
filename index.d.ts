/**
 * @param node 需要获取selector的元素
 * @returns 元素的css-selector
 */
declare function getElementSelector(node: Element): string;
/**
 *
 * @param element DOM元素
 * @param className class类名
 * @returns 元素是否存在该class
 */
declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 *
 * @param element DOM元素
 * @param className 需要添加的className
 */
declare function addClass(element: HTMLElement, className: string): void;
/**
 *
 * @param element DOM元素
 * @param className 需要移除的className
 */
declare function removeClass(element: HTMLElement, className: string): void;

/**
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns URLSearchParams对象
 */
declare function getQueryParams(url?: string): URLSearchParams;
/**
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
 * @param family =浏览器是否支持某种字体
 * @returns 是否支持
 */
declare function isSupportFontFamily(family: string): boolean;

export { addClass, generateUUID, getElementSelector, getQueryParam, getQueryParams, hasClass, isSupportFontFamily, removeClass };
