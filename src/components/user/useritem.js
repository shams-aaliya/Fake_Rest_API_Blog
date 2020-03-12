import React from 'react';
import { Link } from 'react-router-dom';

const Useritem = props => {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <h4>{props.user.username}</h4>
      <p>{props.user.email}</p>
      <Link to={`/post/${props.user.id}`}>View Post</Link>
    </div>
  );
};

export default Useritem;
