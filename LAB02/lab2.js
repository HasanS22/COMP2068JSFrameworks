// Import the 'prompt' package
const prompt = require('prompt');

// Start the prompt
prompt.start();

// Get user input for their choice (ROCK, PAPER, or SCISSORS)
prompt.get(['userSelection'], function (err, result) {
  const userSelection = result.userSelection.toLowerCase(); // Convert to lowercase

  // Generate a random number for computer's choice
  const randomNum = Math.random();
  let computerSelection;

  if (randomNum < 0.34) {
    computerSelection = 'paper';
  } else if (randomNum < 0.67) {
    computerSelection = 'scissors';
  } else {
    computerSelection = 'rock';
  }

  // Determine the winner
  let outcome;
  if (userSelection === computerSelection) {
    outcome = "It's a tie";
  } else if (
    (userSelection === 'rock' && computerSelection === 'scissors') ||
    (userSelection === 'paper' && computerSelection === 'rock') ||
    (userSelection === 'scissors' && computerSelection === 'paper')
  ) {
    outcome = 'User Wins';
  } else {
    outcome = 'Computer Wins';
  }

  // Display results
  console.log(`User selected: ${userSelection}`);
  console.log(`Computer selected: ${computerSelection}`);
  console.log(`Result: ${outcome}`);
});
