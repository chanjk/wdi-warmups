var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1];
var parScores = [3, 4, 5, 5, 3, 3, 4, 3, 5];

var sum = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
};

var totalScores = function() {
  console.log('Scores\n' +
              '======\n' +
              'Bob: ' + sum(bob) + '\n' +
              'Jimbo: ' + sum(jimbo) + '\n' +
              'Fish: ' + sum(fish) + '\n');
};

var parPerformance = function() {
  var belowOrAbovePar = function(hole, playerScore) {
    if (playerScore < parScores[hole - 1]) {
      return 'Below';
    }

    if (playerScore > parScores[hole - 1]) {
      return 'Above';
    }

    return 'Par  ';
  }

  console.log('         Par     Bob     Jimbo   Fish\n' +
              '=======================================\n' +
              parScores.map(function(score, i) {
                return 'Hole ' + (i + 1) + ' :   ' + parScores[i] + '     ' +
                  [belowOrAbovePar(i + 1, bob[i]), belowOrAbovePar(i + 1, jimbo[i]), belowOrAbovePar(i + 1, fish[i])].
                    join('   ');
              }).join('\n'));
};

var fishWinnings = function() {
  var winnings = function(player) {
    return player.map(function(s, i) {
      return s - parScores[i];
    });
  };

  console.log('Fish\'s bet winnings: ' + (sum(winnings(bob)) + sum(winnings(jimbo))));
};
