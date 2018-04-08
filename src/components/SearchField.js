import React from 'react';
import SearchInput from './SearchInput';

class SearchField extends React.Component {

  /**
    * Navigates to a new search route based on user input
    * @param query
    */

  navigateURL = (query) => {
    window.location.assign(`/search/${query}`);
  }

  render() {
    return(
      <SearchInput onSubmit={this.navigateURL} />
    );
  }
}; 

export default SearchField;