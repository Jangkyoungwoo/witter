import { authService } from "fbase";
import { useNavigate } from "react-router-dom";
import React from "react";

const Profile = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.signOut();
    navigate("/");
  };

  return (
    <div>
      <span>Profile</span>
      <button onClick={onLogout}>๋ก๊ทธ์์</button>
    </div>
  );
};

export default Profile;
