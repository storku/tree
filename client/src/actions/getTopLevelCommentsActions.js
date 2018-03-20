import axios from 'axios'; //used to make AJAX requests
import { GET_COMMENTS } from './types';

//get all the comments for a post
export const getTopLevelComments = postID => async dispatch => {
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
    storyKids = [];
  }

  dispatch({ type: GET_COMMENTS, payload: storyKids });
};
