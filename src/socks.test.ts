import Example from "./socks"

describe('Test', () => {
    it('should do something', () => {
        const example = new Example
        expect(example).toBeInstanceOf(Object)
    })
})