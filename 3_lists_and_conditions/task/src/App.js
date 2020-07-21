import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import InputWorld from "./components/InputWorld";
import ValidationPar from "./components/ValidationPar";
import CharComponent from "./components/CharComponent";

class App extends Component {
  state = {
    world: "random world",
  };

  inputOnChangeHandler = (event) => {
    this.setState({
      world: event.target.value,
    });
  };

  deleteChar = (index) => {
    const newWorldArray = this.state.world.split("");
    newWorldArray.splice(index, 1);
    const newWorld = newWorldArray.join("");
    this.setState({ world: newWorld });
  };

  render() {
    const appStyle = {
      margin: "2rem auto",
      maxWidth: "1170px",
      textAlign: "center",
    };
    return (
      <div style={appStyle}>
        <InputWorld
          onChange={this.inputOnChangeHandler}
          world={this.state.world}
        />
        <ValidationPar
          length={this.state.world.length}
          maxLength={10}
          minLength={3}
        />
        <p>
          {this.state.world.split("").map((char, index) => (
            <CharComponent
              char={char}
              onClick={this.deleteChar.bind(null, index)}
            />
          ))}
        </p>
      </div>
    );
  }
}

export default App;
