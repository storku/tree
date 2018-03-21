//get number of comments
import { GET_COMMENTS_NUMBER } from '../actions/types'; //import the action type

export default function(state = 0, action) {
  switch (action.type) {
    case GET_COMMENTS_NUMBER:
      return action.payload;
    default:
      return state;
  }
}
