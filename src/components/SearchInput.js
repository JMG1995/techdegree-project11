import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchImages: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // update state
  searchFlickr = (e) => {
    this.setState({ searchImages: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchImages);
  }

  render() {
    return (
      <form className="search-bar-container" onSubmit={this.handleSubmit}>
        <input
          id="search-bar"
          type="search"
          placeholder="Search..."
          name="Search"
          onChange={this.searchFlickr}
          ref={(input) => this.query = input}
        />

        <button id="search-button">
          <svg id="search-icon" fill="#000" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    );
  }
}

export default SearchInput;