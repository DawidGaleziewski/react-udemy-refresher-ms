import React, { Component } from "react";
import "./App.css";
// component can be declared with lowercase but it has to de used in uppercase to work. It will throw a error if it is in lowercase
// Lowercase like h1 is reserved for native html elements
//  we can use component eaither with void notation <Person /> or opening and closing tags <Person></Person>
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "John", age: 29 },
      { name: "Max", age: 9 },
      { name: "Samantha", age: 25 },
    ],
    isPersonsToggled: true,
    otherState: "some other state that will not be updated",
  };
  switchNameHandler = (newName) => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: newName, age: 9 },
        { name: newName, age: 25 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29 },
        { name: "STATIC", age: 9 },
        { name: "STATIC", age: 25 },
      ],
    });
  };

  toggleNameHandler = () => {
    this.setState({
      isPersonsToggled: !this.state.isPersonsToggled,
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "auto",
    };

    return (
      <div>
        <button style={style} onClick={this.toggleNameHandler}>
          Switch Name
        </button>
        {this.state.isPersonsToggled ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              onClickHandler={this.switchNameHandler.bind(this, "George")}
              onChangeHandler={this.nameChangedHandler}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              onClickHandler={this.switchNameHandler.bind(this, "Steven")}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              onClickHandler={() => {
                this.switchNameHandler("MAXX!!");
              }}
            >
              My hobbies are planking
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
