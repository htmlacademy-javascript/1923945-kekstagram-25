import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const pictureView = bigPicture.querySelector('.big-picture__img');
const pictureDescription = bigPicture.querySelector('.social__caption');
const pictureCancelButton = bigPicture.querySelector('#picture-cancel');
const fullPicture = pictureView.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const socialComment = socialComments.querySelector('.social__comment');

const onFullSizePictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFullSizePicture();
  }
};

const createComments = (picture) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < picture.length; i++) {
    const element = socialComment.cloneNode(true);
    element.querySelector('.social__picture').src = picture[i].avatar;
    element.querySelector('.social__picture').alt = picture[i].name;
    element.querySelector('.social__text').textContent = picture[i].message;
    fragment.appendChild(element);
  }
  socialComments.appendChild(fragment);
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
  document.addEventListener('keydown', onFullSizePictureEscKeydown);
  createComments(picture.comments);
  pictureCancelButton.addEventListener('click', () => {
    closeFullSizePicture();
  });
};

function closeFullSizePicture() {
  bigPicture.classList.add('hidden');
  socialCommentsCount.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullSizePictureEscKeydown);
}

export {openFullSizePicture};
