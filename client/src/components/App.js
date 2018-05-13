// Rendering layer control (React Router)
import React, { Component } from 'react';
// BrowserRouter tells React Router how to behave
// Route is a React Component that sets up a rule and displays the right component
import { BrowserRouter, Route } from 'react-router-dom';
// connect helper allows the App component to access the redux store
import { connect } from 'react-redux';
import * as actions from '../actions'; // import all the action creators

import './App.css';

// import all the components in
import Header from './header/Header';
import FrontPage from './frontpage/FrontPage';
import DonatePage from './donate/DonatePage';
import DonateResultPage from './donate/DonateResultPage';
import SearchPage from './search/SearchPage';

class App extends Component {
  // in order to call the action creator, hook it up with connect first
  componentDidMount() {}

  render() {
    // exact is equivalent to exact={true}, makes the path match exactly
    // because <Header /> is above all the routes, it will always be visible
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/donate" component={DonatePage} />
            <Route exact path="/donate_result" component={DonateResultPage} />
            <Route path="/search/:id" component={SearchPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// use connect to allow App to access Action Creators
// the 2nd parameter for connect is mapDispatchToProps
// actions are assigned to App as props
export default connect(null, actions)(App);
