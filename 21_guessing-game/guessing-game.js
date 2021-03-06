// imports
const readline = require("readline");

// setup interface for reading data from CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// initialize game variables
let secretNumber = 0;
let numAttempts = 0;

// generate secrete number between minimum and maximum values
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// determine if a guess is lower, higher or correct
function checkGuess(num) {
  if (num < secretNumber) {
    console.log("- Too low.šš");
    return false;
  }

  if (num > secretNumber) {
    console.log("- Too high.šš");
    return false;
  }

  console.log("- Correct!šš");
  return true;
}

// ask player to input a guess
function askGuess() {
  if (numAttempts--) {
    rl.question(`\nEnter a guess (${numAttempts + 1}):ā”ļø  `, (guess) => {
      if (checkGuess(Math.floor(Number(guess)))) {
        console.log("\nYOU WON.šš¤Ŗš");
        rl.close();
      } else {
        askGuess();
      }
    });
  } else {
    console.log("\nYou Lose.š©š¤¬š ");
    rl.close();
  }
}

// ask player to input the minimum and maximum values
function askRange() {
  rl.question("Enter the minimum number:ā”ļø  ", (minInput) => {
    minInput = Math.ceil(Number(minInput));

    rl.question("Enter the maximum number:ā”ļø  ", (maxInput) => {
      maxInput = Math.floor(Number(maxInput));
      secretNumber = randomInRange(minInput, maxInput);

      console.log(
        `\nI'm thinking of a number between ${minInput} and ${maxInput}...š¤š¤š¤`
      );

      setTimeout(askGuess, 1500);
    });
  });
}

// ask player to input the maximum number of attempts
function askLimit() {
  console.log("\nāØāØāØ Welcome to the numbers guessing game!!! āØāØāØ");

  rl.question("\nEnter the attempts number:ā”ļø  ", (attemptsInput) => {
    numAttempts = Math.floor(Number(attemptsInput));

    askRange();
  });
}

// start the game
askLimit();
