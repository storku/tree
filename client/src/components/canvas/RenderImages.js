// render the images for Canvas
// this is needed to make it work on Chrome :(
// render the image tags and put onto the page as invisible
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/';

import {
  PLANT_1,
  PLANT_2,
  PLANT_3,
  PLANT_4,
  PLANT_5,
  PLANT_6,
  BACKGROUND_IMAGES
} from './constants';

const {
  plant1File,
  plant2File,
  plant3File,
  plant4File,
  plant5File,
  plant6File
} = BACKGROUND_IMAGES;

class RenderImages extends Component {
  constructor() {
    super();
    this.state = {
      plant1Render: <img src={plant1File} alt={PLANT_1} />,
      plant2Render: <img src={plant2File} alt={PLANT_2} />,
      plant3Render: <img src={plant3File} alt={PLANT_3} />,
      plant4Render: <img src={plant4File} alt={PLANT_4} />,
      plant5Render: <img src={plant5File} alt={PLANT_5} />,
      plant6Render: <img src={plant6File} alt={PLANT_6} />
    };
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

  render() {
    return <React.Fragment>{this.renderImages()}</React.Fragment>;
  }
}

RenderImages.propTypes = {
  getImages: PropTypes.func.isRequired
};

export default connect(null, actions)(RenderImages);
