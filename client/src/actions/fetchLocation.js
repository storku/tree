import axios from 'axios'; //used to make AJAX requests
import { FETCH_REP_INFO } from './types';
import { googleEverything } from '../config/keys';

//take latitude and longitude from navigator.geolocation.getCurrentPosition
//use google civic with lat/long info to get the reps!
export const fetchLocation = coords => async dispatch => {
  console.log('arrived at the action creator');
  console.log(coords.latitude);
  console.log(coords.longitude);
  const key = googleEverything;
  const url =
    'https://www.googleapis.com/civicinfo/v2/representatives?key=' +
    key +
    '&address=' +
    coords.latitude +
    ',' +
    coords.longitude;
  const res = await axios.get(url);

  dispatch({ type: FETCH_REP_INFO, payload: res.data });
};
