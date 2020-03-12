import React, { Component } from 'react';
import Postitem from './Postitem';

export class post extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(p => this.setState({ posts: p }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Postitem key={post.id} posts={post} />
        ))}
      </div>
    );
  }
}

export default post;
