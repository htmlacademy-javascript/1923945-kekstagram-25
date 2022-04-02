const getData = (url, onSuccess) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
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

