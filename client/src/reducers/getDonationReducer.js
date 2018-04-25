import { GET_DONATION } from '../actions/types'; //import the action type

export default function(state = '', action) {
  switch (action.type) {
    case GET_DONATION:
      return action.payload;
    default:
      return state;
  }
}
