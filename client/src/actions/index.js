//Action Creators create Actions
//Action is a javascript object with a type property and optionally a payload
//Action is returned instantly unless we use Redux Thunk and return a function

//fetch user
export * from './fetchUserActions';

//get hacker news stories (getHackerNewsStories)
//or a single story (getHackerNewsStory)
export * from './getNewsStoriesActions';

//get top level comments for a post
export * from './getTopLevelCommentsActions';

//get all comments for a post
export * from './getAllCommentsActions';

//remove all comments from state
export * from './removeAllCommentsActions';
