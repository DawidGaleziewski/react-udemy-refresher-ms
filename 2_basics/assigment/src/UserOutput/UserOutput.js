import React from "react";

const UserOutput = (props) => {
  const style = {
    backgroundColor: "#eee",
    border: "1px solid #000",
    padding: "8px 16px",
    margin: "16px",
  };
  return (
    <div style={style}>
      <p>Par number #1</p>
      <p>Username is: {props.username} </p>
    </div>
  );
};

export default UserOutput;
