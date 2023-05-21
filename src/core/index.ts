import { EqualFunc } from '@/tree/types'

/**
 * @description 数据toString
 * @param v 原始数据
 * @returns 转为string的结果
 */
export function toString(v: any) {
    return Object.prototype.toString.call(v)
}

/**
 * @description 获取url中的参数对象
 * @category URl
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
 * @category URl
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
 * @category String
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
 * @category Cookie
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
 * @category Cookie
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
 * @category Cookie
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
 * @category Array
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
export function uniq<T>(array: Array<T>) {
    return Array.from(new Set(array))
}

/**
 * @description 对数组去重
 * @category Array
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
export function uniqueBy<T>(array: Array<T>, equalFunc: EqualFunc<T>) {
    return array.reduce((prev, cur) => {
        const index = prev.findIndex((item) => equalFunc(item, cur))
        if (index === -1) {
            prev.push(cur)
        }
        return prev
    }, [] as T[])
}

/**
 * @description 根据索引获取数组中元素
 * @category Array
 * @param array 数组
 * @param index 索引,可以是负数
 * @returns 数组对应索引上的元素
 */
export function getArrayItem<T>(array: Array<T>, index: number) {
    const { length } = array
    let targetIndex = index
    if (length <= 0) {
        return undefined
    }
    if (index < 0) {
        targetIndex += length
    }
    return array[targetIndex]
}
/**
 * @description 移动数组元素
 * @category Array
 * @param arr 原始数组
 * @param from 需要移动元素的索引
 * @param to 需要移动到的位置
 */
export function moveArrayItem<T>(arr: T[], from: number, to: number): void {
    if (from < 0 || from >= arr.length || to < 0 || to >= arr.length) {
        throw new Error('Invalid index')
    }
    const item = arr.splice(from, 1)[0] //eslint-disable-line
    arr.splice(to, 0, item) //eslint-disable-line
}

/**
 * @description 交换数组中两个元素的位置
 * @category Array
 * @param arr 原始数组
 * @param index1 元素1的索引
 * @param index2 元素2的索引
 */
export function swapArrayItem<T>(arr: T[], index1: number, index2: number): void {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error('Invalid index')
    }
    ;[arr[index1], arr[index2]] = [arr[index2], arr[index1]] //eslint-disable-line
}

/**
 * @description 从数组中删除指定元素,存在重复元素将删除第一个
 * @category Array
 * @param array 原始数组
 * @param value 需要删除的元素
 * @returns
 */
export function removeArrayItem<T>(array: T[], value: T) {
    const index = array.indexOf(value)
    if (index >= 0) {
        array.splice(index, 1) //eslint-disable-line
    }
}

/**
 * @description 保存文件
 * @category File
 * @category Blob
 * @param data 文件Blob数据
 * @param filename 文件名称,如果需要从header.content-disposition获取,开发者需要自行处理
 * @param type 文件的MIME类型,参考:https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
export function saveFile(data: BlobPart, filename: string, type = 'application/octet-stream;charset=utf-8') {
    const blob = new Blob([data], { type })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    URL.revokeObjectURL(link.href)
}

/**
 * @description 根据原始字符串生成固定前缀的新字符串
 * @category String
 * @param prefix 需要的前缀
 * @param str 原始字符串
 * @returns 确认前缀的新字符串
 */
export function ensurePrefix(prefix: string, str: string) {
    if (!str.startsWith(prefix)) {
        return prefix + str
    }
    return str
}

/**
 * @description 根据原始字符串生成固定后缀的新字符串
 * @category String
 * @param suffix 需要的后缀
 * @param str 原始字符串
 * @returns 确认后缀的新字符串
 */
export function ensureSuffix(suffix: string, str: string) {
    if (!str.endsWith(suffix)) {
        return str + suffix
    }
    return str
}
