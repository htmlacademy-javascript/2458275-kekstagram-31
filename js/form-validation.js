import {uploadForm, descriptionField} from './photo-upload-form';

const MAX_HASHTAGS_AMOUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;
const VALID_HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const isDescriptionValid = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(descriptionField, isDescriptionValid, `Длина комментария не должна превышать ${MAX_DESCRIPTION_LENGTH } симоволов`,);
