import { combineReducers } from 'redux';
import searchTwitterReducer from './searchTwitterReducer';
import getDonationReducer from './getDonationReducer';
import getImagesReducer from './getImagesReducer';
import getCanvasContextReducer from './getCanvasContextReducer';
import getMouseCoordsReducer from './getMouseCoordsReducer';
import activateToolsReducer from './activateToolsReducer';

//combine all the reducers here
export default combineReducers({
  searchTwitter: searchTwitterReducer,
  getDonation: getDonationReducer,
  getImages: getImagesReducer,
  getCanvasContext: getCanvasContextReducer,
  getMouseCoords: getMouseCoordsReducer,
  currentTools: activateToolsReducer
});
