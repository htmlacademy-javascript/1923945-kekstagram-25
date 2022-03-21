import {form, hashtagInput} from './user-form.js';

//validate hashtag via JS
form.addEventListener('submit', function (evt) {
  let stringValue = hashtagInput.value.toLocaleLowerCase();
  const arrayFromString = stringValue.split(' ');
  const setFromArray = new Set(arrayFromString);
  const getCheckRepeat = () => arrayFromString.length === setFromArray.size && setFromArray.size < 6;
  if(!getCheckRepeat()) {
    evt.preventDefault();
  }
})
