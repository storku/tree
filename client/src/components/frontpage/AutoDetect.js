import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

class AutoDetect extends Component {
  render() {
    return <h4>AutoDetect User Location</h4>;
  }
}

function mapStateToProps() {
  return;
}

export default connect(mapStateToProps)(AutoDetect);
