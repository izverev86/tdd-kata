const Add = require('./index')

test('when empty value should return 0', () => {
    expect(Add('')).toBe(0)
})

test('when value is 1 return 1', () => {
    expect(Add('1')).toBe(1)
})

test('when value is 2 return 2', () => {
    expect(Add('2')).toBe(2)
})

test('should sum two number splitted by comma', () => {
    expect(Add('2,2')).toBe(4)
})

test('should sum two numbers with new line delimeter', () => {
    expect(Add('1\n2')).toBe(3)
})

test('should sum two numbers with custom delimetrs', () => {
    expect(Add('//;\n1;2')).toBe(3)
})

test('should throw errors for negative values', () => {
    expect(() => Add('-1')).toThrow('Negative numbers not allowed')
})