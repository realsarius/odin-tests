const app = require('./app');

test('reversed the string: elizabeth', () => {
  expect(app.reverseString('elizabeth')).toBe('htebazile');
});

test('capitalize the first letter function: berkan', () => {
  expect(app.capitalize('berkan')).toBe('Berkan');
});

test('calculator test: add, subtract, multiply and divide 24 and 6', () => {
  expect(app.calculator.add(24, 6)).toBe(30);
  expect(app.calculator.subtract(24, 6)).toBe(18);
  expect(app.calculator.multiply(24, 6)).toBe(144);
  expect(app.calculator.divide(24, 6)).toBe(4);
});
