const readline = require("readline");

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: { name: "Rock", winsAgainst: "s" },
  p: { name: "Paper", winsAgainst: "r" },
  s: { name: "Scissors", winsAgainst: "p" },
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here
  // Print valid moves commands
  for (const key in VALID_MOVES) {
    if (Object.hasOwnProperty.call(VALID_MOVES, key)) {
      console.log(`  Type '${key}' for ${VALID_MOVES[key].name}`);
    }
  }

  // Print quit and help commands
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
}

function getWinner(move1, move2) {
  // Your code here
  // tie
  if (move1 === move2) return 0;
  // win
  else if (VALID_MOVES[move1].winsAgainst === move2) return 1;
  // loss
  else return -1;
}

function getCPUMove() {
  // Your code here
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return validMoveKeys[randomIndex];
}

function processMove(cmd, cpu) {
  // Your code here
  const winner = getWinner(cmd, cpu);

  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  if (!winner) {
    // tie
    console.log("You tie.\n");
    ties++;
  } else if (winner === 1) {
    // win
    console.log("You win!\n");
    wins++;
  } else {
    // loss
    console.log("You lose...\n");
    losses++;
  }
}

function printStatus() {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  printStatus();

  rl.question("> ", (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === "h") {
      console.log("\nHelp:\n");
      printHelp();
    } else if (cmd === "q") {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]) {
      const cpu = getCPUMove();
      processMove(cmd, cpu);
    } else {
      console.log("\nInvalid command.\n");
      printHelp();
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("\n✨✨✨ Welcome to Rock/Paper/Scissors ✨✨✨\n");
  printHelp();

  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== "undefined" && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput,
};
