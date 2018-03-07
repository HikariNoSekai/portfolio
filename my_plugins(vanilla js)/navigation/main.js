"use strict";

window.addEventListener('DOMContentLoaded', init_); //load

function init_() {

    function Navigation(navObj) {

        this.btn = document.getElementById(navObj.btnId);
        this.nav = document.getElementById(navObj.navigationId);
        this.overlay = document.createElement('div');
        //this.posX = 0;
        //this.posStart = 0;

        this.openNav_ = () => {

            document.body.appendChild(this.overlay);
            setTimeout(() => this.nav.classList.add(navObj.activeNavClass), 200);
        }

        this.hideNav_ = event => {
            if (document.querySelector(`.${navObj.overlayClass}`) && event.keyCode === 27 || event.type === 'click') {
                this.nav.classList.remove(navObj.activeNavClass);
                setTimeout(() => document.body.removeChild(this.overlay), 200);
            }

        }

        this.dragAndDropNavigation_ = (e) => {
            const pos = this.nav.getBoundingClientRect().x;
            this.posX = e.screenX;
        }

        this.moveNavigation_ = () => {

            if (this.posX != 0) {
                this.posX = this.posX - e.screenX;
            }
        }

        //stack events function
        this.events_ = () => {
            this.btn.addEventListener('click', this.openNav_);
            this.overlay.addEventListener('click', this.hideNav_);
            window.addEventListener('keyup', this.hideNav_);
            //this.nav.addEventListener('mousedown', this.dragAndDropNavigation_);
            //this.nav.addEventListener('mousemove', this.moveNavigation_);
        }

        //root function
        this.init_ = () => {

            this.events_();
            this.overlay.classList.add(navObj.overlayClass);
        }

        this.init_();
    }

    const nav = {
        btnId: 'nav-btn',
        navigationId: 'navigation',
        activeNavClass: 'active-navigation',
        overlayClass: 'overlay'
    }

    const offCanvas = new Navigation(nav);
}