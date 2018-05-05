import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { colorCircle } from './graphicsCommon';
import { levelTwo } from './levels/levels';
import { drawGrid } from './garden';
import RenderImages from './RenderImages';
import ClickDraw from './ClickDraw';
import WateringCan from './wateringcan/WateringCan';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();

    this.state = {
      x: 0,
      y: 0
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  loadLevel(whichLevel) {
    return [...whichLevel];
  }

  handleMouseMove(e) {
    //console.log(e);
    const rect = this.canvas.getBoundingClientRect();
    this.setState({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  handleClick(e) {
    const { x, y } = this.state;
    this.props.getMouseCoords({ x, y });
    //only needs to pass canvas and ctx when Im rendering something new???
    this.props.getCanvasContext({ canvas: this.canvas, ctx: this.ctx });
  }

  componentDidMount() {
    //this.canvas = this.refs.canvas;
    // const ctx = canvas.getContext('2d');

    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext('2d');

    //pass the canvas and ctx to the action creator
    //this.props.getCanvasContext({ canvas: this.canvas, ctx: this.ctx });

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
    };
  }

  render() {
    return (
      <div className="CanvasPage">
        <canvas
          ref={this.canvasRef}
          width={800}
          height={800}
          onMouseMove={this.handleMouseMove}
          onClick={this.handleClick}
        />
        <RenderImages />
        <ClickDraw />
        <WateringCan />
      </div>
    );
  }
}

function mapStateToProps({ getImages }) {
  return { plantPics: getImages };
}

export default connect(mapStateToProps, actions)(Canvas);
