var longest = function(string1, string2) {
  return distinctSorted(distinctSorted(string1) + distinctSorted(string2));
}

var distinctSorted = function(string) {
  var array = string.split('');
  var distinctArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!distinctArray.includes(array[i])) {
      distinctArray.push(array[i]);
    }
  }

  return distinctArray.sort().join('');
}

console.log('longest(xyaabbbccccdefww, xxxxyyyyabklmopq): ' + longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
console.log('longest(abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz): ' + longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));

// recursive

var longest2 = function(string1, string2) {
  if (string1 === '') {
    return string2;
  }

  if (string2 === '') {
    return string1;
  }

  return distinctSorted2(longest(string1.slice(0, string1.length / 2), string1.slice(string1.length / 2)) +
                         longest(string2.slice(0, string2.length / 2), string2.slice(string2.length / 2)));
}

var distinctSorted2 = function(string) {
  var iter = function(array, result) {
    if (array.length === 0) {
      return result;
    }

    if (result.includes(array[0])) {
      return iter(array.slice(1), result);
    }

    return iter(array.slice(1), result.concat([array[0]]));
  }

  return iter(string.split(''), []).sort().join('');
}

console.log('longest2(xyaabbbccccdefww, xxxxyyyyabklmopq): ' + longest2('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
console.log('longest2(abcdefghijklmnopqrstuvwxyz, abcdefghijklmnopqrstuvwxyz): ' + longest2('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));
