function getComputerChoice() {
    let computerSelectionRandomizer = Math.floor(Math.random() * 3) + 1;
    switch (computerSelectionRandomizer) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("What's your choice? rock, paper, or scissors?").toLowerCase();
    return playerChoice;
}

function playRound() {
    let playerSelection = getPlayerChoice();
    console.log("Player choice is " + playerSelection);
    let computerSelection = getComputerChoice();
    console.log("Computer choice is " + computerSelection);
    let winner = "";

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                console.log("Tie!");
            }
            else if (computerSelection == "paper") {
                console.log("Computer Wins!");
                winner = "computer";
            }
            else if (computerSelection == "scissors") {
                console.log("Player Wins!");
                winner = "player";
            }
            else {
                console.log("Error");
            }
            break;
        case "paper":
            if (computerSelection == "paper") {
                console.log("Tie!");
            }
            else if (computerSelection == "scissors") {
                console.log("Computer Wins!");
                winner = "computer";
            }
            else if (computerSelection == "rock") {
                console.log("Player Wins!");
                winner = "player";
            }
            else {
                console.log("Error");
            }
            break;
        case "scissors":
            if (computerSelection == "scissors") {
                console.log("Tie!");
            }
            else if (computerSelection == "rock") {
                console.log("Computer Wins!");
                winner = "computer";
            }
            else if (computerSelection == "paper") {
                console.log("Player Wins!");
                winner = "player";
            }
            else {
                console.log("Error");
            }
        default:
            return "error";
    }
    return winner;
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();

        if (roundResult == "player") {
            playerCounter++;
        }
        else if (roundResult == "computer") {
            computerCounter++;
        }
        else {
            console.log("No winner this round");
        }
    }

    if (playerCounter > computerCounter) {
        console.log("Player wins the game");
    }
    else if (computerCounter > playerCounter) {
        console.log("Computer wins the game");
    }
    else {
        console.log("After 5 rounds we do not havve a winnner");
    }
}

window.onload = game();