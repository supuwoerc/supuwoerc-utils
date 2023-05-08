import { getElementSelector } from '@/css/index'

describe('getElementSelector', () => {
    test('should throw an error if the parameter is not an Element instance', () => {
        expect(() => {
            // @ts-ignore
            getElementSelector(null)
        }).toThrow(Error)
    })
    test('should return a valid CSS selector for the given element', () => {
        const div = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        div.appendChild(p1)
        div.appendChild(p2)
        div.id = 'test'
        expect(getElementSelector(p1)).toBe('div#test > p:nth-of-type(1)')
        expect(getElementSelector(p2)).toBe('div#test > p:nth-of-type(2)')
        expect(getElementSelector(div)).toBe('div#test')
    })
})
