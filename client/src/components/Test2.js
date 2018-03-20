import React, { Component, PropTypes } from 'react';
import TrueTest from './Test';
import commentsTree from '../utils/getCommentsTreeFlat';

class Comments extends Component {
  async renderTree() {
    const tree = await commentsTree();
  }

  componentWillMount() {
    const tree = this.renderTree();
  }

  render() {
    {
      console.log(this.tree);
    }
    return <div>Hello</div>;
  }
}

export default Comments;

/*
const roots = [
  {
    parent: 16613345,
    id: 16613731,
    children: [
      { parent: 16613731, id: 16613792 },
      {
        parent: 16613731,
        id: 16613863,
        children: [{ parent: 16613863, id: 16614403 }]
      },
      { parent: 16613731, id: 16613880 }
    ]
  },
  { parent: 16613345, id: 16613813 },
  { parent: 16613345, id: 16613824 },
  {
    parent: 16613345,
    id: 16613855,
    children: [
      {
        parent: 16613855,
        id: 16613909,
        children: [
          { parent: 16613909, id: 16614036 },
          { parent: 16613909, id: 16614666 },
          { parent: 16613909, id: 16614925 }
        ]
      },
      {
        parent: 16613855,
        id: 16614145,
        children: [
          {
            parent: 16614145,
            id: 16614593,
            children: [
              { parent: 16614593, id: 16614985 },
              { parent: 16614593, id: 16615306 }
            ]
          },
          { parent: 16614145, id: 16615249 }
        ]
      },
      { parent: 16613855, id: 16614298 },
      {
        parent: 16613855,
        id: 16615073,
        children: [{ parent: 16615073, id: 16615201 }]
      }
    ]
  },
  {
    parent: 16613345,
    id: 16613869,
    children: [
      {
        parent: 16613869,
        id: 16614165,
        children: [
          { parent: 16614165, id: 16614425 },
          { parent: 16614165, id: 16615043 }
        ]
      }
    ]
  },
  {
    parent: 16613345,
    id: 16614140,
    children: [
      { parent: 16614140, id: 16614269 },
      {
        parent: 16614140,
        id: 16614452,
        children: [{ parent: 16614452, id: 16614966 }]
      }
    ]
  },
  { parent: 16613345, id: 16614466 },
  {
    parent: 16613345,
    id: 16614818,
    children: [{ parent: 16614818, id: 16615648 }]
  },
  { parent: 16613345, id: 16615000 }
];
*/
