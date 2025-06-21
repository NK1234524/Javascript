let max =prompt("Max value: ");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess number:- ").trim().toLowerCase();

while(true){
    if((guess=="quit")||(max=="quit")){
        console.log("Game Quit");
        break;
    }
    else if(guess == random){
        console.log("Successed!!");
    }
    else if(guess!=random){
        console.log("Guess again");
        guess = prompt("Guess number :- ").trim().toLowerCase();
    }
}