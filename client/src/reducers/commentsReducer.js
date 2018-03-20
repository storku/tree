//get all comments for a story
import { GET_COMMENTS, REMOVE_ALL_COMMENTS } from '../actions/types'; //import the action type

export default function(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    case REMOVE_ALL_COMMENTS:
      return [];
    default:
      return state;
  }
}
