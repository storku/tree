import axios from 'axios';

export default () => {
  const commentsTree = {};
  async function getKids(commentsTree) {
    //const uri = '2921506';
    const uri = '16613345';
    const url = 'https://hacker-news.firebaseio.com/v0/item/' + uri + '.json';
    const story = await axios(url);
    const storyKids = await story.data.kids;
    return await getComments(storyKids, commentsTree);
  }

  async function getComments(kids, commentsTree) {
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
        return getComments(commentKids, commentsTree);
      } else {
        return;
      }
    });
  }
  getKids(commentsTree);
  setTimeout(() => {
    console.log('Final Tree:', commentsTree);
    console.log('Fina Tree 2:', JSON.stringify(commentsTree));
    return commentsTree;
  }, 2000);
};
