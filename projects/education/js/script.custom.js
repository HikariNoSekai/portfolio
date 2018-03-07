$(function() {
    $('.back_to_top').on('click', function() {
      $('body, html').animate({
        scrollTop: 0
      }, 500)
    })

    $(window).on('scroll', function() {
      var _firstSection = $('.first-section').height(),
          _btn = $('.back_to_top');

      if( $(window).scrollTop() >= _firstSection ) {
        _btn.addClass('back_to_top--active');
      } else {
        _btn.removeClass('back_to_top--active');
      }
    });


});
