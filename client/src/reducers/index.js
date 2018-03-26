import { combineReducers } from 'redux';
import authReducer from './authReducer';

//combine all the reducers here
export default combineReducers({
  auth: authReducer
});
