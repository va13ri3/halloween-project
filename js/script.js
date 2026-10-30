let jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", tellJoke);

function tellJoke() {

    let jokes = ["Where does a ghost go on vacation?... Mali-boo", "Why did the skeleton go to the party alone?... He had no body to go with.", "What is a monster's favorite dessert?... I scream!", "Why are bats such good friends?... Because they always hang around together.", "What is a spider's favorite hobby?... Web design.", "What kind of dog do vampires own?... A bloodhound."];
    let joke = jokes[Math.floor(Math.random() * 6)];

  document.getElementById("jokeText").textContent = joke;

}       
