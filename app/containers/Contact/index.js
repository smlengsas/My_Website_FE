/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import ContactInfo from 'components/ContactInfo';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div className="container backgroundContact ">
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

        <NavBar/>
        <ContactInfo/>

      </div>
    );
  }
}

Contact.contextTypes = {
  router: React.PropTypes.object
};
