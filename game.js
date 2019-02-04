function computerChoice() {
    let computerChoices = "abcdefghiklmnopqrstuvwxyz";
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerGuess;
}
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
// var computerChoices = [a-z];

var wins, losses, chances, computerGuess, userGuess, myoptions = [];

function setup() {
    wins = 0;
    losses = 0;
}

function varSetup() {
    myoptions = [];
    userGuess = '';
    //   computerGuess = '';
    chances = 9;
}

function displayScreen() {
    directionsText.textContent = "Guess what letter I am thinking of!";
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    chanceText.textContent = "Guess Left: " + chances;
    myoptionsText.textContent = ` Your Guesses So far:  ${myoptions}`;
}
//Initialise the Game
setup();
varSetup();

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var chanceText = document.getElementById("chance-text");
var myoptionsText = document.getElementById("myoptions-text");
// This function is run whenever the user presses a key.
computerGuess = computerChoice();
document.onkeyup = function (event) {
    // regex to match wrong key event
    if (event.key.match(/[!@#$%^&*(),.?":{}|<> 0-9]/g)) {
        alert('Enter From a-z');
    } else {
        console.log('Computer Chose==>', computerGuess);
        // Determines which key was pressed.
        userGuess = event.key;
        console.log('User Chose==>', userGuess);
        userGuess = userGuess.toLowerCase();
        myoptions.push(userGuess);
        // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if (userGuess === computerGuess) {
            wins++;
            varSetup();
            computerGuess = computerChoice();
            alert('Awesome! You Got Me!')
        } else {
            chances -= 1;
        }
        if (chances <= 0) {
            losses++;
            computerGuess = computerChoice();
            varSetup();
        }
        // Logging on the screen
       displayScreen();
    }
}