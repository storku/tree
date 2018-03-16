//Action Creators create Actions
//Action is a javascript object with a type property and optionally a payload
//Action is returned instantly unless we use Redux Thunk and return a function
import axios from 'axios'; //used to make AJAX requests
import { FETCH_USER, GET_STORIES } from './types'; //import the action type FETCH_USER for fetchUser

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

//get hacker news stories
export const getHackerNewsStories = () => async dispatch => {
  //get the top news stories IDs first
  const res = await axios.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );
  //Then go through the first 20 stories IDs and get rest of stories
  //Be sure to wrap everything in Promise.all
  //RESEARCH THIS TO UNDERSTAND HOW IT WORKS!!!!!
  const storiesIDs = res.data.slice(0, 20);
  const stories = await Promise.all(
    storiesIDs.map(async storyID => {
      const url =
        'https://hacker-news.firebaseio.com/v0/item/' + storyID + '.json';
      const story = await axios(url);
      const storyData = story.data;
      return storyData;
    })
  );

  dispatch({ type: GET_STORIES, payload: stories });
};
