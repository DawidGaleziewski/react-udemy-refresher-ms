install by
npm i --save styled-components

Import on top of the file we will use:

```javascript
import styled from "styled-components";
```

This syntax is actually a native js syntax called 'taged templates'

```javascript
const Button = styled.button``;
```

To start styling we neeed to import styled from styled components

```javascript
import styled from "styled-components";
```

On styled we have all html tags like

- styled.main
- styled.div
- styled.button

Those tags in reality are functions.
We put the styles between the bacticks

```javascript
const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media screen and(min-width: 500px) {
    width: 450px;
  }
`;
```

We use normal css syntax.
We can access sudo selectors by using &

```javascript
const StyledButton = styled.button`
  background-color: "green";
  color: "white";
  font: "inherit";
  border: "1px solid blue";
  padding: "8px";
  margin-left: "auto";
  margin-right: "auto";
  margin-top: "20px";
  max-width: "200px";
  display: "block";
  cursor: "pointer";
  &:hover {
    opacity: "0.8";
  }
`;
```

We can use any props we would use on any other jsx component like onCLick the same way.

```javascript
<StyledButton onClick={this.toggleNameHandler}>Switch Name</StyledButton>
```

!Important thing to remember is that we already return a react component from styled.div. This is why we do not do something like (props)=> styled.div. We dont have to do this as this already is a Function/class component!

## styled components under the hood

Styled components will add css classed we did not define to the element i.e:
class="sc-AxjAm bxsctv"

The styles rules will be added in the head element style tag"

```html
<style data-styled="active" data-styled-version="5.1.1">
  .bxsctv {
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
  }
  @media (min-width: 500px) {
    .bxsctv {
      width: 450px;
    }
  }
</style>
```
