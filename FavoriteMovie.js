let fav = "war";
let guess = prompt("Guess the movie here: ").trim().toLowerCase();

while (fav!=guess) {
    if(guess=="quit"){
        console.log("Game quitted");
        break;
    }
    guess = prompt("Worng one guess again").trim().toLowerCase();    
}
if (guess==fav) {
    console.log("Correct choice");
}
