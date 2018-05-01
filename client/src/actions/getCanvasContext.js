import { GET_CANVAS_CONTEXT } from './types';

export const getCanvasContext = canvasContext => async dispatch => {
  dispatch({ type: GET_CANVAS_CONTEXT, payload: canvasContext });
};
