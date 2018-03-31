import axios from 'axios'; //used to make AJAX requests
import { SEND_TWEET } from './types';

export const sendTweet = message => async dispatch => {
  console.log(message);
  const url =
    'https://api.twitter.com/1.1/statuses/update.json?status=' + message;
  const res = await axios.post(url);
  console.log(res);

  dispatch({ type: SEND_TWEET, payload: res.data });
};
