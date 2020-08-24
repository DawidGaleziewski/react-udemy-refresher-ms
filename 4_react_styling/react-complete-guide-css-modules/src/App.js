import React, { Component } from "react";
// import "./App.css";
import Person from "./Person/Person";

import styled from "styled-components";

import classes from "./App.css";

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
    // const style = {
    //   // backgroundColor: "green",
    //   // color: "white",
    //   // font: "inherit",
    //   // border: "1px solid blue",
    //   // padding: "8px",
    //   // marginLeft: "auto",
    //   // marginRight: "auto",
    //   // marginTop: "20px",
    //   // maxWidth: "200px",
    //   // display: "block",
    //   // cursor: "pointer",
    //   // ":hover": {
    //   //   opacity: "0.8",
    //   // },
    // };

    let persons = null;
    if (this.state.isPersonsToggled) {
      persons = (
        <div>
          <ul>
            {this.state.persons.map((person, index) => (
              <Person
                key={person._id}
                name={person.name}
                age={person.age}
                onClickHandler={this.deletePersonHandler.bind(null, index)}
                onChangeHandler={(event) => {
                  this.nameChangedHandler(event, person._id);
                }}
              />
            ))}
          </ul>
        </div>
      );
      // style.backgroundColor = "red";
    }

    // const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    const ButtonClasses = [classes.Button];
    console.log("button classes", ButtonClasses);

    return (
      <div className={classes.red}>
        <h1>Hello from app component</h1>
        <button
          className={ButtonClasses.join()}
          alterNative={this.state.isPersonsToggled}
          onClick={this.toggleNameHandler}
        >
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
