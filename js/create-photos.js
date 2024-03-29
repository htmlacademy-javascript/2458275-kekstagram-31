import {getRandomInteger, getUniqueRandomInteger, getRandomArrayElement} from './utils.js';
import {COMMENTS, NAMES, DESCRIPTIONS} from './mock-data.js';

const PHOTOS_TOTAL = 25;

const LIKES_NUM = {
  min: 15,
  max: 200,
};
const COMMENTS_NUM = {
  min: 0,
  max: 30,
};
const AVATAR_NUM = {
  min: 1,
  max: 6,
};

const commentIdGenerator = getUniqueRandomInteger(1, COMMENTS_NUM.max * PHOTOS_TOTAL);

const createComment = () => {
  const comment = {};
  comment.id = commentIdGenerator();
  comment.avatar = `img/avatar-${getRandomInteger(AVATAR_NUM.min, AVATAR_NUM.max)}.svg`;
  comment.message = getRandomArrayElement(COMMENTS);
  comment.name = getRandomArrayElement(NAMES);
  return comment;
};

const getPhotoGenerator = () => {
  let id = 1;
  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = getRandomArrayElement(DESCRIPTIONS);
    photo.likes = getRandomInteger(LIKES_NUM.min, LIKES_NUM.max);
    photo.comments = Array.from({length: getRandomInteger(0, COMMENTS_NUM.max)}, createComment);
    id++;
    return photo;
  };
};
const generatedPhoto = getPhotoGenerator();
const createPhotos = () => Array.from({length: PHOTOS_TOTAL}, generatedPhoto);

export {createPhotos};
