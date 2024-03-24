import {createComments} from './create-comments.js';
import {photosArray} from './main.js';

const bigPicture = document.querySelector('.big-picture');

const createBigPicture = (pictureId) => {

  const currentPicture = photosArray.find((photo) => photo.id === Number(pictureId));

  bigPicture.querySelector('.big-picture__img').src = currentPicture.url;
  bigPicture.querySelector('.likes-count').textContent = currentPicture.likes;
  bigPicture.querySelector('.social__comment-shown-count').textContent = currentPicture.comments.length;
  bigPicture.querySelector('.social__comment-total-count').textContent = currentPicture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = currentPicture.description;

  createComments ();
};

export {createBigPicture, bigPicture};
