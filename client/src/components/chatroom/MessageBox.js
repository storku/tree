import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Form, Button } from 'semantic-ui-react';

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendChatMessage(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <Form.Input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Enter A Message"
              size="large"
            />
          </Form.Field>
          <Button type="submit" onClick={this.handleSubmit} primary>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, actions)(MessageBox);
