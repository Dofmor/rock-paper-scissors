const hand = ["rock", "paper", "scissor"];

function getComputerChoice () {
    return hand[Math.floor(Math.random() * hand.length)];
} 

alert (getComputerChoice());