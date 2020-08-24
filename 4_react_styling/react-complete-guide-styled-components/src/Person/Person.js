import React from "react";
import "./Person.css";

import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

// Most of the time we should use a pure function components that simply return jsx if possible
// arguments passed to component are stored on props object (name can be diffrent it does not matter)
const person = (props) => {
  console.log(props);
  // we will need Reac as this will be transform to React.createElement method

  return (
    <StyledDiv>
      <p onClick={props.onClickHandler}>
        I am a {props.name} and I am {props.age} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChangeHandler} value={props.name} />
    </StyledDiv>
  );
};

export default person;
