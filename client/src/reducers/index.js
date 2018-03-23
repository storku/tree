import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storiesReducer from './storiesReducer';
import storyReducer from './storyReducer';
import commentsReducer from './commentsReducer';
import commentsTreeReducer from './commentsTreeReducer';
import commentsNumberReducer from './commentsNumberReducer';
import pageIDReducer from './pageIDReducer';

//combine all the reducers here
export default combineReducers({
  auth: authReducer,
  stories: storiesReducer,
  story: storyReducer,
  comments: commentsReducer,
  commentsTree: commentsTreeReducer,
  commentsNumber: commentsNumberReducer,
  pageID: pageIDReducer
});
