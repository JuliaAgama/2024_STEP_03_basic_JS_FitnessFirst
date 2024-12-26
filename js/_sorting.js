
/***** СОРТУВАННЯ  *****/


// записуємо критерій сортування в localStorage:

export function saveSorting(elem, key) {
	elem.dataset[key] === '0' ?
		localStorage.removeItem(key) :
		localStorage.setItem(key, elem.dataset[key]);
};


// змінюємо активну кнопку сортування в залежності від localStorage:

export function changeActiveSorter(buttonList, key, className) {
  buttonList.forEach((elem, ind) => {
    if (ind === +localStorage.getItem(key)) {
      elem.parentElement.childNodes.forEach(el => el.classList && el.classList.remove(className));
      elem.classList.add(className);
    };
  });
};


// сортуємо картки в залежності від критерія:

export function sortCards(cardsContainer, value) {
  switch (value) {
    case null:
			[...cardsContainer.children].sort((a, b) => +a.dataset.index >= +b.dataset.index ? 1 : -1).forEach(el => cardsContainer.append(el));
			break;
		case '1':
			[...cardsContainer.children].sort((a, b) => a.innerText.toLowerCase() >= b.innerText.toLowerCase() ? 1 : -1).forEach(el => cardsContainer.append(el));
			break;
		case '2':
			[...cardsContainer.children].sort((a, b) => +a.dataset.experience <= +b.dataset.experience ? 1 : -1).forEach(el => cardsContainer.append(el));
			break;
	};
};

