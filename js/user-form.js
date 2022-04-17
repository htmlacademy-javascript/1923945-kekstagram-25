import {isEscapeKey} from './utils.js';
import {getDefaultScale, getImagePreview, previewImage} from './scale-image.js';
import {getDefaultEffects} from './effect-image.js';
import {symbolsCounter} from './validate-form.js';

const form = document.querySelector('.img-upload__form');
const inputFile = form.querySelector('.img-upload__input');
const imageUploadOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const hashtagInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const onUserFormEscKeydown = (evt) => {
  if (isEscapeKey(evt) && document.activeElement !== hashtagInput && document.activeElement !== descriptionInput) {
    evt.preventDefault();
    closeForm();
  }
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const addHandlerUserFormEscapeKey = () => {
  document.addEventListener('keydown', onUserFormEscKeydown);
};

const removeHandlerUserFormEscapeKey = () => {
  document.removeEventListener('keydown', onUserFormEscKeydown);
};

const openForm = () => {
  imageUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addHandlerUserFormEscapeKey();
};

function closeForm () {
  imageUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeHandlerUserFormEscapeKey();
  inputFile.value = '';
  hashtagInput.value = '';
  descriptionInput.value = '';
  getDefaultScale();
  getDefaultEffects();
  previewImage.src = '';
  symbolsCounter.textContent = 0;
}

inputFile.addEventListener('change', () => {
  getImagePreview(inputFile.files[0]);
  openForm();
});

closeButton.addEventListener('click', () => {
  closeForm();
});

export {form, hashtagInput, descriptionInput, closeForm, blockSubmitButton, unblockSubmitButton, addHandlerUserFormEscapeKey, removeHandlerUserFormEscapeKey};
