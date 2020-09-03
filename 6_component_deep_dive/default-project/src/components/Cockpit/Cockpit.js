import React, { Fragment } from "react";
import classes from "../container/App.css";

if (this.state.persons.length <= 2) {
  classes.push("");
}

if (this.state.persons.length <= 1) {
  classes.push("bold");
}
const ButtonClasses = [classes.Button];
const Cockpit = (props) => (
  <Fragment>
    <h1>Hello from app component</h1>
    <button
      className={ButtonClasses.join()}
      alterNative={this.state.isPersonsToggled}
      onClick={this.toggleNameHandler}
    >
      Switch Name
    </button>
  </Fragment>
);

export default Cockpit;
