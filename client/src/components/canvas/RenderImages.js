//render the images for Canvas
//this is needed to make it work on Chrome :(
//render the image tags and put onto the page as invisible
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import {
  BUNNY_1,
  CHRISTMAS_PENGUIN_2,
  CORGI_3,
  DERPY_MUSHROOM_4,
  DRAGON_5,
  HOTDOG_6,
  POOP_7,
  STATUE_OF_LIBERTY_8,
  UFO_9
} from './constants';

import plant1File from '../../images/plants/bunny.png';
import plant2File from '../../images/plants/christmas_penguin.png';
import plant3File from '../../images/plants/corgi.png';
import plant4File from '../../images/plants/derpy_mushroom.png';
import plant5File from '../../images/plants/dragon.png';
import plant6File from '../../images/plants/hotdog.png';
import plant7File from '../../images/plants/poop.png';
import plant8File from '../../images/plants/statue_of_liberty.png';
import plant9File from '../../images/plants/ufo.png';

class RenderImages extends Component {
  constructor() {
    super();
    this.state = {
      plant1Render: <img src={plant1File} alt={BUNNY_1} />,
      plant2Render: <img src={plant2File} alt={CHRISTMAS_PENGUIN_2} />,
      plant3Render: <img src={plant3File} alt={CORGI_3} />,
      plant4Render: <img src={plant4File} alt={DERPY_MUSHROOM_4} />,
      plant5Render: <img src={plant5File} alt={DRAGON_5} />,
      plant6Render: <img src={plant6File} alt={HOTDOG_6} />,
      plant7Render: <img src={plant6File} alt={POOP_7} />,
      plant8Render: <img src={plant6File} alt={STATUE_OF_LIBERTY_8} />,
      plant9Render: <img src={plant6File} alt={UFO_9} />
    };
  }
  renderImages() {
    const {
      plant1Render,
      plant2Render,
      plant3Render,
      plant4Render,
      plant5Render,
      plant6Render,
      plant7Render,
      plant8Render,
      plant9Render
    } = this.state;

    return (
      <div style={{ display: 'none' }}>
        {plant1Render} {plant2Render}
        {plant3Render}
        {plant4Render}
        {plant5Render}
        {plant6Render}
        {plant7Render}
        {plant8Render}
        {plant9Render}
      </div>
    );
  }

  componentDidMount() {
    const imageURLs = [
      null,
      plant1File,
      plant2File,
      plant3File,
      plant4File,
      plant5File,
      plant6File,
      plant7File,
      plant8File,
      plant9File
    ];
    this.props.getImages(imageURLs);
  }

  render() {
    return <React.Fragment>{this.renderImages()}</React.Fragment>;
  }
}

export default connect(null, actions)(RenderImages);
