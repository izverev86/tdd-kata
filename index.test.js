const Add = require('./index')

test('when empty value should return 0', () => {
    expect(Add('')).toBe(0)
})

test('when value is 1 return 1', () => {
    expect(Add('1')).toBe(1)
})