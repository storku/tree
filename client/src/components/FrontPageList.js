//front page of the app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Message, Icon } from 'semantic-ui-react';
import * as actions from '../actions';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted

class FrontPageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getHackerNewsStories();
  }

  renderStoriesList() {
    return this.props.stories.map(story => {
      return (
        <List.Item key={story.id}>
          <List.Icon
            name="star"
            size="large"
            verticalAlign="middle"
            color="yellow"
          />
          <List.Content>
            <List.Header as="a" href={story.url}>
              {story.title}
            </List.Header>
            <List.Description>
              {story.score} points by {story.by}{' '}
              {moment(story.time * 1000).fromNow()} with {story.descendants}{' '}
              comments
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
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
        <List divided relaxed>
          {this.renderStoriesList()}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ stories }) {
  return { stories };
}

export default connect(mapStateToProps, actions)(FrontPageList);
