import React, { Component } from "react";
// import "./App.css";
import Person from "../components/Persons/Person/Person";

import styled from "styled-components";

import classes from "./App.css";

import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alterNative ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  max-width: 200px;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alterNative ? "black" : "white")};
    opacity: 0.8;
  }
`;

class App extends Component {
  state = {
    persons: [
      { name: "John", age: 29, _id: "abc1" },
      { name: "Max", age: 9, _id: "abc2" },
      { name: "Samantha", age: 25, _id: "abc3" },
    ],
    isPersonsToggled: true,
    otherState: "some other state that will not be updated",
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const indexOfChangedItem = persons.findIndex((person) => person._id === id);
    const person = { ...persons[indexOfChangedItem] };
    person.name = event.target.value;
    persons[indexOfChangedItem] = person;

    this.setState({
      persons: persons,
    });
  };

  toggleNameHandler = () => {
    this.setState({
      isPersonsToggled: !this.state.isPersonsToggled,
    });
  };

  render() {
    let persons = null;
    if (this.state.isPersonsToggled) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    if (this.state.persons.length <= 2) {
      classes.push("");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    const ButtonClasses = [classes.Button];
    console.log("button classes", ButtonClasses);

    return <div className={classes}>{persons}</div>;
  }
}

export default App;
