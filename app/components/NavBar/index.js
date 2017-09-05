/**
*
* NavBar
*
*/

import React from 'react';
import { Link } from 'react-router';

import './style.css';
import './styleM.css';

export default class NavBar extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="navBar">
          <div className="siteName">Sarah Lengsas</div>

          <nav clasName="nav">
          <Link to="/" className="navButton">Home</Link>
          <Link to="/portfolio" className="navButton">Portfolio</Link>
          <Link to="/about" className="navButton">About</Link>
          <Link to="/contact" className="navButton">Contact</Link>
          <a href="https://www.linkedin.com/in/sarah-lengsas-759898140" className="navButton">LinkedIn</a>
          </nav>

        </div>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
