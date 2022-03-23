const getRandomNumber = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getMaxLengthString = (verifiableString, maxLength) => verifiableString.length < maxLength;

const getShuffleArray = (arr) => {
  let j, temp;
  for(let i = arr.length - 1; i > 0; i--){
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getArrayFromString = (string) => {
  const stringValue = string.replace(/ +/g, ' ').trim().toLocaleLowerCase();
  return stringValue.split(' ');
};

const getLongestWordInArray = (arr) => {
  let longestWord = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord){
      longestWord = arr[i].length;
    }
  }
  return longestWord;
};

export {getRandomNumber, getMaxLengthString, getShuffleArray, getRandomArrayElement, isEscapeKey, getArrayFromString, getLongestWordInArray};

