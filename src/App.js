import React from 'react';
import { Route, Switch } from 'react-router-dom';

// App components
import Navigation from './components/Navigation';
import Home from './components/Home';
import ImageContainer from './components/ImageContainer';
import PageNotFound from './components/PageNotFound';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      // app layout
          <div id="page-container">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} /> 
              {/* :query is whatever the user searches */}
              <Route exact path="/search/:query" component={ImageContainer} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
    );
  }
}

export default App;
