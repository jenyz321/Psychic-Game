

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar =[];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("yourGuessesSoFar");


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess)
    console.log('computer' + computerGuess)


    if (userGuess == computerGuess) {
        //if the user guesses the same as the computer, we need to increment the wins,
        wins++;
        guessesLeft =9;
    }   else {
        guessesLeft--;
    }
    
    if (guessesLeft === 0){
        endGame();
    }
    // if guessesLeft === 0, then run a function that ends the game: endGame()
    //inside endGame() we need to losses++, and put guessesLeft=9, and guessesSoFar back to an empty array
    winsText.textContent = wins;
    lossesText.textContent =  losses;
    guessesLeftText.textContent =  guessesLeft;
    guessesSoFarText.textContent = userGuess;


};

var endGame = function() {
    losses++;
    guessesLeft =9;
    guessesSoFar =[]; 
    console.log(endGame)
};
