import {isEscapeKey} from './utils.js';
import {addHandlerUserFormEscapeKey} from './user-form.js';

const onModalSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModalSuccess();
  }
};

const onModalErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModalError();
  }
};

const openModalSuccess = () => {
  const modalSuccessTemplate = document.querySelector('#success').content;
  const modalSuccessElement = modalSuccessTemplate.cloneNode(true);
  document.body.appendChild(modalSuccessElement);
  const successButton = document.querySelector('.success__button');
  const modalSuccess = document.querySelector('.success');

  document.addEventListener('keydown', onModalSuccessEscKeydown);

  modalSuccess.addEventListener('click', (evt) => {
    if (evt.target === modalSuccess) {
      closeModalSuccess();
    }
  });

  successButton.addEventListener('click', () => {
    closeModalSuccess();
  });
};

const openModalError = () => {
  const modalErrorTemplate = document.querySelector('#error ').content;
  const modalErrorElement = modalErrorTemplate.cloneNode(true);
  document.body.appendChild(modalErrorElement);
  const errorButton = document.querySelector('.error__button');
  const modalError = document.querySelector('.error');

  document.addEventListener('keydown', onModalErrorEscKeydown);

  modalError.addEventListener('click', (evt) => {
    if (evt.target === modalError) {
      closeModalError();
    }
  });

  errorButton.addEventListener('click', () => {
    closeModalError();
  });
};

function closeModalSuccess () {
  document.body.removeChild(document.body.lastElementChild);
  document.removeEventListener('keydown', onModalSuccessEscKeydown);
}

function closeModalError () {
  document.body.removeChild(document.body.lastElementChild);
  document.removeEventListener('keydown', onModalErrorEscKeydown);
  addHandlerUserFormEscapeKey();
}


export {openModalSuccess, openModalError};
