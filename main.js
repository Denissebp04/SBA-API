let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("quote-btn");

const Base_URL = "https://api.quotable.io";

const getQuote = () => {
    fetch(Base_URL)
        .then((res) => res.json())
        .then((data) => {
            quote.innerText = data.content;
            author.innerText = data.author;
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

