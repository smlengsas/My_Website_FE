/**
*
* PhotoUpload
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class PhotoUpload extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      photo:"",
      preview:"",
      description:""
    }
  }

  handlePhoto = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        photo: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  storePhoto = () => {
    let _this=this;
    let data = new FormData();
    data.append('photo', this.state.photo);
    data.append('photoDescription', this.state.description);

    fetch('http://localhost:8000/api/storePhoto', {
      method:'POST',
      body:data
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.error)
      {
        alert(json.error);
      }
      else if(json.success)
      {
        alert(json.success);
        _this.setState({
          photo:"",
          preview:"",
          description:""
        })
      }
    })
  }

  handleDescription = (event) => {
    this.setState({
      description:event.target.value
    })
  }

  render() {
    return (
      <div className="photoContainer">
        <p><input type="file" onChange={this.handlePhoto}/></p>
        <p><input type="text" value={this.state.description} onChange={this.handleDescription}/></p>
        <p><input type="submit" value="Submit" onClick={this.storePhoto} /></p>
        <p><img src={this.state.preview}/></p>

      </div>
    );
  }
}

PhotoUpload.contextTypes = {
  router: React.PropTypes.object
};
