import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'; //required to use this.props.history.push

class AutoDetect extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.success = this.success.bind(this);
  }

  success(position) {
    const coords = position.coords;
    this.props.fetchLocation(coords);
    this.props.history.push('/reps');
  }

  handleClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(this.success);
  }

  render() {
    return <Button onClick={this.handleClick}>Detect Your Reps!</Button>;
  }
}

export default withRouter(connect(null, actions)(AutoDetect));
