var decodeCaesar = function(cipherText, shift) {
  var isLetter = function(char) {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  }

  var unshift = function(char) {
    var charCode = char.charCodeAt();

    if (char <= 'Z') {
      return String.fromCharCode((charCode - 'A'.charCodeAt() + 26 - shift) % 26 + 'A'.charCodeAt());
    } else {
      return String.fromCharCode((charCode - 'a'.charCodeAt() + 26 - shift) % 26 + 'a'.charCodeAt());
    }
  }

  var cipherCharArray = cipherText.split('');
  var plainCharArray = cipherCharArray.map(function(char) {
    if (isLetter(char)) {
      return unshift(char);
    } else {
      return char;
    }
  });

  return plainCharArray.join('');
}
