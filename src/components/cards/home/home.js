import React, { Component } from 'react';
// images
import logo from './images/logo.svg'
import twitter from './images/twitter.svg'
import github  from './images/github.svg'
import resume from './images/resume.svg'
import './home.css';

class Home extends Component {
  render() {
    return (
     <div className="card">

        <img src={logo} alt="logo" />
        <div className="footer">
          <a href=""> <img src={twitter} className="" alt="logo" /></a>
          <a href=""> <img src={github} className="" alt="logo" /></a>
          <a href=""> <img src={resume} className="" alt="logo" /></a>
        </div>
     </div>
    );
  }
}

export default Home;
