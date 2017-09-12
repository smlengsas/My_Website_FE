/**
*
* ImageGrid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class ImageGrid extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      images:["Mock_Portfolio_1.jpg", "Mock_Portfolio_2.jpg",
      "Mock_Portfolio_3.jpg", "Mock_Portfolio_4.jpg",
      "Mock_Portfolio_5.jpg", "Mock_Portfolio_6.jpg",
      "Mock_Portfolio_7.jpg", "Mock_Portfolio_8.jpg",
      "Mock_Portfolio_9.jpg", "Mock_Portfolio_11.jpg"]
    }
  }

  render() {
    return (
      <div>
        <div className="grid">
        {this.state.images.map((image, index) => (
          <div className="gridItem" key={index}>
            <img src={require("../../IMAGES/" +image)} className="gridImage" />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

ImageGrid.contextTypes = {
  router: React.PropTypes.object
};
