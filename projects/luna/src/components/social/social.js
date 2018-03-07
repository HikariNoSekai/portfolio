$(function() {
    if ($('.social__list').length && $(window).width() > 320) {

        $('.social__list').slick({
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1,
            speed: 1000,
            arrows: false,
            responsive: [{
                breakpoint: 700,
                settings: {
                    slideWidth: 100,
                    moveSlides: 1,
                    centerMode: false,
                    dots: true
                }
            }]
        });

    }

})