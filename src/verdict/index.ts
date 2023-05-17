/**
 * @description 检查 URL 是否以 "http://" 或 "https://" 开头
 * @param url 需要检查的url字符串
 * @returns 是否是http或https开始的字符串
 */
export function isHttpOrHttps(url: string) {
    return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * @description 判断当前浏览器是否是pc端
 * @returns 当前浏览器是否是pc端
 */
export function isPc(): boolean {
    const { userAgent } = navigator
    const result = /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    return !result
}

/**
 * @description 判断当前浏览器是否是pc端
 * @returns 当前浏览器是否是pc端
 */
export function isMobile(): boolean {
    return !isPc()
}
