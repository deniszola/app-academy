const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " "],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Add commands
    Screen.addCommand(
      "p",
      "Place a move at the cursor's position column",
      ConnectFour.play.bind(this)
    );
    Screen.addCommand(
      "left",
      "Moves the cursor left one character",
      this.cursor.left.bind(this.cursor)
    );
    Screen.addCommand(
      "right",
      "Moves the cursor right one character",
      this.cursor.right.bind(this.cursor)
    );

    this.cursor.setBackgroundColor();
    Screen.setMessage(`'${this.playerTurn}' player's turn`);
    Screen.render();
    Screen.printCommands();
  }

  static getFreeColumnPosition(grid, col) {
    let move;

    for (let j = 0; j < 6; j++) {
      if (grid[j][col].trim()) break;
      move = { row: j, col };
    }

    return move;
  }

  static checkHorWin(grid) {
    for (let i = 0; i < 6; i++) {
      let rowCount = 1;

      for (let j = 0; j < 6; j++) {
        const currentCel = grid[i][j].trim();
        const nextCel = grid[i][j + 1].trim();

        if (currentCel && currentCel === nextCel) {
          rowCount++;

          if (rowCount === 4) {
            // highlights winner row
            for (let x = 0; x < 4; x++) {
              Screen.setBackgroundColor(i, j - 2 + x, "green");
            }

            // returns winner symbol
            return currentCel;
          }
        } else rowCount = 1;
      }
    }
  }

  static checkVerWin(grid) {
    for (let i = 0; i < 7; i++) {
      let colCount = 1;

      for (let j = 0; j < 5; j++) {
        const currentCel = grid[j][i].trim();
        const nextCel = grid[j + 1][i].trim();

        if (currentCel && currentCel === nextCel) {
          colCount++;

          if (colCount === 4) {
            // highlights winner column
            for (let x = 0; x < 4; x++) {
              Screen.setBackgroundColor(j - 2 + x, i, "green");
            }

            // returns winner symbol
            return currentCel;
          }
        } else colCount = 1;
      }
    }
  }

  static checkDiaWin(grid) {
    // recognizes diagonal positive-downward wins
    for (let i = 0; i < 4; i++) {
      let topCount = 1;

      for (let j = 0; j < 5; j++) {
        const curTopCel = grid[j][i + j]?.trim();
        const nextTopCel = grid[j + 1][i + j + 1]?.trim();

        if (curTopCel === undefined || nextTopCel === undefined) break;
        else if (curTopCel && nextTopCel && curTopCel === nextTopCel) {
          topCount++;

          if (topCount === 4) {
            // highlights winner diagonal positive-downward
            for (let x = 0; x < 4; x++) {
              Screen.setBackgroundColor(j - 2 + x, i + j - 2 + x, "green");
            }

            // returns winner symbol
            return curTopCel;
          }
        } else topCount = 1;
      }
    }

    // recognizes diagonal negative-downward wins
    for (let i = 1; i < 3; i++) {
      let topCount = 1;

      for (let j = 0; j < 5 - i; j++) {
        const curTopCel = grid[i + j][j]?.trim();
        const nextTopCel = grid[i + j + 1][j + 1]?.trim();

        if (curTopCel === undefined || nextTopCel === undefined) break;
        else if (curTopCel && nextTopCel && curTopCel === nextTopCel) {
          topCount++;

          if (topCount === 4) {
            // highlights winner diagonal negative-downward
            for (let x = 0; x < 4; x++) {
              Screen.setBackgroundColor(i + j - 2 + x, j - 2 + x, "green");
            }

            // returns winner symbol
            return curTopCel;
          }
        } else topCount = 1;
      }
    }

    // recognizes diagonal positive-upward wins
    for (let i = 0; i < 4; i++) {
      let bottomCount = 1;

      for (let j = 0; j < 5; j++) {
        const curBottomCel = grid[5 - j][j + i]?.trim();
        const nextBottomCel = grid[5 - j - 1][j + i + 1]?.trim();

        if (curBottomCel === undefined || nextBottomCel === undefined) break;
        else if (
          curBottomCel &&
          nextBottomCel &&
          curBottomCel === nextBottomCel
        ) {
          bottomCount++;

          if (bottomCount === 4) {
            // highlights winner diagonal positive-upward
            for (let x = 0; x < 4; x++) {
              Screen.setBackgroundColor(5 - j + 2 - x, j + i - 2 + x, "green");
            }

            // returns winner symbol
            return curBottomCel;
          }
        } else bottomCount = 1;
      }
    }

    // recognizes diagonal negative-upward wins
    for (let i = 1; i < 3; i++) {
      let bottomCount = 1;

      for (let j = 0; j < 5 - i; j++) {
        const curBottomCel = grid[5 - i - j][j]?.trim();
        const nextBottomCel = grid[5 - i - j - 1][j + 1]?.trim();

        if (curBottomCel === undefined || nextBottomCel === undefined) break;
        else if (
          curBottomCel &&
          nextBottomCel &&
          curBottomCel === nextBottomCel
        ) {
          bottomCount++;

          if (bottomCount === 4) {
            // highlights winner diagonal negative-upward
            for (let x = 0; x < 4; x++) {
              Screen.setBackgroundColor(5 - i - j + 2 - x, j - 2 + x, "green");
            }

            // returns winner symbol
            return curBottomCel;
          }
        } else bottomCount = 1;
      }
    }
  }

  static getWinner(grid) {
    // recognizes horizontal wins
    const horWin = ConnectFour.checkHorWin(grid);
    if (horWin) return horWin;

    // recognizes vertical wins
    const verWin = ConnectFour.checkVerWin(grid);
    if (verWin) return verWin;

    // recognizes diagonal wins
    const diaWin = ConnectFour.checkDiaWin(grid);
    if (diaWin) return diaWin;
  }

  static getCelSum(grid) {
    return grid.reduce(
      (str, sub) => str + sub.reduce((subStr, cel) => subStr + cel.trim(), ""),
      ""
    );
  }

  static checkWin(grid) {
    const winner = ConnectFour.getWinner(grid);
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    if (winner) return winner;

    const celTotal = ConnectFour.getCelSum(grid);
    const celTotalLength = celTotal.length;
    const gridTotalLength = grid.length * grid[0].length;
    // Return 'T' if the game is a tie
    if (celTotalLength === gridTotalLength) return "T";
    // Return false if the game has not ended
    if (!celTotal || celTotalLength < gridTotalLength) return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

  static play() {
    // Get cursor's position cell
    const empty = ConnectFour.getFreeColumnPosition(
      Screen.grid,
      this.cursor.col
    );

    // If there is an empty cell in the current column
    if (empty) {
      // Fill cell with current player symbol
      Screen.setGrid(empty.row, empty.col, this.playerTurn);

      // Check if there is a winner
      const winner = ConnectFour.checkWin(Screen.grid);
      // If there is a winner, end the game
      if (winner) ConnectFour.endGame(winner);

      // If there isn't a winner, change player symbol for next move
      this.playerTurn = this.playerTurn === "O" ? "X" : "O";

      // Display which player plays next
      Screen.setMessage(`'${this.playerTurn}' player's turn`);
      Screen.render();
    }

    Screen.printCommands();
  }
}

module.exports = ConnectFour;
