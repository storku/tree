import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { withRouter } from 'react-router-dom'; // required to use this.props.history.push
import { Form, Button } from 'semantic-ui-react';
import * as actions from '../../actions';

const wrapperStyle = { width: 400, margin: 50 };

class DonatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      donationValue: 0,
      // total: 100,
      charityOneValue: 55,
      charityTwoValue: 44,
      tipValue: 1
    };

    this.handleDonationValue = this.handleDonationValue.bind(this);

    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.handleChangeTip = this.handleChangeTip.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDonationValue(value) {
    this.setState({
      donationValue: value
    });
  }

  handleChangeOne(event) {
    const charityOneValueNew = event;
    const charityOneValueOld = this.state.charityOneValue;
    const diff = charityOneValueOld - charityOneValueNew;
    const charityTwoValueNew = this.state.charityTwoValue + diff;
    const tipValueNew = this.state.tipValue + diff;

    if (charityTwoValueNew >= 0 && charityTwoValueNew <= 100) {
      this.setState({
        charityOneValue: charityOneValueNew,
        charityTwoValue: charityTwoValueNew
      });
    } else if (charityTwoValueNew < 0) {
      if (tipValueNew >= 0) {
        this.setState({
          charityOneValue: charityOneValueNew,
          tipValue: tipValueNew
        });
      }
    }
  }

  handleChangeTwo(event) {
    const charityTwoValueNew = event;
    const charityTwoValueOld = this.state.charityTwoValue;
    const diff = charityTwoValueOld - charityTwoValueNew;
    const charityOneValueNew = this.state.charityOneValue + diff;
    const tipValueNew = this.state.tipValue + diff;

    if (charityOneValueNew >= 0 && charityOneValueNew <= 100) {
      this.setState({
        charityOneValue: charityOneValueNew,
        charityTwoValue: charityTwoValueNew
      });
    } else if (charityOneValueNew < 0 && tipValueNew >= 0) {
      this.setState({
        charityTwoValue: charityTwoValueNew,
        tipValue: tipValueNew
      });
    }
  }

  handleChangeTip(event) {
    const {
      tipValue: tipValueOld,
      charityOneValue: charityOneValueOld,
      charityTwoValue: charityTwoValueOld
    } = this.state;

    const tipValueNew = event;
    const diff = tipValueOld - tipValueNew;

    const charityOneValueNew = charityOneValueOld + diff / 2;
    const charityTwoValueNew = charityTwoValueOld + diff / 2;

    if (
      charityOneValueNew >= 0 &&
      charityOneValueNew <= 100 &&
      charityTwoValueNew >= 0 &&
      charityTwoValueNew <= 100
    ) {
      this.setState({
        charityOneValue: charityOneValueNew,
        charityTwoValue: charityTwoValueNew,
        tipValue: tipValueNew
      });
    } else if (charityOneValueNew < 0 && charityTwoValueNew >= 0) {
      this.setState({
        charityTwoValue: charityTwoValueOld + diff,
        tipValue: tipValueNew
      });
    } else if (charityTwoValueNew < 0 && charityOneValueNew >= 0) {
      this.setState({
        charityOneValue: charityOneValueOld + diff,
        tipValue: tipValueNew
      });
    }
  }

  handleSubmit() {
    const {
      donationValue,
      charityOneValue,
      charityTwoValue,
      tipValue
    } = this.state;
    // event.preventDefault();
    this.props.getDonation({
      donationValue,
      charityOneValue,
      charityTwoValue,
      tipValue
    });
    this.props.history.push('/donate_result');
  }

  render() {
    return (
      <Form>
        <h2>Donate Dammit</h2>
        <div className="Buttons" style={{ margin: 20 }}>
          <Button onClick={e => this.handleDonationValue(1, e)}>$1</Button>
          <Button onClick={e => this.handleDonationValue(5, e)}>$5</Button>
          <Button onClick={e => this.handleDonationValue(10, e)}>$10</Button>
          <h4>${this.state.donationValue}</h4>
        </div>
        <h4>Charity 1</h4>
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={100}
            value={this.state.charityOneValue}
            onChange={this.handleChangeOne}
          />
          <p>
            ${(
              this.state.charityOneValue *
              this.state.donationValue *
              0.01
            ).toFixed(2)}{' '}
            - {this.state.charityOneValue}%
          </p>
        </div>
        <h4>Charity 2</h4>
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={100}
            value={this.state.charityTwoValue}
            onChange={this.handleChangeTwo}
          />
          <p>
            ${(
              this.state.charityTwoValue *
              this.state.donationValue *
              0.01
            ).toFixed(2)}{' '}
            - {this.state.charityTwoValue}%
          </p>
        </div>
        <h4>Tip</h4>
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={100}
            value={this.state.tipValue}
            onChange={this.handleChangeTip}
          />
          <p>
            ${(this.state.tipValue * this.state.donationValue * 0.01).toFixed(
              2
            )}{' '}
            - {this.state.tipValue}%
          </p>
        </div>
        <Button type="submit" onClick={this.handleSubmit} primary>
          Submit
        </Button>
      </Form>
    );
  }
}

DonatePage.propTypes = {
  getDonation: PropTypes.PropTypes.func.isRequired,
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.object,
    push: PropTypes.func
  }).isRequired
};

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps, actions)(DonatePage));
