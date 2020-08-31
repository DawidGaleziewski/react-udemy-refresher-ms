import React, { Component } from "react";

class AddTaskForm extends Component {
  state = {
    formState: {
      title: "",
      description: "",
      state: false,
    },
  };
  onChangeHandler = (event) => {
    console.log(event);
    const key = event.target.name;
    const value = event.target.value;
    const stateUpdate = { formState: {} };
    stateUpdate[key] = value;
    this.setState({ stateUpdate });
    console.log(this.state);
  };
  render() {
    return (
      <form>
        <input
          onChange={this.onChangeHandler}
          name="title"
          type="text"
          placeholder="task title"
          value={this.state.formState.title}
        />
        <input
          type="text"
          placeholder="task description"
          value={this.state.formState.description}
        />
        <input
          type="text"
          placeholder="task status"
          value={this.state.formState.state}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddTaskForm;
