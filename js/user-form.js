import {isEscapeKey} from './utils.js';
import {getResetScale} from "./scale-image.js";

const form = document.querySelector('.img-upload__form');
const inputFile = form.querySelector('.img-upload__input');
const imageUploadOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit')

//отключение закрытия формы по ESC при фокусе на хэштеге или на комментарии
const onUserFormEscKeydown = (evt) => {
  if(isEscapeKey(evt) && document.activeElement !== hashtagInput && document.activeElement !== descriptionInput) {
    evt.preventDefault();
    closeForm ();
  }
};

//обработчик открытия формы после выбора файла
inputFile.addEventListener('change',  () => {
  openForm ();
});

//обработчик закрытия формы по клику на иконку
closeButton.addEventListener('click', () => {
  closeForm ();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

function openForm () {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUserFormEscKeydown);
}

function closeForm () {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUserFormEscKeydown);
  getResetScale();
}

export {form, hashtagInput, descriptionInput, closeForm, blockSubmitButton, unblockSubmitButton};

