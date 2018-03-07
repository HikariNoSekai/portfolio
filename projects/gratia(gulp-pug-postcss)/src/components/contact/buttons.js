$(function() {
	$('.contact__prepare-menu').styler();
	setTimeout(function() {
		$('.contact__prepare-menu .jq-selectbox__trigger').append('<i class="fas fa-plus contact__arow"></i>');
	}, 100);
});