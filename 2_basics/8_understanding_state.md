# state in class component

- state propertie can be used only on class components that extend Component class
- state is a object and can have as many nested values as we want
- state should be used with care. Using pure function components that only render view is adviseble to avoid bugs and make app more managable
- unique property of state that changing it will cause component to rerender and react to update our DOM
- props and state are the only way to triger react to re-render
- props are used to apss data down to child components. State is used to handle changes within component

```javascript
class App extends Component {
  // as this is a class it has properties, a variable of the class
  // only in class components there is a special property called state
  // state is managed from within component that extend Component class
  // pure functional components should be used as often as possible as state should be used with care. To much state will cause app to act unpredictable
  // we can access state in render method by using this keyword as state is a property of the class
  // Special thing about state property, unlike other class properties, is that when it changes it will cause react to update our dom and rerender
  state = {
    persons: [
      { name: "John", age: 29 },
      { name: "Max", age: 9 },
      { name: "Samantha", age: 25 },
    ],
  };
  render() {
    return (
      <div>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbies are planking
        </Person>
      </div>
    );
  }
}
```
