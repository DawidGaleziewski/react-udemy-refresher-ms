In react everything is simply javascript.
We can conditionally add classes thanks to this

```javascript
const classes = [];
if (this.state.persons.length <= 2) {
  classes.push("red");
}

if (this.state.persons.length <= 1) {
  classes.push("bold");
}

<h1 className={classes.join(" ")}>Hello from app component</h1>;
```
