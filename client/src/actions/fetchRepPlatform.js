//fetch the rep and the social media platform for the current rep + platform combo
//note that this action creator does not use redux thunk, no dispatch!
import { FETCH_REP_PLATFORM } from './types';

export const fetchRepPlatform = (name, platform, photoUrl) => {
  return { type: FETCH_REP_PLATFORM, payload: [name, platform, photoUrl] };
};
