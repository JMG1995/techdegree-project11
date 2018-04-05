import React from 'react';
import { NavLink } from 'react-router-dom';
// components
import SearchInput from './SearchInput';

class Navigation extends React.Component {

 /**
   * changes url search route based on user input
   * @param query
   */

 // causes document to load at the specified url
  navigateURL = (query) => {
    window.location.assign(`/search/${query}`);
  }

  render() {
    return (
      // searchbar and suggested images links - NavLink allows url redirect
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