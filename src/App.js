import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import apiKey from './Config.js';

// App components
import SearchInput from './components/SearchInput';
import Navigation from './components/Navigation';
import GifList from './components/GifList';


class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    // fetch photo's from Flickr
    fetch(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=74f1294bbe65f3bb235197ef8caf56f3&tags=coffee&per_page=12&format=json&nojsoncallback=1')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ gifs: responseData });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <BrowserRouter>
        <div id="page-container">
          <Navigation />
          <div className="main-content">
            <GifList data={this.state.gifs} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
