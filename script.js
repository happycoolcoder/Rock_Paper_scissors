const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const options = document.querySelectorAll(".options button");

const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands");

const winner = document.querySelector(".winner");
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");

let pScore = 0;
let cScore = 0;
const computerOptions = ["rock", "paper", "scissors"];

function startGame() {
  introScreen.classList.add("fadeOut");
  match.classList.remove("fadeOut");
}

playBtn.addEventListener("click", startGame);

function compareHands(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    winner.innerHTML = "It is a tie";
    return;
  }

  //Check for rock
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      pScore++;
      winner.innerHTML = "Player Wins";
      playerScore.innerHTML = pScore;
    }
    //Computer choose paper
    else {
      cScore++;
      winner.innerHTML = "Computer Wins";
      computerScore.innerHTML = cScore;
    }
  }

  //HOMEWORK: Check for paper
//Check for paper
if (playerChoice === "paper") {
  if (computerChoice === "rock") {
    pScore++;
    winner.innerHTML = "Player Wins";
    playerScore.innerHTML = pScore;
  }
  //Computer choose scissors
  else {
    cScore++;
    winner.innerHTML = "Computer Wins";
    computerScore.innerHTML = cScore;
  }
}
  //HOMEWORK: Check for scissors
  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      pScore++;
      winner.innerHTML = "Player Wins";
      playerScore.innerHTML = pScore;
    }
    //Computer choose rock
    else {
      cScore++;
      winner.innerHTML = "Computer Wins";
      computerScore.innerHTML = cScore;
    }
  }
}

function optionAction(e) {
  winner.innerHTML = "Here we go...";
  playerHand.src = `./images/rock.png`;
  computerHand.src = `./images/rock.png`;

  const playerChoice = e.target.textContent;
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];


  playerHand.style.animation = "shakePlayer 0.5s ease 4";
  computerHand.style.animation = "shakeComputer 0.5s ease 4";

  setTimeout(function () {
    playerHand.src = `./images/${playerChoice}.png`;
    computerHand.src = `./images/${computerChoice}.png`;
    compareHands(playerChoice, computerChoice);
  }, 1700);
}

options.forEach(function (option) {
  option.addEventListener("click", optionAction);
});

function removeAnimation(e) {
  e.target.style.animation = "";
}

hands.forEach(function (hand){
  hand.addEventListener("animationend", removeAnimation)
});