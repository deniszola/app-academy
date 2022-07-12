class ComputerPlayer {
  static getValidMoves(grid) {
    // Your code here
    // Method 1 - For Loop + Array.prototype.push()
    const validMoves = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!grid[i][j].trim()) {
          validMoves.push({ row: i, col: j });
        }
      }
    }

    return validMoves;

    /*
    // Method 2 - Array.prototype.reduce() + Array.prototype.concat()
    return grid.reduce(
      (validMoves, row, i) =>
        validMoves.concat(
          row.reduce(
            (validRowMoves, cel, j) =>
              validRowMoves.concat(!cel.trim() ? [{ row: i, col: j }] : []),
            []
          )
        ),
      []
    );
    */

    /*
    // Method 3 - Array.prototype.reduce() + Spread syntax (...)
    return grid.reduce(
      (validMoves, row, i) => [
        ...validMoves,
        ...row.reduce(
          (validRowMoves, cel, j) =>
            !cel.trim()
              ? [...validRowMoves, { row: i, col: j }]
              : validRowMoves,
          []
        ),
      ],
      []
    );
    */
  }

  static getRandomMove(grid) {
    // Your code here
    const validMoves = ComputerPlayer.getValidMoves(grid);
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    const validMove = !grid[0][1].trim()
      ? { row: 0, col: 1 }
      : validMoves[randomIndex];

    return validMove;
  }

  static getWinningMoves(grid, symbol) {
    // Your code here
    const winningMoves = {};
    const playerCell = symbol;
    const oppositeCell = symbol === "X" ? "O" : "X";

    // recognizes diagonal, horizontal and vertical moves
    // diagonal top-down variables
    let topSymbolCount = { O: 0, X: 0 };
    let topEmptyCount = 0;
    let topWinningMove;
    // diagonal bottom-up variables
    let bottomSymbolCount = { O: 0, X: 0 };
    let bottomEmptyCount = 0;
    let bottomWinningMove;

    for (let i = 0, j = 2; i < 3; i++, j--) {
      // diagonal top-down count
      const topCell = grid[i][i].trim();

      if (!topCell) {
        topEmptyCount++;
        topWinningMove = { row: i, col: i };
      } else if (topCell === playerCell) topSymbolCount[playerCell]++;
      else topSymbolCount[oppositeCell]++;

      // diagonal bottom-up count
      const bottomCel = grid[j][i].trim();

      if (!bottomCel) {
        bottomEmptyCount++;
        bottomWinningMove = { row: j, col: i };
      } else if (bottomCel === playerCell) bottomSymbolCount[playerCell]++;
      else bottomSymbolCount[oppositeCell]++;

      // horizontal variables
      let horizontalSymbolCount = { O: 0, X: 0 };
      let horizontalEmptyCount = 0;
      let horizontalWinningMove;
      // vertical variables
      let verticalSymbolCount = { O: 0, X: 0 };
      let verticalEmptyCount = 0;
      let verticalWinningMove;

      for (let j = 0; j < 3; j++) {
        // horizontal count
        const horizontalCell = grid[i][j].trim();

        if (!horizontalCell) {
          horizontalEmptyCount++;
          horizontalWinningMove = { row: i, col: j };
        } else if (horizontalCell === playerCell)
          horizontalSymbolCount[playerCell]++;
        else horizontalSymbolCount[oppositeCell]++;

        // vertical count
        const verticalCell = grid[j][i].trim();

        if (!verticalCell) {
          verticalEmptyCount++;
          verticalWinningMove = { row: j, col: i };
        } else if (verticalCell === playerCell)
          verticalSymbolCount[playerCell]++;
        else verticalSymbolCount[oppositeCell]++;
      }

      // horizontal check
      if (
        horizontalSymbolCount[playerCell] === 2 &&
        horizontalEmptyCount === 1
      ) {
        winningMoves[playerCell] = horizontalWinningMove;
      } else if (
        horizontalSymbolCount[oppositeCell] === 2 &&
        horizontalEmptyCount === 1
      ) {
        winningMoves[oppositeCell] = horizontalWinningMove;
      }

      // vertical check
      if (verticalSymbolCount[playerCell] === 2 && verticalEmptyCount === 1) {
        winningMoves[playerCell] = verticalWinningMove;
      } else if (
        verticalSymbolCount[oppositeCell] === 2 &&
        verticalEmptyCount === 1
      ) {
        winningMoves[oppositeCell] = verticalWinningMove;
      }
    }

    // diagonal top-down check
    if (topSymbolCount[playerCell] === 2 && topEmptyCount === 1) {
      winningMoves[playerCell] = topWinningMove;
    } else if (topSymbolCount[oppositeCell] === 2 && topEmptyCount === 1) {
      winningMoves[oppositeCell] = topWinningMove;
    }

    // diagonal bottom-up check
    if (bottomSymbolCount[playerCell] === 2 && bottomEmptyCount === 1) {
      winningMoves[playerCell] = bottomWinningMove;
    } else if (
      bottomSymbolCount[oppositeCell] === 2 &&
      bottomEmptyCount === 1
    ) {
      winningMoves[oppositeCell] = bottomWinningMove;
    }

    return winningMoves;
  }

  static getMoveScore(move) {
    if (move.row === 1 && move.col === 1) {
      return 15;
    } else if (move.row === 0 && move.col === 0) {
      return 10;
    } else if (move.row === 0 && move.col === 2) {
      return 10;
    } else if (move.row === 2 && move.col === 0) {
      return 10;
    } else if (move.row === 2 && move.col === 2) {
      return 10;
    } else if (move.row === 0) {
      return 5;
    } else if (move.col === 0) {
      return 5;
    } else if (move.row === 2) {
      return 5;
    } else if (move.col === 2) {
      return 5;
    }
  }

  static getBestMove(grid) {
    const validMoves = ComputerPlayer.getValidMoves(grid);
    let bestMove = validMoves[0];
    let bestScore = -Infinity;

    for (let i = 0; i < validMoves.length; i++) {
      const validMove = validMoves[i];
      const validMoveScore = this.getMoveScore(validMove);

      if (validMoveScore > bestScore) {
        bestMove = validMove;
        bestScore = validMoveScore;
      }
    }

    return bestMove;
  }

  static getSmartMove(grid, symbol) {
    // Your code here
    const playerCell = symbol;
    const oppositeCell = symbol === "X" ? "O" : "X";

    const winningMoves = ComputerPlayer.getWinningMoves(grid, playerCell);
    const bestMove = ComputerPlayer.getBestMove(grid);
    const randomMove = ComputerPlayer.getRandomMove(grid);

    const smartMove = winningMoves[playerCell]
      ? winningMoves[playerCell]
      : winningMoves[oppositeCell]
      ? winningMoves[oppositeCell]
      : bestMove
      ? bestMove
      : randomMove;

    return smartMove;
  }
}

module.exports = ComputerPlayer;
