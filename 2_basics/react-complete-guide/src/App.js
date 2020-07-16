import React, { Component } from "react";
import "./App.css";
// component can be declared with lowercase but it has to de used in uppercase to work. It will throw a error if it is in lowercase
// Lowercase like h1 is reserved for native html elements
//  we can use component eaither with void notation <Person /> or opening and closing tags <Person></Person>
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div>
        <Person name="John" age="28" />
        <Person name="Tom" age="35" />
        <Person name="Samantha" age="25" />
      </div>
    );
  }
}

export default App;
