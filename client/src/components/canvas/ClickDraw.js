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

    ctx.drawImage(
      this.props.getImages[2],
      GRID_W * tileOverCol,
      GRID_H * tileOverRow,
      GRID_W,
      GRID_H
    );
  }

  componentDidUpdate() {
    //respond to a click
    if (this.props.getMouseCoords) {
      const { canvas, ctx } = this.props.getCanvasContext;
      const { x, y } = this.props.getMouseCoords;
      this.clickDraw(canvas, ctx, x, y);
    }
  }

  render() {
    console.log('rendered again');
    return <div />;
  }
}

function mapStateToProps({ getCanvasContext, getImages, getMouseCoords }) {
  return { getCanvasContext, getImages, getMouseCoords };
}

export default connect(mapStateToProps)(ClickDraw);
