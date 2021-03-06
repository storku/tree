import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'; // required to use this.props.history.push
import { Form, Input, Button } from 'semantic-ui-react';
import * as actions from '../../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit() {
    // event.preventDefault();
    const searchValue = this.state.value;
    this.props.searchTwitter(searchValue);
    // this.props.history.push(`/search/${searchValue}`);
  }

  render() {
    return (
      <Form>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={this.handleSubmit} primary>
          Submit
        </Button>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  searchTwitter: PropTypes.func.isRequired
};

export default withRouter(connect(null, actions)(SearchBar));
