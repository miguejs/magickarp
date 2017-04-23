import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './cards/home/home';
import Stats from './cards/stats/stats';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/stats" component={Stats}/>
            <Route component={NoMatch}/>
          </Switch>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stats">Stats</Link></li>
          </ul>
          </div>
        </Router>

    );
  }
}

export default App;
