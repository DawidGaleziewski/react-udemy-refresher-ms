# When to seperate componets?

- We should not just separate components just for a sake of it. I.e if we have a simple par we may want to leave it. Unless it has custome styles we want to re use or some features

- Big state components like app.js should not contain to much UI code. Things like JSX in those components are a good idea to be moved

For example a listing below would be great on its own handling a array and mapping it on its own

```javascript
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
```

- Its good to make sure that things that seem to be joined in its UI function and would have a clear one function to be moved to its own component I.E

```javascript

        <h1>Hello from app component</h1>
        <button
          className={ButtonClasses.join()}
          alterNative={this.state.isPersonsToggled}
          onClick={this.toggleNameHandler}
        >
          Switch Name
        </button>
```

## structure

It is a good idea to nest componets insode each other.
For example Person is component listed in Persons therefore:

- Persons
  - Person

Also on top level we may want to create

- components folder. For individual componets
- containers - for containers like App.js
