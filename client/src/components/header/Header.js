import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // get the Link tag
import MenuLoggedIn from './MenuLoggedIn';
import MenuLoggedOut from './MenuLoggedOut';

//<a> tag navigates to a completely different HTML document
class Header extends Component {
  //renders content depending on rather the user is logged in or not
  renderContent() {
    switch (this.props.auth) {
      //when the login status is still pending return nothing
      case null:
        return;
      //when the user is not logged in, show them a link to login
      case false:
        return <MenuLoggedOut />;
      //when the user is logged in, show them a link to logout
      default:
        return <MenuLoggedIn />;
    }
  }

  render() {
    //<Link> tag navigates to a different route rendered by React Router
    //<a> tag navigates to a completely different HTML document
    return <div>{this.renderContent()}</div>;
  }
}

//assign state.auth to props.auth, {auth} equals state.auth
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
