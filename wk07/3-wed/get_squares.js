var getSquares = function(nums) {
  filtered = [];

  nums.forEach(function(num) {
    if (!filtered.includes(num) && Math.sqrt(num) % 1 === 0) {
      filtered.push(num);
    }
  });

  return filtered.sort(function(a, b) {
    return a - b;
  });
};
