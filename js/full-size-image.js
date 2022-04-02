import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const pictureView  = bigPicture.querySelector('.big-picture__img');
const pictureDescription = bigPicture.querySelector('.social__caption');
const pictureCancelButton = bigPicture.querySelector('#picture-cancel');
const fullPicture = pictureView.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');

const onFullSizePictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFullSizePicture();
  }
};

const addHandlerFullSizePictureEscapeKey = () => {
  document.addEventListener('keydown', onFullSizePictureEscKeydown);
};

const removeHandlerFullSizePictureEscapeKey = () => {
  document.removeEventListener('keydown', onFullSizePictureEscKeydown);
};

const createComments = (picture) => {
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < picture.length; i++) {
    const commentContainer = document.createElement('li');
    commentContainer.classList.add('social__comment');
    commentContainer.innerHTML = `<img class="social__picture" src="${picture[i].avatar}" alt="${picture[i].name}" width="35" height="35"><p class="social__text">${picture[i].message}</p>`;
    commentsFragment.appendChild(commentContainer);
  }
  socialComments.appendChild(commentsFragment);
};

const openFullSizePicture = (picture) => {
  fullPicture.src = picture.url;
  fullPicture.alt = 'фотография';
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;
  commentsCount.textContent = picture.comments.length;
  bigPicture.classList.remove('hidden');
  socialCommentsCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  document.body.classList.add('modal-open');

  addHandlerFullSizePictureEscapeKey();
  createComments(picture.comments);
  pictureCancelButton.addEventListener('click', () => {
    closeFullSizePicture();
  });
};

function closeFullSizePicture () {
  bigPicture.classList.add('hidden');
  socialCommentsCount.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  removeHandlerFullSizePictureEscapeKey();
}

export {openFullSizePicture};
