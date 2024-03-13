import { EqualFunc, StorageOptions } from './types';
/**
 * @description 数据toString
 * @param v 原始数据
 * @returns 转为string的结果
 */
export declare function toString(v: any): string;
/**
 * @description 获取url中的参数对象
 * @category URl
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns URLSearchParams对象
 */
export declare function getQueryParams(url?: string): URLSearchParams;
/**
 * @description 获取url中的参数值
 * @category URl
 * @param param 需要获取的参数名字符串
 * @param url 需要获取参数的url字符串,默认为window.location.href
 * @returns 参数值
 */
export declare function getQueryParam(param: string, url?: string): string | null;
/**
 * @description 生成uuid
 * @category String
 * @returns 唯一的uuid
 */
export declare function generateUUID(): string;
/**
 * @description 根据键获取cookie值
 * @category Cookie
 * @param name 需要获取的cookie键名
 * @returns cookie值
 */
export declare function getCookie(name: string): string | null;
/**
 * @description 设置cookie
 * @category Cookie
 * @param name 需要设置的cookie的键名
 * @param value 需要设置的cookie的值
 * @param expirationMilliseconds 过期时间,单位:毫秒
 */
export declare function setCookie(name: string, value: string, expirationMilliseconds: number): void;
/**
 * @description 清理全部cookie键值对
 * @category Cookie
 */
export declare function clearAllCookie(): void;
/**
 * @description 对数组去重
 * @category Array
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
export declare function uniq<T>(array: Array<T>): T[];
/**
 * @description 对数组去重
 * @category Array
 * @param array 需要去重的数组
 * @returns 去重后的数组
 */
export declare function uniqueBy<T>(array: Array<T>, equalFunc: EqualFunc<T>): T[];
/**
 * @description 根据索引获取数组中元素
 * @category Array
 * @param array 数组
 * @param index 索引,可以是负数
 * @returns 数组对应索引上的元素
 */
export declare function getArrayItem<T>(array: Array<T>, index: number): T | undefined;
/**
 * @description 移动数组元素
 * @category Array
 * @param arr 原始数组
 * @param from 需要移动元素的索引
 * @param to 需要移动到的位置
 */
export declare function moveArrayItem<T>(arr: T[], from: number, to: number): void;
/**
 * @description 交换数组中两个元素的位置
 * @category Array
 * @param arr 原始数组
 * @param index1 元素1的索引
 * @param index2 元素2的索引
 */
export declare function swapArrayItem<T>(arr: T[], index1: number, index2: number): void;
/**
 * @description 从数组中删除指定元素,存在重复元素将删除第一个
 * @category Array
 * @param array 原始数组
 * @param value 需要删除的元素
 * @returns
 */
export declare function removeArrayItem<T>(array: T[], value: T): void;
/**
 * @description 保存文件
 * @category File
 * @category Blob
 * @param data 文件Blob数据
 * @param filename 文件名称,如果需要从header.content-disposition获取,开发者需要自行处理
 * @param type 文件的MIME类型,参考:https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
export declare function saveFile(data: BlobPart, filename: string, type?: string): void;
/**
 * @description 根据原始字符串生成固定前缀的新字符串
 * @category String
 * @param prefix 需要的前缀
 * @param str 原始字符串
 * @returns 确认前缀的新字符串
 */
export declare function ensurePrefix(prefix: string, str: string): string;
/**
 * @description 根据原始字符串生成固定后缀的新字符串
 * @category String
 * @param suffix 需要的后缀
 * @param str 原始字符串
 * @returns 确认后缀的新字符串
 */
export declare function ensureSuffix(suffix: string, str: string): string;
export declare class Storage<Mapping extends Record<keyof unknown, unknown>> {
    private storage;
    private prefix;
    constructor(options?: StorageOptions);
    set<Key extends keyof Mapping, Value = Mapping[Key]>(key: Key, value: Value): void;
    get<Key extends keyof Mapping, Value = Mapping[Key]>(key: Key): Value | null;
    remove<Key extends keyof Mapping>(key: Key): void;
    clear(): void;
    private getKey;
    static stringify(v: unknown): string;
    static parse<T>(v: string): T;
}
