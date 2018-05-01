//Action Creators create Actions
//Action is a javascript object with a type property and optionally a payload
//Action is returned instantly unless we use Redux Thunk and return a function

//fetch user
export * from './searchTwitter';

//get the donation
export * from './getDonation';

//get the images
export * from './getImages';

//get the canvas context
export * from './getCanvasContext';

//get mouse coordinates
export * from './getMouseCoords';
