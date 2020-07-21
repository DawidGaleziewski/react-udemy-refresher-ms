import React from "react";

const InputWorld = (props) => {
  return <input type="text" value={props.world} onChange={props.onChange} />;
};

export default InputWorld;
