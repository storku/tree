import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Tool extends Component {
  constructor() {
    super();

    this.handleChooseTool = this.handleChooseTool.bind(this);
  }

  handleChooseTool() {
    const tool = this.props.activateTools(this.props.alt);
  }

  render() {
    console.log('rendered tool');
    return (
      <td>
        <img
          height="100"
          src={this.props.src}
          alt={this.props.alt}
          onClick={this.handleChooseTool}
        />
      </td>
    );
  }
}

export default connect(null, actions)(Tool);
