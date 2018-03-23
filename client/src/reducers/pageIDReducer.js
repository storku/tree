//get pageID (page number)
import { GET_PAGE_ID } from '../actions/types'; //import the action type

export default function(state = 1, action) {
  switch (action.type) {
    case GET_PAGE_ID:
      return action.payload;
    default:
      return state;
  }
}
