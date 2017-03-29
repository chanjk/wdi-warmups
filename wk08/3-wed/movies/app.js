var $results = $('.results');
var source = $('#movie-template').html();
var template = Handlebars.compile(source);

$('.btn-search').click(function() {
  var title = $('input[name="title"]').val();

  $.ajax({
    url: 'http://omdbapi.com/',
    data: { s: title }
  }).done(function(data) {
    $results.empty();

    data.Search.forEach(function(result) {
      $results.append(template(result));
    });
  });
});
