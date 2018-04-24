import React, { Component } from 'react';
import { connect } from 'react-redux';

class TwitterUserInfo extends Component {
  render() {
    const username = this.props.searchTwitter;
    const usernameURI = username.replace(' ', '_');
    return (
      <h4>
        Twitter Handle: {username} -{' '}
        <a href={`https://twitter.com/${usernameURI}`}>Link to Twitter</a>
      </h4>
    );
  }
}

function mapStateToProps({ searchTwitter }) {
  return { searchTwitter };
}

export default connect(mapStateToProps)(TwitterUserInfo);
