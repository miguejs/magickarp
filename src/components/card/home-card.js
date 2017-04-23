import React, { Component } from 'react';
import logo from './logo.svg';
import github from './github.svg';
import twitter from './twitter.svg';
import resume from './resume.svg';
import './card.css';

class HomeCard extends Component {
  render() {
    return (
     <div className="card">
        <div className="header">
          <img src={logo} className="card-logo" alt="logo" />
        </div>
        <div className="content">

        </div>
        <div className="footer">
          <a href=""> <img src={twitter} className="" alt="logo" /></a>
          <a href=""> <img src={github} className="" alt="logo" /></a>
          <a href=""> <img src={resume} className="" alt="logo" /></a>
        </div>
     </div>
    );
  }
}

export default HomeCard;
