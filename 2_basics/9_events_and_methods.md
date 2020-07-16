it is good practice to call method of the class that will do something on click ending with \*Handler i.e onClickHandler

```javascript
class App extends Component {
  state = {
    persons: [
      { name: "John", age: 29 },
      { name: "Max", age: 9 },
      { name: "Samantha", age: 25 },
    ],
  };
  switchNameHandler = () => {
    console.log("was clicked");
    // if we use function we would have issues executing this keyword
    console.log("this is:");
  };

  render() {
    return (
      <div>
        // DO NOT add () in this function like onClick=
        {this.switchNameHandler()} - this would execute the function when react component
        renders and we do not want this
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}
```
