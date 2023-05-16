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

/**
 * @description 生成uuid
 * @returns 唯一的uuid
 */
export function generateUUID() {
    if (typeof crypto === 'object') {
        if (typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID()
        }
        if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
            const callback = (c: string) => {
                const num = Number(c)
                return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16) //eslint-disable-line
            }
            return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, callback)
        }
    }
    let timestamp = new Date().getTime()
    let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let random = Math.random() * 16
        if (timestamp > 0) {
            random = (timestamp + random) % 16 | 0 //eslint-disable-line
            timestamp = Math.floor(timestamp / 16)
        } else {
            random = (perforNow + random) % 16 | 0 //eslint-disable-line
            perforNow = Math.floor(perforNow / 16)
        }
        return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16) //eslint-disable-line
    })
}
