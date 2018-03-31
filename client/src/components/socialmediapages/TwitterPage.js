//currently not used. Using twitter's own popup to send tweets
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Form, TextArea, Button } from 'semantic-ui-react';
import TwitterHashtags from './TwitterHashtags';

class TwitterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      value: '@' + this.props.repPlatform[1] + ' '
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    //event.preventDefault();
    this.props.sendTweet(this.state.value);
  }

  render() {
    const [name, twitter, photoUrl] = [...this.props.repPlatform];
    return (
      <div>
        <h2>Welcome to {name + "'s"} Twitter page</h2>
        <Form>
          <TextArea value={this.state.value} onChange={this.handleChange} />
          <Button type="submit" onClick={this.handleSubmit} primary>
            Submit
          </Button>
        </Form>
        <TwitterHashtags />
      </div>
    );
  }
}

function mapStateToProps({ repPlatform }) {
  return { repPlatform };
}

export default connect(mapStateToProps, actions)(TwitterPage);
