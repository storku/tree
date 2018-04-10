import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../header/Header';
import Message from './Message';
import { Form, Button } from 'semantic-ui-react';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      user: 'cool_kid'
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

  renderChatMessages() {
    return this.props.chatMessages.map(message => {
      return <Message text={message} user={this.state.user} key={message} />;
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h4>Welcome to the ChatRoom</h4>
        {this.renderChatMessages()}
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

function mapStateToProps({ chatMessages }) {
  return { chatMessages };
}

export default connect(mapStateToProps, actions)(ChatRoom);
