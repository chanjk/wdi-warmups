var winnerThreshold = 5;
var roundNumber = 0;
var headCount = 0;
var tailCount = 0;
var isWinner = false;

var reallyMaxRounds;
var reallyReallyMaxRounds;
var giveUpLimit;

var coinFlip = function() {
  roundNumber++;
  var result = '';

  if (randInt(0, 2) === 0) {
    headCount++;
    result = 'HEADS';
  } else {
    tailCount++;
    result = 'TAILS';
  }

  console.log(result);

  if (!isWinner && (headCount === winnerThreshold || tailCount === winnerThreshold)) {
    isWinner = true;

    reallyMaxRounds = roundNumber + 5;
    reallyReallyMaxRounds = roundNumber + 15;
    giveUpLimit = roundNumber + 25;

    console.log('WINNER');
  }

  return result;
}

var randInt = function(from, until) {
  return Math.floor(Math.random() * (until - from) + from);
}

var coin = document.getElementById('coin');
var resultOut = document.getElementById('result');
var headCountOut = document.getElementById('headCount');
var tailCountOut = document.getElementById('tailCount');
var winnerOut = document.getElementById('winner')

coin.onload = function() {
  coin.addEventListener('click', function() {
    resultOut.innerText = coinFlip();
    headCountOut.innerText = headCount;
    tailCountOut.innerText = tailCount;

    if (roundNumber >= giveUpLimit) {
      winnerOut.innerText = 'I GIVE UP. WHATEVER';
    } else if (roundNumber >= reallyReallyMaxRounds) {
      winnerOut.innerText = 'SERIOUSLY, STOP CLICKING';
    } else if (roundNumber >= reallyMaxRounds) {
      winnerOut.innerText = 'OK, YOU CAN STOP NOW';
    } else if (isWinner) {
      winnerOut.innerText = 'A WINNER IS YOU';
    }
  });
};
