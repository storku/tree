import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';

class Forum extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4>Welcome to the Message Board!</h4>
      </div>
    );
  }
}

export default Forum;
