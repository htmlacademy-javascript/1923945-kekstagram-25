import {getPictureData} from './full-size-image.js';
import {getShuffleArray} from './utils.js';

const FILTER_RANDOM_MAX_ITEMS = 10;

const usersGalleryItem = document.querySelector('.pictures');
const usersGalleryItemTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersGalleryItemFragment = document.createDocumentFragment();
const imageFilters = document.querySelector('.img-filters');
const imageFiltersForm = document.querySelector('.img-filters__form');

window.addEventListener('load', () => {
  imageFilters.classList.remove('img-filters--inactive');
});

const createRecentUsersGalleryItem = (recentUsersGalleryItem) => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());
  recentUsersGalleryItem.forEach((element) => {
    const usersGalleryElement = usersGalleryItemTemplate.cloneNode(true);
    usersGalleryElement.querySelector('img').src = element.url;
    usersGalleryElement.querySelector('.picture__likes').textContent = element.likes;
    usersGalleryElement.querySelector('.picture__comments').textContent = element.comments.length;
    usersGalleryElement.addEventListener('click', () => {
      getPictureData(element);
    });
    usersGalleryItemFragment.appendChild(usersGalleryElement);
  });
  usersGalleryItem.appendChild(usersGalleryItemFragment);
};

const setFilter = (data, cb) => {
  imageFiltersForm.addEventListener('click', (evt) => {
    imageFiltersForm.querySelectorAll('.img-filters__button').forEach((element) => element.classList.remove('img-filters__button--active'));
    evt.target.classList.add('img-filters__button--active');
    switch (evt.target.id) {
      case 'filter-default' :
        cb(data);
        break;
      case 'filter-random':
        cb(getShuffleArray(data).slice(0, FILTER_RANDOM_MAX_ITEMS));
        break;
      case 'filter-discussed':
        cb(data.slice().sort(getSortCommentsAsc));
        break;
    }
  });
};

function getSortCommentsAsc(a, b) {
  return b.comments.length - a.comments.length;
}

export {createRecentUsersGalleryItem, setFilter};
