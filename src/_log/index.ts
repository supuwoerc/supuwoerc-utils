import { LOG_PREFIX } from '../constant'
/**
 * @param data 需要输出的信息
 */
export function log(...data: any[]) {
    /* eslint-disable  */
    console.log(`${LOG_PREFIX}:`, data)
}
/**
 * @param data 需要输出的警告信息
 */
export function warn(...data: any[]) {
    /* eslint-disable  */
    console.warn(`${LOG_PREFIX}:`, data)
}
/**
 * @param data 需要输出的错误信息
 */
export function error(...data: any[]) {
    /* eslint-disable  */
    console.error(`${LOG_PREFIX}:`, data)
}
