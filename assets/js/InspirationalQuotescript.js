var quote = document.querySelector('#quote');
var author = document.querySelector('#author');
var InspQtebtn = document.querySelector('#btn');

btn.addEventListener("click", getInsQuote);

function getInsQuote() {
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.content;
        author.innerHTML= data.author;
    })
}