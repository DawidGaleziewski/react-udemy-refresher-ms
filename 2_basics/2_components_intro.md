# we need to import React and Component from react library

# react is needed when we want to render anything

# react component have one main function: eaither render or return HTML come to the screen

# We have two ways of defining components

- cass

```javascript
class App extends Component {
  // render is a Component class method.
  render() {
    //   this is syntax sugar. This is not connected to file extension. We can write it eaither in js or jsx files
    <div>Test</div>;
  }
}

// default specifies that if we import something from this file by default it will be this component
export default App;
```
