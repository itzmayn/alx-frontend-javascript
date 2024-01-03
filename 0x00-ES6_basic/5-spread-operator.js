/**
 * Merges two arrays and a string into a single concatenated array.
 * @param {Array} array1 - The first array for concatenation.
 * @param {Array} array2 - The second array for concatenation.
 * @param {string} string - The string to be included in the resulting array.
 * @returns {Array} - The resulting array after merging array1, array2, and string elements.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
