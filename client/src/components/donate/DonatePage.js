import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import * as actions from '../../actions';
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'; //required to use this.props.history.push

const wrapperStyle = { width: 400, margin: 50 };

class DonatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      charityOneValue: 55,
      charityTwoValue: 44,
      tipValue: 1
    };

    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    this.handleChangeTip = this.handleChangeTip.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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
    const tipValueNew = event;
    const tipValueOld = this.state.tipValue;
    const diff = tipValueOld - tipValueNew;

    const charityOneValueOld = this.state.charityOneValue;
    const charityTwoValueOld = this.state.charityTwoValue;
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

  handleSubmit(event) {
    // event.preventDefault();
    // this.props.fetchRepInfo(this.state.value);
    this.props.history.push('/');
  }

  render() {
    return (
      <Form>
        <h2>Donate Dammit</h2>
        <h4>Charity 1</h4>
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={100}
            value={this.state.charityOneValue}
            onChange={this.handleChangeOne}
          />
          <p>{this.state.charityOneValue}</p>
        </div>
        <h4>Charity 2</h4>
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={100}
            value={this.state.charityTwoValue}
            onChange={this.handleChangeTwo}
          />
          <p>{this.state.charityTwoValue}</p>
        </div>
        <h4>Tip</h4>
        <div style={wrapperStyle}>
          <Slider
            min={0}
            max={100}
            value={this.state.tipValue}
            onChange={this.handleChangeTip}
          />
          <p>{this.state.tipValue}</p>
        </div>
        <Button type="submit" onClick={this.handleSubmit} primary>
          Submit
        </Button>
      </Form>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps, actions)(DonatePage));
