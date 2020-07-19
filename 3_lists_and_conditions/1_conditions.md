We can render parts of the app in jsx only using turnery poerator. We cannot use if statments

When we condition render the element it is worth remembering that behind the syntax sugar the React.createElement is called

```javascript
{
  this.state.isPersonsToggled ? (
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
  ) : null;
}
```

It is also important to remember in conditional render. The element is not hidden it is not rendered at ALL!
