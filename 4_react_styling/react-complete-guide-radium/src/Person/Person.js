import React from "react";
import "./Person.css";
import Radium from "radium";

// Most of the time we should use a pure function components that simply return jsx if possible
// arguments passed to component are stored on props object (name can be diffrent it does not matter)
const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  console.log(props);
  // we will need Reac as this will be transform to React.createElement method

  return (
    <div className="Person" style={style}>
      <p onClick={props.onClickHandler}>
        I am a {props.name} and I am {props.age} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChangeHandler} value={props.name} />
    </div>
  );
};

export default person;
