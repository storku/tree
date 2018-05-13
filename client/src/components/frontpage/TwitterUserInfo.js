import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TwitterUserInfo = props => (
  <h4>
    Twitter Handle: {props.username} -{' '}
    <a href={`https://twitter.com/${props.usernameURI}`}>Link to Twitter</a>
  </h4>
);

TwitterUserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  usernameURI: PropTypes.string.isRequired
};

function mapStateToProps({ searchTwitter }) {
  const username = searchTwitter;
  const usernameURI = username.replace(' ', '_');
  return { username, usernameURI };
}

export default connect(mapStateToProps)(TwitterUserInfo);
