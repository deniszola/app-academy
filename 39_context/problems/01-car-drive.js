// Your code here
class Car {
  constructor() {
    this.speed = 0;
  }

  drive(newSpeed) {
    return (this.speed = newSpeed);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Car;
} catch {
  module.exports = null;
}
