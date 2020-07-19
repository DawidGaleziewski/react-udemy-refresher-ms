We can create a object with styles and then simply add it on the jsx element under style! No emotion or styled components required.
There are some serious restrictions like using :hover

```javascript
const style = {
  backgroundColor: "white",
  font: "inherit",
  border: "1px solid blue",
  padding: "8px",
  margin: "auto",
};
<button style={style} onClick={this.switchNameHandler.bind(this, "Lulu")}>
  Switch Name
</button>;
```
