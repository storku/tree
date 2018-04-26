import React, { Component } from 'react';
import { colorCircle } from './graphicsCommon';
import { mouseInput } from './input';
import { levelOne } from './levels/levels';
import { drawGrid } from './garden';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelGrid: []
    };

    //this.updateAll = this.updateAll.bind(this);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    //Don't use window.onload because Link tag from
    //React Router Dom does not call it!!!
    //Fix it!!!
    window.onload = () => {
      const level = this.loadLevel(levelOne);
      this.setState({
        levelGrid: level
      });

      colorCircle(ctx, 300, 300, 300, 'green');

      drawGrid(ctx, this.state.levelGrid);
      // const dataURL = canvas.toDataURL();
      // console.log(dataURL);

      mouseInput(canvas, ctx);
    };
  }

  loadLevel(whichLevel) {
    return [...whichLevel];
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
