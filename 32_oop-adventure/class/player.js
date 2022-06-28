const { Food } = require("./food");

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    const item = this.currentRoom.getItemByName(itemName);

    if (item) {
      this.items.push(item);

      this.currentRoom.items = this.currentRoom.items.filter(
        (item) => item.name !== itemName
      );
    }
  }

  dropItem(itemName) {
    // Fill this in
    const item = this.getItemByName(itemName);

    if (item) {
      this.currentRoom.items.push(item);

      this.items = this.items.filter((item) => item.name !== itemName);
    }
  }

  eatItem(itemName) {
    // Fill this in
    const item = this.getItemByName(itemName);

    if (item && item instanceof Food) {
      this.items = this.items.filter((item) => item.name !== itemName);
    }
  }

  getItemByName(name) {
    // Fill this in
    for (const item of this.items) {
      if (item.name === name) {
        return item;
      }
    }
  }
}

module.exports = {
  Player,
};
