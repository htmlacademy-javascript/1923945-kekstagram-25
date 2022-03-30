import {getMaxLengthString} from './utils.js';
import {createRecentUsersGalleryItem} from './gallery.js';
import {setUserFormSubmit} from './validate-form.js';
import {closeForm} from './user-form.js';
import {getData} from './data.js';
import './user-form.js';
import './validate-form.js';
import './scale-image.js';
import './effect-image.js';

const MAX_LENGTH_STRING = 10;

getMaxLengthString('string', MAX_LENGTH_STRING);

getData(createRecentUsersGalleryItem);

setUserFormSubmit(closeForm);
