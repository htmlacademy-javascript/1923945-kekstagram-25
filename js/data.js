import {setFilter} from './gallery.js';
import {debounce} from './utils.js';

const TIMEOUT_DELAY = 500;
const MESSAGE_ERROR = 'Не удалось получить данные. Попробуйте ещё раз';

const getData = (url, onSuccess, onFail) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          onSuccess(data);
          setFilter(data, debounce(onSuccess, TIMEOUT_DELAY));
        });
      } else {
        onFail(MESSAGE_ERROR);
      }
    })
    .catch(() => {
      onFail(MESSAGE_ERROR);
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

