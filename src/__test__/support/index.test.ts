import { isSupportFontFamily } from '@/index'

describe('isSupportFontFamily', () => {
    test('determine whether the browser supports a certain font', () => {
        // @ts-ignore
        expect(() => isSupportFontFamily(null)).toThrow(/argument is not a string/)
    })
    test('return the correct result', () => {
        expect(isSupportFontFamily('Microsoft Yahei')).toEqual(expect.any(Boolean))
    })
})
