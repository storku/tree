import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorCircle } from './graphicsCommon';
import { mouseInput } from './input';
import { levelTwo } from './levels/levels';
import { drawGrid } from './garden';
//import { loadImages, finishedLoading, plantPics } from './imageLoading';
import RenderImages from './RenderImages';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelGrid: [],
      ctxState: ''
    };
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
      //loadImages();
      if (this.props.plantPics) {
        console.log('yep, we got it here.');
        drawGrid(ctx, this.state.levelGrid, this.props.plantPics);
      }

      //print the canvas as 1 picture
      // const dataURL = canvas.toDataURL();
      // console.log(dataURL);

      //enable clicking on canvas elements
      //mouseInput(canvas, ctx);
    };
  }

  loadLevel(whichLevel) {
    return [...whichLevel];
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={800} height={800} />
        <RenderImages canvas={this.refs.canvas} />
      </div>
    );
  }
}

function mapStateToProps({ getImages }) {
  return { plantPics: getImages };
}

export default connect(mapStateToProps)(Canvas);
