'use strict';

const sign = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let pcScore = 0;
let score = 0;
let gameRound = 200;
const rockEle = document.querySelector('.rock');
const paperEle = document.querySelector('.paper');
const scissorsEle = document.querySelector('.scissors');
const playerEle = document.querySelector('.p-questionmark');
const pcEle = document.querySelector('.pc-questionmark');
const playerCount = document.querySelector('.playerScore');
const pcCount = document.querySelector('.pcScore');
const reset = document.querySelector('.restart');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const theWinner = document.querySelector('.winner');

function getComputerChoice() {
  const random = sign[Math.floor(Math.random() * sign.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  //Player Win Condition
  if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    return 1;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    return 1;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    return 1;
    //Computer Win condition
  } else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
    return 2;
  } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
    return 2;
  } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
    return 2;
    //Tie
  } else if (computerSelection == 'Rock' && playerSelection == 'Rock') {
    return 0;
  } else if (computerSelection == 'Paper' && playerSelection == 'Paper') {
    return 0;
  } else if (computerSelection == 'Scissors' && playerSelection == 'Scissors') {
    return 0;
  } else return 'Something is wrong in playRound Function';
}

function game(playerChoice) {
  if (playerScore < 5 && pcScore < 5) {
    let pcChoice = getComputerChoice();
    changePicture(pcChoice);
    let winner = playRound(playerChoice, pcChoice);
    if (winner === 1) {
      playerScore = playerScore + 1;
      playerCount.textContent = `Player : ${playerScore}`;
      console.log('playerScore score is ' + playerScore);
      if (playerScore === 5) {
        theWinner.textContent = 'The Winner is Player';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      }
    } else if (winner === 2) {
      pcScore = pcScore + 1;
      pcCount.textContent = `Computer : ${pcScore}`;
      if (pcScore === 5) {
        theWinner.textContent = 'The Winner is Pc';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      }
    } else if (winner === 0) {
      console.log('Tie');
    } else {
      console.log('Something went wrong');
    }
  }
}

function changePicture(computerSelection) {
  if (computerSelection === 'Rock') {
    pcEle.src = 'images/rock.png';
  } else if (computerSelection === 'Paper') {
    pcEle.src = 'images/paper.jpg';
  } else if (computerSelection === 'Scissors') {
    pcEle.src = 'images/scc.png';
  } else {
    console.log('Something Else');
  }
}

rockEle.addEventListener('click', function () {
  const playerChoice = 'Rock';
  playerEle.src = 'images/rock.png';
  game(playerChoice);
});

paperEle.addEventListener('click', function () {
  const playerChoice = 'Paper';
  playerEle.src = 'images/paper.jpg';
  game(playerChoice);
});

scissorsEle.addEventListener('click', function () {
  const playerChoice = 'Scissors';
  playerEle.src = 'images/scc.png';
  game(playerChoice);
});

reset.addEventListener('click', function () {
  pcEle.src = 'images/qm.png';
  playerEle.src = 'images/qm.png';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  playerScore = 0;
  playerCount.textContent = `Player : ${playerScore}`;
  pcScore = 0;
  pcCount.textContent = `Computer : ${pcScore}`;
});
