const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = "black";
    this.cursorColor = "yellow";
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  updateScreen() {
    Screen.render();
    Screen.printCommands();
  }

  up() {
    this.resetBackgroundColor();
    if (this.row > 0) this.row--;
    this.setBackgroundColor();
    this.updateScreen();
  }

  down() {
    this.resetBackgroundColor();
    if (this.row < this.numRows - 1) this.row++;
    this.setBackgroundColor();
    this.updateScreen();
  }

  left() {
    this.resetBackgroundColor();
    if (this.col > 0) this.col--;
    this.setBackgroundColor();
    this.updateScreen();
  }

  right() {
    this.resetBackgroundColor();
    if (this.col < this.numCols - 1) this.col++;
    this.setBackgroundColor();
    this.updateScreen();
  }
}

module.exports = Cursor;
