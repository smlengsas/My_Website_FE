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
      <div classname="container blogBoxContainer">


        <article className="blogBox">

          <header>
            <h3><strong>
            <a href="/title">{this.props.blogTitle}</a>
            </strong>
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
