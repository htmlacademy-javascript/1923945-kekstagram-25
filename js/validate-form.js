import {form, hashtagInput, descriptionInput} from './user-form.js';

import {getArrayFromString, getSetFromArray, getLongestWordInArray, getPatternConformity} from './utils.js';

const hashtagPattern = /^(#[A-Za-zА-Яа-яЁё0-9]+[\s+]*)*$/;
const symbolsCounter = document.querySelector('.symbols-counter');

const getHashtagPatternConformity = () => getPatternConformity(hashtagPattern, hashtagInput.value);
const getHashtagRepeat = () => getArrayFromString(hashtagInput).length === getSetFromArray(getArrayFromString(hashtagInput)).size;
const getHashtagQuantity = () => getSetFromArray(getArrayFromString(hashtagInput)).size <6;
const getHashtagLength = () => getLongestWordInArray((getArrayFromString(hashtagInput))) < 21;

const pristine = new Pristine(form, {classTo: 'img-upload__text-field', errorTextParent: 'img-upload__text-field'});

pristine.addValidator(hashtagInput, getHashtagPatternConformity, 'Неверное значение ХэшТэга');
pristine.addValidator(hashtagInput, getHashtagRepeat, 'ХэшТэги не должны повторяться');
pristine.addValidator(hashtagInput, getHashtagQuantity, 'Напишите не более пяти Хэштегов');
pristine.addValidator(hashtagInput, getHashtagLength, 'Длинна одного ХэшТэга не должна превышать 20 символов');

form.addEventListener('submit',  (evt) => {
  if(!pristine.validate()) {
    evt.preventDefault();
  }
});

descriptionInput.addEventListener('input', () => {
  symbolsCounter.textContent = descriptionInput.value.length;
});
