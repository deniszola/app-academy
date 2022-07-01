const { Room } = require("./room");
const { Item } = require("./item");
const { Food } = require("./food");
const { Enemy } = require("./enemy");
const { Weapon } = require("./weapon");

class World {
  static rooms = {};
  static enemies = [];

  static loadWorld(worldData) {
    const { rooms, items, enemies } = worldData;

    // Instantiate new room objects
    // Get name, id and description from room data
    rooms.forEach((room) => {
      World.rooms[room.id] = new Room(room.name, room.description);
    });

    // Connect rooms by ID
    // Note that all rooms must be created before they can be connected
    rooms.forEach((room) => {
      const { id, exits } = room;

      for (const exitKey in exits) {
        const exitNumber = exits[exitKey];
        const exitRoom = World.rooms[exitNumber];

        World.rooms[id].connectRooms(exitKey, exitRoom);
      }
    });

    // Instantiate items
    items.forEach((item) => {
      let newItem;

      if (item.isFood) {
        newItem = new Food(item.name, item.description, item.healing);
      } else if (item.isWeapon) {
        newItem = new Weapon(item.name, item.description, item.power);
      } else newItem = new Item(item.name, item.description);

      World.rooms[item.room].items.push(newItem);
    });

    // Instantiate enemies
    enemies.forEach((enemy) => {
      const enemyRoom = World.rooms[enemy.room];
      const newEnemy = new Enemy(
        enemy.name,
        enemy.description,
        enemyRoom,
        enemy.items,
        enemy.health,
        enemy.strength,
        enemy.fidget
      );

      World.enemies.push(newEnemy);
    });
  }

  static setPlayer(player) {
    World.enemies.forEach((enemy) => enemy.setPlayer(player));
  }

  static getEnemiesInRoom(room) {
    return World.enemies.filter((enemy) => enemy.currentRoom === room);
  }

  static startGame() {
    World.enemies.forEach((enemy) => enemy.rest());
  }
}

module.exports = {
  World,
};
