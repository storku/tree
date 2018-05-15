import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../actions';

class Tool extends Component {
  constructor(props) {
    super(props);

    this.handleChooseTool = this.handleChooseTool.bind(this);
  }

  handleChooseTool() {
    this.props.activateTools(this.props.alt);
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
          role="presentation"
        />
      </td>
    );
  }
}

Tool.propTypes = {
  activateTools: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default connect(null, actions)(Tool);
