import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class MenuLoggedIn extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>Logo</Menu.Item>
        <Menu.Item>
          <Link to={'/'}>Front Page</Link>
        </Menu.Item>
        <Menu.Item>Things 2</Menu.Item>
        <Menu.Item>Things 3</Menu.Item>
        <Menu.Item>Search</Menu.Item>
        <Menu.Item>
          <a href="/auth/google">Log In</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/auth/google">Sign Up</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLoggedIn;
