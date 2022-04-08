import {createRecentUsersGalleryItem} from './gallery.js';
import {setUserFormSubmit} from './validate-form.js';
import {closeForm} from './user-form.js';
import {getData} from './data.js';
import {openModalError, openModalSuccess} from './modal.js';
import {openMessageError} from './utils.js';
import './scale-image.js';
import './effect-image.js';

const URL_GET_DATA = 'https://25.javascript.pages.academy/kekstagram/data';
const URL_SEND_DATA = 'https://25.javascript.pages.academy/kekstagram';

getData(URL_GET_DATA, createRecentUsersGalleryItem, openMessageError);

setUserFormSubmit(URL_SEND_DATA, closeForm, openModalError, openModalSuccess);
