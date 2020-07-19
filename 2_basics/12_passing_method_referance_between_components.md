# passing method referances down the component

in class components we can pass referances down the props same way as with hooks

## First method of passing arguments to method used on click

```javascript
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

// When passing the refarance we have to use this keword as this is class component
<Person
  name={this.state.persons[1].name}
  age={this.state.persons[1].age}
  onClickHandler={this.switchNameHandler}
/>;

// When we want to pass a argument to a method on event we want to use bind keyword
// in this case we do not want to change the context of this, we simply want to pass the newName parameter.
<button onClick={this.switchNameHandler.bind(this, "Lulu")}>
  Switch Name
</button>;
```

## Second method of passing arguments to a method used on event

```javascript
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

<Person
  name={this.state.persons[1].name}
  age={this.state.persons[1].age}
  onClickHandler={this.switchNameHandler}
/>;

// We should not call the method in the cliick. However thanks to the ()=> function(), the event calls a function that returns our method called at that time. Thanks to this it wont get called when dom is rendered
<button onClick={(event) => this.switchNameHandler("MAXXX!!!")}>
  Switch Name
</button>;
```

## Compare

```Javascript
// This one is a bit more efficient - suggested in bigger applications
<button onClick={this.bind(this.switchNameHandler, 'MAXX!!!')}>Click</button>;
<button onClick={() => this.switchNameHandler("MAXXX!!!")}>Click</button>;
```
