import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './cards/home/home';
import Stats from './cards/stats/stats';
import NoMatch from './not-found';

class Root extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Provider store={this.props.store} >
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
      </Provider>
    );
  }
}


export default Root;
