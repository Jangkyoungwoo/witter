import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";

const Home = () => {
  const [isLoggedOut, setLoggedOut] = useState(false);
  const onSignout = async isLoggedOut => {
    try {
      const data = await authService.signOut();
      console.log(data);
      setLoggedOut(toggle => !toggle);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <span>Home</span>
      <button onClick={onSignout}>로그아웃</button>
    </div>
  );
};
export default Home;
