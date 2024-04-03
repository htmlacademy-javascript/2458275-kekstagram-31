const SCALE_STEP = 0.25;
const MAX_SCALE = 1;

const zoomInBtn = document.querySelector('.scale__control--bigger');
const zoomOutBtn = document.querySelector('.scale__control--smaller');
const previewImage = document.querySelector('.img-upload__preview img');
const scaleControl = document.querySelector('.scale__control--value');

let scale = 1;

const onZoomOutBtnClick = () => {
  if (scale > SCALE_STEP) {
    previewImage.style.transform = `scale(${scale -= SCALE_STEP})`;
    scaleControl.value = `${scale * 100}%`;
  }
};
const onZoomInBtnClick = () => {
  if (scale < MAX_SCALE) {
    previewImage.style.transform = `scale(${scale += SCALE_STEP})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

zoomInBtn.addEventListener('click', onZoomInBtnClick);
zoomOutBtn.addEventListener('click', onZoomOutBtnClick);

export {previewImage};
