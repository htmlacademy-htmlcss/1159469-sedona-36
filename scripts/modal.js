const openModalButton = document.querySelector('.promo__button');
const closeModalButton = document.querySelector('.modal__close-button');
const modalElement = document.querySelector('.modal__container');

const showModal = () => {
  modalElement.classList.remove('modal__container--close');
}

const hideModal = () => {
  modalElement.classList.add('modal__container--close');
}

openModalButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', hideModal)
