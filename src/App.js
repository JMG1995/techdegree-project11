import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import Navigation from './components/Navigation';
import ImageList from './components/ImageList';
import Home from './components/Home';
import ImageContainer from './components/ImageContainer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
          <div id="page-container">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search/:query" component={ImageContainer} />

            </Switch>
            <div className="main-content">
              <ImageList data={this.state.photos} />
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
