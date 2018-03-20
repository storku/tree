//get the comments tree
import { GET_COMMENTS_TREE, REMOVE_ALL_COMMENTS } from '../actions/types'; //import the action type

export default function(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS_TREE:
      return action.payload;
    case REMOVE_ALL_COMMENTS:
      return {};
    default:
      return state;
  }
}
