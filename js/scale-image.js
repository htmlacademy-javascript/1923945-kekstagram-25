const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
let scale = DEFAULT_SCALE;

scaleSmallerButton.addEventListener('click', () => {
  if (scale > MIN_SCALE){
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

function getAssignmentScale(value) {
  scaleValue.value = `${value}%`;
  imagePreview.style.transform = `scale(${value/100})`;
}