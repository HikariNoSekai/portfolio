function Navigation(navObj) {
    this.btn = document.getElementById(navObj.btnId)
    this.nav = document.getElementById(navObj.navigationId)
    this.overlay = document.createElement('div')

    this.openNav_ = () => {
        document.body.appendChild(this.overlay)
        setTimeout(() => this.nav.classList.add(navObj.activeNavClass), 200)
    }
    this.hideNav_ = event => {
        if (document.querySelector(`.${navObj.overlayClass}`) && event.keyCode === 27 || event.type === 'click' || event.type === 'dragend') {
            this.nav.classList.remove(navObj.activeNavClass)
            if (this.nav.hasAttribute('style')) {
                this.nav.removeAttribute('style')
            }
            setTimeout(() => document.body.removeChild(this.overlay), 200)
        }
    }
    this.dragStart_ = e => {
        let start = 270 - e.screenX
        if( start < 270 ) this.nav.style.transform = `translateX(${-start}px)`
    }

    this.events_ = () => {
        this.btn.addEventListener('click', this.openNav_);
        this.overlay.addEventListener('click', this.hideNav_);
        window.addEventListener('keyup', this.hideNav_);
        this.nav.addEventListener('drag', this.dragStart_);
        this.nav.addEventListener('dragend', this.hideNav_);
    }
    this.init_ = () => {
        this.events_();
        this.overlay.classList.add(navObj.overlayClass);
        console.log(navObj.navigationId)
    }
    this.init_();
}

const nav = {
    btnId: 'js-menu-btn',
    navigationId: 'js-nav',
    activeNavClass: 'nav--active',
    overlayClass: 'overlay'
}

const offCanvas = new Navigation(nav);