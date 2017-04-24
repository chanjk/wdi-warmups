var months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var datesWithOrdinals = (function() {
  var suffixes = ['st', 'nd', 'rd', 'th'];
  var res = {}, lastDigit;

  for (var i = 1; i <= 31; i++) {
    if (i === 11 || i === 12 || i === 13) {
      res[i] = `${i}th`;
    } else {
      res[i] = `${i}${suffixes[Math.min(i % 10 - 1, suffixes.length - 1)]}`;
    }
  }

  return res;
})();

var makeFriendlyDates = function(dateRange) {
  var [start, end] = dateRange.map(date => new Date(date));
  var currentYear = new Date(Date.now()).getFullYear();
  var [startYear, startMonth, startDate] = [start.getFullYear(), start.getMonth(), start.getDate()];
  var [endYear, endMonth, endDate] = [end.getFullYear(), end.getMonth(), end.getDate()];

  var startString = `${months[startMonth]} ${datesWithOrdinals[startDate]}${startYear === currentYear ? '' : ', ' + startYear}`;
  var endString = `${startYear === endYear && startMonth === endMonth ? '' : months[endMonth] + ' '}${datesWithOrdinals[endDate]}${startYear === endYear ? '' : ', ' + endYear}`

  return [startString, endString];
};

var dateRanges = [
  ["2016-07-01", "2016-07-04"],
  ["2016-07-01", "2016-10-04"],
  ["2017-01-01", "2017-12-31"],
  ["2016-07-01", "2018-07-04"]
]

dateRanges.map(dateRange => console.log(dateRange + ': ', makeFriendlyDates(dateRange)));
