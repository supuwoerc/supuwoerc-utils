import { getElementSelector, hasClass, addClass, removeClass } from '@/index'

describe('getElementSelector', () => {
    test('should throw an error if the parameter is not an Element instance', () => {
        expect(() => {
            // @ts-ignore
            getElementSelector(null)
        }).toThrow(Error)
    })
    test('should return a valid CSS selector for the given element', () => {
        expect(getElementSelector(document.body)).toBe('html > body')
    })
    test('should return a valid CSS selector for the given element', () => {
        const div = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        div.appendChild(p1)
        div.appendChild(p2)
        div.id = 'test'
        document.body.appendChild(p3)
        document.body.appendChild(div)
        expect(getElementSelector(p1)).toBe('div#test > p:nth-of-type(1)')
        expect(getElementSelector(p2)).toBe('div#test > p:nth-of-type(2)')
        expect(getElementSelector(div)).toBe('div#test')
        expect(getElementSelector(p3)).toBe('html > body > p')
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

describe('addClass', () => {
    let element: HTMLDivElement
    beforeEach(() => {
        element = document.createElement('div')
        element.className = 'source-class'
    })
    test('the className can be added successfully', () => {
        addClass(element, 'expect-class')
        expect(hasClass(element, 'expect-class')).toBeTruthy()
    })
    test('classnames are not added repeatedly', () => {
        addClass(element, 'expect-class')
        addClass(element, 'expect-class')
        addClass(element, 'expect-class')
        expect(hasClass(element, 'expect-class')).toBeTruthy()
        expect(element.className).toBe('source-class expect-class')
    })
})

describe('removeClass', () => {
    let element: HTMLDivElement
    beforeEach(() => {
        element = document.createElement('div')
        element.className = 'source-class'
    })
    test('the className can be removed successfully', () => {
        removeClass(element, 'source-class')
        expect(hasClass(element, 'source-class')).toBeFalsy()
    })
    test('a nonexistent className has no effect', () => {
        removeClass(element, 'nonexistent-class')
        expect(hasClass(element, 'source-class')).toBeTruthy()
        expect(element.className).toBe('source-class')
    })
})
