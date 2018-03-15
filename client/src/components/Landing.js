//root page / landing page
import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Landing = () => {
  return (
    <div>
      <Message>
        <Message.Header>
          Welcome to the Landing page of Reddit-clone!
        </Message.Header>
        <Icon color="red" name="heart" /> Welcome everyone!
      </Message>
    </div>
  );
};

export default Landing;
