/*
 *
 * Portfolio
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import ImageGrid from 'components/ImageGrid';

export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <div className="container portfolioBackground">
        <Helmet title="Portfolio" meta={[ { name: 'description', content: 'Description of Portfolio' }]}/>

        <NavBar/>
        <ImageGrid/>

      </div>
    );
  }
}

Portfolio.contextTypes = {
  router: React.PropTypes.object
};
