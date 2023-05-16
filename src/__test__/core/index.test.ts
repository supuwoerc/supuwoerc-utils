import { getQueryParam, getQueryParams, generateUUID } from '@/index'

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
