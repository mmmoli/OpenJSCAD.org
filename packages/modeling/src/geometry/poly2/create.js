const plane = require('../../math/plane/')

/**
 * Represents a 2D polygon consisting of a list of ordered vertices.
 * @typedef {Object} poly2
 * @property {Array} vertices - list of ordered vertices (2D)
 */

/**
 * Creates a new polygon with initial values.
 *
 * @param {Array} [vertices] - list of vertices (2D)
 * @returns {poly2} a new polygon
 * @alias module:modeling/geometry/poly2.create
 *
 * @example
 * let polygon = create()
 */
const create = (vertices) => {
  if (vertices === undefined || vertices.length < 3) {
    vertices = [] // empty contents
  }
  return { vertices: vertices }
}

module.exports = create
