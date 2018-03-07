"use strict";

function ModalEffects() {

    this.show_ = () => {

        this.overlay = document.querySelector('.md-overlay');

        [].slice.call(document.querySelectorAll('.md-trigger')).forEach((el, i) => {

            this.modal = document.querySelector('#' + el.getAttribute('data-modal'));
            this.close = this.modal.querySelector('.md-close');

            this.removeModal = (hasPerspective) => {
                classie.remove(this.modal, 'md-show');

                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
            }

            this.removeModalHandler = () => {
                this.removeModal(classie.has(el, 'md-setperspective'));
            }

            el.addEventListener('click', (ev) => {
                classie.add(this.modal, 'md-show');
                this.overlay.removeEventListener('click', this.removeModalHandler);
                this.overlay.addEventListener('click', this.removeModalHandler);

                if (classie.has(el, 'md-setperspective')) {
                    setTimeout(function() {
                        classie.add(document.documentElement, 'md-perspective');
                    }, 25);
                }
            });

            this.close.addEventListener('click', (ev) => {
                ev.stopPropagation();
                this.removeModalHandler();
            });


        });

    }

    this.init_ = () => {
        this.show_();
    }

    this.init_();
}


let modalEffects = new ModalEffects();