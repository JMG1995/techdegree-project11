import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
      <ul className="gif-name-container">
        <li className="gif-names">
          <NavLink className="gif-names-text" gifname='Coffee' to='/search/coffee'>Coffee</NavLink>
        </li>
        <li className="gif-names">
          <NavLink className="gif-names-text" to='/search/music'>Music</NavLink>
        </li>
        <li className="gif-names">
          <NavLink className="gif-names-text" to='/search/nature'>Nature</NavLink>
        </li>
      </ul>
  );
}

export default Navigation;