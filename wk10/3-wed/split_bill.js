var sum = function(arr) {
  return arr.reduce((x, y) => x + y);
};

var average = function(arr) {
  return sum(arr) / arr.length;
};

var splitTheBill = function(group) {
  var members = Object.keys(group);
  var amounts = members.map(k => group[k]);
  var avgAmount = average(amounts);

  return members.reduce(function(acc, m) {
    acc[m] = group[m] - avgAmount;
    return acc;
  }, {});
};

var group = {
    A: 20,
    B: 15,
    C: 10
}

console.log(splitTheBill(group));
