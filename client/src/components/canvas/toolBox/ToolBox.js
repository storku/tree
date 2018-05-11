import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tool from './Tool';

import { BACKGROUND_IMAGES, MAIN_IMAGES } from '../constants';
const wateringCan = BACKGROUND_IMAGES.plant8File;

const bunnyFile = MAIN_IMAGES.bunnyFile;
const christmasPenguinFile = MAIN_IMAGES.christmasPenguinFile;
const corgiFile = MAIN_IMAGES.corgiFile;
const derpyMushroomFile = MAIN_IMAGES.derpyMushroomFile;
const dragonFile = MAIN_IMAGES.dragonFile;

class ToolBox extends Component {
  currentToolsLine() {
    if (Object.keys(this.props.currentTools).length === 0) {
      return;
    } else {
      return <p>Currently Using {this.props.currentTools}</p>;
    }
  }

  render() {
    return (
      <div className="ToolBox">
        <h4>Tool Box</h4>
        {this.currentToolsLine()}
        <table>
          <tbody>
            <tr>
              <Tool src={wateringCan} alt="Watering_Can" />
              <Tool src={bunnyFile} alt="Bunny" />
            </tr>
            <tr>
              <Tool src={christmasPenguinFile} alt="Christmas_Penguin" />
              <Tool src={corgiFile} alt="Corgi" />
            </tr>
            <tr>
              <Tool src={derpyMushroomFile} alt="Derpy_Mushroom" />
              <Tool src={dragonFile} alt="Dragon" />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ currentTools }) {
  return { currentTools };
}

export default connect(mapStateToProps)(ToolBox);
