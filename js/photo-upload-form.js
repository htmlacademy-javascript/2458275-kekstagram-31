import {body} from './open-fullsize-photos.js';
import {isEscapeKey} from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');

const photoUploadControl = uploadForm.querySelector('.img-upload__input');
const photoEditorForm = uploadForm.querySelector ('.img-upload__overlay');
const uploadFormClosingElement = uploadForm.querySelector('.img-upload__cancel');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const descriptionField = uploadForm.querySelector('.text__description');


const onEscKeydown = (evt) => {
  evt.preventDefault();
  if (isEscapeKey(evt)) {
    closePhotoEditor();
  }
};

const onUploadFormClosingClick = () => closePhotoEditor();

function closePhotoEditor () {
  photoEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  uploadFormClosingElement.removeEventListener('click', onUploadFormClosingClick);
  photoUploadControl.value = '';
  hashtagsField.value = '';
  descriptionField.value = '';
}

const onUploadFormClick = () => {
  photoEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');

  uploadFormClosingElement.addEventListener('click', onUploadFormClosingClick);
  document.addEventListener('keydown', onEscKeydown);
};

const openUploadForm = () => {
  photoUploadControl.addEventListener('change', onUploadFormClick);
};

export {openUploadForm, uploadForm, hashtagsField, descriptionField};
