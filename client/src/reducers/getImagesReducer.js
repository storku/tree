import { GET_IMAGES } from '../actions/types'; // import the action type

export default function(state = [], action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.payload;
    default:
      return state;
  }
}
