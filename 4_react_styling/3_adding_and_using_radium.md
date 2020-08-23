Radium allows us to use sudo selectors and media queries in react objects
In order to make radium work we need to import it and wrap the component on its export:

```javascript
export default Radium(App);
```

This is called higher order component

Adding sudo selector in a js object

```javascript
const style = {
  backgroundColor: "green",
  color: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  maxWidth: "200px",
  display: "block",
  cursor: "pointer",
  ":hover": {
    opacity: "0.8",
  },
};
```

## using media queries

In order to use radium media queries we first need to wrap the whole app Style root:

```javascript
return (
  <StyleRoot>
    <div style={{ textAlign: "center" }}>
      <h1 className={classes.join(" ")}>Hello from app component</h1>
      <button style={style} onClick={this.toggleNameHandler}>
        Switch Name
      </button>
      {persons}
    </div>
  </StyleRoot>
);
```
