import { MOBILE_UA, PC_UA } from '@/constant'
import { isHttpOrHttps, isMobile, isPc } from '@/index'

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
