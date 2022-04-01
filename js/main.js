import {getMaxLengthString} from './utils.js';
import {createRecentUsersGalleryItem} from './gallery.js';
import {setUserFormSubmit} from './validate-form.js';
import {closeForm} from './user-form.js';
import {getData} from './data.js';
import {openModalError, openModalSuccess} from './modal.js';
import './user-form.js';
import './validate-form.js';
import './scale-image.js';
import './effect-image.js';
import './modal.js';

const MAX_LENGTH_STRING = 10;
const URL_GET_DATA = 'https://25.javascript.pages.academy/kekstagram/data';
const URL_SEND_DATA = 'https://25.javascript.pages.academy/kekstagram';

getMaxLengthString('string', MAX_LENGTH_STRING);

getData(URL_GET_DATA, createRecentUsersGalleryItem);

setUserFormSubmit(URL_SEND_DATA, closeForm, openModalError, openModalSuccess);
