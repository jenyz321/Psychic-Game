

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

var winsText = document.getElementbyID("Wins");
var lossesText = document.getElementbyID("Losses");
var guessesLeftText = document.getElementbyID("Guesses Left");
var guessesSoFarText = document.getElementbyID("Guesses so far")

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}



