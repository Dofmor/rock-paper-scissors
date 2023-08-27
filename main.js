const hand = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    return hand[Math.floor(Math.random() * hand.length)];
} 

function setScore (winner) {
    (winner === 'player') ? playerScore++ : computerScore ++
    
    const playerScoreBoard = document.querySelector('#player-score')
    const computerScoreBoard = document.querySelector('#computer-score')

    playerScoreBoard.textContent = 'Player Score: ' + playerScore;
    computerScoreBoard.textContent = 'Computer Score: ' + computerScore;
}


function playRound (playerSelection, computerSelection) {
    console.log("computer chose " + computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        setScore('computer')
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        setScore('player')
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        setScore('player')
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        setScore('computer')
        return "You lose! Scissors beats Paper!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        setScore('player')
        return "You win! Scissors beats Paper!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){ 
        setScore('computer')
        return "You lose! Rock beats Scissors!";
    }
}

function play(playerSelection) {
    alert(playRound(playerSelection, getComputerChoice()))
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      play(button.id)
    });
  });