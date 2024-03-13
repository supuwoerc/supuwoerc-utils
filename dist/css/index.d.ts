/**
 * @description 获取DOM元素的选择器
 * @category CSS
 * @category String
 * @param node 需要获取selector的元素
 * @returns 元素的css-selector
 */
export declare function getElementSelector(node: Element): string;
/**
 * @description 判断DOM元素是否存在className
 * @category CSS
 * @category Boolean
 * @param element DOM元素
 * @param className class类名
 * @returns 元素是否存在该class
 */
export declare function hasClass(element: HTMLElement, className: string): boolean;
/**
 * @description 为DOM元素添加className
 * @category CSS
 * @param element DOM元素
 * @param className 需要添加的className
 */
export declare function addClass(element: HTMLElement, className: string): void;
/**
 * @description 为DOM元素移除className
 * @category CSS
 * @param element DOM元素
 * @param className 需要移除的className
 */
export declare function removeClass(element: HTMLElement, className: string): void;
