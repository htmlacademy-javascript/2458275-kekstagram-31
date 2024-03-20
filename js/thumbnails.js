import {createPhotos} from './create-photos.js';
import {COMMENTS, NAMES, DESCRIPTIONS} from './mock-data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesElement = document.querySelector('.pictures');

const pictures = createPhotos();
const picturesFragment = document.createDocumentFragment();

pictures.forEach(({url, description, likes, comments}) => {
  const pictureThumbnail = pictureTemplate.cloneNode(true);

  const image = pictureThumbnail.querySelector('.picture__img');

  image.src = url;
  image.alt = description;

  pictureThumbnail.querySelector('.picture__likes').textContent = likes;
  pictureThumbnail.querySelector('.picture__comments').textContent = comments.length;

  picturesFragment.appendChild(pictureThumbnail);
});
picturesElement.appendChild(picturesFragment);

export {picturesElement};

