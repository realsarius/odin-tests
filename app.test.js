const app = require('./app');

// test('reversed the string: elizabeth', () => {
//   expect(app.reverseString('elizabeth')).toBe('htebazile');
// });

test('Reversed the string: elizabeth', () => {
  app
    .reverseString('elizabeth')
    .then((result) => expect(result).toEqual('htebazile'));
});

test('capitalize the first letter function: nolan', () => {
  app.capitalize('nolan').then((result) => expect(result).toBe('Nolan'));
});

test('calculator test: add, subtract, multiply and divide 24 and 6', () => {
  const x = 24;
  const y = 6;
  app.calculator.add(x, y).then((result) => expect(result).toBe(30));
  app.calculator.subtract(x, y).then((result) => expect(result).toBe(18));
  app.calculator.multiply(x, y).then((result) => expect(result).toBe(144));
  app.calculator.divide(x, y).then((result) => expect(result).toBe(4));
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
  app.analyzeArray.average(arr).then((result) => expect(result).toBe(4));
  app.analyzeArray.min(arr).then((result) => expect(result).toBe(1));
  app.analyzeArray.max(arr).then((result) => expect(result).toBe(8));
  app.analyzeArray.length(arr).then((result) => expect(result).toBe(6));
});
