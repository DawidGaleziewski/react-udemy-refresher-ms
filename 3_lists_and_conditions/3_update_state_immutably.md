## BAD - we modify original state as const is a referance of in memory object

```javascript
deletePersonHandler = (index) => {
  const persons = this.state.persons;
  persons.splice(index, 1);
  this.setState({
    persons: persons,
  });
};
```

## GOOD - we return new array before operating on it

```javascript
deletePersonHandler = (index) => {
  // 1st method using slice
  const persons = this.state.persons.slice();
  // 2nd method using es6 spread operator
  const persons = [...this.state.persons];
  persons.splice(index, 1);
  this.setState({
    persons: persons,
  });
};
```

State should be always updated immutably to avoide issues in app!
