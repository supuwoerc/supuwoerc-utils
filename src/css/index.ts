/**
 * @param node 需要获取selector的元素
 * @returns 元素的css-selector
 */
export function getCSSSelector(node:Element) {
    if (!(node instanceof Element)) {
        throw new Error("The type of parameter node is incorrect")
    }
    let el  = node
    const path = [];
    while (el && el.nodeType === Node.ELEMENT_NODE) {
        let selector = el.nodeName.toLowerCase();
        if (el.id) {
            selector += '#' + el.id;
            path.unshift(selector);
            break;
        } else {
            let sib:Element|null = el, nth:number = 1;
            while (sib = sib.previousElementSibling) {
                if (sib.nodeName.toLowerCase() == selector)
                nth++;
            }
            if (nth != 1){
                selector += ":nth-of-type("+nth+")";
            }
        }
        path.unshift(selector);
        el = el.parentNode as (Element);
    }
    return path.join(" > ");
}
