/**
 * @description 获取DOM元素的选择器
 * @category CSS
 * @category String
 * @param node 需要获取selector的元素
 * @returns 元素的css-selector
 */
export function getElementSelector(node: Element) {
    if (!(node instanceof Element)) {
        throw new Error('The type of parameter node is incorrect')
    }
    let el = node
    const path: string[] = []
    while (el && el.nodeType === Node.ELEMENT_NODE) {
        let selector = el.nodeName.toLowerCase()
        if (el.id) {
            selector = `${selector}#${el.id}`
            path.unshift(selector)
            break
        } else {
            let sib: Element | null = el
            let nth = 1
            sib = sib.previousElementSibling
            while (sib) {
                if (sib.nodeName.toLowerCase() === selector) {
                    nth += 1
                }
                sib = sib.previousElementSibling
            }
            selector = `${selector}:nth-of-type(${nth})`
        }
        path.unshift(selector)
        el = el.parentNode as Element
    }
    return path.join(' > ')
}

/**
 * @description 判断DOM元素是否存在className
 * @category CSS
 * @category Boolean
 * @param element DOM元素
 * @param className class类名
 * @returns 元素是否存在该class
 */
export function hasClass(element: HTMLElement, className: string): boolean {
    return element.classList.contains(className)
}

/**
 * @description 为DOM元素添加className
 * @category CSS
 * @param element DOM元素
 * @param className 需要添加的className
 */
export function addClass(element: HTMLElement, className: string) {
    if (!hasClass(element, className)) {
        element.classList.add(className)
    }
}

/**
 * @description 为DOM元素移除className
 * @category CSS
 * @param element DOM元素
 * @param className 需要移除的className
 */
export function removeClass(element: HTMLElement, className: string) {
    if (hasClass(element, className)) {
        element.classList.remove(className)
    }
}
