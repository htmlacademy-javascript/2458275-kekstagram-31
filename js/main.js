
import {createThumbnails} from './create-thumbnails.js';
import {createPhotos} from './create-photos.js';

const pictures = createPhotos();
createThumbnails(pictures);

