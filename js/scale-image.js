const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');
let scale = DEFAULT_SCALE;

const getAssignmentScale = (value) => {
  scaleValue.value = `${value}%`;
  previewImage.style.transform = `scale(${value / 100})`;
};

scaleSmallerButton.addEventListener('click', () => {
  if (scale > MIN_SCALE) {
    scale -= SCALE_STEP;
    getAssignmentScale(scale);
  }
});

scaleBiggerButton.addEventListener('click', () => {
  if (scale < MAX_SCALE) {
    scale += SCALE_STEP;
    getAssignmentScale(scale);
  }
});

const getDefaultScale = () => {
  scale = DEFAULT_SCALE;
  getAssignmentScale(scale);
};

const getImagePreview = (files) => {
  const file = files;
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    previewImage.src = URL.createObjectURL(file);
  }
};

export {getDefaultScale, getImagePreview, previewImage};
