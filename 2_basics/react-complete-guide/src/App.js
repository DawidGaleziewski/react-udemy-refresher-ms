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
    otherState: "some other state that will not be updated",
  };
  switchNameHandler = () => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: "John", age: 29 },
        { name: "Maximilian", age: 9 },
        { name: "Samantha", age: 25 },
      ],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbies are planking
        </Person>
      </div>
    );
  }
}

export default App;
