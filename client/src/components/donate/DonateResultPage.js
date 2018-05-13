import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DonateResultPage extends Component {
  renderCharities() {
    const { getDonation } = this.props;
    const charities = [];
    const keys = Object.keys(getDonation);
    // for (const key of keys) {
    keys.forEach(key => {
      const { name } = getDonation[key];
      const { value } = getDonation[key];
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
    });
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

DonateResultPage.propTypes = {
  getDonation: PropTypes.PropTypes.objectOf(PropTypes.object).isRequired
};

function mapStateToProps({ getDonation }) {
  return { getDonation };
}

export default connect(mapStateToProps)(DonateResultPage);
