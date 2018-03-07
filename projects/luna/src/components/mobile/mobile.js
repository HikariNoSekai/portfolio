function Tabs() {

    this.tabsBtn = document.querySelector('.tab-btns');
    this.tabContent = document.querySelectorAll('.tab-content');
    this.childBtn = document.querySelectorAll('.tab-btn');
    this.line = document.querySelector('.line');
    this.width = this.childBtn[0].clientWidth;

    this.changeContent_ = event => {
        if (event.target.parentNode.tagName === 'A' && event.target.parentNode.hasAttribute('href')) {

            let anchor = event.target.parentNode.getAttribute('href').slice(1);

            this.childBtn.forEach(el => {
                if (el.classList.contains('active-tab')) {
                    el.classList.remove('active-tab');
                    return;
                }
            })
            event.target.parentNode.classList.add('active-tab');

            this.tabContent.forEach(el => {
                if (el.classList.contains('active-content')) {
                    el.classList.remove('active-content');
                    return;
                }
            });
            document.getElementById(anchor).classList.add('active-content');

            this.containerRect = this.tabsBtn.getBoundingClientRect();
            this.curTabRect = document.querySelector('.active-tab').getBoundingClientRect();

            this.line.style.left = (this.curTabRect.left - this.containerRect.left) + 'px';
            this.width = event.target.parentNode.clientWidth;
            this.line.style.width = `${this.width}px`;
        }
    }

    this.events_ = () => {

        this.tabsBtn.addEventListener('click', this.changeContent_);
    }
    this.init_ = () => {
        this.events_();
        this.line.style.width = `${this.width}px`;
    }

    this.init_();
}

const tabs = new Tabs();