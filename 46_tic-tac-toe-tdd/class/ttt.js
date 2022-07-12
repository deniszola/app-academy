const Screen = require("./screen");
const Cursor = require("./cursor");
const ComputerPlayer = require("./computer-player");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Add commands
    Screen.addCommand(
      "p",
      "Place a move at the cursor's position",
      this.play.bind(this)
    );
    Screen.addCommand(
      "up",
      "Moves the cursor up one line",
      this.cursor.up.bind(this.cursor)
    );
    Screen.addCommand(
      "down",
      "Moves the cursor down one line",
      this.cursor.down.bind(this.cursor)
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

  static getWinner(grid) {
    const winningColor = "green";

    // recognizes horizontal and vertical wins
    for (let i = 0; i < 3; i++) {
      // horizontal variables
      let horizontalCount = 1;
      // vertical variables
      let verticalCount = 1;

      for (let j = 0; j < 2; j++) {
        // horizontal count
        const horizontalCell = grid[i][j].trim();
        const horizontalCellNext = grid[i][j + 1].trim();

        if (horizontalCell && horizontalCell === horizontalCellNext) {
          horizontalCount++;
        }

        // vertical count
        const verticalCell = grid[j][i].trim();
        const verticalCellNext = grid[j + 1][i].trim();

        if (verticalCell && verticalCell === verticalCellNext) verticalCount++;
      }

      // horizontal check
      if (horizontalCount === 3) {
        // highlights winner row
        grid[i].forEach((_, j) =>
          Screen.setBackgroundColor(i, j, winningColor)
        );

        // returns winner symbol
        return grid[i][0];
      }

      if (verticalCount === 3) {
        // highlights winner column
        grid.forEach((_, j) => Screen.setBackgroundColor(j, i, winningColor));

        // returns winner symbol
        return grid[0][i];
      }
    }

    // recognizes diagonal wins
    let diagonalTopCount = 1;
    let diagonalBottomCount = 1;

    for (let i = 0, j = 2; i < 2; i++, j--) {
      // diagonal top-down count
      const diagonalTopCell = grid[i][i].trim();
      const diagonalTopCellNext = grid[i + 1][i + 1].trim();

      if (diagonalTopCell && diagonalTopCell === diagonalTopCellNext) {
        diagonalTopCount++;
      }

      // diagonal bottom-up count
      const diagonalBottomCell = grid[j][i].trim();
      const diagonalBottomCellNext = grid[j - 1][i + 1].trim();

      if (diagonalBottomCell && diagonalBottomCell === diagonalBottomCellNext) {
        diagonalBottomCount++;
      }
    }

    // diagonal top-down check
    if (diagonalTopCount === 3) {
      // highlights winner top-down diagonal
      grid.forEach((_, j) => Screen.setBackgroundColor(j, j, winningColor));

      // returns winner symbol
      return grid[0][0];
    }

    // diagonal bottom-up check
    if (diagonalBottomCount === 3) {
      // highlights winner bottom-up diagonal
      grid.forEach((_, j) => Screen.setBackgroundColor(j, 2 - j, winningColor));

      // returns winner symbol
      return grid[0][2];
    }
  }

  static getFilledCellsSum(grid) {
    return grid.reduce(
      (cells, row) =>
        cells + row.reduce((rowCells, cell) => rowCells + cell.trim(), ""),
      ""
    );
  }

  static checkWin(grid) {
    const winner = TTT.getWinner(grid);
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    if (winner) return winner;

    const filledCellsSum = TTT.getFilledCellsSum(grid).length;
    // Return 'T' if the game is a tie
    if (filledCellsSum === 9) return "T";
    // Return false if the game has not ended
    if (!filledCellsSum || filledCellsSum < 9) return false;
  }

  static endGame(winner) {
    if (winner === "O" || winner === "X") {
      Screen.setMessage(`Player '${winner}' wins!`);
    } else if (winner === "T") {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

  makeMove(row, col, playerTurn) {
    // Fill cell with current player symbol
    Screen.setGrid(row, col, playerTurn);

    // Check if there is a winner
    const winner = TTT.checkWin(Screen.grid);
    // If there is a winner, end the game
    if (winner) TTT.endGame(winner);

    // If there isn't a winner, change player symbol for next move
    this.playerTurn = playerTurn === "O" ? "X" : "O";

    // Display which player plays next
    Screen.setMessage(`'${this.playerTurn}' player's turn`);
    Screen.render();
  }

  cpuPlay() {
    setTimeout(() => {
      // Get a smart move
      const smartMove = ComputerPlayer.getSmartMove(
        Screen.grid,
        this.playerTurn
      );

      // Update cursor position
      this.cursor.setPosition(smartMove);

      // Make a move
      this.makeMove(smartMove.row, smartMove.col, this.playerTurn);

      Screen.printCommands();
    }, 1500);
  }

  play() {
    // Get cursor's position cell
    const cellFilled = Screen.grid[this.cursor.row][this.cursor.col].trim();

    // If cell is empty
    if (!cellFilled) {
      // Make a move at the cursor position
      this.makeMove(this.cursor.row, this.cursor.col, this.playerTurn);

      // Setup automatic cpu play
      this.cpuPlay();
    }

    Screen.printCommands();
  }
}

module.exports = TTT;
