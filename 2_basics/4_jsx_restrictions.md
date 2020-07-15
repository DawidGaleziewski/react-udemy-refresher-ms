```javascript
class App extends Component {
  render() {
    render(){
        // class cannot be used as it is reserved to js class
        // tags like divs h1 are not reat html tags. Those are provided by react library
        // attributes are also converted
        // We need to return tags in one root element. We cannot return two sibling elements
        //  we use () parentesies so that we can write jsx on multiple lines without errors
        return (
            <div>
                <h1 className="header-main">hello from h1 tag</h1>
            </div>
        )
    }
  }
}

export default App;
```
