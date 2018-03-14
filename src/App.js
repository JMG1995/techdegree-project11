import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import apiKey from './Config.js';
import './App.css';

function Searchbar() {
  return (
    <div className="search-bar-container">
      <input id="search-bar" type="text" placeholder="Search..." name="Search" />
      <button id="search-button">
          <svg id="search-icon" fill="#000" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
      </button>
    </div>
  );
}

function FeaturedGifs(props) {
  return (
    <div className="gif-names-container">
      <span className="gif-names">{props.gifname}</span>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <Searchbar />
          {/* <Route exact path="/" component={Home} />  */}
          <FeaturedGifs gifname="Coffee" />
          <FeaturedGifs gifname="Music" />
          <FeaturedGifs gifname="Nature" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
