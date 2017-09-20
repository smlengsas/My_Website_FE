/*
 *
 * SignI3Nn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import SignInBox from 'components/SignInBox';

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <div className="container signInBackground">
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

        <NavBar/>
        <SignInBox/>
      </div>
    );
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object
};
