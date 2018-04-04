import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button, Icon } from 'semantic-ui-react';
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
    this.setState({ detecting: false });
    const coords = position.coords;
    this.props.fetchLocation(coords);
    this.props.history.push('/reps');
  }

  handleClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(this.success);
    this.setState({ detecting: true });
  }

  render() {
    return (
      <div>
        <h4>Detect Your Reps Automatically</h4>
        {this.state.detecting ? (
          <div>
            <Icon name="spinner" size="huge" loading />
          </div>
        ) : (
          <Icon name="map pin" size="huge" />
        )}
        <br />
        <br />
        <Button onClick={this.handleClick}>Go!</Button>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(AutoDetect));
