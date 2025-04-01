import Example from "./example"

describe('Test', () => {
  it('should do something', () => {
    const example = new Example
    expect(example).toBeInstanceOf(Object)
  })
})