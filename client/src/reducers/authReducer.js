//Records whether or not the user is logged in
import { FETCH_USER } from '../actions/types'; //import the action type

//default state is null meaning that we don't know if the user has logged in or not
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //action.payload is the user model (res.data from fetchUser)
      //if the user is logged out then action.payload is an empty string ("")
      //if payload is "", false is returned
      return action.payload || false;
    default:
      return state;
  }
}
