fetch("https://api.github.com/users/jvtrf")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
