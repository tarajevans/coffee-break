var title = document.getElementById("title");
var display = document.getElementById("display");
var comicButton = document.getElementById("submit_2");
var url;

// Reference to corsheader taken from BUILD XKCD COMICS APP API PROJECT || XKCD API, SUPERAGENT, HTML, CSS JAVASCRIPT ES6 CLASSES TUTORIAL BY DANASCRIPT ON YOUTUBE
var corsHeader = 'https://the-ultimate-api-challenge.herokuapp.com';
var url = 'https://xkcd.com';
var format = 'info.0.json';


display.onload = nextComic();

function nextComic(){
    var requestUrl = corsHeader+"/"+url+"/"+getRandomNum().toString()+"/"+format;
    var displayChildren = display.children;
    for (var i = 0; i<displayChildren.length; i++)
        {
            if(displayChildren[i] == "img"){
                console.log("Image");
            }   
        }
    display.removeChild

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        title.textContent = data.title;
        displayImage(data.img);
        console.log(data);
    });
}

function getRandomNum(){
    return Math.floor(Math.random() * 500) + 1;
  }

function displayImage(urlIn){
        display.src = urlIn
  }

  comicButton.addEventListener("click", nextComic);