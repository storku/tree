import axios from 'axios'; //used to make AJAX requests
import { FETCH_REP_INFO } from './types'; //import the action type FETCH_USER for fetchUser
import { googleEverything } from '../config/keys';

export const fetchRepInfo = address => async dispatch => {
  const key = googleEverything;
  const url =
    'https://www.googleapis.com/civicinfo/v2/representatives?key=' +
    key +
    '&address=' +
    address;
  const res = await axios.get(url);

  dispatch({ type: FETCH_REP_INFO, payload: res.data });
};
