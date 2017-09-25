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

  constructor() {
    super();
    this.state={
      store:'',
      listItems:[],
      blogTitle:'',
      blogContent:'',
      blogCategory:''
    }
  }

  handleBlogTitle = (event) => {
    this.setState({
      blogTitle:event.target.value
    })
  };
  handleBlogContent = (event) => {
    this.setState({
      blogContent:event.target.value
    })
  }

  handleBlogCategory = (event) => {
    this.setState({
      blogCategory:event.target.value
    })
  }

  store = () => {
    let data=new FormData();
    data.append('blogTitle', this.state.blogTitle);
    data.append('blogContent', this.state.blogContent);
    data.append('blogCategory', this.state.blogCategory);
    fetch('http://localhost:8000/api/storeBlog', {
      method: 'post',
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      let listItems = this.state.listItems;
      listItems.push(json.blog);
      this.setState({
        listItems:listItems
      })
      this.forceUpdate();
    }.bind(this));
    this.setState({
      blogTitle:'',
      blogContent:'',
      blogCategory:''
    })
  }

  render() {
    return (
      <div className="container blogTextBox">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>


        <div className ="blogTitle">
          <h3> Blog Title
            <p><input type="textBox" value={this.state.blogTitle} onChange={this.handleBlogTitle}/></p>
          </h3>
        </div>

        <div className ="blogContent">
          <p><textarea rows="20" cols="45" wrap="hard"
           value={this.state.blogContent} onChange={this.handleBlogContent} >
          </textarea></p>
        </div>

        <div className ="blogCategory">
          <footer> Category
           <p><input type= "textBox" value={this.state.blogCategory} onChange={this.handleBlogCategory}/></p>

          </footer>
        </div>

        <div className ="blogButton">

          <input type="submit" value="Post" className="postButton" onClick={() => this.store()} />

        </div>




      </div>
    );
  }
}

BlogText.contextTypes = {
  router: React.PropTypes.object
};
