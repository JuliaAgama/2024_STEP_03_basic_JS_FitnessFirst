"use strict";


const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];


/*-------------------------------------------------------------------------------*/
/*                              FUNCTIONS                                        */
/*-------------------------------------------------------------------------------*/


/***** СОРТУВАННЯ  *****/

// записуємо критерій сортування в localStorage:

function saveSorting(elem, key) {
	elem.dataset[key] === '0' ?
		localStorage.removeItem(key) :
		localStorage.setItem(key, elem.dataset[key]);
};


// змінюємо активну кнопку сортування в залежності від localStorage:

function changeActiveSorter(buttonList, key, className) {
  buttonList.forEach((elem, ind) => {
    if (ind === +localStorage.getItem(key)) {
      elem.parentElement.childNodes.forEach(el => el.classList && el.classList.remove(className));
      elem.classList.add(className);
    };
  });
};


// сортуємо картки в залежності від критерія:

function sortCards(cardsContainer, value) {
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



/*-------------------------------------------------------------------------------*/

/***** ФІЛЬТРАЦІЯ  *****/


// записуємо критерії фільтрування в localStorage:

function saveFiltering(form) {
	let formData = new FormData(form);
	for (let entry of formData) {
		entry[1] !== 'all' ?
			localStorage.setItem(entry[0], entry[1]) :
			localStorage.removeItem(entry[0]);
	};
};


// змінюємо активні (checked) радіокнопки фільтрів в залежності від критеріїв в localStorage:

function changeCheckedFilters(inputList, ...criteria) {
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

function filterCards(cardList, ...criteria) {

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



/*-------------------------------------------------------------------------------*/

/***** МОДАЛЬНЕ ВІКНО - КАРТКА ТРЕНЕРА *****/


// створюємо модалку тренера:

function createModal(e, dataArr) {
  let trainerData = dataArr.find((el, ind) => ind === +e.target.dataset.index);
  let modal = document.querySelector('#modal-template').content.cloneNode(true);

  modal.querySelector('.modal__img').setAttribute('src', trainerData.photo);
  modal.querySelector('.modal__name').textContent = `${trainerData['last name']} ${trainerData['first name']}`;
  modal.querySelector('.modal__point--category').textContent = trainerData.category;
  modal.querySelector('.modal__point--experience').textContent = trainerData.experience;
  modal.querySelector('.modal__point--specialization').textContent = trainerData.specialization;
  modal.querySelector('.modal__text').textContent = trainerData.description;

  document.querySelector('footer').after(modal);

  document.querySelector('.modal__body').animate([{ opacity: 0, easing: 'ease-in'}, { opacity: 1 }], 500);  // робимо плавну появу модалки

  // блокуємо скролл на windows
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '19px';
};


// видаляємо модалку тренера:

function removeModal() {
  document.querySelector('.modal').remove();
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '';
};



/*-------------------------------------------------------------------------------*/

/***** PRE-LOADER  *****/


// стоворюємо pre-loader:

function createPreloader() {
  let preloader = document.createElement('div');
  preloader.classList.add('preloader');
  preloader.innerHTML = `
    <svg class="bike" viewBox="0 0 48 30" width="48px" height="30px">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
        <g transform="translate(9.5,19)">
          <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
          <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
            <circle class="bike__spokes" r="5" />
            <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
          </g>
        </g>
        <g transform="translate(24,19)">
          <g class="bike__pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
            <circle class="bike__pedals" r="4" />
            <circle class="bike__pedals" r="4" transform="rotate(180,0,0)" />
          </g>
        </g>
        <g transform="translate(38.5,19)">
          <circle class="bike__tire" r="9" stroke-dasharray="56.549 56.549" />
          <g class="bike__spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
            <circle class="bike__spokes" r="5" />
            <circle class="bike__spokes" r="5" transform="rotate(180,0,0)" />
          </g>
        </g>
        <polyline class="bike__seat" points="14 3,18 3" stroke-dasharray="5 5" />
        <polyline class="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79" />
        <path class="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10" />
        <polyline class="bike__front" points="32.5 2,38.5 19" stroke-dasharray="19 19" />
      </g>
    </svg>
  `;

  document.querySelector('footer').after(preloader);
};


// видаляємо pre-loader:

function removePreloader() {
  document.querySelector('.preloader').remove();
};


// чекаємо завантаження всіх фоточок в контейнері, після чого викликаємо коллбек

function waitLoad(container, callBack) {
  let imgsArr = [...container.querySelectorAll('img')];
  let i = 0;
  function waitLoadRecursion(arr, ind) {
    if (ind < 0 || ind > arr.length) {
      return;
    }
    if (ind === arr.length) { // last img loaded
      callBack();
      return;
    };
    arr[ind].addEventListener('load', (() => {
        return waitLoadRecursion(arr, ind+1);
    }));
  };
    waitLoadRecursion(imgsArr, i);
};



/*-------------------------------------------------------------------------------*/
/*                              MAIN CODE                                        */
/*-------------------------------------------------------------------------------*/


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
