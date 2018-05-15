import { combineReducers } from 'redux';
import searchTwitterReducer from './searchTwitterReducer';
import getDonationReducer from './getDonationReducer';
import getImagesReducer from './getImagesReducer';
import getCanvasContextReducer from './getCanvasContextReducer';
import getMouseCoordsReducer from './getMouseCoordsReducer';
import activateToolsReducer from './activateToolsReducer';
import fetchAuthUserReducer from './fetchAuthUserReducer';

// combine all the reducers here
export default combineReducers({
  searchTwitter: searchTwitterReducer,
  getDonation: getDonationReducer,
  getImages: getImagesReducer,
  getCanvasContext: getCanvasContextReducer,
  getMouseCoords: getMouseCoordsReducer,
  currentTools: activateToolsReducer,
  authUser: fetchAuthUserReducer
});
