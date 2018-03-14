import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // get the Link tag

class Header extends Component {
  //renders content depending on rather the user is logged in or not
  renderContent() {
    switch (this.props.auth) {
      //when the login status is still pending return nothing
      case null:
        return;
      //when the user is not logged in, show them a link to login
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      //when the user is logged in, show them a link to logout
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    //<Link> tag navigates to a different route rendered by React Router
    //<a> tag navigates to a completely different HTML document
    return (
      <div>
        <div>
          {/*if the user is logged in, send them to one link,
            if the user is not, send them to a different link.
            Check the user by using this.props.auth is an object / truthy*/}
          <Link to={this.props.auth ? '/surveys' : '/'}>Welcome!</Link>
        </div>
        <ul>{this.renderContent()}</ul>
      </div>
    );
  }
}

//assign state.auth to props.auth, {auth} equals state.auth
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
