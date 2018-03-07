$(document).ready(function(){
	var slider = $('.slick-carousel');
	slider.slick({
		autoplay: false,
	    dots: false,
	    infinite: true,
	    speed: 500,
	    fade: true,
	    cssEase: 'linear',
	    lazyLoad: 'ondemand',
	    controls: false
	});
	var dot = $(".slider__dot");
	slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
	    dot.removeClass("active").eq(nextSlide).addClass("active")
	});
	dot.on("click", function() {
	    var i = dot.index(this);
	    slider.slick("slickGoTo", i)
	});
	$(".main-slider__prev-slide").on("click", function() {
	        slider.slick("slickPrev")
	});
	$(".main-slider__next-slide").on("click", function() {
	        slider.slick("slickNext")
	})

	 $(".main-slider__slide-bot").on("click", function (event) {
	    //отменяем стандартную обработку нажатия по ссылке
	    event.preventDefault();
	   //забираем идентификатор бока с атрибута href
	    var id  = $(this).attr('href'),
	    //узнаем высоту от начала страницы до блока на который ссылается якорь
	    top = $(id).offset().top;
	    //анимируем переход на расстояние - top за 1500 мс
	    $('body,html').animate({scrollTop: top}, 500);
	});
});