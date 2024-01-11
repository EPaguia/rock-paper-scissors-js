function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');



function playround() {
    let playerSelection = prompt('Rock, Paper, or Scissors');
    let computerSelection = getComputerChoice();
    let win = 'You win!';
    let lose = 'You lose!';
    let tie = 'It\'s a tie';
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors'))
        {return tie}
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')){
        return lose}
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        return win}
    
}




