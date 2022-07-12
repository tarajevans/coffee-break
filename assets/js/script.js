//Hide fields on intial load

var selectJokeoption = document.getElementById("jokes");
var selectComicsoption = document.getElementById("comics");
var submitButton = document.getElementById('submit');
var jokeType ="";
var joke = "";
var punchLine = "";
var jokeDiv = document.getElementById("joke");
var punchLineDiv = document.getElementById("punchline");
var radioOptions= document.querySelector('input[name="selection"]').value;

console.log(radioOptions);

/*function displayOption() {
    selectJokeoption.style.display = "block";
    selectComicsoption.style.display = "block";
};*/

submitButton.onclick = function() {  
    radio();
    }

function radio() {
    //console.log(radioOptions);
        if (radioOptions =="joke") {
        getJoke();
        } else {
        alert("Please select any one options");
        }
        }
        


//when page loads, load first joke
jokeDiv.onload = getJoke();
//fetch joke from api
function getJoke(){
   fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode").then(function(response) {
    response.json().then(function(data) {
    jokeType = data.type;
      //determines the type of joke and loads data accordingly
      switch (jokeType){
          case "single":
              joke = data.joke;
              break;
          case "twopart":
              joke = data.setup;
              punchLine = data.delivery;
              break;
    }
    displayJoke();
  });
});
}
//joke handling for onliners or 2 parts
function displayJoke(){
  switch (jokeType){
    case "single":
        jokeDiv.textContent = joke;
        punchLineDiv.textContent="";
      break;
    case "twopart":
        jokeDiv.textContent = joke;
        punchLineDiv.textContent="...Wait for it!";
        setTimeout(displayPunchline, 4000);
      break;
  }
}
function displayPunchline(){
  punchLineDiv.textContent = punchLine;
}
//getJokeButton.addEventListener("click", getJoke);