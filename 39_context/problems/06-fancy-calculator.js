// Your code here
const Calculator = require("./02-calculator");

class FancyCalculator extends Calculator {
  setTotal(newTotal) {
    return (this.total = newTotal);
  }

  modulo(num) {
    return (this.total %= num);
  }

  squared() {
    return (this.total *= this.total);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}
