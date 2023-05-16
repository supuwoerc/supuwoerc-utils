/**
 * @param family =浏览器是否支持某种字体
 * @returns 是否支持
 */
export function isSupportFontFamily(family: string) {
    if (typeof family !== 'string') {
        throw new Error('argument is not a string')
    }
    const h = 'Arial'
    if (family.toLowerCase() === h.toLowerCase()) {
        return true
    }
    const e = 'a'
    const d = 100
    const a = 100
    const i = 100
    const c = document.createElement('canvas')
    const b = c.getContext('2d')! //eslint-disable-line
    c.width = a
    c.height = i
    b.textAlign = 'center'
    b.fillStyle = 'black'
    b.textBaseline = 'middle'
    function g(j: string) {
        b.clearRect(0, 0, a, i)
        b.font = `${d}px ${j}, ${h}`
        b.fillText(e, a / 2, i / 2)
        const k = b.getImageData(0, 0, a, i).data
        return [].slice.call(k).filter((l) => {
            return l !== 0
        })
    }
    return g(h).join('') !== g(family).join('')
}
