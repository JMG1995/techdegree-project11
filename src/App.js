import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import SearchInput from './components/SearchInput';
import Navigation from './components/Navigation';
import ImageList from './components/ImageList';
import Home from './components/Home';
import ImageContainer from './components/ImageContainer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  render() {
    console.log(this.state.images);
    return (
      <BrowserRouter>
          <div id="page-container">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search/:query" component={ImageContainer} />

            </Switch>
            <div className="main-content">
              <ImageList data={this.state.images} />
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
