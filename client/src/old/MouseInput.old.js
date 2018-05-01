//this file become ClickDraw.js !!!!

//used to use old/input.js, but switched to this
//A better way might be to use React synthetic event onMouseMove to track mouse movements
//Check this: https://stackoverflow.com/questions/42182481/getting-mouse-coordinates-in-react
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GRID_W, GRID_H } from './constants';
// import { GRID_GAP, START_W, START_H } from './constants';
// import { colorText, colorRect } from './graphicsCommon';

class MouseInput extends Component {
  mousemoved(event, canvas, ctx) {
    let mouseX = 0;
    let mouseY = 0;

    const rect = canvas.getBoundingClientRect();
    //commented code below is used to adjust scolling but doesn't work!
    // const root = document.documentElement;

    // account for the margins, canvas position on page, scroll amount, etc.
    // mouseX = event.clientX - rect.left - root.scrollLeft;
    // mouseY = event.clientY - rect.top - root.scrollTop;

    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
    console.log(mouseX, mouseY);

    this.tileOverCol = Math.floor(mouseX / GRID_W);
    this.tileOverRow = Math.floor(mouseY / GRID_H);

    //colorText(ctx, `${tileOverCol},${tileOverRow}`, mouseX, mouseY, 'white');
    //tileOverIdx = tileCoordToIndex(tileOverCol, tileOverRow);
  }

  mouseclicked(event, ctx) {
    ctx.drawImage(
      this.props.getImages[2],
      GRID_W * this.tileOverCol,
      GRID_H * this.tileOverRow,
      GRID_W,
      GRID_H
    );

    // if (tileOverIdx < 0 || tileOverIdx >= this.levelGrid.length) {
    //   // invalid or off board
    //   return;
    // }
    //
    // if (selectedIdx != -1) {
    //   tileGrid[tileOverIdx] = tileGrid[selectedIdx]; // put the piece here (overwrite)
    //   tileGrid[selectedIdx] = NO_PIECE; // clear the spot where it was sitting
    //   selectedIdx = -1; // forget selection
    // } else if (tileGrid[tileOverIdx] != NO_PIECE) {
    //   selectedIdx = tileOverIdx;
    // }
  }

  componentDidUpdate() {
    if (this.props.getCanvasContext) {
      const { canvas, ctx } = this.props.getCanvasContext;

      canvas.addEventListener('mousemove', e =>
        this.mousemoved(e, canvas, ctx)
      );

      canvas.addEventListener('mousedown', e => this.mouseclicked(e, ctx));
    }
  }

  render() {
    return <div />;
  }
}

function mapStateToProps({ getCanvasContext, getImages }) {
  return { getCanvasContext, getImages };
}

export default connect(mapStateToProps)(MouseInput);
