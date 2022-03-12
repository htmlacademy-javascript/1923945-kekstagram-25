import {createCardDescription} from './data.js';

const USERS_GALLERY_ITEMS_QUANTITY = 25;

const usersGalleryItem = document.querySelector('.pictures');
const usersGalleryItemTemplate = document.querySelector('#picture').content;
const recentUsersGalleryItem = createCardDescription(USERS_GALLERY_ITEMS_QUANTITY);

const usersGalleryItemFragment = document.createDocumentFragment();

recentUsersGalleryItem.forEach(({url, likes, comments}) => {
  const usersGalleryElement = usersGalleryItemTemplate.cloneNode(true);
  usersGalleryElement.querySelector('img').src = url;
  usersGalleryElement.querySelector('.picture__likes').textContent = likes;
  usersGalleryElement.querySelector('.picture__comments').textContent = comments.length;
  usersGalleryItemFragment.appendChild(usersGalleryElement);
});
usersGalleryItem.appendChild(usersGalleryItemFragment);
