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
    console.log("- Too low.👇🙁");
    return false;
  }

  if (num > secretNumber) {
    console.log("- Too high.👆🙁");
    return false;
  }

  console.log("- Correct!👍😃");
  return true;
}

// ask player to input a guess
function askGuess() {
  if (numAttempts--) {
    rl.question(`\nEnter a guess (${numAttempts + 1}):➡️  `, (guess) => {
      if (checkGuess(Math.floor(Number(guess)))) {
        console.log("\nYOU WON.🎉🤪😃");
        rl.close();
      } else {
        askGuess();
      }
    });
  } else {
    console.log("\nYou Lose.💩🤬😠");
    rl.close();
  }
}

// ask player to input the minimum and maximum values
function askRange() {
  rl.question("Enter the minimum number:➡️  ", (minInput) => {
    minInput = Math.ceil(Number(minInput));

    rl.question("Enter the maximum number:➡️  ", (maxInput) => {
      maxInput = Math.floor(Number(maxInput));
      secretNumber = randomInRange(minInput, maxInput);

      console.log(
        `\nI'm thinking of a number between ${minInput} and ${maxInput}...🤔🤔🤔`
      );

      setTimeout(askGuess, 1500);
    });
  });
}

// ask player to input the maximum number of attempts
function askLimit() {
  console.log("\n✨✨✨ Welcome to the numbers guessing game!!! ✨✨✨");

  rl.question("\nEnter the attempts number:➡️  ", (attemptsInput) => {
    numAttempts = Math.floor(Number(attemptsInput));

    askRange();
  });
}

// start the game
askLimit();
