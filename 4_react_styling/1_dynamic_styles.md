As inline styles are simply js object we can change its properties dynamically depending on the state:

```javascript
if (this.state.isPersonsToggled) {
  style.backgroundColor = "red";
}
```
