$(function () {
  var $div = $('div.test.className:contains(content)');

	if ($div.length > 1) {
	   $div.not(':last').remove()
	}
});
