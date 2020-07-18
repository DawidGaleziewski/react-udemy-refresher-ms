## class setState method

In class components we also should not change state diractly like this:

```javascript
switchNameHandler = () => {
  console.log("was clicked");
  this.state.persons[0] = "Maximilian";
};
```

Class components use setState method that accepts the object

```javascript
switchNameHandler = () => {
  console.log("was clicked");
  this.setState({ persons: [] });
};
```

It will update only the property we point and others will be not changed ie:

```javascript
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
```

React setState will merge new and old state where changes were made.
React will update the dom where the changes have occured in the state
There are only two things that can force react to update dom: state and props.

Whenever props or state changes react compares now rendered view and the view that would be rendered after changes. And it then only changes the parts it needs to

## useState hook vs class setStateMethod

useState hook differs as it WILL NOT compare the old and new state and what was changed. It will simply void old state and set new one. So for example if we have obj and it is missing some old properties, those will not carry on between setting of the states

In class components we have only one state so we have to use that one.
When we use functional component we can set as many states we want using useState hook

In class components state is always a object. In functional components it can be primitive type like string or number
