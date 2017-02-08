var size = 8;
var symbol = '#';
var board = [];

var evenString = (symbol + ' ').repeat(size);
var oddString = (' ' + symbol).repeat(size);

for (var i = 0; i < size; i++) {
  var currentString;

  if (i % 2 === 0) {
    currentString = evenString;
  } else {
    currentString = oddString;
  }

  board.push(currentString);
}

console.log(board.join('\n'));
