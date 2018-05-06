import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import wateringCan from '../../../images/plant_8.png';
import placeHolder from '../../../images/plant_7.png';

class WateringCan extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.activateTools('Watering_Can');
  }

  render() {
    const { currentTools } = this.props;
    return (
      <div className="WateringCan">
        {currentTools === 'Watering_Can' && <h4>Using Watering Can</h4>}
        <table>
          <tbody>
            <tr>
              <td>
                <img
                  src={wateringCan}
                  alt="Watering Can"
                  onClick={this.handleClick}
                />
              </td>
              <td>
                <img src={placeHolder} alt="Place Holder" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={placeHolder} alt="Place Holder" />
              </td>
              <td>
                <img src={placeHolder} alt="Place Holder" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={placeHolder} alt="Place Holder" />
              </td>
              <td>
                <img src={placeHolder} alt="Place Holder" />
              </td>
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

export default connect(mapStateToProps, actions)(WateringCan);
