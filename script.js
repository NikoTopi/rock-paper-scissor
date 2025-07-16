//Initialize a function that takes an argument of choice and returns a number from 0-1 * the choice
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Initialize a function that prompts the user to enter a choice and it returns that choice in the console
function getHumanChoice() {
  const choice = prompt("Enter Rock Paper or Scissor: ");
  return choice;
}

//Initialize a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(
        `It's a tie! You both chose ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } `
      );
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper.");
      humanScore++;
    } else {
      computerScore++;
      const comp =
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      const human = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
      console.log(`You lose! ${comp} beats ${human} `);
    }
  }
  for (i = 1; i <= 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Final Scores -> You:${humanScore}, Computer:${computerScore} `);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
