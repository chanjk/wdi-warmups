var size = 8;
var symbol = '#';
var board = [];

for (var i = 0; i < size; i++) {
  var symbolWithSpace;

  if (i % 2 === 0) {
    symbolWithSpace = symbol + ' ';
  } else {
    symbolWithSpace = ' ' + symbol;
  }

  board.push((symbolWithSpace).repeat(size));
}

console.log(board.join('\n'));
