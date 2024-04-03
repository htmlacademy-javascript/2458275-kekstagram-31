const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectPreview = document.querySelector('.effects__item');
const imagePreview = document.querySelector('.img-upload__preview img');

effectValue.value = 1;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
  effectValue.value = effectSlider.noUiSlider.get();
});

const onEffectPreviewClick = () => {
  console.log('success');
};

effectPreview.addEventListener('click', onEffectPreviewClick);
