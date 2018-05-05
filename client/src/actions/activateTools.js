import { ACTIVATE_TOOLS } from './types';

export const activateTools = tool => async dispatch => {
  dispatch({ type: ACTIVATE_TOOLS, payload: tool });
};
