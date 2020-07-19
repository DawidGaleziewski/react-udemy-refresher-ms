import React from "react";

const UserInput = (props) => {
  const style = {
    backgroundColor: "#eee",
    border: "1px solid #000",
    padding: "8px 16px",
  };
  return (
    <input
      style={style}
      onChange={props.onChangeHandler}
      value={props.username}
    />
  );
};

export default UserInput;
