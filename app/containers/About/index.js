/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import Blog from 'components/Blog';

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="container backgroundAbout">
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <NavBar/>
        <Blog/>

      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object
};
