/**
 * Calculates the length of a vector.
 *
 * @param {vec3} vector - vector to calculate length of
 * @returns {Number} length
 * @alias module:modeling/math/vec3.length
 */
const length = (a) => {
  const x = a[0]
  const y = a[1]
  const z = a[2]
  return Math.sqrt(x * x + y * y + z * z)
}

module.exports = length
