import React, { Component } from 'react';

class Message extends Component {
  render() {
    const { text, user } = this.props;
    return (
      <div>
        {user}: {text}
      </div>
    );
  }
}

export default Message;
