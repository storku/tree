import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class TwitterPage extends Component {
  render() {
    return (
      <div>
        <h4>Popular Hashtags</h4>
        <Button.Group>
          <Button>#MsgMyRep</Button>
          <Button>#GunControl</Button>
          <Button>#NeverAgain</Button>
          <Button>#VoteForOurLives</Button>
          <Button>#EnoughIsEnough</Button>
        </Button.Group>
      </div>
    );
  }
}

export default TwitterPage;
