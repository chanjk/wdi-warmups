var grannyTalk = function(question) {
  if (question !== question.toUpperCase()) {
    return 'SPEAK UP SONNY JIM';
  } else if (question === 'BYE') {
    return 'What\'s that honey, I didn\'t hear you..';
  }

  var fromYear = 1930;
  var toYear = 1950;

  return 'NO, NOT SINCE ' + Math.floor(Math.random() * (toYear - fromYear + 1) + fromYear);
}

var grandpaTalk = function(question) {
  var getRandomElementAndSpliceArray = function(array) {
    var randIndex = Math.floor(Math.random() * array.length);
    var elem = array[randIndex];
    array.splice(randIndex, 1);
    return elem;
  }

  var findVowels = function(strArray) {
    var vowels = [];

    for (var i = 0; i < strArray.length; i++) {
      var char = strArray[i].toLowerCase();
      if (vowelSet.includes(char)) {
        vowels.push(char);
      }
    }
    return vowels;
  }

  var vowelSet = ['a', 'e', 'i', 'o', 'u'];
  var responseStringArray = grannyTalk(question).split('');
  var currentVowels = findVowels(responseStringArray);

  var gibberish = responseStringArray.map(function(letter) {
    if (vowelSet.includes(letter)) {
      letter = getRandomElementAndSpliceArray(currentVowels);
    } else if (vowelSet.includes(letter.toLowerCase())) {
      letter = getRandomElementAndSpliceArray(currentVowels).toUpperCase();
    }
    return letter;
  }).join('');

  return gibberish;
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
