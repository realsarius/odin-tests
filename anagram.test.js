/* eslint-disable @typescript-eslint/no-var-requires */
const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"dormitory" is an anagram of "dirty space room##"', () => {
  expect(isAnagram('dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
