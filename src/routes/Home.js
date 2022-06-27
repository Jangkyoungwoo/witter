import React, { useState } from "react";

const Home = () => {
  const [nWitter, setnWitter] = useState("");
  const onSubmit = event => {
    event.preventDefault();
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
  };
  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          maxLength="120"
        ></input>
        <input type="submit" value="입력" />
      </form>
    </div>
  );
};
export default Home;
