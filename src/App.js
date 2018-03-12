import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Flickr API key = e2a883a075fef270fc9a0a5b636f2d45

function Searchbar() {
  return (
    <div className="search-bar-container">
      <input className="search-bar" type="text" placeholder="Search..." name="Search" />
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
