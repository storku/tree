import { CHAT_MESSAGE } from './types';

export const sendChatMessage = message => async dispatch => {
  dispatch({ type: CHAT_MESSAGE, payload: message });
};
