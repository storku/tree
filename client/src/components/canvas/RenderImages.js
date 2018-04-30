//this is needed to make it work on Chrome :(
//render the image tags and put onto the page as invisible
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import {
  PLANT_1,
  PLANT_2,
  PLANT_3,
  PLANT_4,
  PLANT_5,
  PLANT_6
} from './constants';

import plant1File from '../../images/plant_1.png';
import plant2File from '../../images/plant_2.png';
import plant3File from '../../images/plant_3.png';
import plant4File from '../../images/plant_4.png';
import plant5File from '../../images/plant_5.png';
import plant6File from '../../images/plant_6.png';

class RenderImages extends Component {
  constructor() {
    super();
    this.state = {
      plant1Render: <img src={plant1File} />,
      plant2Render: <img src={plant2File} />,
      plant3Render: <img src={plant3File} />,
      plant4Render: <img src={plant4File} />,
      plant5Render: <img src={plant5File} />,
      plant6Render: <img src={plant6File} />
    };
  }
  renderImages() {
    const {
      plant1Render,
      plant2Render,
      plant3Render,
      plant4Render,
      plant5Render,
      plant6Render
    } = this.state;

    return (
      <div style={{ display: 'none' }}>
        {plant1Render} {plant2Render}
        {plant3Render}
        {plant4Render}
        {plant5Render}
        {plant6Render}
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
      plant6File
    ];
    this.props.getImages(imageURLs);
  }

  render() {
    return <div>{this.renderImages()}</div>;
  }
}

export default connect(null, actions)(RenderImages);
