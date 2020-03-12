import React, { Component } from 'react';

class SinglePost extends Component {
  constructor() {
    super();
    this.state = {
      s_p: {},
      comments: []
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(post => this.setState({ s_p: post }));

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/comments`
    )
      .then(res => res.json())
      .then(com => this.setState({ comments: com }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.s_p.title}</h1>
        <p>{this.state.s_p.body}</p>

        <div>
          {this.state.comments.map(comm => (
            <div key={comm.id}>
              <h4>{comm.name}</h4>
              <h4>{comm.email}</h4>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SinglePost;
