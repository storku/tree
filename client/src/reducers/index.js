import { combineReducers } from 'redux';
import authReducer from './authReducer';
import repInfoReducer from './repInfoReducer';
import repPlatformReducer from './repPlatformReducer';
import chatMessagesReducer from './chatMessagesReducer';

//combine all the reducers here
export default combineReducers({
  auth: authReducer,
  repInfo: repInfoReducer,
  repPlatform: repPlatformReducer,
  chatMessages: chatMessagesReducer
});
