const Screen = require("./screen");
const Cursor = require("./cursor");

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
      TTT.play.bind(this)
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
    const gridLength = grid.length;
    const subGridLength = grid[0].length;
    const winningColor = "green";

    // recognizes horizontal and vertical wins
    for (let i = 0; i < gridLength; i++) {
      // recognizes horizontal wins
      let rowCount = 1;

      for (let j = 0; j < subGridLength - 1; j++) {
        const currentCel = grid[i][j].trim();
        const nextCel = grid[i][j + 1].trim();

        if (!currentCel) break;
        if (currentCel === nextCel) rowCount++;
      }

      if (rowCount === subGridLength) {
        // highlights winner row
        grid[i].forEach((_, j) =>
          Screen.setBackgroundColor(i, j, winningColor)
        );

        // returns winner symbol
        return grid[i][0];
      }

      // recognizes vertical wins
      let colCount = 1;

      for (let j = 0; j < gridLength - 1; j++) {
        const currentCel = grid[j][i].trim();
        const nextCel = grid[j + 1][i].trim();

        if (!currentCel) break;
        if (currentCel === nextCel) colCount++;
      }

      if (colCount === gridLength) {
        // highlights winner column
        grid.forEach((_, j) => Screen.setBackgroundColor(j, i, winningColor));

        // returns winner symbol
        return grid[0][i];
      }
    }

    // recognizes diagonal wins
    let topCount = 1;
    let bottomCount = 1;

    for (let i = 0, j = gridLength - 1; i < gridLength - 1; i++, j--) {
      // recognizes top-down diagonal wins
      const curTopCel = grid[i][i].trim();
      const nextTopCel = grid[i + 1][i + 1].trim();

      if (curTopCel && curTopCel === nextTopCel) topCount++;

      // recognizes bottom-up diagonal wins
      const curBottomCel = grid[j][i].trim();
      const nextBottomCel = grid[j - 1][i + 1].trim();

      if (curBottomCel && curBottomCel === nextBottomCel) bottomCount++;
    }

    if (topCount === gridLength) {
      // highlights winner top-down diagonal
      grid.forEach((_, j) => Screen.setBackgroundColor(j, j, winningColor));

      // returns winner symbol
      return grid[0][0];
    }
    if (bottomCount === gridLength) {
      // highlights winner bottom-up diagonal
      grid.forEach((_, j) =>
        Screen.setBackgroundColor(j, gridLength - 1 - j, winningColor)
      );

      // returns winner symbol
      return grid[0][gridLength - 1];
    }
  }

  static getCelSum(grid) {
    return grid.reduce(
      (str, sub) => str + sub.reduce((subStr, cel) => subStr + cel.trim(), ""),
      ""
    );
  }

  static checkWin(grid) {
    const winner = TTT.getWinner(grid);
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    if (winner) return winner;

    const celTotal = TTT.getCelSum(grid);
    const celTotalLength = celTotal.length;
    const gridTotalLength = grid.length * grid[0].length;
    // Return 'T' if the game is a tie
    if (celTotalLength === gridTotalLength) return "T";
    // Return false if the game has not ended
    if (!celTotal || celTotalLength < gridTotalLength) return false;
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

  static play() {
    // Get cursor's position cell
    const filled = Screen.grid[this.cursor.row][this.cursor.col].trim();

    // If cell is empty
    if (!filled) {
      // Fill cell with current player symbol
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);

      // Check if there is a winner
      const winner = TTT.checkWin(Screen.grid);
      // If there is a winner, end the game
      if (winner) TTT.endGame(winner);

      // If there isn't a winner, change player symbol for next move
      this.playerTurn = this.playerTurn === "O" ? "X" : "O";

      // Display which player plays next
      Screen.setMessage(`'${this.playerTurn}' player's turn`);
      Screen.render();
    }

    Screen.printCommands();
  }
}

module.exports = TTT;
