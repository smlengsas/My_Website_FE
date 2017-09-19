/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import Blog from 'components/Blog';

export default class About extends React.PureComponent {
  constructor()
  {
    super();
    this.state = {
      blogs:[]
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/getBlogs', {
      method: 'GET'
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        blogs:json.blogs
      })
    }.bind(this))
  }

  render() {
    return (
      <div className="container backgroundAbout">
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <NavBar/>
        {this.state.blogs.map((blog, index) =>
          <Blog key={index} blogTitle={blog.title} blogContent={blog.content} timeCreated={blog.created_at} blogCategory={blog.category}/>
        )}
      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object
};
