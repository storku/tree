import './App.css';

//Rendering layer control (React Router)
import React, { Component } from 'react';
//BrowserRouter tells React Router how to behave
//Route is a React Component that sets up a rule and displays the right component
import { BrowserRouter, Route } from 'react-router-dom';
//connect helper allows the App component to access the redux store
import { connect } from 'react-redux';
import * as actions from '../actions'; //import all the action creators

//import all the components in
import Header from './header/Header';
import FrontPage from './frontpage/FrontPage';

class App extends Component {
  //in order to call the action creator, hook it up with connect first
  componentDidMount() {
    //call the actionCreator fetchUser
    this.props.fetchUser();
  }

  render() {
    //exact is equivalent to exact={true}, makes the path match exactly
    //because <Header /> is above all the routes, it will always be visible
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/" component={FrontPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//use connect to allow App to access Action Creators
//the 2nd parameter for connect is mapDispatchToProps
//actions are assigned to App as props
export default connect(null, actions)(App);
