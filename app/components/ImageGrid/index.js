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
      images:[]
    }
  }

  componentWillMount()
  {
    this.getPhotos();
  }

  getPhotos = () =>
  {
    fetch('http://localhost:8000/api/getPhotos', {
      method: 'GET'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        images:json.photos
      })
      this.forceUpdate();
    }.bind(this))
  }

  render() {
    return (
      <div>
        <div className="grid">
        {this.state.images.map((image, index) => (
          <div className="gridItem" key={index}>
            <img src={image.photoURL} className="gridImage" />

            <figure className="description">
              <p><figcaption>{image.description}</figcaption></p>
            </figure>



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
