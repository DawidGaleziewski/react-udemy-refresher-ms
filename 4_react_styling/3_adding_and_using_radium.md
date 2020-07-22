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

Ja bym zaczął od backendu. Jeśli masz zamiar używać REST api i np SPA to rozplanowałbym jakich danych będziesz potrzebował, np users, posts, likes, views, comments. Przedewszystkim jakie są relacje między tymi danymi np karzdy comment potrzebuje usera.

Następnie rozplanowałbym jakie endpointy będą mi potrzebne by operować na tych danych np. user, comment, likes i dla każdego CRUD (jeśli jest on potrzebny) oraz jakie są wymogi by dokonać operacji na tych danych (np tylko urzytkownik który stworzył dany komentarz może go edytować lub usówać, ale już wszyscy mogą go odczytać).

Na samym końcu zrobiłbym pod to np SPA i narysował w wireframie albo na kartce jakie widoki mi są potrzebne.
