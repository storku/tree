import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoDetect from './AutoDetect';
import EnterZipcode from './EnterZipcode';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to MsgMyRep</h2>
        <AutoDetect />
        <br />
        <br />
        <EnterZipcode />
      </div>
    );
  }
}

function mapStateToProps({ repInfo }) {
  return { repInfo };
}

export default connect(mapStateToProps)(FrontPage);
