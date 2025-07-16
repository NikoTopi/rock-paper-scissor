let humanScore = 0;
let computerScore = 0;

//Initialize a function that takes an argument of choice and returns a number from 0-1 * the choice
function getComputerChoice(choice) {
  return Math.floor(Math.random() * choice);
}

console.log(getComputerChoice(3));

//Initialize a function that prompts the user to enter a choice and it returns that choice in the console
function getHumanChoice() {
  const choice = prompt("Enter Rock Paper or Scissor");
  {
    return choice;
  }
}
console.log(getHumanChoice());

//Initialize a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
}
