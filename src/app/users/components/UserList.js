// UserList.js
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import User from "./User"

const UserList = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:8083/api/users/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then((data) => {
        //console.log("data : " + data["data"]);
        setUsers(data["data"]);
      })
      .catch((error) => {
        console.error('API isteği başarısız oldu:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => 
            {
                //console.log("ISACTIVE : " + user.activated);
                //console.log("USERNAME : " + user.username);
                //console.log("FOLLOWER COUNT : " + user.followerCount);
                //console.log("FOLLOWING COUNT : " + user.followingCount);

                //console.log("USER ID : " + user.id);

                if (user.activated) {
                  
                    return (
                        <div>
                          <li key={user.id}>
                            <User
                              key={user.id}
                              image={user.image}
                              id={user.id}
                              username={user.username}
                              name={user.name}
                              surname={user.surname}
                              email={user.email}
                              followerCount={user.followerCount}
                              followingCount={user.followingCount}
                            />
                          </li>

                          <Link href="/users/register" >
                            Güncelle
                          </Link>
                        </div>
                    )
                }
            }
        )}
      </ul>

      <br></br>

      
      <Link href="/users/register">
        Kayıt Ol
      </Link>
      
    </div>
  );
};

export default UserList;
