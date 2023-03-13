const capitalize = (string) =>
  Promise.resolve(string.charAt(0).toUpperCase() + string.slice(1));

// const reverseString = (string, reversedString = '') => {
//   for (let i = string.length - 1; i >= 0; i -= 1) {
//     reversedString += string[i];
//   }
//   return reversedString;
// };

const reverseString = (string) =>
  Promise.resolve(string.split('').reverse().join(''));

const calculator = {
  add(x, y) {
    return Promise.resolve(x + y);
  },

  subtract(x, y) {
    return Promise.resolve(x - y);
  },

  multiply(x, y) {
    return Promise.resolve(x * y);
  },

  divide(x, y) {
    return !(y > 0) ? null : Promise.resolve(x / y);
  },
};

const caesarCipher = (str, key) =>
  str
    .toUpperCase()
    .replace(/[A-Z]/g, (c) =>
      String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)
    );

const analyzeArray = {
  average(arr, sum = 0) {
    arr.forEach((num) => {
      sum += num;
    });
    return Promise.resolve(Math.floor(sum / arr.length));
  },

  min(arr) {
    let min = arr[0];
    arr.forEach((num) => {
      if (num < min) min = num;
    });
    return Promise.resolve(min);
  },

  max(arr) {
    let max = arr[0];
    arr.forEach((num) => {
      if (num > max) max = num;
    });
    return Promise.resolve(max);
  },

  length(arr) {
    return Promise.resolve(arr.length);
  },
};

module.exports = {
  reverseString,
  capitalize,
  calculator,
  caesarCipher,
  analyzeArray,
};
