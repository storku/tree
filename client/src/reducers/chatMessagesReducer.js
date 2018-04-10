import { CHAT_MESSAGE } from '../actions/types'; //import the action type

export default function(state = [], action) {
  switch (action.type) {
    case CHAT_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
