fetch("https://v2.jokeapi.dev/joke/Any?safe-mode").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});