$(function() {
  $('#newTag').on('click', function () {
    var name = $('#tagName').val();
    var type = $('#tagType').val();

    $.post('/tags/create', { name: name, type: type });

    window.location.replace('/tags');
  });

  var tagRefresh = function () {
    $.get('/tags/list', function (data) {
      $('#tagList').html(data);
    });
  };

  setInterval(tagRefresh, 1000);
});