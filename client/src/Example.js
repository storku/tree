import React, { Component } from 'react';
import { Form, TextArea, Button, Segment } from 'semantic-ui-react';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Form>
          <TextArea placeholder="@NancyPelosi Ma'am, please consider voting for greater gun control legislation. We don't want to wear bulletproof vests to proms and sports games to feel safe. #GunControl #DontBeAFashionVictim" />
        </Form>
        <Button primary floated="right">
          Submit
        </Button>
        <br />
        <br />
        <h4>Popular Hashtags</h4>
        <Button>#DontBeAFashionVictim</Button>
        <Button>#GunControl</Button>
        <Button>#NeverAgain</Button>
        <Button>#VoteForOurLives</Button>
        <Button>#EnoughIsEnough</Button>
        <h4>Popular Messages</h4>
        <Segment>Help me to pass sensible guncontrol legislation!</Segment>
        <Segment>
          We Do Not want to wear kevlar body armor to our football games!
        </Segment>
        <Segment>I want to feel safe at my homecoming dance! </Segment>
      </div>
    );
  }
}

export default FrontPage;
