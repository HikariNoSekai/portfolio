function Calculator() {
    let d = document,
        region;
    this.itemBox = d.querySelectorAll(".itembox");
    this.summCont = d.querySelector('.results');
    this.select = d.querySelector(".region__select");

    this.getSummData_ = () => {
        return JSON.parse(localStorage.getItem('summ'));
    }

    this.setSummData_ = (obj) => {
		localStorage.setItem('summ', JSON.stringify(obj));
		return false;
    }

    this.deleteSummData_ = () => {
        return localStorage.removeItem('summ');
    }

    this.addEvent_ = (elem, type, handler) => {
        elem.addEventListener(type, handler, false);
        return false;
    }

    this.plusItem_ = (e) => {
        this.summData = this.getSummData_() || {};
        this.parentBox = e.target.parentNode.parentNode;
        this.itemId = this.parentBox.querySelector('.item__add').getAttribute('data-id');
        this.itemTitle = this.parentBox.querySelector('.item__title').innerHTML;
        this.itemPrice = this.parentBox.querySelector('.item__add').getAttribute('price');
        this.itemWeight = this.parentBox.querySelector('.item__add').getAttribute('weight');
        this.count = this.parentBox.querySelector(".addon__count");
        if (this.summData.hasOwnProperty(this.itemId)) {
            this.summData[this.itemId][3]++;
        } else {
            this.summData[this.itemId] = [this.itemTitle, this.itemPrice, this.itemWeight, 1];
        }
        if (!this.setSummData_(this.summData)) {
            this.count.innerHTML = `${this.summData[this.itemId][3]}`;
        }
        this.summary_();
        return false;
    }

    this.removeItem_ = (e) => {
        this.summData = this.getSummData_();
        this.parentBox = e.target.parentNode.parentNode;
        this.itemId = this.parentBox.querySelector('.item__add').getAttribute('data-id');
        this.itemTitle = this.parentBox.querySelector('.item__title').innerHTML;
        this.itemPrice = this.parentBox.querySelector('.item__add').getAttribute('price');
        this.itemWeight = this.parentBox.querySelector('.item__add').getAttribute('weight');
        this.count = this.parentBox.querySelector(".addon__count");
        this.countWrap = this.parentBox.querySelector('.counter-wrap');
        if (this.summData.hasOwnProperty(this.itemId) && parseInt(this.summData[this.itemId][3]) >= 1) {
            this.summData[this.itemId][3]--;
        }
        if (this.summData.hasOwnProperty(this.itemId) && parseInt(this.summData[this.itemId][3]) < 1) {
            this.itemChecked = this.parentBox.querySelector('.item__add');
            this.itemChecked.checked = false;
            this.countWrap.style.display = 'none';
            this.parentBox.classList.remove("itembox--active");
            this.parentBox.querySelector('.item__checked').style.display = 'none';
            this.resultWrap = d.querySelector('.result__block');
            this.resultWrap.style.display = 'none';
            delete this.summData[this.itemId];
        }
        if (!this.setSummData_(this.summData)) {
            if (this.countWrap.style.display === 'flex'){
                this.count.innerHTML = `${this.summData[this.itemId][3]}`;
            }
        }
        this.summary_();
        return false;
    }

    this.addItem_ = (e) => {
        this.summData = this.getSummData_() || {};
        this.parentBox = e.target.parentNode;
        this.itemId = this.parentBox.querySelector('.item__add').getAttribute('data-id');
        this.itemTitle = this.parentBox.querySelector('.item__title').innerHTML;
        this.itemPrice = this.parentBox.querySelector('.item__add').getAttribute('price');
        this.itemWeight = this.parentBox.querySelector('.item__add').getAttribute('weight');
        this.count = this.parentBox.querySelector(".addon__count");
        if (this.summData.hasOwnProperty(this.itemId)) {
            if (e.target.getAttribute("type") == "radio"){
            } else if (e.target.getAttribute("type") == "checkbox") {
                e.target.checked = false;
                this.countWrap = this.parentBox.querySelector('.counter-wrap');
                this.countWrap.style.display = 'none';
                delete this.summData[this.itemId];
            }
        } else {
            if (e.target.getAttribute("type") == "radio") {
                delete this.summData[Object.keys(this.summData)[0]];
                this.summData[this.itemId] = [this.itemTitle, this.itemPrice, this.itemWeight, 1];
                this.addons = d.querySelector('.addons');
                this.addons.style.display = 'block';
            } else if (e.target.getAttribute("type") == "checkbox") {
                this.summData[this.itemId] = [this.itemTitle, this.itemPrice, this.itemWeight, 1];
                this.countWrap = this.parentBox.querySelector('.counter-wrap');
                this.countWrap.style.display = 'flex';
                this.resultWrap = d.querySelector('.result__block');
                this.resultWrap.style.display = 'block';
            }
        }
        if (!this.setSummData_(this.summData)) {
            if (this.count) {
                this.count.innerHTML = `${this.summData[this.itemId][3]}`;
            }
        }
        this.summary_();
        return false;
    }

    this.delItem_ = (e) => {
        this.summData = this.getSummData_();
        this.parentBox = e.target.parentNode;
        this.itemId = e.target.getAttribute('data-id');
        this.count = this.parentBox.querySelector(".addon__count");
        if (this.summData.hasOwnProperty(this.itemId)) {
            if (e.target.getAttribute("type") == "checkbox") {
                this.countWrap = this.parentBox.querySelector('.counter-wrap');
                this.countWrap.style.display = 'none';
                this.resultWrap = d.querySelector('.result__block');
                this.resultWrap.style.display = 'none';
                delete this.summData[this.itemId];
            }
            if (!this.setSummData_(this.summData)) {
                if (this.count.style.display === 'flex') {
                    this.count.innerHTML = `${this.summData[this.itemId][3]}`;
                }
            }
        }
        this.summary_();
        return false;
    }

    this.unique_ = (arr) => {
        let result = [];
        nextInput:
            for (let i = 0; i < arr.length; i++) {
              let str = arr[i]; // для каждого элемента
              for (let j = 0; j < result.length; j++) { // ищем, был ли он уже?
                if (result[j] == str) continue nextInput; // если да, то следующий
              }
              result.push(str);
            }
        return result;
    }

    this.summary_ = () => {
        this.summData = this.getSummData_();
        this.totalItems = '';
        this.totalPrice = 0;
        this.totalWeight = 0;
        this.shippingFee = 0;
        this.summ = 0;
        this.arr = [];
        this.xhr = new XMLHttpRequest();
        this.xhr.open('GET', 'weight.json');
        this.xhr.responseType = 'json';
        this.xhr.addEventListener('load', () => {
            if (this.xhr.readyState === 4) {
                this.data = this.xhr.response;
                for (let items in this.summData) {
                    this.totalPrice += parseInt(this.summData[items][1] * this.summData[items][3]);
                    this.totalWeight += parseFloat(this.summData[items][2] * this.summData[items][3]);
                    if (items === Object.keys(this.summData)[0]) {
                        this.rewardTiers = d.querySelector('.reward-tiers__items');
                        this.rewardTiers.innerHTML = '';
                        this.rewardTiers.innerHTML = `${this.summData[items][0]}`;
                    } else {
                        this.arr.push(this.summData[items][0]);
                    }
                }
                this.totalWeight = Math.ceil(this.totalWeight);
                this.data.forEach(el => {
                    if (this.totalWeight === parseInt(el.weight)) {
                        for (let key in el) {
                            if (region === key) {
                                this.shippingFee = el[key];
                            }
                        }
                    } else if (Math.ceil(this.totalWeight) >= parseInt(el.weight)) {
                        for (let key in el) {
                            if (region === key && key === 'USACanada') {
                                this.shippingFee = 144;
                            } else if (region === key && key === 'EU') {
                                this.shippingFee = 144;
                            } else if (region === key && key === 'rotw') {
                                this.shippingFee = 168;
                            }
                        }
                    }
                });
            }
            this.rewardAddons = d.querySelector('.add-ons__items');
            this.rewardAddons.innerHTML = `${this.unique_(this.arr)};`;
			this.weight = d.querySelector(".weight");
			this.pledge = d.querySelector(".pledge");
			this.fee = d.querySelector(".fee");
			this.summary = d.querySelector(".summary");
            this.summ = this.totalPrice + parseInt(this.shippingFee);
            this.weight.innerHTML = `${this.totalWeight}kg`;
            this.pledge.innerHTML = `$${this.totalPrice}`;
            this.fee.innerHTML = `$${this.shippingFee}`;
            this.summary.innerHTML = `$${this.summ}`;
        })
        this.xhr.send();
    }

    this.events_ = () => {
        d.addEventListener('DOMContentLoaded', () => {
            this.deleteSummData_();
        });
        d.addEventListener('change', ()=> {
            for (let i = 0; i < this.itemBox.length; i++) {
                if (this.itemBox[i].querySelector(".item__add").checked) {
                    this.itemBox[i].classList.remove("itembox--inactive");
                    this.itemBox[i].classList.add("itembox--active");
                    this.itemBox[i].querySelector('.item__checked').style.display = 'block';
                } else if (!this.itemBox[i].querySelector(".item__add").checked && this.itemBox[i].querySelector(".item__add").getAttribute("type") == "radio") {
                    this.itemBox[i].classList.remove("itembox--active");
                    this.itemBox[i].classList.add("itembox--inactive");
                    this.itemBox[i].querySelector('.item__checked').style.display = 'none';
                } else if (!this.itemBox[i].querySelector(".item__add").checked) {
                    this.itemBox[i].classList.remove("itembox--active");
                    this.itemBox[i].querySelector('.item__checked').style.display = 'none';
                }
            }
        });
        this.select.addEventListener("change", () => {
            region = this.select.querySelectorAll('option')[this.select.selectedIndex].getAttribute("region");
            this.summCont.style.display = 'block';
            this.summary_();
        });
        for (let i = 0; i < this.itemBox.length; i++) {
            this.addEvent_(this.itemBox[i].querySelector(".item__add"), 'click', (e) => {
                if (e.target.checked) {
                    this.addItem_(e);
                } else if (!e.target.checked) {
                    this.delItem_(e);
                }
            });
            if (this.itemBox[i].querySelector(".item__plus")) {
                this.addEvent_(this.itemBox[i].querySelector(".item__plus"), 'click', (e) => {
                    this.plusItem_(e);
                });
            }
            if (this.itemBox[i].querySelector(".item__remove")) {
                this.addEvent_(this.itemBox[i].querySelector(".item__remove"), 'click', (e) => {
                    this.removeItem_(e);
                });
            }
        }
    }

    this.init_ = () => {
        this.events_();
    }
    this.init_();
}

const calculate = new Calculator();