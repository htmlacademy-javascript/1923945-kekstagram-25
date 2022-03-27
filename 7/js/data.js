import {getRandomNumber, getShuffleArray, getRandomArrayElement} from './utils.js';

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

const PHOTO_DESCRIPTION_FIRST_PHRASE = [
  'Фотография',
  'Изображение',
  'Картинка',
  'Рисунок',
  'Портрет',
];

const PHOTO_DESCRIPTION_SECOND_PHRASE = [
  'кота',
  'кошки',
  'котёнка',
];

const LIKES_RANDOM_NUMBER_MIN = 15;

const LIKES_RANDOM_NUMBER_MAX = 200;

const AVATAR_IMAGE_RANDOM_NUMBER_MIN = 1;

const AVATAR_IMAGE_RANDOM_NUMBER_MAX = 6;

const COMMENTS_ID_ARRAY_LENGTH = 25;

const COMMENTS_RANDOM_NUMBER_MIN = 1;

const COMMENTS_RANDOM_NUMBER_MAX = 6;

const arrayIds = [];

for ( let i = 1; i <= COMMENTS_ID_ARRAY_LENGTH; i++ ) {
  arrayIds.push(i);
}

const shuffleArray = getShuffleArray(arrayIds);

const getImageDescripton = (userName) => {
  const firstPhrase = getRandomArrayElement(PHOTO_DESCRIPTION_FIRST_PHRASE);
  const secondPhrase = getRandomArrayElement(PHOTO_DESCRIPTION_SECOND_PHRASE);
  return `${firstPhrase} ${secondPhrase} - разместил ${userName}`;
};

const createComment = (index, userName) => ({
  id:shuffleArray[index],
  avatar:`img/avatar-${  getRandomNumber(AVATAR_IMAGE_RANDOM_NUMBER_MIN, AVATAR_IMAGE_RANDOM_NUMBER_MAX)  }.svg`,
  message:getRandomArrayElement(COMMENTS_MESSAGES),
  name:userName,
});

const createUserPhotoDescription = (id) => {
  const userName = getRandomArrayElement(COMMENTS_USER_NAME);
  return {
    id:id+1,
    url:`photos/${ id+1  }.jpg`,
    description:getImageDescripton(userName),
    likes:getRandomNumber(LIKES_RANDOM_NUMBER_MIN, LIKES_RANDOM_NUMBER_MAX),
    comments:Array.from({length: getRandomNumber(COMMENTS_RANDOM_NUMBER_MIN, COMMENTS_RANDOM_NUMBER_MAX)},(value, index)=> createComment(index, userName))
  };
};

const createCardDescription = (quanity) => Array.from({ length: quanity}, (value, index) => createUserPhotoDescription(index));

export {createCardDescription};
