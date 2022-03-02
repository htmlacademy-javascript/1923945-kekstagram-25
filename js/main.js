//Информация взята с MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = function (min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomNumber(0, 100);

const getMaxLengthString = function (verifiableString, maxLength) {
  return verifiableString.length <= maxLength;
};

getMaxLengthString('string', 10);

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USER_NAMES = [
  'Иван',
  'Сергей',
  'Александр',
  'Степан',
  'Егор',
  'Дмитрий',
];

const OBJECTS_LENGTH = 25;

const commentsId = Array.from({length: 25}, (v, i) => ++i);
const getCommentsId = function () {
  const commentId = commentsId.splice(getRandomNumber(0, commentsId.length - 1), 1);
  return `${commentId}`;
};

const usersId = Array.from({length: 25}, (v, i) => ++i);
const getUsersId = function () {
  const userId = usersId.splice(getRandomNumber(0, usersId.length - 1), 1);
  return `${userId}`;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const CreateUserPhotoDescription = () => ({
  id:getCommentsId(),
  url:`photos/${ getRandomNumber(1, 25)  }.jpg`,
  description:'Фотография кота',
  likes:getRandomNumber(12, 200),
  comments:[{
    id:getUsersId(),
    avatar:`img/avatar-${  getRandomNumber(1, 6)  }.svg`,
    message:getRandomArrayElement(MESSAGES),
    name:getRandomArrayElement(USER_NAMES),
  }
  ]
});

Array.from({length: OBJECTS_LENGTH}, CreateUserPhotoDescription);
