//Action Creators create Actions
//Action is a javascript object with a type property and optionally a payload
//Action is returned instantly unless we use Redux Thunk and return a function
import axios from 'axios'; //used to make AJAX requests
import { FETCH_USER, GET_STORIES, GET_STORY, GET_COMMENTS } from './types'; //import the action type FETCH_USER for fetchUser

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
  //Promise.all will only resolve when every single promise/await inside it resolves
  //Promise.all is required for waiting for multiple promises/awaits to complete
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

//get a single hacker new story
export const getHackerNewsStory = postID => async dispatch => {
  const story = await axios.get(
    'https://hacker-news.firebaseio.com/v0/item/' + postID + '.json'
  );
  const storyData = story.data;

  dispatch({ type: GET_STORY, payload: storyData });
};

//get all the comments for a post
export const getPostComments = postID => async dispatch => {
  const story = await axios.get(
    'https://hacker-news.firebaseio.com/v0/item/' + postID + '.json'
  );
  //get all the top level comments
  const storyKidsIDs = story.data.kids;
  let storyKids;
  //if else statement is needed or posts with no comments will throw error
  if (storyKidsIDs) {
    storyKids = await Promise.all(
      storyKidsIDs.map(async storyKidsID => {
        const url =
          'https://hacker-news.firebaseio.com/v0/item/' + storyKidsID + '.json';
        const storyKid = await axios(url);
        const storyKidData = storyKid.data;
        return storyKidData;
      })
    );
  } else {
    console.log('Hello');
    storyKids = [];
  }

  dispatch({ type: GET_COMMENTS, payload: storyKids });
};
