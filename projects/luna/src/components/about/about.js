$(function() {
    if ($('.about__slider-list').length) {

        let imgUrl = [
            './img/slider1.jpeg',
            './img/slider2.jpeg',
            './img/slider3.jpeg',
            './img/slider4.jpeg'
        ]
        const container = $('.about__slider-list')
        for (let i = 0; i < imgUrl.length; i++) {
            container.append(`<li class="about__slider-item"><img class="about__slider-img" src="${imgUrl[i]}"></li>`)
        }
        // $('.about__slider-list').slick({

        // })
        $('.about__slider-list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });

    }
})