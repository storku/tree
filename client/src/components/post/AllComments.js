//display all comments for a post
import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment'; //momentjs is used to calculate how long ago an article was posted

class AllComments extends Component {
  createMarkup(text) {
    return { __html: text };
  }

  render() {
    const { children } = this.props;
    return (
      <div className="comments">
        <List divided relaxed>
          {children.map(comment => (
            <List.Item key={comment.id}>
              <List.Icon name="thumbs up" color="orange" size="large" />
              <List.Content>
                <List.Header>
                  {comment.by} {moment(comment.time * 1000).fromNow()} id:{' '}
                  {comment.id}
                </List.Header>
                <div
                  dangerouslySetInnerHTML={this.createMarkup(comment.text)}
                />
              </List.Content>
              {comment.children && <AllComments children={comment.children} />}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

//check the type of this.props.children to make sure it is an array
AllComments.propTypes = {
  children: PropTypes.array.isRequired
};

export default AllComments;
