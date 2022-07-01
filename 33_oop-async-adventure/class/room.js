class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  connectRooms(exitKey, exitRoom) {
    // Check if the direction and connecting room are valid
    if (["n", "s", "e", "w"].indexOf(exitKey) < 0 || !exitRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[exitKey] = exitRoom;
  }

  getEnemies() {
    const { World } = require("./world");
    return World.getEnemiesInRoom(this);
  }

  getExitsKeys() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExitsKeys().join(", ")}`;
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");

    // print enemies names
    const enemies = this.getEnemies();
    if (enemies.length) {
      console.log(`Enemies: ${enemies.map((enemy) => enemy.name).join(", ")}`);

      enemies.forEach((enemy) => enemy.act());
    }

    // print items names
    if (this.items.length) {
      console.log(`Items: ${this.items.map((item) => item.name).join(", ")}`);
    }

    console.log(this.getExitsString());
    console.log("");
  }

  getItemByName(itemName) {
    // Fill this in
    for (const item of this.items) if (item.name === itemName) return item;
  }

  getEnemyByName(enemyName) {
    // Fill this in
    const enemies = this.getEnemies();

    for (const enemy of enemies) if (enemy.name === enemyName) return enemy;
  }

  getRoomInDirection(exitKey) {
    return this.exits[exitKey];
  }
}

module.exports = {
  Room,
};
