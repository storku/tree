import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoDetect from './AutoDetect';
import EnterZipcode from './EnterZipcode';

class FrontPage extends Component {
  render() {
    console.log(this.props.repInfo);
    return (
      <div>
        <h2>Welcome to the App</h2>
        <AutoDetect />
        <EnterZipcode />
      </div>
    );
  }
}

function mapStateToProps({ repInfo }) {
  return { repInfo };
}

export default connect(mapStateToProps)(FrontPage);
