"use client"


import React, { useState, useEffect } from 'react';

const User = ({ id, image, username, name, surname, email, followerCount, followingCount }) => {
  return (
    <div>       
          <div>
            <p>Id: {id}</p>
            <p>Username: {username}</p>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Email: {email}</p>
            <p>Followers: {followerCount}</p>
            <p>Followings: {followingCount}</p>
          </div>
    </div>

  );
};

export default User;
