import {form, hashtagInput, descriptionInput, blockSubmitButton, unblockSubmitButton, removeHandlerUserFormEscapeKey} from './user-form.js';
import {getArrayFromString, getLongestWordInArray} from './utils.js';
import {sendData} from './data.js';

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_QUANTITY = 5;
const HASHTAG_PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const symbolsCounter = document.querySelector('.symbols-counter');

const getHashtagPatternConformity = (value) => {
  if (value.length > 0) {
    return value.split(' ').every((element) => HASHTAG_PATTERN.test(element));
  }
  return true;
};

const getHashtagRepeat = (value) => getArrayFromString(value).length === new Set((getArrayFromString(value))).size;
const getHashtagQuantity = (value) => new Set((getArrayFromString(value))).size <= MAX_HASHTAG_QUANTITY;
const getHashtagLength = (value) => getLongestWordInArray((getArrayFromString(value))) <= MAX_HASHTAG_LENGTH;

const pristine = new Pristine(form, {classTo: 'img-upload__text-field', errorTextParent: 'img-upload__text-field'});

pristine.addValidator(hashtagInput, getHashtagPatternConformity, 'Неверное значение ХэшТэга');
pristine.addValidator(hashtagInput, getHashtagRepeat, 'ХэшТэги не должны повторяться');
pristine.addValidator(hashtagInput, getHashtagQuantity, 'Напишите не более пяти Хэштегов');
pristine.addValidator(hashtagInput, getHashtagLength, 'Длинна одного ХэшТэга не должна превышать 20 символов');

const setUserFormSubmit = (url, closeForm, openModalError, openModalSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(url,
        () => {
          unblockSubmitButton();
          closeForm();
          openModalSuccess();
        },
        () => {
          openModalError();
          removeHandlerUserFormEscapeKey();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

descriptionInput.addEventListener('input', () => {
  symbolsCounter.textContent = descriptionInput.value.length;
});

export {setUserFormSubmit, symbolsCounter};
