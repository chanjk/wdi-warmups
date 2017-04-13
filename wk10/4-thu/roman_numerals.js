var arabicRomanDict = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

var arabicRomanDictKeys = Object.keys(arabicRomanDict);

var arabicToRoman = function(num) {
  var upperIndex = arabicRomanDictKeys.findIndex(key => num <= key);
  var upper = +arabicRomanDictKeys[upperIndex];

  if (upper === num) return arabicRomanDict[num];

  // for subtraction
  // returns 10 if num <= 100, 100 if num <= 1000, 1000 if num <= 10000, etc.
  var possibleDifference = Math.pow(10, (upper - 1).toString().length - 1);

  if (num === upper - possibleDifference) return arabicRomanDict[possibleDifference] + arabicRomanDict[upper];

  var lower = +arabicRomanDictKeys[upperIndex - 1];

  return arabicRomanDict[lower] + arabicToRoman(num - lower);
};

[1, 4, 10, 13, 40, 150, 190].forEach(num => console.log(num, arabicToRoman(num)));
