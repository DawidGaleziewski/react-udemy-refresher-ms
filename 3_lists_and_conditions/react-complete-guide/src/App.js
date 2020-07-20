import React, { Component } from "react";
import "./App.css";
// component can be declared with lowercase but it has to de used in uppercase to work. It will throw a error if it is in lowercase
// Lowercase like h1 is reserved for native html elements
//  we can use component eaither with void notation <Person /> or opening and closing tags <Person></Person>
import Person from "./Person/Person";

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
    // const persons = this.state.persons.slice()
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "auto",
    };

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
    }

    return (
      <div>
        <button style={style} onClick={this.toggleNameHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
