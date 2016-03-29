
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
  $('.circle').toggleClass('.is-bounce');
});
