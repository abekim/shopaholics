$(function() {
  $('#submitProduct').on('click', function () {
    var name = $('#productName').val();

    var price = $('#productPrice').val();

    $.post('/product/create', { name:name, price:price });

    window.location.replace('/');
  });
});

function removeDuplicateDivs (className) {
  var contents = '';

  var divs = $('.' + className);

  if (divs.length > 1) {
    $.each($('.' + className), function (index, value) {
      contents += value.val() + '<br />'
      value.remove()
    });

    $('#tagList').append('<h2 class="' + className '"');
    $('.' + className).append(contents);
  }
}