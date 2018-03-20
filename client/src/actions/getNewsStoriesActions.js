import axios from 'axios'; //used to make AJAX requests
import { GET_STORIES, GET_STORY } from './types'; //import the action type FETCH_USER for fetchUser

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
