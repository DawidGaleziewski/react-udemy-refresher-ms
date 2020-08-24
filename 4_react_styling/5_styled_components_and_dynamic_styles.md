In order to use dynamic styles we pass a prop with any name we like on the styled component:

```javascript
<StyledButton alt={this.state.showPersons} onClick={this.toggleNameHandler}>
  Switch Name
</StyledButton>
```

After that we can pass it to the tagged template/our styles

```javascript
const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  max-width: 200px;
  display: block;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
```

Under the hood, two classes are added in the head sections in styles tag.
styled components will just swap those depending on the state
