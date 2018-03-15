import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import apiKey from './Config.js';
import './App.css';

// App components
import Navigation from './Navigation';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <Navigation />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
