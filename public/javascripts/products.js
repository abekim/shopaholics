$(function() {
  $('#submitProduct').on('click', function () {
    var name = $('#productName').val();
    var price = $('#productPrice').val();

    $.post('/products/create', { name: name, price: price });

    window.location.replace('/products');
  });
});