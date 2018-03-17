//render content for each individual post
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import * as actions from '../../actions';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted
import Comments from './Comments';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //call the action creator getHackerNewsStory
    //pass in the postID from <Route> in App.js
    this.props.getHackerNewsStory(this.props.match.params.postID);
  }

  //create the main section of the post (above the comments)
  renderMain() {
    const { id, by, score, time, title, url } = this.props.story;
    return (
      <div>
        <Message id={id}>
          <Message.Header as="a" href={url}>
            {title}
          </Message.Header>
          {score} points by {by} {moment(time * 1000).fromNow()} | hide | past |
          web | favorite | comments
        </Message>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderMain()}
        <Comments postID={this.props.match.params.postID} />
      </div>
    );
  }
}

function mapStateToProps({ story }) {
  return { story };
}

export default connect(mapStateToProps, actions)(Post);
