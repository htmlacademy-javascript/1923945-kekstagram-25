//Информация взята с MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = function (min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomNumber(0, 100);

const commentField = document.querySelector('.text__description');

const getMaxLengthString = function (verifiableString, maxLength) {
  verifiableString.oninput = function () {
    if (verifiableString.value.length <= maxLength) {
      return true;
    }
    else {
      return false;
    }
  };
};

getMaxLengthString(commentField, 140);
