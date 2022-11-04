const { directions } = require("./GameInterface");

// Here are some command exemple to get you started.
class Bot {
  constructor() {
    console.log("Initializing your super duper mega bot.");
    // This method should be use to initialize some variables you will need throughout the game.
    this.spawned = false;

    /**
     * @type {import("./GameInterface").IPosition}
     */
    this.currPos = null;
  }

  /**
   * Here is where the magic happens, for now the moves are random. I bet you can do better ;)
   *
   * @param {import("./GameInterface").IGameTick} data
   * @returns {(import("./GameInterface").ISpawn | import("./GameInterface").ISail | import("./GameInterface").IAnchor | import("./GameInterface").IDock )}
   */
  getNextMove(data) {
    if (!this.spawned) {
      this.spawned = true;
      return this.spawn();
    }

    if (data.currentLocation === data.map.ports[0]) {
      return {
        kind: "dock",
      };
    }

    return {
      kind: "sail",
      direction: directions[data.currentTick % directions.length],
    };
  }

  spawn() {
    return {
      kind: "spawn",
      position: data.map.ports[0],
    };
  }

  /**
   *
   * @param {Array<import("./GameInterface").IPosition>} ports
   * @param {Array<Number>} visitedPortIndices
   */
  onUnvisitedPort(ports, visitedPortIndices) {
    const portIndex = ports.indexOf(
      (port) => port.column === this.currPos.column 
                && port.row === this.currPost.row
    );
    return visitedPortIndices.includes(portIndex) ;
  }
}

module.exports = { Bot };
