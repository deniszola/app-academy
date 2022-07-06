// Your code here
class Calculator {
  constructor() {
    this.total = 0;
  }

  add(num) {
    return (this.total += num);
  }

  subtract(num) {
    return (this.total -= num);
  }

  divide(num) {
    return (this.total /= num);
  }

  multiply(num) {
    return (this.total *= num);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Calculator;
} catch {
  module.exports = null;
}
