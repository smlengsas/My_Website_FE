/**
*
* BlogText
*
*/

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class BlogText extends React.PureComponent {


  render() {
    return (
      <div className="container blogTextBox">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>


        <div className ="blogTitle">
          <input type="textBox" className="title"/>

        </div>


        <div className ="inputContainer">
          <input type="text" maxlength="2002562626" className="textInput" />

          <input type="submit" value="Save" className="saveButton" />
          <input type="submit" value="Post" className="postButton" />

        </div>

        <button type="button">Click Me!</button>





      </div>
    );
  }
}

BlogText.contextTypes = {
  router: React.PropTypes.object
};
