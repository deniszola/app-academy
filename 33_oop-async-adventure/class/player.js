const { Character } = require("./character");
const { Equipment } = require("./equipment");
const { Food } = require("./food");
const { Weapon } = require("./weapon");

class Player extends Character {
  constructor(name, currentRoom) {
    super(name, "main character", currentRoom);
  }

  printInventory() {
    console.log(`${this.name}'s weapon is ${this.currentWeapon.name}.`);
    console.log(`${this.name}'s equipment is ${this.currentEquipment.name}.`);

    if (this.items.length) {
      console.log(`${this.name} is carrying:`);

      this.items.forEach((item) => {
        if (item instanceof Food) {
          console.log(`  ${thisItem.name} (${thisItem.healing} ❤️ )`);
        } else if (item instanceof Weapon) {
          console.log(`  ${item.name} (${item.power} dmg)`);
        } else if (item instanceof Equipment) {
          console.log(`  ${item.name} (${item.defense} def)`);
        } else console.log(`  ${item.name}`);
      });
    } else console.log(`${this.name} is not carrying anything.`);
  }

  eatItem(itemName) {
    // Fill this in
    const item = this.getItemByName(itemName);

    if (item && item instanceof Food) {
      this.items = this.items.filter((currentItem) => currentItem !== item);
      this.health += item.healing;
      console.log(`The ${item.name} restored ${item.healing} health.`);
    } else console.log(`You don't have an item with this name`);
  }

  hit(name) {
    // Fill this in
    const enemy = this.currentRoom.getEnemyByName(name);

    if (enemy) {
      enemy.setPlayer(this);
      enemy.applyDamage(this.strength);
      console.log(`You hit the ${enemy.name} for ${this.strength} damage.`);
    } else console.log(`The room doesn't have an enemy with this name`);
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

  move(exitKey) {
    const nextRoom = this.currentRoom.getRoomInDirection(exitKey);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;
      this.currentRoom.printRoom();
    } else console.log("You cannot move in that direction");
  }
}

module.exports = {
  Player,
};
