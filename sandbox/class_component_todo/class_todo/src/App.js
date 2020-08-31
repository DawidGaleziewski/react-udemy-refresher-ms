import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import AddTaskForm from "./components/AddTaskForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTaskForm />
      </div>
    );
  }
}

export default App;
