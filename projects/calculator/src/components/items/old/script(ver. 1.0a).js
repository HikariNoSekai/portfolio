var d = document,
    itemBox = d.querySelectorAll(".item__box"), //блок предмета
    summCont = d.querySelector('.results'), // блок вывода данных
    select = d.querySelector(".region__select"),
    region;

select.addEventListener("change", function() { //получения региона
    region = select.querySelectorAll('option')[select.selectedIndex].getAttribute("region");
    Summary();
})

// Получаем данные из LocalStorage
function getSummData() {
    return JSON.parse(localStorage.getItem('summ'));
}

// Записываем данные в LocalStorage
function setSummData(obj) {
    localStorage.setItem('summ', JSON.stringify(obj));
    return false;
}

function deleteSummData() {
    return localStorage.removeItem('summ');
}

// Функция кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler) {
    elem.addEventListener(type, handler, false);
    return false;
}

//Устанавливаем обработчик события на каждую radio/checkbox|кнопку
for (var i = 0; i < itemBox.length; i++) {
    addEvent(itemBox[i].querySelector(".item__add"), 'click', function(e) { // for all checkbox and radio
        if (this.checked) {
            addItem(e);
        } else if (!this.checked) {
            delItem(e);
        }
    });
    if (itemBox[i].querySelector(".item__plus")) { // for plus btns
        addEvent(itemBox[i].querySelector(".item__plus"), 'click', function(e) {
            plusItem(e);
        });
    }
    if (itemBox[i].querySelector(".item__remove")) { //for remove btns
        addEvent(itemBox[i].querySelector(".item__remove"), 'click', function(e) {
            removeItem(e);
        });
    }
}

// for + BTNs
function plusItem(e) {
    var summData = getSummData() || {}, // получаем данные или создаём новый объект, если данных еще нет
        parentBox = e.target.parentNode, // родительский элемент кнопки
        itemId = parentBox.querySelector('.item__add').getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.item__title').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.item__add').getAttribute('price'), // стоимость товара
        itemWeight = parentBox.querySelector('.item__add').getAttribute('weight'), //вес товара
        count = parentBox.querySelector(".addon__count").innerHTML; //count of addons
    if (summData.hasOwnProperty(itemId)) { // если такой товар уже есть, то добавляем +1 к его количеству
        summData[itemId][3]++;
    } else { // если товара еще нет, то добавляем в объект
        summData[itemId] = [itemTitle, itemPrice, itemWeight, 1];
    }
    // Обновляем данные в LocalStorage
    if (!setSummData(summData)) {
        var countNew = parentBox.querySelector(".addon__count");
        countNew.innerHTML = `${summData[itemId][3]}`;
        // текст или разметка когда товар добавляется
    }
    Summary();
    return false;
}

// for -BTNs
function removeItem(e) {
    var summData = getSummData(), // получаем данные или создаём новый объект, если данных еще нет
        parentBox = e.target.parentNode, // родительский элемент кнопки
        itemId = parentBox.querySelector('.item__add').getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.item__title').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.item__add').getAttribute('price'), // стоимость товара
        itemWeight = parentBox.querySelector('.item__add').getAttribute('weight'), //вес товара
        count = parentBox.querySelector(".addon__count").innerHTML; //count of addons
    if (summData.hasOwnProperty(itemId) && parseInt(summData[itemId][3]) >= 1) { // если такой товар уже есть, то отнимаем -1 к его количеству
        summData[itemId][3]--;
    }
    if (summData.hasOwnProperty(itemId) && parseInt(summData[itemId][3]) < 1) {
        var itemChecked = parentBox.querySelector('.item__add');
        itemChecked.checked = false;
        var countRemove = parentBox.querySelector('.item__remove'),
            countPlus = parentBox.querySelector('.item__plus'),
            addonCount = parentBox.querySelector('.addon__count');
        countRemove.style.display = 'none';
        countPlus.style.display = 'none';
        addonCount.style.display = 'none';
        delete summData[itemId];
    }
    // Обновляем данные в LocalStorage
    if (!setSummData(summData)) {
        var countNew = parentBox.querySelector(".addon__count");
        if (countNew.style.display === 'block') countNew.innerHTML = `${summData[itemId][3]}`;
        // текст или разметка когда товар добавляется
    }
    Summary();
    return false;
}

//for uncheck checkbox
function delItem(e) {
    let summData = getSummData(), // получаем данные или создаём новый объект, если данных еще нет
        parentBox = e.target.parentNode, // родительский элемент кнопки
        itemId = e.target.getAttribute('data-id'); // ID товара
    if (summData.hasOwnProperty(itemId)) { // если такой товар уже есть
        if (e.target.getAttribute("type") == "radio") {
            //for radio
        } else if (e.target.getAttribute("type") == "checkbox") {
            //for checkbox
            var countRemove = parentBox.querySelector('.item__remove'),
                countPlus = parentBox.querySelector('.item__plus'),
                addonCount = parentBox.querySelector('.addon__count');
            countRemove.style.display = 'none';
            countPlus.style.display = 'none';
            addonCount.style.display = 'none';
            delete summData[itemId];
        }
        // Обновляем данные в LocalStorage
        if (!setSummData(summData)) {
            var countNew = parentBox.querySelector(".addon__count");
            if (countNew.style.display === 'block') countNew.innerHTML = `${summData[itemId][3]}`;
            // текст или разметка когда товар добавляется
        }
    }
    Summary();
    return false;
}

function addItem(e) {
    let summData = getSummData() || {}, // получаем данные или создаём новый объект, если данных еще нет
        parentBox = e.target.parentNode, // родительский элемент кнопки
        itemId = e.target.getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.item__title').innerHTML, // название товара
        itemPrice = e.target.getAttribute('price'), // стоимость товара
        itemWeight = e.target.getAttribute('weight'); //вес товара
    if (summData.hasOwnProperty(itemId)) { // если такой товар уже есть
        if (e.target.getAttribute("type") == "radio") {
            //for radio
        } else if (e.target.getAttribute("type") == "checkbox") {
            //for checkbox
            e.targed.checked = false;
            var countRemove = parentBox.querySelector('.item__remove'),
                countPlus = parentBox.querySelector('.item__plus'),
                addonCount = parentBox.querySelector('.addon__count');
            countRemove.style.display = 'none';
            countPlus.style.display = 'none';
            addonCount.style.display = 'none';
            delete summData[itemId];
        }
    } else { // если товара еще нет, то добавляем в объект

        if (e.target.getAttribute("type") == "radio") {
            delete summData[Object.keys(summData)[0]];
            summData[itemId] = [itemTitle, itemPrice, itemWeight, 1];
            //for radio
            var addons = d.querySelector('.addons');
            addons.style.display = 'block';
        } else if (e.target.getAttribute("type") == "checkbox") {
            summData[itemId] = [itemTitle, itemPrice, itemWeight, 1];
            //for checkbox
            var countRemove = parentBox.querySelector('.item__remove'),
                countPlus = parentBox.querySelector('.item__plus'),
                addonCount = parentBox.querySelector('.addon__count');
            countRemove.style.display = 'block';
            countPlus.style.display = 'block';
            addonCount.style.display = 'block';
        }
    }
    // Обновляем данные в LocalStorage
    if (!setSummData(summData)) {
        // текст или разметка когда товар добавляется
        if (addonCount) {
            addonCount.innerHTML = `${summData[itemId][3]}`;
        }
    }
    Summary();
    return false;
}


// подсчёт и вывод результатов
function Summary() {
    var summData = getSummData(),
        totalItems = '',
        totalPrice = 0,
        totalWeight = 0,
        shippingFee = 0,
        summ = 0;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'weight.json'); //цены доставки по весу
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        if (xhr.readyState === 4) {
            var data = xhr.response;
            console.log(data);
            for (var items in summData) {
                totalPrice += parseInt(summData[items][1] * summData[items][3]);
                totalWeight += parseFloat(summData[items][2] * summData[items][3]);
            }
            totalWeight = Math.ceil(totalWeight);
            data.forEach(el => {
                if (totalWeight === parseInt(el.weight)) {
                    for (key in el) {
                        if (region === key) {
                            shippingFee = el[key];
                        }
                    }
                } else if (Math.ceil(totalWeight) >= parseInt(el.weight)) {
                    for (key in el) {
                        if (region === key && key === 'USACanada') {
                            shippingFee = 144;
                        } else if (region === key && key === 'EU') {
                            shippingFee = 144;
                        } else if (region === key && key === 'rotw') {
                            shippingFee = 168;
                        }
                    }
                }
            });
        }
        summ = totalPrice + parseInt(shippingFee);
        weight = d.querySelector(".weight");
        weight.innerHTML = `${totalWeight} kg`;
        pledge = d.querySelector(".pledge");
        pledge.innerHTML = `$ ${totalPrice}`;
        fee = d.querySelector(".fee");
        fee.innerHTML = `$ ${shippingFee}`;
        summary = d.querySelector(".summary");
        summary.innerHTML = `$ ${summ}`;
    })
    xhr.send();

}

d.addEventListener('DOMContentLoaded', () => {
    deleteSummData();
});