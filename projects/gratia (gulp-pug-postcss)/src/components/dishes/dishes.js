const btn = document.getElementById('more-dishes'),
dishesList = document.querySelector('.dishes__list');
var num = 0;
function loadAjaxData() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'dishes.json');
	xhr.responseType = 'json';
	xhr.addEventListener('load', ()=> {
		if (xhr.readyState === 4){
			let data = xhr.response;
			if (num < data.length){
				let li = document.createElement('li');
				li.classList.add('dishes__item');
				let figure = document.createElement('figure');
				figure.classList.add('dishcard__img-wrap');
				let img = document.createElement('img');
				img.classList.add('dishcard__img');
				img.setAttribute('src', data[num].img);
				img.setAttribute('title', data[num].title);
				img.setAttribute('alt', data[num].title);
				let figcaption = document.createElement('figcaption');
				let div = document.createElement('div');
				div.classList.add('dishcard__text-wrap');
				let h3 = document.createElement('h3');
				h3.classList.add('dishcard__title', 'gratia-heading');
				h3.textContent = data[num].title;
				let line = document.createElement('div');
				line.classList.add('dishcard__line');
				let p = document.createElement('p');
				p.classList.add('dishcard__descr', 'gratia-descr');
				p.textContent = data[num].descr;
				let a = document.createElement('a');
				a.classList.add('dischcard__link');
				a.setAttribute('href', data[num].img);
				a.setAttribute('target', '_blank');
				div.appendChild(h3);
				div.appendChild(line);
				div.appendChild(p);
				figcaption.appendChild(div);
				figcaption.appendChild(a);
				figure.appendChild(img);
				figure.appendChild(figcaption);
				li.appendChild(figure);
				dishesList.appendChild(li);
				num ++;
				if (num === data.length) {
					btn.style.display = 'none';
				}
			}
		}
	})
	xhr.send();
}
btn.addEventListener('click', loadAjaxData);