import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'; // get the Link tag
import MenuLoggedIn from './MenuLoggedIn';
import MenuLoggedOut from './MenuLoggedOut';

// <a> tag navigates to a completely different HTML document
class Header extends Component {
  // renders content depending on rather the user is logged in or not
  renderContent() {
    switch (this.props.authUser) {
      // when the login status is still pending return nothing
      case null:
        return null;
      // when the user is not logged in, show them a link to login
      case false:
        return <MenuLoggedOut />;
      // when the user is logged in, show them a link to logout
      default:
        return <MenuLoggedIn />;
    }
  }

  render() {
    // <Link> tag navigates to a different route rendered by React Router
    // <a> tag navigates to a completely different HTML document
    return <div>{this.renderContent()}</div>;
  }
}

Header.propTypes = {
  authUser: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

Header.defaultProps = {
  authUser: null
};

// assign state.auth to props.auth, {auth} equals state.auth
function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps)(Header);
