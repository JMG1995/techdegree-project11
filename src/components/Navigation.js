import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
// components
import SearchField from './SearchField';
import SearchButton from './SearchButton';

class Navigation extends React.Component {

  render() {
    return (
      <div className="navigation-container">
        <Switch>
          <Route exact path="/search" component={SearchField} />
          <Route path="" component={SearchButton} />
        </Switch>
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