//hacker news stories
import { GET_STORIES } from '../actions/types'; //import the action type

export default function(state = [], action) {
  switch (action.type) {
    case GET_STORIES:
      return action.payload;
    default:
      return state;
  }
}
