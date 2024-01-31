import React from "react";

function User({ user }) {
  return (
    <div
      className="profile-top-section"
      style={{
        color: "white",
        padding: "20px 0",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        borderColor: "black",
        borderWidth: "3px", // Piksel birimini kullanın
        borderStyle: "solid", // Border stilini belirtin
      }}
    >
      <div
        className="profile-pic"
        style={{
          background: "gray",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          marginLeft: "15%",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${user.image}`}
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      </div>

      <div
        className="info-box"
        style={{
          textAlign: "center",
          marginLeft: "15%",
          width: "300px",
          color: "black",
        }}
      >
        <div>{user.name}</div>
        <hr />
        <div>{user.username}</div>
      </div>
    </div>
  );
}

export default User;
