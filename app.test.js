const app = require('./app');

test('reversed the string: elizabeth', () => {
  expect(app.reverseString('elizabeth')).toBe('htebazile');
});

test('capitalize the first letter function: nolan', () => {
  expect(app.capitalize('nolan')).toBe('Nolan');
});

test('calculator test: add, subtract, multiply and divide 24 and 6', () => {
  const x = 24;
  const y = 6;
  expect(app.calculator.add(x, y)).toBe(30);
  expect(app.calculator.subtract(x, y)).toBe(18);
  expect(app.calculator.multiply(x, y)).toBe(144);
  expect(app.calculator.divide(x, y)).toBe(4);
});

test('ceaser cipher as usual', () => {
  expect(app.caesarCipher('elizabeth!', 1)).toBe('fmjabcfui!'.toUpperCase());
  expect(app.caesarCipher('red wheelbarrow bbq', 6)).toBe(
    'xkj cnkkrhgxxuc hhw'.toUpperCase()
  );
  expect(
    app.caesarCipher(
      'gurcreevacntrfjvyyuryclbhsvaqlbhepnyyvatohgqbagorqhcrqphgqbjagurjbbqfgurlorreqbf',
      13
    )
  ).toBe(
    'theperrinpageswillhelpyoufindyourcallingbutdontbedupedcutdownthewoodstheybeerdos'.toUpperCase()
  );
});

test('finds average, min, max and length of an array of numbers', () => {
  const arr = [1, 8, 3, 4, 2, 6];
  expect(app.analyzeArray.average(arr)).toBe(4);
  expect(app.analyzeArray.min(arr)).toBe(1);
  expect(app.analyzeArray.max(arr)).toBe(8);
  expect(app.analyzeArray.length(arr)).toBe(6);
});
