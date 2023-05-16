import { getElementSelector, hasClass } from '@/index'

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

describe('hasClass', () => {
    let element: HTMLDivElement
    beforeEach(() => {
        element = document.createElement('div')
        element.className = 'expect-class another-class'
    })
    test('should return true if element has the specified class', () => {
        expect(hasClass(element, 'expect-class')).toBeTruthy()
        expect(hasClass(element, 'another-class')).toBeTruthy()
    })
    test('should return false if element does not have the specified class', () => {
        expect(hasClass(element, 'unexist-class')).toBeFalsy()
    })
})
