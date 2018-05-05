import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import wateringCan from '../../../images/plant_8.png';

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
        <img src={wateringCan} alt="Watering Can" onClick={this.handleClick} />
      </div>
    );
  }
}

function mapStateToProps({ currentTools }) {
  return { currentTools };
}

export default connect(mapStateToProps, actions)(WateringCan);
