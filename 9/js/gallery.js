import {openFullSizePicture} from './full-size-image.js';

const usersGalleryItem = document.querySelector('.pictures');
const usersGalleryItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersGalleryItemFragment = document.createDocumentFragment();

const createRecentUsersGalleryItem = (recentUsersGalleryItem) => {
  recentUsersGalleryItem.forEach((element) => {
    const usersGalleryElement = usersGalleryItemTemplate.cloneNode(true);
    usersGalleryElement.querySelector('img').src = element.url;
    usersGalleryElement.querySelector('.picture__likes').textContent = element.likes;
    usersGalleryElement.querySelector('.picture__comments').textContent = element.comments.length;
    usersGalleryElement.addEventListener('click', () => {
      openFullSizePicture(element);
    });
    usersGalleryItemFragment.appendChild(usersGalleryElement);
  });
  usersGalleryItem.appendChild(usersGalleryItemFragment);
};

export {createRecentUsersGalleryItem};
