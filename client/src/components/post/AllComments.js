//display all comments for a post
import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

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
              <span>
                ID: {comment.id} Text:{' '}
                <div
                  dangerouslySetInnerHTML={this.createMarkup(comment.text)}
                />
              </span>
              {comment.children && <AllComments children={comment.children} />}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default AllComments;
