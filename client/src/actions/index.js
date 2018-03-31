//Action Creators create Actions
//Action is a javascript object with a type property and optionally a payload
//Action is returned instantly unless we use Redux Thunk and return a function

//fetch user
export * from './fetchUserActions';

//fetch rep info
export * from './fetchRepInfo';

//fetch auto location
export * from './fetchLocation';

//get the 1 rep and the 1 platform combo
export * from './fetchRepPlatform';

//send tweet
export * from './sendTweet';
