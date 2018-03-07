import { Sticky } from './sticky';

window.addEventListener('DOMContentLoaded', init);

function init() {

    const stickyNav = document.querySelector('.aside');
    const runSticky = new Sticky(stickyNav);
}