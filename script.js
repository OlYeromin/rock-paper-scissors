function appendPara(text, parent) {
    const para = document.createElement("p");
    para.textContent = text;
    parent.appendChild(para);    
}

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

let humanScore = 0;
let computerScore = 0;

const playGame = document.querySelector("#playGame")

playGame.addEventListener("click", () => {
    playGame.remove();
    
    const body = document.querySelector("body");
    const divWeapons = document.createElement("div");
    divWeapons.setAttribute("class", "weapons");
    for (item of ["rock", "paper", "scissors"]) {
        const weaponButton = document.createElement("button");
        weaponButton.setAttribute("id", item);
        weaponButton.textContent = item;
        divWeapons.appendChild(weaponButton);
    }

    appendPara("Chose your weapon!", body);    
    body.appendChild(divWeapons);

    divWeapons.addEventListener("click", (event) => {
        let target = event.target;
        const humanSelection = target.id;
        const computerSelection = getComputerChoice();
        const scoreboard = document.querySelector(".scoreboard");

        outcome = playRound(humanSelection, computerSelection);
    
        if (outcome == 1) {
            appendPara(`You win! ${humanSelection} beats ${computerSelection}.`, scoreboard);
            console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
            humanScore++;
        }
        else if (outcome == -1) {
            appendPara(`You lose! ${computerSelection} beats ${humanSelection}.`, scoreboard);
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
            computerScore++;
        }
        else {
            console.log(`It's a tie!`);
            appendPara(`It's a tie!`, scoreboard);
        }
        console.log(`Your score: ${humanScore}. Computer's score: ${computerScore}.`)
    });
})
/*if (computerScore > humanScore) console.log("You lost!")
else if (computerScore < humanScore) console.log("You won!")
else console.log("It's a tie!");*/

