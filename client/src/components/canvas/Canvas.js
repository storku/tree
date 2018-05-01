import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { colorCircle } from './graphicsCommon';
// import { mouseInput } from './input';
import { levelTwo } from './levels/levels';
import { drawGrid } from './garden';
import RenderImages from './RenderImages';
import MouseInput from './MouseInput';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvas = this.refs.canvas;
    // const ctx = canvas.getContext('2d');
    this.ctx = this.canvas.getContext('2d');

    //pass the canvas and ctx to the action creator
    this.props.getCanvasContext({ canvas: this.canvas, ctx: this.ctx });
    //Don't use window.onload because Link tag from
    //React Router Dom does not call it!!!
    //Fix it!!!
    window.onload = () => {
      const level = this.loadLevel(levelTwo);

      colorCircle(this.ctx, 300, 300, 400, 'rgb(0, 128, 0, 0.5)');

      //in actions/getImages, use Promise.all or someting similar
      //to get all images to load then dispatch the action!
      if (this.props.plantPics) {
        drawGrid(this.ctx, level, this.props.plantPics);
      }

      //print the canvas as 1 picture
      // const dataURL = canvas.toDataURL();
      // console.log(dataURL);

      //enable clicking on canvas elements
      // mouseInput(this.canvas, this.ctx);
    };
  }

  loadLevel(whichLevel) {
    return [...whichLevel];
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={800} height={800} />
        <RenderImages />
        <MouseInput context={this.ctx} />
      </div>
    );
  }
}

function mapStateToProps({ getImages }) {
  return { plantPics: getImages };
}

export default connect(mapStateToProps, actions)(Canvas);
