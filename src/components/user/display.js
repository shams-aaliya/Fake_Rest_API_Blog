import React from 'react';
import Useritem from './useritem';

const display = props => {
  return (
    <div>
      {props.users.map(user => (
        <Useritem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default display;
