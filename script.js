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

function getHumanChoice() {
    availableWeapons = ["rock", "paper", "scissors"]
    let weapon = undefined;
    while (!availableWeapons.includes(weapon)) { 
        weapon = prompt("Choose your weapon!");
        weapon = weapon.toLowerCase().trim();
    }
    return weapon;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    switch (humanChoice) {
        case "rock": if (computerChoice === "scissors") {return 1} else {return -1};
        case "paper": if (computerChoice === "rock") {return 1} else {return -1};
        case "scissors": if (computerChoice === "paper") {return 1} else {return -1};
    }
}