import {isEscapeKey} from './utils.js';
import {picturesContainer} from './create-thumbnails.js';
const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureClosingElement = bigPicture.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');

const onEscKeydown = (evt) => {
  evt.preventDefault();
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const onPictureClosingClick = () => {
  closeBigPicture();
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  removeComments();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onPictureClosingClick);
}

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  document.addEventListener('keydown', onEscKeydown);
  bigPictureClosingElement.addEventListener('click', onPictureClosingClick);
};

const createBigPicture = (array) => {
  picturesContainer.addEventListener('click', (evt) => {
    const currentPictureThumbnail = evt.target.closest('.picture');
    const pictureId = currentPictureThumbnail.dataset.pictureId;
    const currentPicture = array.find((item) => item.id === Number(pictureId));

    bigPicture.querySelector('.big-picture__img img').src = currentPicture.url;
    bigPicture.querySelector('.likes-count').textContent = currentPicture.likes;
    bigPicture.querySelector('.social__comment-shown-count').textContent = currentPicture.comments.length;
    bigPicture.querySelector('.social__comment-total-count').textContent = currentPicture.comments.length;
    bigPicture.querySelector('.social__caption').textContent = currentPicture.description;

    const commentsFragment = document.createDocumentFragment();
    currentPicture.comments.forEach(({avatar, name, message}) => {
      const commentSample = commentTemplate.cloneNode(true);
      const author = commentSample.querySelector('.social__picture');
      author.src = avatar;
      author.name = name;
      commentSample.querySelector('.social__text').textContent = message;
      commentsFragment.append(commentSample);
    });
    commentsContainer.append(commentsFragment);
    openBigPicture();
  });
};
bigPictureClosingElement.addEventListener('click', () => {
  closeBigPicture();
});
export {createBigPicture};
