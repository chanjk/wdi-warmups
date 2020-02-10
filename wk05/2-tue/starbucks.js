var coffee = function(drink, sugars, size, order_name, options) {
  return {
    drink: drink,
    sugars: sugars,
    size: size,
    order_name: misspell(order_name),
    options: [...arguments].slice(4),
    readyTime: new Date().getTime() + randInt(120, 301),
    collected: false,
    isReady: function() { return this.toString() + (new Date().getTime() >= this.readyTime ? " Ready" : " Not ready"); },
    toString: function() { return order_name + '\'s ' + drink + ', ' + size + ', ' + sugars + '.'; }
  }
};

var misspell = function(name) {
  all_letters_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  all_letters_lowercase = all_letters_uppercase.map(c => c.toLowerCase());
  all_vowels_uppercase = "AEIOU".split("");
  all_vowels_lowercase = all_vowels_uppercase.map(c => c.toLowerCase());
  all_consonants_uppercase = all_letters_uppercase.filter(c => !all_vowels_uppercase.includes(c));
  all_consonants_lowercase = all_consonants_uppercase.map(c => c.toLowerCase());

  return name.split('').map(function(c) {
    if (Math.random() < 0.6) {
      return c;
    } else if (all_consonants_uppercase.includes(c)) {
      return all_consonants_uppercase[randInt(0, all_consonants_uppercase.length)];
    } else if (all_consonants_lowercase.includes(c)) {
      return all_consonants_lowercase[randInt(0, all_consonants_lowercase.length)];
    } else if (all_vowels_uppercase.includes(c)) {
      return all_vowels_uppercase[randInt(0, all_vowels_uppercase.length)];
    } else {
      return all_vowels_lowercase[randInt(0, all_vowels_lowercase.length)];
    }
  }).join('');
};

var randInt = function(from, until) {
  return Math.floor(Math.random() * (until - from) + from);
}
