import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

// import { MAIN_IMAGES } from '../constants';

class Plant extends Component {
  constructor() {
    super();

    state = {
      type: '',
      width: 0,
      height: 0
    };
  }

  render() {
    return <div>Hello</div>;
  }
}

function mapStateToProps({ currentTools }) {
  return { currentTools };
}

export default connect(mapStateToProps, actions)(Plant);
