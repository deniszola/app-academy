const { Equipment } = require("./equipment");
const { Weapon } = require("./weapon");

class Character {
  constructor(
    name,
    description,
    currentRoom,
    items = [],
    health = 100,
    strength = 10,
    defense = 0
  ) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = items;
    this.health = health;
    this.strength = strength;
    this.defense = defense;
    this.currentWeapon = new Weapon("fists", "just your bare hands", 0);
    this.currentEquipment = new Equipment(
      "plainclothes",
      "plain old cotton clothes",
      0
    );
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName);

    if (item) {
      this.currentRoom.items = this.currentRoom.items.filter(
        (currentItem) => currentItem !== item
      );
      this.items.push(item);
      console.log(`${item.name} taken`);

      if (item instanceof Weapon) {
        if (item.power > this.currentWeapon.power) {
          this.currentWeapon = item;
          this.strength = 10 + item.power;
        }
      } else if (item instanceof Equipment) {
        if (item.defense > this.currentEquipment.defense) {
          this.currentEquipment = item;
          this.defense = item.defense;
        }
      }
    } else console.log("The room doesn't have an item with this name");
  }

  getItemByName(itemName) {
    for (const item of this.items) if (item.name === itemName) return item;
  }

  dropItem(itemName) {
    const item = this.getItemByName(itemName);

    if (item) {
      this.items = this.items.filter((currentItem) => currentItem !== item);
      this.currentRoom.items.push(item);
      console.log(`${this.name} dropped its ${item.name}`);
    } else console.log(`You don't have an item with this name`);
  }

  die() {
    // Fill this in
    this.items.forEach((item) => this.dropItem(item.name));
    console.log(`The ${this.name} died!`);
    this.currentRoom = null;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount - this.defense;

    if (this.health <= 0) this.die();
  }
}

module.exports = {
  Character,
};
