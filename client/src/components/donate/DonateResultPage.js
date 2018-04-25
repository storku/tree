import React, { Component } from 'react';
import { connect } from 'react-redux';

class DonatePage extends Component {
  renderCharities() {
    const { getDonation } = this.props;
    const charities = [];
    const keys = Object.keys(getDonation);
    for (let key of keys) {
      const name = getDonation[key].name;
      const value = getDonation[key].value;
      if (name !== 'Tip' && name !== 'Total Value') {
        charities.push(
          <div key={name}>
            Thank you for donating ${value} to {name}!
          </div>
        );
      } else if (name !== 'Total Value') {
        charities.push(
          <div key={name}>Thank you for tipping us ${value}!</div>
        );
      }
    }
    return charities;
  }

  renderWater() {
    const { value } = this.props.getDonation['Total Value'];
    return value;
  }

  render() {
    return (
      <div>
        <h2>Thank you for donating!</h2>
        {this.renderCharities()}
        <h4>
          Here is some water: You get{' '}
          {this.props.getDonation ? this.renderWater() : '??'} Water in your
          Watering Can!
        </h4>
      </div>
    );
  }
}

function mapStateToProps({ getDonation }) {
  return { getDonation };
}

export default connect(mapStateToProps)(DonatePage);
