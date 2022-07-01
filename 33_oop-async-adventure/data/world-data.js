const { Equipment } = require("../class/equipment");
const { Weapon } = require("../class/weapon");

module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      description:
        "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
      exits: { n: 2, e: 3, w: 4, s: 5 },
    },
    {
      id: 2,
      name: "Northern point",
      description:
        "You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
      exits: { s: 1 },
    },
    {
      id: 3,
      name: "Eastern point",
      description:
        "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
      exits: { w: 1 },
    },
    {
      id: 4,
      name: "Western point",
      description:
        "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
      exits: { e: 1 },
    },
    {
      id: 5,
      name: "Southern point",
      description:
        "You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
      exits: { n: 1 },
    },
    {
      id: 6,
      name: "Lonely Road",
      description:
        "A long, empty road extends beyond the horizon. Dust stirs in the wind.",
      exits: { n: 2, s: 7 },
    },
    {
      id: 7,
      name: "Lonely Road",
      description: "This road seems to go on forever.",
      exits: { n: 6, s: 8 },
    },
    {
      id: 8,
      name: "Lonely Road",
      description:
        "You approach an old cornfield to the east of the road. The cobs were never picked. Now they're too withered to eat.",
      exits: { n: 7, s: 9, e: 10 },
    },
    {
      id: 9,
      name: "Lonely Road",
      description: "The long, empty road shows no other signs of life.",
      exits: { n: 8 },
    },
    {
      id: 10,
      name: "Abandoned Cornfield",
      description:
        "You step into the cornfield. The dry stalks rustle around you. You can't see anything else.",
      exits: { w: 8 },
    },
  ],
  items: [
    {
      name: "rock",
      description: "Just a simple rock",
      room: 1,
    },
    {
      name: "sandwich",
      description: "A tasty looking sandwich",
      room: 2,
      healing: 5,
      isFood: true,
    },
    {
      name: "dagger",
      description: "A dull old dagger",
      room: 3,
      power: 3,
      isWeapon: true,
    },
  ],
  enemies: [
    {
      name: "goblin",
      description: "A mean-looking goblin",
      room: 3,
      items: [new Weapon("fork", "a bent old fork", 1)],
      strength: 10,
      health: 50,
      fidget: "The goblin scratches its nose.",
    },
    {
      name: "slime",
      description: "a goopy green ball with big eyes",
      room: 5,
      items: [],
      strength: 7,
      health: 70,
      fidget: "The slime bobs gently.",
    },
    {
      name: "scarecrow",
      description: "a very angry scarecrow",
      room: 10,
      items: [
        new Equipment("straw-hat", "a rustic straw hat to keep off the sun", 1),
      ],
      strength: 12,
      health: 50,
      fidget: "The scarecrow glares at you with its painted black eyes.",
    },
  ],
};
