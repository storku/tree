//used to be old/MouseInput.old.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GRID_W, GRID_H } from './constants';
// import { GRID_GAP, START_W, START_H } from './constants';
// import { colorText, colorRect } from './graphicsCommon';

class ClickDraw extends Component {
  clickDraw(canvas, ctx, x, y) {
    const tileOverCol = Math.floor(x / GRID_W);
    const tileOverRow = Math.floor(y / GRID_H);
    console.log('tiles:', tileOverCol, tileOverRow);

    const { getImages, currentTools } = this.props;
    //if using the watering can, change the image
    let image = getImages[2];
    if (currentTools === 'Watering_Can') {
      image = getImages[4];
    }

    ctx.drawImage(
      image,
      GRID_W * tileOverCol,
      GRID_H * tileOverRow,
      GRID_W,
      GRID_H
    );
  }

  componentDidUpdate(prevProps) {
    const { getMouseCoords, currentTools, getCanvasContext } = this.props;
    //respond to a click, if getMouseCoords (aka click) exist and
    //currentTools did NOT change then we draw an image
    if (getMouseCoords && prevProps.currentTools === currentTools) {
      const { canvas, ctx } = getCanvasContext;
      const { x, y } = getMouseCoords;

      this.clickDraw(canvas, ctx, x, y);
    }
  }

  render() {
    console.log('rendered again');
    return null;
  }
}

function mapStateToProps({
  getCanvasContext,
  getImages,
  getMouseCoords,
  currentTools
}) {
  return { getCanvasContext, getImages, getMouseCoords, currentTools };
}

export default connect(mapStateToProps)(ClickDraw);
