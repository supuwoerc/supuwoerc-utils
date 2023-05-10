/**
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns URLSearchParams对象
 */
export function getQueryParams(url = window.location.href) {
    const urlObject = new URL(url)
    const params = new URLSearchParams(urlObject.search)
    return params
}

/**
 * @param param 需要获取的参数名字符串
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns 参数值
 */
export function getQueryParam(param: string, url = window.location.href) {
    const params = getQueryParams(url)
    return params.get(param)
}
