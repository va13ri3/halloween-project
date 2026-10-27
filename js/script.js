let jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", tellJoke);

function tellJoke() {

let randomNum = Math.floor(Math.random() * 6);
let joke = "";

    switch(randomNum) {
        case 1: 
            joke = "Where does a ghost go on vacation?... Mali-boo";
            break;
        case 2:
            joke = "Why did the skeleton go to the party alone?... He had no body to go with.";
            break;
        case 3:
            joke = "What is a monster's favorite dessert?... I scream!";
            break;
        case 4:
            joke = "Why are bats such good friends?... Because they always hang around together.";
            break;
        case 5:
            joke = "What is a spider's favorite hobby?... Web design.";
            break;
        default:
            joke = "What kind of dog do vampires own?... A bloodhound.";
        
    }

  document.getElementById("jokeText").textContent = joke;

}       
