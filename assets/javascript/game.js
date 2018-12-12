

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("yourGuessesSoFar");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess == computerGuess) {
        wins++;
    }   else {
        losses++; 
    }
    winsText.textContent = "wins" + wins;
    lossesText.textContent = "losses" + losses;
    guessesLeftText.textContent = "guessesLeft" - guessesLeft;
    guessesSoFarText.textContent = "yourGuessesSoFar" + userGuess;
};
