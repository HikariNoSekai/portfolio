window.addEventListener('DOMContentLoaded', init_);

function init_() {

    /**
     * 
     * 
     *  TABS
     * 
     */

    function Tabs() {

        this.tabsBtn = document.querySelector('.tab-btns');
        this.tabContent = document.querySelectorAll('.tab-content');
        this.childBtn = document.querySelectorAll('.tab-btn');
        this.spanLine = document.querySelector('.line');


        this.calcWidth_ = () => {
            this.childBtn.forEach((el) => {
                this.anchLength = this.childBtn.length;
                this.anchWidth = 100 / this.anchLength;
                el.style.width = this.anchWidth + '%';
                this.spanLine.style.width = this.anchWidth + '%';
            });
        }

        this.changeContent_ = event => {

            if (event.target.tagName === 'A' && event.target.hasAttribute('href')) {

                let anchor = event.target.getAttribute('href').slice(1);

                this.childBtn.forEach(el => {
                    if (el.classList.contains('active-tab')) {
                        el.classList.remove('active-tab');
                        return;
                    }
                });
                event.target.classList.add('active-tab');

                this.tabContent.forEach(el => {
                    if (el.classList.contains('active-content')) {
                        el.classList.remove('active-content');
                        return;
                    }
                });
                document.getElementById(anchor).classList.add('active-content');
            }
        }

        this.events_ = () => {
            this.tabsBtn.addEventListener('click', this.changeContent_);
            this.childBtn.forEach((el, i) => {
                el.addEventListener('click', (e) => {
                    this.anchLength = this.childBtn.length;
                    this.anchWidth = 100 / this.anchLength;
                    this.position = i * this.anchWidth;
                    this.spanLine.style.left = this.position + '%';
                });
            });
        }
        this.init_ = () => {
            this.calcWidth_();
            this.events_();
        }

        this.init_();
    }

    const tabs = new Tabs();
}