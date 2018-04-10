import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../header/Header';
import Message from './Message';
import MessageBox from './MessageBox';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'cool_kid'
    };
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
        <MessageBox />
      </div>
    );
  }
}

function mapStateToProps({ chatMessages }) {
  return { chatMessages };
}

export default connect(mapStateToProps, actions)(ChatRoom);
