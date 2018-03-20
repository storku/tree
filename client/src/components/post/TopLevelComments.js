//render all the comments for a post
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import * as actions from '../../actions';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted

class TopLevelComments extends Component {
  componentDidMount() {
    //call the action creator getPostComments
    //pass in the postID from <Route> in App.js
    this.props.getTopLevelComments(this.props.postID);
  }

  //create the comments
  renderComments() {
    return this.props.comments.map(comment => {
      //comment.text from hacker news is raw html
      //createMarkup and dangerouslySetInnerHTML are used because
      //setting HTML from code is risky, it can
      //expose your users to a cross-site scripting (XSS) attack
      function createMarkup() {
        return { __html: comment.text };
      }

      return (
        <List.Item key={comment.id}>
          <div dangerouslySetInnerHTML={createMarkup()} /> by {comment.by}
        </List.Item>
      );
    });
  }

  render() {
    return (
      <div className="comments">
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

export default connect(mapStateToProps, actions)(TopLevelComments);
