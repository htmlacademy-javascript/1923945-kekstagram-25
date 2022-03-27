const usersGalleryItem = document.querySelector('.pictures');
const usersGalleryItemTemplate = document.querySelector('#picture').content;
const usersGalleryItemFragment = document.createDocumentFragment();

const createRecentUsersGalleryItem = (recentUsersGalleryItem) => {
  recentUsersGalleryItem.forEach(({url, likes, comments}) => {
    const usersGalleryElement = usersGalleryItemTemplate.cloneNode(true);
    usersGalleryElement.querySelector('img').src = url;
    usersGalleryElement.querySelector('.picture__likes').textContent = likes;
    usersGalleryElement.querySelector('.picture__comments').textContent = comments.length;
    usersGalleryItemFragment.appendChild(usersGalleryElement);
  });
  usersGalleryItem.appendChild(usersGalleryItemFragment);
};

export {createRecentUsersGalleryItem};
