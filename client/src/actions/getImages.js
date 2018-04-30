import axios from 'axios'; //used to make AJAX requests
import { GET_IMAGES } from './types';

export const getImages = imageURLs => async dispatch => {
  const plantPics = [];
  for (let url of imageURLs) {
    if (url === null) {
      plantPics.push(null);
    } else {
      let image = document.createElement('img');
      image.src = url;
      plantPics.push(image);
    }
  }

  dispatch({ type: GET_IMAGES, payload: plantPics });
};
