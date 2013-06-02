$(function() {
  $('#submitProduct').on('click', function () {
    var name = $('#productName').val();
    var price = $('#productPrice').val();

    $.post('/products/create', { name: name, price: price });

    window.location.replace('/products');
  });

  $('#newTag').on('click', function () {
    var name = $('#tagName').val();
    var type = $('#tagType').val();

    $.post('/tags/create', { name: name, type: type });

    window.location.replace('/tags');
  });

  $('#newType').on('click', function () {
    var name = $('#typeName').val();
    var tags = [];

    $.post('/types/create', { name: name, tags: tags });

    window.location.replace('/');
  });

  // var tagRefresh = function () {
  //   $.get('/tags/list', function (data) {
  //     $('#tagList').html(data);
  //   });
  // };

  // setInterval(tagRefresh, 1000);
});

/*
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
*/