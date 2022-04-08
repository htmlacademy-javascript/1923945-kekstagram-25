import {setFilter} from './gallery.js';
import {debounce} from './utils.js';

const TIMEOUT_DELAY = 500;

const getData = (url, onSuccess) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      setFilter(data, debounce(onSuccess, TIMEOUT_DELAY));
    });
};

const sendData = (url, onSuccess, onFail, body) => {
  fetch(url, {
    method: 'POST',
    body,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};

