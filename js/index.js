"use strict";

import { DATA } from './_data.js';

import { saveSorting } from './_sorting.js';
import { changeActiveSorter } from './_sorting.js';
import { sortCards } from './_sorting.js';

import { saveFiltering } from './_filtering.js';
import { changeCheckedFilters } from './_filtering.js';
import { filterCards } from './_filtering.js';

import { createModal } from './_modal.js';
import { removeModal } from './_modal.js';

import { createPreloader } from './_preloader.js';
import { removePreloader } from './_preloader.js';
import { waitLoad } from './_preloader.js';

let allCardsContainer = document.querySelector('.trainers-cards__container');
let allSortingButtons = document.querySelectorAll('.sorting__btn');
let allFilterInputs = document.querySelectorAll('.filters__input');

document.title = 'Fitness First';


// запускаємо preloader:

createPreloader();

// створюємо картки тренерів:

let cardsFragment = document.createDocumentFragment();

DATA.forEach((elem, index) => {
	let card = document.querySelector('#trainer-card').content.cloneNode(true);

	card.querySelector('li').dataset.index = index;
	card.querySelector('li').dataset.experience = parseInt(elem.experience);

	card.querySelector('li').dataset.direction = [...allFilterInputs].find(input => input.nextElementSibling.innerText.toLowerCase().includes(elem.specialization.toLowerCase())).value.toLowerCase();

	card.querySelector('li').dataset.category = [...allFilterInputs].find(input => input.nextElementSibling.innerText.toLowerCase().includes(elem.category.toLowerCase())).value.toLowerCase();

	card.querySelector('img').setAttribute('src', elem.photo);
	card.querySelector('p').textContent = `${ elem['last name'] } ${ elem['first name'] }`;
	card.querySelector('button').dataset.index = index;

	cardsFragment.appendChild(card);
});


let delay = 500;
setTimeout(() => { //імітуємо довгу загрузку фоточок

	// вставляємо картки тренерів:

	allCardsContainer.append(cardsFragment.cloneNode(true));

	waitLoad(allCardsContainer, removePreloader); //container, callBack


	// показуємо блоки з фільтрами та сортуванням:

	document.querySelector('.sorting').removeAttribute('hidden');
	document.querySelector('.sidebar').removeAttribute('hidden');


	// сортуємо та фільтруємо картки в залежності від критеріів в localStorage:

	allSortingButtons.forEach((el, ind) => el.dataset.sorter = ind);

	changeActiveSorter(allSortingButtons, 'sorter', 'sorting__btn--active'); // buttonList, key, className
	sortCards(allCardsContainer, localStorage.getItem('sorter')); ///cardsContainer, key

	changeCheckedFilters(allFilterInputs, 'direction', 'category'); // inputList, ...criteria
	filterCards(allCardsContainer.querySelectorAll('.trainer'), 'direction', 'category'); // cardList, ...criteria


	// створюємо та запускаємо слухачів:

	document.addEventListener('click', e => {

		if (e.target.closest('.trainer__show-more')) {
			e.preventDefault();
			createModal(e, DATA); // event, dataArr
		};

		if (e.target.closest('.modal__close')) {
			e.preventDefault();
			removeModal();
		};

		if (e.target.closest('.sorting__btn')) {
			e.preventDefault();
			saveSorting(e.target, 'sorter'); //elem, key
			changeActiveSorter(allSortingButtons, 'sorter', 'sorting__btn--active'); //buttonList, key, className
			sortCards(allCardsContainer, localStorage.getItem('sorter')); //cardsContainer, key
		};

		if (e.target.closest('.filters__submit')) {
			e.preventDefault();
			createPreloader();
			setTimeout(() => {
				saveFiltering(e.target.closest('form')); // form
				changeCheckedFilters(allFilterInputs, 'direction', 'category'); // inputList, ...criteria
				filterCards(allCardsContainer.querySelectorAll('.trainer'), 'direction', 'category'); // cardList, ...criteria
				removePreloader();
			}, delay)
		};
	});
}, delay);
