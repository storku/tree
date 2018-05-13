import { GET_MOUSE_COORDS } from '../actions/types'; // import the action type

export default function(state = false, action) {
  switch (action.type) {
    case GET_MOUSE_COORDS:
      return action.payload;
    default:
      return state;
  }
}
