// used to be old/MouseInput.old.js
// Note that did not import React from 'react' at the start
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GRID_W, GRID_H } from './constants';
// import { GRID_GAP, START_W, START_H } from './constants';
// import { colorText, colorRect } from './graphicsCommon';

class ClickDraw extends Component {
  componentDidUpdate(prevProps) {
    const { getMouseCoords, currentTools, getCanvasContext } = this.props;
    // respond to a click, if getMouseCoords (aka click) exist and
    // currentTools did NOT change then we draw an image
    if (getMouseCoords && prevProps.currentTools === currentTools) {
      const { canvas, ctx } = getCanvasContext;
      const { x, y } = getMouseCoords;

      this.clickDraw(canvas, ctx, x, y);
    }
  }

  clickDraw(canvas, ctx, x, y) {
    const tileOverCol = Math.floor(x / GRID_W);
    const tileOverRow = Math.floor(y / GRID_H);
    console.log('tiles:', tileOverCol, tileOverRow);

    const { getImages, currentTools } = this.props;
    // if using the watering can, change the image
    let image = getImages[2];
    if (currentTools === 'Watering_Can') {
      image = getImages[4];
    } else if (currentTools === 'Bunny') {
      image = getImages[3];
    } else if (currentTools === 'Christmas_Penguin') {
      image = getImages[5];
    } else if (currentTools === 'Corgi') {
      image = getImages[1];
    } else if (currentTools === 'Derpy_Mushroom') {
      image = getImages[5];
    }
    // } else if (currentTools === 'Dragon') {
    //   image = getImages[3]
    // }

    ctx.drawImage(
      image,
      GRID_W * tileOverCol,
      GRID_H * tileOverRow,
      GRID_W,
      GRID_H
    );
  }

  render() {
    return null;
  }
}

ClickDraw.propTypes = {
  getMouseCoords: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ x: PropTypes.number, y: PropTypes.number })
  ]).isRequired,
  currentTools: PropTypes.string.isRequired,
  getCanvasContext: PropTypes.objectOf(PropTypes.object).isRequired,
  getImages: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps({
  getCanvasContext,
  getImages,
  getMouseCoords,
  currentTools
}) {
  return {
    getCanvasContext,
    getImages,
    getMouseCoords,
    currentTools
  };
}

export default connect(mapStateToProps)(ClickDraw);
