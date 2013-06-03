$(function() {
  $('#newType').on('click', function () {
    var name = $('#typeName').val();

    $.post('/types/create', { name: name });

    window.location.replace('/tags');
  });
});