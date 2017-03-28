var $clock = $('.clock');
var $secondHand = $('.second-hand');
var $minuteHand = $('.minute-hand');
var $hourHand = $('.hour-hand');
var $digital = $('.digital');

// var secondAngle = 0;
// var minuteAngle = 0;
// var hourAngle = 0;

var markDistanceFromCenter = $clock.height() / 2.0;

var prefixString = function(str, paddedLength, prefixChar) {
  str = str.toString();

  if (str.length < paddedLength) {
     while (paddedLength !== str.length) {
       str = prefixChar + str;
     }
  }

  return str;
};

for (var hour = 1; hour <= 12; hour++) {
  var angleInRad = hour * Math.PI / 6;
  var translateX = markDistanceFromCenter * Math.sin(angleInRad);
  var translateY = markDistanceFromCenter * (1 - Math.cos(angleInRad));

  translateX = Math.abs(translateX) < 0.00001 ? 0 : translateX;
  translateY = Math.abs(translateY) < 0.00001 ? 0 : translateY;

  var $hour = $('<div>').addClass('mark').text(hour).css('-webkit-transform', 'translate(' + translateX + 'px, ' + translateY + 'px)');
  $clock.append($hour);
}

setInterval(function() {
  // secondAngle += 6;
  // minuteAngle += 0.1;
  // hourAngle += 0.0083333333333;
  var date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  $secondHand.css('-webkit-transform', 'rotate(' + seconds * 6 + 'deg)');
  $minuteHand.css('-webkit-transform', 'rotate(' + (minutes * 60 + seconds) * 0.1 + 'deg)');
  $hourHand.css('-webkit-transform', 'rotate(' + ((hours % 12) * 3600 + minutes * 60 + seconds) * 0.0083333333333 + 'deg)');

  $digital.text(prefixString(hours, 2, '0') + ' : ' + prefixString(minutes, 2, '0') + ' : ' + prefixString(seconds, 2, '0'));
}, 1000);
