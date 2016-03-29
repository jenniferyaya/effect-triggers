$('.btn-show-hide').on('click', function (e) {
  $('.box').toggleClass('is-clicked');
});

$('.btn-move').on('click', function (e) {
  $('.diamond').toggleClass('is-move');
});

$('.btn-collapse-expand').on('click', function (e) {
  $('.panel').toggleClass('is-collapsed');
});

$('.btn-bounce').on('click', function (e) {
  $('.circle').addClass('is-bounce');
});

$('.circle').on('animationend', function (e) {
  $('.circle').removeClass('is-bounce');
});

$('.btn-append').on('click', function (e) {
  $('.list').append('<li>New List Item</li>');
});
