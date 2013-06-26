$(function() {
  $('#submitProduct').on('click', function () {
    var parts = $('#productName').val().split(' ');

    var name = capitalizeWord(parts[0]);
    console.log('before: ', name);

    for(i = 1; i < parts.length; i++) {
      name = name + ' ' + capitalizeWord(parts[i]);
    }
    console.log('after: ', name);
    var price = $('#productPrice').val();

    $.post('/products/create', { name: name, price: price });

    window.location.replace('/products');
  });

  function capitalizeWord (str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  }
});