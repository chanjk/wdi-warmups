var WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';
var FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
var API_KEY = '6b15fb94940cf1517dcb581b248320e6';
var ICON_URL = 'http://openweathermap.org/img/w/';
var TEMP_UNIT = 'metric';
var CELSIUS = '\u2103', FAHRENHEIT = '\u2109';
var FORECAST_COUNT = 3;

var $weatherIcon = $('#weather-icon');
var $localTemperature = $('#local-temperature');
var $unitToggle = $('#unit-toggle');
var $unit = $('#unit');
var $currentLocation = $('#current-location');
var $forecasts = $('aside');

var currentTempCelsius, currentUnit = CELSIUS;

var toFahrenheit = function(tempCelsius) {
  return tempCelsius * 9 / 5 + 32;
};

var displayTemp = function() {
  $localTemperature.text((currentUnit === CELSIUS ? currentTempCelsius : toFahrenheit(currentTempCelsius)) + ' ' + currentUnit);
};

var geoSuccess = function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  $.ajax({
    url: WEATHER_URL,
    data: {
      lat: latitude,
      lon: longitude,
      units: TEMP_UNIT,
      appid: API_KEY }
  }).done(function(result) {
    var country = result.sys.country;
    var city = result.name;
    currentTempCelsius = result.main.temp;

    $weatherIcon.attr('src', ICON_URL + result.weather[0].icon + '.png');
    displayTemp();
    $currentLocation.text(city + ', ' + country);
  });

  $.ajax({
    url: FORECAST_URL,
    data: {
      lat: latitude,
      lon: longitude,
      cnt: FORECAST_COUNT,
      units: TEMP_UNIT,
      appid: API_KEY }
  }).done(function(result) {
    result.list.forEach(function(forecast, index) {
      var $heading = $('<h4>').text('Day ' + (index + 1));
      var $icon = $('<img>').attr('src', ICON_URL + forecast.weather[0].icon + '.png');
      var $desc = $('<span>').text(forecast.weather[0].description);
      var $forecast = $('<div>').append($heading).append($icon).append($desc);
      $forecasts.append($forecast);
    });
  });
};

$unit.text(currentUnit);

$unitToggle.click(function() {
  currentUnit = currentUnit === CELSIUS ? FAHRENHEIT : CELSIUS;
  $unit.text(currentUnit);
  if (currentTempCelsius) displayTemp();
});

navigator.geolocation.getCurrentPosition(geoSuccess);
