import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';

class RepsPage extends Component {
  renderReps() {
    const listOfReps = [];
    const { officials, offices } = this.props.repInfo;
    let i = 2;
    while (i < 5) {
      const official = officials[i];
      console.log(official);
      let twitter = '';
      let facebook = '';
      let youtube = '';
      for (const channel of official.channels) {
        // if (channel.type === 'Twitter') {
        //   twitter = 'https://twitter.com/' + channel.id;
        if (channel.type === 'Facebook') {
          facebook = 'https://www.facebook.com/' + channel.id;
        } else if (channel.type === 'YouTube') {
          youtube = 'https://www.youtube.com/' + channel.id;
        }
      }
      listOfReps.push(
        <List.Item key={official.name}>
          <List.Icon
            name="star"
            size="large"
            verticalAlign="middle"
            color="yellow"
          />
          <List.Content>
            <List.Header>
              {official.name} - {official.party}
            </List.Header>
            <List.Description>
              <img src={official.photoUrl} />
              <br />
              <Icon name="twitter" size="large" color="blue" />
              <Link to="/twitter">Twitter</Link>
              <br />
              <Icon name="facebook" size="large" color="blue" />
              <a href={facebook}>Facebook</a>
              <br />
              <Icon name="youtube" size="large" color="red" />
              <a href={youtube}>YouTube</a>
            </List.Description>
          </List.Content>
        </List.Item>
      );
      i++;
    }
    return listOfReps;
  }
  // renderReps() {
  //   console.log(this.props.repInfo.officials);
  //   return this.props.repInfo.officials.map(official => {
  //     return (
  //       <List.Item key={official.name}>
  //         <List.Icon
  //           name="star"
  //           size="large"
  //           verticalAlign="middle"
  //           color="yellow"
  //         />
  //         <List.Content>
  //           <List.Header>{official.name}</List.Header>
  //           <List.Description />
  //         </List.Content>
  //       </List.Item>
  //     );
  //   });
  // }
  render() {
    return (
      <div>
        <List divided relaxed>
          {this.props.repInfo.offices ? this.renderReps() : 'Loading...'}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ repInfo }) {
  return { repInfo };
}

export default connect(mapStateToProps)(RepsPage);
