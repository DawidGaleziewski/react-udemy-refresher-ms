```javascript
class App extends Component {
  render() {
    // under the hood React.createElement method is used
    // It takes 3 args:
    // - element to be rendered. i.e html or component
    // - element config in object or null
    // - child component
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        { className: "header-main" }, //class needs to be added as a key value pair in config object
        "hello from h1 tag"
      )
    );

    // code above is what will be compiled to from standard
    render(){
        return (
            // this is why jsx is not html. It is a sugar that gets compiled into nested createElement methods. properties like classNames are keys of config object
            <div>
                <h1 className="header-main">hello from h1 tag</h1>
            </div>
        )
    }
  }
}

export default App;
```
