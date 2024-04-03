import {createThumbnails, userPictures} from './create-thumbnails.js';
import {showBigPictureInfo} from './open-fullsize-photos.js';
import './photo-upload-form.js';
import './photo-scale-control.js';


createThumbnails(userPictures);
showBigPictureInfo(userPictures);

