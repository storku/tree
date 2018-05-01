import { GET_CANVAS_CONTEXT } from '../actions/types'; //import the action type

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CANVAS_CONTEXT:
      return action.payload;
    default:
      return state;
  }
}
