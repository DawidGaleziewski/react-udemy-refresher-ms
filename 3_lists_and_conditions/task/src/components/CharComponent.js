import React from "react";

const CharComponent = (props) => {
  const style = {
    display: "inline-block",
    padding: "8px",
    border: "1px solid green",
    marginRight: "6px",
    cursor: "pointer",
  };
  return (
    <span onClick={props.onClick} style={style}>
      {props.char}
    </span>
  );
};

export default CharComponent;
