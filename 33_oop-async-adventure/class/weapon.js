const { Item } = require("./item");

class Weapon extends Item {
  constructor(name, description, power) {
    super(name, description);
    this.power = power;
  }
}

module.exports = {
  Weapon,
};
