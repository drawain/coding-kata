import Example from "./fizzbuzz"

describe('Test', () => {
    it('should do something', () => {
        const example = new Example
        expect(example).toBeInstanceOf(Object)
    })
})