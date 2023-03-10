const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// const reverseString = (string, reversedString = '') => {
//   for (let i = string.length - 1; i >= 0; i -= 1) {
//     reversedString += string[i];
//   }
//   return reversedString;
// };

const reverseString = (string, num = string.length, tempString = '') => {
  if (num < 0) return tempString;
  tempString += string.charAt(num);
  return reverseString(string, num - 1, tempString);
};

console.log(reverseString('berkan'));

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
    return Math.floor(sum / arr.length);
  },

  min(arr) {
    let min = arr[0];
    arr.forEach((num) => {
      if (num < min) min = num;
    });
    return min;
  },

  max(arr) {
    let max = arr[0];
    arr.forEach((num) => {
      if (num > max) max = num;
    });
    return max;
  },

  length(arr) {
    return arr.length;
  },
};

module.exports = {
  reverseString,
  capitalize,
  calculator,
  caesarCipher,
  analyzeArray,
};
