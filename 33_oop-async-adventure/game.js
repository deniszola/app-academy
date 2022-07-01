const readline = require("readline");

const { Player } = require("./class/player");
const { World } = require("./class/world");

const worldData = require("./data/world-data");

let player;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printHelp() {
  console.log("Controls:");
  console.log("  Type 'h' for help");
  console.log("  Type 'q' to quit");
  console.log("  Type 'l' to look around");
  console.log("  Type 'i' to check your inventory");
  console.log("  Type 'stats' to get your stats");
  console.log("  Type 'take <item>' to take an item");
  console.log("  Type 'drop <item>' to drop an item");
  console.log("  Type 'eat <item>' to eat a food item");
  console.log("  Type 'hit <enemy>' to attack an enemy");
  console.log("  Type 'insp <item/enemy>' to inspect something");
  console.log("  Type 'n', 's', 'e', 'w' to move");
  console.log("");
}

function printStats() {
  console.log(
    `Health: ${player.health}, Strength: ${player.strength}, Defense: ${player.defense}`
  );
}

function getThing(thingName) {
  let thing = null;
  const roomEnemy = player.currentRoom.getEnemyByName(thingName);
  const roomItem = player.currentRoom.getItemByName(thingName);

  if (roomEnemy) thing = roomEnemy;
  else if (roomItem) thing = roomItem;

  if (thing) console.log(thing.description);
  else console.log("There's no such thing here.");
}

function processCommand() {
  rl.question("> ", (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === "h") {
      printHelp();
    } else if (cmd === "q") {
      rl.close();
      process.exit();
    } else if (cmd === "l") {
      player.currentRoom.printRoom();
    } else if (cmd === "i") {
      player.printInventory();
    } else if ((cmd = "stats")) {
      printStats();
    } else if (cmd.startsWith("take ")) {
      const itemName = cmd.split(" ")[1];
      player.takeItem(itemName);
    } else if (cmd.startsWith("drop ")) {
      const itemName = cmd.split(" ")[1];
      player.dropItem(itemName);
    } else if (cmd.startsWith("eat ")) {
      const itemName = cmd.split(" ")[1];
      player.eatItem(itemName);
    } else if (cmd.startsWith("hit ")) {
      const enemyName = cmd.split(" ")[1];
      player.hit(enemyName);
    } else if (cmd.startsWith("insp ")) {
      const thingName = cmd.split(" ")[1];
      console.log(getThing(thingName));
    } else if (["n", "s", "e", "w"].indexOf(cmd) >= 0) {
      const exitKey = cmd;
      player.move(exitKey);
    } else {
      console.log("Invalid command. Type 'h' for help.");
    }

    processCommand();
  });
}

function startGame() {
  console.clear();
  console.log("Welcome to App Academy Adventure!\n");

  rl.question("Please enter your name: ", (name) => {
    console.clear();
    console.log(`Hello, ${name}!\n`);

    // Create the world and player
    World.loadWorld(worldData);
    player = new Player(name, World.rooms[1]);
    World.setPlayer(player);

    // Show commands
    printHelp();

    rl.question("\nHit RETURN to start your adventure\n", () => {
      console.clear();

      player.currentRoom.printRoom();
      processCommand();
      World.startGame();
    });
  });
}

startGame();
