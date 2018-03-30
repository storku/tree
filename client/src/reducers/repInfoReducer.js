import { FETCH_REP_INFO } from '../actions/types'; //import the action type

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_REP_INFO:
      return action.payload;
    default:
      return state;
  }
}
