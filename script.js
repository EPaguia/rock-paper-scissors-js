function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

const rock = document.querySelector('.rock');

rock.addEventListener("click", e => {
    console.log('pwet')
})

