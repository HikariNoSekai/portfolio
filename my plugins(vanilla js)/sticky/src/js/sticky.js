export class Sticky {
    constructor(element) {
        this.el = element;
        this.elHeight = this.el.clientHeight;

        //styles

        this.fixedObj = {
            top: 10,
            right: 0,
            pos: 'fixed'
        }

        // DOM
        this.footer = document.querySelector('.wall');
        this.footerTop = this.footer.getBoundingClientRect().top;
        this.asideTopPos = element.getBoundingClientRect().top;
        this.basicPosition = this.asideTopPos + window.scrollY;

        this._events();
    }

    _sticky(count, { top, right, pos }) {
        if (count >= this.asideTopPos) {
            this.el.setAttribute('style', `top:${top}px; right:${right}px; position:${pos};`)
        } else {
            this.el.style.position = 'absolute';
            this.el.style.top = 0 + 'px';
        }
    }

    _stop() {
        let footerPos = this.footer.getBoundingClientRect().top;
        this.el.style.position = 'fixed';
        this.el.style.top = `${footerPos - 30 - this.elHeight}px`;
    }

    _load() {
        if (window.scrollY > this.asideTopPos) {
            this._sticky(this.footerTop, this.fixedObj);
            this.footerTop = this.footer.getBoundingClientRect().top + window.scrollY;
            this.asideTopPos = this.basicPosition;
            if (this.footerTop < window.scrollY + this.footer.clientHeight + this.elHeight) {
                this._stop();
            }
        }
    }

    _scrollEvents() {
        if (window.scrollY + this.elHeight < this.footerTop - 30) {
            this._sticky(window.scrollY, this.fixedObj);
        } else {
            this._stop();
        }
    }

    _events() {
        window.addEventListener('load', this._load.bind(this));
        window.addEventListener('scroll', this._scrollEvents.bind(this));
    }
}