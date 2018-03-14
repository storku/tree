//Action Creators create Actions
//Action is a javascript object with a type property and optionally a payload
//Action is returned instantly unless we use Redux Thunk and return a function
import axios from 'axios'; //used to make AJAX requests
import { FETCH_USER } from './types'; //import the action type FETCH_USER for fetchUser

//get the logged in user
//make sure there is a proxy rule in /client/package.json to
//forward the request to the backend (localhost:5000)
export const fetchUser = () =>
  //because axios is async, we need to use redux thunk to return a function
  //to dispatch the action only after the axios GET request has completed
  async dispatch => {
    const res = await axios.get('/api/current_user'); //make GET type request to our backend api (authRoutes.js)

    //dispatches the action
    //res.data has the user model with the id and googleId
    dispatch({ type: FETCH_USER, payload: res.data });
  };
