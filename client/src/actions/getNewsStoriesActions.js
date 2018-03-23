import axios from 'axios'; //used to make AJAX requests
import { GET_STORIES, GET_STORY, GET_PAGE_ID } from './types'; //import the action type FETCH_USER for fetchUser

//get hacker news stories
export const getHackerNewsStories = pageID => async dispatch => {
  //get the top news stories IDs first
  const res = await axios.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );
  //Based on the page number get the corresponding 30 stories
  //For example /new/2 gets 30 to 60 (story 31 to 60)
  //if on /, pageID will be 1
  //pageID is used to determine backward and forward buttons on front page
  if (!pageID) {
    pageID = 1;
  }
  const maxStory = pageID * 30;
  const minStory = (pageID - 1) * 30;
  const storiesIDs = res.data.slice(minStory, maxStory);
  //Be sure to wrap everything in Promise.all
  //Promise.all will only resolve when every single promise/await inside it resolves
  //Promise.all is required for waiting for multiple promises/awaits to complete
  const stories = await Promise.all(
    storiesIDs.map(async storyID => {
      const url =
        'https://hacker-news.firebaseio.com/v0/item/' + storyID + '.json';
      const story = await axios(url);
      const storyData = story.data;
      return storyData;
    })
  );

  dispatch({ type: GET_PAGE_ID, payload: pageID });
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
