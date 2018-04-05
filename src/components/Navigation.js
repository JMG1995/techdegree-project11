import React from 'react';
import { NavLink } from 'react-router-dom';
// components
import SearchInput from './SearchInput';

class Navigation extends React.Component {

  /**
    * Navigates to a new search route based on user input
    * @param query
    */

  navigateURL = (query) => {
    window.location.assign(`/search/${query}`);
  }

  render() {
    return (
      <div className="navigation-container">
        <SearchInput onSubmit={this.navigateURL} />
        <ul className="gif-name-container">
          <li className="image-names">
            <NavLink className="image-names-text" to='/search/coffee'>Coffee</NavLink>
          </li>
          <li className="image-names">
            <NavLink className="image-names-text" to='/search/music'>Music</NavLink>
          </li>
          <li className="image-names">
            <NavLink className="image-names-text" to='/search/nature'>Nature</NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default Navigation;