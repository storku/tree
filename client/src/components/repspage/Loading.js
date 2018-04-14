import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export default () => (
  <div>
    <Segment padded="very">
      <Dimmer active>
        <Loader size="large">Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
);
