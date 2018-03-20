import { REMOVE_ALL_COMMENTS } from './types';

export const removeAllComments = () => dispatch => {
  dispatch({ type: REMOVE_ALL_COMMENTS, payload: 'RESET' });
};
