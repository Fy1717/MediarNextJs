// src/components/ArticleList.js
import React from 'react';
import useStore from '../store/store';

function Profile() {
    const { user } = useStore.getState();
    console.log("user 33: ", user);

    if (!user) {
        return <div>Kullanıcı bilgisi yükleniyor...</div>;
    }

    return (
        <div>
            <div className="list-group">
                <img
                    src={`data:image/jpeg;base64,${user.image}`}
                    alt={`${user.name}'s Profile`}
                    style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '50%' }}
                />                
                <div style={{ textAlign: 'center' }}>{user.username}</div>
                <div style={{ textAlign: 'center' }}>{user.name}</div>
                <div style={{ textAlign: 'center' }}>{user.email}</div>
                <br />
            </div>
        </div>
    );
}


export default Profile;
