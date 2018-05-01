import { GET_MOUSE_COORDS } from './types';

export const getMouseCoords = mouseCoords => async dispatch => {
  dispatch({ type: GET_MOUSE_COORDS, payload: mouseCoords });
};
