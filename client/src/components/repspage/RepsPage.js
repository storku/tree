import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { List, Icon, Card, Image } from 'semantic-ui-react';
import Header from '../header/Header';
import Loading from './Loading';

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
      let position = '';
      if (i === 2 || i === 3) {
        position = 'Senator';
      } else if (i === 4) {
        position = 'House of Representative';
      }
      const official = officials[i];
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
        <Card key={official.name} className="Card">
          <Image
            className="RepImage"
            src={official.photoUrl}
            alt={official.name}
          />
          <Card.Content>
            <Card.Header>{official.name}</Card.Header>
            <Card.Meta>
              {official.party} {position}
            </Card.Meta>
            <Card.Description>
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
              {/*https://developers.facebook.com/docs/plugins/page-plugin/*/}
              <a href={facebook}>Facebook</a>
              <br />
              <Icon name="youtube" size="large" color="red" />
              <a href={youtube}>YouTube</a>
              <br />
              <Icon name="discussions" size="large" color="teal" />
              <a href={url + 'Contact'}>Website Contact</a>
            </Card.Description>
          </Card.Content>
        </Card>
      );
      i++;
    }
    return listOfReps;
  }

  render() {
    return (
      <div>
        <Header />
        <h4>Representatives from the {this.props.district}</h4>
        {this.props.repInfo.offices ? this.renderReps() : <Loading />}
      </div>
    );
  }
}

function mapStateToProps({ repInfo }) {
  //get the congressional district from the repInfo
  let district = '???';
  if (repInfo.divisions) {
    const keys = Object.keys(repInfo.divisions);
    district = repInfo.divisions[keys[2]].name;
  }

  return { repInfo, district };
}

export default connect(mapStateToProps, actions)(RepsPage);
