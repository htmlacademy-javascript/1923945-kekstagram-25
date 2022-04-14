import {isEscapeKey} from './utils.js';

const COMMENTS_QUANTITY_MULTIPLE = 5;

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

let pictureData;

const onFullSizePictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFullSizePicture();
  }
};

const onClickButtonClosePicture = () => closeFullSizePicture();

let showComments = COMMENTS_QUANTITY_MULTIPLE;

const createComments = (comments) => {
  if (showComments > comments.length) {
    showComments = comments.length;
  }
  if (showComments === comments.length) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  socialCommentsCount.innerHTML = '';
  socialCommentsCount.innerHTML = `${showComments} из <span class="comments-count">${comments.length}</span> комментариев`;
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < showComments; i++) {
    const element = socialComment.cloneNode(true);
    element.querySelector('.social__picture').src = comments[i].avatar;
    element.querySelector('.social__picture').alt = comments[i].name;
    element.querySelector('.social__text').textContent = comments[i].message;
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
  document.body.classList.add('modal-open');
  createComments(picture.comments);
  document.addEventListener('keydown', onFullSizePictureEscKeydown);
  commentsLoaderButton.addEventListener('click', onClickButtonShowMore);
  pictureCancelButton.addEventListener('click', onClickButtonClosePicture);
};

const getPictureData = (data) => {
  pictureData = data;
  openFullSizePicture(data);
};

function closeFullSizePicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullSizePictureEscKeydown);
  commentsLoaderButton.removeEventListener('click', onClickButtonShowMore);
  pictureCancelButton.removeEventListener('click', onClickButtonClosePicture);
  showComments = COMMENTS_QUANTITY_MULTIPLE;
}

function onClickButtonShowMore () {
  if (showComments + COMMENTS_QUANTITY_MULTIPLE < pictureData.comments.length) {
    showComments = showComments + COMMENTS_QUANTITY_MULTIPLE;
  } else {
    showComments = pictureData.comments.length;
  }
  createComments(pictureData.comments);
}

export {getPictureData};
