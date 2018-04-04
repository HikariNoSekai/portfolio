$(function() {
	$('.item__add').click(function(e){
		if (e.target.getAttribute("type") == "radio"){
	       $('html, body').animate({scrollTop:$('.addons').position().top}, 500);
		}
	});
  //$('.region__select').styler();
});