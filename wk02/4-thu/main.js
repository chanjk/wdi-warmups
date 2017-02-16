var makeFakeMap = function(numberOfRows, numberOfColumns, regionMarker, regionSize, treasureMarker) {
  var mapRow = function() {
    return Array(numberOfColumns).fill(genericRegionMarker);
  }

  var insertTreasureRegion = function(map) {
    var insertRegionInRow = function(row) {
      var beforeRegion = row.slice(0, regionTopLeftCorner[1]);
      var afterRegion = row.slice(regionTopLeftCorner[1] + clampedRegionSize);
      var region = Array(clampedRegionSize).fill(regionMarker);

      return beforeRegion.concat(region).concat(afterRegion);
    };

    var clampedRegionSize = Math.min(regionSize, Math.min(numberOfRows, numberOfColumns));
    var regionTopLeftCorner = [randInt(0, numberOfRows - clampedRegionSize), randInt(0, numberOfColumns - clampedRegionSize)];
    var regionRows = map.slice(regionTopLeftCorner[0], regionTopLeftCorner[0] + clampedRegionSize);

    var beforeTreasureRegion = map.slice(0, regionTopLeftCorner[0]);
    var afterTreasureRegion = map.slice(regionTopLeftCorner[0] + clampedRegionSize);
    var treasureRegion = regionRows.map(insertRegionInRow);

    treasureRegion[randInt(0, clampedRegionSize)][randInt(regionTopLeftCorner[1], regionTopLeftCorner[1] + clampedRegionSize)] = treasureMarker;

    return beforeTreasureRegion.concat(treasureRegion).concat(afterTreasureRegion);
  }

  var genericRegionMarker = 'A';
  var forestMarker = 'F';
  var waterMarker = 'W';
  var desertMarker = 'D';

  if (regionMarker !== forestMarker && regionMarker !== waterMarker && regionMarker !== desertMarker) {
    regionMarker = genericRegionMarker;
  }

  return insertTreasureRegion(Array(numberOfRows).fill('').map(mapRow));
}

var randInt = function(from, until) {
  return Math.floor(Math.random() * (until - from) + from);
}

console.log('[\n[' + makeFakeMap(5, 5, 'F', 2, 'X').join('],\n[') + ']\n]');
