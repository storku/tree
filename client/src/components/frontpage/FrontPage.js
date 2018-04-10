import React, { Component } from 'react';
import { connect } from 'react-redux';
import AutoDetect from './AutoDetect';
import EnterZipcode from './EnterZipcode';

class FrontPage extends Component {
  render() {
    return (
      <div className="Box-outer">
        <div className="Box-inner">
          <h2 className="App-header">Welcome to #MsgMyRep</h2>
          <p>
            MsgMyRep (Message My Rep) allows you to find your political
            representatives based on your location and chat with individuals
            from your Congressional district!
          </p>
          <div className="Grid-wrapper">
            <AutoDetect />
            <h4 className="HeaderMiddle">OR</h4>
            <EnterZipcode />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ repInfo }) {
  return { repInfo };
}

export default connect(mapStateToProps)(FrontPage);
