//front page of the app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';
import axios from 'axios';
import * as actions from '../actions';

class FrontPageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfItems: [['Hello', 'Hi', 'One'], ['Bye', 'Cya', 'Two']]
    };
  }

  componentDidMount() {
    this.props.getHackerNewsStories();
  }

  renderStoriesList() {
    return this.props.stories.map(story => {
      return (
        <List.Item key={story.objectID}>
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
              {story.points} points by {story.author} created at{' '}
              {story.created_at} with {story.num_comments} comments
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <div>
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
