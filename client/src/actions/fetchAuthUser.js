// get the currently authenticated user (Oauth)
// decide if the user is authenticated or not
// currently using Google Oauth
import axios from 'axios'; // used to make AJAX requests
import { AUTH_USER } from './types'; // import the action type AUTH_USER for fetchUser

// get the logged in user
// make sure there is a proxy rule in /client/package.json to
// forward the request to the backend (localhost:5000)
export const fetchAuthUser = () =>
  // because axios is async, we need to use redux thunk to return a function
  // to dispatch the action only after the axios GET request has completed
  async dispatch => {
    const res = await axios.get('/api/current_user'); // make GET type request to our backend api (authRoutes.js)
    // dispatches the action
    // res.data has the user model with the id and googleId
    dispatch({ type: AUTH_USER, payload: res.data });
  };
