import './index.css';
//import registerServiceWorker from './registerServiceWorker';

//Data layer control (Redux)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//redux thunk gives Action Creators manual access to dispatch function
//allowing us to dispatch the action at any point in time, instead of instantly
import reduxThunk from 'redux-thunk';
//Semantic UI React CSS
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import reducers from './reducers'; //import the combineReducers for createStore

//create a new instance of redux store
//3 arguments: reducers, initial state and middleware
//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
//below is the same store as above but with redux devtools added (https://github.com/zalmoxisus/redux-devtools-extension)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

//renders App to root div in /public/index.html
//Provider tag is a React Component that can read changes from redux store
//Wrapping the Provider around App allows every component to access the redux store
//everytime redux state changes, Provider updates
//all of its children components with its new state
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
