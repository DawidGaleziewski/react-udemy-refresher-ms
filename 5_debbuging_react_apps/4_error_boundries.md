Error boundries are available in React 16+

Those are components that use a lifecycle method called componentDidCatch.

Error boundries are higher order components. That are components that wrapp other components

Do not spam errorboundries. Only use them for code that can fail! I.E in API calls.

Great things about error boundries is that rest of the app will still work in poroduction

!Important: error boundries will ONLY work in production

!Important: There are no hooks for those methods yet. Therefore error boundries can only be used with class components

```javascript
import React, { Component } from "react";
// It can be named any way
class ErrorBoundry extends Component {
  // We set the state initially assuming there is no error
  state = {
    hasError: false,
    errorMessage: "",
  };
  //   This is the most important part. This react method will accept error and information on it. If there are any errors this method will fire up
  componentDidCatch = (error, info) => {
    //   We set up our state to show a error
    this.setState({ hasError: true, errorMessage: error });
  };
  render() {
    //  conditional render error message in component if something wents wrong
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else {
      // else we render the children, as we will wrap our component in error boundry
      return this.props.children;
    }
  }
}
```

After that we can wrap our components in error boundries:

```javascript
<div>
  <ul>
    {this.state.persons.map((person, index) => (
      <ErrorBoundry key={person._id}>
        <Person
          name={person.name}
          age={person.age}
          onClickHandler={this.deletePersonHandler.bind(null, index)}
          onChangeHandler={(event) => {
            this.nameChangedHandler(event, person._id);
          }}
        />
      </ErrorBoundry>
    ))}
  </ul>
</div>
```
