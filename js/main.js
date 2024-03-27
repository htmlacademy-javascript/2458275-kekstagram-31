import {createThumbnails} from './create-thumbnails.js';
import {createPhotosArray} from './create-photos-array.js';
import {createBigPicture} from './create-fullsize-photos.js';

const photosArray = createPhotosArray();

createThumbnails(photosArray);
createBigPicture(photosArray);


