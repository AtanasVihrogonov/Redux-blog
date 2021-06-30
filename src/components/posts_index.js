/*
 * 3. wire up the fetchPosts action creator to the Post's index component
 */

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import action creator
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      // render jsx that represent paticular posts
      return (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// wire up connect helper
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
