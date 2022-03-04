const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_USER_NAME = [
  'Иван',
  'Сергей',
  'Александр',
  'Степан',
  'Егор',
  'Дмитрий',
];

const FOTO_DESCRIPTION_ARRAY_OBJECTS_LENGTH = 25;

const URL_PHOTOS_RANDOM_NUMBER_MIN = 1;

const URL_PHOTOS_RANDOM_NUMBER_MAX = 25;

const LIKES_RANDOM_NUMBER_MIN = 15;

const LIKES_RANDOM_NUMBER_MAX = 200;

const AVATAR_IMAGE_RANDOM_NUMBER_MIN = 1;

const AVATAR_IMAGE_RANDOM_NUMBER_MAX = 6;

const COMMENTS_ID_ARRAY_LENGTH = 25;

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

const arrayIds = [];

for ( let i = 1; i <= COMMENTS_ID_ARRAY_LENGTH; i++ ) {
  arrayIds.push(i);
}

function shuffle(arr){
  let j, temp;
  for(let i = arr.length - 1; i > 0; i--){
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const shuffleArr = shuffle(arrayIds);

let userId = 0;

const getUserId = function () {
  userId++;
  return userId;
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

let idRandomElement = 0;

const CreateUserPhotoDescription = () => {
  const userName = getRandomArrayElement(COMMENTS_USER_NAME);
  idRandomElement++;
  return {
    id:getUserId(),
    url:`photos/${ getRandomNumber(URL_PHOTOS_RANDOM_NUMBER_MIN, URL_PHOTOS_RANDOM_NUMBER_MAX)  }.jpg`,
    description:`Фотография кота от ${  userName}`,
    likes:getRandomNumber(LIKES_RANDOM_NUMBER_MIN, LIKES_RANDOM_NUMBER_MAX),
    comments:[{
      id:shuffleArr[idRandomElement],
      avatar:`img/avatar-${  getRandomNumber(AVATAR_IMAGE_RANDOM_NUMBER_MIN, AVATAR_IMAGE_RANDOM_NUMBER_MAX)  }.svg`,
      message:getRandomArrayElement(COMMENTS_MESSAGES),
      name:userName,
    }
    ]
  };
};

Array.from({length: FOTO_DESCRIPTION_ARRAY_OBJECTS_LENGTH}, CreateUserPhotoDescription);
