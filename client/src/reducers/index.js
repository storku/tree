import { combineReducers } from 'redux';
import searchTwitterReducer from './searchTwitterReducer';
import getDonationReducer from './getDonationReducer';

//combine all the reducers here
export default combineReducers({
  searchTwitter: searchTwitterReducer,
  getDonation: getDonationReducer
});
