const formatStr = (str) =>
  str.replace(/[^\w]/g, '').toLocaleLowerCase().split('').sort().join('');

const isAnagram = (str1, str2) => formatStr(str1) === formatStr(str2);

module.exports = isAnagram;
