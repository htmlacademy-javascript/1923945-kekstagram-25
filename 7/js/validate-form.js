import {form, hashtagInput, descriptionInput} from './user-form.js';
import {getArrayFromString, getLongestWordInArray} from './utils.js';

const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_QUANTITY = 5;

const hashtagPattern = /^(#[A-Za-zА-Яа-яЁё0-9]+[\s+]*)*$/;
const symbolsCounter = document.querySelector('.symbols-counter');

const getHashtagPatternConformity = () => hashtagPattern.test(hashtagInput.value);
const getHashtagRepeat = () => getArrayFromString(hashtagInput.value).length === new Set((getArrayFromString(hashtagInput.value))).size;
const getHashtagQuantity = () => new Set((getArrayFromString(hashtagInput.value))).size <= MAX_HASHTAG_QUANTITY;
const getHashtagLength = () => getLongestWordInArray((getArrayFromString(hashtagInput.value))) <= MAX_HASHTAG_LENGTH ;

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
