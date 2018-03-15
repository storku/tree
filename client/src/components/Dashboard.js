//dashboard page to show the user when they are logged in
import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Dashboard = () => {
  return (
    <div>
      <Message>
        <Message.Header>
          Welcome to the Dashboard page of Reddit-clone!
        </Message.Header>
        <Icon color="yellow" name="star" /> You Are Logged in!!
      </Message>
    </div>
  );
};

export default Dashboard;
