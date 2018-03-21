//render all the comments for a post
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import * as actions from '../../actions';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted
import PropTypes from 'prop-types';

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
          <List.Icon name="thumbs up" color="yellow" size="large" />
          <List.Content>
            <List.Header>
              {comment.by} {moment(comment.time * 1000).fromNow()} id:{' '}
              {comment.id}
            </List.Header>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </List.Content>
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

//check the type of this.props.comments to make sure it is an array
TopLevelComments.propTypes = {
  comments: PropTypes.array.isRequired
};

function mapStateToProps({ comments }) {
  return { comments };
}

export default connect(mapStateToProps, actions)(TopLevelComments);
