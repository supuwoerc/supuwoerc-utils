import { getQueryParam, getQueryParams, generateUUID, getCookie, setCookie, clearAllCookie, uniq, uniqueBy } from '@/index'
import { UniqueByTestDomain } from './types'

beforeAll(() => {
    delete (window as any).location
    const url = 'https://jest.mock.cn?param1=val1&param2=val2&param3=val3_1&param3=val3_2'
    window.location = new URL(url) as unknown as Location
})

describe('getQueryParams', () => {
    test('an error was thrown when the wrong url was passed', () => {
        expect(() => getQueryParams('')).toThrow(/Invalid URL/)
    })
})

describe('getQueryParam', () => {
    test('an error was thrown when the wrong url was passed', () => {
        expect(() => getQueryParam('', '')).toThrow(/Invalid URL/)
    })
    test('returns null if the query parameter does not exist', () => {
        expect(getQueryParam('nonexistence')).toBeNull()
    })
    test('returns the correct query parameter value', () => {
        expect(getQueryParam('param1')).toBe('val1')
        expect(getQueryParam('param2')).toBe('val2')
        expect(getQueryParam('param3')).toBe('val3_1')
    })
})

describe('generateUUID', () => {
    test('generates a unique string', () => {
        const uuid1 = generateUUID()
        const uuid2 = generateUUID()
        expect(generateUUID()).toEqual(expect.any(String))
        expect(uuid1 === uuid2).toBeFalsy()
    })
})

describe('getCookie', () => {
    beforeEach(() => {
        clearAllCookie()
        document.cookie = 'expectCookie=abc'
        document.cookie = 'anotherCookie=zxc'
    })
    afterEach(() => {
        clearAllCookie()
    })
    test('should return the cookie value if the cookie exists', () => {
        expect(getCookie('expectCookie')).toBe('abc')
        expect(getCookie('anotherCookie')).toBe('zxc')
    })
    test('should return null if the cookie does not exist', () => {
        expect(getCookie('nonExistentCookie')).toBeNull()
    })
})

describe('setCookie', () => {
    beforeEach(() => {
        clearAllCookie()
        jest.clearAllTimers()
    })
    afterEach(() => {
        clearAllCookie()
        jest.clearAllTimers()
    })
    test('should set the cookie with the specified name, value, and expiration', () => {
        const cookieName = 'myCookie'
        const cookieValue = 'cookieValue'
        const expirationMilliseconds = 24 * 60 * 60 * 1000 // 24 hours
        setCookie(cookieName, cookieValue, expirationMilliseconds)
        expect(document.cookie).toBe(`${cookieName}=${encodeURIComponent(cookieValue)}`)
    })
    test('should not set the cookie if expirationMilliseconds < 0', () => {
        const cookieName = 'myCookie'
        const cookieValue = 'cookieValue'
        const expirationMilliseconds = -1
        setCookie(cookieName, cookieValue, expirationMilliseconds)
        expect(document.cookie).toBe('')
    })
})

describe('clearAllCookie', () => {
    beforeEach(() => {
        clearAllCookie()
    })
    test('should clear all cookie', () => {
        const cookieName = 'myCookie'
        const cookieValue = 'cookieValue'
        const expirationMilliseconds = 60 * 60
        setCookie(cookieName, cookieValue, expirationMilliseconds)
        expect(document.cookie).toBe('myCookie=cookieValue')
        clearAllCookie()
        expect(document.cookie).toBe('')
    })
})

describe('uniq', () => {
    test('a result with no duplicate elements should be returned', () => {
        const source = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 10, 10, 8]
        expect(uniq(source)).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10, 8])
    })
    test('param should not be affected', () => {
        const source = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 10, 10, 8]
        expect(uniq(source)).toEqual([1, 2, 3, 4, 5, 6, 7, 9, 10, 8])
        expect(source).toEqual([1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 9, 10, 10, 8])
    })
})

describe('uniqueBy', () => {
    const obj1 = {
        name: 'supuwoerc',
        age: 25,
    }
    const obj2 = {
        name: 'moss',
        age: 18,
    }
    const obj3 = {
        name: 'supuwoerc',
        age: 28,
    }
    const sourceArray: Array<UniqueByTestDomain> = [obj1, obj2, obj3, obj1]
    const copyArray: Array<UniqueByTestDomain> = [obj1, obj2, obj3, obj1]
    const func = (a: UniqueByTestDomain, b: UniqueByTestDomain) => {
        return a.name === b.name && a.age === b.age
    }
    test('a result with no duplicate elements should be returned', () => {
        expect(uniqueBy(sourceArray, func)).toHaveLength(3)
        expect(uniqueBy(sourceArray, func)).toEqual(
            expect.arrayContaining([
                // https://stackoverflow.com/questions/45692456/whats-the-difference-between-tomatchobject-and-objectcontaining
                expect.objectContaining(obj1),
                expect.objectContaining(obj2),
                expect.objectContaining(obj3),
            ])
        )
    })
    test('param should not be affected', () => {
        uniqueBy(sourceArray, func)
        expect(sourceArray).toEqual(copyArray)
    })
})
