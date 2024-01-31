// pages/profile.js
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UserList from "../../components/user/users";

function Network() {
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setUser(JSON.parse(localStorage.getItem("user")));

      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/auth/followers",
          {
            headers: {
              Authorization:
                "Bearer " + ((window || {}).localStorage || {}).token || "",
            },
          }
        );

        console.log("DATA2 : ", response);

        setFollowers(response.data.followers);
      } catch (error) {
        console.error("Article listesi alınırken hata oluştu:", error);

        //window.location.href = '/login';
      }

      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/auth/followings",
          {
            headers: {
              Authorization:
                "Bearer " + ((window || {}).localStorage || {}).token || "",
            },
          }
        );

        console.log("DATA3 : ", response);

        setFollowings(response.data.following);
      } catch (error) {
        console.error("Article listesi alınırken hata oluştu:", error);

        //window.location.href = '/login';
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <br />
      <br />

      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <br />
          <div>
            <h2>Followers</h2>
            <hr />
            <ul>
              <UserList users={followers} />
            </ul>
          </div>

          <div>
            <h2>Followings</h2>
            <hr />
            <ul>
              <UserList users={followings} />
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default Network;
