window.addEventListener('DOMContentLoaded' , init_);

function init_() {
  var wrapper = document.querySelector('#wrapper');
  var nav = document.querySelector('#nav');
  var btnMenu = document.querySelector('#btn-menu');
  var btnClose = document.querySelector('#btn-close')

  btnMenu.addEventListener('click', function() {
    nav.classList.toggle('nav--close');
    wrapper.classList.toggle('wrapper--close');
  })

  btnClose.addEventListener('click', function() {
    nav.classList.toggle('nav--close');
    wrapper.classList.toggle('wrapper--close');
  })
}
