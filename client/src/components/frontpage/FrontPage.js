import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../search/SearchBar';
import TwitterUserInfo from './TwitterUserInfo';
import Canvas from '../canvas/Canvas';

const FrontPage = props => (
  <div>
    <Canvas>
      <div className="searchSection">
        <SearchBar />
        {props.searchTwitter && <TwitterUserInfo />}
      </div>
    </Canvas>
  </div>
);

FrontPage.propTypes = {
  searchTwitter: PropTypes.string.isRequired
};

function mapStateToProps({ searchTwitter }) {
  return { searchTwitter };
}

export default connect(mapStateToProps)(FrontPage);
