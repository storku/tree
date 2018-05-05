import { ACTIVATE_TOOLS } from '../actions/types'; //import the action type

export default function(state = {}, action) {
  switch (action.type) {
    case ACTIVATE_TOOLS:
      return action.payload;
    default:
      return state;
  }
}
