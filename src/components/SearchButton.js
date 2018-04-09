import React from 'react';
import { NavLink } from 'react-router-dom';

class SearchButton extends React.Component {

  render() {
    return (
      <div id="search-button-container">
        <button className="search-button">
          <NavLink to="/search">Search</NavLink>
        </button>
      </div>
    );
  }
};

export default SearchButton;