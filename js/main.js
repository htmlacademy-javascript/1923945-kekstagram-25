import {createCardDescription} from './data.js';
import {getMaxLengthString} from './utils.js';
import {createRecentUsersGalleryItem} from './gallery.js';
import './user-form.js';
import './validate-form.js';

const MAX_LENGTH_STRING = 10;
const USERS_GALLERY_ITEMS_QUANTITY = 25;

getMaxLengthString('string', MAX_LENGTH_STRING);

createRecentUsersGalleryItem(createCardDescription(USERS_GALLERY_ITEMS_QUANTITY));
