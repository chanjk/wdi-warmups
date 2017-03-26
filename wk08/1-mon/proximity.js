// assume constant radii for latitude and longitude for small distances
var relativeDistSquared = function(location1, location2) {
  return Math.pow((location2.lat - location1.lat), 2) + Math.pow((location2.long - location1.long), 2);
};

// with loop
var sortByProximityLoop = function(results, currentLocation) {
  var sorted = [];

  for (result of results) {
    for (var i = 0; i <= sorted.length; i++) {
      if (!sorted[i] || relativeDistSquared(currentLocation, result.location) < relativeDistSquared(currentLocation, sorted[i].location)) {
        sorted.splice(i, 0, result);
        break;
      }
    }
  }

  return sorted;
};

// without loop
var sortByProximity = function(results, currentLocation) {
  return results.sort(function(a, b) {
    return relativeDistSquared(currentLocation, a.location) - relativeDistSquared(currentLocation, b.location);
  });
};

var myResults = [
  {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
  {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
  {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
  {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
  {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
  {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}
];

var currentLocation = { lat: 37.34, long: -122.4 }

console.log('connected');
console.log('current location: [' + currentLocation.lat + ', ' + currentLocation.long + ']');
console.log('with loop:');
console.log(sortByProximityLoop(myResults, currentLocation));
console.log('without loop:');
console.log(sortByProximity(myResults, currentLocation));
