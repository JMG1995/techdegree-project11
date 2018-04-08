import React from 'react';
import { NavLink } from 'react-router-dom';
// components
import SearchField from './SearchField';

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation-container">
        <SearchField />
        <ul className="gif-name-container">
          <li className="image-names">
            <NavLink className="image-names-text" to='/coffee'>Coffee</NavLink>
          </li>
          <li className="image-names">
            <NavLink className="image-names-text" to='/music'>Music</NavLink>
          </li>
          <li className="image-names">
            <NavLink className="image-names-text" to='/nature'>Nature</NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default Navigation;