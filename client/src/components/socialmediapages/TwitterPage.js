import React, { Component } from 'react';
import { connect } from 'react-redux';

class TwitterPage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Twitter page</h2>
      </div>
    );
  }
}

function mapStateToProps() {
  return;
}

export default connect(mapStateToProps)(TwitterPage);
