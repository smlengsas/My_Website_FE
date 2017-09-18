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
      <div>
        <div>

          <article className="contactBox">

            <header>
              <h3>
              <b>Sassy Lines/Graphic Designs</b>

              </h3>

            </header>

            <section>
              <p>~ Contemporary Design ~ Artistic Ingenuity ~ Imaginative Ideas. </p>

            </section>

            <section>
              <p>Contact Sarah Lengsas at Sassy Lines/Graphic Designs
              for all of your Design Needs, Questions, Comments and Ideas.</p>

            </section>

          </article>
        </div>
        <div className="contactLinks">
          <a href="https://www.linkedin.com/in/sarah-lengsas-759898140" className="contactBox">LinkedIn</a>
          <a href="mailto:smlengsas@gmail.com" className="contactBox">Email</a>
          <a href="https://smlengsas.carbonmade.com/" className="contactBox">CarbonMade</a>
        </div>

      </div>
    );
  }
}

ContactInfo.contextTypes = {
  router: React.PropTypes.object
};
