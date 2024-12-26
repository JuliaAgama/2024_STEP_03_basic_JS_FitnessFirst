
/***** МОДАЛЬНЕ ВІКНО - КАРТКА ТРЕНЕРА *****/


// створюємо модалку тренера:

export function createModal(e, dataArr) {
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

export function removeModal() {
  document.querySelector('.modal').remove();
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '';
};
