import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Homecard from './components/card/home-card';
import ChartCard from './components/card/chart-card';
import './App.css';

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
            <Route path="/" exact component={Homecard}/>
            <Route path="/stats" component={ChartCard}/>
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
