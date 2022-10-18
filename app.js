function getComputerChoice() {
    let computerSelectionRandomizer = Math.floor(Math.random() * 3) + 1;
    switch (computerSelectionRandomizer) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
    }
    console.log(computerSelection);
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("What's your choice?").toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

// function playRound(playerSelection, computerSelection) {
//     switch (playerSelection) {
//         case "rock":
//             if (computerSelection === "rock") {

//             }
//         case "paper":

//         case "scissors":

//         default:
//             return "error";
//     }
// }