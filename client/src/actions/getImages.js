// might need to add onload to image to make it only fire when
// it finishes loading
// when not using action creator to load, use imageLoading.old.js in old
import { GET_IMAGES } from './types';

export const getImages = imageURLs => async dispatch => {
  const plantPics = [];
  imageURLs.forEach(url => {
    // for (const url of imageURLs) {
    if (url === null) {
      plantPics.push(null);
    } else {
      const image = document.createElement('img');
      // const image = React.createElement('div', { src: url });
      // image.onload
      image.src = url;
      plantPics.push(image);
    }
  });

  dispatch({ type: GET_IMAGES, payload: plantPics });
};
