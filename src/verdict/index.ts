import { toString } from '@/core'

/**
 * @description 检查 URL 是否以 "http://" 或 "https://" 开头
 * @category Boolean
 * @param url 需要检查的url字符串
 * @returns 是否是http或https开始的字符串
 */
export function isHttpOrHttps(url: string) {
    return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * @description 判断当前浏览器是否是pc端
 * @category Boolean
 * @returns 当前浏览器是否是pc端
 */
export function isPc(): boolean {
    const { userAgent } = navigator
    const result = /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    return !result
}

/**
 * @description 判断当前浏览器是否是移动端
 * @category Boolean
 * @returns 当前浏览器是否是移动端
 */
export function isMobile(): boolean {
    return !isPc()
}

/**
 * @description 判断当前浏览器是否支持某一个字体
 * @category Boolean
 * @param family 浏览器是否支持某种字体
 * @returns 是否支持
 */
export function isSupportFontFamily(family: string) {
    if (typeof family !== 'string') {
        throw new Error('argument is not a string')
    }
    const h = 'Arial'
    if (family.toLowerCase() === h.toLowerCase()) {
        return true
    }
    const e = 'a'
    const d = 100
    const a = 100
    const i = 100
    const c = document.createElement('canvas')
    const b = c.getContext('2d')! //eslint-disable-line
    c.width = a
    c.height = i
    b.textAlign = 'center'
    b.fillStyle = 'black'
    b.textBaseline = 'middle'
    function g(j: string) {
        b.clearRect(0, 0, a, i)
        b.font = `${d}px ${j}, ${h}`
        b.fillText(e, a / 2, i / 2)
        const k = b.getImageData(0, 0, a, i).data
        return [].slice.call(k).filter((l) => {
            return l !== 0
        })
    }
    return g(h).join('') !== g(family).join('')
}

/**
 * @description 判断一个值不是undefined
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值不是undefined返回true,否则为false
 */
export function isDefined<T = any>(val?: T) {
    return typeof val !== 'undefined'
}

/**
 * @description 判断一个值是undefined
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是undefine返回true,否则为false
 */
export function isUndefined(val: any) {
    return toString(val) === '[object Undefined]'
}

/**
 * @description 判断一个值是不是boolean
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是boolean返回true,否则为false
 */
export function isBoolean(val: any) {
    return typeof val === 'boolean'
}

/**
 * @description 判断一个值是不是function
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是function返回true,否则为false
 */
export function isFunction(val: any) {
    return typeof val === 'function'
}

/**
 * @description 判断一个值是不是number
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是number返回true,否则为false
 */
export function isNumber(val: any) {
    return typeof val === 'number'
}

/**
 * @description 判断一个值是不是string
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是string返回true,否则为false
 */
export function isString(val: any) {
    return typeof val === 'string'
}

/**
 * @description 判断一个值是不是Object
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是object返回true,否则为false
 */
export function isObject(val: any) {
    return toString(val) === '[object Object]'
}

/**
 * @description 判断一个值是不是null
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是null返回true,否则为false
 */
export function isNull(val: any) {
    return toString(val) === '[object Null]'
}

/**
 * @description 判断一个值是不是RegExp
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是RegExp返回true,否则为false
 */
export function isRegExp(val: any) {
    return toString(val) === '[object RegExp]'
}

/**
 * @description 判断一个值是不是Date
 * @catogory Boolean
 * @param val 原始值
 * @returns 当值是Date返回true,否则为false
 */
export function isDate(val: any) {
    return toString(val) === '[object Date]'
}
