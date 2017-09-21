/**
*
* SignInBox
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SignInBox extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      email:"",
      password:""
    }
  };

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }

  signIn = () => {
    let _this=this;
    let data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);

    fetch('http://localhost:8000/api/signIn', {
      method: 'POST',
      body:data
    })
    .then(function(response){
      return response.json();

    })
    .then(function(json){
      if(json.error){
        alert(json.error)
      }
      else if (json.token){
        sessionStorage.setItem("token", json.token);
        alert("Greetings, Paladin");
        _this.context.router.push("/blogInput");
      }
    })
  }

  render() {
    return (
      <div>
        <div className="signInContainer">
          <input type="text" className="signInName" onChange={this.handleEmail} onKeyDown={this.handleEnter}value={this.state.email} />
          <input type="password" className="signInPassword" onChange={this.handlePassword} value={this.state.password}/>
          <input type="submit" value="Enter" className="signInButton" onClick={this.signIn} />
        </div>

      </div>
    );






  }
}

SignInBox.contextTypes = {
  router: React.PropTypes.object
};
