/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
//const totalScore={computerScore:0,playerScore:0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  const computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let resultDiv = document.getElementById("result");

  let handsDiv = document.getElementById("hands");

  let playerScore = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "Its a tie";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`;
  // playerScore.innerText=`Your Score: ${totalScore['playerScore']}`
  // playerScore.innerText = `Your Score:${Number(playerScore.innerText) + score}`
  let currentScore = parseInt(playerScore.innerText) || 0; // parse score, default to 0 if empty or

  playerScore.innerText = `Your Score: ${currentScore + parseInt(score)}`;

  console.log(playerScore.innerText, "j");
  console.log(score);
  console.log(playerScore.innerText + score);
  // let currentScore = Number(playerScore.innerText);

  // // Add the score variable to the current score
  // let currentScore = currentScore + score;

  // // Update the text content of the playerScore element to display the updated player's score
  // playerScore.innerText = `Your Choice: ${currentScore}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton")

  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  let endGameButton = document.getElementById("endGameButton")
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  // totalScore['playerScore']=0
  // totalScore['computerScore']=0
let resultDiv = document.getElementById("result")

  let handsDiv = document.getElementById("hands")

  let playerScore = document.getElementById("player-score")

  resultDiv.innerText = ""
  handsDiv.innerText = ""
  playerScore.innerText = ""
}

playGame();
