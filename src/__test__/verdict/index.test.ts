import { MOBILE_UA, PC_UA } from '@/constant'
import {
    isBoolean,
    isDate,
    isDefined,
    isFunction,
    isHttpOrHttps,
    isMobile,
    isNull,
    isNumber,
    isPc,
    isRegExp,
    isString,
    isSupportFontFamily,
    isUndefined,
} from '@/index'

describe('isSupportFontFamily', () => {
    test('determine whether the browser supports a certain font', () => {
        // @ts-ignore
        expect(() => isSupportFontFamily(null)).toThrow(/argument is not a string/)
    })
    test('return the correct result', () => {
        expect(isSupportFontFamily('Microsoft Yahei')).toEqual(expect.any(Boolean))
    })
})

describe('isHttpOrHttps', () => {
    test('should return true for URLs starting with http://', () => {
        const url = 'http://example.com'
        expect(isHttpOrHttps(url)).toBeTruthy()
    })
    test('should return true for URLs starting with https://', () => {
        const url = 'https://example.com'
        expect(isHttpOrHttps(url)).toBeTruthy()
    })
    test('should return false for URLs not starting with http:// or https://', () => {
        const url = 'ftp://example:com/'
        expect(isHttpOrHttps(url)).toBeFalsy()
    })
})

describe('isPc', () => {
    test('should return true for pc browsers', () => {
        Object.defineProperty(window.navigator, 'userAgent', { value: PC_UA, writable: true })
        expect(isPc()).toBeTruthy()
    })
    test('should return false for mobile browsers', () => {
        Object.defineProperty(window.navigator, 'userAgent', { value: MOBILE_UA, writable: true })
        expect(isPc()).toBeFalsy()
    })
})

describe('isMobile', () => {
    test('should return true for pc browsers', () => {
        Object.defineProperty(window.navigator, 'userAgent', { value: PC_UA, writable: true })
        expect(isMobile()).toBeFalsy()
    })
    test('should return false for mobile browsers', () => {
        Object.defineProperty(window.navigator, 'userAgent', { value: MOBILE_UA, writable: true })
        expect(isMobile()).toBeTruthy()
    })
})

describe('isDefined', () => {
    test('should return true for defined values', () => {
        expect(isDefined(5)).toBeTruthy()
        expect(isDefined('Hello')).toBeTruthy()
        expect(isDefined([])).toBeTruthy()
        expect(isDefined({})).toBeTruthy()
        expect(isDefined(null)).toBeTruthy()
        expect(isDefined(false)).toBeTruthy()
    })
    test('should return false for undefined values', () => {
        expect(isDefined(undefined)).toBeFalsy()
        expect(isDefined()).toBeFalsy()
    })
})

describe('isUndefined', () => {
    test('should return true for undefined values', () => {
        expect(isUndefined(undefined)).toBeTruthy()
        // @ts-ignore
        expect(isUndefined()).toBeTruthy()
    })
    test('should return false for defined values', () => {
        expect(isUndefined(5)).toBeFalsy()
        expect(isUndefined('Hello')).toBeFalsy()
        expect(isUndefined([])).toBeFalsy()
        expect(isUndefined({})).toBeFalsy()
        expect(isUndefined(null)).toBeFalsy()
        expect(isUndefined(false)).toBeFalsy()
    })
})

describe('isBoolean', () => {
    test('should return true for boolean values', () => {
        expect(isBoolean(true)).toBeTruthy()
        expect(isBoolean(false)).toBeTruthy()
    })
    test('should return false for non-boolean values', () => {
        expect(isBoolean(5)).toBeFalsy()
        expect(isBoolean('Hello')).toBeFalsy()
        expect(isBoolean([])).toBeFalsy()
        expect(isBoolean({})).toBeFalsy()
        expect(isBoolean(null)).toBeFalsy()
        expect(isBoolean(undefined)).toBeFalsy()
    })
})

describe('isFunction', () => {
    test('should return true for function values', () => {
        expect(isFunction(() => {})).toBeTruthy()
        expect(isFunction(function () {})).toBeTruthy()
        expect(isFunction(async () => {})).toBeTruthy()
        expect(isFunction(class {})).toBeTruthy()
    })
    test('should return false for non-function values', () => {
        expect(isFunction(5)).toBeFalsy()
        expect(isFunction('Hello')).toBeFalsy()
        expect(isFunction([])).toBeFalsy()
        expect(isFunction({})).toBeFalsy()
        expect(isFunction(null)).toBeFalsy()
        expect(isFunction(undefined)).toBeFalsy()
    })
})

describe('isNumber', () => {
    test('should return true for number values', () => {
        expect(isNumber(5)).toBeTruthy()
        expect(isNumber(3.14)).toBeTruthy()
        expect(isNumber(NaN)).toBeTruthy()
    })
    test('should return false for non-number values', () => {
        expect(isNumber('Hello')).toBeFalsy()
        expect(isNumber([])).toBeFalsy()
        expect(isNumber({})).toBeFalsy()
        expect(isNumber(null)).toBeFalsy()
        expect(isNumber(undefined)).toBeFalsy()
    })
})

describe('isString', () => {
    test('should return true for string values', () => {
        expect(isString('Hello')).toBeTruthy()
        expect(isString('123')).toBeTruthy()
        expect(isString(`Template literal`)).toBeTruthy()
    })
    test('should return false for non-string values', () => {
        expect(isString(5)).toBeFalsy()
        expect(isString([])).toBeFalsy()
        expect(isString({})).toBeFalsy()
        expect(isString(null)).toBeFalsy()
        expect(isString(undefined)).toBeFalsy()
    })
})

describe('isNull', () => {
    test('should return true for null value', () => {
        expect(isNull(null)).toBeTruthy()
    })
    test('should return false for non-null values', () => {
        expect(isNull(5)).toBeFalsy()
        expect(isNull('Hello')).toBeFalsy()
        expect(isNull([])).toBeFalsy()
        expect(isNull({})).toBeFalsy()
        expect(isNull(undefined)).toBeFalsy()
    })
})

describe('isRegExp', () => {
    test('should return true for RegExp value', () => {
        expect(isRegExp(/abc/)).toBeTruthy()
        expect(isRegExp(new RegExp('abc'))).toBeTruthy()
    })
    test('should return false for non-RegExp values', () => {
        expect(isRegExp(5)).toBeFalsy()
        expect(isRegExp('Hello')).toBeFalsy()
        expect(isRegExp([])).toBeFalsy()
        expect(isRegExp({})).toBeFalsy()
        expect(isRegExp(null)).toBeFalsy()
        expect(isRegExp(undefined)).toBeFalsy()
    })
})

describe('isDate', () => {
    test('should return true for Date value', () => {
        expect(isDate(new Date())).toBeTruthy()
    })
    test('should return false for non-Date values', () => {
        expect(isDate(5)).toBeFalsy()
        expect(isDate('Hello')).toBeFalsy()
        expect(isDate([])).toBeFalsy()
        expect(isDate({})).toBeFalsy()
        expect(isDate(null)).toBeFalsy()
        expect(isDate(undefined)).toBeFalsy()
    })
})
