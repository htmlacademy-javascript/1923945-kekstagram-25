const CHROME_EFFECT_SLIDER_PARAMETERS = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return value;
    }
  }
};

const SEPIA_EFFECT_SLIDER_PARAMETERS = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return value;
    }
  }
};

const MARVIN_EFFECT_SLIDER_PARAMETERS = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  format: {
    to: function (value) {
      return `${value}%`;
    },
    from: function (value) {
      return value;
    }
  }
};

const BLUR_EFFECT_SLIDER_PARAMETERS = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
  format: {
    to: function (value) {
      return `${value.toFixed(1)}px`;
    },
    from: function (value) {
      return value;
    }
  }
};

const BRIGHTNESS_EFFECT_SLIDER_PARAMETERS = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return value;
    }
  }
};

const effectLevelFieldset = document.querySelector('.img-upload__effect-level');
const effectList = document.querySelector('.effects__list');
const previewImage = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectStyleNoneInput = document.querySelector('#effect-none');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
});

const filterParams = {
  'chrome': {
    'filterName': 'grayscale',
    'filterParameter': CHROME_EFFECT_SLIDER_PARAMETERS,
  },
  'sepia': {
    'filterName': 'sepia',
    'filterParameter': SEPIA_EFFECT_SLIDER_PARAMETERS,
  },

  'marvin':
    {
      'filterName': 'invert',
      'filterParameter': MARVIN_EFFECT_SLIDER_PARAMETERS,
    },
  'phobos':
    {
      'filterName': 'blur',
      'filterParameter': BLUR_EFFECT_SLIDER_PARAMETERS,
    },
  'heat':
    {
      'filterName': 'brightness',
      'filterParameter': BRIGHTNESS_EFFECT_SLIDER_PARAMETERS,
    },
};

let effectName = 'none';

effectList.addEventListener('change', (evt) => {
  previewImage.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--sepia');
  effectName = evt.target.value;
  if (evt.target.classList.contains('effects__radio') && effectName !== 'none') {
    previewImage.classList.add(`effects__preview--${effectName}`);
    effectLevelSlider.noUiSlider.updateOptions(filterParams[effectName]['filterParameter']);
    effectLevelFieldset.hidden = false;
  } else {
    previewImage.style.filter = 'none';
    effectLevelFieldset.hidden = true;
  }
});

effectLevelSlider.noUiSlider.on('update', () => {
  if (effectName !== 'none') {
    previewImage.style.filter = `${filterParams[effectName]['filterName']}(${effectLevelSlider.noUiSlider.get()})`;
    effectLevelValue.value = parseFloat(effectLevelSlider.noUiSlider.get());
  }
});

const getDefaultEffects = () => {
  previewImage.classList.remove('effects__preview--none', 'effects__preview--chrome', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--sepia');
  previewImage.removeAttribute('style');
  effectLevelFieldset.hidden = true;
  effectStyleNoneInput.checked = true;
};

export {getDefaultEffects};
