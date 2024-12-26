
/***** ФІЛЬТРАЦІЯ  *****/


// записуємо критерії фільтрування в localStorage:

export function saveFiltering(form) {
	let formData = new FormData(form);
	for (let entry of formData) {
		entry[1] !== 'all' ?
			localStorage.setItem(entry[0], entry[1]) :
			localStorage.removeItem(entry[0]);
	};
};


// змінюємо активні (checked) радіокнопки фільтрів в залежності від критеріїв в localStorage:

export function changeCheckedFilters(inputList, ...criteria) {
	criteria.forEach(key => {
		if (localStorage.getItem(key)) {
			let matchedElement = [...inputList].find(el => el.value === localStorage.getItem(key));
			if (matchedElement) {
				[...inputList].filter(el => el.name === key).forEach(el => el.removeAttribute('checked'));
				matchedElement.setAttribute('checked', true);
			};
		};
	});
};


// фільтруємо картки в залежності від критеріїв в localStorage:

export function filterCards(cardList, ...criteria) {

	cardList.forEach(cardItem => {
		cardItem.setAttribute('hidden', 'true');
	});

	let allFilteredCards = [...cardList];

	criteria.forEach(el => {
		localStorage.getItem(el) && (allFilteredCards = allFilteredCards.filter(cardItem => cardItem.dataset[el] === localStorage.getItem(el)));
	});

	allFilteredCards.forEach(cardItem => {
		cardItem.removeAttribute('hidden');
	});
};
