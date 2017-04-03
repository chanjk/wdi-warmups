$('.toggle').click(function() {
  $(this).toggleClass('toggle-hide');
  $(this).closest('.menu-item').find('.subitems').slideToggle(500);
});
