/**
*
* Blog
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Blog extends React.PureComponent {


  render() {
    return (
      <div>


        <article className="blogBox">

          <header>
            <h3>
            <a href="/my-blog-post">{this.props.blogTitle}</a>

            </h3>

          </header>

          <section>
            <p>{this.props.blogContent}</p>
          </section>

          <footer>
            <b>Created on {this.props.timeCreated} in </b>
            <c><a href="/category">{this.props.blogCategory}</a></c>
          </footer>

        </article>


      </div>
    );
  }
}

Blog.contextTypes = {
  router: React.PropTypes.object
};
