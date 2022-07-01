const { Character } = require("./character");

class Enemy extends Character {
  constructor(
    name,
    description,
    currentRoom,
    items,
    health,
    strength,
    fidget,
    cooldown = 3000
  ) {
    // Fill this in
    super(name, description, currentRoom, items, health, strength);
    this.fidget = fidget;
    this.cooldown = cooldown;
    this.attackTarget = null;
    this.player = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  rest() {
    // Wait until cooldown expires, then act
    setTimeout(() => {
      this.cooldown = 0;
      this.act();
    }, this.cooldown);
  }

  attack() {
    // Fill this in
    if (!this.attackTarget) return;

    this.attackTarget.applyDamage(this.strength);
    console.log(`The ${this.name} hits you for ${this.strength} damage.`);
    this.cooldown += 2000;
    this.act();
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
      this.act();
    }
  }

  scratchNose() {
    this.cooldown += 4000;
    this.alert(this.fidget);
  }

  takeSandwich() {
    // Fill this in
    const items = this.currentRoom.items;
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    this.takeItem(randomItem.name);
    console.log(`The ${this.name} took the ${randomItem.name}!`);
    this.cooldown += 1000;
    this.act();
  }

  randomMove() {
    // Fill this in
    const exitsKeys = this.currentRoom.getExitsKeys();
    const randomKey = Math.floor(Math.random() * exitsKeys.length);

    this.currentRoom = this.currentRoom.exits[exitsKeys[randomKey]];
    console.log(`The ${this.name} rushed to the ${this.currentRoom.name}!`);
    this.cooldown += 3000;
    this.act();
  }

  act() {
    // Fill this in
    const randomNum = Math.floor(Math.random() * 5);

    if (
      this.health <= 0 ||
      (this.player && this.player.currentRoom !== this.currentRoom)
    ) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget) {
      this.attack();
    } else {
      if (randomNum > 2) {
        this.scratchNose();
      } else if (this.currentRoom.items.length) {
        this.takeSandwich();
      } else if (randomNum === 1) {
        this.attackTarget = this.player;
        this.act();
      } else {
        this.randomMove();
      }
    }
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;

    if (this.health <= 0) this.die();
    else {
      this.attackTarget = this.player;
      this.act();
    }
  }
}

module.exports = {
  Enemy,
};
