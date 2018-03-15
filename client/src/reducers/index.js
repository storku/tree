import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storiesReducer from './storiesReducer';

//combine all the reducers here
export default combineReducers({
  auth: authReducer,
  stories: storiesReducer
});
