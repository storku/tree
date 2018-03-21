//render content for each individual post
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import * as actions from '../../actions';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted
import TopLevelComments from './TopLevelComments';
import AllComments from './AllComments';
import _ from 'lodash';

class Post extends Component {
  componentDidMount() {
    //call the action creator getHackerNewsStory
    //pass in the postID from <Route> in App.js
    this.props.getHackerNewsStory(this.props.match.params.postID);
    this.props.getCommentsTree(this.props.match.params.postID);
  }

  //resets the AllComents to empty object ({}) when component unmounts
  //so old comments don't appear on another post page
  componentWillUnmount() {
    this.props.removeAllComments();
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
          web | favorite | {this.props.commentsNumber} comments | id: {id}
        </Message>
      </div>
    );
  }

  //loads the TopLevelComments first then AllComments
  //because AllComents is Slow!
  renderComments() {
    if (!_.isEmpty(this.props.commentsTree)) {
      return <AllComments children={this.props.commentsTree} />;
    } else {
      return <TopLevelComments postID={this.props.match.params.postID} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderMain()}
        {this.renderComments()}
      </div>
    );
  }
}

function mapStateToProps({ story, commentsTree, commentsNumber }) {
  console.log(commentsTree);
  console.log(commentsNumber);
  return { story, commentsTree, commentsNumber };
}

export default connect(mapStateToProps, actions)(Post);
