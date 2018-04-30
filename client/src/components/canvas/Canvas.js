import React, { Component } from 'react';
import { colorCircle } from './graphicsCommon';
import { mouseInput } from './input';
import { levelTwo } from './levels/levels';
import { drawGrid } from './garden';
import { loadImages, finishedLoading, plantPics } from './imageLoading';

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
      const level = this.loadLevel(levelTwo);
      this.setState({
        levelGrid: level
      });

      colorCircle(ctx, 300, 300, 400, 'rgb(0, 128, 0, 0.5)');

      //load all the images
      loadImages();
      if (finishedLoading) {
        console.log('yep, we got it here.');
        drawGrid(ctx, this.state.levelGrid, plantPics);
        // const dataURL = canvas.toDataURL();
        // console.log(dataURL);
      }

      //mouseInput(canvas, ctx);
    };
  }

  loadLevel(whichLevel) {
    return [...whichLevel];
  }

  renderImages() {}

  render() {
    return (
      <div>
        <canvas ref="canvas" width={800} height={800} />
      </div>
    );
  }
}

function mapStateToProps({ searchTwitter }) {
  return { searchTwitter };
}

export default Canvas;
