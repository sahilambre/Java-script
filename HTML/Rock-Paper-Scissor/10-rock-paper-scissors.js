let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

document.querySelector(
  ".js-score"
).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

//   if (!score) {
//     score = {
//       wins: 0,
//       loses: 0,
//       ties: 0,
//     };
//   }

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  // console.log(computerMove)
  let result = "";

  if (playerMove == "scissors") {
    if (computerMove === "rock") {
      result = "you lose.";
    } else if (computerMove === "paper") {
      result = "you win.";
    } else if (computerMove === "scissors") {
      result = "tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win.";
    } else if (computerMove === "paper") {
      result = "tie.";
    } else if (computerMove === "scissors") {
      result = "you lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "you lose.";
    } else if (computerMove === "scissors") {
      result = "you win.";
    }
  }

  if (result === "you win.") {
    score.wins += 1;
  } else if (result === "you lose.") {
    score.loses += 1;
  } else if (result === "tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-moves").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
  <img src="img/${playerMove}-emoji.png" alt="" class="move-icon" />
  <img src="img/${computerMove}-emoji.png" alt="" class="move-icon" />
  computer`;

  //         alert(
  //           `You picked ${playerMove}. Computer chose ${computerMove}. ${result}
  // Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`
  //         );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = " ";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  // return 5;
  // return "rock";
  return computerMove; //undefined
}
