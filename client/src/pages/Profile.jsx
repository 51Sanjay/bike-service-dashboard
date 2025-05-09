import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  // Fallback to localStorage if Redux state is empty
  const { username, email, phone } = useSelector((state) => state.user);
  
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div style={{ paddingTop: "120px" }}>
      <h2>Profile Details</h2>
      <p>
        <strong>Username:</strong> {username || storedUser.username}
      </p>
      <p>
        <strong>Email:</strong> {email || storedUser.email}
      </p>
      <p>
        <strong>Phone:</strong> {phone || storedUser.phone}
      </p>
    </div>
  );
};

export default Profile;
