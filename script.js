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
const round = document.querySelector('.round');
let win = 'You win!';
let lose = 'You lose!';
let tie = 'It\'s a tie';
let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if ((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors'))
        {return [tie, computerSelection]}
    else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock')){
        return [lose, computerSelection]}
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        return [win, computerSelection]}
}


function game(playerChoice){
    player.textContent = playerChoice;
    let roundResult = playRound(playerChoice);
    computer.textContent = roundResult[1];
    round.textContent = "Round " +roundCounter;
    if (roundResult[0] == win) {    
        roundCounter++;
        playerScore++;
        result.textContent = win;
        }
    else if (roundResult[0] == lose) {
        roundCounter++;
        computerScore++;
        result.textContent = lose;
        }
    else if (roundResult[0] = tie) {
        result.textContent = tie;
    };
    if ((playerScore == 3) || (computerScore == 3)) {
        if (playerScore == 3) {
            round.textContent = "You win!\nRounds won: "+ playerScore +"\n" + "Rounds lost: " + computerScore;
            roundCounter = 1;
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 3) {
            round.textContent = "You lose!\nRounds won: "+ playerScore +"\nRounds lost: " + computerScore;
            roundCounter = 1;
            playerScore = 0;
            computerScore = 0;
        }

    } 
    }


rock.addEventListener('click', () => {
    game('rock')
});

paper.addEventListener('click', () => {
    game('paper');
    })

scissors.addEventListener('click', () => {
    game('scissors');
    })
