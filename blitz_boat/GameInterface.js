/**
 * @typedef IPosition
 * @type {object}
 * @property {number} row
 * @property {number} column
 */

/**
 * @typedef IMap
 * @type {object}
 * @property {number[][]} topology
 * @property {IPosition[]} ports
 */

/**
 * @typedef IGameTick
 * @type {object}
 * @property {number} currentTick
 * @property {number} totalTicks
 * @property {IMap} map
 * @property {IPosition | null} currentLocation
 * @property {IPosition | null} spawnLocation
 * @property {number[]} visitedPortIndices
 * @property {number[]} tideSchedule
 * @property {boolean} isOver
 */


/**
 * @typedef ISpawn
 * @type {object}
 * @property {('spawn')} kind
 * @property {IPosition} position
 */

/**
 * @typedef ISail
 * @type {object}
 * @property {('sail')} kind
 * @property {string} direction
 */

/**
 * @typedef IAnchor
 * @type {object}
 * @property {('anchor')} kind
 */

/**
 * @typedef IDock
 * @type {object}
 * @property {('dock')} kind
 */

const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

class GameMessage {
  /**
   * @type {IGameTick}
   * @readonly
   */
  data;

  /**
   *
   * @param {IGameTick} rawTick
   */
  constructor(rawTick) {
    this.data = rawTick
  }
}

module.exports = {
  GameMessage,
  directions
};
