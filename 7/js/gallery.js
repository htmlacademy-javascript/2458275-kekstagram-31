import {createBigPicture, bigPicture} from './create-fullsize-photos';
import {isEscapeKey} from './utils.js';
import {removeComments} from './create-comments.js';
import {picturesContainer} from './create-thumbnails.js';

const body = document.body;
const bigPictureClosingElement = bigPicture.querySelector('.big-picture__cancel');

const onEscKeydown = (evt) => {
  evt.preventDefault();
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  createBigPicture ();
  document.addEventListener('keydown', onEscKeydown);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  removeComments();
  document.removeEventListener('keydown', onEscKeydown);
};

picturesContainer.addEventListener('click', (evt) => {
  const currentPictureContainer = evt.target.closest('.picture');
  if (currentPictureContainer) {
    openBigPicture(currentPictureContainer.dataset.pictureId);
  }
});

bigPictureClosingElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
