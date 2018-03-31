import { FETCH_REP_PLATFORM } from '../actions/types'; //import the action type

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_REP_PLATFORM:
      return action.payload;
    default:
      return state;
  }
}
