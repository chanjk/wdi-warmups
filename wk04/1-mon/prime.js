var findPrimes = function(start, numberOfPrimes) {
  if (numberOfPrimes === 0) {
    return [];
  } else {
    if (isPrime(start)) {
      return [start].concat(findPrimes(start + 1, numberOfPrimes - 1));
    } else {
      return findPrimes(start + 1, numberOfPrimes);
    }
  }
};


var isPrime = function(num) {
  if (num < 3 || num % 2 === 0) {
    return false;
  } else {
    for (i = 3; i * i <= num; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};
