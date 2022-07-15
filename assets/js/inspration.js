var quote = document.getElementById('quote');
var author = document.querySelector('#author');
var InspQtebtn = document.getElementById('submit');

quote.onload = getInsQuote();

function getInsQuote() {
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.content;
        author.innerHTML= data.author;
    });
}

InspQtebtn.addEventListener("click", getInsQuote);
