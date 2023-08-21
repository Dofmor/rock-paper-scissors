const hand = ["rock", "paper", "scissor"];

function getComputerChoice () {
    return hand[Math.floor(Math.random() * hand.length)];
} 

function playRound (playerSelection, computerSelection) {
    console.log("computer chose " + computerSelection);
    if (playerSelection === computerSelection)
        return "Tie!";
    else if (playerSelection === "rock" && computerSelection === "paper")
        return "You lose! Paper beats Rock!";
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "You win! Rock beats Scissors!";
    else if (playerSelection === "paper" && computerSelection === "rock")
        return "You win! Paper beats Rock!";
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return "You lose! Scissors beats Paper!";
    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "You win! Scissors beats Paper!";
    else 
        return "You lose! Rock beats Scissors!";
}

let play = () => {
    for (let i = 0; i < 5; i++) 
        alert(playRound("rock", getComputerChoice()));
}

play();