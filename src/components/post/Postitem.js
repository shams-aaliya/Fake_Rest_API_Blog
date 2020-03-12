import React from 'react';
import { Link } from 'react-router-dom';

const Postitem = props => {
  return (
    <div>
      <h2>{props.posts.title}</h2>
      <p>{props.posts.body}</p>
      <Link to={`/single_post/${props.posts.id}`}>READ NOW</Link>
    </div>
  );
};

export default Postitem;
