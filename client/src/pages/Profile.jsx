import React from "react";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");

  return (
    <div style={{ paddingTop: "120px" }}>
      <h2>Profile Details</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
};

export default Profile;
