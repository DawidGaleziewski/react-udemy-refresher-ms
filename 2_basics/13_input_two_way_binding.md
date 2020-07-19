We want to bind the input to the handler that changes it but also bind the value of the input to current name. Thanks to that we can see the initial value of the input from the start

```javascript
<input type="text" onChange={props.onChangeHandler} value={props.name} />
```

It is important to have a on change handler if we have a value. Otherwise we can lock the input from getting changed in a situation like this:

```javascript
<input type="text" value={props.name} />
```
