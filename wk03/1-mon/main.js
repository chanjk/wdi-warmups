var decodeCaesar = function(cipherText, shift) {
  var isLetter = function(char) {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  }

  var unshiftLetter = function(letter) {
    var letterCode = letter.charCodeAt();

    if (letter <= 'Z') {
      return String.fromCharCode((letterCode - 'A'.charCodeAt() + 26 - shift) % 26 + 'A'.charCodeAt());
    } else {
      return String.fromCharCode((letterCode - 'a'.charCodeAt() + 26 - shift) % 26 + 'a'.charCodeAt());
    }
  }

  var cipherCharArray = cipherText.split('');
  var plainCharArray = cipherCharArray.map(function(char) {
    if (isLetter(char)) {
      return unshiftLetter(char);
    } else {
      return char;
    }
  });

  return plainCharArray.join('');
}
