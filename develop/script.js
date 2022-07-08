var jokeType="";
var joke="";
var punchline="";
var getJokeBtn=document.getElementById("getJokeBtn");
function getJoke() {

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode").then(function(response) {
  response.json().then(function(data) {
    jokeType=data.type;
    switch (jokeType) {
      case "single":
        joke=data.joke;
        
        break;
      case "twopart":
        joke=data.setup;
        punchline=data.delivery;

        break;
    }
    console.log(joke)
  });
});
}
getJoke();

getJokeBtn.addEventListener("click", getJoke);
//single twopart setup delivery