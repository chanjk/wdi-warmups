var treasureFinder = function(treasureMap, marker) {
  if (marker === undefined) {
    marker = 'X';
  }

  var taggedMap = treasureMap.map(function(row, indexRow) {
    return row.map(function(elem, indexElem) {
      return [indexRow, indexElem, elem];
    });
  });

  var possibleLocations = taggedMap.map(function(row) {
    return row.filter(function(taggedElem) {
      return taggedElem[2] === marker;
    });
  }).reduce(function(acc, row) {
    return acc.concat(row);
  });

  if (possibleLocations.length > 1) {
    return 'that doesn\'t belong in a museum';
  }

  return possibleLocations[0].slice(0, 2);
}

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];


console.log('treasureFinder(map1): ' + treasureFinder(map1));
console.log('treasureFinder(map2): ' + treasureFinder(map2));
console.log('treasureFinder(map3): ' + treasureFinder(map3));
console.log('treasureFinder(map4): ' + treasureFinder(map4));
console.log('treasureFinder(holyGrailMap, "G"): ' + treasureFinder(holyGrailMap, "G"));
console.log('treasureFinder(holyGrailMap, "H"): ' + treasureFinder(holyGrailMap, "H"));
console.log('treasureFinder(holyGrailMap, "V"): ' + treasureFinder(holyGrailMap, "V"));
