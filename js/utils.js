const getShuffleArray = (arr) => {
  const shuffleArray = arr.slice();
  let j, temp;
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffleArray[j];
    shuffleArray[j] = shuffleArray[i];
    shuffleArray[i] = temp;
  }
  return shuffleArray;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const getArrayFromString = (string) => {
  const stringValue = string.replace(/ +/g, ' ').trim().toLocaleLowerCase();
  return stringValue.split(' ');
};

const getLongestWordInArray = (arr) => {
  let longestWordSymbols = 0;
  arr.forEach((word) => {
    if (word.length > longestWordSymbols) {
      longestWordSymbols = word.length;
    }
  });
  return longestWordSymbols;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const openMessageError = (message) => {
  const element = document.createElement('p');
  element.textContent = message;
  element.style.color = '#ffffff';
  element.style.background = 'red';
  element.style.display = 'grid';
  element.style.placeContent = 'center';
  element.style.position = 'fixed';
  element.style.width = '100%';
  element.style.top = '0';
  element.style.height = '3em';
  element.style.zIndex = '3';
  document.body.append(element);
};

export {
  getShuffleArray,
  isEscapeKey,
  getArrayFromString,
  getLongestWordInArray,
  debounce,
  openMessageError
};
