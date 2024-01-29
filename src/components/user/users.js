// src/components/ArticleList.js
import React from 'react';
import User from './user';

function UserList({ users }) {
  return (
    <div>
      {users.length > 0 && users.map(user => (
        <div key={ user.id }>
            <User user={user}/>
            <br />
        </div>
      ))}

    </div>
  );
}

export default UserList;
