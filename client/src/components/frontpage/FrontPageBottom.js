import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

class FrontPageBottom extends Component {
  //render the button based on pageID
  //could not get <Link> tag / React Router to work, had to use <a> tag in button
  renderButton() {
    let { pageID } = this.props;
    pageID = parseInt(pageID);
    const backwardPageID = pageID - 1;
    const forwardPageID = pageID + 1;
    if (pageID > 1) {
      return (
        <div>
          <Button secondary as="a" href={'/news/' + backwardPageID}>
            Back
          </Button>
          <Button primary as="a" href={'/news/' + forwardPageID}>
            More
          </Button>
        </div>
      );
    } else {
      return (
        <Button primary as="a" href={'/news/' + forwardPageID}>
          More
        </Button>
      );
    }
  }
  render() {
    return <div>{this.renderButton()}</div>;
  }
}

function mapStateToProps({ pageID }) {
  return { pageID };
}

export default connect(mapStateToProps)(FrontPageBottom);
