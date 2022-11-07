const container = document.querySelector('#container');
const display = document.createElement('div');
const controls = document.createElement('div');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const playerRounds = document.createElement('div');
const computerRounds = document.createElement('div');
const winnerScreen = document.createElement('div');

let playerCounter = 0;
let computerCounter = 0;

display.classList.add('display');
controls.classList.add('controls');
rockBtn.classList.add('rock', 'choiceBtn');
paperBtn.classList.add('paper', 'choiceBtn');
scissorsBtn.classList.add('scissors', 'choiceBtn');
playerRounds.classList.add('roundCounter');
computerRounds.classList.add('roundCounter');
winnerScreen.classList.add('winnerScreen');

display.textContent = 'Lets play Rock Paper Scissors. Select your choice. ';
playerRounds.innerHTML = 'Player rounds: ' + playerCounter;
computerRounds.innerHTML = 'Computer rounds: ' + computerCounter;
rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

container.appendChild(display);
display.appendChild(playerRounds);
display.appendChild(computerRounds);
container.appendChild(controls);
controls.appendChild(rockBtn);
controls.appendChild(paperBtn);
controls.appendChild(scissorsBtn);

rockBtn.addEventListener('click', () => { playRound("rock"); });
paperBtn.addEventListener('click', () => { playRound("paper"); });
scissorsBtn.addEventListener('click', () => { playRound("scissors"); });

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

function playRound(playerSelection) {
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
    game(winner);
}

function game(winner) {
    if (winner == "player") {
        playerCounter++;
        playerRounds.innerHTML = 'Player rounds: ' + playerCounter;
        console.log(playerCounter);
    }
    else if (winner == "computer") {
        computerCounter++;
        computerRounds.innerHTML = 'Computer rounds: ' + computerCounter;
        console.log(computerCounter);
    }
    else {
        console.log("No winner this round");
    }

    if (playerCounter == 5) {
        endScreen("Player");
    }
    else if (computerCounter == 5) {
        endScreen("Computer");
    }
}

function endScreen(winner) {
    display.style.cssText = "display: none;";
    controls.style.cssText = "display: none;";
    winnerScreen.innerHTML = winner + ' Wins!!';
    container.appendChild(winnerScreen);
}