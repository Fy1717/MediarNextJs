// src/components/ArticleList.js
import React from 'react';
import useStore from '../store/store';

function Profile() {
    const { user } = useStore();

    console.log("user 2 : ", user);

    if (!user) {
        return <div>Kullanıcı bilgisi yükleniyor...</div>;
    }

    return (
        <div>
            <div className="list-group">
                <div>Kullanıcı Adı: {user}</div>
            </div>
        </div>
    );
}


export default Profile;
