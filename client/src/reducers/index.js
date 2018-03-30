import { combineReducers } from 'redux';
import authReducer from './authReducer';
import repInfoReducer from './repInfoReducer';

//combine all the reducers here
export default combineReducers({
  auth: authReducer,
  repInfo: repInfoReducer
});
