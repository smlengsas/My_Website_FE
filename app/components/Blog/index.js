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
            <a href="/my-blog-post">My blog post</a>

            </h3>

          </header>

          <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis. More text. More text. More text. More text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis. More text. More text. More text. More text.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis. More text. More text. More text. More text.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis. More text. More text. More text. More text.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis. More text. More text. More text. More text.</p>
          </section>

          <blockquote cite="https://www.linkedin.com/in/sarah-lengsas-759898140">
            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</q>
          </blockquote>

          <footer>
            <small>
            Posted on <time datetime="2017-09-13T10:00">Sep 13</time> in <a href="/category/ideas">Ideas</a>
            </small>
          </footer>

        </article>


      </div>
    );
  }
}

Blog.contextTypes = {
  router: React.PropTypes.object
};
