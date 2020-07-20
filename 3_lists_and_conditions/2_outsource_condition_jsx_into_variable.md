# prefered way of outputing conditional JSX

When state changes component will call all that is included in the render method
We can take advantage of that and put jsx into variables and handle the conditions outside the return statment

## OLD

```javascript
return (
  <div>
    <button style={style} onClick={this.toggleNameHandler}>
      Switch Name
    </button>
    {this.state.isPersonsToggled ? (
      <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          onClickHandler={this.switchNameHandler.bind(this, "George")}
          onChangeHandler={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          onClickHandler={this.switchNameHandler.bind(this, "Steven")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          onClickHandler={() => {
            this.switchNameHandler("MAXX!!");
          }}
        >
          My hobbies are planking
        </Person>
      </div>
    ) : null}
  </div>
);
```

## NEW

```javascript

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "auto",
    };

    // Initial variable is null
    let persons = null;

    // State is checked and if it is toggled it is set to JSX. We need to put it into ()
    if (this.state.isPersonsToggled) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            onClickHandler={this.switchNameHandler.bind(this, "George")}
            onChangeHandler={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            onClickHandler={this.switchNameHandler.bind(this, "Steven")}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            onClickHandler={() => {
              this.switchNameHandler("MAXX!!");
            }}
          />

        </div>
      );
    }

    // We can simply interpolate the variable holding eaither null or jsx into return statment
    return (
      <div>
        <button style={style} onClick={this.toggleNameHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );

```
