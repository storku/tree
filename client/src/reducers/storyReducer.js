//hacker news stories
import { GET_STORY } from '../actions/types'; //import the action type

export default function(state = {}, action) {
  switch (action.type) {
    case GET_STORY:
      return action.payload;
    default:
      return state;
  }
}
