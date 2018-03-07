const btn = document.querySelector(".portsolio__show-link"),
    list = document.querySelector(".portfolio__list");

btn.addEventListener('click', () => {
    console.log('out');
    // preloader.classList.remove('hide--preloader');
    //firebase load img with preloader
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'ajax.json');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        console.log('in');
        //preloader.classList.add('hide--preloader');
        let data = xhr.response;
        for (let i = 0; i < data.length; i++) {
            // create elements
            let li = document.createElement('li');
            li.classList.add('portfolio__item');
            let div = document.createElement('div');
            div.classList.add('portfolio__img-wrap');
            let img = document.createElement('img');
            img.classList.add('portfolio__item-img');
            let h3 = document.createElement('h3');
            h3.classList.add('portfolio__item-title');
            let p = document.createElement('p');
            p.classList.add('portfolio__descr');
            //set attr
            img.setAttribute('src', data[i].img);
            h3.textContent = data[i].title;
            p.textContent = data[i].descr;
            // append elements
            div.appendChild(img);
            li.appendChild(div);
            li.appendChild(h3);
            li.appendChild(p);
            list.appendChild(li);

        }
    });
    xhr.send();
});