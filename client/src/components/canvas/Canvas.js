import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { colorRect } from './graphicsCommon';
import { levelTwo } from './levels/levels';
import { drawGrid } from './garden';
import RenderImages from './RenderImages';
import ClickDraw from './ClickDraw';
import ToolBox from './toolBox/ToolBox';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();

    this.state = {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
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
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext('2d');

    //pass the canvas and ctx to the action creator
    //this.props.getCanvasContext({ canvas: this.canvas, ctx: this.ctx });

    //Don't use window.onload because Link tag from
    //React Router Dom does not call it!!!
    //Fix it!!!
    window.onload = () => {
      // this.canvas.width = this.canvas.offsetWidth;
      // this.canvas.height = this.canvas.offsetHeight;

      const level = this.loadLevel(levelTwo);

      colorRect(
        this.ctx,
        0,
        0,
        this.state.canvasWidth,
        this.state.canvasHeight,
        'rgb(0, 128, 0, 0.5)'
      );

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
        {this.props.children}
        <canvas
          ref={this.canvasRef}
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
          onMouseMove={this.handleMouseMove}
          onClick={this.handleClick}
        />
        <RenderImages />
        <ClickDraw />
        <ToolBox />
      </div>
    );
  }
}

function mapStateToProps({ getImages }) {
  return { plantPics: getImages };
}

export default connect(mapStateToProps, actions)(Canvas);
