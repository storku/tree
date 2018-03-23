//front page of the app
import React, { Component } from 'react';
import FrontPageList from './FrontPageList';
import FrontPageBottom from './FrontPageBottom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Message, Icon } from 'semantic-ui-react';

class FrontPage extends Component {
  componentDidMount() {
    this.props.getHackerNewsStories(this.props.match.params.pageID);
  }

  render() {
    return (
      <div>
        <Message>
          <Message.Header>
            Welcome to the front page of HackerNews-clone!
          </Message.Header>
          <Icon color="red" name="heart" /> Welcome everyone!
        </Message>
        <FrontPageList />
        <FrontPageBottom />
      </div>
    );
  }
}

export default connect(null, actions)(FrontPage);
