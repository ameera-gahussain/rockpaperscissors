//global stuff

const options = ["rock", "paper", "scissors"];

//setting computer choice

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//get player choice

function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper or Scissors");
    while (playerInput == null) {
        playerInput = prompt("Rock, Paper or Scissors");
    }
    playerInput = playerInput.toLowerCase();
    let check = validateInput(playerInput);
    while (check == false) {
        playerInput = prompt("You must choose between Rock, Paper or Scissors. Capitalisation doesn't matter!");
        while (playerInput == null) {
            playerInput = prompt("Rock, Paper or Scissors");
        }
        playerInput = playerInput.toLowerCase();
        check = validateInput(playerInput);
    }

    return playerInput;

}
// let validatedInput = " ";
// while (validatedInput == null) {
//     prompt("You must choose between Rock, Paper or Scissors. Capitalisation doesn't matter!");
// }
// while (validatedInput == false) {
//     const choice = prompt("Rock, Paper or Scissors?");
//     if (choice == false) {
//         continue;
//     }
//     const choiceInLower = choice.toLowerCase();
//     if (options.includes(choiceInLower)) {
//         validatedInput == true;
//         return choiceInLower;
//     }
// }

//function for checking player input
function validateInput(choice) {
    return options.includes(choice);
}

//check who wins

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

//results displayed

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else(result == "Computer")
    return `You Lose! ${playerSelection} beats ${computerSelection}`

}


//play the game for 5 rounds

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Hello, hello!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-----------------");
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++
        }
    }
    console.log("Game Over");
    if (playerScore > computerScore) {
        console.log("Congratulations! You are the Winner!");
    } else if (playerScore < computerScore) {
        console.log("You lose! Better luck next time!");
    } else {
        console.log("It's a Tie!");
    }
}

game();