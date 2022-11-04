const { directions } = require("./GameInterface");

// Here are some command exemple to get you started.
class Bot {
  constructor() {
    console.log("Initializing your super duper mega bot.");
    // This method should be use to initialize some variables you will need throughout the game.
  }

  /**
   * Here is where the magic happens, for now the moves are random. I bet you can do better ;)
   *
   * @param {import("./GameInterface").IGameTick} data
   * @returns {(import("./GameInterface").ISpawn | import("./GameInterface").ISail | import("./GameInterface").IAnchor | import("./GameInterface").IDock )}
   */
  getNextMove(data) {
    if (!data.spawnLocation) {
      return {
        kind: "spawn",
        position: data.map.ports[0],
      };
    }

    if (data.currentLocation === data.map.ports[0]) {
      return {
        kind: "dock"
      };
    }

    return {
      kind: "sail",
      direction: directions[data.currentTick % directions.length],
    };
  }
}

module.exports = { Bot };
