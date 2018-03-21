//hierarchical tree from flat tree, tree view, React Recursive Component
//https://stackoverflow.com/questions/28205317/how-to-render-child-components-in-react-js-recursively
//https://stackoverflow.com/questions/31383869/converting-flat-structure-to-hierarchical
import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

async function getKids() {
  //const uri = '2921506';
  const uri = '16613345';
  const url = 'https://hacker-news.firebaseio.com/v0/item/' + uri + '.json';
  const story = await axios(url);
  const storyKids = await story.data.kids;
  const commentsTree = await getComments(storyKids);
}

let commentsTree = {};
async function getComments(kids) {
  kids.map(async kid => {
    commentsTree[kid] = {};
    const url = 'https://hacker-news.firebaseio.com/v0/item/' + kid + '.json';
    const comment = await axios(url);
    const commentKids = comment.data.kids;
    const commentParent = comment.data.parent;
    const commentID = comment.data.id;
    commentsTree[kid] = { parent: commentParent, id: commentID };
    if (commentKids) {
      console.log(commentParent, commentKids);
      //commentsTree[kid]['kids'] = commentKids;
      getComments(commentKids);
    } else {
    }
  });
}

export let roots = [];
function searchTree(tree) {
  _.map(tree, (value, key) => {
    let item = tree[key];
    console.log(item);
    if (item.parent === 16613345) {
      return roots.push(item);
    } else if (item.parent in tree) {
      let p = tree[item.parent];
      if (!('children' in p)) {
        p.children = [];
      }
      console.log(p);
      p.children.push(item);
    }
  });

  console.log(JSON.stringify(roots));
}

const tree = {
  '16613731': { parent: 16613345, id: 16613731 },
  '16613792': { parent: 16613731, id: 16613792 },
  '16613813': { parent: 16613345, id: 16613813 },
  '16613824': { parent: 16613345, id: 16613824 },
  '16613855': { parent: 16613345, id: 16613855 },
  '16613863': { parent: 16613731, id: 16613863 },
  '16613869': { parent: 16613345, id: 16613869 },
  '16613880': { parent: 16613731, id: 16613880 },
  '16613909': { parent: 16613855, id: 16613909 },
  '16614036': { parent: 16613909, id: 16614036 },
  '16614140': { parent: 16613345, id: 16614140 },
  '16614145': { parent: 16613855, id: 16614145 },
  '16614165': { parent: 16613869, id: 16614165 },
  '16614269': { parent: 16614140, id: 16614269 },
  '16614298': { parent: 16613855, id: 16614298 },
  '16614403': { parent: 16613863, id: 16614403 },
  '16614425': { parent: 16614165, id: 16614425 },
  '16614452': { parent: 16614140, id: 16614452 },
  '16614466': { parent: 16613345, id: 16614466 },
  '16614593': { parent: 16614145, id: 16614593 },
  '16614666': { parent: 16613909, id: 16614666 },
  '16614818': { parent: 16613345, id: 16614818 },
  '16614925': { parent: 16613909, id: 16614925 },
  '16614966': { parent: 16614452, id: 16614966 },
  '16614985': { parent: 16614593, id: 16614985 },
  '16615000': { parent: 16613345, id: 16615000 },
  '16615043': { parent: 16614165, id: 16615043 },
  '16615073': { parent: 16613855, id: 16615073 },
  '16615201': { parent: 16615073, id: 16615201 },
  '16615249': { parent: 16614145, id: 16615249 },
  '16615306': { parent: 16614593, id: 16615306 },
  '16615648': { parent: 16614818, id: 16615648 }
};

roots = [
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
/*
let commentsTree = {};
async function getComments(kids) {
  kids.forEach(async kid => {
    const url = 'https://hacker-news.firebaseio.com/v0/item/' + kid + '.json';
    const comment = await axios(url);
    const commentKids = comment.data.kids;
    if (commentKids) {
      //commentsTree[kid] = commentKids;
      commentsTree[kid] = commentKids.forEach(async kid => {
        const url2 =
          'https://hacker-news.firebaseio.com/v0/item/' + kid + '.json';
        const comment2 = await axios(url);
        const commentKids2 = comment.data.kids;
      });
    } else {
      return (commentsTree[kid] = '');
    }
  });
}
*/
/*
async function getComments(kids) {
  if (kids) {
    kids.map(async kid => {
      const url = 'https://hacker-news.firebaseio.com/v0/item/' + kid + '.json';
      const comment = await axios(url);
      const commentKids = await comment.data.kids;

      async function makeCommentsTree(kids) {}
      if (commentKids) {
        commentKids.map(async commentKid => {
          commentsTree[kid] = commentKid;
          return getComments([commentKid]);
        });
      } else {
        return;
      }
      //return (commentsTree[kid] = await getComments(commentKids));
    });
  }
}
*/
/*
let commentsTree = {};
async function getComments(kids) {
  if (kids) {
    for (let i = 0; i < kids.length; i++) {
      let kid = kids[i];
      const url = 'https://hacker-news.firebaseio.com/v0/item/' + kid + '.json';
      const comment = await axios(url);
      const commentKids = comment.data.kids;
      //console.log('comment', kid);
      //console.log('comment kids', commentKids);
      if (commentKids) {
        commentsTree[kid] = await getComments(commentKids);
        //console.log(JSON.stringify(commentsTree));
      } else {
        commentsTree[kid] = '';
        //console.log(JSON.stringify(commentsTree));
      }
    }
  }
}
*/

class Test extends Component {
  render() {
    /*{
      getKids();
    }
    {
      setTimeout(() => {
        console.log('Final Tree:', commentsTree);
        console.log('Fina Tree 2:', JSON.stringify(commentsTree));
      }, 5000);
    }
    */
    /*{
      searchTree(tree);
    }*/
    return <div>Hello</div>;
  }
}

class TrueTest extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="comments">
        {children.map(comment => (
          <div key={comment.id} className="comment">
            <span>{comment.id}</span>
            {comment.children && <TrueTest children={comment.children} />}
          </div>
        ))}
      </div>
    );
  }
}

export default TrueTest;
