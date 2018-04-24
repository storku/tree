import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../search/SearchBar';
import TwitterUserInfo from './TwitterUserInfo';
import Canvas from '../canvas/Canvas';

class FrontPage extends Component {
  render() {
    console.log(this.props.searchTwitter);
    return (
      <div>
        <SearchBar />
        {this.props.searchTwitter && <TwitterUserInfo />}
        <Canvas />
      </div>
    );
  }
}

function mapStateToProps({ searchTwitter }) {
  return { searchTwitter };
}

export default connect(mapStateToProps)(FrontPage);
