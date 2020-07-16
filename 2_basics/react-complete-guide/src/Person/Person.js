import React from "react";

// Most of the time we should use a pure function components that simply return jsx if possible
// arguments passed to component are stored on props object (name can be diffrent it does not matter)
const person = (props) => {
  console.log(props);
  // we will need Reac as this will be transform to React.createElement method

  return (
    <div>
      <p>
        I am a {props.name} and I am {props.age} old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
