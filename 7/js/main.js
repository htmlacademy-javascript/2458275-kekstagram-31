import {createThumbnails} from './create-thumbnails.js';
import {createPhotosArray} from './create-photos-array.js';
import {openBigPicture} from './gallery.js';

const photosArray = createPhotosArray();
createThumbnails(photosArray);
openBigPicture();
