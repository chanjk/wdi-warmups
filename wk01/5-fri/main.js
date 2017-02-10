var grannyTalk = function(question) {
  if (question !== question.toUpperCase()) {
    return 'SPEAK UP SONNY JIM';
  } else if (question === 'BYE') {
    return 'What\'s that honey, I didn\'t hear you..';
  }

  var fromYear = 1930;
  var toYear = 1950;

  return 'NO, NOT SINCE ' + randInt(fromYear, toYear + 1);
}

var grandpaTalk = function(question) {
  var getRandomElementAndSpliceArray = function(array) {
    var randIndex = randInt(0, array.length);
    var elem = array[randIndex];
    array.splice(randIndex, 1);
    return elem;
  }

  var findVowels = function(charArray) {
    var vowels = [];

    for (var i = 0; i < charArray.length; i++) {
      var char = charArray[i].toLowerCase();
      if (vowelSet.includes(char)) {
        vowels.push(char);
      }
    }
    return vowels;
  }

  var vowelSet = ['a', 'e', 'i', 'o', 'u'];
  var responseCharArray = grannyTalk(question).split('');
  var currentVowels = findVowels(responseCharArray);

  var gibberish = responseCharArray.map(function(letter) {
    if (vowelSet.includes(letter)) {
      letter = getRandomElementAndSpliceArray(currentVowels);
    } else if (vowelSet.includes(letter.toLowerCase())) {
      letter = getRandomElementAndSpliceArray(currentVowels).toUpperCase();
    }
    return letter;
  }).join('');

  return gibberish;
}

var randInt = function(from, until) {
  return Math.floor(Math.random() * (until - from) + from);
}

grannyQuestion1 = 'How are you grandma?';
grannyQuestion2 = 'I SAID, HOW ARE YOU?';
grannyQuestion3 = 'BYE';

console.log('Charlie: ' + grannyQuestion1);
console.log('Grandma: ' + grannyTalk(grannyQuestion1));
console.log('Grandpa: ' + grandpaTalk(grannyQuestion1));
console.log('Charlie: ' + grannyQuestion2);
console.log('Grandma: ' + grannyTalk(grannyQuestion2));
console.log('Grandpa: ' + grandpaTalk(grannyQuestion2));
console.log('Charlie: ' + grannyQuestion3);
console.log('Grandma: ' + grannyTalk(grannyQuestion3));
console.log('Grandpa: ' + grandpaTalk(grannyQuestion3));
