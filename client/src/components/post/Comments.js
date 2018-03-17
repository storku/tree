//render all the comments for a post
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Message } from 'semantic-ui-react';
import * as actions from '../../actions';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //call the action creator getPostComments
    //pass in the postID from <Route> in App.js
    this.props.getPostComments(this.props.postID);
  }

  //create the comments
  renderComments() {
    return this.props.comments.map(comment => {
      return (
        <List.Item key={comment.id}>
          {comment.text} by {comment.by}
        </List.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <List divided relaxed>
          {this.renderComments()}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ comments }) {
  return { comments };
}

export default connect(mapStateToProps, actions)(Post);
