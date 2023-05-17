/**
 * @description 获取url中的参数对象
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns URLSearchParams对象
 */
export function getQueryParams(url = window.location.href) {
    const urlObject = new URL(url)
    const params = new URLSearchParams(urlObject.search)
    return params
}

/**
 * @description 获取url中的参数值
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

/**
 * @description 根据键获取cookie值
 * @param name 需要获取的cookie键名
 * @returns cookie值
 */
export function getCookie(name: string): string | null {
    const cookieString = document.cookie
    const cookies = cookieString.split(';')
    const foundCookie = cookies.find((cookie) => {
        const [cookieName] = cookie.split('=')
        const trimmedCookieName = cookieName.trim()
        return trimmedCookieName === name
    })
    if (foundCookie) {
        const [, cookieValue] = foundCookie.split('=')
        return decodeURIComponent(cookieValue.trim())
    }
    return null
}
/**
 * @description 设置cookie
 * @param name 需要设置的cookie的键名
 * @param value 需要设置的cookie的值
 * @param expirationMilliseconds 过期时间,单位:毫秒
 */
export function setCookie(name: string, value: string, expirationMilliseconds: number) {
    const expirationDate = new Date()
    expirationDate.setTime(new Date().getTime() + expirationMilliseconds)
    const cookieValue = encodeURIComponent(value) + (expirationMilliseconds ? `; expires=${expirationDate.toUTCString()}` : '')
    document.cookie = `${name}=${cookieValue}`
}

/**
 * @description 清理全部cookie键值对
 */
export function clearAllCookie() {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
}

/**
 * @description 对数组去重
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
export function uniq<T>(array: Array<T>) {
    return Array.from(new Set(array))
}

/**
 * @description 对数组去重
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
export function uniqueBy<T>(array: Array<T>, equalFunc: (a: T, b: T) => boolean) {
    return array.reduce((prev, cur) => {
        const index = prev.findIndex((item) => equalFunc(item, cur))
        if (index === -1) {
            prev.push(cur)
        }
        return prev
    }, [] as T[])
}
