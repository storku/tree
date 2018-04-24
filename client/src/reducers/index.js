import { combineReducers } from 'redux';
import searchTwitterReducer from './searchTwitterReducer';

//combine all the reducers here
export default combineReducers({
  searchTwitter: searchTwitterReducer
});
