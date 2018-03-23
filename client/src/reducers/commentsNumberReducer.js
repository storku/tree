//get number of comments
import { GET_COMMENTS_NUMBER, REMOVE_ALL_COMMENTS } from '../actions/types'; //import the action type

export default function(state = 0, action) {
  switch (action.type) {
    case GET_COMMENTS_NUMBER:
      return action.payload;
    case REMOVE_ALL_COMMENTS:
      return 0;
    default:
      return state;
  }
}
