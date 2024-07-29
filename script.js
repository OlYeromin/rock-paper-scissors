// The function below is taken from here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  
 
function getComputerChoice() {
    computerChoice = getRandomInt(3);
    switch (computerChoice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}