import axios from 'axios'; //used to make AJAX requests
import { SEARCH_TWITTER } from './types';

export const searchTwitter = id => async dispatch => {
  const key = '';

  dispatch({ type: SEARCH_TWITTER, payload: id });
};
