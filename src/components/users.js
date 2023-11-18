// src/components/ArticleList.js
import React from 'react';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={ user.id }>
            <div className="profile-top-section" style={{ color: 'white', padding: '20px 0', display: 'flex', alignItems: 'center', borderRadius: '10px', borderColor: 'black', borderWidth: '30dp'  }}>
                <div className="profile-pic" style={{ background: 'gray', borderRadius: '50%', width: '100px', height: '100px',  marginLeft: '15%' }}>
                <img
                    src={`data:image/jpeg;base64,${user.image}`}
                    style={{ maxWidth: '100px', maxHeight: '100px'}}
                /> 
                </div>
                
                <div className="info-box" style={{ background: 'gray', padding: '10px 20px', borderRadius: '10px', textAlign: 'center', marginLeft: '15%'}}>
                    <div>{ user.username }</div>
                </div>
                
                <div className="info-box" style={{ background: 'gray', padding: '10px 20px', borderRadius: '10px', textAlign: 'center', marginLeft: '15%'}}>
                    <div>{ user.name }</div>
                </div>
            </div>

            <br />
        </div>
      ))}

    </div>
  );
}

export default UserList;
