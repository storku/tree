import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class MenuLoggedIn extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>Logo</Menu.Item>
        <Menu.Item>
          <a href="/">Front Page</a>
        </Menu.Item>
        <Menu.Item>My Garden</Menu.Item>
        <Menu.Item>Things 2</Menu.Item>
        <Menu.Item>Things 3</Menu.Item>
        <Menu.Item>
          <a href="/donate">Donate</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/api/logout">Logout</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuLoggedIn;
