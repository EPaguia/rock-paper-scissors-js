function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function play(playerChoice = prompt('Rock, Paper or Scissors?'), computerChoice = getComputerChoice()){
    if (playerChoice == null) {
        return ('No input')
    }
    else {let playerSelection = playerChoice.toLowerCase();
    if ((playerSelection == 'rock' && computerChoice == 'rock') || (playerSelection =='paper' && computerChoice =='paper') || (playerSelection =='scissors' && computerChoice =='scissors')){
        return [playerSelection, computerChoice, "It's a tie!"]
    }
    else if ((playerSelection == 'rock' && computerChoice =='scissors') || (playerSelection == 'paper' && computerChoice =='rock') || (playerSelection == 'scissors' && computerChoice == 'paper')) {
        return [playerSelection, computerChoice, "You Win!"]
    }
    else if ((playerSelection == 'rock' && computerChoice == 'paper') || (playerSelection =='scissors' && computerChoice == 'rock') || (playerSelection == 'paper' && computerChoice == 'scissors')) {
        return [playerSelection, computerChoice , 'You lose!']
    }
    else if (playerSelection != 'rock'|| 'paper' || 'scissors') {
        return ("Input not recognized.")
    }
}
}



