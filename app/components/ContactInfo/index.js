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
      <div className='contact-div'>
        <div>

          <article className="contactBox">

            <header className='header'>
              <h3>
              <b>Sassy Lines / Graphic Designs</b>

              </h3>

            </header>

            <section>
              <p> ~ Contemporary Design ~ </p>
              <p> ~ Artistic Ingenuity ~ </p>
              <p> ~ Imaginative Ideas ~ </p>

            </section>

            <section>
              <p><i>What Can Design Do For You? </i></p>
              <p>Contact Sarah Lengsas at </p>
              <p>Sassy Lines / Graphic Designs</p>
              <p>for all of your Design Questions, </p>
              <p>Needs, Comments, and Ideas.</p>

            </section>

          </article>
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
