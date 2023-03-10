const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const reverseString = (string, reversedString = '') => {
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string[i];
  }
  return reversedString;
};

const calculator = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },

  multiply(x, y) {
    return x * y;
  },

  divide(x, y) {
    return !(y > 0) ? null : x / y;
  },
};

module.exports = { reverseString, capitalize, calculator };
