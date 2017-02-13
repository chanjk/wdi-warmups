var toLowerCase = function(char) {
  return char.toLowerCase();
}

var isLetter = function(char) {
  var inLowerCase = toLowerCase(char);

  if (inLowerCase < 'a' || inLowerCase > 'z') {
    return false;
  }

  return true;
}

var isPalindrome = function(string) {
  var firstLetterArray = string.split('').map(toLowerCase).filter(isLetter);
  var halfLength = firstLetterArray.length / 2;
  var secondLetterArray = firstLetterArray.splice(-halfLength);

  return firstLetterArray.slice(0, halfLength).join('') === secondLetterArray.reverse().join('');
}

var testSentences = [
  'ABBA',
  'A but tuba.',
  'A car, a man, a maraca.',
  'A dog, a plan, a canal: pagoda.',
  'A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!',
  'Aibohphobia',
  'Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.',
  'AC/DC',
  'Hi there Charlie Brown',
  'When in Rome, do as the Romans do',
  'I came, I saw, I conquered',
  'Carpe diem!',
  'That\'s one small step for man, one giant leap for mankind',
  'Always forgive your enemies; nothing annoys them so much.'
]

testSentences.map(function(string) {
  var helper = '';

  if (isPalindrome(string)) {
    helper = 'Is a ';
  } else {
    helper = 'Not a ';
  }

  console.log(string + ': ' + helper + 'palindrome');
})
