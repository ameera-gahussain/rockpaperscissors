// //Code for userPrompt

function getUserChoice() {
    let userChoice = prompt("Do you choose rock, paper or scissors?");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        console.log("Error, please select a choice");
    }
}

//Code for computerChoice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}



function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === computerSelection
    ) { //playerSelection == userInput && computerSelection == computerInput
        console.log("Tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Paper wins!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock wins!");
    }
}

const userInput = getUserChoice();
console.log(userInput);

const computerInput = getComputerChoice();
console.log(computerInput);

console.log(playRound(userInput, computerInput));