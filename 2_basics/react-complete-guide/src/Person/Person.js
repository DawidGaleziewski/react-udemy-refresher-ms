import React from "react";

// Most of the time we should use a pure function components that simply return jsx if possible
// arguments passed to component are stored on props object (name can be diffrent it does not matter)
const person = (props) => {
  console.log(props);
  // we will need Reac as this will be transform to React.createElement method
  return <div>I am a person and I am {Math.floor(Math.random() * 30)} old</div>;
};

export default person;
