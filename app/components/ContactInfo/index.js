/**
*
* ContactInfo
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class ContactInfo extends React.PureComponent {
  render() {
    return (
      <div className='contactBox'>

        <header className='header'>
          <h1><p>Sassy Lines</p></h1>
          <h3><p>Graphic Designs</p></h3>
        </header>

        <div className="topSection">
          <h3><p> ~ Contemporary Design ~ </p>
          <p> ~ Artistic Ingenuity ~ </p>
          <p> ~ Imaginative Ideas ~ </p></h3>
        </div>

        <div className="bottomSection">
          <h2><p><i>What Can Design Do For You?</i></p></h2>
          <p>Contact Sarah Lengsas at </p>
          <h3><p>Sassy Lines / Graphic Designs</p></h3>
          <p>for all of your Design Questions,
          Needs, Comments, & Ideas.</p>
        </div>

        <div className="contactLinks">
          <a href="https://www.linkedin.com/in/sarah-lengsas-759898140" className="contactBox">LinkedIn</a>
          <a href="https://smlengsas.carbonmade.com/" className="contactBox">CarbonMade</a>
          <a href="mailto:smlengsas@gmail.com" className="contactBox">Email</a>
          <a href="/signIn" className="contactBox">Admin</a>
        </div>

      </div>
    );
  }
}

ContactInfo.contextTypes = {
  router: React.PropTypes.object
};
