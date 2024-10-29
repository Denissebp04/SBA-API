let joke = document.getElementById("joke");
let punchline = document.getElementById("punchline");
let btn = document.getElementById("btn");

const Base_URL = "https://official-joke-api.appspot.com/jokes/random";


let getJoke = () => {
    fetch(Base_URL)
    .then(data => data.json())
    .then((item) => {
        joke.innerText = item.setup;
        punchline.innerText = item.punchline
    })
}

window.addEventListener("load", getJoke);
btn.addEventListener("click", getJoke);

