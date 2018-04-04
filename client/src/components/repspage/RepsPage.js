import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { List, Icon } from 'semantic-ui-react';
import Header from '../header/Header';

//to allow the twitter popup box, a <script> tag is placed in index.html
class RepsPage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, twitter, photoUrl) {
    this.props.fetchRepPlatform(name, twitter, photoUrl);
  }

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
        if (channel.type === 'Twitter') {
          twitter = channel.id;
        }
        if (channel.type === 'Facebook') {
          facebook = channel.id;
        } else if (channel.type === 'YouTube') {
          youtube = channel.id;
        }
      }
      const url = official.urls[0];
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
              <img src={official.photoUrl} alt={official.name} />
              <br />
              <Icon name="twitter" size="large" color="blue" />
              <a
                href={
                  'https://twitter.com/intent/tweet?screen_name=' +
                  twitter +
                  '&hashtags=MsgMyRep'
                }
              >
                Twitter
              </a>
              <br />
              <Icon name="facebook" size="large" color="blue" />
              <a href={facebook}>Facebook</a>
              <br />
              <Icon name="youtube" size="large" color="red" />
              <a href={youtube}>YouTube</a>
              <br />
              <Icon name="discussions" size="large" color="teal" />
              <a href={url + 'Contact'}>Website Contact</a>
            </List.Description>
          </List.Content>
        </List.Item>
      );
      i++;
    }
    return listOfReps;
  }

  render() {
    return (
      <div>
        <Header />
        <h4>My Representatives in Congress</h4>
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

export default connect(mapStateToProps, actions)(RepsPage);
