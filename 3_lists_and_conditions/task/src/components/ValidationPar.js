import React from "react";

const ValidationPar = (props) => {
  let validationText = "correct";
  if (props.length > props.maxLength) {
    validationText = "It is to long daddy!";
  } else if (props.length < props.minLength) {
    validationText = "It is to short";
  }

  return <p>{validationText}</p>;
};

export default ValidationPar;
