/*
 *
 * BlogInput
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import BlogText from 'components/BlogText';

export default class BlogInput extends React.PureComponent {
  render() {
    return (
      <div className="container blogInputBackground">
        <Helmet title="BlogInput" meta={[ { name: 'description', content: 'Description of BlogInput' }]}/>

        <NavBar/>
        <BlogText/>
      </div>
    );
  }
}

BlogInput.contextTypes = {
  router: React.PropTypes.object
};
