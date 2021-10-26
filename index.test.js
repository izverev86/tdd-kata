const Add = require('./index')

test('when empty value should return 0', () => {
    expect(Add('')).toBe(0)
})