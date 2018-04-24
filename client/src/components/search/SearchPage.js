import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../search/SearchBar';
import { Icon, Button } from 'semantic-ui-react';

class SearchPage extends Component {
  render() {
    const username = this.props.match.params.id;
    return (
      <div className="SearchPage">
        <SearchBar />
        <h2>
          <Icon name="search" />
          {username}
        </h2>
        <h4>Twitter</h4>
        <a href={`https://twitter.com/${username}`}>{username}</a>
        <Button primary as="a" href={`/twitter/${username}`}>
          Go Twitter!
        </Button>
        <h4>Instagram</h4>
        <a href={`https://www.instagram.com/${username}`}>{username}</a>
        <Button primary as="a" href={`/instagram/${username}`}>
          Go Instagram!
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ repInfo }) {
  return { repInfo };
}

export default connect(mapStateToProps)(SearchPage);
