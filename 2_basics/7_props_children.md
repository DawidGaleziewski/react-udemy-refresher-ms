props have a object children on it (props.children). Children is a reserved word and whatever we pass between component tag will be rendered there.

Children includes any elements like ul, components anything.

Great for passing structured html content

```javascript
<Person name="Samantha" age="25">
  My hobbies are planking
</Person>;

const person = (props) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};
```
