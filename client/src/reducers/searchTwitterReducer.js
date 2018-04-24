//Records whether or not the user is logged in
import { SEARCH_TWITTER } from '../actions/types'; //import the action type

//default state is null meaning that we don't know if the user has logged in or not
export default function(state = '', action) {
  switch (action.type) {
    case SEARCH_TWITTER:
      return action.payload;
    default:
      return state;
  }
}
