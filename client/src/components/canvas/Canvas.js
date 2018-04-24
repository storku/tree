import React, { Component } from 'react';
import {
  GRID_W,
  GRID_H,
  GRID_GAP,
  GRID_COLS,
  GRID_ROWS,
  START_W,
  START_H
} from './constants';
import { colorRect, colorCircle } from './graphicsCommon';
import { levelOne } from './levels/levels';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.levelGrid = [];
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    //Don't use window.onload because Link tag from
    //React Router Dom does not call it!!!
    //Fix it!!!
    window.onload = () => {
      colorCircle(ctx, 300, 300, 300, 'green');

      this.levelGrid = this.loadLevel(levelOne);
      console.log(this.levelGrid);

      this.drawGrid(ctx);
      // const dataURL = canvas.toDataURL();
      // console.log(dataURL);
    };
  }

  loadLevel(whichLevel) {
    return [...whichLevel];
  }

  rowColToArrayIndex(col, row) {
    return col + GRID_COLS * row;
  }

  drawGrid(ctx) {
    for (let eachRow = 0; eachRow < GRID_COLS; eachRow++) {
      for (let eachCol = 0; eachCol < GRID_ROWS; eachCol++) {
        const arrayIndex = this.rowColToArrayIndex(eachCol, eachRow);

        if (this.levelGrid[arrayIndex] === 0) {
          colorRect(
            ctx,
            GRID_W * eachCol + START_W,
            GRID_H * eachRow + START_H,
            GRID_W - GRID_GAP,
            GRID_H - GRID_GAP,
            'gray'
          );
        } else if (this.levelGrid[arrayIndex] === 1) {
          colorRect(
            ctx,
            GRID_W * eachCol + START_W,
            GRID_H * eachRow + START_H,
            GRID_W - GRID_GAP,
            GRID_H - GRID_GAP,
            'black'
          );
        }

        // if(brickGrid[arrayIndex]) {
        // 	colorRect(GRID_W*eachCol,GRID_H*eachRow,
        // 		GRID_W-GRID_GAP,GRID_H-GRID_GAP, 'blue');
        // }
      }
    }
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={600} height={600} />
      </div>
    );
  }
}

function mapStateToProps({ searchTwitter }) {
  return { searchTwitter };
}

export default Canvas;
