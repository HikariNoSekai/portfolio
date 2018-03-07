"use strict";

window.addEventListener('DOMContentLoaded', init_); //load

function init_() {

    function Slider(config) {


        let params = {
            autoplay: true,
            dots: true,
            inf: true
        }


        for (let key in config) {
            params[key] = config[key];
        }

        this.sliderWrap = document.querySelector('.slider');
        this.container = document.querySelector('.slider__list');
        this.sliderItem = document.querySelectorAll('.slider__item');
        //
        this.navList = document.querySelector('.slider-nav__list');
        this.dots = document.querySelectorAll('.dot');
        //
        this.sliderItemLength = this.sliderItem.length;
        this.move;
        this.containerWidth = 0;
        this.nowPos = 0;
        this.perItemWidth = this.sliderItem[0].clientWidth;
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');


        // this.generateDots_ = () => {
        //     let navlist = document.createElement('ul');
        //     navlist.className = 'slider-nav__list';
        //     this.sliderNav.appendChild(navlist);
        //     for (let i = 0; i < this.sliderItem.length; i++) {
        //         let navitem = document.createElement('li');
        //         navitem.className = 'slider-nav__item';
        //         navlist.appendChild(navitem);
        //         let dotslink = document.createElement('a');
        //         if (i == 0) {
        //             dotslink.className = 'dot dot-active';
        //             navitem.appendChild(dotslink);
        //         } else {
        //             dotslink.className = 'dot';
        //             navitem.appendChild(dotslink);
        //         }
        //     }

        // }

        this.slideDots_ = (e) => {
            this.dots.forEach((el, i) => {
                if (el.classList.contains('dot-active')) {
                    el.classList.remove('dot-active');
                    return;
                }
            });
            e.target.classList.add('dot-active');
            console.log(this.dots[2]);
            // let i = this.dots.indexOf(e.target);
            // this.nowPos = i * this.perItemWidth;
            // this.container.style.left = `-${this.nowPos}px`;

        }

        this.moveWrap = () => {
            this.move = setInterval(this.moveNext_, 2000);
        }

        this.moveNext_ = () => {
            if (this.containerWidth - this.perItemWidth > this.nowPos) {
                this.nowPos += this.perItemWidth;
                this.container.style.left = `-${this.nowPos}px`;
            } else if (params.inf === true) {
                this.nowPos = 0;
                this.container.style.left = `-${this.nowPos}px`;
            }
        }

        this.movePrev_ = () => {
            if (this.nowPos > 0) {
                this.nowPos -= this.perItemWidth;
                this.container.style.left = `-${this.nowPos}px`;
            } else if (params.inf === true) {
                this.nowPos = this.containerWidth - this.perItemWidth;
                this.container.style.left = `-${this.nowPos}px`;
            }
        }

        this.events_ = () => {
            if (params.autoplay === true) {
                this.sliderWrap.addEventListener('mouseover', () => clearInterval(this.move));
                this.container.addEventListener('mouseleave', () => this.moveWrap());
            }
            this.next.addEventListener('click', this.moveNext_);
            this.prev.addEventListener('click', this.movePrev_);
            if (params.dots === true) {
                this.navList.style.display = 'flex';
                this.navList.addEventListener('click', this.slideDots_);
            } else {
                this.navList.style.display = 'none';
            }
        }

        this.start_ = (el) => {

            this.sliderItem.forEach(el => this.containerWidth += el.clientWidth);
            this.container.style.width = `${this.containerWidth}px`;
            if (params.autoplay === true) this.moveWrap();


        }

        this.init_ = () => {
            // if (params.dots === true) {
            //     this.generateDots_();
            // }
            this.events_();
            this.start_();
        }

        this.init_();

    }

    const slider = new Slider({
        autoplay: false,
        dots: false,
        inf: true
    });
}