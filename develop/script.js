var jokeType="";
var joke="";
var punchline="";
var getJokeBtn=document.getElementById("getJokeBtn");
var jokeDiv=document.getElementById("joke");
var punchlineDiv=document.getElementById("punchline");


//make asynchronous
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
  });
});
displayJoke();
}

//display joke
function displayJoke() {

  switch (jokeType) {
    case "single":
      jokeDiv.textContent=joke;
      punchlineDiv.textContent="";
      
      break;
    case "twopart":
      jokeDiv.textContent=joke;
      punchlineDiv.textContent="";
      //make punchline stall to appear
      console.log("start counting");
      setTimeout(displayPunchline, 4000);

      break;
  }


  
}

//display punchline
function displayPunchline () {
  punchlineDiv.textContent=punchline;
console.log("it's been 4 seconds");
}
getJokeBtn.addEventListener("click", getJoke);