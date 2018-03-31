import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'; //required to use this.props.history.push

class AutoDetect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detecting: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.success = this.success.bind(this);
  }

  success(position) {
    console.log('location has been detected');
    this.setState({ detecting: false });
    const coords = position.coords;
    this.props.fetchLocation(coords);
    this.props.history.push('/reps');
  }

  handleClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(this.success);
    this.setState({ detecting: true });
    console.log('detecting location');
  }

  render() {
    return (
      <div>
        {this.state.detecting ? <h5>Currently Detecting Your Location</h5> : ''}
        <Button onClick={this.handleClick}>Detect Your Reps!</Button>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(AutoDetect));
