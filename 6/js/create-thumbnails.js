import {createPhotos} from './create-photos.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const userPictures = createPhotos();

const createPictureThumbnail = (picture) => {
  const pictureThumbnail = pictureTemplate.cloneNode(true);

  const image = pictureThumbnail.querySelector('.picture__img');

  image.src = picture.url;
  image.alt = picture.description;

  pictureThumbnail.querySelector('.picture__likes').textContent = picture.likes;
  pictureThumbnail.querySelector('.picture__comments').textContent = picture.comments.length;

  return pictureThumbnail;
};

const picturesFragment = document.createDocumentFragment();

const createThumbnails = () => {

  userPictures.forEach((picture) => {

    picturesFragment.append(createPictureThumbnail(picture));
  });

  picturesContainer.append(picturesFragment);
};

export {createThumbnails};
